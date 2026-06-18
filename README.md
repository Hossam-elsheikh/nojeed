# Nojeed — Landing Page

A modern, high-converting landing page for Nojeed, a software development agency.

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, respects `prefers-reduced-motion`
- **i18n:** next-intl — English and Arabic (RTL-ready), content in `locales/en.json` and `locales/ar.json`
- **Forms:** React Hook Form (client-side validation)
- **Icons:** Lucide (UI icons), react-icons (brand/social icons)
- **Primitives:** Radix UI (`Select`, `Dialog` for the mobile menu)

## Structure

```
app/[locale]/   routing, layout, metadata, sitemap/robots/OG image
components/     small reusable pieces (Logo, Container, SectionHeading, Button, Input...)
sections/       one file per landing page section (Hero, Services, Process, ...)
lib/            data arrays, site constants (contact info, socials), cn() helper
locales/        en.json / ar.json translation content
i18n/           next-intl routing + request config
```

## Development

```
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `GMAIL_APP_PASSWORD` — required for the contact form (`app/api/contact/route.ts`) to actually deliver messages to nojeed.eg@gmail.com via Gmail SMTP. See `.env.example` for how to generate one. Without it, the form shows a visible error instead of silently dropping submissions.

## Content TODOs

A few sections ship with clearly-marked placeholder content (see `// TODO` comments in code) that needs real assets before launch:

- `sections/Portfolio.tsx` — swap project images for real product screenshots.
- `sections/Testimonials.tsx` / `lib/data/testimonials.ts` — replace placeholder quotes and client logos with real ones (section is currently hidden in `app/[locale]/page.tsx` until then).
