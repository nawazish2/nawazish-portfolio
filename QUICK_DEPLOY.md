# ⚡ Quick Deploy - 5 Minutes

## 🎯 Fast Track Deployment

### 1️⃣ GitHub (2 min)
```bash
cd /Users/nawazish/nawazish-portfolio
git init
git add .
git commit -m "Deploy to Vercel"
# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/nawazish-portfolio.git
git push -u origin main
```

### 2️⃣ Vercel (2 min)
1. Go to **vercel.com** → Sign up with GitHub
2. Click **"Add New"** → **"Project"**
3. Import `nawazish-portfolio` repository
4. Click **"Deploy"** (settings auto-detected)
5. ✅ Site live at `your-project.vercel.app`

### 3️⃣ Add Domain (1 min)
1. In Vercel: **Settings** → **Domains**
2. Add: `yourdomain.com`
3. Copy the DNS values Vercel shows

### 4️⃣ GoDaddy DNS (2 min)
1. GoDaddy → **My Products** → **DNS**
2. Add these records:

```
Type: A
Name: @
Value: [IP from Vercel]
TTL: 600

Type: CNAME  
Name: www
Value: [CNAME from Vercel]
TTL: 600
```

3. Save & wait 15-30 minutes
4. ✅ Done! Site live at `https://yourdomain.com`

---

## 📋 DNS Records Template

When Vercel shows you DNS settings, add these in GoDaddy:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `[Vercel IP]` | 600 |
| CNAME | www | `[Vercel CNAME]` | 600 |

**Replace `[Vercel IP]` and `[Vercel CNAME]` with actual values from Vercel!**

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed on Vercel
- [ ] Domain added in Vercel
- [ ] DNS configured in GoDaddy
- [ ] Wait 15-30 minutes
- [ ] Test: `https://yourdomain.com`

---

**Need detailed steps?** See `DEPLOY_TO_VERCEL.md`

