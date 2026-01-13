# VSS Website Release v0.23.0 - Structured Images + HeroScrollDemo

## 🎉 Release 0.23.0: Strukturierte Bild-Verwaltung & Bulletproof Hero-Komponenten

**Version Bump:** 0.12.0 → 0.23.0  
**Build Status:** ✅ Erwartet erfolgreich  
**Type:** Feature & Stabilitäts-Release  

### 🚀 Highlights

Dieses Release bringt zwei zentrale Verbesserungen:
- **SplitShowcase Bulletproof Fix**: Robuste diagonale Erkennung und vereinfachtes Styling ohne `styled-jsx`.
- **Strukturierte Bild-Verwaltung** unter `/public/images` inkl. Dokumentation pro Kategorie.
- **HeroScrollDemo**: Container-Scroll-Animation mit **Text über dem Tablet**.

### 🔧 Änderungen & Fixes

#### 1) SplitShowcase.tsx – Bulletproof Fix
- Entfernt: `style jsx global`
- Hinzugefügt: normales `<style>` Tag
- Vereinfachte Hitbox/Diagonal-Logik:
  - Normalisierte Koordinaten (x/y 0..1)
  - Schwellwert über `const isRightSide = y < x`
- Neue Klassen:
  - `shape-left-visible`, `shape-left-hidden`
  - `shape-right-visible`, `shape-right-hidden`

#### 2) Strukturierte Bild-Ordner
Neue Struktur unter `/public/images/`:
- `/public/images/mobilfunk/`
- `/public/images/fahrstuhl/`
- `/public/images/allgemein/`

Jede Kategorie enthält eine `README.md` mit:
- Verwendung/Use-Case
- Empfohlene Bildgrößen
- Dateiformate
- Pfad- und Code-Platzierung
- Notizen für konsistente Qualität

#### 3) Hero-ScrollDemo (Text über Tablet)
Neue Komponente:
- Datei: `src/components/hero-scroll-demo.tsx`
- Verwendet `ContainerScroll` (Framer Motion)
- Textblock ist **oberhalb** des Tablets platziert
- Bild-Pfad: `/images/mobilfunk/tablet-showcase.jpg`

#### 4) Startseite aktualisiert
- `src/app/page.tsx` integriert `HeroScrollDemo` direkt nach `SplitShowcase`

### ✅ QA Checklist
- `npm run build` erfolgreich
- `npm run dev` läuft fehlerfrei
- Text ist **über** dem Tablet sichtbar
- Bild-Ordnerstruktur inkl. README.md vorhanden

---

**Release v0.23.0** legt den Grundstein für eine saubere Asset-Pipeline (Bilder) und stabilisiert die zentrale Hero-Interaktion.
