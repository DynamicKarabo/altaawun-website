# SnapScan (Payshap) Setup Guide

This guide walks you through enabling the Payshap/SnapScan gateway on the donation
page. The integration is entirely client‑side and only requires your Snap ID —
the  numeric identifier SnapScan gives you when you register as a merchant.

## 1. Obtain your Snap ID

- Sign in to the SnapScan merchant dashboard.
- Copy the **Snap ID** (a long number) from your account settings.

## 2. Configure the repository

The project reads configuration from `src/config/snap.ts`, which in turn can
use environment variables for security. By default the config looks like:

```ts
export const snapConfig = {
    enabled: import.meta.env.VITE_SNAP_ENABLED === 'true' || false,
    snapId: import.meta.env.VITE_SNAP_ID || '',
};
```

You can either edit the file directly for local development, or set the
following variables before building (e.g. in `.env` or on your CI server):

```
VITE_SNAP_ENABLED=true
VITE_SNAP_ID=1234567890123456   # replace with your real Snap ID
```

> **Security note:** the Snap ID is public in any case; it will be baked into the
> generated JavaScript. Do not treat it as a secret, but avoid committing live
> credentials into a public repo if you can.

## 3. How the flow works

- Users pick an amount on `/donate` as usual.
- When they click the **Payshap** button a modal appears showing a QR code and
  an “Open in SnapScan” button.
- Visiting the link or scanning the QR launches the SnapScan app with the
  amount pre‑filled.
- After paying, donors simply return to the site and hit **Make Another Donation**
  (or your thank‑you screen) to complete the UX.

No server‑side code is required. For better validation you could add a small
backend that calls SnapScan’s merchant API, but that’s optional.

## 4. Testing & deployment

1. Configure the variables and build the project (`npm run build`).
2. Deploy as usual to your static hosting provider.
3. Scan the QR code with a phone or click the link to open SnapScan. A test
   transaction should appear in your Snap dashboard.
4. Confirm that returning to the site resets the form/thanks screen correctly.

## 5. Further enhancements (optional)

* Add donor metadata by signing requests on a backend and querying the Snap API.
* Automatically poll your database/API to detect when the payment has cleared
  and show the “thank you” message without manual interaction.
* Add a similar helper for any other gateway you support (e.g. PayPal – see
  `PAYPAL_SETUP_GUIDE.md`).

## 6. After you have SnapScan configured

Once your Snap ID is in place and the site is deployed:

1. Do a full build (`npm run build`) so the new configuration is baked in.
2. Deploy the updated `build/` (or `dist/`) folder to your hosting provider.
3. On the live site, navigate to **Donate** and choose an amount.
4. Click **Payshap** – the modal will show a QR code and a link pointing at
   `https://app.snapscan.io/merchant/<your-id>?amount=XX`. You can scan this
   with a phone or tap the link to open the SnapScan app.
5. Complete the transaction in SnapScan. It will appear in your Snap merchant
   dashboard immediately.
6. Return to the site; the thank‑you UI will show thanks or you can tell
   donors to click “Make Another Donation” to reset the form.

This flow requires no backend at all; the amount and snap ID are encoded in the
URL/QR. If you ever need to verify payments you can build a small API that
queries SnapScan’s merchant endpoint, but at the simplest level nothing more is
needed.

### Adding other gateways

You can support additional payment methods by adding new modals/handlers to
`Donate.tsx` and, if needed, configuration files analogous to
`snap.ts`. For PayPal in particular there is a separate guide (`PAYPAL_SETUP_GUIDE.md`) that explains how to drop the SDK script into the page and render a hosted button.

---

Once configured, donors can choose the Payshap option and enjoy a seamless
SnapScan experience. Happy giving!}