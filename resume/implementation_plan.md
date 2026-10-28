# Portfolio Implementation Plan — Kishan J R

## Overview
Build a premium, award-quality personal portfolio website using HTML5, CSS3, and JavaScript with GSAP + ScrollTrigger animations.

## File Structure
```
portfolio/
  index.html        — Semantic HTML structure for all sections
  style.css         — Full design system + animations + responsive
  script.js         — GSAP animations, interactions, custom cursor, typewriter
  assets/
    images/         — Placeholder-friendly image slots
    icons/
  README.md
```

## Architecture Decisions
- **No framework** — plain HTML/CSS/JS for easy VS Code preview
- **GSAP CDN** — ScrollTrigger + core, no build step needed
- **Lucide Icons** — via CDN (svg sprite)
- **Google Fonts** — Inter + Space Grotesk for premium typography
- **Custom cursor** — lightweight JS, disabled on touch devices
- **Three.js** — SKIP (GSAP particles + CSS gradients achieve the same effect with less overhead)

## Section Build Order
1. CSS design tokens + reset + base
2. Navigation (sticky, transparent→solid, hamburger)
3. Hero (particle canvas, typewriter, CTA, social icons, scroll indicator)
4. About (split layout, animated stats)
5. Skills (categorized animated cards)
6. Projects (tilt cards, modal detail view)
7. Experience/Timeline (animated timeline)
8. Contact (form + validation)
9. Footer
10. GSAP ScrollTrigger wiring for all sections
11. Custom cursor + back-to-top
12. Responsive breakpoints audit
