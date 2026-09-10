# Ado Care — React + Tailwind

A refactor of the static Ado Care site into Vite + React 18 + React Router + Tailwind CSS.
All 7 pages are converted: Home, About, Specialists, Blogs, Appointment, Dashboard, Emergency.

## 1. Install & run

This was built without network access, so dependencies have **not** been installed yet. On your
machine:

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
```

## 2. Move your image/video assets

The original project's `assets/` folder (hero images, doctor photos, background video, etc.) isn't
included here. Copy it into `public/assets/` so paths like `/assets/hero1.jpg` resolve. A few
renames to match the cleaner paths used in the JSX:

| Old filename (from about.html/index.html) | New path used in React |
|---|---|
| `Modern miracle workers - Catholic Review.jpg` | `assets/miracle-workers.jpg` |
| `background hero.mp4` | `assets/background-hero.mp4` |
| `specialist_neurosurgeon.jpg` | unchanged |
| `Professional therapist helping patient to walk using walker during rehabilitation in hospital _ Premium Photo.jpg` | `assets/rehabilitation.jpg` |
| `Nurse in rubber blue medical gloves takes blood from a vein for laboratory test_ medical tests _ Premium Photo.jpg` | `assets/preventive_checkup.jpg` |

Everything else (`hero1.jpg`–`hero6.jpg`, `download.jpg`, `doctor.svg`, `doctor_cardiology.png`,
`doctor_neurology.png`, `healthy_lifestyle.png`, `hero_hospital.png`, `nutrition_superfoods.png`)
keeps its original filename — just drop the folder into `public/assets/`.

## 3. What changed structurally

- **Routing**: `react-router-dom`, one route per page, matching the old file names
  (`/`, `/about`, `/specialists`, `/blogs`, `/appointment`, `/dashboard`, `/emergency`).
- **Auth**: still a demo using `localStorage` (password `admin`), now wrapped in `useAuth()`
  instead of scattered `localStorage` calls. `/dashboard` redirects to `/appointment#auth-panel`
  if nobody's signed in (same behavior as the old guard in `script.js`).
- **Scroll-reveal animations**: the `IntersectionObserver` + `.animate-on-scroll` pattern is now
  `useScrollReveal()` + a `<Reveal>` wrapper component (`src/components/Reveal.jsx`).
- **Article reader modal**: `<ArticleReader>` component, used on both Home and Blogs, reading from
  `src/data/articles.js` (ported 1:1 from the `articles` object in the old `script.js`).
- **Mobile menu / navbar**: `Navbar.jsx`, active-link styling now via React Router's `NavLink`
  instead of manual scroll-position class toggling.
- **Forms**: all forms (booking, sign in/up, feedback) are controlled React state instead of
  DOM queries + `alert()`s where the original used them; validation messages render inline.

## 4. Design fidelity notes

Colors, radii, shadows, and the alternating specialization-row layout are mapped into
`tailwind.config.js` and component classes to match the original `Style1.css` as closely as
Tailwind utilities reasonably allow. Two things were **not** reproduced 1:1 and are worth a look:

1. **Micro-breakpoint font scaling** — the original CSS had very granular font-size drops at
   480px/599px/767px (some down to `0.5rem`) on the appointment/sign-in cards. This refactor uses
   Tailwind's standard `sm:`/`md:`/`lg:` steps instead, which is more maintainable but slightly
   less granular on very small screens.
2. **`.values-network` free-floating layout** — the old CSS had an unused absolute-positioned
   "network" value-card layout (superseded by `.values-grid` in the actual about.html markup).
   Only the grid version that's actually used in the HTML was ported.

## 5. Known content issues (carried over from your memory notes)

Not fixed here — flagging so you can decide:
- "Lumina Hospital" vs "Ado Care" naming inconsistency (About/Home intro copy still says
  "Lumina Hospital").
- Two different emergency numbers existed in the old site (index.html footer said
  `+1 (800) 555-0199` in one spot vs `+234 800 123 4567` elsewhere) — this refactor
  standardizes everything to `+234 800 123 4567`. Confirm that's the correct number.
