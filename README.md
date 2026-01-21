# Dr Huang Clinic - Traditional Chinese Medicine Website

A modern, premium Chinese Medicine clinic website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏥 Clinic Information

- **Name:** Dr Huang Clinic
- **Address:** 71 East Main Street, Middletown, NY 10940
- **Phone:** 845-381-1106
- **Email:** sancai.acu@gmail.com

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 📁 Content Files

All clinic content is in `/lib` directory:
- `lib/site.ts` - Contact info, branding, navigation
- `lib/modalities.ts` - TCM services offered
- `lib/conditions.ts` - Conditions treated
- `lib/testimonials.ts` - Patient reviews
- `lib/blog.ts` - Blog posts

Edit these files to customize the site for any TCM clinic.

lsof -ti:3000 | xargs kill -9
rm -rf .next
npm run dev

npm install
npm run build


git add .
git commit -m "Update: your changes"
git push


curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_zv4WSdb9n8PIy2BwmvHIgBTLyRGq/q46SsAW8Az