# ⚡ QUICK START - Get Your Marketplace Running in 10 Minutes!

**Current Time**: Saturday, December 14, 2024
**Goal**: Launch by tomorrow, first sale by end of week!

---

## 📦 Step 1: Extract & Install (2 minutes)

```bash
# 1. Extract the downloaded folder
cd marketplace-app

# 2. Install dependencies
npm install
```

---

## 🔧 Step 2: Add Your WhatsApp Number (1 minute)

Edit `src/data/mockItems.ts` - Replace ALL instances of:
```typescript
whatsappNumber: '+525512345678'  // ← Replace with YOUR number
```

With your actual WhatsApp in international format:
```typescript
whatsappNumber: '+52XXXXXXXXXX'  // Your number
```

---

## 📸 Step 3: Add Your Items (Method A or B)

### METHOD A: CSV Upload (Recommended for 200+ items)

1. Open `tools/csv-to-json.html` in your browser
2. Click "Download CSV Template"
3. Fill in your items in the CSV
4. Upload CSV to converter
5. Copy generated JSON
6. Replace content in `src/data/mockItems.ts`

### METHOD B: Edit JSON Directly (Quick start with few items)

Edit `src/data/mockItems.ts` and add your items following the examples.

**For now, you can use the example items to test!**

---

## 🚀 Step 4: Launch Locally (1 minute)

```bash
npm run dev
```

Open browser to: `http://localhost:3000`

**Test on your phone!** (same WiFi network)
- Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac)
- Visit: `http://YOUR-IP:3000` on phone

---

## 📱 Step 5: Deploy to GitHub Pages (5 minutes)

### A. Create GitHub Repository

1. Go to [github.com](https://github.com) and create new repo called "marketplace"
2. In your terminal:

```bash
git init
git add .
git commit -m "🚀 Launch marketplace"
git remote add origin https://github.com/YOUR-USERNAME/marketplace.git
git branch -M main
git push -u origin main
```

### B. Setup Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### C. Enable GitHub Pages

1. Go to repo **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

**Wait ~2 minutes, then visit**:
```
https://YOUR-USERNAME.github.io/marketplace/
```

---

## 🎯 Step 6: Share with Your Expat Group!

**Post this in your CDMX expat group**:

```
🛍️ MOVING SALE - Everything Must Go!

I'm selling ALL my belongings before going digital nomad!
Browse 200+ items in an easy swipe interface:

👉 https://YOUR-USERNAME.github.io/marketplace/

Features:
✅ Swipe through items like Tinder
✅ See multiple photos + compare with retail
✅ Contact me instantly via WhatsApp
✅ Updated daily as items sell
✅ Bilingual (English/Spanish)

Categories: Furniture, Electronics, Clothing, Kitchen, and more!

📍 Pickup: [Your Location]
🚚 Delivery: Available in CDMX
💬 Questions? WhatsApp me from any item!

Sale ends: [Your deadline]
```

---

## ✅ Daily Tasks

**Every day until sold out:**

1. Check WhatsApp messages
2. Mark sold items in CSV/JSON (`status: 'sold'`)
3. Add new items
4. Push updates: `git add . && git commit -m "Update items" && git push`
5. Auto-deploys!

---

## 📊 Track Your Progress

```
LAUNCH DATE: _______________
FIRST SALE:  _______________
ITEMS SOLD:  _____ / 200+
```

---

## 🆘 Quick Help

**Site not showing?**
- Check GitHub Actions tab for errors
- Wait 2-3 minutes after push
- Clear browser cache

**Images not loading?**
- Use full URLs from Imgur/ImgBB
- Or put in `public/images/` folder

**WhatsApp not working?**
- Format: `+52XXXXXXXXXX` (country code + number)
- Test: `https://wa.me/525512345678`

**Need to add 200 items fast?**
1. Take photos (phone is fine!)
2. Upload to Imgur albums
3. Use CSV template
4. Batch fill in spreadsheet
5. Convert & deploy!

---

## 🎉 You're Ready!

Your marketplace is ready to launch. Remember:

- **Today**: Get it live
- **This Week**: First sale 🎯
- **Next 3 Months**: Sell everything
- **Then**: Digital nomad life! ✈️

**GO TIME! 🚀**

Questions? Check README.md or DEPLOYMENT.md for detailed guides.

---

**Time to launch: ~10 minutes**
**Time to first sale: This week!**
**Time to freedom: 3 months!**
