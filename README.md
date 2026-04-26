# DeskTeam360 Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)](https://deskteam360-alpha.vercel.app)

Next.js 14 (App Router) + Tailwind CSS + lucide-react landing page for DeskTeam360.

🚀 **Live:** https://deskteam360-alpha.vercel.app
📦 **Auto-deploy:** every push to `main` is automatically built and deployed to Vercel.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # eslint
```

## Structure

```
app/
  layout.tsx          # Root layout + metadata
  page.tsx            # Sections assembled in order
  globals.css         # Tailwind + utility classes (.btn-primary, .section-title, …)
components/
  Navbar.tsx          # Sticky nav, mobile menu, CTA
  Hero.tsx            # Headline + stats badges + placeholder image
  PainPoints.tsx      # Dark section, 3 pain cards
  Values.tsx          # 6-tile solution matrix
  Services.tsx        # 8-service grid with lucide icons
  Process.tsx         # 3-step flow
  Testimonials.tsx    # Masonry-style testimonial cards
  Pricing.tsx         # 3 pricing cards (Marketer highlighted)
  PricingCard.tsx     # Reusable pricing card
  Guarantee.tsx       # 30-day risk-free banner
  Faq.tsx             # FAQ section
  FaqAccordion.tsx    # Reusable accordion
  Footer.tsx          # Big CTA + footer links + copyright
```

All images are `https://placehold.co/…` placeholders wrapped in `next/image`.
Swap them for real assets by editing the `src` strings.
