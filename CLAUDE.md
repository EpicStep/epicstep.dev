# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build (static export to out/)
npm run start        # Serve production build locally
```

No test or lint commands configured.

## Architecture

Personal portfolio landing page — static site built with Next.js 16 (App Router, `output: "export"`), React 19, TypeScript, CSS Modules, and vega-ui component library.

### Key patterns

- **Single page**: `src/app/page.tsx` composes section components (Hero → Impact → Experience → OpenSource → Contact → Footer)
- **Content layer**: All text content and types live in `src/lib/data.ts` — components consume typed data, never hardcode strings
- **Design tokens**: `src/styles/tokens.css` maps vega-ui primary/secondary color scales and adds custom tokens (colors, gradients, shadows, layout, animation timing). Dark theme with `#2997FF` accent
- **CSS Modules**: Every component has a co-located `.module.css` file. Use custom token variables (`--color-*`, `--duration-*`, `--ease-out`) not raw values
- **Scroll reveal**: `ScrollReveal` wrapper component + `useScrollReveal` hook using Intersection Observer. Staggered delays create section-by-section reveal animation. Respects `prefers-reduced-motion`

### Vega-UI integration

Setup follows the [vega-ui template](https://github.com/vega-ui/template-react): globals.css imports `@vega-ui/theme-core` (theme with semantic variables), then `@vega-ui/react/style.css` (component styles), then custom tokens. Primary colors mapped to blue, secondary to smoke (dark theme). Uses `@import url()` syntax for Next.js/Turbopack compatibility.

7 components used: `Heading`, `Text`, `Card`, `Badge`, `Button`, `Link`, `Separator`. Use `csx()` from `@vega-ui/utils` for className composition — it only accepts `string | undefined` (use ternaries, not `&&`).

Override vega-ui component styles via `className` prop with CSS Module classes.

### Client vs Server components

Only interactive components use `"use client"`: Navbar (scroll/menu state), ScrollReveal (Intersection Observer), section components that use ScrollReveal. Layout and page are Server Components. Vega-ui components that use refs (e.g. `VisuallyHidden` with `asChild`) cannot be used directly in Server Components.

### Responsive breakpoints

Primary breakpoint at 768px (mobile). Grids collapse from multi-column to single column. Typography uses `clamp()` for fluid sizing.
