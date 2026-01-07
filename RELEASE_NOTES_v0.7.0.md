# RELEASE NOTES – v0.7.0 (Startseite / Above-The-Fold)

Diese Version bildet den **sichtbaren Above-The-Fold Bereich** der originalen VSS-Startseite (ohne Scroll) als modernes, production-ready Split-Screen-Template nach.

## ✅ Was wurde umgesetzt?

- **Exaktes Above-The-Fold Layout** (Header + Split Area + Footer in einem Viewport)
- **Diagonal Split (\)** via `clip-path`
- **Inverse Hover-Logik** (Hover auf Bereich A verändert Bereich B)
- **Smooth Transitions** (clip-path/filter/transform)
- **Text-Lesbarkeit** via semi-transparent Overlays
- **Originale Bilder der VSS-Startseite** als lokale Assets integriert

---

## 🎨 Authentische 2-Farb-Palette (aus der Original-Startseite)

Die Original-CSS-Variablen auf https://www.vertical-service-solutions.com definieren (u.a.):

- **Primary (Orange / --thm-base):** `#FCA817`
- **Secondary (Green / --thm-primary):** `#43BC75`

Neutrals (für Lesbarkeit/Overlays):
- **Dark (Text / --thm-black):** `#1F2026`

Diese Farben werden in v0.7.0 für CTAs/Highlights verwendet.

---

## 🖼️ Integrierte Bilder (Original-Homepage Assets)

Lokale Dateien (im Repo):

- **Mobilfunk:** `public/vss/homepage/mobilfunk.jpg`
  - Quelle: `https://www.vertical-service-solutions.com/assets/images/main-homepage/main-homepage-hero.jpg`
- **Aufzüge/Fahrstuhl:** `public/vss/homepage/aufzuege.jpg`
  - Quelle: `https://www.vertical-service-solutions.com/assets/images/main-homepage/main-homepage-hero_2.jpg`
- **Logo:** `public/vss/homepage/vss-logo.png`
  - Quelle: `https://www.vertical-service-solutions.com/assets/images/vss-logo-m.png`

---

## ⭐ Initial State (wie Original-Startseite – ohne Hover)

**Desktop:**
- Split-Parameter in `src/components/Hero.tsx`:
  - `top = 58%`, `bottom = 74%`
- Positionierung wie im Original-Viewport:
  - **Aufzüge**: Label/Card oben rechts
  - **Mobilfunk**: Label/Card unten links

**Hover-States (inverse):**
- Hover **Mobilfunk** ⇒ **Aufzüge** wird stärker betont und erhält mehr Fläche (`top=48%`, `bottom=62%`)
- Hover **Aufzüge** ⇒ **Mobilfunk** wird stärker betont und erhält mehr Fläche (`top=68%`, `bottom=82%`)

**Mobile/Tablet:**
- Stacked Fallback: zwei Panels untereinander (`lg:hidden`)

---

## 📦 Wichtige Dateien

- `src/components/Hero.tsx` – Above-The-Fold Layout + Interaktionslogik
- `src/styles/globals.css` – Klassen: `.vss-split-panel`, `.vss-split-title`, etc.
- `src/app/page.tsx` – Homepage rendert das Above-The-Fold Template
- `src/app/aufzug/page.tsx`, `src/app/mobilfunk/page.tsx` – Placeholder-Zielseiten
