# 🛍️ Marketplace App - Your Personal Selling Platform

A bilingual (EN/ES) mobile-first marketplace app for selling your belongings before going digital nomad. Built with React, TypeScript, and Framer Motion.

## ✨ Features

- **📱 Mobile-First Design** - Tinder-style swipe interface
- **🌐 Bilingual Support** - Full English/Spanish translation
- **📸 Photo Carousel** - 1-5 photos per item with smooth navigation
- **🔄 Before/After Comparison** - Slider to compare your photo vs retail photo
- **💬 WhatsApp Integration** - Pre-filled messages for easy buyer contact
- **📊 CSV Management** - Easy data updates via CSV → JSON converter
- **🎨 Smooth Animations** - Framer Motion powered interactions
- **✅ Status Tracking** - Available, Sold, Pending states

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Your WhatsApp number (international format: +52XXXXXXXXXX)
- Photos of your items

### Installation

```bash
# 1. Navigate to project directory
cd marketplace-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

---

## 📝 Adding Your Items

### Method 1: CSV → JSON Converter (Recommended)

1. **Open the converter tool**:
   ```bash
   # Open tools/csv-to-json.html in your browser
   open tools/csv-to-json.html
   ```

2. **Download the CSV template** (includes example row)

3. **Fill in your items** in the CSV with columns:
   - `id` - Unique ID (e.g., BF-001, CL-042)
   - `status` - available, sold, or pending
   - `dateAdded` - YYYY-MM-DD format
   - `name_en` / `name_es` - Item names in English/Spanish
   - `description_en` / `description_es` - Descriptions
   - `category` - furniture, clothing, electronics, kitchen, bathroom, tools, sports, books, decor, office, miscellaneous
   - `condition` - new or used
   - `askPrice` - Your price in MXN
   - `photo1` - Required, path to first photo
   - `photo2-5` - Optional additional photos
   - `whatsappNumber` - Your WhatsApp (+52XXXXXXXXXX)
   - `negotiable` - true or false
   - Plus optional fields: brand, color, dimensions, retailPrice, retailPhoto, retailLink

4. **Upload CSV** to converter

5. **Download or copy** the generated JSON

6. **Replace** `src/data/mockItems.ts` with your items

### Method 2: Edit JSON Directly

Edit `src/data/mockItems.ts`:

```typescript
export const mockItems: Item[] = [
  {
    id: 'BF-001',
    status: 'available',
    dateAdded: '2024-12-14',
    name: {
      en: 'Office Chair',
      es: 'Silla de Oficina'
    },
    description: {
      en: 'Comfortable office chair...',
      es: 'Silla de oficina cómoda...'
    },
    category: 'furniture',
    condition: 'used',
    askPrice: 8500,
    photos: [
      'https://your-image-url.com/photo1.jpg',
      'https://your-image-url.com/photo2.jpg'
    ],
    seller: 'Your Name',
    whatsappNumber: '+525512345678',
    negotiable: false
  },
  // ... more items
];
```

---

## 📸 Managing Photos

### Option 1: Use Image Hosting (Easiest)
- Upload photos to [Imgur](https://imgur.com), [ImgBB](https://imgbb.com), or similar
- Copy image URLs and paste in CSV/JSON

### Option 2: GitHub Repository
1. Create `public/images` folder
2. Organize by item: `public/images/BF-001/photo1.jpg`
3. Reference as: `images/BF-001/photo1.jpg`
4. Commit and push images with your code

---

## 🎨 Customization

### Update Your WhatsApp Number

In `src/data/mockItems.ts`, set your number for all items:
```typescript
whatsappNumber: '+525512345678' // Replace with yours
```

### Change Brand Colors

Edit `src/index.css` to change the purple/pink gradient:
```css
/* Find and modify: */
.bg-gradient-to-br {
  from-purple-500 via-pink-500 to-orange-400
}
```

### Add FAQ About Negotiation

Create `src/components/FAQ.tsx` and add to MenuView.

---

## 🚢 Deployment to GitHub Pages

### Step 1: Prepare for GitHub Pages

1. **Update `vite.config.ts`**:
```typescript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your repo name
  // ... rest of config
});
```

2. **Build the app**:
```bash
npm run build
```

### Step 2: Deploy

**Option A: GitHub Actions (Automatic)**

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install and Build
        run: |
          npm install
          npm run build
      
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: build
          branch: gh-pages
```

2. Push to GitHub - auto-deploys!

**Option B: Manual Deploy**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d build"

# Deploy
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to your repo **Settings** → **Pages**
2. Source: **gh-pages** branch
3. Save
4. Visit: `https://your-username.github.io/your-repo-name/`

---

## 📱 Sharing Your Marketplace

### For CDMX Expat Group

```markdown
🛍️ Selling Everything - Going Digital Nomad!

I'm selling all my belongings before becoming a digital nomad. 
Swipe through 200+ items - furniture, electronics, clothing, and more!

👉 https://your-username.github.io/marketplace/

💬 Contact me on WhatsApp directly from each item
🏷️ All prices negotiable (some firm)
📦 Pickup in [Your Location] or delivery available
```

---

## 🔧 Troubleshooting

### Images not loading?
- Check image URLs are accessible
- For local images, ensure they're in `public/images/`
- Check browser console for errors

### CSV not converting?
- Ensure all required columns are present
- Check column names match exactly (case-sensitive)
- Verify no special characters in data

### WhatsApp not opening?
- Confirm number format: `+52XXXXXXXXXX` (country code + number, no spaces)
- Test number format: `https://wa.me/525512345678`

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📊 Project Structure

```
marketplace-app/
├── src/
│   ├── components/       # React components
│   │   ├── ItemCard.tsx  # Card with carousel & comparison
│   │   ├── CardStack.tsx # Swipe interface
│   │   ├── MenuView.tsx  # Browse all items
│   │   └── ...
│   ├── hooks/            # Custom hooks
│   │   └── useLanguage.tsx
│   ├── types/            # TypeScript types
│   │   └── item.ts
│   ├── data/             # Your items
│   │   └── mockItems.ts
│   ├── utils/            # Utilities
│   │   └── translations.ts
│   └── lib/              # UI components (shadcn)
├── tools/
│   └── csv-to-json.html  # Data management tool
├── public/
│   └── images/           # Your item photos
└── package.json
```

---

## 🎯 Roadmap

- [ ] Launch with first batch of items
- [ ] Get first sale! 🎉
- [ ] Add visible price reductions (Week 3-4)
- [ ] Add "Free" category
- [ ] Add FAQ section for negotiation
- [ ] Track which items get most interest

---

## 💡 Tips for Success

1. **Take Good Photos** - Well-lit, multiple angles, show condition
2. **Be Honest** - Accurate descriptions build trust
3. **Price Competitively** - Check similar items online
4. **Respond Fast** - Quick WhatsApp responses close sales
5. **Update Status** - Mark items as sold/pending promptly
6. **Bundle Deals** - Offer discounts for multiple items

---

## 🆘 Support

Questions? Issues? 
- Check `/tools/csv-to-json.html` for data formatting help
- Review sample items in `src/data/mockItems.ts`
- Test locally before deploying: `npm run dev`

---

## 📅 Timeline Tracker

- **Launch Date**: _____________
- **First Sale**: _____________
- **Items Sold**: _____ / 200+
- **Going Nomad**: _____________

---

**Built with ❤️ for the digital nomad journey**

Good luck with your sales! 🚀
