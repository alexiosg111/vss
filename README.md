# VSS Website Redesign - Vertical Service Solutions

Moderne Next.js-Website (App Router) mit Tailwind CSS, Framer Motion und Three.js.

## 🚀 Version 0.11.0 - Clean Setup (ohne Docker)

### ✅ Highlights

- **SplitShowcase Landing:** Diagonaler Split-Screen (/) mit CSS Clip-Path
- **Three.js Shader Background:** WebGL Shader mit originalen RGB-Farben
- **Inverse Mouse Interaction:** Shader aktiv dort, wo die Maus **nicht** ist
- **Interaktive Bereiche:** MOBILFUNK (unten links) & FAHRSTUHL (oben rechts)
- **Preview & Setup Monitor:** `/preview` und `/setup-monitor`
- **Clean Dev Workflow:** Docker aus dem Development-Setup entfernt

> Breaking Change (v0.11): Docker-Scripts wurden deaktiviert. Für Development bitte `npm run dev` nutzen.

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **3D/Shader:** Three.js
- **Icons:** Lucide React

## ⚡ Quick Start

### Linux / macOS (Setup Script)

```bash
npm install
chmod +x setup.sh
./setup.sh
```

### Windows

```cmd
npm install
setup.bat
```

### Manuell

```bash
npm install
npm run dev
# Öffnen: http://localhost:3000
# Preview: http://localhost:3000/preview
# Setup-Monitor: http://localhost:3000/setup-monitor
```

## 🧪 Testen

- **Homepage / SplitShowcase:** http://localhost:3000
- **Preview Page:** http://localhost:3000/preview
- **Setup Monitor:** http://localhost:3000/setup-monitor

Detaillierte Test-Szenarien: siehe [`TESTING.md`](./TESTING.md)

## 🔧 NPM Scripts

```bash
npm run dev       # Development
npm run build     # Production Build
npm run start     # Production Server
npm run lint      # ESLint (Next)

npm run setup     # ./setup.sh
npm run preview   # ./preview.sh
```

## 📁 Projektstruktur (Auszug)

```
/src
  /app
    /page.tsx              # Homepage (SplitShowcase)
    /preview/page.tsx      # Preview-Seite
    /setup-monitor/page.tsx# Setup-Monitor
  /components
    /SplitShowcase.tsx     # Diagonal Split + Shader
```

## 🚀 Deployment

- **Vercel:** `npm run build` / `npm run start` (oder direkt via Vercel)

## 📄 Release Notes

- [`RELEASE_NOTES_v0.11.0.md`](./RELEASE_NOTES_v0.11.0.md)
- [`RELEASE_SUMMARY_v0.11.0.md`](./RELEASE_SUMMARY_v0.11.0.md)
