# Kishan J R — Personal Portfolio

A premium, fully responsive personal portfolio website built with HTML5, CSS3, and JavaScript.

---

## 🚀 Quick Start

### Option 1 — VS Code Live Server (Recommended)

1. Open VS Code.
2. Install the **Live Server** extension by Ritwick Dey (if not already installed).
3. Open the `portfolio/` folder as a workspace.
4. Right-click `index.html` → **"Open with Live Server"**.
5. Your browser opens at `http://127.0.0.1:5500`.

### Option 2 — Python HTTP server

```bash
# Python 3
python -m http.server 5500
# Then open: http://localhost:5500
```

### Option 3 — Node.js serve

```bash
npx serve .
```

> **Note:** Opening `index.html` directly as a `file://` URL works for most features,
> but CDN resources (GSAP, Font Awesome) require an internet connection.

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML — all sections
├── style.css               # Complete design system & animations
├── script.js               # Interactions, GSAP, particles, form validation
├── assets/
│   └── images/
│       └── profile-placeholder.svg   # Replace with your actual photo
└── README.md
```

---

## ✏️ Personalisation Checklist

Work through `index.html` and update every item marked with `[BRACKETS]` or `placeholder`:

### Required Updates

| What | Where | How |
|------|-------|-----|
| Profile photo | `assets/images/` | Add `profile.jpg` (or any format), update `src` in `<img id="profile-img">` |
| Email address | Contact section | Replace `your.email@example.com` |
| GitHub link | Navbar socials, Contact, Footer | Replace `https://github.com/` with your actual URL |
| LinkedIn link | Navbar socials, Contact, Footer | Replace `https://linkedin.com/` with your profile URL |
| Instagram link | Navbar socials, Footer | Replace with actual URL or remove if not used |
| Education entry | Timeline section | Fill in university name, city, start year, CGPA |
| Project links | Each project card | Replace `href="#"` with actual project/repo URLs |

### Optional Updates

| What | File | Notes |
|------|------|-------|
| Typewriter roles | `script.js` line ~265 | Edit the `roles` array |
| Stats section | `index.html` | Update `data-target` values on `.stat-number.counter` elements |
| Certification / Achievement / Experience timeline items | `index.html` | Fill in or remove placeholder entries |
| CV download link | About section | Replace `href="#"` on the "Download CV" button |
| Contact form backend | `script.js` ~line 340 | Follow the Formspree instructions in the comments |

---

## 📬 Setting Up the Contact Form

The form uses client-side validation only. To actually send emails:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy the endpoint (e.g., `https://formspree.io/f/abc12345`).
3. In `script.js`, find the comment block that says `"To connect Formspree"` (~line 340).
4. Replace the simulated `await` with the real `fetch` call shown in the comment.

---

## 🎨 Design System

The full design system lives in CSS custom properties at the top of `style.css`:

```css
:root {
  --accent-primary:   #6366f1;   /* Electric indigo — main accent */
  --accent-secondary: #8b5cf6;   /* Violet */
  --accent-tertiary:  #06b6d4;   /* Cyan */
  /* ... fonts, spacing, radius, shadows, transitions */
}
```

Change `--accent-primary` (and secondary/tertiary) to instantly re-theme the entire site.

---

## ⚙️ External Dependencies (CDN)

All loaded from CDN — **no npm install required**.

| Library | Purpose |
|---------|---------|
| [GSAP 3.12](https://gsap.com) | Scroll-triggered animations, hero entrance |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Scroll-based animation control |
| [TextPlugin](https://gsap.com/docs/v3/Plugins/TextPlugin/) | (loaded, available for future use) |
| [Font Awesome 6.5](https://fontawesome.com) | Icons throughout the site |
| [Google Fonts](https://fonts.google.com) | Inter, Space Grotesk, JetBrains Mono |

---

## ♿ Accessibility

- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- `aria-label` on all interactive elements
- `role="dialog"` + `aria-modal` on modals with focus management
- `prefers-reduced-motion` respected (all GSAP animations disabled)
- Touch devices get simplified cursor & animation set
- Keyboard navigable (Tab, Enter, Escape)

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| `> 900px` | Full desktop — two-column layouts, floating code cards |
| `≤ 900px` | Tablet — single column, hamburger nav |
| `≤ 640px` | Mobile — compact spacing, stacked CTAs |

---

## 🐛 Known Placeholders

The following links are **intentionally placeholder** until you have real URLs:

- Project "View Project" and "Source Code" links
- GitHub / LinkedIn / Instagram social links
- Email address
- CV download link

These are styled with reduced opacity and show a "(coming soon)" tooltip on hover so they are visually distinct.

---

## 📄 License

Personal use only. Built for Kishan J R's portfolio.

---

*Built with HTML5 · CSS3 · JavaScript · GSAP · Font Awesome*
