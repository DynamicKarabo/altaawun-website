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
* Implement an `ozow` helper similar to the Snap functionality if you take
  Ozow as well.

---

Once configured, donors can choose the Payshap option and enjoy a seamless
SnapScan experience. Happy giving!"}