# Apple Aesthetic Portfolio Redesign Plan

## Overview
Complete UI overhaul to achieve Apple-like aesthetic: clean, minimal, premium feel with generous whitespace, smooth animations, and refined typography.

---

## Design System Changes

### 1. Color Palette
**New Apple-Inspired Theme:**
```css
:root {
  --background: #ffffff;
  --foreground: #1d1d1f;
  --surface: #fbfbfd;
  --surface-2: #f5f5f7;
  --border: #d2d2d7;
  --muted: #86868b;
  --accent: #0066cc;
  --accent-light: #0071e3;
}

.dark {
  --background: #000000;
  --foreground: #f5f5f7;
  --surface: #1d1d1f;
  --surface-2: #2d2d2f;
  --border: #424245;
  --muted: #a1a1a6;
  --accent: #2997ff;
  --accent-light: #70bdfc;
}
```

### 2. Typography
- Larger headings (24px-64px+)
- SF Pro / Inter font family
- Tight tracking for headings
- Generous line-height for body text
- Animated text reveal on scroll

### 3. Layout
- 1400px max-width container
- 64px-80px section padding
- 24px-32px element spacing
- Large border-radius (20px-24px)
- Grid-based component layouts

---

## Component Redesigns

### 1. Hero Section
- **Current:** Complex gradients with floating particles
- **Apple Style:** 
  - Large centered name (64px+)
  - Animated rotating titles with smooth fade
  - Clean white background
  - Minimal "Available for work" badge
  - Simple icon buttons
  - Animated arrow indicator
  - Focus on typography and whitespace

### 2. Skills Section
- **Current:** Tag pills with hover rotation
- **Apple Style:**
  - Grid cards (Bento-style)
  - Category cards with icons
  - Large emoji/icons
  - Subtle shadows
  - Smooth hover lift
  - Clean typography

### 3. Projects Section
- **Current:** Grid cards with shimmer effects
- **Apple Style:**
  - Large card design
  - Project screenshots/images
  - Clean typography hierarchy
  - Simple link icons
  - Minimal tech stack display
  - Smooth hover states

### 4. Navigation
- **Current:** Glassmorphism with animated active state
- **Apple Style:**
  - Floating pill-shaped nav bar
  - Blur effect (20px+ blur)
  - Simple text links
  - Clean theme toggle
  - Mobile: Bottom sheet style

### 5. Contact Section
- **Current:** Form with validation
- **Apple Style:**
  - Large centered email link
  - Simple clean form
  - Minimalist button
  - Focus states only
  - Generous padding

### 6. Experience/Education
- **Current:** Vertical timeline
- **Apple Style:**
  - Clean cards with subtle borders
  - Date badges
  - Simple typography
  - Minimal dividers

---

## Animations (Framer Motion)
- Smooth fade-up reveals
- Staggered list animations
- Hover scale effects (1.02x)
- Spring-based transitions
- Reduced motion support

---

## Implementation Order

1. **globals.css** - Update color palette & base styles
2. **Hero.tsx** - Redesign with Apple aesthetic
3. **Skills.tsx** - Bento grid layout
4. **Projects.tsx** - Clean card design
5. **Navigation.tsx** - Floating pill design
6. **Contact.tsx** - Minimal form
7. **About.tsx** - Clean typography
8. **Experience.tsx** - Simplified timeline
9. **Education.tsx** - Card-based layout

---

## Files to Modify
- `app/globals.css`
- `components/sections/Hero.tsx`
- `components/sections/About.tsx`
- `components/sections/Skills.tsx`
- `components/sections/Projects.tsx`
- `components/sections/Experience.tsx`
- `components/sections/Education.tsx`
- `components/sections/Contact.tsx`
- `components/Navigation.tsx`

---

## Estimated Time
- Phase 1: Core styles & Hero (30 min)
- Phase 2: Skills & Projects (45 min)
- Phase 3: Navigation & Contact (30 min)
- Phase 4: Remaining sections (30 min)
- **Total: ~2.5 hours**

---

## Success Criteria
✅ Clean, minimal aesthetic
✅ Apple-inspired design language
✅ Smooth, premium animations
✅ Generous whitespace
✅ Focus on typography
✅ Mobile responsive
✅ Accessible

