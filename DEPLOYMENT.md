# 🚀 GitHub Pages Deployment Guide

## Quick Deploy (5 minutes)

### 1. Create GitHub Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial marketplace app"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR-USERNAME/marketplace.git
git branch -M main
git push -u origin main
```

### 2. Configure for GitHub Pages

**Update `vite.config.ts`:**

```typescript
export default defineConfig({
  base: '/marketplace/', // Change 'marketplace' to your repo name
  // ... rest stays the same
});
```

### 3. Deploy Options

**Option A: Automatic (GitHub Actions) - RECOMMENDED**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Push this file, then:
1. Go to repo **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

Every push to `main` now auto-deploys! ✨

**Option B: Manual (gh-pages package)**

```bash
# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d build"

# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

Then enable in repo **Settings** → **Pages** → Source: **gh-pages** branch

### 4. Access Your Site

After ~2 minutes:
```
https://YOUR-USERNAME.github.io/marketplace/
```

---

## Updating Your Marketplace

### Adding/Editing Items

**Method 1: CSV Workflow (Easiest)**

1. Open `tools/csv-to-json.html` in browser
2. Edit your CSV file
3. Convert to JSON
4. Replace content in `src/data/mockItems.ts`
5. Commit and push:
   ```bash
   git add src/data/mockItems.ts
   git commit -m "Update items"
   git push
   ```
6. Auto-deploys! (if using GitHub Actions)

**Method 2: Direct JSON Edit**

1. Edit `src/data/mockItems.ts`
2. Mark sold items: `status: 'sold'`
3. Add new items to the array
4. Commit and push

### Adding Photos

**Option A: Use Image Hosting**
- Upload to Imgur/ImgBB
- Use URLs in your items JSON

**Option B: Commit to Repo**
```bash
# Add photos
mkdir -p public/images/ITEM-ID
cp ~/Desktop/photo.jpg public/images/ITEM-ID/

# Commit
git add public/images
git commit -m "Add item photos"
git push
```

---

## Custom Domain (Optional)

1. Buy domain (e.g., `brisells.com`)
2. Add `public/CNAME` file:
   ```
   brisells.com
   ```
3. Configure DNS:
   - Type: **A Record**
   - Host: **@**
   - Points to:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Type: **CNAME**
   - Host: **www**
   - Points to: **YOUR-USERNAME.github.io**

4. In repo Settings → Pages → Custom domain: `brisells.com`
5. Wait 24hrs for DNS propagation

---

## Monitoring Sales

### Track with Google Analytics (Optional)

1. Get GA4 tracking ID
2. Add to `index.html` `<head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### WhatsApp Business (Optional)

Use WhatsApp Business app to:
- Track message stats
- Set auto-replies
- Create catalog

---

## Troubleshooting

**Site not updating?**
- Check GitHub Actions tab for build errors
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Wait 2-3 minutes for deployment

**404 Error?**
- Verify `base:` in vite.config.ts matches repo name
- Check Settings → Pages is enabled

**Images broken?**
- Test image URLs in browser
- Check paths are correct in JSON
- For local images, ensure in `public/images/`

**Build failing?**
- Check package.json has all dependencies
- Verify no syntax errors: `npm run build` locally
- Check GitHub Actions logs for specific error

---

## Security Notes

- Never commit sensitive data (addresses, phone numbers you don't want public)
- WhatsApp numbers are visible to anyone who visits the site
- Consider using WhatsApp Business for privacy

---

## Next Steps

After deployment:

1. ✅ Test on mobile (main use case!)
2. ✅ Share link in expat group
3. ✅ Monitor WhatsApp messages
4. ✅ Update sold items regularly
5. ✅ Track your first sale! 🎉

---

**Your marketplace is now live! 🚀**

Share: `https://YOUR-USERNAME.github.io/marketplace/`
