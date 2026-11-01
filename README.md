# Nexora, Digital Agency Website

A modern, responsive website for **Nexora**, a fictional digital agency offering web development, branding, UI/UX design and digital marketing. Built as a portfolio project to showcase front-end skills.

**Live demo:** https://nexora-agency-website-seven.vercel.app/

> Nexora is a made-up company. All names, projects and prices are placeholders.

## Highlights

- **Cinematic skydiver intro.** A hand-built SVG cartoon skydiver freefalls through a starry night sky, opens his parachute and lands, and the home page then opens in a circular reveal. It plays once per session, can be skipped with the button or Esc, and respects reduced-motion settings. Add `?intro` to the address to replay it.
- **Scroll animations.** Staggered section reveals, a scroll progress bar and count-up statistics.
- **Animated portfolio filter.** A sliding active pill, with cards that smoothly shrink, fade and re-flow when you switch category.
- **Full agency site.** Services, portfolio, pricing, about/team, contact form and footer.
- **Fully responsive.** Designed mobile-first and checked on phone, tablet and desktop sizes.
- **Accessible and fast.** Semantic HTML, keyboard-friendly controls and a lightweight production build.

## Lighthouse scores (mobile, production build)

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     94      |      100      |       96       | 91  |

## Tech stack

- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for animation
- [Lucide React](https://lucide.dev/) for icons
- [Oxlint](https://oxc.rs/) for linting
- Deployed on [Vercel](https://vercel.com/)

## Getting started

Requires Node.js 20 or newer.

```bash
# clone the repository
git clone https://github.com/Radonnestar/nexora-agency-website.git
cd nexora-agency-website

# install dependencies
npm install

# start the dev server at http://localhost:5173
npm run dev
```

### Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the development server                 |
| `npm run build`   | Type-checks with TypeScript and builds `dist` |
| `npm run preview` | Serves the production build locally           |
| `npm run lint`    | Lints the code with Oxlint                    |

## Project structure

```
src/
├── App.tsx                 # Page layout and intro state
├── index.css               # Tailwind import and global styles
├── main.tsx                # App entry point
└── components/
    ├── Intro.tsx           # Intro sequence and circular reveal
    ├── IntroCharacter.tsx  # Animated SVG skydiver
    ├── IntroScenery.tsx    # Night sky, stars, clouds, city and hill
    ├── intro.css           # Intro keyframe animations
    ├── Navbar.tsx          # Navigation with scroll progress bar
    ├── Hero.tsx            # Hero section with count-up stats
    ├── Services.tsx
    ├── Portfolio.tsx       # Animated category filter
    ├── Pricing.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── CountUp.tsx         # Reusable number counter
    ├── Reveal.tsx          # Reusable scroll-reveal wrapper
    └── SectionHeading.tsx
```

## Deployment

The site is deployed on Vercel. Every push to the `main` branch builds and publishes automatically.

## Author

Built by [Radonnestar](https://github.com/Radonnestar).

---

*Part of a three-site portfolio: Nexora (agency), Saffron & Sage (restaurant) and TaskFlow (SaaS landing page).*
