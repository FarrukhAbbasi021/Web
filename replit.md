# IMDC Medical Billing Website

A modern, premium React + Vite redesign of imdc.us — a healthcare revenue cycle management firm.

## Stack
- React 18 + Vite (web artifact at `/`)
- wouter for routing, framer-motion for animations
- TailwindCSS v4 with `@theme inline` token system
- shadcn/ui components in `src/components/ui/`
- @react-three/fiber + @react-three/drei for 3D scenes (lazy-loaded with WebGL fallback)
- lenis for smooth scroll
- Sora (heading) + Roboto (body) typography

## Brand System
- **Primary:** Brand red `#DD3333` / `#FC3A3A` (HSL `360 71% 53%`)
- **Secondary / dark surfaces:** Black `#0a0a0a` (HSL `0 0% 8%`) — formerly navy
- **Background:** Pure white `#FFFFFF`
- **Charcoal accent:** `#171717`

## Architecture
- `src/pages/` — Home, About, Industries, Resources, Contact + 6 service detail pages
- `src/components/layout.tsx` — fixed nav with scroll progress bar, custom cursor, animated mobile menu, big-wordmark footer
- `src/components/three/` — HeroScene (orbiting core orb + particle field + red rings), EdgeScene (hex shield), ServiceMini3D (6 variants), ContactGlobe, AboutBackdrop, IndustriesScene, Lazy3D (WebGL detect + ErrorBoundary)
- `src/index.css` — color tokens, noise texture utility (`.bg-noise`), marquee animations, smooth scroll, font-feature-settings

## Home Page Sections (in order)
1. Hero — full-viewport black, mixed-weight type, animated counters, cert marquee
2. Massive stats band — huge animated numbers with intersection-observer counters
3. Services grid — bordered grid, hover-to-black cards with numbered chips and red sweep
4. How We Work — 4-step process timeline with animated vertical red progress line
5. IMDC Edge — split layout, prominent 3D shield, benefits checklist
6. Trust band — slow horizontal cert badge marquee
7. CEO quote — large pull-quote
8. Recent insights — 3-card blog preview
9. Final CTA — black with mouse-tracking radial gradient

## Workflows
- `artifacts/imdc: web` — Vite dev server
- `artifacts/api-server: API Server` — Express backend on 8080
- `artifacts/mockup-sandbox: Component Preview Server`
