# Vercel Deployment Guide for Dr. Huang Clinic

## Overview
This guide will walk you through deploying your Traditional Chinese Medicine clinic website to Vercel, the recommended platform for Next.js applications.

---

## ✅ Prerequisites

Before deploying, ensure you have:
- ✅ A GitHub account (free)
- ✅ Your website code (current directory)
- ✅ A Vercel account (free - sign up at vercel.com)
- ✅ All builds passing locally (`npm run build` ✅)

---

## 📋 Step-by-Step Deployment

### **Step 1: Initialize Git Repository (If Not Already Done)**

```bash
# Navigate to your project
cd /Users/johntang/Desktop/clients/chinese-medicine/dr-huang-clinic

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Dr Huang Clinic website"
```

### **Step 2: Create GitHub Repository**

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon → "New repository"
3. Name it: `dr-huang-clinic` or `chinese-medicine-clinic`
4. Make it **Private** (recommended for client work)
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

### **Step 3: Push Code to GitHub**

GitHub will show you commands. Use these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/dr-huang-clinic.git

# Push code
git branch -M main
git push -u origin main
```

### **Step 4: Deploy to Vercel**

#### **Option A: Using Vercel Website (Recommended)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Click "Import Project" or "Add New..."
5. Select "Import Git Repository"
6. Find and select your `dr-huang-clinic` repository
7. Vercel will auto-detect it's a Next.js project
8. Click "Deploy"

Vercel will:
- Install dependencies
- Build your site
- Deploy to a URL like `dr-huang-clinic.vercel.app`

#### **Option B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? dr-huang-clinic
# - Directory? ./
# - Override settings? No
```

### **Step 5: Configure Project Settings**

In Vercel dashboard:

1. Go to your project settings
2. **General**:
   - Project Name: `Dr Huang Clinic`
   - Framework: Next.js (auto-detected)
   - Root Directory: `./`
3. **Git**:
   - Production Branch: `main`
   - Auto-deploy: Enabled ✅

---

## 🌐 Custom Domain Setup

### **Step 1: Get Your Domain**

If you don't have one:
- Purchase from: Namecheap, GoDaddy, Google Domains, etc.
- Recommended: `drhuangclinic.com` or `huangacupuncture.com`

### **Step 2: Add Domain in Vercel**

1. In Vercel project dashboard
2. Go to "Settings" → "Domains"
3. Click "Add"
4. Enter your domain: `drhuangclinic.com`
5. Click "Add"

### **Step 3: Configure DNS**

Vercel will show you DNS records. In your domain registrar:

**For Root Domain** (`drhuangclinic.com`):
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For WWW** (`www.drhuangclinic.com`):
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Wait**: DNS propagation can take 1-48 hours (usually <1 hour)

### **Step 4: SSL Certificate**

Vercel automatically provides:
- ✅ Free SSL certificate (HTTPS)
- ✅ Auto-renewal
- ✅ Force HTTPS redirect

---

## 🔄 Making Updates After Deployment

### **Automatic Deployments**

Every time you push to GitHub, Vercel automatically:
1. Detects the push
2. Builds your site
3. Deploys the new version
4. Takes ~2-3 minutes

### **Update Workflow**:

```bash
# Make your changes locally
# Test locally
npm run dev

# Build to verify
npm run build

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push

# Vercel automatically deploys! 🚀
```

---

## 📧 Environment Variables

If you add features requiring API keys or secrets:

1. In Vercel dashboard → "Settings" → "Environment Variables"
2. Add variables (e.g., `DATABASE_URL`, `API_KEY`)
3. Click "Save"
4. Redeploy for changes to take effect

**Current Project**: No environment variables needed! ✅

---

## 🎯 Pre-Deployment Checklist

Before going live:

### **Content**:
- [ ] Add real images (hero, blog, gallery, modalities)
- [ ] Upload real video content to YouTube
- [ ] Update blog posts with actual videos
- [ ] Replace placeholder case study images
- [ ] Review all text content for accuracy

### **SEO**:
- [ ] Verify all page titles and descriptions
- [ ] Check meta tags in layout.tsx
- [ ] Ensure LocalBusinessSchema has correct info
- [ ] Test social sharing cards

### **Legal**:
- [ ] Review medical disclaimers
- [ ] Add privacy policy (if collecting data)
- [ ] Add terms of service (if needed)
- [ ] Ensure HIPAA compliance for testimonials

### **Contact**:
- [ ] Test contact form (when added)
- [ ] Verify phone number works
- [ ] Verify email address works
- [ ] Test "Get Directions" link

### **Analytics** (Optional):
- [ ] Add Google Analytics
- [ ] Add Facebook Pixel
- [ ] Set up conversion tracking

---

## 🔧 Vercel Project Settings

### **Recommended Settings**:

**Build & Development**:
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)
- Development Command: `npm run dev` (default)

**Environment**:
- Node.js Version: 18.x or 20.x (auto-detected)

**Deployment Protection**:
- Password Protection: Optional (for staging)
- Vercel Authentication: Optional

---

## 📊 Monitoring & Analytics

### **Vercel Built-in Analytics**:
- Free tier includes:
  - Page view analytics
  - Top pages
  - Top referrers
  - Deployment history
  - Build logs

### **Upgrade to Pro** ($20/month):
- Real User Monitoring
- Web Vitals tracking
- Detailed analytics
- Team collaboration
- Priority support

---

## 🚨 Troubleshooting

### **Build Fails**:
```bash
# Check locally first
npm run build

# If it works locally but fails on Vercel:
# - Check Node.js version match
# - Clear Vercel build cache
# - Check build logs in Vercel dashboard
```

### **404 Errors**:
- Ensure all routes are in `/app` directory
- Check file naming (page.tsx, not Page.tsx)
- Verify imports use correct paths

### **Images Not Loading**:
- Images must be in `/public` directory
- Paths start with `/` (e.g., `/images/hero.jpg`)
- Check file extensions match

### **Slow First Load**:
- Normal for cold starts (serverless)
- Subsequent loads are instant
- Consider Vercel Pro for guaranteed uptime

---

## 💰 Costs

### **Vercel Free Tier** (Perfect for this site):
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Analytics (basic)
- ✅ Preview deployments
- ✅ **Free for personal/small business!**

### **Your Site**:
- Static pages (very efficient)
- Low bandwidth usage
- **Should stay FREE!** 🎉

---

## 🎯 Going Live Checklist

1. ✅ Build passes locally
2. ✅ All content reviewed
3. ✅ Images added
4. ✅ Contact info verified
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel
7. ✅ Test preview URL
8. ✅ Add custom domain
9. ✅ Configure DNS
10. ✅ Wait for SSL (auto)
11. ✅ Test live site
12. ✅ Announce to patients!

---

## 📞 Support

### **Vercel Support**:
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Status: https://vercel-status.com

### **Need Help?**
- Vercel has excellent documentation
- Next.js discord community
- GitHub issues for bugs

---

## 🎉 Quick Deploy Command

**Fastest way to deploy right now:**

```bash
# From your project directory
npx vercel

# Follow prompts, takes ~3 minutes
# You'll get a live URL instantly!
```

---

## 📝 Post-Deployment

### **Share Your Site**:
- Google Business Profile
- Social media
- Email signature
- Business cards
- Directory listings

### **SEO**:
- Submit to Google Search Console
- Submit sitemap
- Monitor search rankings
- Build backlinks

### **Maintenance**:
- Regular content updates (blog)
- Add patient testimonials
- Update gallery photos
- Keep info current

---

## 🚀 Summary

**Easiest Path**:
1. Push code to GitHub (5 minutes)
2. Connect Vercel to GitHub (2 minutes)
3. Click "Deploy" (3 minutes)
4. **Your site is live!** ✅

**Total time**: ~10 minutes  
**Cost**: FREE  
**Difficulty**: Easy (Vercel handles everything)

---

Your beautiful Dr. Huang Clinic website is ready to go live! 🎉

**Next command to run**:
```bash
git init
git add .
git commit -m "Complete Dr Huang Clinic website"
```

Then create GitHub repo and deploy to Vercel! 🚀
