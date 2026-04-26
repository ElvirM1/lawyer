# Murat Krasniqi — Law Firm Website

Modern, high-end informational website for a lawyer based in Pejë, Kosovo.

## Tech Stack

- **Next.js** 16 (App Router, static output)
- **TypeScript** (strict mode)
- **Tailwind CSS** v4
- **Framer Motion** (animations)

## Features

- Fully responsive (mobile + desktop)
- WhatsApp contact integration (form opens prefilled message)
- Premium UI/UX with cinematic hero section
- SEO optimized (metadata, Open Graph, Twitter card)
- Favicon via Next.js App Router icon

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Single page, assembles all sections
  globals.css      # Tailwind v4, CSS variables
  icon.tsx         # Favicon (MK initials)
components/
  Navbar.tsx       # Fixed scroll-aware navbar, hamburger
  Hero.tsx         # Full-bleed cinematic hero
  About.tsx        # Portrait + biography
  Services.tsx     # 5 practice areas, horizontal row layout
  WhyChooseMe.tsx  # 4 reasons, dark section
  Contact.tsx      # WhatsApp form + contact info
  Footer.tsx       # Dark footer with credentials
public/
  images/
    hero-image.png
    portrait.png
```

## Contact Integration

Form submits via WhatsApp redirect — no backend required.
Number: +383 44 260 652
