# Final Implementation Guide - Al-Taawun Fi Al Website

## Project Completion Checklist

This guide contains everything you need to complete the website updates. All the code files have been prepared - you just need to follow the steps below.

---

## STEP 1: Upload PDF Files to GitHub

**Location:** `public/pdfs/` folder (already created)

### What to do:
1. Go to: https://github.com/DynamicKarabo/altaawun-website/tree/main/public/pdfs
2. Click "Add file" → "Upload files"
3. Upload your two PDF files:
   - `2024-Annual-Report.pdf` (or your actual filename)
   - `Financial-Statements-2024.pdf` (or your actual filename)
4. Commit with message: "Upload Annual Report and Financial Statements PDFs"

### Get the PDF URLs:
After uploading, GitHub will show the files. For each PDF:
1. Click the file in GitHub
2. Click the "Raw" button
3. Copy the URL from the address bar

**Format will be:** `https://raw.githubusercontent.com/DynamicKarabo/altaawun-website/main/public/pdfs/YOUR-FILENAME.pdf`

---

## STEP 2: Update AboutUs Component (Add PDF Links)

**File to edit:** `ALTAAWUNredesign1.1 (Community) (16)/src/components/AboutUs.tsx`

**Lines to find:** ~107 and ~114

### Current Code (Lines 102-115):
```tsx
<a
  href="#"
  className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100"
>
  <FileText size={20} className="mr-2" />
  2024 Annual Report
</a>
<a
  href="#"
  className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100"
>
  <FileText size={20} className="mr-2" />
  Financial Statements
</a>
```

### Updated Code (Replace with this):
```tsx
<a
  href="https://raw.githubusercontent.com/DynamicKarabo/altaawun-website/main/public/pdfs/2024-Annual-Report.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100"
>
  <FileText size={20} className="mr-2" />
  2024 Annual Report
</a>
<a
  href="https://raw.githubusercontent.com/DynamicKarabo/altaawun-website/main/public/pdfs/Financial-Statements-2024.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100"
>
  <FileText size={20} className="mr-2" />
  Financial Statements
</a>
```

**Key changes:**
- Replace `href="#"` with actual GitHub PDF URLs
- Add `target="_blank"` to open in new tab
- Add `rel="noopener noreferrer"` for security

---

## STEP 3: Update Donation Component (Add Payment Icons)

**File to edit:** Update the donation modal in your components

### Option A: Using Emoji (Simpler - No Dependencies)

Replace the payment method display section with:

```tsx
{paymentMethod === 'payfast' && <span className="text-2xl">💳</span>}
{paymentMethod === 'visa' && <span className="text-2xl">💳</span>}
{paymentMethod === 'mastercard' && <span className="text-2xl">💳</span>}
{paymentMethod === 'paypal' && <span className="text-2xl">🅿️</span>}
```

### Option B: Using react-icons (Professional - Recommended)

**Step 1:** Install react-icons (if not already installed):
```bash
npm install react-icons
```

**Step 2:** Add import at top of component:
```tsx
import { SiPaypal, SiVisa, SiMastercard } from 'react-icons/si';
```

**Step 3:** Use icons in payment method display:
```tsx
{paymentMethod === 'payfast' && <span className="text-2xl">💳 PayFast</span>}
{paymentMethod === 'visa' && <SiVisa className="text-2xl text-blue-600" />}
{paymentMethod === 'mastercard' && <SiMastercard className="text-2xl text-orange-600" />}
{paymentMethod === 'paypal' && <SiPaypal className="text-2xl text-blue-500" />}
```

> **PayPal integration:** once you choose PayPal as an option, refer to
> `PAYPAL_SETUP_GUIDE.md` for the script snippet and rendering instructions.  
> It explains where to place the SDK tag and how to render the hosted button in
your donations modal.

---

## STEP 4: Add Environment Variables to Vercel

**Go to:** Vercel Project Settings → Environment Variables

### Add these variables:

```
PAYFAST_MERCHANT_ID=your_merchant_id
PAYFAST_MERCHANT_KEY=your_merchant_key
PAYFAST_RETURN_URL=https://your-domain.com/donate
PAYFAST_CANCEL_URL=https://your-domain.com/donate
PAYFAST_NOTIFY_URL=https://your-domain.com/api/payfast-notify
NEXT_PUBLIC_PAYFAST_URL=https://www.payfast.co.za/eng/process

# SnapScan (Payshap) variables (optional - enable after you have a snap ID)
VITE_SNAP_ENABLED=true
VITE_SNAP_ID=your_snap_id_here
```

(see `SNAP_SETUP_GUIDE.md` for instructions on enabling the Payshap/SnapScan
option once you have a valid Snap ID)

**To get PayFast credentials:**
1. Log in to PayFast.io
2. Go to Settings → API Key
3. Copy Merchant ID and Merchant Key

---

## STEP 5: Deploy Changes

### Local Testing:
```bash
npm run dev
```

### Deploy to Vercel:
1. Commit all changes to GitHub
2. Vercel will auto-deploy (or manually trigger in Vercel dashboard)
3. Test the donation flow
4. Verify PDF links work

---

## Testing Checklist

- [ ] PDF links in AboutUs open correctly
- [ ] Payment method icons display
- [ ] Zakat calculator works (2.5% of amount)
- [ ] Donation amount displays correctly
- [ ] PayFast form submits without errors
- [ ] Mobile responsive design maintained

---

## Files Previously Created (For Reference)

These files were prepared earlier and are ready to use:

1. **lib/payfast.ts** - PayFast utility functions
2. **app/api/payfast-donate/route.ts** - Secure donation API
3. **DONATION_COMPONENT_UPDATE.tsx** - Complete donation modal code
4. **PAYFAST_SETUP_GUIDE.md** - Detailed PayFast setup
5. **COMPLETE_DONATION_IMPLEMENTATION.md** - Full implementation details

---

## Troubleshooting

### PDF Links Not Working
- Check the URL format in GitHub raw link
- Ensure file was uploaded to `public/pdfs/` folder
- Clear browser cache

### PayFast Errors
- Verify environment variables are set in Vercel
- Check merchant credentials
- Ensure API endpoint is accessible

### Icons Not Showing
- If using react-icons: Run `npm install react-icons`
- Verify import statements
- Check Tailwind CSS is applied

---

## Support

If you need help with any step:
1. Check the existing documentation files
2. Review the code comments
3. Test in development mode first (npm run dev)

All security updates and best practices have been implemented. The system is ready for production deployment.
