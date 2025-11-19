# PayFast Integration Fix - Setup Guide

## Overview

Your Vercel deployment has critical security and configuration issues with the PayFast donation integration. This guide explains the fixes and how to implement them.

## 🔴 Issues Found

1. **Hardcoded Test Credentials** - Merchant ID and Key exposed in client code
2. **No Signature Validation** - PayFast signatures not generated, transactions rejected
3. **Missing Environment Variables** - Credentials not stored in Vercel
4. **No API Layer** - Payment data exposed to frontend, no server-side validation
5. **Sandbox URLs in Production** - Using test endpoint instead of live

## ✅ Solutions Implemented

Three new files have been created:

### 1. `lib/payfast.ts` - Utility Functions
- Generates MD5 signatures for PayFast authentication
- Verifies webhook signatures
- Builds secure PayFast URLs

### 2. `app/api/payfast-donate/route.ts` - Secure API Endpoint  
- Validates donation amounts server-side
- Reads credentials from environment variables
- Generates valid PayFast signatures
- Returns redirect URL to frontend

### 3. This Guide
- Step-by-step setup instructions

## 🚀 Implementation Steps

### Step 1: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these variables (get values from PayFast):

```
PAYFAST_MERCHANT_ID=your_merchant_id
PAYFAST_MERCHANT_KEY=your_merchant_key
PAYFAST_RETURN_URL=https://altaawunfial.org.za/donation-success
PAYFAST_CANCEL_URL=https://altaawunfial.org.za/donation-cancelled
PAYFAST_NOTIFY_URL=https://your-domain.com/api/payfast-webhook
PAYFAST_SANDBOX=false
```

**For testing/staging:**
```
PAYFAST_SANDBOX=true
PAYFAST_MERCHANT_ID=10000100
PAYFAST_MERCHANT_KEY=46f0cd694581a
```

### Step 2: Update OurPrograms.tsx Component

Replace the hardcoded PayFast logic (lines 601-634) with:

```typescript
const handleDonate = async () => {
  const donationAmount = customAmount || selectedAmount;
  
  if (!donationAmount) {
    alert('Please select or enter an amount');
    return;
  }

  try {
    // Call our secure API endpoint
    const response = await fetch('/api/payfast-donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(donationAmount) })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || 'Donation processing failed');
      return;
    }

    // Redirect to PayFast
    window.location.href = data.redirectUrl;
  } catch (error) {
    console.error('Donation error:', error);
    alert('An error occurred. Please try again.');
  }
};
```

Then update the button onClick:
```typescript
<button
  onClick={handleDonate}
  className="w-full bg-[#3cb24a] hover:bg-[#2d9138] text-white py-3 px-6 rounded-lg font-medium transition-colors"
>
  Proceed to Donate
</button>
```

### Step 3: Test the Integration

1. **Local Testing:**
   ```bash
   # Create .env.local file
   PAYFAST_MERCHANT_ID=10000100
   PAYFAST_MERCHANT_KEY=46f0cd694581a
   PAYFAST_SANDBOX=true
   ```

2. **Deploy to Vercel:**
   - Push changes to main branch
   - Vercel will auto-deploy
   - Test on staging URL first

3. **Verify:**
   - Click DONATE button
   - Enter test amount (e.g., 100)
   - Should redirect to PayFast sandbox

### Step 4: Get Production Credentials

1. Visit https://www.payfast.co.za/
2. Create merchant account
3. Get Merchant ID and Merchant Key
4. Update Vercel environment variables
5. Set `PAYFAST_SANDBOX=false`

## 📋 Checklist

- [ ] Created `lib/payfast.ts` ✓
- [ ] Created `app/api/payfast-donate/route.ts` ✓  
- [ ] Added environment variables to Vercel
- [ ] Updated OurPrograms.tsx donation handler
- [ ] Tested on staging environment
- [ ] Configured production PayFast credentials
- [ ] Set PAYFAST_SANDBOX=false in production
- [ ] Tested live donations

## 🔒 Security Improvements

✓ **No hardcoded credentials** - All secrets in environment variables  
✓ **Server-side validation** - Amount validated before sending to PayFast  
✓ **MD5 signatures** - PayFast can verify request authenticity  
✓ **Webhook verification** - Can verify payment confirmations  
✓ **Error handling** - User-friendly error messages  
✓ **Minimum donation** - Prevents spam (R0.50 minimum)  

## 🐛 Troubleshooting

**Issue: "Payment gateway not configured"**
- Check environment variables are set in Vercel
- Verify PAYFAST_MERCHANT_ID and PAYFAST_MERCHANT_KEY

**Issue: Transaction rejected by PayFast**
- Verify MD5 signature is correct
- Check merchant credentials are valid
- Ensure PAYFAST_SANDBOX matches your account type

**Issue: Redirect not working**
- Check API response has `redirectUrl`
- Verify CORS is not blocking the request
- Check browser console for errors

## 📚 Resources

- PayFast Docs: https://www.payfast.co.za/developers
- Next.js API Routes: https://nextjs.org/docs/api-routes
- Environment Variables: https://vercel.com/docs/environment-variables

## Questions?

Refer to the inline code comments in:
- `lib/payfast.ts`
- `app/api/payfast-donate/route.ts`
