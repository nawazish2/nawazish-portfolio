# Deployment Guide for nawazishkhan.in

## Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `nawazish-portfolio` (or any name you prefer)
3. Keep it Public or Private (your choice)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

## Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd /Users/nawazish/nawazish-portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/nawazish2/nawazish-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (FREE)

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click **"Add New Project"**
3. Import your `nawazish-portfolio` repository
4. Vercel will auto-detect it's a Next.js project
5. Click **"Deploy"**
6. Wait for deployment to complete (~2 minutes)

### Add Environment Variables (for contact form)

1. In Vercel dashboard, go to your project
2. Settings → Environment Variables
3. Add:
   - Name: `RESEND_API_KEY`
   - Value: (get from resend.com - see below)
   - Environment: All (Production, Preview, Development)

### Get Resend API Key (for contact form)

1. Go to [resend.com](https://resend.com)
2. Sign up (free)
3. Go to API Keys
4. Create new API key
5. Copy and paste into Vercel environment variables

## Step 4: Connect Your Domain (nawazishkhan.in)

### In Vercel:

1. Go to your project → Settings → Domains
2. Add domain: `nawazishkhan.in`
3. Also add: `www.nawazishkhan.in`
4. Vercel will show you the DNS records needed

### In GoDaddy:

1. Login to [GoDaddy](https://godaddy.com)
2. Go to My Products → Your Domain → DNS
3. **Delete any existing A records for @ and www**
4. Add these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

5. Save changes
6. Wait 5-30 minutes for DNS propagation

### Verify in Vercel:

1. Go back to Vercel Domains settings
2. Both domains should show ✓ Valid Configuration
3. SSL certificate will be auto-provisioned

## Step 5: Verify Everything Works

1. Visit https://nawazishkhan.in
2. Test:
   - ✓ All sections load properly
   - ✓ Dark/Light theme toggle works
   - ✓ Navigation works
   - ✓ Blog page loads
   - ✓ Contact form submits (after Resend setup)
   - ✓ Mobile responsive

## Future Updates

Whenever you want to update your portfolio:

```bash
# Make changes to files
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically redeploy within ~1 minute!

## Adding Blog Posts

1. Create new file in `content/blog/`:
```bash
touch content/blog/new-post-title.md
```

2. Add frontmatter and content:
```markdown
---
title: "Your Post Title"
date: "2025-01-20"
excerpt: "Brief description..."
category: "Category"
---

Your content here...
```

3. Commit and push - it's live!

## Adding Profile Photo

1. Add your photo as `public/images/profile.jpg`
2. Commit and push
3. Done!

---

## Quick Reference

| Service | URL |
|---------|-----|
| Your Site | https://nawazishkhan.in |
| Vercel Dashboard | https://vercel.com/dashboard |
| GitHub Repo | https://github.com/nawazish2/nawazish-portfolio |
| Resend Dashboard | https://resend.com |
| GoDaddy DNS | https://dcc.godaddy.com/manage/nawazishkhan.in/dns |

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs

---

Made with ❤️ - Good luck with your portfolio!

