# Seho Son Portfolio Design System

## 1. Atmosphere & Identity

This portfolio feels like a precise research instrument at night: quiet, rigorous, and visibly alive with measured energy. Its signature is the **luminous machine field**—real mechanical imagery framed by finely controlled cyan data paths on an ink-blue canvas—so the page reads as engineering work, not generic AI marketing.

## 2. Color

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Canvas | `--ink-950` | `#050b14` | Page background |
| Canvas lift | `--ink-900` | `#091728` | Alternating sections |
| Surface | `--ink-850` | `#0d2034` | Cards and media frames |
| Text strong | `--paper-100` | `#eef7fb` | Headings and controls |
| Text | `--paper-300` | `#b9cad5` | Body copy |
| Text muted | `--paper-500` | `#7d95a5` | Labels and metadata |
| Line | `--line` | `rgba(161, 222, 240, .16)` | Borders and grids |
| Cyan | `--signal` | `#4ee0ed` | Interactive accent and data signal |
| Cyan bright | `--signal-hi` | `#a8f4f5` | Focus, active state, highlights |
| Copper | `--copper` | `#d79a69` | Rare material detail in imagery only |

Color is semantic: cyan never decorates static copy, and copper only supports the mechanical imagery.

## 3. Typography

- Display: `"DM Mono", "IBM Plex Mono", monospace`, 700, `clamp(2.65rem, 6.8vw, 6.6rem)`, line-height .94, tracking `-.065em`.
- Text: `"Manrope", "Noto Sans KR", system-ui, sans-serif`, 400–700, 14px minimum, body 16px / 1.7.
- Technical labels: display family, 11–12px, 0.13em tracking, uppercase only for Latin labels.

## 4. Spacing & Layout

Base unit is 4px. Tokens are 4, 8, 12, 16, 24, 32, 48, 64, 96, and 128px. Content is constrained to 1240px with 24px desktop and 16px mobile gutters. Sections use 112px vertical space on desktop and 72px on small screens. Grids collapse from 12 columns to 6 then 1 based on content, not device labels.

## 5. Components

### Signal button and text link
- **Structure**: anchor with label and arrow glyph.
- **Variants**: filled signal button; transparent text link.
- **States**: hover lifts 2px and brightens the signal edge; active resets; focus uses a 3px `--signal-hi` outline.
- **Accessibility**: 44px minimum tap target; meaningful label; visible keyboard focus.

### Research card
- **Structure**: media, index, title, explanatory text, tag list.
- **States**: default framed surface; hover raises only the media crop and line contrast; no information is hidden on hover.
- **Accessibility**: image alt describes the research concept; tags remain semantic list items.

### Segmented tabs
- **Structure**: `role=tablist` buttons and `role=tabpanel` content.
- **States**: selected signal underline and `aria-selected`; focus remains visible; keyboard works through native buttons.

### Media frame
- **Structure**: image inside a 1px line frame with a radial cyan field overlay.
- **States**: static; responsive crop preserves the subject.
- **Accessibility**: decorative images use empty alt; informative hero uses specific alt text.

## 6. Motion & Interaction

Use 160ms ease-out for control feedback and 550ms `cubic-bezier(.16,1,.3,1)` for section entrance. Only opacity and transform animate. Intersection-based reveals are optional enhancement; all content is visible without JavaScript animation. `prefers-reduced-motion` disables non-essential movement and smooth scrolling.

## 7. Depth & Surface

Strategy: tonal shift plus whisper-thin lines. The canvas rises from `--ink-950` to `--ink-850`; cards use a 1px `--line` edge, inner cyan glow, and a restrained outer shadow. No opaque white cards and no heavy drop-shadow stacks.

## 8. Accessibility Constraints & Accepted Debt

- Target WCAG 2.2 AA: body text meets 4.5:1; large text and visual boundaries meet 3:1.
- Every interactive control has visible focus, keyboard reachability, and a 44px touch target.
- Korean/English switching is explicit and keeps the selected state; no information relies on color alone.
- Motion respects reduced-motion preferences; images have intentional alt treatment.

| Item | Location | Why accepted | Owner / Exit |
| --- | --- | --- | --- |
| None | — | — | — |
