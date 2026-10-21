---
name: Cobalt Precision
colors:
  surface: '#f7f9fe'
  surface-dim: '#d8dadf'
  surface-bright: '#f7f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#eceef3'
  surface-container-high: '#e6e8ed'
  surface-container-highest: '#e0e2e7'
  on-surface: '#181c20'
  on-surface-variant: '#424656'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eff1f6'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#426086'
  on-secondary: '#ffffff'
  secondary-container: '#b3d1fd'
  on-secondary-container: '#3b5a7f'
  tertiary: '#4d5a6f'
  on-tertiary: '#ffffff'
  tertiary-container: '#657289'
  on-tertiary-container: '#f6f7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#aac9f4'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#29486d'
  tertiary-fixed: '#d6e3fe'
  tertiary-fixed-dim: '#bac7e1'
  on-tertiary-fixed: '#0e1c2f'
  on-tertiary-fixed-variant: '#3a475c'
  background: '#f7f9fe'
  on-background: '#181c20'
  surface-variant: '#e0e2e7'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses rigorous engineering balance and architectural curation. Built for developer and designer portfolios, it communicates technical mastery, systematic precision, and deliberate creative restraint.

### Aesthetic Movement
The design movement pairs **Modern High-Contrast Minimalism** with **Swiss Precision**. It rejects decorative noise in favor of pristine white canvases, structural hairline rules, deep navy typographic hierarchy, and assertive electric cobalt interactive vectors.

### Emotional Target
- **Rigorous & Competent**: Reassures prospective clients and engineering leads through structural stability, crisp hierarchy, and high contrast.
- **Electric & Focused**: Interactive states pop with deliberate cobalt luminescence, indicating reactive code and dynamic capability.
- **Pristine & Uncluttered**: Surfaces act as architectural gallery walls, putting code artifacts, case studies, and visual deliverables in sharp focus.

## Colors

The palette operates on high-contrast chromatic discipline, leveraging pure whites, structural navies, and an electric cobalt beacon.

### Roles & Application
- **Primary (`#0066FF`)**: The interactive catalyst. Used for primary CTAs, active filters, code execution triggers, linked identifiers, focus outlines, and directional glyphs.
- **Secondary (`#1E3E62`)**: Structural reinforcement. Used for secondary headings, active surface outlines, icon outlines, subheadings, and metadata categories.
- **Tertiary / Base Text (`#0B192C`)**: Deep navy ink. Replaces standard pure black to provide warmer, editorial contrast against crisp white. Drives high legibility for body copy, display titles, and prominent code tokens.
- **Surfaces & Tiers**:
  - `Surface Canvas`: `#FFFFFF` for primary work containers and modal cards.
  - `Surface Alt`: `#F8FAFF` for page canvas backgrounds and alternated section planes.
  - `Surface Tint / Container`: `#EBF3FF` for subtle badge fills, code inline chips, and active nav states.
- **Borders & Dividers**: `#E2E8F0` for structural hairlines, grid guides, and neutral borders; `#BEDBFE` for hover borders.

## Typography

The type scale relies on a disciplined duality: `Geist` delivers precise modern sans-serif readability with micro-tuned grotesque ink traps, while `JetBrains Mono` handles metadata, project tags, terminal readouts, and engineering statistics.

### Implementation Rules
- Headings maintain tight letter spacing (`-0.015em` to `-0.03em`) to create dense, impactful editorial locks.
- Technical indicators, commit hashes, dates, and client taxonomy must always use `label-md` or `label-sm` in all caps or strict monospace styling.
- Body text is set at high contrast (`#0B192C` on `#FFFFFF` or `#F8FAFF`) with spacious line heights to maximize readability during technical case breakdowns.

## Layout & Spacing

The layout model is anchored to an architectural 12-column grid system paired with strict 4px/8px incremental rhythm units.

### Grid & Form Factors
- **Desktop (≥ 1024px)**: 12-column grid. Max content width of `1280px` centered. Margins at `margin-lg` (3rem), gutters at `gutter-lg` (2rem). Complex portfolio case studies can span 8 columns for narrative, 4 columns for sticky architectural telemetry.
- **Tablet (768px – 1023px)**: 8-column grid. Margins at `margin` (1.5rem), gutters at `gutter` (1.5rem). Multi-column metrics stack into paired 4-column blocks.
- **Mobile (< 768px)**: 4-column fluid layout. Margins at `margin-sm` (1rem), gutters at `gutter-sm` (1rem). Work cards, code blocks, and case metadata collapse into vertical stacks.

### Rhythmic Rules
- **Component Padding**: Use `space-sm` for inline tags, `space-md` for inputs and action buttons, `space-lg` to `space-xl` for card and section interiors.
- **Whitespace Separation**: High spatial intervals (`space-xl` and above) between independent work showcases preserve portfolio clarity and prevent visual crowding.

## Elevation & Depth

This system intentionally departs from heavy drop shadows, relying instead on **low-contrast structural hairlines, surface tint transitions, and ambient cobalt focus fields**.

### Elevation Scale
1. **Level 0 (Base Canvas)**: Background canvas (`#F8FAFF`). Zero shadow.
2. **Level 1 (Structural Cards & Modules)**: Surface (`#FFFFFF`), bounded by a 1px solid border (`#E2E8F0`). Flat elevation with crisp line separation.
3. **Level 2 (Active & Hover Cards)**: Surface remains `#FFFFFF`. Border transitions to `#0066FF` at 50% opacity, augmented by an ambient diffusion shadow:
   `box-shadow: 0 8px 24px -4px rgba(0, 102, 255, 0.08), 0 2px 6px -1px rgba(11, 25, 44, 0.04);`
4. **Level 3 (Overlays, Flyouts & Modals)**: Pure `#FFFFFF` surface, 1px solid `#E2E8F0`, with deep structural ambient shadow:
   `box-shadow: 0 20px 40px -8px rgba(11, 25, 44, 0.12), 0 4px 12px -2px rgba(11, 25, 44, 0.04);`

### Border Philosophy
Hairlines (1px) define edges. Overlapping planes rely on clear contrast between `#FFFFFF` and `#F8FAFF` rather than blurs or simulated depth.

## Shapes

The geometric framework favors restrained, contemporary sharpness. Roundedness level `1` gives elements subtle curvature without feeling playful or overly bubble-like.

### Token Geometry
- **Micro Radii (0.25rem / 4px)**: Applied to text tags, checkboxes, inline code snippets, table rows, and secondary navigation pills.
- **Mid Radii (0.5rem / 8px)**: Applied to interactive buttons, text inputs, flyout menus, and command palettes (`rounded-lg`).
- **Macro Radii (0.75rem / 12px)**: Applied to project showcase cards, media viewports, and structural dashboard panels (`rounded-xl`).
- **Circles**: Reserved exclusively for author avatars, system status indicators (e.g., green live build beacons), and standalone icon-only action triggers.

## Components

### Buttons
- **Primary**: Solid electric cobalt (`#0066FF`) fill, `#FFFFFF` bold text, radius `0.5rem`. On hover, scale color to `#0052CC` with a 2px offset focus ring in `#0066FF`.
- **Secondary / Outline**: `#FFFFFF` fill, 1px solid `#E2E8F0` border, `#0B192C` text. On hover, background shifts to `#EBF3FF` and border turns to `#0066FF`.
- **Ghost / Minimal**: Transparent background, `#1E3E62` text, active underline or background highlight on hover (`#EBF3FF`).

### Chips & Badges
- **Technical Taxonomy**: Font set in `JetBrains Mono` (`label-md`). Background `#EBF3FF`, text `#0066FF`, 1px border in `#BEDBFE`.
- **Neutral Metadata**: Background `#F0F4F8`, text `#1E3E62`, border `#E2E8F0`.

### Cards & Work Items
- Constructed with `#FFFFFF` background, 1px solid `#E2E8F0` border, `rounded-xl` (12px), and inner padding `space-lg`.
- Top-level project highlights feature a subtle top border accent in `#0066FF` (2px). Hover states smoothly transition the full border to `#0066FF` with ambient Level 2 shadow.

### Input Fields & Search Bars
- Background `#FFFFFF`, 1px border `#E2E8F0`, inner padding `0.625rem 0.875rem`, text `#0B192C`. Placeholder styled in `#64748B`.
- Focused state: Border changes to `#0066FF` with a zero-offset outline: `outline: 2px solid rgba(0, 102, 255, 0.2)`.

### Checkboxes & Radios
- Size: 16px × 16px square (radii 3px) for checkboxes; circular for radios.
- Unchecked: `#FFFFFF` fill with 1.5px `#CBD5E1` border.
- Checked: `#0066FF` solid fill with white checkmark/dot graphic.

### Code Displays & Terminal Blocks
- Deep contrast container: Background `#0B192C`, text `#F8FAFF`, border 1px solid `#1E3E62`, radius `0.5rem`.
- Syntax highlighting keyed off electric cobalt (`#38BDF8`, `#60A5FA`, `#93C5FD`), maintaining strict palette harmony.