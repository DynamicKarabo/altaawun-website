# PayPal Integration Setup

If you want to offer PayPal as a donation method instead of (or in addition to)
Payshap/SnapScan, this guide explains how to plug the official hosted‑button
flow into the site. The implementation is very light and works with static
hosts.

> 🚨 The snippet below uses a sample `client-id` and `hostedButtonId` – make sure
you replace both with the values from your PayPal account.

## 1. Include the PayPal SDK script

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

Wherever you render the donation UI (e.g. inside `Donate.tsx`), you can reserve
a `<div>` for the PayPal button and initialise it when needed. The snippet
below shows a minimal example that you can adapt to your modal logic:

```tsx
// ...inside your React component:
const paypalId = 'XKFBH478C5CDU'; // replace with your hosted button ID
const [showPaypalModal, setShowPaypalModal] = useState(false);

useEffect(() => {
  if (showPaypalModal && window.paypal && paypalId) {
    window.paypal.HostedButtons({
      hostedButtonId: paypalId,
    }).render(`#paypal-container-${paypalId}`);
  }
}, [showPaypalModal, paypalId]);

// JSX for the modal:
<Dialog open={showPaypalModal} onOpenChange={setShowPaypalModal}>
  <DialogContent className="sm:max-w-[400px]">
    <DialogHeader>
      <DialogTitle className="text-center">Pay with PayPal</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col items-center gap-6">
      <div id={`paypal-container-${paypalId}`}></div>
      <Button onClick={() => setShowPaypalModal(false)} ...>Close</Button>
    </div>
  </DialogContent>
</Dialog>
```

If you prefer not to use a modal you can render the `#paypal-container-…`
div inline alongside the other payment method buttons and call
`window.paypal.HostedButtons` when the component mounts.

## 3. Test the flow

1. Deploy the changes or run `npm run dev` locally with the PayPal script
   included.
2. Open the donation page and click the PayPal button; the hosted button
   should render and allow you to choose an amount.
3. Complete a small test transaction and verify it appears in your PayPal
   business dashboard.

Because this uses PayPal’s hosted flow, no sensitive tokens are stored in your
code and no server‑side component is required. The button URL itself will
contain the donation amount when the user proceeds.

## 4. Notes

* The example above disables Venmo funding and forces USD currency; adjust the
  query string in the `<script>` tag to suit your region and supported funding
  sources.
* You can dynamically generate the `hostedButtonId` on your backend if you
  maintain multiple products or want to pre‑fill amounts.

---

Add this guide to your project documentation so future editors understand how
to manage the PayPal option.