# AboutUs & Donation Updates Guide

## Overview

Two quick updates to add professionalism and functionality:
1. **PDF Links** - Annual Report & Financial Statements
2. **Payment Icons** - PayFast, PayPal, Visa, Mastercard on donation modal

---

## Update 1: Add PDF Links to AboutUs Component

### Location
`ALTAAWUNredesign1.1 (Community) (16)/src/components/AboutUs.tsx`

### Current Code (Lines ~142-156)
```typescript
<div className="flex flex-wrap gap-4">
  <a
    href="#"  // <-- Change this
    className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
  >
    <FileText size={20} className="mr-2" />
    2024 Annual Report
  </a>
  <a
    href="#"  // <-- Change this
    className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
  >
    <FileText size={20} className="mr-2" />
    Financial Statements
  </a>
</div>
```

### Updated Code
```typescript
<div className="flex flex-wrap gap-4">
  <a
    href="/pdfs/2024-Annual-Report.pdf"  // <-- UPDATED
    download
    className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
  >
    <FileText size={20} className="mr-2" />
    2024 Annual Report
  </a>
  <a
    href="/pdfs/Financial-Statements-2024.pdf"  // <-- UPDATED
    download
    className="inline-flex items-center px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
  >
    <FileText size={20} className="mr-2" />
    Financial Statements
  </a>
</div>
```

### Steps

1. **Place PDF files in your public folder:**
   - Create folder: `public/pdfs/`
   - Add `2024-Annual-Report.pdf`
   - Add `Financial-Statements-2024.pdf`

2. **Update the links:**
   - Change `href="#"` to `href="/pdfs/2024-Annual-Report.pdf"`
   - Change `href="#"` to `href="/pdfs/Financial-Statements-2024.pdf"`
   - Add `download` attribute to both links (enables PDF download)

3. **Alternative: External URLs**
   If hosting PDFs elsewhere (e.g., Google Drive, Dropbox):
   ```typescript
   href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
   // or
   href="https://example.com/pdfs/Annual-Report.pdf"
   ```

---

## Update 2: Add Payment Icons to Donation Modal

### Location
`DONATION_COMPONENT_UPDATE.tsx` - Payment badges section

### Current Code (Lines ~150-160)
```typescript
{/* Supported Methods Badge */}
<div className="mt-4 text-center">
  <p className="text-xs text-gray-500">We accept all major payment methods</p>
  <div className="flex justify-center gap-2 mt-2">
    <span className="text-lg">💳</span>
    <span className="text-lg">🏦</span>
    <span className="text-lg">💰</span>
  </div>
</div>
```

### Enhanced Code with Real Payment Icons
```typescript
{/* Supported Methods Badge */}
<div className="mt-4 text-center">
  <p className="text-xs text-gray-500">We accept all major payment methods</p>
  <div className="flex justify-center gap-3 mt-2 flex-wrap">
    {/* PayFast */}
    <div className="flex flex-col items-center">
      <span className="text-2xl">💳</span>
      <span className="text-xs text-gray-500 mt-1">PayFast</span>
    </div>
    {/* PayPal */}
    <div className="flex flex-col items-center">
      <span className="text-2xl">🅿️</span>
      <span className="text-xs text-gray-500 mt-1">PayPal</span>
    </div>
    {/* Visa */}
    <div className="flex flex-col items-center">
      <span className="text-2xl">💳</span>
      <span className="text-xs text-gray-500 mt-1">Visa</span>
    </div>
    {/* Mastercard */}
    <div className="flex flex-col items-center">
      <span className="text-2xl">💳</span>
      <span className="text-xs text-gray-500 mt-1">MC</span>
    </div>
  </div>
</div>
```

### Option B: Using Import Icons (If you want real logos)

**Install icon library:**
```bash
npm install react-icons
```

**Updated Code with react-icons:**
```typescript
import { SiPaypal, SiVisa, SiMastercard } from 'react-icons/si';

// In your component:
<div className="mt-4 text-center">
  <p className="text-xs text-gray-500">We accept all major payment methods</p>
  <div className="flex justify-center gap-4 mt-2 flex-wrap">
    {/* PayFast */}
    <div className="flex flex-col items-center gap-1">
      <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">PF</div>
      <span className="text-xs text-gray-600">PayFast</span>
    </div>
    {/* PayPal */}
    <div className="flex flex-col items-center gap-1">
      <SiPaypal size={32} className="text-blue-600" />
      <span className="text-xs text-gray-600">PayPal</span>
    </div>
    {/* Visa */}
    <div className="flex flex-col items-center gap-1">
      <SiVisa size={32} className="text-blue-600" />
      <span className="text-xs text-gray-600">Visa</span>
    </div>
    {/* Mastercard */}
    <div className="flex flex-col items-center gap-1">
      <SiMastercard size={32} className="text-red-600" />
      <span className="text-xs text-gray-600">Mastercard</span>
    </div>
  </div>
</div>
```

---

## Implementation Checklist

### AboutUs Updates
- [ ] Create `public/pdfs/` folder
- [ ] Add PDF files (or get links)
- [ ] Update `href` in Annual Report button
- [ ] Update `href` in Financial Statements button
- [ ] Add `download` attribute to both
- [ ] Test links work

### Donation Updates
- [ ] Update payment methods badge with labels
- [ ] Option A: Use emoji (simple, no installation)
- [ ] Option B: Install react-icons (more professional)
- [ ] Test on mobile (responsive)
- [ ] Verify icons display correctly

---

## File Naming Convention

If hosting PDFs locally, use these names:
```
public/pdfs/
  ├── 2024-Annual-Report.pdf
  ├── Financial-Statements-2024.pdf
  ├── Zakat-Information.pdf (optional)
  └── Impact-Report-2024.pdf (optional)
```

---

## SEO Tips

**For PDF links:**
```html
<!-- Add alt text -->
<a 
  href="/pdfs/2024-Annual-Report.pdf" 
  download 
  title="Download 2024 Annual Report PDF"
  aria-label="Download 2024 Annual Report"
>
  <FileText size={20} className="mr-2" />
  2024 Annual Report
</a>
```

---

## Mobile Responsiveness

The payment icons section is responsive:
- Desktop: Icons in a row
- Mobile: Icons wrap to multiple lines (using `flex-wrap`)

Test on different devices to ensure it displays well.

---

## Testing URLs

After implementation, test these:
1. Annual Report PDF link
2. Financial Statements PDF link
3. Download starts when clicking
4. Payment method badges visible
5. Mobile responsive

---

## Questions?

Refer to:
- Next.js Static Files: https://nextjs.org/docs/app/building-your-application/optimizing/static-assets
- React Icons: https://react-icons.github.io/react-icons
- PDF Handling: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/download
