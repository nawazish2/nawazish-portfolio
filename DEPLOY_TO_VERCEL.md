# 🚀 Quick Deployment Guide - Vercel + GoDaddy

## ✅ Pre-Deployment Checklist

- [x] Project builds successfully (`npm run build` ✅)
- [ ] Code pushed to GitHub
- [ ] Vercel account ready
- [ ] GoDaddy domain ready

---

## 📋 Step-by-Step Instructions

### **STEP 1: Push to GitHub** (if not done)

```bash
cd /Users/nawazish/nawazish-portfolio

# Check git status
git status

# If not initialized:
git init
git add .
git commit -m "Ready for Vercel deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/nawazish-portfolio.git
git branch -M main
git push -u origin main
```

---

### **STEP 2: Deploy to Vercel**

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project:**
   - Click **"Add New"** → **"Project"**
   - Click **"Import Git Repository"**
   - Select `nawazish-portfolio`
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected) ✅
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto) ✅
   - **Output Directory:** `.next` (auto) ✅
   - **Install Command:** `npm install` (auto) ✅

4. **Environment Variables** (Optional - only if using contact form):
   - Click **"Environment Variables"**
   - Add: `RESEND_API_KEY` = `your_api_key`
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`

5. **Deploy:**
   - Click **"Deploy"**
   - Wait 2-3 minutes
   - ✅ Your site is live at: `your-project.vercel.app`

---

### **STEP 3: Add Custom Domain in Vercel**

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **"Settings"** tab
   - Click **"Domains"** in sidebar
   - Enter your domain: `nawazishkhan.in` (or your domain)
   - Click **"Add"**

2. **Vercel will show DNS instructions:**
   - Note the **A record IP** (e.g., `76.76.21.21`)
   - Note the **CNAME value** (e.g., `cname.vercel-dns.com`)

---

### **STEP 4: Configure GoDaddy DNS**

1. **Login to GoDaddy:**
   - Go to: https://godaddy.com
   - Login to your account

2. **Access DNS Settings:**
   - Click **"My Products"**
   - Find your domain
   - Click **"DNS"** or **"Manage DNS"**

3. **Add DNS Records:**

   **Delete any existing A records first!**

   Then add these **NEW** records:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | **A** | `@` | `76.76.21.21` | 600 |
   | **CNAME** | `www` | `cname.vercel-dns.com` | 600 |

   **Important:** 
   - Replace `76.76.21.21` with the IP Vercel gives you
   - Replace `cname.vercel-dns.com` with the CNAME Vercel gives you
   - `@` means root domain (yourdomain.com)
   - `www` means www.yourdomain.com

4. **Save Changes:**
   - Click **"Save"** or **"Add Record"**
   - Wait for confirmation

---

### **STEP 5: Wait for DNS Propagation**

- ⏱️ **Time:** 5 minutes to 48 hours (usually 15-30 minutes)
- 🔍 **Check Status:** Vercel Dashboard → Settings → Domains
- ✅ **Status will change:** Pending → Valid

---

### **STEP 6: Verify**

Once status is **"Valid"** in Vercel:

1. Visit: `https://yourdomain.com` ✅
2. Visit: `https://www.yourdomain.com` ✅
3. Check HTTPS works (automatic with Vercel) ✅

---

## 🎯 Quick Command Reference

```bash
# Test build locally
npm run build

# Run production build
npm run build && npm start

# Check for errors
npm run lint
```

---

## 🔧 Troubleshooting

### Domain not connecting?
1. Wait 30-60 minutes (DNS needs time)
2. Double-check DNS records match Vercel exactly
3. Verify in Vercel dashboard
4. Check: https://www.whatsmydns.net

### Build fails on Vercel?
1. Check build logs in Vercel
2. Run `npm run build` locally first
3. Ensure all dependencies are in `package.json`

### SSL not working?
- Vercel provides SSL automatically
- Wait for DNS to propagate
- Check domain status in Vercel

---

## 📝 Important Notes

- ✅ **SSL Certificate:** Automatic with Vercel (free)
- ✅ **HTTPS:** Enabled automatically
- ✅ **Auto-deploy:** Every push to main branch
- ✅ **Preview Deployments:** For pull requests

---

## 🎉 You're Done!

Your portfolio will be live at:
- **Primary:** `https://yourdomain.com`
- **WWW:** `https://www.yourdomain.com`
- **Vercel:** `https://your-project.vercel.app`

All three URLs will work! 🚀

