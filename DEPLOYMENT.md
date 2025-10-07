# Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Vercel static site deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

### Option 3: Drag & Drop

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Zip the project** (excluding node_modules):
   ```bash
   # On Windows
   powershell Compress-Archive -Path . -DestinationPath afleuncer-demo.zip -Exclude node_modules
   ```

3. **Upload to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the zip file

## 📁 Project Structure

```
├── public/                 # Static files
│   ├── index.html         # Landing page
│   ├── feed.html          # Demo feed
│   ├── about.html         # About page
│   ├── privacy.html       # Privacy policy
│   └── styles.css         # CSS styles
├── api/                   # Serverless functions
│   └── redirect.js        # Click tracking endpoint
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── DEPLOYMENT.md          # This file
```

## 🔗 Click Tracking

The click tracking works via Vercel serverless functions:

- **Endpoint**: `/r/{post_id}`
- **Function**: `api/redirect.js`
- **Logs**: Available in Vercel dashboard

### Demo Links:
- `/r/earbuds-001` → Premium Wireless Earbuds
- `/r/keyboard-002` → Ergonomic Mechanical Keyboard  
- `/r/yogamat-003` → Eco-Friendly Yoga Mat

## 🌐 Live URLs

After deployment, your site will be available at:
- **Production**: `https://your-project-name.vercel.app`
- **Preview**: `https://your-project-name-git-branch.vercel.app`

## 📊 Monitoring

- **Function Logs**: Vercel Dashboard → Functions tab
- **Analytics**: Vercel Dashboard → Analytics tab
- **Performance**: Vercel Dashboard → Speed Insights

## 🔧 Environment Variables

No environment variables required for basic functionality.

For production Sovrn integration, add:
```
SOVRN_API_KEY=your_api_key
SOVRN_PUBLISHER_ID=your_publisher_id
```

## ✅ Deployment Checklist

- [ ] All HTML files in `public/` directory
- [ ] `vercel.json` configuration present
- [ ] `package.json` with dependencies
- [ ] `api/redirect.js` serverless function
- [ ] Navigation links updated for static deployment
- [ ] Click tracking endpoints working
- [ ] FTC disclosures on all product posts
