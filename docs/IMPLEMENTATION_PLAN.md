# Portfolio Redesign: Lorenzo Filho → Qurlarmah Moses

## Context

The project at `C:/ProjectDev/Portfolio` is a Next.js 16 portfolio built for motocross athlete "Lorenzo Filho." It needs to be transformed into a Lead Frontend Engineer portfolio for **Qurlarmah Moses** following the comprehensive `redesign_guide.md`. The redesign shifts the narrative from motorsport to software engineering, replaces the lime-green/dark-green palette with a Dark Teal system, swaps Framer Motion scroll choreography with GSAP ScrollTrigger, and introduces new interactive components (terminal input, WebGL avatar reveal, 3D scrolling avatar, steam frame hover effect).

---

## Phase 0: Documentation Setup

### 0.1 Create `docs/` folder and save implementation guide
- Create `C:/ProjectDev/Portfolio/docs/` directory
- Save this full implementation plan as `docs/IMPLEMENTATION_PLAN.md`
- Save a copy of the redesign guide as `docs/redesign_guide.md` for reference
- Save the asset replacement guide as `docs/ASSET_REPLACEMENT_GUIDE.md` (extracted from the table below)
- Save the Render deployment guide as `docs/DEPLOYMENT_GUIDE.md` (extracted from Phase 14)

**Files created**: `docs/IMPLEMENTATION_PLAN.md`, `docs/redesign_guide.md`, `docs/ASSET_REPLACEMENT_GUIDE.md`, `docs/DEPLOYMENT_GUIDE.md`

---

## Phase 1: Foundation — Packages, Color System, Typography, Config

### 1.1 Install new packages
```bash
pnpm add gsap @gsap/react
pnpm add -D @types/gsap
```
- GSAP includes ScrollTrigger, MotionPathPlugin as built-in plugins (register at app level)
- Keep `framer-motion` for simple component enter/exit animations
- Keep `three`, `@react-three/fiber`, `@react-three/drei`
- Keep `lenis` (will integrate with GSAP ticker)

### 1.2 Remove unused packages
```bash
pnpm remove expo expo-asset expo-file-system expo-gl react-native @nuxt/kit @emotion/is-prop-valid
```

### 1.3 Update fonts — `app/layout.tsx`
- **Remove**: Roboto, Libre_Baskerville, Alex_Brush, Oswald imports
- **Add**: `Inter`, `Space_Grotesk`, `JetBrains_Mono` from `next/font/google`
- Update CSS variables: `--font-inter`, `--font-space-grotesk`, `--font-jetbrains-mono`
- Update metadata: title → "Qurlarmah Moses — Lead Frontend Architect", description updated
- Update favicon/icon references (will need new QM icons)

### 1.4 Overhaul color system — `app/globals.css`
Replace `:root` variables:
```css
:root {
  --background: #111112;          /* Obsidian Space */
  --background-secondary: #282828; /* Charcoal Void */
  --brand: #008080;               /* Deep Cyan */
  --accent: #5EEAD4;              /* Electric Aqua */
  --atmosphere: #014D4E;          /* Midnight Teal */
  --text-primary: #F1F5F9;        /* Bone White */
  --text-muted: #94A3B8;
}
```
- Remove all `--lorenzo-*` variables
- Update `@theme inline` font references to new font stack
- Update shadcn/ui CSS variables (primary, secondary, accent, etc.) to teal system
- Remove `.dark` variant (site is dark-mode only)
- Remove `.simteste` test class
- Update base heading styles: remove forced uppercase, use Space Grotesk

### 1.5 Remove old local fonts
- Delete `public/fonts/Brier-Bold.woff2` and `public/fonts/MonaSans-Variable.woff2`
- Remove their `@font-face` declarations from globals.css

### 1.6 GSAP + Lenis integration — `components/smooth-scroll.tsx`
- Register GSAP plugins: `gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)`
- Connect Lenis to GSAP ticker: `lenis.on('scroll', ScrollTrigger.update)` and add Lenis to `gsap.ticker`
- This is critical — all GSAP scroll animations depend on this bridge

### 1.7 Update `next.config.mjs`
- Remove `typescript.ignoreBuildErrors: true` (fix TS errors properly)
- Keep `images.unoptimized: true` for static export compatibility

**Files modified**: `package.json`, `app/layout.tsx`, `app/globals.css`, `components/smooth-scroll.tsx`, `next.config.mjs`
**Files deleted**: `public/fonts/Brier-Bold.woff2`, `public/fonts/MonaSans-Variable.woff2`

---

## Phase 2: Preloader — QM Monogram

### 2.1 Rewrite `components/preloader.tsx`
- **Background**: `#111112` (Obsidian Space) full-screen fixed overlay at `z-index: 9999`
- **Center**: SVG monogram combining letters "Q" and "M"
  - CSS `stroke-dasharray` + `stroke-dashoffset` animation to "draw" the letters
  - Stroke color: `#5EEAD4` (Electric Aqua)
- **Bottom center**: Text "Loading QURLARMAH" in JetBrains Mono with CSS `@keyframes` opacity pulse
- **Exit**: On `window.load`, GSAP fades overlay opacity → 0, then `display: none`
- Duration: ~3s total

**Files modified**: `components/preloader.tsx`
**New asset needed**: `public/images/qm-monogram.svg` (SVG of combined Q+M letters)

---

## Phase 3: Header & Name Pronunciation

### 3.1 Rebrand `components/header.tsx`
- Replace logo images with text "QM" or inline SVG monogram
- Navigation links: "In Production", "Projects", "Community", "Contact"
- Remove all Lorenzo branding, motocross references
- Keep fixed positioning and scroll-aware backdrop blur
- Update mix-blend-mode logic for dark teal background
- Logo color: `#5EEAD4` on dark sections

### 3.2 Create `components/name-pronunciation.tsx` (NEW)
- Fixed top-left anchor: "Qurlarmah Moses" text
- On hover over "Qurlarmah": hidden sibling slides in from left with:
  - Circular speaker button (lucide `Volume2` icon)
  - Phonetic text: `qurl·arm·ah [ka'la:ma]` in JetBrains Mono
- `<audio>` element with name pronunciation recording
- Speaker button onClick → `audio.play()`
- CSS width/opacity transition for reveal animation

**Files modified**: `components/header.tsx`
**Files created**: `components/name-pronunciation.tsx`
**New asset needed**: `public/audio/qurlarmah-pronunciation.mp3`

---

## Phase 4: Hero Section — Terminal, Text Animation, WebGL Reveal

This is the most complex section. Rewrite `components/hero-section.tsx` completely.

### 4.1 Staggered Text Animation
- Introductory text: "Lead Frontend Architect" / "Engineering scalable UI systems since 2019"
- Split text into individual `<span>` characters using `Intl.Segmenter`
- GSAP stagger animation: each char slides up from `translateY(100%)` with overflow hidden
- Parent container has `aria-label` with full text; spans are `aria-hidden="true"`

### 4.2 Terminal Input Handler — `components/terminal-input.tsx` (NEW)
- Global `keydown` event listener captures keystrokes silently
- Stores typed string in a ref
- **"sunnies" Easter Egg**: When exact sequence "sunnies" detected, overlay sunglasses on hero portrait (no UI hint while typing)
- **"init" / Enter**: Triggers the WebGL avatar reveal sequence
- Visual: Subtle blinking cursor indicator at bottom of hero

### 4.3 WebGL Avatar Reveal
- Reuse/adapt `components/interactive-portrait.tsx` Three.js infrastructure
- Load caricature image as texture on a WebGL plane
- Custom GLSL fragment shader with displacement map (greyscale noise texture)
- GSAP tweens `u_progress` uniform from 0.0 → 1.0 on trigger
- Avatar "materializes" through digital ripple/glitch effect
- Teal-tinted lighting (`#5EEAD4` rim light)

### 4.4 Hero Layout
- Full viewport height, `#111112` background
- Name pronunciation component anchored top-left
- Staggered text animation center-left
- Terminal cursor/input hint bottom
- WebGL canvas for avatar reveal on right side

**Files modified**: `components/hero-section.tsx`, `components/interactive-portrait.tsx`
**Files created**: `components/terminal-input.tsx`, `components/staggered-text.tsx`
**New assets needed**: Caricature/avatar image (`public/images/avatar-portrait.png`), displacement noise texture (`public/images/displacement-noise.png`)

---

## Phase 5: In Production — Stats Counters

### 5.1 Rewrite `components/rider-tech-section.tsx` → rename to `components/in-production-section.tsx`
- Section title: "In Production"
- GSAP ScrollTrigger pins section during counter animations
- Stats grid with GSAP Counter tweens (numbers count up on scroll):
  - "5+" → Global Awards & Hackathon Victories (Imagine Cup EMEA, Power Learn Project)
  - "250+" → Developers Mentored (GDSC Lead)
  - "95%+" → On-Time Delivery Rate (ISE, Oasys-ke)
  - "200+" → Developers Upskilled (MksU Hackfest)
  - "60+" → Azure Certifications Facilitated (MLSA)
- Numbers in JetBrains Mono (monospace prevents horizontal shift during counting)
- Labels in Inter
- Electric Aqua (`#5EEAD4`) for the counter numbers, Bone White for labels
- Background: `#111112` with subtle gradient to `#014D4E`

**Files created**: `components/in-production-section.tsx`
**Files deleted**: `components/rider-tech-section.tsx`

---

## Phase 6: Projects Hall of Fame

### 6.1 Rewrite `components/helmet-hall.tsx` → rename to `components/projects-hall.tsx`
- Replace helmet gallery with project showcase cards
- Keep grid/scroll reveal mechanics from original
- Projects (from redesign guide Section 7.1):
  1. **ISE - Agri Command** (2025 Active) — AI agricultural platform, React/Node/Docker
  2. **Nyeri County e-Services** (2025 Active) — Government portal, installment processing
  3. **Intelligent Enterprise UI** (2025 Completed) — Design system architecture
  4. **Oasys-ke Architecture** (2024 Deployed) — 95%+ delivery rate
  5. **iBoost - Imagine Cup** (2023 Awarded) — EMEA World Finals victory
- Each card: year badge, project name, tech stack tags, impact metric, description
- GSAP ScrollTrigger staggered entrance animations
- Cards use `#282828` (Charcoal Void) background with `#008080` border accent on hover
- Glow effect on hover using `#5EEAD4` box-shadow

**Files created**: `components/projects-hall.tsx`
**Files deleted**: `components/helmet-hall.tsx`, `components/helmet-hall-bk.tsx`

---

## Phase 7: Community Ecosystem

### 7.1 Rewrite `components/masonry-gallery-section.tsx` → rename to `components/community-section.tsx`
- Section title: "Community Ecosystem"
- Grid layout (3 columns on desktop, 1 on mobile):
  1. **Microsoft Learn Student Ambassador (Gold)** — "60+ Azure Certifications Facilitated", workshop imagery
  2. **Google Developer Student Club Lead** — "250+ Members Skilled", Compose Camp, Android/Jetpack Compose
  3. **MksU Hackfest Convener** — "200+ Developers, 15+ Sustainability Projects", 3-day hackathon
- Each grid item: image placeholder, role title, stats overlay, brief description
- This section includes the **Face Hover Steam Frame** interaction (see Phase 10)

**Files created**: `components/community-section.tsx`
**Files deleted**: `components/masonry-gallery-section.tsx`

---

## Phase 8: Architecture Case Studies

### 8.1 Rewrite `components/bike-showcase.tsx` → rename to `components/case-studies-section.tsx`
- Deep-dive technical cards for 2-3 flagship projects
- Each card expands on click/scroll to reveal:
  - Problem statement
  - Architectural choices (tech stack diagram)
  - CI/CD deployment strategy
  - Key metrics and outcomes
- GSAP ScrollTrigger for card reveal animations
- Code snippets in JetBrains Mono with syntax-highlight styling

**Files created**: `components/case-studies-section.tsx`
**Files deleted**: `components/bike-showcase.tsx`

---

## Phase 9: Deployment Roadmap (Timeline)

### 9.1 Rewrite `components/race-day-countdown.tsx` → rename to `components/deployment-roadmap.tsx`
- Chronological vertical timeline of project launches
- Timeline entries: year markers with project milestones
- GSAP scroll-driven progress line that fills as user scrolls
- Timeline nodes glow (`#5EEAD4`) when they enter viewport
- Replace countdown logic with static timeline data

### 9.2 Remove unused sections
- Delete `components/interactive-schedule.tsx` (merged into roadmap)
- Delete `components/historical-results-accordion.tsx` (merged into case studies)
- Delete `components/mission-section.tsx` (no equivalent needed)
- Delete `components/gallery-section.tsx`
- Delete `components/partners-section.tsx`
- Delete `components/store-section.tsx`
- Delete `components/testimonial-section.tsx`
- Delete `components/track-split-section.tsx`
- Delete `components/scroll-collage-section.tsx`
- Delete `components/signature-marquee-section.tsx`
- Delete `components/animated-texture-canvas.tsx`
- Delete `components/interactive-clean.tsx`

**Files created**: `components/deployment-roadmap.tsx`
**Files deleted**: Multiple (listed above)

---

## Phase 10: Face Hover — Steam Frame Overlay

### 10.1 Create `components/steam-frame-portrait.tsx` (NEW)
- Used within the Community section
- DOM structure: `.portrait-container` (relative, overflow hidden)
  - Base portrait `<img>`
  - Steam frame overlay `<img>` (transparent PNG of steampunk glasses)
- **Method A (CSS)**: Glasses start at `opacity: 0; transform: translateY(-50px)`
  - On hover: `opacity: 1; transform: translateY(0)` with `cubic-bezier(0.175, 0.885, 0.32, 1.275)` bounce
- **Method C enhancement**: GSAP `quickTo` for magnetic cursor parallax
  - Base image moves slightly opposite to cursor
  - Glasses move slightly with cursor → 3D depth illusion

**Files created**: `components/steam-frame-portrait.tsx`
**New assets needed**: `public/images/portrait-base.png` (professional photo), `public/images/steam-frame-glasses.png` (transparent PNG steampunk glasses)

---

## Phase 11: 3D Scrolling Avatar

### 11.1 Create `components/scrolling-avatar-3d.tsx` (NEW)
- Single `<canvas>` element: `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 50`
- Three.js scene with caricature `.glb` model (replaces helmet-lorenzo.glb)
- Lighting: AmbientLight + DirectionalLight tinted `#5EEAD4`
- **Scroll path**: Invisible anchor `<div>` elements placed in Projects Hall and Timeline sections
- On load + resize: calculate anchor coordinates → GSAP MotionPathPlugin generates dynamic Bezier spline
- GSAP Timeline bound to ScrollTrigger spanning full document height
- Timeline scrubs avatar X/Y/Z position along MotionPath
- Normalized scroll progress (0–1) drives `rotation.x`, `rotation.y`
- `Math.sin(time)` added to Y-axis for gentle hovering/levitation effect
- `requestAnimationFrame` paused when tab inactive or canvas out of view

### 11.2 Adapt `components/helmet-3d-model.tsx` → reuse as utility or delete
- The R3F infrastructure can be repurposed for the avatar model loading
- If the scrolling avatar uses raw Three.js (for fixed canvas), the R3F component may be removed

**Files created**: `components/scrolling-avatar-3d.tsx`
**Files deleted**: `components/helmet-3d-model.tsx` (if not reused)
**New asset needed**: `public/3d/avatar-caricature.glb` (3D caricature model, Draco-compressed)

---

## Phase 12: Footer & Social

### 12.1 Rebrand `components/footer.tsx`
- Update all text to Qurlarmah Moses identity
- Links: GitHub, LinkedIn, Twitter/X, email
- "Designed & Engineered by Qurlarmah Moses" tagline
- Background: `#111112`, accent line in `#008080`

### 12.2 Rebrand `components/social-section.tsx`
- Update social media links and handles
- Replace any Lorenzo imagery
- Keep layout structure, update colors to teal system

**Files modified**: `components/footer.tsx`, `components/social-section.tsx`

---

## Phase 13: Page Assembly & Polish

### 13.1 Update `app/page.tsx` — New section order:
```tsx
<Header />
<NamePronunciation />
<HeroSection />              // Terminal + Staggered Text + WebGL Reveal
<InProductionSection />       // Stats Counters
<ProjectsHall />              // Projects Hall of Fame
<CaseStudiesSection />        // Architecture Case Studies
<DeploymentRoadmap />         // Timeline
<CommunitySection />          // Community + Steam Frame Portrait
<SocialSection />
<Footer />
<ScrollingAvatar3D />         // Fixed canvas overlay (pointer-events: none)
```
- Remove all SVG divider `<Image>` elements (tire tracks, splashes)
- Remove commented-out components

### 13.2 Performance optimization
- Lazy load WebGL canvases with Intersection Observer
- Pause `requestAnimationFrame` when tab inactive
- Ensure all GSAP animations target `transform`/`opacity` only (GPU-accelerated)
- Add `loading="lazy"` to non-critical images
- Test with Lighthouse

### 13.3 Accessibility
- `aria-label` on fragmented text spans, `aria-hidden="true"` on individual chars
- Keyboard navigation for all interactive elements
- `prefers-reduced-motion` media query disables GSAP animations
- Proper heading hierarchy (h1 → h6)
- Alt text on all images

### 13.4 Remove old SVG/image dividers and motocross-specific assets
- Delete all tire track SVGs (trilha*.svg, splash.svg, etc.)
- Delete all Lorenzo photos, helmet images, flag images, trophy SVGs
- Delete motorcycle images, partner logos
- Delete old icon files

**Files modified**: `app/page.tsx`

---

## Phase 14: Deployment on Render Cloud

### 14.1 Create `render.yaml` (Blueprint)
```yaml
services:
  - type: web
    name: qurlarmah-portfolio
    runtime: node
    buildCommand: pnpm install && pnpm build
    startCommand: pnpm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
    plan: free
```

### 14.2 Create `Dockerfile` (optional, for containerized deployment)
```dockerfile
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### 14.3 Render Deployment Steps
1. Push code to GitHub repository
2. On Render dashboard: New → Web Service → Connect GitHub repo
3. Build command: `pnpm install && pnpm build`
4. Start command: `pnpm start`
5. Set Node.js environment, select free/starter plan
6. Add custom domain if available
7. Enable auto-deploy on push to main branch

**Files created**: `render.yaml`, `Dockerfile`

---

## Asset Replacement Guide

After implementation, these assets must be replaced with Qurlarmah Moses's personal content:

| Asset | Current File | Replacement Needed | How to Generate |
|-------|-------------|-------------------|-----------------|
| **3D Avatar Model** | `public/3d/helmet-lorenzo.glb` | `public/3d/avatar-caricature.glb` | Commission a 3D caricature from Fiverr/Sketchfab artist, or use Ready Player Me (readyplayer.me) to generate a stylized avatar. Export as .glb with Draco compression. Keep under 2MB. |
| **QM Monogram SVG** | N/A (new) | `public/images/qm-monogram.svg` | Design in Figma/Illustrator: interlock letters Q and M with clean geometric strokes. Export as SVG with `stroke` paths (no fills) for the draw animation. |
| **Hero Portrait/Avatar** | `public/images/hero-on.png`, `hero-off.png` | `public/images/avatar-portrait.png` | Professional photo or illustrated caricature. High-res PNG (min 1024x1024), transparent background preferred for WebGL texture. |
| **Portrait for Community Section** | `public/images/lorenzo-pose*.png` | `public/images/portrait-base.png` | Professional headshot photo. Square crop, neutral expression, high resolution (800x800+). |
| **Steam Frame Glasses** | N/A (new) | `public/images/steam-frame-glasses.png` | Design steampunk-style glasses in Photoshop/Illustrator. Transparent PNG, positioned to align over eyes of portrait-base.png. Match the exact eye-level positioning. |
| **Displacement Noise Texture** | N/A (new) | `public/images/displacement-noise.png` | Generate in Photoshop: Filter → Render → Clouds on 512x512 canvas. Greyscale. Or download from textures.com. |
| **Name Pronunciation Audio** | N/A (new) | `public/audio/qurlarmah-pronunciation.mp3` | Record yourself saying "Qurlarmah" clearly. Export as MP3, keep under 200KB. |
| **Favicon / App Icons** | `public/icon-*.png`, `public/icon.svg`, `public/apple-icon.png` | Same paths, new designs | Generate from QM monogram SVG. Use realfavicongenerator.net to create all sizes (16x16, 32x32, 180x180, SVG). |
| **Community Section Images** | `public/images/lofan/*`, `lorenzo-col*` | `public/images/community/mlsa.jpg`, `gdsc.jpg`, `hackfest.jpg` | Photos from actual MLSA workshops, GDSC events, MksU Hackfest. Crop to consistent aspect ratio (16:9 or 4:3). |
| **OG Image** | N/A (new) | `public/images/og-image.png` | 1200x630 PNG: dark teal background, "Qurlarmah Moses — Lead Frontend Architect" text, QM monogram. Create in Figma/Canva. |
| **All Lorenzo images** | `public/images/lorenzo-*`, `public/images/helmets/*`, `public/images/flags/*`, `public/images/trofeus/*`, `public/images/partners/*`, `public/images/moto*`, `public/images/cap-*`, `public/images/ico-helmet*`, `public/images/panov0.png`, `public/images/trofeus-lorenzo.PNG`, `public/images/inspired-by-lando-norris.png` | DELETE all | These are all Lorenzo Filho specific. Remove entirely. |
| **SVG Decorative Elements** | `public/images/trilha*.svg`, `splash.svg`, `spla.svg`, `curv*.svg`, `footer-mask.svg`, `mask-pneu.svg`, `race-day.svg`, `tras.svg`, `trass.svg`, `v0mask.svg` | DELETE or replace | These are motocross tire-track themed. Delete. Optionally create new circuit-board or code-themed SVG patterns for section dividers. |

---

## Verification Plan

1. **Visual check**: Run `pnpm dev`, verify every section renders with correct teal color palette
2. **Preloader**: Confirm QM monogram draws on load, text pulses, smooth exit
3. **Hero terminal**: Type random keys (no UI change), type "sunnies" (glasses appear), type "init" (avatar reveals)
4. **Stats counters**: Scroll to In Production section, verify numbers count up smoothly
5. **Projects Hall**: Verify all 5 project cards render with correct data, hover glow works
6. **Community grid**: Verify 3 grid items, steam frame portrait hover effect
7. **3D Avatar**: Scroll full page, verify avatar follows Bezier path, rotates, hovers
8. **Responsiveness**: Test at 375px (mobile), 768px (tablet), 1280px+ (desktop)
9. **Performance**: Run Lighthouse audit, target 90+ performance score
10. **Accessibility**: Run axe DevTools, verify 0 critical/serious violations
11. **Build**: `pnpm build` succeeds without errors
12. **Deployment**: Deploy to Render, verify production build loads correctly
