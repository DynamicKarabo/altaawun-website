export const payfastConfig = {
    merchantId: import.meta.env.VITE_PAYFAST_MERCHANT_ID || '10000100',
    merchantKey: import.meta.env.VITE_PAYFAST_MERCHANT_KEY || '46f0cd694581a',
    passPhrase: import.meta.env.VITE_PAYFAST_PASSPHRASE || '',
    sandbox: import.meta.env.VITE_PAYFAST_SANDBOX === 'false' ? false : true,
    returnUrl: import.meta.env.VITE_PAYFAST_RETURN_URL || 'https://altaawunfial.org.za/success',
    cancelUrl: import.meta.env.VITE_PAYFAST_CANCEL_URL || 'https://altaawunfial.org.za/cancel',
    notifyUrl: import.meta.env.VITE_PAYFAST_NOTIFY_URL || 'https://altaawunfial.org.za/notify',
};
