# VSS Website Redesign - Vertical Service Solutions

Eine moderne Next.js-Website mit Tailwind CSS für Vertical Service Solutions, inspiriert von 21st.dev Design-Patterns.

## 🚀 Version 0.7.0 - Startseite (Above-The-Fold Split-Screen)

### ✅ Verfügbare Features

- **Exakte Above-The-Fold Nachbildung** der originalen VSS-Startseite (ohne Scroll)
- **Diagonal Split (\\)** via `clip-path`
- **Inverse Hover-Logik:** Hover Mobilfunk → Effekt auf Aufzüge (und umgekehrt)
- **Authentische 2-Farb-Palette:** `#FCA817` (Primary) + `#43BC75` (Secondary)
- **Originale Homepage-Bilder integriert** (Mobilfunk + Aufzüge) inkl. Overlay für Text-Lesbarkeit
- **Responsive:** Mobile/Tablet Fallback als stacked Panels
- **One-Click Setup:** Automatische Installation und Preview
- **Docker Ready:** Vollständige Containerisierung
- **Testing Suite:** Umfassende Test-Dokumentation

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Icons:** Lucide React
- **Animationen:** CSS Transitions (clip-path/filter/transform)
- **Fonts:** Inter & JetBrains Mono (Google Fonts)
- **Containerisierung:** Docker + Docker Compose
- **Deployment:** Vercel-ready

## ⚡ Quick Start - Sofortiges Testen

### 🖥️ Desktop (Linux/Mac)
```bash
git clone https://github.com/alexiosg111/vss.git
cd vss
chmod +x setup.sh
./setup.sh
```
**Automatisch:** Setup + Browser öffnet http://localhost:3000/preview

### 🪟 Windows
```cmd
git clone https://github.com/alexiosg111/vss.git
cd vss
setup.bat
```
**Automatisch:** Setup + Browser öffnet http://localhost:3000/preview

### 🐳 Docker (Alle Plattformen)
```bash
git clone https://github.com/alexiosg111/vss.git
cd vss
docker-compose up vss-website
```
**URL:** http://localhost:3000

### ⚡ Live Preview
```bash
git clone https://github.com/alexiosg111/vss.git
cd vss
chmod +x preview.sh
./preview.sh
```
**Automatisch:** Setup + Server + Browser + Preview-Seite

### 🔧 Manuell
```bash
git clone https://github.com/alexiosg111/vss.git
cd vss
npm install
npm run dev
# Öffnen: http://localhost:3000
# Preview: http://localhost:3000/preview
```

## 🎯 Test-Features

### 1) Above-The-Fold Split-Screen testen
1. **URL:** http://localhost:3000
2. **Erwartung (Initial State):** Header (Logo + Intro), danach Split-Screen mit diagonalem Schnitt und Footer.
3. **Hover/Focus:**
   - Maus/Fokus auf **Mobilfunk** → **Aufzüge** wird vergrößert/akzentuiert
   - Maus/Fokus auf **Aufzüge** → **Mobilfunk** wird vergrößert/akzentuiert
4. **Transitions:** Smooth, ohne Sprünge (clip-path animiert)

### 2) Responsive Design testen
1. **F12** → Device Toolbar (Mobile Icon)
2. **Mobile/Tablet:** Panels sind **untereinander** (stacked) statt diagonal
3. **Desktop:** Diagonal Split aktiv

### 3) Preview-Seite testen
1. **URL:** http://localhost:3000/preview
2. **Features:** Viewport Testing, Status Overview, Quick Actions

### Cross-Browser testen
- ✅ Chrome, Firefox, Safari, Edge
- ✅ `clip-path` + Transitions (Diagonal Split)

## 🏗️ Erweiterte Setup-Optionen

### Production Docker
```bash
docker-compose --profile production up --build
```

### Erweiterte npm Scripts
```bash
npm run setup          # Setup Script ausführen
npm run preview        # Live Preview starten
npm run docker:dev     # Docker Development
npm run docker:prod    # Docker Production
npm run docker:down    # Docker Stop
npm run test           # Build Test
npm run analyze        # Bundle Analyse
npm run lint           # Code Linting
```

## 🐛 Troubleshooting

### Häufige Probleme

**Port 3000 belegt:**
```bash
kill -9 $(lsof -ti:3000)
PORT=3001 npm run dev
```

**Build Fehler:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Split nicht sichtbar / Layout wirkt falsch:**
1. Browser Cache leeren
2. Mobile/Tablet: stacked Layout ist erwartet
3. Desktop: Browser Support für `clip-path` prüfen

## 📁 Projektstruktur (Auszug)

```
/src
  /app
    /page.tsx            # Startseite (Above-The-Fold Split)
    /aufzug/page.tsx     # Placeholder Zielseite
    /mobilfunk/page.tsx  # Placeholder Zielseite
    /preview/page.tsx    # Preview-Seite
    /layout.tsx          # Root Layout
  /components
    /Hero.tsx            # Above-The-Fold Split-Screen
    /Preview.tsx         # Preview Interface
  /styles
    /globals.css         # Tailwind + Custom
/public
  /vss/homepage/*        # Original Homepage Assets (Bilder + Logo)
```

## 📞 Support & Testing

- **Repository:** https://github.com/alexiosg111/vss
- **Testing Guide:** `./TESTING.md`
- **Preview Page:** http://localhost:3000/preview
- **Version:** v0.7.0
- **Branch:** vss-redesign-above-fold-v0.7.0-diagonal-split

## 📄 Changelog

### v0.7.0 (Latest)
- ✨ Exakte Above-The-Fold Nachbildung der originalen VSS-Startseite
- ✨ Diagonal Split (\\) mit Smooth Transitions
- ✨ Inverse Hover-Logik (Bereich A beeinflusst Bereich B)
- ✨ Authentische 2-Farb-Palette (#FCA817 + #43BC75)
- ✨ Original-Bilder integriert: Mobilfunk + Aufzüge

### v0.1.0 + Setup System
- ✨ One-Click Setup: Linux/Mac/Windows Scripts
- ✨ Live Preview: Automatische Browser-Öffnung
- ✨ Interactive Preview Page: Viewport Testing, Status Overview
- ✨ Docker Integration: Development + Production Container

---

**🎯 Sofort starten:** `./setup.sh` (Linux/Mac) oder `setup.bat` (Windows)

**VSS Website Redesign v0.7.0 | Next.js 15 + Tailwind CSS | Above-The-Fold Split-Screen**
