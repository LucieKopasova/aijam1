# AGENTS.md

Reference for AI coding agents: Claude Code, GitHub Copilot, Cursor, Windsurf, Gemini CLI.

---

## Project Overview

**AI JAM #1** — A modern SPA showcasing "ThermoSync Product Page" with Aether Carbon design system (dark mode, cyan accents, premium thermal product showcase).

**Tech Stack:** React 19.2.4, TypeScript 6.0.2, Vite 8.0.4, Tailwind CSS 4.2.2, Babel React Compiler, ESLint 9 with React plugins

**Type:** Single Page Application (SPA)

---

## Commands

| Command | Purpose | When |
|---------|---------|------|
| `npm run dev` | Start Vite dev server on localhost:5173 | Local development |
| `npm run build` | Type-check + Vite production build | Before deploy |
| `npm run lint` | Run ESLint on src/ | Check code quality |
| `npm run preview` | Preview prod build locally | Test production output |

---

## Project Structure

```
aijam1/
├── src/
│   ├── main.tsx           # App entry point (HTML root mounting)
│   ├── App.tsx            # ThermoSync product page component
│   ├── index.css          # Global styles + Tailwind + design tokens
│   ├── App.css            # Component-specific styles (empty)
│   └── assets/            # Images, icons (unused currently)
├── index.html             # HTML template (base, lang=cs)
├── package.json           # Dependencies & npm scripts
├── tsconfig.json          # TypeScript references
├── tsconfig.app.json      # App TS config (strict, no unused locals)
├── tsconfig.node.json     # Build tool TS config
├── vite.config.ts         # Vite + React + Babel + Tailwind setup
├── eslint.config.js       # ESLint flat config (Recommended + React Hooks)
├── tailwind.config.js     # Aether Carbon design tokens
├── docs/                  # Guides, project specs, skills, prompts
└── .agents/               # AI agent configs (if any)
```

---

## Architecture

**Data Flow:**
1. `index.html` → mounts React app at `#root`
2. `main.tsx` → renders `<App />` with `StrictMode`
3. `App.tsx` → single component; renders ThermoSync marketing site (no routing, no state management)
4. `index.css` → injects Tailwind + Aether Carbon CSS variables
5. Output: Static HTML/CSS/JS bundle in `dist/`

**Key Design Decisions:**
- **No routing** — Single page (no React Router needed)
- **No state management** — Static content (no Redux/Zustand needed)
- **Tailwind + inline styles** — Mix of Tailwind classes and `style={{ }}` props for design colors
- **React Compiler** — Babel React Compiler enabled (auto-memoization)
- **Strict TypeScript** — `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` enabled

**Patterns:**
- Functional components only (no classes)
- CSS-in-JS via style props for dynamic colors (Aether Carbon palette)
- Responsive grid layouts with Tailwind (`md:` breakpoints)
- Design system colors as CSS variables + Tailwind config

---

## Conventions

**TypeScript:**
- Strict mode active (`verbatimModuleSyntax`, `noUnusedLocals`)
- JSX syntax: `jsx: "react-jsx"` (React 17+)
- No explicit type exports needed (inferred from usage)
- Target: ES2023

**CSS & Styling:**
- Framework: Tailwind CSS 4.2 + `@tailwindcss/vite`
- Custom properties: `--color-primary: #69daff` defined in `:root`
- Inline `style={{}}` props for brand colors (e.g., `color: '#69daff'`)
- Font imports via Google Fonts CDN (Space Grotesk, Manrope)

**Code Example** (preferred style):
```tsx
function FeatureCard() {
  return (
    <div className="rounded-lg p-8" style={{ backgroundColor: '#131313', borderLeft: '4px solid #69daff' }}>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Feature Title
      </h3>
      <p style={{ color: '#adaaaa' }}>Description text</p>
    </div>
  )
}
```

---

## Boundaries

✅ **Always Do:**
- Run `npm run lint` before commit
- Run `npm run build` to validate TypeScript and bundle
- Use Tailwind classes first; inline styles only for dynamic design tokens
- Prefer `className` + Tailwind over inline `style` for layout
- Import fonts at top of CSS (already done in `index.css`)

⚠️ **Ask First:**
- Adding new npm dependencies
- Modifying ESLint rules or TypeScript config
- Adding routing or state management (architecture change)
- Changing Vite base path (`base: '/aijam1/'` is set for GitHub Pages)
- Major CSS framework changes

🚫 **Never:**
- Commit node_modules or dist/
- Remove Babel React Compiler from vite.config
- Disable TypeScript strict mode
- Add hardcoded colors (use Aether Carbon palette instead)
- Push to main branch without PR

---

## Notes

- **Base path:** Vite is configured with `base: '/aijam1/'` for GitHub Pages deployment
- **Aether Carbon tokens:** All brand colors defined in `tailwind.config.js` and `index.css`
- **Language:** HTML lang is `cs` (Czech)
