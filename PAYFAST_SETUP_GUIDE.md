# PayFast Integration for cPanel (Static Build)

Since we have moved to a static hosting environment (cPanel), the PayFast integration has been updated to work without a backend server.

## ⚙️ Configuration

The PayFast credentials are now stored in a configuration file within the source code.

**File Location:** `src/config/payfast.ts`

### How to Go Live
1.  Open `src/config/payfast.ts`.
2.  Change `sandbox: true` to `sandbox: false`.
3.  Replace the `merchantId` and `merchantKey` with your **Production** credentials from your PayFast dashboard.
4.  (Optional) Set a `passPhrase` if you have enabled it on your PayFast account, but note that for client-side integrations, this is visible in the build, so we recommend **disabling the passphrase check** on your PayFast dashboard for this specific integration to strictly rely on the Merchant ID/Key and domain validation.

```typescript
export const payfastConfig = {
  merchantId: 'YOUR_PRODUCTION_MERCHANT_ID',
  merchantKey: 'YOUR_PRODUCTION_KEY',
  passPhrase: '', // Leave empty for static sites
  sandbox: false, // Set to false for live payments
  // ... URLs
};
```

## 🚀 Deployment Steps
After updating the configuration:
1.  Run `npm run build` to generate the new production files.
2.  Zip the `dist` (or `build`) folder.
3.  Upload to cPanel as per the [Deployment Guide](./cpanel_deployment_guide.md).

## ⚠️ Security Note
In a client-side (static) integration, your Merchant ID and Key are technically visible to anyone who inspects the website code.
*   **This is normal** for simple static site integrations (similar to PayPal buttons).
*   **Do NOT** enable "Passphrase validation" on your PayFast account unless you have a backend server to sign the requests securely.
*   Ensure your **Return URL** and **Notify URL** are set correctly on your PayFast dashboard to prevent phishing.
