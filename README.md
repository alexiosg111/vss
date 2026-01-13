# VSS Website Redesign - Vertical Service Solutions

Eine moderne Next.js-Website mit Tailwind CSS für Vertical Service Solutions, inspiriert von 21st.dev Design-Patterns.

## 🚀 Version 0.1.0 - Initial Release + Setup System

### ✅ Verfügbare Features

- **Modern Design:** Industrial High-Tech Styling basierend auf 21st.dev Ästhetik
- **3D Scroll Animation:** Container-Scroll-Animation mit Framer Motion
- **One-Click Setup:** Automatische Installation und Preview
- **Responsive:** Mobile-first Design für alle Geräte
- **Fast:** Next.js 15 mit TypeScript und optimierten Builds (156 kB First Load JS)
- **Accessible:** WCAG-konforme Implementierung
- **SEO-optimiert:** Meta-Tags, Open Graph, strukturierte Daten
- **Clean Setup:** npm-only Setup ohne Docker (ab v0.11.0)
- **Testing Suite:** Umfassende Test-Dokumentation

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Icons:** Lucide React
- **Animationen:** Framer Motion
- **Fonts:** Inter & JetBrains Mono (Google Fonts)
- **3D Graphics:** Three.js (WebGL Shaders)
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

### 🚫 Docker
Docker wird ab **v0.11.0** nicht mehr für Development benötigt.

Wenn du die App starten willst, nutze bitte:
```bash
./setup.sh
# oder
npm install
npm run dev
```

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

### Container-Scroll-Animation testen:
1. **URL:** http://localhost:3000
2. **Scrollen:** Zur dunklen Sektion mit Animation
3. **Erwartung:** Card rotiert 20°→0°, skaliert, 60fps smooth

### Responsive Design testen:
1. **F12** → Device Toolbar (Mobile Icon)
2. **Mobile:** iPhone/Android - optimierte Skalierung
3. **Tablet:** iPad - angepasste Layouts
4. **Desktop:** Vollständige Features

### Preview-Seite testen:
1. **URL:** http://localhost:3000/preview
2. **Features:** Viewport Testing, Status Overview, Performance Metrics
3. **Live Toggle:** Preview-Modus aktivieren/deaktivieren

### Cross-Browser testen:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Container-Scroll-Animation in allen Browsern

## 🏗️ Erweiterte Setup-Optionen

### Erweiterte npm Scripts
```bash
npm run setup          # Setup Script ausführen
npm run preview        # Live Preview starten
npm run dev            # Development Server
npm run build          # Production Build
npm run start          # Production Server
npm run test           # Build Test
npm run analyze        # Bundle Analyse
npm run lint           # Code Linting
```

**Hinweis:** Docker-Commands wurden in v0.11.0 entfernt (siehe package.json)

## 📊 Performance & Monitoring

### Erwartete Werte:
- **First Load JS:** 156 kB (optimiert)
- **Lighthouse Score:** 90+ (alle Kategorien)
- **Container Animation:** 60fps smooth
- **Mobile Performance:** 90+ Score
- **Bundle Impact:** +45KB für Framer Motion

### Debug Tools:
- **Browser DevTools:** F12 → Performance/Lighthouse
- **Preview Page:** http://localhost:3000/preview
- **Console:** Framer Motion Debugging
- **Network:** Throttling Tests (Slow 3G)

## 🐛 Troubleshooting

### Häufige Probleme:

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

**Docker Probleme:**
```bash
docker-compose down
docker system prune -f
docker-compose up --build
```

**Animation nicht sichtbar:**
1. Browser Console prüfen
2. Framer Motion Installation: `npm list framer-motion`
3. Incognito/Private Mode testen

## 📁 Erweiterte Projektstruktur

```
/src
  /app
    /page.tsx           # Hauptseite
    /layout.tsx         # Root Layout
    /preview/
      /page.tsx         # Preview-Seite
    /globals.css        # Global Styles
  /components
    /ui/
      /container-scroll-animation.tsx  # 3D Scroll Animation
    /Header.tsx         # Navigation
    /Hero.tsx           # Hero + Animation
    /Services.tsx       # Services
    /CTA.tsx            # Kontakt
    /Footer.tsx          # Footer
    /Preview.tsx         # Preview Interface
    /demo.tsx           # VSS Demo
/styles
  /globals.css          # Tailwind + Custom
/public                 # Static Assets
Dockerfile             # Production Container
Dockerfile.dev         # Development Container
docker-compose.yml     # Multi-Container Setup
nginx.conf             # Production Nginx
setup.sh               # Linux/Mac Setup
setup.bat              # Windows Setup
preview.sh             # Live Preview Script
TESTING.md             # Umfassende Test-Anleitung
```

## 🚀 Deployment

### Vercel (Empfohlen)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/alexiosg111/vss)

### Docker Production
```bash
docker build -t vss-website .
docker run -p 3000:3000 vss-website
```

### Static Export
```bash
npm run build
# Output: .next/ Ordner
```

## 🔧 Entwicklung

### Neue Features hinzufügen:
1. **Komponente erstellen** in `/src/components/`
2. **TypeScript definieren** für Type Safety
3. **Tailwind verwenden** für Styling
4. **In Page importieren**
5. **Testen** mit Preview-System

### Container-Scroll-Animation verwenden:
```tsx
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

<ContainerScroll
  titleComponent={<h1>Your Title</h1>}
>
  <YourContent />
</ContainerScroll>
```

## 📞 Support & Testing

- **Repository:** https://github.com/alexiosg111/vss
- **Testing Guide:** `./TESTING.md`
- **Preview Page:** http://localhost:3000/preview
- **Version:** v0.1.0 + Setup System
- **Branch:** feat-vss-redesign-nextjs-tailwind-21stdev

## 📄 Changelog

### v0.1.0 + Setup System (Latest)
- ✨ **One-Click Setup:** Linux/Mac/Windows Scripts
- ✨ **Live Preview:** Automatische Browser-Öffnung
- ✨ **Interactive Preview Page:** Viewport Testing, Status Overview
- ✨ **Docker Integration:** Development + Production Container
- ✨ **Testing Suite:** Umfassende Test-Dokumentation
- ✨ **Cross-Platform:** Windows/Linux/Mac Kompatibilität
- ✨ **Container-Scroll-Animation:** 3D Effects mit Framer Motion
- ✨ **VSS Brand Integration:** Industrial High-Tech Design
- ✨ **Performance Optimiert:** 156 kB First Load JS

---

**🎯 Sofort starten:** `./setup.sh` (Linux/Mac) oder `setup.bat` (Windows)

**VSS Website Redesign v0.1.0 | Next.js 15 + Tailwind CSS + Framer Motion + Setup System | Industrial High-Tech Design**