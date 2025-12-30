#!/bin/bash

# Quick Setup Script for Vercel Deployment
# Run this script to prepare your project for deployment

echo "🚀 Preparing project for Vercel deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Ready for Vercel deployment"
    echo "✅ Git initialized"
    echo ""
    echo "⚠️  Next steps:"
    echo "1. Create a repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/nawazish-portfolio.git"
    echo "3. Run: git branch -M main"
    echo "4. Run: git push -u origin main"
else
    echo "✅ Git repository already initialized"
    echo ""
    echo "📝 Current git status:"
    git status --short
fi

echo ""
echo "✅ Project is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Push code to GitHub (if not done)"
echo "2. Go to https://vercel.com"
echo "3. Import your GitHub repository"
echo "4. Add your GoDaddy domain in Vercel settings"
echo "5. Configure DNS in GoDaddy"
echo ""
echo "📖 See DEPLOY_TO_VERCEL.md for detailed instructions"

