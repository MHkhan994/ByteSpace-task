# ByteSpace

Landing page and auth screens for ByteSpace, an online course platform. Built with Next.js 16, Tailwind CSS v4 and shadcn/ui.

## Pages

- `/` — homepage (hero, categories, featured courses, learning paths, career growth, creator CTA, testimonials)
- `/login` and `/signup` — auth screens with client-side validation (no backend yet)

## Getting started

Requires Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script       | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start the dev server     |
| `pnpm build` | Production build         |
| `pnpm start` | Serve the production build |
| `pnpm lint`  | Run ESLint               |

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui on Base UI
- **Forms:** React Hook Form + Zod
- **Motion:** Motion (scroll reveals), Lenis (smooth scrolling)

## Project structure

```
app/                 routes (homepage, login, signup)
components/
  homepage/          homepage sections
  auth/              auth layout, forms, social logins
  shared/            navbar, footer, reusable cards
  common/            animation helpers (Reveal, scroll progress)
  ui/                shadcn components
  uiData/            static content for the homepage
hooks/               custom React hooks
lib/                 utilities and Zod schemas
public/assets/       images, logos and illustrations
```
