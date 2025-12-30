# 🚀 Vercel Deployment Guide with GoDaddy Domain

## Step-by-Step Deployment Instructions

### Prerequisites
- ✅ GitHub account
- ✅ Vercel account (free tier works)
- ✅ GoDaddy domain purchased
- ✅ Project ready to deploy

---

## Part 1: Prepare Your Project

### 1.1 Check Your Project
```bash
cd /Users/nawazish/nawazish-portfolio
npm run build
```

If build succeeds, you're ready! ✅

### 1.2 Push to GitHub (if not already done)

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/nawazish-portfolio.git
git branch -M main
git push -u origin main
```

---

## Part 2: Deploy to Vercel

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)

### 2.2 Import Your Project
1. Click **"Add New"** → **"Project"**
2. Import your GitHub repository (`nawazish-portfolio`)
3. Vercel will auto-detect Next.js settings

### 2.3 Configure Build Settings
Vercel should auto-detect:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### 2.4 Environment Variables (if needed)
If you have a contact form API:
- Go to **Settings** → **Environment Variables**
- Add: `RESEND_API_KEY` = your API key (if using contact form)

### 2.5 Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes for build
3. Your site will be live at: `your-project.vercel.app`

---

## Part 3: Connect GoDaddy Domain

### 3.1 Add Domain in Vercel
1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `nawazishkhan.in`)
4. Click **"Add"**

### 3.2 Get Vercel DNS Records
Vercel will show you DNS records. You'll see something like:
- **A Record:** `76.76.21.21` (or similar)
- **CNAME Record:** `cname.vercel-dns.com` (for www)

---

## Part 4: Configure GoDaddy DNS

### 4.1 Access GoDaddy DNS Settings
1. Log in to [GoDaddy.com](https://godaddy.com)
2. Go to **My Products** → **Domains**
3. Click on your domain
4. Click **"DNS"** or **"Manage DNS"**

### 4.2 Add DNS Records

#### Option A: Using A Record (Recommended)
Add these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | 600 (or default) |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 (or default) |

**Note:** Replace `76.76.21.21` with the IP Vercel provides you.

#### Option B: Using CNAME (Alternative)
If A record doesn't work:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `@` | `cname.vercel-dns.com` | 600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 |

### 4.3 Remove Conflicting Records
- Delete any existing A records pointing to other IPs
- Delete any conflicting CNAME records

### 4.4 Save Changes
Click **"Save"** in GoDaddy

---

## Part 5: Verify & Wait

### 5.1 DNS Propagation
- DNS changes take **5 minutes to 48 hours** to propagate
- Usually works within **15-30 minutes**

### 5.2 Check Status in Vercel
1. Go to **Settings** → **Domains** in Vercel
2. You'll see status:
   - 🟡 **Pending** = DNS propagating
   - 🟢 **Valid** = Domain connected!

### 5.3 Test Your Domain
Once status is "Valid":
- Visit: `https://yourdomain.com`
- Visit: `https://www.yourdomain.com`

Both should work! ✅

---

## Part 6: SSL Certificate (Automatic)

✅ **Good News:** Vercel automatically provides SSL certificates!
- Your site will be `https://` automatically
- No additional configuration needed
- Certificate renews automatically

---

## Troubleshooting

### Issue: Domain not connecting
**Solution:**
1. Wait 30-60 minutes (DNS propagation)
2. Check DNS records match exactly
3. Verify in Vercel → Settings → Domains
4. Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation

### Issue: Build fails
**Solution:**
1. Check build logs in Vercel
2. Run `npm run build` locally to see errors
3. Ensure all dependencies are in `package.json`

### Issue: 404 errors
**Solution:**
1. Check `next.config.js` is correct
2. Verify all routes exist
3. Check Vercel build logs

### Issue: Images not loading
**Solution:**
1. Check image paths are correct
2. Verify images are in `public/` folder
3. Check `next.config.js` image settings

---

## Quick Reference

### Vercel Dashboard
- **Project URL:** `https://vercel.com/dashboard`
- **Domain Settings:** Project → Settings → Domains

### GoDaddy DNS
- **DNS Management:** My Products → Domains → DNS
- **Support:** [support.godaddy.com](https://support.godaddy.com)

### Useful Commands
```bash
# Test build locally
npm run build
npm start

# Check for errors
npm run lint

# View production build
npm run build && npm start
```

---

## Post-Deployment Checklist

- [ ] Site loads at custom domain
- [ ] HTTPS works (automatic with Vercel)
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Contact form works (if applicable)
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] Performance is good

---

## Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **GoDaddy Help:** [support.godaddy.com](https://support.godaddy.com)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Your site will be live at:** `https://yourdomain.com` 🎉

