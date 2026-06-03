# Estako Services (Nig) Co. — Website (React + TypeScript + Vite)

Production-ready website for Estako Services (Nig) Co., official regional channel partner of SWAD Digital Solutions Ltd.

## Tech Stack
- **React 19** + **TypeScript**
- **Vite 6** (lightning-fast dev server & build)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **Lucide React** icons
- **Cormorant Garamond** + **DM Sans** (Google Fonts)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build
# → dist/ folder ready to deploy
```

## Deployment

Deploy the `dist/` folder to:
- **Vercel** — drag & drop or `vercel deploy`
- **Netlify** — drag & drop the `dist/` folder
- **cPanel / shared hosting** — upload `dist/` via FTP

## Project Structure

```
src/
  components/
    Navbar.tsx        Sticky responsive navbar
    Hero.tsx          Full-screen hero with stats
    About.tsx         About + core capabilities
    Services.tsx      6-service dark card grid
    Sectors.tsx       10 sector pills
    SwadPartner.tsx   SWAD Digital Solutions channel partner section
    WhyUs.tsx         6 advantage cards
    Leadership.tsx    CEO profile card
    Contact.tsx       Contact details + validated form
    Footer.tsx
    SectionHeader.tsx Reusable section heading component
  hooks/
    useFadeIn.ts      IntersectionObserver fade-in hook
  App.tsx
  main.tsx
  index.css           Global styles + Tailwind + CSS variables
public/
  logo.jpg            Company logo
```

## Key Sections
| Section | id | Description |
|---|---|---|
| Hero | `#home` | Tagline, CTAs, stats |
| About | `#about` | Company overview & capabilities |
| Services | `#services` | 6 core services |
| Sectors | `#sectors` | 10 industry sectors |
| **SWAD Partner** | `#swad` | Channel partner showcase with carousel |
| Why Us | `#whyus` | 6 differentiators |
| Leadership | `#leadership` | CEO profile |
| Contact | `#contact` | Form + contact info |

## Customisation
- Colours: edit CSS variables in `src/index.css`
- Logo: replace `public/logo.jpg`
- Contact details: `src/components/Contact.tsx` and `Leadership.tsx`
- SWAD products: `src/components/SwadPartner.tsx` → `products` array
