# Alish Acharya — Frontend Developer Portfolio

A premium, minimal portfolio built with Next.js (App Router), Tailwind CSS, and
Framer Motion. Editorial layout inspired by luxury fashion navigation/hero
patterns, with a signature scrolling capabilities marquee as the one bold
accent against an otherwise quiet, hairline-driven design.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.jsx        Root layout, fonts, SEO metadata, theme flash prevention
  page.jsx           Composes all sections
  globals.css        Design tokens (CSS vars), base styles, reduced-motion support
components/
  Navbar.jsx          Sticky/transparent-on-scroll nav, active-section highlight, mobile menu
  Hero.jsx            Full-screen video hero
  Marquee.jsx          Signature scrolling ticker (the "one aesthetic risk")
  About.jsx, Skills.jsx, Projects.jsx, Experience.jsx,
  Testimonials.jsx, Services.jsx, Contact.jsx, Footer.jsx
  ThemeProvider.jsx / ThemeToggle.jsx   Dark/light mode with localStorage persistence
  PageTransition.jsx   Subtle page-load fade
  ui/                  Button, SectionHeading, Reveal (scroll animation), BackToTop
lib/
  data.js              All copy/content in one place — edit this to personalize
  useActiveSection.js  IntersectionObserver hook for nav highlighting
```

## Personalizing content

Everything — name, role, bio, skills, projects, experience, testimonials,
services, and contact form options — lives in `lib/data.js`. Edit that file
first; components should not need changes for a content update.

## Media

- `public/videos/hero-bg.mp4` — background video for the hero (muted, looped).
  Keep it under ~6MB and 1080p for fast load; the section renders a dark
  gradient overlay even if this file is missing.
- `public/images/hero-poster.jpg` — poster frame shown while the video loads.
- Project thumbnails currently use CSS gradients + the project name as a
  lightweight placeholder (zero image weight). Swap in real screenshots in
  `components/Projects.jsx` if you'd rather use images.

## Contact form

`components/Contact.jsx` validates client-side and shows success/error
states. It currently simulates a network call — wire up `handleSubmit` to a
real endpoint (an API route, Formspree, Resend, etc.) before going live.

## Theming

Dark/light mode is controlled by a `dark` class on `<html>`, toggled via
`components/ThemeToggle.jsx` and persisted to `localStorage`. A small inline
script in `app/layout.jsx` applies the stored theme before first paint to
avoid a flash of the wrong theme.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables animation/scroll-behavior).
- Visible focus rings on all interactive elements.
- Semantic landmarks (`header`, `main`, `footer`) and labeled icon buttons.
- Fonts loaded via `next/font` (self-hosted, no layout shift).
- No client-side libraries beyond Framer Motion and lucide-react icons.
