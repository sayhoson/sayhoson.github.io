# Seho Son Portfolio Design System

## 0. Research Log

- **Portfolio references reviewed:** research publication indexes (Orca Bio), research-story pages (Zap Energy), and editorial case-study portfolios surfaced through Lazyweb research for `scientist portfolio publications`, `research portfolio editorial`, and `designer portfolio case study clean`.
- **Applied decision:** retain the clear evidence-first hierarchy of a publication index, but pair it with the warm paper surfaces, generous reading space, and whisper borders associated with editorial portfolios. No dashboard panels, dark-mode instrument styling, gradients, or generic AI imagery remain.
- **Image concept review:** a generated editorial research-page concept was reviewed only to validate hierarchy: a single laboratory hero image, three method figures, a complete project index, and publication rows. It is not used in the website.
- **Image policy:** each rendered visual uses a unique local image generated specifically for this site. The visual subjects are assigned to a single research purpose: test bench, operator learning, digital twin, virtual sensing, lab measurement, PMSM cutaway, rotor test rig, bearing contact FEM, or collaboration. Publication covers remain the verified, unique first pages of the publications.

## 1. Atmosphere

The site is a research field notebook: composed, readable, and evidence-led. Warm paper replaces the old dark technical surface. The visual rhythm comes from large editorial margins, fine rules, and a controlled cobalt annotation color.

## 2. Tokens

| Role | Value | Use |
| --- | --- | --- |
| Paper | `#f7f5ef` | Primary page canvas |
| Surface | `#fffdf8` | Alternating reading surface |
| Ink | `#1d2324` | Headings and controls |
| Muted | `#657071` | Metadata and supporting copy |
| Rule | `rgba(29,35,36,.16)` | Structural dividers |
| Research blue | `#315c79` | Method labels, links, and emphasis |

## 3. Typography

- Display: `Iowan Old Style`, `Palatino Linotype`, or `Noto Serif KR`; regular weight, tight tracking, for narrative research statements.
- Body and navigation: Manrope with Korean system fallbacks; compact, high-contrast reading sizes.
- Metadata: system monospace; uppercase Latin labels only.
- Korean headings use the serif/Korean fallback stack rather than a Latin monospace face.

## 4. Layout and Components

- Maximum content width: 1180px; desktop gutters 24px, mobile gutters 16px.
- Major sections use 88–152px vertical space; rows and cards use 1px whisper borders instead of high elevation.
- Hero: one informative PMSM photograph, a figure caption, and two direct navigation actions.
- Research directions: three unique method diagrams with an explanatory caption, summary, and technique tags.
- Projects: the complete project list, not a selected subset; each row has one unique visual and a clear outcome.
- Publications: verified papers use one unique first-page cover; explicitly in-preparation work uses a compact text status rather than an invented cover.
- Collaboration: one distinct workflow diagram connects model, experiment, and application.

## 5. Interaction and Accessibility

- Keyboard focus uses a visible blue outline.
- The language control exposes its pressed state; controls are native buttons.
- Images that carry research meaning have specific alt text; publication covers are decorative because adjacent bibliographic text contains the information.
- Reveal animation uses only opacity and transform and is removed under `prefers-reduced-motion`.

## 6. Image Provenance

- Nine visuals in `assets/generated-research/` were generated specifically for this website.
- Each generated image is rendered only once in the page and has an explicit research-context alt description.
- Publication covers are the verified unique first pages of the published work.
