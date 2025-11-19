import { NextRequest, NextResponse } from 'next/server';
import { buildPayFastDonationUrl } from '@/lib/payfast';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount } = body;

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    // Validate minimum amount (50 cents)
    if (amount < 0.50) {
      return NextResponse.json(
        { error: 'Minimum donation amount is R0.50' },
        { status: 400 }
      );
    }

    // Get environment variables
    const merchantId = process.env.PAYFAST_MERCHANT_ID;
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY;
    const returnUrl = process.env.PAYFAST_RETURN_URL || 'https://altaawunfial.org.za';
    const cancelUrl = process.env.PAYFAST_CANCEL_URL || 'https://altaawunfial.org.za';
    const notifyUrl = process.env.PAYFAST_NOTIFY_URL;
    const sandbox = process.env.PAYFAST_SANDBOX === 'true';

    // Validate credentials
    if (!merchantId || !merchantKey) {
      console.error('PayFast credentials not configured');
      return NextResponse.json(
        { error: 'Payment gateway not configured' },
        { status: 500 }
      );
    }

    // Build the PayFast URL
    const payfastUrl = buildPayFastDonationUrl(
      {
        merchant_id: merchantId,
        merchant_key: merchantKey,
        amount,
        item_name: 'Donation to Al-Taawun Fi Al',
        item_description: 'Support our community programs',
        reference: `donation-${Date.now()}`,
        return_url: returnUrl,
        cancel_url: cancelUrl,
        notify_url: notifyUrl,
        email_confirmation: 1,
      },
      merchantKey,
      sandbox
    );

    return NextResponse.json(
      { redirectUrl: payfastUrl },
      { status: 200 }
    );
  } catch (error) {
    console.error('Donation API error:', error);
    return NextResponse.json(
      { error: 'Failed to process donation request' },
      { status: 500 }
    );
  }
}

// Webhook handler for PayFast payment notifications
export async function GET(request: NextRequest) {
  try {
    // This would handle PayFast webhook responses
    // You'll need to implement webhook verification here
    const searchParams = request.nextUrl.searchParams;
    const reference = searchParams.get('reference');

    // Log for debugging
    console.log('PayFast webhook received:', reference);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
