# PayPal Integration Setup

If you want to offer PayPal as a donation method instead of (or in addition to)
Payshap/SnapScan, this guide explains how to plug the official PayPal JS SDK
into the site and let donors pick their own amount. Earlier versions of this
project used PayPal "hosted buttons" which were tied to a fixed price; modern
implementations work by calling `paypal.Buttons` and passing the current amount
from the form.

> 🚨 All examples below use a sample `client-id` – replace it with the one from
your PayPal business account.

## 1. Create a PayPal Donate button ID

If you plan to redirect donors directly to PayPal (as shown in the sample
`Donate.tsx`) you need a *hosted button ID* that PayPal generates when you
create a donate button in your business account. Here’s how to obtain one:

1. Log in to your PayPal Business dashboard at https://www.paypal.com.
2. Navigate to **Tools → All Tools → PayPal Buttons** (or search for
   “buttons”).
3. Choose **Donate** from the list of button types.
4. Fill in the basic options (organization name, donation amount = “any amount”,
   currency, etc.) and click **Create Button**.
5. Once the button is created you’ll see HTML code. Look for the `hosted_button_id`
   variable in the snippet – it’s a string like `4USUEJSWZTL26`. Copy that value.

You can now paste that ID into `Donate.tsx` (replace the placeholder) or use it
in a URL such as

```
https://www.paypal.com/donate?hosted_button_id=YOUR_ID
```

Using a hosted button means you don’t need to include the PayPal SDK at all;
PayPal will render its own page and allow the donor to correct the amount if
you’ve left it variable.

## 2. Include the PayPal SDK script

Paste the following once into your HTML, either in the `<head>` or at the very
top of the `<body>` (before the part where you render the donation component).
Because this project is built with Vite/React, the easiest place is
`src/index.html` inside the `<head>` section.

```html
<script 
  src="https://www.paypal.com/sdk/js?client-id=BAAnkhbJyOO-NpvxgaJ9kV4QyHfsODpNzTybkyjQyWTJuB7vtMHybVdNx0TZWBCpsL_Hiv8iSrWM3RnxfI&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>
```

_Vite will automatically copy this into the production build; you don’t need to
re‑run the script on every navigation._

## 2. Add a PayPal container to the page

Wherever you render the donation UI (e.g. inside `Donate.tsx`), reserve a
`<div>` for the PayPal buttons and initialise them when needed. You should
also guard the modal open call so that the donor has already selected an
amount. Here's the React code used in the current project:

```tsx
// inside your component
const paypalCurrency = 'ZAR'; // or whatever currency you're collecting
```

You may prompt for the amount first and then instantly redirect them to PayPal. For example:

```tsx
<button
  onClick={() => {
    setSelectedAmount(null);
    setCustomAmount('');
    setPendingGateway('paypal');
    setShowAmountModal(true);
  }}
>
  PayPal
</button>
```

The `handleAmountConfirm` helper in the sample code sends the donor straight to a PayPal donation link after they choose an amount.

The key idea is that you control the order creation on the client, enabling
custom and preset amounts (including donations). This approach works without a
server component and keeps sensitive data out of your repo.

## 3. Test the flow

1. Deploy the changes or run `npm run dev` locally with the PayPal script
   included.
2. Open the donation page, select an amount (or enter a custom one) and click
   the PayPal option; the dynamic button should render showing the correct value.
3. Complete a small test transaction and verify it appears in your PayPal
   business dashboard. Your UI can mark the donation as complete in an
   `onApprove` handler.

Because this uses PayPal’s hosted flow, no sensitive tokens are stored in your
code and no server‑side component is required. The button URL itself will
contain the donation amount when the user proceeds.

## 4. Notes

* The script tag query string can disable funding sources or change currency;
  customise it for your region (e.g. `currency=ZAR`).
* Because the button is rendered client‑side, you can compute amounts, projects
  or other metadata on the fly. No backend is required unless you need to
  verify transactions server‑side.
* In this example project the PayPal option doesn’t assume an amount has
  already been chosen – clicking the PayPal icon first opens a small popup
  where the donor enters or selects the donation size, then the PayPal flow
  immediately follows. You can adapt or reuse that modal for other gateways too.

---

Add this guide to your project documentation so future editors understand how
to manage the PayPal option.