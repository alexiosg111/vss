# VSS Website Redesign - Vertical Service Solutions

Eine moderne Next.js-Website mit Tailwind CSS für Vertical Service Solutions, fokussiert auf Industrie-Technik und Mobilfunk-Infrastruktur.

## 🚀 Version 0.21.0 - Fixed Hitbox & Shader

Dieses Release markiert den Übergang zu einem stabilen, performanten und visuell beeindruckenden Web-Auftritt. Der Fokus liegt auf einer präzisen interaktiven Hero-Sektion und einem vereinfachten Development-Workflow.

### ✅ Kern-Features

- **SplitShowcase Hero:** Innovativer diagonaler Split-Screen (/) mit Three.js WebGL-Hintergrund.
- **Inverse Mouse Logic:** Dynamische Interaktion – der Shader-Effekt aktiviert sich dort, wo die Maus gerade *nicht* ist, für maximale Lesbarkeit.
- **WebGL Shader:** Hochperformante Fraktal-Brownian-Motion (fbm) Muster mit interaktivem "Mouse Glow" Effekt.
- **Clean Setup:** Optimierter Workflow ohne Docker für schnellere Installation und höhere Stabilität.
- **Responsive Design:** Vollständig optimiert für Mobile, Tablet und Desktop.
- **Performance:** 60fps Animationen und optimierte Bundle-Größen.
- **SEO & Social:** Vollständige Metadata-Integration für Google, OpenGraph und Twitter.

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **WebGL/3D:** Three.js ^0.182.0
- **Sprache:** TypeScript
- **Icons:** Lucide React
- **Animationen:** CSS Clip-Path & Standard Transitions (700ms cubic-bezier)
- **Fonts:** Inter & JetBrains Mono

## ⚡ Quick Start - Setup in 60 Sekunden

### 🖥️ Desktop (Linux/Mac)
```bash
git clone https://github.com/alexiosg111/vss.git
cd vss
chmod +x setup.sh
./setup.sh
```
**Effekt:** Installiert Dependencies, baut das Projekt und startet den Dev-Server bei http://localhost:3000.

### 🪟 Windows
```cmd
git clone https://github.com/alexiosg111/vss.git
cd vss
setup.bat
```
**Effekt:** Automatisiertes Setup für Windows-Umgebungen.

### 🔧 Manuell
```bash
npm install
npm run dev
```

## 🎯 Highlights zum Testen

### 1. Diagonale Interaktion (Hero)
Besuchen Sie die Homepage und bewegen Sie die Maus über den Hero-Bereich. Die Trennung zwischen **MOBILFUNK** und **FAHRSTUHL** erfolgt exakt an der diagonalen Linie.

### 2. Shader Mouse Glow
Achten Sie auf den subtilen Lichteffekt, der Ihrer Maus im Shader-Hintergrund folgt, während die inverse Logik den Fokus auf dem aktiven Text hält.

### 3. Direkte Navigation
Klicken Sie auf die großen Bereiche im Hero, um direkt zu den entsprechenden Service-Sektionen zu springen.

## 📁 Projektstruktur

```
/src
  /app
    /page.tsx           # Hauptseite mit SplitShowcase
    /layout.tsx         # Root Layout mit SEO Meta-Tags
    /setup-monitor/     # Visueller Setup-Status
    /preview/           # Feature Showcase
  /components
    /SplitShowcase.tsx  # Hero-Komponente mit Diagonalsplit
    /OriginalShader.tsx # Three.js WebGL Implementierung
    /Header.tsx         # Navigation & Branding
    /Services.tsx       # Geschäftsbereiche & Benefits
    /CTA.tsx            # Kontakt & Testimonials
    /Footer.tsx         # Footer & Social Links
/public                 # Statische Assets & Icons
setup.sh               # Linux/Mac Setup (v0.21.0)
setup.bat              # Windows Setup
ANALYSIS.md            # Projekt-Analyse & Status
```

## 🏗️ Entwicklung & Deployment

### Scripts
- `npm run dev` - Startet Development Server
- `npm run build` - Erstellt Production Build
- `npm run start` - Startet Production Server
- `npm run lint` - Code Qualität prüfen

### Deployment
Die Website ist "Vercel-ready". Einfach das Repository mit Vercel verknüpfen für automatische CI/CD Deployments.

---

**VSS Website Redesign v0.21.0 | Next.js 15 + Three.js + Tailwind CSS | Industrial High-Tech Design**
