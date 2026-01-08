# VSS Website Testing & Preview Guide (v0.11.0)

## 🚀 Quick Start

### Option 1: Setup Script (empfohlen)

```bash
# Linux/Mac
chmod +x setup.sh
./setup.sh

# Windows
setup.bat
```

### Option 2: Live Preview

```bash
# Automatisches Starten + Preview öffnen
chmod +x preview.sh
./preview.sh
```

### Option 3: Manuell

```bash
npm install
npm run dev
# Öffnen Sie: http://localhost:3000
# Preview:     http://localhost:3000/preview
# Setup-Monitor: http://localhost:3000/setup-monitor
```

> Hinweis: Docker-Setup wurde in v0.11 aus dem Development-Workflow entfernt.

## 🎯 Test-Szenarien

### 1) SplitShowcase (Diagonal Split + Interaktion)

**URL:** http://localhost:3000

**Schritte:**
1. Homepage öffnen
2. Maus bewegen
3. **Erwartung:**
   - Diagonaler Split zwischen zwei Bereichen
   - Smooth Clip-Path Transition
   - Shader-Effekt reagiert invers (aktiv wo Maus nicht ist)
   - Bereiche: **MOBILFUNK** unten links / **FAHRSTUHL** oben rechts

### 2) Preview Page

**URL:** http://localhost:3000/preview

**Erwartung:**
- Viewport Switch (Mobile/Tablet/Desktop)
- Feature-Übersicht
- Quick Links zur Homepage

### 3) Setup Monitor

**URL:** http://localhost:3000/setup-monitor

**Erwartung:**
- Simulierter Setup-Log
- Anzeige von Version v0.11.0
- Links zu Homepage und Preview

### 4) Responsive Design

**Schritte:**
1. F12 → Device Toolbar aktivieren
2. Mobile/Tablet Presets auswählen
3. Prüfen, dass Layout und Interaktion weiterhin funktionieren

## 🛠️ Debug-Tools

```bash
npm run build
npm run lint
```

## 🐛 Troubleshooting

### Port 3000 belegt

```bash
kill -9 $(lsof -ti:3000)
PORT=3001 npm run dev
```

### Build Fehler / Reset

```bash
rm -rf node_modules .next package-lock.json
npm install
npm run build
npm run dev
```
