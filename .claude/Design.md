# Qurlarmah Moses — Portfolio Design System

A comprehensive design system for the personal portfolio of **Qurlarmah Moses, Lead Frontend Architect**. Derived from the high-fidelity structure of the Lando Norris digital experience (by OFF+BRAND) and adapted through the Lorenzo Filho motocross implementation. This document is the authoritative reference for visual consistency, page layout, component behavior, and interaction design across the entire portfolio.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Conceptual Mapping](#conceptual-mapping)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Page Layout Specifications](#page-layout-specifications)
7. [Components](#components)
8. [Motion & Animation](#motion--animation)
9. [Imagery, Media & Assets](#imagery-media--assets)
10. [Interaction Design](#interaction-design)
11. [Accessibility & Performance](#accessibility--performance)
12. [Design Checklist](#design-checklist)

---

## Design Philosophy

### 1. The Simple Songs Principle

> "Simple design is like simple songs — they can be powerful, but there is more pressure on each note to strengthen the song."

Every element must earn its place. This is not minimalism for its own sake — it is ruthless curation where each remaining element carries maximum impact. A single bold choice outperforms multiple safe ones.

**Application:**
- Before adding any element, ask: "Does this strengthen the composition?"
- Each visual element serves a clear purpose
- Restraint is harder than addition — resist the urge to overcomplicate

### 2. Zero Redundancy

Information or visual elements that appear more than once dilute their effectiveness. One strong instance beats multiple weak repetitions.

**Application:**
- Never duplicate information across sections
- Consolidate similar UI patterns into single, purposeful instances
- Remove decorative elements that don't add meaning

### 3. Noise Reduction

Visual noise is the enemy of clarity. Every element that could be removed while retaining meaning must be removed.

**Application:**
- Minimize text — use fewer words with more impact
- Let imagery and space communicate where text cannot
- White space is content — it creates breathing room and hierarchy

### 4. Bold Restraint

Make confident choices, then exercise restraint in execution. One dramatic element surrounded by calm is more powerful than chaos.

**Application:**
- Choose one hero element per section
- Support bold typography with generous negative space
- Let accent colors punctuate, not dominate

### 5. Cinematic Storytelling Through Scroll

Adapted from the Lando Norris "Vertical Drive" paradigm: the portfolio is a controlled, linear narrative. The user's scroll position drives the story. Sections are sequenced to build authority — from introduction through proof of execution to community and personality.

**Application:**
- GSAP ScrollTrigger pins critical sections during key animations
- Scroll progress drives 3D avatar movement, counter animations, and text reveals
- The user never "accidentally" skips a section — animation pacing ensures each section lands

---

## Conceptual Mapping

The portfolio adapts the "athlete brand" model into a "builder brand" for a Lead Frontend Engineer. Every motorsport concept maps to a software engineering equivalent.

### Section Mapping

| Original (Lando Norris) | Adapted (Qurlarmah Moses) | Narrative Purpose |
|:---|:---|:---|
| **Hero / Landing** | **The Terminal** | Introduce the engineer. Interactive terminal input, staggered text reveal "Lead Frontend Architect", WebGL avatar materialization. Replaces helmet/face imagery with caricature reveal. |
| **Signature Marquee** | **Mission Statement** | Large-scale typography scroll. "Engineering scalable systems, mentoring the next generation, shipping with precision." Replaces "Redefining limits, fighting for wins…" |
| **Photo Collage / Masonry** | *Removed* | Consolidated into Community section to avoid redundancy. |
| **On Track** (stats, results, race data) | **In Production** | Software delivery metrics with GSAP counter animations. 95%+ delivery rate, 250+ developers mentored, global awards. Replaces race wins, podiums, pole positions. |
| **Off Track** (lifestyle, partnerships) | **Community Ecosystem** | MLSA Gold, GDSC Lead, MksU Hackfest Convener. Workshop photography replaces lifestyle shoots. Steam Frame portrait hover lives here. |
| **Helmets Hall of Fame** | **Projects Hall of Fame** | Flagship project showcase in staggered grid. ISE-Agri Command, Nyeri e-Services, Imagine Cup. Replaces chronological helmet gallery. |
| **F1 Result Highlights** (table) | **Architecture Case Studies** | Technical deep-dives with expandable cards. Problem → Architecture → CI/CD → Outcome. Replaces race results table. |
| **Calendar** | **Deployment Roadmap** | Vertical timeline of project milestones. GSAP-driven progress line fills on scroll. Replaces Grand Prix schedule. |
| **Photo Gallery (Off Track)** | **Community Gallery** | Grid of MLSA workshops, GDSC events, hackathon photos. Replaces Barcelona/Battersea/Austria photos. |
| **What's Up On Socials** | **Connect** | Social links with fanned card layout. GitHub, LinkedIn, X, Email. Replaces TikTok/Instagram/YouTube/Twitch. |
| **Footer** (masked card, helmet, signature) | **Footer** | Dark teal card with QM monogram, navigation, social links, "Designed & Engineered by Qurlarmah Moses". Replaces helmet image and LN signature. |

### Metric Mapping

| F1 Telemetry | Engineering Equivalent | Value | Source |
|:---|:---|:---|:---|
| Total Wins (11) | Global Awards & Hackathon Victories | 5+ | Imagine Cup EMEA, Power Learn Project |
| Total Podiums (44) | Developers Mentored | 250+ | GDSC Lead program |
| Fastest Laps (18) | On-Time Delivery Rate | 95%+ | ISE, Oasys-ke tenures |
| Pole Positions (16) | Developers Upskilled | 200+ | MksU Hackfest |
| F1 Seasons (7) | Azure Certifications Facilitated | 60+ | MLSA Gold activities |

---

## Color System

The fluorescent lime/dark green palette of the Lorenzo/Lando Norris design is replaced with a **Dark Teal** system. Teal projects the trusted stability of blue and the forward-thinking energy of green — ideal for an enterprise-grade engineering portfolio.

### Primary Palette

| Token | Name | Hex | RGB | Usage |
|:---|:---|:---|:---|:---|
| `--bg-primary` | Obsidian Space | `#111112` | (17, 17, 18) | Primary background. Replaces `#282c20` (lorenzo-dark). Deep foundation for all dark sections. |
| `--bg-secondary` | Charcoal Void | `#282828` | (40, 40, 40) | Elevated surfaces: cards, modals, code blocks. Replaces `#0a0a0a`. |
| `--brand` | Deep Cyan | `#008080` | (0, 128, 128) | Structural brand color. Primary buttons, border accents, static icons. Replaces `#c8f550` for structural use. |
| `--accent` | Electric Aqua | `#5EEAD4` | (94, 234, 212) | Interactive accent. Hover glows, text highlights, cursor trails, active indicators. Replaces `#c8f550` accent. |
| `--atmosphere` | Midnight Teal | `#014D4E` | (1, 77, 78) | Gradient overlays, shadow tinting, atmospheric depth layers. New — no direct Lorenzo equivalent. |
| `--text-primary` | Bone White | `#F1F5F9` | (241, 245, 249) | Primary text on dark backgrounds. Replaces `#ffffff`. |
| `--text-muted` | Slate Gray | `#94A3B8` | (148, 163, 184) | Secondary text, labels, captions. Replaces `rgba(255,255,255,0.4-0.7)`. |
| `--bg-light` | Warm Cream | `#F5F1E8` | (245, 241, 232) | Light section backgrounds (Community, Connect). Retained from Lorenzo palette. |
| `--text-dark` | Carbon | `#0F172A` | (15, 23, 42) | Text on light/cream backgrounds. Replaces `#000000`. |

### CSS Variables (Copy-Paste)

```css
:root {
  --bg-primary: #111112;
  --bg-secondary: #282828;
  --brand: #008080;
  --accent: #5EEAD4;
  --atmosphere: #014D4E;
  --text-primary: #F1F5F9;
  --text-muted: #94A3B8;
  --bg-light: #F5F1E8;
  --text-dark: #0F172A;
}
```

### Color Application Rules

1. **Accent Sparingly**: `--accent` (#5EEAD4) appears only on:
   - Key words in headlines (via display font class)
   - Primary CTAs
   - Hover states and glows
   - Counter numbers in the In Production section
   - Footer exterior background

2. **Contrast Pairs**:
   - Bone White on Obsidian: `#F1F5F9` on `#111112` — primary dark sections
   - Electric Aqua on Obsidian: `#5EEAD4` on `#111112` — accent highlights
   - Carbon on Cream: `#0F172A` on `#F5F1E8` — light sections
   - Deep Cyan on Obsidian: `#008080` on `#111112` — structural/borders

3. **Gradient Patterns**:
   - Hero atmospheric: `radial-gradient(ellipse at 30% 50%, #014D4E 0%, #111112 70%)`
   - Section transitions: `linear-gradient(to bottom, #111112, #014D4E, #111112)`
   - Card glow on hover: `box-shadow: 0 0 40px rgba(94, 234, 212, 0.15)`

4. **Never**:
   - Use accent for body text
   - Apply accent to more than 2–3 elements per viewport
   - Use pure white (#ffffff) as a background — always use Bone White or Cream
   - Combine accent with low-contrast backgrounds

---

## Typography

### Font Stack

The aggressive motorsport display fonts are replaced with clean, geometric sans-serifs that reflect code editors and modern SaaS design.

| Role | Font Family | Weights | Usage | Replaces |
|:---|:---|:---|:---|:---|
| **Display** | Space Grotesk | 500, 700 | Section titles, hero headlines, accent words | Brier Bold |
| **Body / UI** | Inter | 300, 400, 500, 700 | Body text, UI elements, navigation, labels | Roboto |
| **Mono** | JetBrains Mono | 400, 700 | Terminal text, stat counters, code snippets, technical labels | N/A (new) |

> **Note on the frontend-design skill**: The skill advises against using Inter. However, for this specific project, Inter is specified in the redesign guide as the body/UI font, and its neutrality is intentional — it recedes to let the display typography and technical content take focus. The *distinctive* voice comes from Space Grotesk for display and JetBrains Mono for technical elements. If during implementation a more characterful body font is desired, consider **Satoshi** or **General Sans** as alternatives.

### Type Scale

| Element | Size (Mobile) | Size (Desktop) | Weight | Transform | Font |
|:---|:---|:---|:---|:---|:---|
| Hero H1 | 3rem (48px) | 6rem–8rem (96–128px) | 700 | Uppercase | Space Grotesk |
| Section H2 | 2.5rem (40px) | 4rem–5rem (64–80px) | 700 | Uppercase | Space Grotesk |
| Section Subtitle | 0.75rem (12px) | 0.875rem (14px) | 500 | Uppercase, tracking-widest | Inter |
| Card Title | 1.25rem (20px) | 1.5rem (24px) | 700 | Uppercase | Space Grotesk |
| Body | 1rem (16px) | 1.125rem (18px) | 400 | Sentence case | Inter |
| Caption | 0.75rem (12px) | 0.875rem (14px) | 500 | Uppercase | Inter |
| Label / Tag | 0.75rem (12px) | 0.75rem (12px) | 700 | Uppercase, letter-spacing 0.2em | JetBrains Mono |
| Stat Counter | 3rem (48px) | 5rem–6rem (80–96px) | 700 | Tabular numerals | JetBrains Mono |
| Terminal Text | 0.875rem (14px) | 1rem (16px) | 400 | None | JetBrains Mono |

### Headline Formula

Adapted from the Lando Norris pattern of splitting headlines between a neutral font and an accented display font:

```
PRIMARY WORD → Space Grotesk 700, --text-primary (Bone White)
ACCENT WORD  → Space Grotesk 700, --accent (Electric Aqua)
```

**Example (Projects Hall of Fame):**
```
PROJECTS          ← Bone White, Space Grotesk 700
HALL OF FAME      ← Electric Aqua, Space Grotesk 700
```

**Example (In Production):**
```
IN                ← Bone White
PRODUCTION        ← Electric Aqua
```

### Typography Rules

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-space-grotesk);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-weight: 700;
}
```

1. **Line Height**: Headlines `0.9–1.05`, Body `1.5–1.6`
2. **Letter Spacing**: Headlines `-0.02em` (tight), Labels `0.15em–0.3em` (wide), Body `normal`
3. **Text Wrapping**: `text-balance` for headlines, `text-pretty` for body
4. **Anti-patterns**: Never use more than 2 fonts per section. Never set body below 14px. Never use display fonts for paragraphs. Avoid centered body text over 3 lines.

---

## Spacing & Layout

### Spacing Scale (4px base)

| Token | Value | Usage |
|:---|:---|:---|
| `space-1` | 4px | Micro gaps, icon padding |
| `space-2` | 8px | Tight element spacing |
| `space-4` | 16px | Default element gap |
| `space-6` | 24px | Card padding, inner gaps |
| `space-8` | 32px | Medium section spacing |
| `space-12` | 48px | Large section gaps |
| `space-16` | 64px | Section vertical padding |
| `space-24` | 96px | Major section separation |
| `space-32` | 128px | Hero vertical breathing room |

### Section Padding

```
Mobile:  py-24 px-6   (96px vertical, 24px horizontal)
Tablet:  py-24 px-10  (96px vertical, 40px horizontal)
Desktop: py-32 px-12  (128px vertical, 48px horizontal)
```

### Container Widths

```
max-w-7xl  (1280px) — Primary content container
max-w-6xl  (1152px) — Text-heavy sections (case studies, timeline)
max-w-[1688px]      — Full-width feature sections (footer card)
Full bleed           — Hero, Mission Statement, In Production backgrounds
```

### Grid System

```css
/* Standard 2-column split */
grid-cols-1 md:grid-cols-2

/* Projects Hall of Fame — staggered masonry */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
/* With alternating row offsets via CSS transforms */

/* Community Ecosystem — 3-column */
grid-cols-1 md:grid-cols-3

/* In Production Stats — 5-column on desktop */
grid-cols-2 md:grid-cols-3 lg:grid-cols-5

/* Footer — 12-column grid */
grid-cols-1 md:grid-cols-12
  /* Left nav:     md:col-span-3 */
  /* Center brand: md:col-span-6 */
  /* Right social: md:col-span-3 */
```

### Layout Rules

- Use `gap-*` utilities over margin for grid/flex children
- Never mix margin and gap on same container
- Generous negative space around headlines (min 64px mb on desktop)
- Mobile horizontal padding: minimum 24px (`px-6`)
- Sections alternate between full-bleed dark (`--bg-primary`) and contained light (`--bg-light`) backgrounds

---

## Page Layout Specifications

The portfolio is a single-page application with scroll-driven sections. Below is the complete layout specification for each section, ordered from top to bottom.

---

### 0. Preloader

**Purpose**: Establish brand authority before any content loads. Replaces the Lorenzo preloader.

**Background**: `--bg-primary` (#111112), full-screen fixed overlay, `z-index: 9999`

**Layout**:
```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│              ┌──────────┐                    │
│              │  QM      │  ← SVG monogram    │
│              │  Monogram │  stroke-dasharray  │
│              └──────────┘  draw animation     │
│                                              │
│                                              │
│                                              │
│         "Loading QURLARMAH"                  │
│          ↑ JetBrains Mono, pulsing opacity   │
│          bottom: 40px, centered              │
└──────────────────────────────────────────────┘
```

**Assets**: `public/images/qm-monogram.svg`
**Animation**: SVG stroke draws over ~2s, text pulses via CSS `@keyframes`. On `window.load`, GSAP fades overlay opacity → 0, then `display: none`. Total duration ~3s.

---

### 1. Header (Fixed)

**Purpose**: Persistent navigation and brand anchor. Replaces "LANDO NORRIS" top-left branding.

**Position**: `fixed`, `top: 0`, `z-index: 100`
**Height**: 64px (`h-16`)
**Background**: Transparent → `backdrop-blur-md` + `bg-[--bg-primary]/80` on scroll

**Layout**:
```
┌──────────────────────────────────────────────┐
│  QM                        In Production  ☰  │
│  ↑ monogram/logo           Projects       ↑  │
│  Electric Aqua             Community    menu  │
│  Space Grotesk 700         Contact     icon  │
└──────────────────────────────────────────────┘
```

**Logo**: "QM" text in Space Grotesk 700 at `text-2xl`, color `--accent`. Alternatively, inline SVG of the QM monogram at 32px height.

**Navigation Links** (desktop): "In Production", "Projects", "Community", "Contact" — Inter 500, `--text-primary`, uppercase, `text-sm`, `letter-spacing: 0.1em`. On hover: color transitions to `--accent`.

**Mobile**: Hamburger icon triggers full-screen overlay menu:
- Background: `rgba(17, 17, 18, 0.95)` + `backdrop-blur-xl`
- Menu items: Space Grotesk 700, `text-4xl` to `text-6xl`, uppercase
- Staggered fade-in with 0.1s delay per item
- Active item: `--accent` color with underline
- Bottom: social links row + "Engineering scalable UI since 2019"

---

### 2. Name Pronunciation (Fixed Anchor)

**Purpose**: Accessible, personality-driven name branding. New component — no direct Lorenzo equivalent.

**Position**: Fixed, top-left, below header (`top: 80px, left: 24px`)
**Z-index**: 90

**Layout (collapsed)**:
```
Qurlarmah Moses
```

**Layout (hover on "Qurlarmah")**:
```
🔊  qurl·arm·ah [ka'la:ma]   Qurlarmah Moses
 ↑                             
 speaker button                
 onClick → audio.play()        
```

**Details**:
- "Qurlarmah Moses" in Inter 500, `text-sm`, `--text-primary`
- On hover over "Qurlarmah": sibling element slides in from left with CSS width/opacity transition (0.4s ease-out)
- Speaker button: `lucide-react` Volume2 icon, 32px circular hit area, `--accent` color
- Phonetic text: JetBrains Mono 400, `text-xs`, `--text-muted`
- `<audio>` element: `public/audio/qurlarmah-pronunciation.mp3`

---

### 3. Hero Section — "The Terminal"

**Purpose**: First impression. Introduce the engineer through an interactive terminal metaphor. Replaces the Lando Norris helmet/portrait hero with the face-and-helmet transition.

**Height**: `100vh` minimum
**Background**: `--bg-primary` with radial gradient atmosphere: `radial-gradient(ellipse at 30% 50%, #014D4E 0%, #111112 70%)`

**Layout**:
```
┌──────────────────────────────────────────────┐
│  [Name Pronunciation — fixed]                │
│                                              │
│                                              │
│  LEAD FRONTEND      ┌─────────────────┐     │
│  ARCHITECT          │                 │     │
│                     │  WebGL Canvas   │     │
│  Engineering        │  (avatar        │     │
│  scalable UI        │   reveal area)  │     │
│  systems since      │                 │     │
│  2019               │                 │     │
│                     └─────────────────┘     │
│                                              │
│  ▌  ← blinking terminal cursor              │
│                                              │
└──────────────────────────────────────────────┘
```

**Left Column (55% width on desktop, full on mobile)**:
- **Staggered Text**: "LEAD FRONTEND ARCHITECT" — Space Grotesk 700, `text-6xl` to `text-8xl`, uppercase
  - "LEAD FRONTEND" in `--text-primary`
  - "ARCHITECT" in `--accent`
  - Each character wrapped in `<span>`, animated with GSAP stagger: `translateY(100%)` → `translateY(0%)`, overflow hidden, 0.05s delay per char
  - Parent has `aria-label` with full text; spans are `aria-hidden="true"`
- **Subtitle**: "Engineering scalable UI systems since 2019" — Inter 400, `text-lg`, `--text-muted`
- **Terminal cursor**: Blinking `▌` in JetBrains Mono, `--accent`, CSS `@keyframes` blink

**Right Column (45% width on desktop, hidden on mobile until reveal)**:
- WebGL `<canvas>` for avatar reveal effect
- Initially transparent/hidden
- Triggered by terminal input ("init" or Enter key)

**Terminal Input (invisible)**:
- Global `keydown` listener captures keystrokes into a ref
- No visible text field — keystrokes are silent
- **"sunnies" Easter Egg**: Typing "sunnies" overlays steampunk glasses on avatar (no UI hint during typing). References `public/images/steam-frame-glasses.png`
- **"init" / Enter**: Triggers WebGL displacement reveal of avatar
- The avatar materializes through a GLSL fragment shader with displacement noise texture, teal-tinted rim lighting (`--accent`), GSAP tweening `u_progress` from 0→1

**Assets**:
- `public/images/avatar-portrait.png` (hero caricature/portrait, min 1024×1024, transparent bg)
- `public/images/displacement-noise.png` (512×512 greyscale clouds)
- `public/images/steam-frame-glasses.png` (transparent PNG steampunk glasses)

---

### 4. Mission Statement (Scroll Marquee)

**Purpose**: Large-scale typographic statement. Replaces the Lando Norris "Redefining limits, fighting for wins…" scroll section.

**Height**: `100vh` (pinned during scroll)
**Background**: `--bg-primary`

**Layout**:
```
┌──────────────────────────────────────────────┐
│                                              │
│            ┌─── QM monogram ───┐             │
│            │   (small, muted)  │             │
│            └───────────────────┘             │
│         "ENGINEERING SCALABLE UI            │
│          SINCE 2019"  ← label               │
│                                              │
│   ENGINEERING SYSTEMS,                       │
│   MENTORING THE NEXT                         │
│   GENERATION, SHIPPING                       │
│   WITH PRECISION.                            │
│                                              │
│     ↑ Space Grotesk 700                      │
│     text-5xl to text-8xl                     │
│     "ENGINEERING" + "SHIPPING" → --accent    │
│     Rest → --text-primary                    │
│     Tight line-height: 0.95                  │
└──────────────────────────────────────────────┘
```

**Animation**: Words reveal via GSAP ScrollTrigger as user scrolls. Each word's opacity transitions from `0.15` → `1.0` sequentially, creating a "spotlight" reading effect.

---

### 5. In Production (Stats Section)

**Purpose**: Quantifiable engineering authority. Replaces the F1 career stats (wins, podiums, pole positions) from the On Track page.

**Height**: Auto (pinned during counter animation)
**Background**: `--bg-primary` with subtle gradient to `--atmosphere` (`linear-gradient(180deg, #111112 0%, #014D4E 50%, #111112 100%)`)

**Layout**:
```
┌──────────────────────────────────────────────┐
│                                              │
│  IN                                          │
│  PRODUCTION        ← Section heading         │
│                                              │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  │
│  │ 5+  │ │250+ │ │ 95% │ │200+ │ │ 60+ │  │
│  │     │ │     │ │     │ │     │ │     │  │
│  │AWRDS│ │DEVS │ │DLVRY│ │UPSKL│ │AZURE│  │
│  │     │ │MNTRD│ │RATE │ │     │ │CERTS│  │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘  │
│                                              │
│  Challenging the limits, winning             │
│  projects. Bringing it all each              │
│  and every sprint.                           │
│                                              │
└──────────────────────────────────────────────┘
```

**Stat Counter Grid**: 5 columns on desktop (lg), 3 on tablet (md), 2 on mobile
- **Number**: JetBrains Mono 700, `text-5xl` to `text-6xl`, `--accent`
- **Label**: Inter 700, `text-xs`, uppercase, `letter-spacing: 0.2em`, `--text-muted`
- GSAP Counter tween: numbers count up from 0 on scroll-into-view
- JetBrains Mono monospace ensures no horizontal shift during counting

**Stats Data**:
| Counter | Label | Source |
|:---|:---|:---|
| 5+ | Global Awards | Imagine Cup EMEA, Power Learn Project |
| 250+ | Developers Mentored | GDSC Lead program |
| 95%+ | On-Time Delivery | ISE, Oasys-ke |
| 200+ | Developers Upskilled | MksU Hackfest |
| 60+ | Azure Certs Facilitated | MLSA Gold |

**Supporting quote**: Inter 400 italic (or Space Grotesk 400), `text-xl`, `--text-muted`. Accent words ("limits", "winning", "sprint") in `--accent` and bold.

---

### 6. Projects Hall of Fame

**Purpose**: Flagship project showcase. Replaces the Helmets Hall of Fame chronological gallery.

**Background**: `--bg-primary` (pure dark, high contrast for cards)

**Layout (references Lando Norris Helmets grid — staggered masonry)**:
```
┌──────────────────────────────────────────────┐
│                                              │
│  PROJECTS                                    │
│  HALL OF FAME      ← "HALL OF FAME" in accent│
│                                              │
│  Description: "From award-winning platforms  │
│  to enterprise design systems, these are     │
│  the projects that define the craft."        │
│                                              │
│  ┌──────────┐          ┌──────────┐          │
│  │ ISE-AGRI │          │ NYERI    │          │
│  │ COMMAND  │  ┌──────────┐│ E-SVCS │          │
│  │ 2025     │  │ ISE UI   ││ 2025   │          │
│  └──────────┘  │ DESIGN   │└──────────┘          │
│                │ SYSTEM   │          ┌──────────┐│
│  ┌──────────┐  │ 2025     │          │ iBOOST  ││
│  │ OASYS-KE │  └──────────┘          │ IMAGINE ││
│  │ 2024     │                        │ CUP '23 ││
│  └──────────┘                        └──────────┘│
│                                              │
└──────────────────────────────────────────────┘
```

**Card Design**:
- Background: `--bg-secondary` (#282828)
- Border: `2px solid rgba(0, 128, 128, 0.2)` → hover: `2px solid #5EEAD4`
- Border radius: `rounded-2xl` (1rem)
- Hover: `scale(1.03)` + `box-shadow: 0 0 40px rgba(94, 234, 212, 0.15)`
- Transition: `all 0.3s ease`

**Card Content**:
```
┌─────────────────────────────┐
│  2025 · ACTIVE              │ ← Year badge + status (JetBrains Mono, --accent)
│                             │
│  ISE — AGRI COMMAND         │ ← Project name (Space Grotesk 700, --text-primary)
│                             │
│  AI-first agricultural      │ ← Description (Inter 400, --text-muted, 2 lines max)
│  platform for Kenya Sugar   │
│  Board                      │
│                             │
│  React  Node.js  Docker     │ ← Tech stack tags (JetBrains Mono, --brand borders)
│                             │
│  "Single source of truth    │ ← Impact metric (Inter 500, --text-primary)
│  for agricultural data"     │
│                             │
└─────────────────────────────┘
```

**Projects Data**:
1. **ISE — Agri Command** (2025, Active) — React, Node.js, Docker — "Aggregated data into single source of truth"
2. **Nyeri County e-Services** (2025, Active) — Multiplatform — "Installment processing engine for county revenue"
3. **Intelligent Enterprise UI** (2025, Completed) — Design System — "Unified UI/UX across all platforms"
4. **Oasys-ke Architecture** (2024, Deployed) — React, Agile — "95%+ on-time delivery rate"
5. **iBoost — Imagine Cup** (2023, Awarded) — Microsoft Stack — "EMEA World Finals Victory"

**Animation**: GSAP ScrollTrigger staggered entrance. Cards rise from `y: 60, opacity: 0` with 0.15s stagger.

---

### 7. Architecture Case Studies

**Purpose**: Technical deep-dives. Replaces F1 Result Highlights table.

**Background**: `--bg-primary`

**Layout (references Lando Norris results table — horizontal rows with hover image)**:
```
┌──────────────────────────────────────────────┐
│                                              │
│  ARCHITECTURE                                │
│  CASE STUDIES      ← accent                  │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │ PROJECT        STACK      YEAR  METRIC│    │
│  ├──────────────────────────────────────┤    │
│  │ ISE-AGRI CMD   React/Node  2025  ████ │    │
│  │ ─────────────  ← hover reveals image ─│    │
│  │ NYERI E-SVCS   Multi       2025  ████ │    │
│  │ ──────────────────────────────────────│    │
│  │ OASYS-KE       React       2024  95% │    │
│  └──────────────────────────────────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

**Row Design** (adapted from F1 results table):
- Each row is a horizontal strip, full-width
- Columns: Project Name (bold) | Tech Stack (mono tags) | Year | Key Metric
- On hover: row highlights with `--accent` background (like the lime highlight in Lando's results), and a project screenshot image floats into view (absolute positioned, following cursor Y)
- On click/expand: reveals detailed case study panel below the row:
  - Problem Statement
  - Architecture Diagram (could be inline SVG or image)
  - CI/CD Strategy
  - Key Outcomes
  - Code snippets in JetBrains Mono with syntax highlighting

**Row Typography**:
- Project name: Space Grotesk 700, `text-xl` to `text-2xl`
- Stack/Year: JetBrains Mono 400, `text-sm`
- Metric: JetBrains Mono 700, `text-lg`, `--accent`

**Hover highlight**: When a row is hovered, background transitions to `--accent` and all text transitions to `--bg-primary` (dark on aqua) — directly mirroring the Lando Norris results table lime highlight behavior.

---

### 8. Deployment Roadmap (Timeline)

**Purpose**: Chronological career/project progression. Replaces Calendar/Race schedule.

**Background**: `--bg-primary`

**Layout**:
```
┌──────────────────────────────────────────────┐
│                                              │
│  DEPLOYMENT                                  │
│  ROADMAP           ← accent                  │
│                                              │
│         │                                    │
│    2019 ●── Started Software Engineering     │
│         │                                    │
│    2021 ●── GDSC Lead, Compose Camp          │
│         │                                    │
│    2022 ●── MLSA Gold, Azure Certs           │
│         │                                    │
│    2023 ●── Imagine Cup EMEA Victory         │
│         │   MksU Hackfest Convener           │
│         │                                    │
│    2024 ●── Oasys-ke, 95% Delivery           │
│         │                                    │
│    2025 ●── ISE Lead, Agri Command           │
│         │   Nyeri e-Services                 │
│         │                                    │
└──────────────────────────────────────────────┘
```

**Timeline Design**:
- Vertical line: 2px, `--brand` (#008080), centered on left 20% of viewport
- Nodes: 12px circles, `--bg-secondary` border `--brand` → glow `--accent` when entering viewport
- Year labels: JetBrains Mono 700, `text-2xl`, `--accent`
- Event descriptions: Inter 400, `text-base`, `--text-primary`
- GSAP scroll-driven progress line fills from top to bottom as user scrolls
- Each node entry animates in from `x: -30, opacity: 0`

---

### 9. Community Ecosystem

**Purpose**: Humanize the developer, establish mentorship authority. Replaces Off Track lifestyle section.

**Background**: `--bg-light` (#F5F1E8) — warm cream, contrasting the dark sections above/below

**Layout (references Lando Norris Off Track — large title + photo grid + bio)**:
```
┌──────────────────────────────────────────────┐
│                                              │
│  COMMUNITY                                   │
│  ECOSYSTEM         ← "ECOSYSTEM" in accent   │
│                    ← (using --text-dark for   │
│                       "COMMUNITY" since       │
│                       light background)       │
│                                              │
│  Qurlarmah Moses   24 y.o                    │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │  MLSA    │ │  GDSC    │ │ MksU     │     │
│  │  GOLD    │ │  LEAD    │ │ HACKFEST │     │
│  │          │ │          │ │          │     │
│  │  60+     │ │  250+    │ │  200+    │     │
│  │  certs   │ │  members │ │  devs    │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│                                              │
│  "Since joining the developer community,     │
│  I've been all in — upskilling students,     │
│  chasing impact, and bringing the            │
│  fight to every hackathon."                  │
│  ← "fight to every hackathon" in accent      │
│                                              │
│  ┌──────────────────┐                        │
│  │ Steam Frame      │ ← Portrait with hover  │
│  │ Portrait         │   steampunk glasses     │
│  │ (see Section 10) │   overlay interaction   │
│  └──────────────────┘                        │
│                                              │
└──────────────────────────────────────────────┘
```

**Grid Cards**:
- Background: `white`
- Border: `2px solid rgba(15, 23, 42, 0.1)`
- Border radius: `rounded-2xl`
- Padding: `space-6` (24px)
- Image: community event photo (aspect-ratio 16/9, `rounded-xl`, `object-cover`)
- Title: Space Grotesk 700, `--text-dark`
- Stat: JetBrains Mono 700, `text-3xl`, `--brand` (#008080)
- Description: Inter 400, `--text-dark` at 0.7 opacity

**Community Data**:
1. **Microsoft Learn Student Ambassador (Gold)** — 60+ Azure Certs — `public/images/community/mlsa.jpg`
2. **Google Developer Student Club Lead** — 250+ Members — `public/images/community/gdsc.jpg`
3. **MksU Hackfest Convener** — 200+ Developers, 15+ Projects — `public/images/community/hackfest.jpg`

**Bio Quote**: Adapted from Lando's "Since his F1 debut with McLaren in 2019…" format. Inter 400, `text-xl`, `--text-dark`. Accent phrase in `--brand`.

---

### 10. Steam Frame Portrait (Within Community Section)

**Purpose**: Personality micro-interaction. Replaces the Lando Norris face/helmet hover swap.

**Placement**: Within the Community Ecosystem section, alongside or below the bio quote.

**Layout**:
```
┌──────────────────────┐
│                      │
│    ┌────────────┐    │
│    │            │    │
│    │  Portrait  │    │  ← public/images/portrait-base.png
│    │  (base)    │    │     Square crop, 800×800+
│    │            │    │
│    │  ┌──────┐  │    │
│    │  │glasses│  │    │  ← public/images/steam-frame-glasses.png
│    │  │overlay│  │    │     Positioned over eyes, transparent PNG
│    │  └──────┘  │    │
│    │            │    │
│    └────────────┘    │
│                      │
└──────────────────────┘
```

**Interaction**:
- `.portrait-container`: `position: relative`, `overflow: hidden`, `rounded-2xl`
- Base portrait: fills container, `object-cover`
- Steam frame overlay: `position: absolute`, aligned over eyes
  - Default: `opacity: 0`, `transform: translateY(-50px)`
  - On `:hover` of container: `opacity: 1`, `transform: translateY(0)`
  - Transition: `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)` — creates a satisfying bounce
- **Enhancement (Method C)**: GSAP `quickTo` for magnetic cursor parallax
  - Base image shifts slightly *opposite* to cursor direction
  - Glasses shift slightly *with* cursor direction
  - Creates illusion of 3D depth

**Assets**:
- `public/images/portrait-base.png` — Professional headshot, square crop
- `public/images/steam-frame-glasses.png` — Steampunk glasses, transparent PNG, eye-level aligned

---

### 11. Connect (Social Section)

**Purpose**: Social links and engagement. Replaces "What's Up On Socials" section.

**Background**: `--bg-light` (#F5F1E8) transitioning to `--accent` (#5EEAD4) at bottom

**Layout (references Lando Norris fanned social card stack)**:
```
┌──────────────────────────────────────────────┐
│                                              │
│          ┌── QM monogram (small) ──┐         │
│                                              │
│          CONNECT WITH                        │
│          QURLARMAH       ← accent highlight  │
│                                              │
│         ┌────┐                               │
│        ┌┤    ├┐    ← Fanned card stack       │
│       ┌┤│    │├┐     of social preview       │
│       │││    │││     images (community       │
│       │││    │││     events, projects)        │
│       └┤│    │├┘                              │
│        └┤    ├┘                               │
│         └────┘                               │
│                                              │
│  Follow Qurlarmah on the web                 │
│                                              │
│  GITHUB  LINKEDIN  X  EMAIL                  │
│                                              │
└──────────────────────────────────────────────┘
```

**Card Stack**: 3–5 images fanned with CSS `transform: rotate()` at -8°, -4°, 0°, 4°, 8°. `rounded-2xl`, slight shadow. On hover: cards spread further apart.

**Social Links**: Inter 700, `text-sm`, uppercase, `letter-spacing: 0.15em`. Separated by spaces. `--text-dark`. Hover: `--brand`.

---

### 12. Footer

**Purpose**: Closing brand statement. Replaces the Lorenzo/Lando masked card footer.

**Background**: `--accent` (#5EEAD4) as outer background. Inner card uses `--bg-primary` (#111112) with custom SVG mask shape (organic rounded edges).

**Layout (references Lando Norris footer — masked dark card on lime background)**:
```
┌──────────────────── #5EEAD4 bg ─────────────┐
│  ┌─────────── masked dark card ───────────┐  │
│  │                                        │  │
│  │          QM signature/monogram         │  │
│  │                                        │  │
│  │    ALWAYS ENGINEERING                  │  │
│  │    THE FUTURE.        ← accent words   │  │
│  │                                        │  │
│  │  PAGES           FOLLOW ON             │  │
│  │  Home            GitHub                │  │
│  │  In Production   LinkedIn              │  │
│  │  Projects        X                     │  │
│  │  Community       Email                 │  │
│  │  Contact                               │  │
│  │                                        │  │
│  │         BUSINESS ENQUIRIES ↗           │  │
│  │                                        │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  © 2026 Qurlarmah Moses.   PRIVACY  TERMS   │
│  All rights reserved.                        │
└──────────────────────────────────────────────┘
```

**Headline**: Space Grotesk 700, `text-4xl` to `text-6xl`. "ALWAYS" in `--text-primary`, "ENGINEERING" in `--accent`, "THE FUTURE." in `--text-primary`.

**Footer Nav**: Two columns — Pages (left) and Social (right). Inter 500, `text-sm`, uppercase.

**Mask**: SVG `mask-image` applied to the inner card container for organic, non-rectangular edges. Asset: `public/images/footer-mask.svg` (new, replacing the Lorenzo motocross mask).

**Bottom Bar**: Below the masked card, on the `--accent` background. Copyright text + legal links in `--bg-primary` color.

---

### 13. 3D Scrolling Avatar (Persistent Overlay)

**Purpose**: Visual storytelling anchor that traverses the page. Replaces the 3D helmet that moves through sections on the Lando Norris site.

**Position**: `position: fixed`, `top: 0`, `left: 0`, `width: 100vw`, `height: 100vh`, `pointer-events: none`, `z-index: 50`

**Implementation**:
- Single `<canvas>` element overlaying the entire page
- Three.js renders `.glb` caricature model
- Model tinted with `--accent` rim lighting via DirectionalLight
- AmbientLight for base illumination

**Scroll Path**:
- Invisible anchor `<div>` elements placed in Projects Hall and Deployment Roadmap sections
- On load + resize: JS calculates anchor coordinates → GSAP MotionPathPlugin generates dynamic Bezier spline
- GSAP Timeline bound to ScrollTrigger (full document height)
- Avatar follows spline: X/Y/Z position scrubs with scroll progress
- Rotation driven by normalized scroll progress (0→1)
- `Math.sin(time)` on Y-axis creates gentle hovering/levitation
- `requestAnimationFrame` pauses when tab is inactive or canvas is out of view

**Asset**: `public/3d/avatar-caricature.glb` — 3D caricature, Draco-compressed, < 2MB

**Visibility**: Avatar appears after the Hero section and fades out before the Footer. Active primarily through In Production → Projects Hall → Case Studies → Roadmap.

---

## Components

### Cards

**Dark Card (Projects Hall)**
```css
background: var(--bg-secondary);        /* #282828 */
border: 2px solid rgba(0, 128, 128, 0.2);
border-radius: 1rem;                    /* rounded-2xl */
transition: all 0.3s ease;

&:hover {
  border-color: var(--accent);          /* #5EEAD4 */
  transform: scale(1.03);
  box-shadow: 0 0 40px rgba(94, 234, 212, 0.15);
}
```

**Light Card (Community)**
```css
background: white;
border: 2px solid rgba(15, 23, 42, 0.1);
border-radius: 1rem;
```

**Footer Card (Masked)**
```css
background: var(--bg-primary);          /* #111112 */
mask-image: url('/images/footer-mask.svg');
mask-size: 100% 100%;
mask-repeat: no-repeat;
```

### Buttons

**Primary CTA**
```css
.btn-primary {
  background: var(--accent);            /* #5EEAD4 */
  color: var(--bg-primary);             /* #111112 */
  padding: 16px 32px;
  border-radius: 9999px;               /* rounded-full */
  font-family: var(--font-space-grotesk);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: transform 0.3s ease;
}
.btn-primary:hover {
  transform: scale(1.05);
}
```

**Secondary CTA**
```css
.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid rgba(241, 245, 249, 0.2);
  padding: 10px 20px;
  border-radius: 8px;
  font-family: var(--font-inter);
  font-weight: 500;
}
```

### Tech Stack Tags
```css
.tech-tag {
  font-family: var(--font-jetbrains-mono);
  font-size: 0.75rem;
  font-weight: 400;
  padding: 4px 12px;
  border: 1px solid var(--brand);       /* #008080 */
  border-radius: 6px;
  color: var(--accent);                 /* #5EEAD4 */
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### Hover States

| Element | Hover Effect |
|:---|:---|
| Cards | `scale(1.03)` + border color → `--accent` + glow shadow |
| Buttons | `scale(1.05)` |
| Results Table Row | Background → `--accent`, text → `--bg-primary` |
| Images (in containers) | `scale(1.08)` within `overflow: hidden` parent |
| Navigation Links | Color → `--accent` |
| Social Links | Color → `--brand` (on light bg) or `--accent` (on dark bg) |

**Transition Timing**: `all 0.3s ease` or `transform 0.3s ease, color 0.3s ease`

---

## Motion & Animation

### Core Timing

| Speed | Duration | Usage |
|:---|:---|:---|
| Fast | 0.2–0.3s | Hover states, micro-interactions |
| Normal | 0.5–0.8s | Element reveals, section transitions |
| Slow | 1–1.5s | Page transitions, hero text reveal |
| Dramatic | 2–3s | QM monogram draw, WebGL avatar reveal |

### GSAP Integration

All scroll-driven animations use GSAP ScrollTrigger. Framer Motion is retained only for simple component mount/unmount animations (e.g., menu open/close).

**GSAP + Lenis Bridge** (critical):
```javascript
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### Animation Patterns

**Reveal on Scroll (GSAP)**
```javascript
gsap.from(element, {
  y: 60,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: element,
    start: "top 85%",
    once: true
  }
});
```

**Staggered Children (GSAP)**
```javascript
gsap.from(children, {
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power2.out",
  scrollTrigger: { trigger: parent, start: "top 80%" }
});
```

**Counter Tween (Stats)**
```javascript
gsap.to(counterRef, {
  textContent: targetValue,
  duration: 2,
  ease: "power1.out",
  snap: { textContent: 1 },
  scrollTrigger: { trigger: counterRef, start: "top 80%", once: true }
});
```

**Staggered Text (Hero)**
```javascript
// Each character span
gsap.from(charSpans, {
  y: "100%",
  duration: 0.6,
  stagger: 0.04,
  ease: "power3.out",
  delay: 0.5 // after preloader exits
});
```

**Mission Statement Word Reveal**
```javascript
gsap.to(words, {
  opacity: 1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
});
```

### Easing

```javascript
// Standard reveals
ease: "power3.out"

// Bouncy interactions (steam frame glasses)
ease: "back.out(1.7)"

// Smooth scrub
ease: "none" // for scrub-based animations

// Spring (framer-motion only, for menu)
type: "spring", stiffness: 80, damping: 20
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

When `prefers-reduced-motion` is active: disable GSAP ScrollTrigger pinning, skip counter animations (show final values immediately), disable 3D avatar canvas, disable parallax effects.

---

## Imagery, Media & Assets

### Required Assets (New)

| Asset | Path | Spec | Purpose |
|:---|:---|:---|:---|
| QM Monogram SVG | `public/images/qm-monogram.svg` | SVG with `stroke` paths (no fills), clean geometric Q+M interlock | Preloader draw animation, header logo, footer |
| Avatar Portrait | `public/images/avatar-portrait.png` | Min 1024×1024, transparent bg, high-res | Hero WebGL reveal texture |
| Portrait Base | `public/images/portrait-base.png` | 800×800+, square crop, neutral expression | Community section steam frame base |
| Steam Frame Glasses | `public/images/steam-frame-glasses.png` | Transparent PNG, steampunk style, eye-level aligned | Hover overlay on portrait |
| Displacement Noise | `public/images/displacement-noise.png` | 512×512, greyscale clouds | WebGL avatar reveal shader |
| Name Pronunciation | `public/audio/qurlarmah-pronunciation.mp3` | Clear recording, < 200KB | Name pronunciation button |
| 3D Avatar Model | `public/3d/avatar-caricature.glb` | .glb, Draco-compressed, < 2MB | Scrolling 3D avatar |
| Community: MLSA | `public/images/community/mlsa.jpg` | 16:9 or 4:3, high-quality workshop photo | Community grid card |
| Community: GDSC | `public/images/community/gdsc.jpg` | 16:9 or 4:3, Compose Camp photo | Community grid card |
| Community: Hackfest | `public/images/community/hackfest.jpg` | 16:9 or 4:3, hackathon photo | Community grid card |
| Footer Mask | `public/images/footer-mask.svg` | SVG mask for organic card shape | Footer card masking |
| OG Image | `public/images/og-image.png` | 1200×630, dark teal bg, "Qurlarmah Moses — Lead Frontend Architect" | Social media preview |
| Favicons | `public/icon.svg`, `public/icon-*.png`, `public/apple-icon.png` | Generated from QM monogram | Browser tab, app icons |

### Assets to DELETE (Lorenzo/Motocross Specific)

All of the following are Lorenzo Filho specific and must be removed:

- `public/images/lorenzo-*` — All Lorenzo photos
- `public/images/helmets/*` — All helmet images
- `public/images/flags/*` — All country flags
- `public/images/trofeus/*` — All trophy SVGs
- `public/images/partners/*` — All partner logos
- `public/images/moto*` — Motorcycle images
- `public/images/cap-*` — Cap images
- `public/images/ico-helmet*` — Helmet icons
- `public/images/lofan/*` — Fan community images
- `public/images/icon/*` — Hand icons
- `public/images/trilha*.svg` — Track/trail SVGs
- `public/images/splash.svg`, `spla.svg` — Splash decorations
- `public/images/curv*.svg` — Curve decorations
- `public/images/footer-mask.svg` — Old motocross footer mask (replace with new)
- `public/images/mask-pneu.svg` — Tire mask
- `public/images/race-day.svg` — Race day graphic
- `public/images/tras.svg`, `trass.svg` — Trail decorations
- `public/images/v0mask.svg` — Old mask
- `public/3d/helmet-lorenzo.glb` — 3D helmet model
- `public/images/logo-color.png`, `logo-white.png` — Old logos
- `public/fonts/Brier-Bold.woff2` — Old display font
- `public/fonts/MonaSans-Variable.woff2` — Old variable font

### Image Optimization

- Use Next.js `<Image>` component for all raster images
- Set explicit `width` and `height` or use `fill` with sized container
- `priority` for above-fold images (hero avatar)
- `loading="lazy"` for below-fold (community photos, social cards)
- Quality: 95 for hero/feature images, 75 for thumbnails/grid items

### Image Treatments

| Treatment | CSS | Usage |
|:---|:---|:---|
| Rounded containers | `rounded-2xl` (1rem) | Cards, project images |
| Feature rounded | `rounded-3xl` (1.5rem) | Hero images, community photos |
| Circular | `rounded-full` | Avatars, speaker button |
| Aspect square | `aspect-square` | Portrait, community cards |
| Aspect landscape | `aspect-[16/9]` | Community photos, banners |
| Aspect portrait | `aspect-[4/5]` | Hero avatar |

---

## Interaction Design

### Terminal Input (Hero)

The hero section contains an invisible keystroke capture system:

1. Global `keydown` listener on `document`
2. Keystrokes stored in a `useRef` string array
3. No visible text field — maintains mystery
4. Subtle blinking cursor (`▌`) hints at interactivity
5. **Trigger: "sunnies"** → Overlay glasses PNG on avatar portrait (CSS transition)
6. **Trigger: "init" or Enter** → WebGL displacement reveal of avatar
7. After avatar reveals, terminal input deactivates

### WebGL Avatar Reveal

1. Three.js plane geometry with avatar texture
2. Custom GLSL fragment shader uses displacement noise map
3. GSAP tweens `u_progress` uniform 0.0 → 1.0
4. Pixels distort and resolve based on noise values
5. Teal rim light (`--accent`) illuminates edges during reveal
6. Duration: ~2.5s

### Steam Frame Portrait Hover

1. Container: `position: relative`, `overflow: hidden`
2. Glasses: `position: absolute`, aligned to eyes
3. Default: `opacity: 0`, `translateY(-50px)`
4. Hover: `opacity: 1`, `translateY(0)`, bounce easing
5. Enhancement: GSAP magnetic parallax — glasses follow cursor slightly

### 3D Avatar Scroll Behavior

The avatar is visible from approximately scroll position 20% to 85% (hero exit to footer entrance). It follows a dynamic Bezier spline recalculated on resize:

| Scroll % | Avatar Position | Rotation | Section Context |
|:---|:---|:---|:---|
| 0–20% | Hidden | — | Hero section |
| 20–35% | Enters from bottom-right | Facing left | In Production |
| 35–55% | Curves through center | Rotating with path | Projects Hall |
| 55–70% | Moves to left side | Facing right | Case Studies |
| 70–85% | Curves up and right | Looking up | Roadmap → Community |
| 85–100% | Fades out | — | Footer |

Gentle sine-wave hovering (`Math.sin(time) * 8`) applied to Y-axis at all times.

---

## Accessibility & Performance

### Accessibility

- `aria-label` on all fragmented text (staggered chars), `aria-hidden="true"` on individual `<span>` elements
- Keyboard navigation for all interactive elements (menu, buttons, case study expansion)
- `prefers-reduced-motion` disables all GSAP animations, shows final states
- Proper heading hierarchy: single `<h1>` in hero, `<h2>` per section, `<h3>` for card titles
- Alt text on all meaningful images
- Skip-to-content link
- Color contrast: all text pairs meet WCAG 2.1 AA (4.5:1 minimum)
  - Bone White on Obsidian: 15.4:1 ✓
  - Electric Aqua on Obsidian: 10.2:1 ✓
  - Carbon on Cream: 14.8:1 ✓
  - Slate Gray on Obsidian: 5.6:1 ✓

### Performance

- 3D canvas: `requestAnimationFrame` paused when tab inactive or canvas out of view
- WebGL canvases lazy-loaded via Intersection Observer
- All CSS animations target `transform` and `opacity` only (GPU composite layer)
- .glb model: Draco-compressed, < 2MB
- Images: Next.js `<Image>` with automatic format optimization
- Fonts: `next/font/google` with `display: swap` for FOUT prevention
- Target: Lighthouse 90+ on all categories
- Test breakpoints: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px+ (desktop)

---

## Design Checklist

Before shipping any section:

- [ ] Does every element earn its place? (Simple Songs Principle)
- [ ] Is there any redundant information? (Zero Redundancy)
- [ ] Could any text be shorter while retaining meaning? (Noise Reduction)
- [ ] Is contrast sufficient? (4.5:1 minimum for text)
- [ ] Does it work at 375px mobile width?
- [ ] Are hover states implemented with correct transitions?
- [ ] Is `prefers-reduced-motion` respected?
- [ ] Are images optimized with Next.js `<Image>`?
- [ ] Is the heading hierarchy correct (h1 → h2 → h3)?
- [ ] Does the accent color appear sparingly (max 2–3 elements per viewport)?
- [ ] Are GSAP animations targeting only `transform`/`opacity`?
- [ ] Is the 3D canvas pausing when not visible?
- [ ] Are all `aria-label` and `aria-hidden` attributes in place?
- [ ] Does the section map correctly to the conceptual mapping table?
- [ ] Are all Lorenzo/motocross references removed?
- [ ] Is JetBrains Mono used for all numeric/code/technical content?
- [ ] Are all asset paths pointing to new Qurlarmah Moses assets?

---

## Quick Reference: Section Flow

```
[Preloader] → QM monogram draw, "Loading QURLARMAH"
     ↓
[Header] → Fixed, QM logo, nav links
[Name Pronunciation] → Fixed anchor, hover → phonetic + audio
     ↓
[Hero — The Terminal] → Staggered text + terminal input + WebGL avatar
     ↓
[Mission Statement] → Large scroll-driven typography reveal
     ↓
[In Production] → Stats counters (5+, 250+, 95%+, 200+, 60+)
     ↓
[Projects Hall of Fame] → 5 project cards, staggered masonry grid
     ↓
[Architecture Case Studies] → Expandable result-table rows
     ↓
[Deployment Roadmap] → Vertical timeline with scroll progress
     ↓
[Community Ecosystem] → 3-card grid + steam frame portrait + bio
     ↓
[Connect] → Social card fan + links
     ↓
[Footer] → Masked dark card on accent bg + nav + social + copyright

[3D Scrolling Avatar] → Fixed canvas overlay, active sections 2–8
```

---

*This design system is a living document. Update as the portfolio evolves.*
