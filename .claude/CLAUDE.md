# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # TypeScript check + production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling
- **Tailwind CSS 4** (configured via `@tailwindcss/vite` plugin)
- **React Router 7** for URL-based routing
- **ESLint 9** with React Hooks and React Refresh plugins

## Project Structure

```
src/
├── main.tsx          # App entry point (BrowserRouter wrapper)
├── App.tsx           # Root component with Routes
├── App.css           # Component styles
├── index.css         # Global styles + Tailwind import
├── assets/           # Static assets (images, etc.)
├── components/       # Reusable UI components
│   └── ProjectShowcase.tsx  # Project cards grid
└── pages/
    ├── TemplateCaseStudy.tsx  # Generic project template
    └── projects/              # Individual project pages
        └── AiAnalyticsTool.tsx
```

## Routing

Uses `react-router-dom` for URL-based navigation.

**Routes defined in `App.tsx`:**
- `/` → Home page
- `/projects/ai-analytics-tool` → AI Analytics Tool case study
- `/projects/:id` → Generic template for other projects

## Adding a New Project

### 1. Create project page
Copy template and customize:
```bash
cp src/pages/TemplateCaseStudy.tsx src/pages/projects/NewProject.tsx
```

Update component name and content in the new file.

### 2. Add hero image
Place image in `src/assets/` (e.g., `hero-screen-new-project.png`)

Import in your component:
```tsx
import heroScreen from "@/assets/hero-screen-new-project.png"
```

### 3. Add route in App.tsx
```tsx
import { NewProject } from "./pages/projects/NewProject"

// Add before the generic /projects/:id route
<Route path="/projects/new-project" element={<NewProject onBack={() => navigate("/")} />} />
```

### 4. Update ProjectShowcase navigation
In `App.tsx`, update the `onProjectClick` handler to route to your new project:
```tsx
onProjectClick={(id) => {
  if (id === "1") navigate("/projects/ai-analytics-tool")
  else if (id === "NEW_ID") navigate("/projects/new-project")
  else navigate(`/projects/${id}`)
}}
```

### 5. Add project card (optional)
Add entry to `projects` array in `src/components/ProjectShowcase.tsx`:
```tsx
{
  id: "NEW_ID",
  title: "Project Title",
  description: "Brief description.",
  tags: ["Tag1", "Tag2"],
  year: "2024",
}
```

## Tailwind CSS v4 Configuration

Tailwind is integrated via the Vite plugin in `vite.config.ts`. Styles are imported in `src/index.css` using `@import "tailwindcss"`. No separate `tailwind.config.js` is needed in v4.

## UI Component Guidelines

When creating, adding, editing, or modifying UI components, always reference the Tailwind CSS documentation at `~/.claude/tailwind-llms/tailwind-llms.txt` for proper utility classes and patterns.

## Color Philosophy

This portfolio uses an ultra-minimal neutral palette inspired by Apple, Tesla, and Anthropic design languages, with a unique sophisticated character.

### Light Mode (Default)
- **Background**: Subtle radial gradient drawing the eye to center
  - Center: Pure white (`oklch(1 0 0)`)
  - Mid: Subtle warm undertone (`oklch(0.99 0.002 85)`)
  - Edges: Slightly darker warm (`oklch(0.98 0.003 85)`)
- **Foreground**: Deep, rich black (`oklch(0.09 0 0)`) for maximum contrast
- **Cards**: Pure white (`oklch(1 0 0)`) for subtle elevation
- **Borders**: Ghost-like, barely visible (`oklch(0.94 0.001 85)` at 40% opacity)
- **Muted text**: Mid-gray (`oklch(0.50 0 0)`) for secondary content

### Dark Mode
- **Background**: Subtle radial gradient for content focus
  - Center: Slightly elevated (`oklch(0.11 0.003 265)`)
  - Mid: Deep black with cool undertone (`oklch(0.08 0.002 265)`)
  - Edges: Deeper black (`oklch(0.06 0.003 265)`)
- **Foreground**: Near-white (`oklch(0.98 0 0)`)
- **Cards**: Slightly elevated from background (`oklch(0.12 0.002 265)`)
- **Borders**: Subtle division (`oklch(0.22 0.001 265)` at 40% opacity)
- **Muted text**: Mid-gray (`oklch(0.55 0 0)`)

### Design Principles
1. **Maximum contrast**: Text is very dark (light mode) or very light (dark mode) for optimal readability
2. **Whisper-quiet UI**: Borders and backgrounds are extremely subtle, letting content shine
3. **Content-focused gradient**: Radial gradient (ellipse 120% x 100% at 50% 20%) draws the eye to center, enhancing focus on content
4. **Subtle warmth/coolness**: Light mode has warm undertones, dark mode has cool undertones
5. **Opacity-based interactions**: Hover states use opacity changes (60-70%) rather than color shifts
6. **Minimal shadows**: Card hovers use very subtle shadows (`oklch(0 0 0 / 0.04)`)

### Typography
- **Headings**: Semibold (600 weight) with aggressive tight tracking (-0.032em on h1)
- **Body**: Regular weight (400) with subtle tracking (-0.008em)
- **Scale**: Generous and responsive (h1: text-5xl → text-7xl)
- **Line height**: Tight on headings (1.1), relaxed on body (1.6)

### Interaction Details
- **Transitions**: 200-250ms with cubic-bezier easing
- **Focus states**: Minimal outline with ring color
- **Hover effects**: Opacity changes and subtle 1px lifts
- **Border radius**: Refined and subtle (0.375rem base)
