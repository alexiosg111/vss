# VSS Website - Setup Anleitung (v0.22.0)

## 🚀 Schnell-Start (Empfohlen)

### Automatisches Setup mit Shell-Script:
```bash
./setup.sh
```

**Das Script:**
- ✅ Prüft Node.js & npm Installation
- ✅ Installiert Dependencies automatisch
- ✅ Erstellt `.env.local` Datei
- ✅ Testet Build
- ✅ Startet Dev-Server
- ✅ Öffnet Browser automatisch

---

## 📦 Manuelles Setup

### 1. Dependencies installieren:
```bash
npm install
```

### 2. Development Server starten:
```bash
npm run dev
```

### 3. Browser öffnen:
```
http://localhost:3000
```

---

## 🎯 Features zum Testen (v0.22.0)

### Hauptseite (`/`)
- ✅ **SplitShowcase:** Diagonaler Split mit WebGL Shader
- ✅ **RGB Shader:** Vibrant Farben (Rot-Pink, Blau-Cyan, Grün-Lime)
- ✅ **Mouse Interaction:** Glow-Effekt folgt Maus
- ✅ **Services Section:** Mobilfunk & Aufzug-Systeme
- ✅ **Image Gallery:** 8 Bilder mit Filter-Funktionalität

### Mobilfunk-Seite (`/mobilfunk`)
- ✅ **Tablet-optimiert:** Ab 768px optimales Layout
- ✅ **2-Spalten Hero:** Text + Hero-Image
- ✅ **5 Features:** Mit Icons und Beschreibungen
- ✅ **Bilder-Galerie:** 5 professionelle Mobilfunk-Bilder
- ✅ **Sidebar:** Sticky Service-Überblick

---

## 🔧 Verfügbare npm Scripts

```bash
npm run dev          # Development Server (localhost:3000)
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint
npm run test         # Build Test
npm run setup        # Setup Script ausführen
npm run preview      # Preview-Seite öffnen
```

---

## 📋 Systemanforderungen

### Benötigt:
- **Node.js:** v18+ oder v20+ (empfohlen)
- **npm:** v9+ oder v10+
- **RAM:** Mindestens 2 GB verfügbar
- **Speicher:** ~500 MB für node_modules

### Optional:
- **Browser:** Chrome, Firefox, Safari, Edge (neueste Versionen)

---

## ⚙️ Environment Variables

Das Setup-Script erstellt automatisch eine `.env.local` Datei mit:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=Vertical Service Solutions
NEXT_PUBLIC_COMPANY_PHONE=+49 (0) 123 456 789
NEXT_PUBLIC_COMPANY_EMAIL=info@vertical-service-solutions.com
NODE_ENV=development
```

---

## 🐛 Troubleshooting

### Problem: "npm install" schlägt fehl
```bash
# Lösche Cache und installiere neu
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Problem: Port 3000 bereits belegt
```bash
# Nutze anderen Port
npm run dev -- -p 3001
```

### Problem: Build-Fehler
```bash
# Prüfe Node.js Version
node --version  # Sollte v18+ sein

# Neuinstallation
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Problem: Shader zeigt keine Farben
- ✅ Prüfe Browser-Console (F12) auf WebGL-Fehler
- ✅ Stelle sicher, dass Browser WebGL unterstützt
- ✅ Aktualisiere GPU-Treiber (falls nötig)
- ✅ Teste in anderem Browser

---

## 🚫 Kein Docker mehr!

**v0.11.0+ verwendet KEIN Docker mehr** für Development.

### Warum?
- ✅ **Einfacher:** Direkter npm-Workflow
- ✅ **Schneller:** Kein Container-Overhead
- ✅ **Zuverlässiger:** Keine Docker-Setup-Probleme
- ✅ **Bewährt:** Zurück zu v0.8 Setup-Logik

### Migration von Docker:
Wenn du vorher Docker genutzt hast:
```bash
# Stoppe alle Container
docker-compose down

# Lösche Docker-Images (optional)
docker rmi vss-website

# Nutze jetzt setup.sh
./setup.sh
```

---

## 📱 URLs & Routen

### Hauptseiten:
- **Home:** http://localhost:3000
- **Mobilfunk:** http://localhost:3000/mobilfunk

### Debug/Test:
- **Preview:** http://localhost:3000/preview
- **Setup Monitor:** http://localhost:3000/setup-monitor

---

## 🔍 Performance-Check

Nach dem Build kannst du die Performance prüfen:

```bash
npm run build

# Ausgabe sollte sein:
# Route (app)                Size     First Load JS
# ┌ ○ /                      144 kB   249 kB
# ├ ○ /mobilfunk            162 B    106 kB
# ...
```

**Erwartete Werte:**
- ✅ Hauptseite: ~249 kB First Load JS
- ✅ Mobilfunk: ~106 kB First Load JS
- ✅ Build-Zeit: 10-15s

---

## 📞 Support

### Bei Problemen:
1. Prüfe diese SETUP_README.md
2. Lies SHADER_DEBUG.md (für Shader-Probleme)
3. Prüfe TESTING.md für detaillierte Tests
4. Öffne ein GitHub Issue

### Hilfreiche Logs:
```bash
# Next.js Logs
npm run dev  # Zeigt alle Console-Ausgaben

# Build Logs
npm run build 2>&1 | tee build.log

# Browser Console
# F12 → Console Tab (für Frontend-Fehler)
```

---

## ✅ Setup erfolgreich?

Wenn alles funktioniert, solltest du sehen:

```
✅ Dependencies installiert
✅ Build erfolgreich
🚀 Development Server läuft auf http://localhost:3000
🌐 Browser öffnet automatisch

Hauptseite zeigt:
  • Diagonaler Split (Mobilfunk unten links, Fahrstuhl oben rechts)
  • Animierter RGB-Shader Hintergrund
  • Smooth Hover-Effekte

/mobilfunk zeigt:
  • Hero mit Mobilfunk-Branding
  • 5 Feature-Cards
  • Bilder-Galerie mit 5 Bildern
  • Sidebar mit Service-Überblick
```

---

**Version:** 0.22.0  
**Letztes Update:** 2026-01-12  
**Setup-Type:** npm-only (kein Docker)
