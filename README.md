# Nawazish Khan - Portfolio

A modern, cyberpunk-themed portfolio website built with Next.js 14, featuring 3D effects, smooth animations, and a markdown-based blog system.

🌐 **Live at:** [nawazishkhan.in](https://nawazishkhan.in)

## ✨ Features

- **Modern Design:** Cyberpunk/Neo-brutalist aesthetic with electric cyan and magenta accents
- **3D Effects:** Interactive Three.js wireframe sphere on desktop (gradient fallback on mobile)
- **Dark/Light Mode:** Seamless theme switching with next-themes
- **Responsive:** Optimized for all devices with mobile-first approach
- **Blog System:** Markdown-based blog with syntax highlighting
- **Contact Form:** Working email integration with Resend
- **Performance:** Optimized with dynamic imports and lazy loading
- **SEO:** Full meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js / React Three Fiber
- **Blog:** gray-matter + remark
- **Email:** Resend
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nawazish2/nawazish-portfolio.git
cd nawazish-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your Resend API key (for contact form):
```
RESEND_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 📝 Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
excerpt: "A brief description..."
category: "Category Name"
---

Your content here...
```

## 📸 Adding Profile Photo

Replace the placeholder by adding your photo:
1. Add `profile.jpg` to `public/images/`
2. The site will automatically display it

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Custom Domain (GoDaddy)

In GoDaddy DNS settings, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## 📂 Project Structure

```
nawazish-portfolio/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── api/               # API routes
│   └── page.tsx           # Homepage
├── components/
│   ├── sections/          # Page sections
│   ├── blog/              # Blog components
│   ├── three/             # 3D components
│   └── ui/                # UI components
├── content/blog/          # Markdown blog posts
├── lib/                   # Utilities
└── public/                # Static assets
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Connect

- **GitHub:** [@nawazish2](https://github.com/nawazish2)
- **LinkedIn:** [nawazishkhan8](https://linkedin.com/in/nawazishkhan8)
- **Twitter:** [@nawazish_khan44](https://x.com/nawazish_khan44)

---

Made with ❤️ by Nawazish Khan

