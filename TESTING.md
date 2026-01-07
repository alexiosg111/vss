# Testing Guide – VSS Website Redesign (v0.7.0)

## 🚀 Quick Start - Sofortiges Testen

### Option 1: Setup Script (Empfohlen)
```bash
# Linux/Mac
chmod +x setup.sh
./setup.sh

# Windows
setup.bat
```

### Option 2: Live Preview
```bash
# Automatisches Setup + Browser-Öffnung
chmod +x preview.sh
./preview.sh
```

### Option 3: Docker (Für alle Plattformen)
```bash
# Development
docker-compose up vss-website

# Production-ähnlich
docker-compose --profile production up --build
```

### Option 4: Manuell
```bash
npm install
npm run dev
# Öffnen Sie: http://localhost:3000
# Preview: http://localhost:3000/preview
```

---

## 🎯 Test-Szenarien

### 1) Above-The-Fold Startseite (Split-Screen) – Desktop
**URL:** http://localhost:3000

**Schritte:**
1. Öffnen Sie die Hauptseite
2. Prüfen Sie den **Initial State** (ohne Hover):
   - Header mit Logo + Intro-Text
   - Split-Area füllt den restlichen Viewport
   - Footer ist sichtbar (kein Scroll nötig)
3. Prüfen Sie die Platzierung:
   - **Aufzüge**: Card/Label oben rechts
   - **Mobilfunk**: Card/Label unten links

### 2) Interaktion: Diagonal Split + Inverse Hover
**URL:** http://localhost:3000

**Schritte:**
1. Hover/Fokus auf **Mobilfunk**
   - Erwartung: **Aufzüge** wird betont/vergrößert (inverse hover)
2. Hover/Fokus auf **Aufzüge**
   - Erwartung: **Mobilfunk** wird betont/vergrößert (inverse hover)
3. Transitions:
   - `clip-path` animiert smooth (keine Sprünge)
   - Overlays bleiben lesbar

### 3) Responsive Design (Mobile/Tablet)
**URL:** http://localhost:3000

**Schritte:**
1. F12 → Device Toolbar
2. iPhone/Android auswählen
3. Erwartung:
   - Panels sind **untereinander** (stacked) statt diagonal
   - Labels bleiben lesbar

### 4) Zielseiten / Routing
- **Aufzüge:** http://localhost:3000/aufzug
- **Mobilfunk:** http://localhost:3000/mobilfunk

Erwartung:
- Seiten laden ohne Fehler
- "Zur Startseite" Link funktioniert

### 5) Preview Page Test
**URL:** http://localhost:3000/preview

**Features zum Testen:**
- ✅ Viewport Controls (Mobile/Tablet/Desktop)
- ✅ Feature Status Overview
- ✅ Quick Actions

### 6) Performance Test
**Lighthouse Audit:**
```bash
F12 → Lighthouse Tab → Generate Report
```

### 7) Cross-Browser Test
**Browser:**
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

**Checks in jedem Browser:**
- `clip-path` wird korrekt gerendert
- Hover/Focus-Interaktion funktioniert
- Keine Layout-Jitter beim Transition

---

## 🛠️ Debug-Tools

### Development Tools
```bash
# Build Test
npm run build

# Linting
npm run lint
```

### Nützliche Browser-Checks
- DevTools → Console (Fehler/Warnings)
- DevTools → Performance (Transition smooth?)
- DevTools → Rendering → Paint flashing (optional)
