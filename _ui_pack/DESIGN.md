---
name: Clinical Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#5b403f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#595c5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#727577'
  on-tertiary-container: '#fbfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  h1:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  h3:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-page: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The visual direction for this design system is **Corporate / Modern High-Fidelity**, optimized specifically for the medical technology sector. It balances the urgency of life-saving blood logistics with the calm, methodical precision of a clinical environment. 

The aesthetic leverages a high-contrast interaction model where the primary red serves as a surgical strike of color against a canvas of sophisticated neutrals. We utilize a "Clean Room" philosophy: heavy white space, intentional alignment, and a reduction of unnecessary decorative elements to lower cognitive load for healthcare professionals and donors alike. The result is an interface that feels dependable, innovative, and authoritative.

## Colors
The palette is anchored by **SmartBlood Red**, reserved exclusively for primary actions, critical alerts, and branding moments. To elevate the professional feel, we introduce **Medical Blue** as a secondary accent to denote "trust" and "information," used for links, informational badges, and progress indicators.

The neutral scale shifts away from pure grays toward **Soft Slates** and **Deep Charcoals**, which provide a more contemporary, high-fidelity tech appearance. Backgrounds should primarily use **Pure White** for surfaces and **Ghost White** for layout grounding to maintain a sterile, organized atmosphere.

## Typography
This design system employs a dual-typeface strategy to distinguish between brand presence and functional utility. **Syne** is utilized for headlines to provide a modern, slightly avant-garde tech edge that feels innovative. 

For all functional data and long-form reading, **DM Sans** is the workhorse. Its geometric clarity ensures high legibility in stressful medical environments. We use a strict hierarchical scale: large H1s for page titles, bold H3s for card titles, and highly legible body-md for all form labels and data entries. Use the uppercase label-caps style for table headers and overlines to provide clear structural anchoring.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for dashboard views to ensure data density remains manageable and predictable. We utilize a 12-column grid with generous 24px gutters. 

Spacing follows an 8px linear scale. For medical applications, whitespace is not just an aesthetic choice but a functional requirement to prevent "mis-clicks" and visual fatigue. Vertical rhythm should prioritize "Stacking" — using 32px between major sections and 16px between related components.

## Elevation & Depth
Depth is communicated through **Ambient Shadows** and **Tonal Layers**. Instead of harsh borders, surfaces are defined by soft, diffused shadows with a slight slate-blue tint (`rgba(15, 23, 42, 0.08)`).

- **Level 0 (Background):** Ghost White (#F8FAFC) – the foundation.
- **Level 1 (Cards/Sidebar):** Pure White (#FFFFFF) – uses a 4px blur shadow to lift slightly from the background.
- **Level 2 (Overlays/Modals):** Pure White (#FFFFFF) – uses a 20px blur shadow to create distinct separation.

Subtle gradients are applied only to primary buttons (a 10% vertical shift from top to bottom) to provide a tactile, "pressable" feel without leaning into skeuomorphism.

## Shapes
The shape language is defined by **Rounded (0.5rem / 8px - 16px)** corners. This softens the clinical nature of the application, making the technology feel approachable and human-centric. 

Standard components (buttons, inputs) utilize the 8px radius, while larger containers (cards, sidebars, and modals) utilize the 12px-16px radius. This nesting approach (smaller radius inside larger radius) creates a cohesive, high-fidelity finish.

## Components

### Sidebar & Navigation
The sidebar uses a "Deep Charcoal" background with a semi-transparent white overlay for active states. Icons should be linear (2px stroke) and paired with DM Sans Medium labels. Incorporate a "Collapse" state to maximize data workspace.

### Stat Cards
Use "Trend Indicators" (small sparklines or percentage chips). The primary value should be in Syne, while the label remains DM Sans. Use a subtle 1px border in #E2E8F0 to define the card boundaries on white backgrounds.

### Data Tables
Tables require high contrast. Use #F1F5F9 for the header row background. Rows should have a subtle hover state (#F8FAFC) and use "Divided" styling rather than "Zebra Stripes" for a cleaner, more modern medical look.

### Auth Forms
Fields utilize a 12px padding with a Soft Slate border. On focus, the border transitions to Medical Blue with a 3px soft outer glow. The primary "SmartBlood Red" button should be full-width to ground the form.

### Micro-interactions
- **Buttons:** 2% scale-down on click; 5% lighten on hover.
- **Progress Indicators:** Use a smooth CSS transition (ease-in-out) for blood supply levels.
- **Loading:** A pulse effect on skeleton states rather than a spinning loader to reduce anxiety.