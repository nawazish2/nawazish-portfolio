# 🔄 GitHub + Vercel Auto-Deployment Setup

## 🎯 Goal
Connect GitHub to Vercel so that **every time you push code, your website automatically updates!**

---

## 📋 Step-by-Step Setup

### **STEP 1: Initialize Git & Push to GitHub**

#### 1.1 Check if Git is initialized
```bash
cd /Users/nawazish/nawazish-portfolio
git status
```

#### 1.2 If NOT initialized, run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Portfolio website"

# Create main branch
git branch -M main
```

#### 1.3 Create GitHub Repository

**Option A: Using GitHub Website (Recommended)**
1. Go to: https://github.com/new
2. Repository name: `nawazish-portfolio` (or any name)
3. Description: "My portfolio website"
4. Choose: **Public** or **Private**
5. **DO NOT** initialize with README (you already have files)
6. Click **"Create repository"**

**Option B: Using GitHub CLI** (if installed)
```bash
gh repo create nawazish-portfolio --public --source=. --remote=origin --push
```

#### 1.4 Connect Local Repository to GitHub

After creating the repo on GitHub, you'll see instructions. Run:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nawazish-portfolio.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/nawazish2/nawazish-portfolio.git
git push -u origin main
```

---

### **STEP 2: Deploy to Vercel with Auto-Deploy**

#### 2.1 Go to Vercel
1. Visit: https://vercel.com
2. **Sign up/Login with GitHub** (Important: Use GitHub login!)

#### 2.2 Import Project
1. Click **"Add New"** → **"Project"**
2. You'll see your GitHub repositories
3. Find `nawazish-portfolio`
4. Click **"Import"**

#### 2.3 Configure Project
Vercel will auto-detect:
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**Just click "Deploy"!** (Settings are perfect)

#### 2.4 Environment Variables (Optional)
If you have a contact form:
- Go to **Environment Variables**
- Add: `RESEND_API_KEY` = your API key
- Add: `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`

#### 2.5 Deploy!
- Click **"Deploy"**
- Wait 2-3 minutes
- ✅ Your site is live!

---

### **STEP 3: Verify Auto-Deployment**

Vercel automatically connects to GitHub! To test:

1. Make a small change locally:
```bash
# Edit any file, for example:
echo "# Test" >> README.md
```

2. Commit and push:
```bash
git add .
git commit -m "Test auto-deployment"
git push
```

3. Check Vercel Dashboard:
   - Go to your project in Vercel
   - You'll see a new deployment starting automatically!
   - Wait 1-2 minutes
   - ✅ Site updated automatically!

---

## 🔄 How Auto-Deployment Works

### **Automatic Deployments:**
- ✅ **Every push to `main` branch** → Production deployment
- ✅ **Pull requests** → Preview deployment
- ✅ **No manual steps needed!**

### **Workflow:**
```
1. Make changes locally
2. git add .
3. git commit -m "Your message"
4. git push
5. Vercel automatically detects push
6. Builds and deploys automatically
7. Website updates in 1-2 minutes!
```

---

## 📝 Quick Commands for Future Updates

### **Update Your Website:**
```bash
cd /Users/nawazish/nawazish-portfolio

# Make your changes (edit files)

# Stage changes
git add .

# Commit
git commit -m "Update: Description of changes"

# Push to GitHub (triggers auto-deploy)
git push
```

That's it! Vercel will automatically deploy your changes! 🚀

---

## 🎯 Benefits of This Setup

✅ **Automatic Updates:** Push to GitHub → Site updates automatically
✅ **Preview Deployments:** Test changes before going live
✅ **Version Control:** Track all changes in GitHub
✅ **Rollback:** Easy to revert if something breaks
✅ **Collaboration:** Others can contribute via GitHub
✅ **Free:** Both GitHub and Vercel free tiers work perfectly

---

## 🔧 Troubleshooting

### Git push fails?
```bash
# If you get authentication error:
# Use GitHub Personal Access Token or SSH key
# Or use GitHub Desktop app
```

### Vercel not detecting changes?
1. Check Vercel → Settings → Git
2. Verify GitHub connection
3. Check deployment logs

### Build fails on Vercel?
1. Check build logs in Vercel
2. Test locally: `npm run build`
3. Fix errors, then push again

---

## 📚 Useful Links

- **GitHub:** https://github.com
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Docs:** https://docs.github.com
- **Vercel Docs:** https://vercel.com/docs

---

## ✅ Checklist

- [ ] Git initialized locally
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created (GitHub login)
- [ ] Project imported in Vercel
- [ ] First deployment successful
- [ ] Tested auto-deployment (push → deploy)

---

**🎉 Once set up, you can update your website anytime by just pushing to GitHub!**

