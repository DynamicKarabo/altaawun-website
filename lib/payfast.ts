import crypto from 'crypto';

export interface PayFastParams {
  merchant_id: string;
  merchant_key: string;
  amount: number;
  item_name: string;
  item_description?: string;
  reference?: string;
  return_url: string;
  cancel_url: string;
  notify_url?: string;
  email_confirmation?: number;
  confirmation_address?: string;
}

/**
 * Generate PayFast signature for request authentication
 * @param params PayFast parameters
 * @param merchantKey Your PayFast merchant key
 * @returns MD5 signature hash
 */
export function generatePayFastSignature(
  params: Record<string, string | number | undefined>,
  merchantKey: string
): string {
  // Filter out undefined values and sort alphabetically
  const filteredParams = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== '')
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  // Append merchant key
  const stringToSign = `${filteredParams}&merchant_key=${merchantKey}`;

  // Generate MD5 hash
  return crypto.createHash('md5').update(stringToSign).digest('hex');
}

/**
 * Verify PayFast webhook signature
 * @param data Webhook data received from PayFast
 * @param signature Signature from webhook
 * @param merchantKey Your PayFast merchant key
 * @returns true if signature is valid
 */
export function verifyPayFastSignature(
  data: Record<string, string>,
  signature: string,
  merchantKey: string
): boolean {
  const generatedSignature = generatePayFastSignature(data, merchantKey);
  return generatedSignature === signature;
}

/**
 * Build PayFast donation URL
 */
export function buildPayFastDonationUrl(
  params: PayFastParams,
  merchantKey: string,
  sandbox: boolean = false
): string {
  const baseUrl = sandbox
    ? 'https://sandbox.payfast.co.za/eng/process'
    : 'https://www.payfast.co.za/eng/process';

  const formParams = {
    merchant_id: params.merchant_id,
    merchant_key: params.merchant_key,
    amount: params.amount.toFixed(2),
    item_name: params.item_name,
    item_description: params.item_description || '',
    reference: params.reference || '',
    return_url: params.return_url,
    cancel_url: params.cancel_url,
    notify_url: params.notify_url || '',
    email_confirmation: params.email_confirmation || 1,
    confirmation_address: params.confirmation_address || '',
  };

  const signature = generatePayFastSignature(formParams, merchantKey);

  const queryParams = new URLSearchParams();
  Object.entries(formParams).forEach(([key, value]) => {
    if (value) queryParams.append(key, value.toString());
  });
  queryParams.append('signature', signature);

  return `${baseUrl}?${queryParams.toString()}`;
}
