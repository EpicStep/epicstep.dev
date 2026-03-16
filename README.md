# epicstep.dev

Personal portfolio site for Stepan Rabotkin.

Built with Next.js 16 (static export), React 19, TypeScript, CSS Modules, and [vega-ui](https://github.com/vega-ui/vega-ui) component library.

## Tech stack

- **Next.js 16** — App Router, static site generation (`output: "export"`)
- **React 19** + TypeScript
- **CSS Modules** — scoped styles with vega-ui design tokens
- **vega-ui** — components (`Card`, `Heading`, `Text`, `Button`, etc.), theme system, and tokens

## Getting started

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with Turbopack for fast refresh.

### Production build

```bash
npm run build
```

Static files are generated in the `out/` directory, ready to deploy to any static hosting (Cloudflare Pages, Vercel, GitHub Pages, etc.).

## Project structure

```
src/
├── app/            # Next.js App Router (layout, page, SEO)
├── components/     # UI components with co-located CSS Modules
├── hooks/          # Custom React hooks
├── lib/            # Data and type definitions
└── styles/         # Design tokens and global styles
```

## License

[MIT](LICENSE)
