---
name: Acoustic Minimal
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5a4138'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8e7166'
  outline-variant: '#e2bfb2'
  surface-tint: '#a63b00'
  primary: '#a23a00'
  on-primary: '#ffffff'
  primary-container: '#cb4a00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb599'
  secondary: '#575e70'
  on-secondary: '#ffffff'
  secondary-container: '#d9dff5'
  on-secondary-container: '#5c6274'
  tertiary: '#00609b'
  on-tertiary: '#ffffff'
  tertiary-container: '#0079c3'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9bcbff'
  on-tertiary-fixed: '#001d34'
  on-tertiary-fixed-variant: '#004a79'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style
The design system establishes a disciplined, human-crafted aesthetic inspired by Swiss typography and Nordic modernism. Built for an AI voice studio, it prioritizes acoustic precision, clarity, and uncompromising calm over tech-centric novelty.

The system relies strictly on restrained execution: generous whitespace, razor-sharp 1px structural framing, and deliberate typographic rhythm. It explicitly rejects heavy drop shadows, synthetic neon glows, particle fields, floating bubbles, and glassmorphic blurs. The visual tone must feel like a precision hardware manual meets a high-end architectural monograph—calm, confident, and utterly focused on the nuanced quality of voice and sound synthesis.

## Colors
The palette is hyper-disciplined and clinical, dominated by off-white foundations, deep carbon typography, and a single, high-potency accent.

### Palette Architecture
- **Primary Accent (`#F46117`)**: Reserved strictly for high-priority interactive moments—primary actions, active recording or playback states, audio transport cursors, and select high-value data points. It must never be applied to broad backgrounds or large decorative blocks.
- **Base Canvas (`#FAFAFA` / `#F8F8F8`)**: Provides a tactile, unbleached off-white base that eliminates the clinical harshness of raw white screens while maintaining high luminous clarity.
- **Surface Elevation (`#FFFFFF`)**: Pure white reserved exclusively for cards, sheet overlays, floating toolbars, and segmented containers to establish immediate contrast against the off-white canvas.
- **Typography & Structure**:
  - `Text Primary`: `#111827` (Near-black for decisive editorial contrast)
  - `Text Secondary`: `#4B5563` (Neutral gray for explanatory subtext and labels)
  - `Text Tertiary / Subtle`: `#9CA3AF` (Muted slate for metadata, placeholders, and inactive states)
  - `Dividers & Hairlines`: `#E5E7EB` (1px structure) and `#F3F4F6` (subtle internal splitters)

## Typography
Typographic hierarchy is set strictly in Inter, engineered with optical tracking adjustments to maintain an architectural, editorial rhythm.

- **Display & Headlines**: Tightly tracked (`-0.03em` to `-0.015em`) with disciplined medium (`500`) and semi-bold (`600`) weights. Headlines should never use ultra-black or novelty weights; authority is derived from size contrast and surrounding whitespace.
- **Body & Editorial Content**: Balanced leading allows effortless scannability. Technical audio parameters and specifications use tabular numbering (`font-variant-numeric: tabular-nums`) to ensure zero vertical jitter during real-time metric updates.
- **Labels & Micro-copy**: Sub-labels and metadata use uppercase `label-sm` with widened tracking (`+0.05em`) to evoke precision hardware dials, timeline scrubbers, and catalog indexing.

## Layout & Spacing
The layout system adheres to a strict 8pt modular rhythm on a 12-column grid for desktop (max-width `1200px`), shifting to a 4-column framework on mobile devices.

- **Canvas Margins**: Deep outer margins (`margin`: `3rem` on desktop, `margin-mobile`: `1.25rem` on phone) provide structural framing that prevents edge crowding.
- **Vertical Airflow**: Sections transition with spacious rhythm (`space-2xl` to `space-3xl`). Text blocks are capped at `65ch` width to ensure uncompromised editorial legibility.
- **Grid Gaps**: Card collections and feature matrix arrays maintain consistent `gutter` spacing (`1.5rem` desktop, `1rem` mobile), ensuring clean horizontal and vertical alignments with zero offset drift.

## Elevation & Depth
Depth is structural and tactile rather than dimensional. The system avoids deep multi-layered shadows in favor of 1px border delineation paired with a single micro-diffused ambient shadow.

- **Surface Separation**: Elevation is established by placing `#FFFFFF` containers over the `#FAFAFA` canvas, bound by a razor-sharp `1px solid #E5E7EB` edge.
- **Ambient Shadow (`shadow-sm`)**: Cards and panels employ a singular, whisper-soft drop: `0px 1px 2px rgba(17, 24, 39, 0.04), 0px 1px 3px rgba(17, 24, 39, 0.02)`. This anchors the white card to the canvas without lifting it aggressively.
- **Interactive States**: Hover and active states do not add aggressive vertical shadows. Instead, elevation remains flat while the border subtly transitions from `#E5E7EB` to `#D1D5DB`, or primary accent `#F46117` for active inputs.
- **Audio Overlays & Floating Bars**: Bottom sheets or floating audio transport docks use a disciplined ambient lift: `0 4px 12px rgba(17, 24, 39, 0.06)` with a crisp `1px solid #E5E7EB` perimeter.

## Shapes
Geometry is controlled and utilitarian, balancing ergonomic friendliness with structural precision.

- **Base Radius (`roundedness: 2`)**: Standard components (buttons, input fields, control panels) feature `0.5rem` (8px) corner curvature.
- **Large Panels & Cards (`rounded-lg`)**: Structural content blocks utilize `1rem` (16px) corners to frame voice waveforms, audio metrics, and feature showcases cleanly.
- **Audio Scrubber & Audio Nodes (`rounded-xl` to Full Pill)**: Waveform transport nodes, time badges, tag chips, and playback toggles utilize fully rounded pill shapes to reflect their continuous, tactile nature.

## Components

### Buttons
- **Primary**: Background `#F46117`, text `#FFFFFF`, radius `0.5rem`, padding `0.75rem 1.5rem`. Hover: `#DC5511`. Zero glow; instant, crisp transition.
- **Secondary**: Background `#FFFFFF`, border `1px solid #E5E7EB`, text `#111827`. Hover: `#F9FAFB` with border `#D1D5DB`.
- **Tertiary / Ghost**: Transparent fill, text `#4B5563`, hover text `#111827`, hover background `#F3F4F6`.

### Cards & Panels
- **Structure**: Surface `#FFFFFF`, border `1px solid #E5E7EB`, radius `1rem`, padding `1.5rem` or `2rem`.
- **Audio Preview Card**: Contains a waveform visualizer with `#111827` active track lines, `#E5E7EB` passive bars, a discrete mono-style timestamp in `label-sm`, and a compact play toggle.

### Form Inputs & Controls
- **Input Fields**: Background `#FFFFFF`, border `1px solid #E5E7EB`, radius `0.5rem`, padding `0.625rem 0.875rem`, text `#111827`. Focus state shifts border to `#111827` (or `#F46117` in voice synthesis fields) with an understated `1px solid #111827` outline ring (no diffuse glow).
- **Sliders & Audio Dials**: Track height `4px`, background `#E5E7EB`, filled track `#111827`, thumb `16px` solid circle (`#FFFFFF` with `1px solid #D1D5DB` and `shadow-sm`).

### Chips & Badges
- **Status / Model Badge**: Background `#F3F4F6`, text `#1F2937`, border `1px solid #E5E7EB`, radius `9999px`, padding `0.25rem 0.625rem`, font `label-sm`.
- **Accent Chip (Active Voice / Live)**: Background `#FFF7ED`, border `1px solid #FFEDD5`, text `#C2410C` with a `6px` solid `#F46117` dot indicator.

### Audio Waveforms & Visualizers
- **Voice Nodes**: Minimalistic vertical stroke arrays. Bar width `2px`, gap `2px`, radius `1px`. Inactive bars render in `#E5E7EB`, active voice playback pulses through in `#111827` and `#F46117`.