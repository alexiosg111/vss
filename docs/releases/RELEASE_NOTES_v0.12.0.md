# VSS Website Release v0.12.0 - Fixed Hitbox & Shader

## 🎉 Release 0.12.0: Präzise Interaktion & Visuelle Upgrades

**Version Bump:** 0.11.0 → 0.12.0  
**Build Status:** ✅ SUCCESSFUL  
**Type:** Feature Fix & UX Enhancement Release  

### 🚀 Highlights

Dieses Release behebt kritische Interaktionsprobleme in der `SplitShowcase` Komponente und verbessert die visuelle Qualität des WebGL-Shaders.

### 🔧 Änderungen & Fixes

**1. Präzise Diagonale Hitbox:**
- Die mathematische Berechnung der Trennlinie wurde korrigiert (`y = (height/width) * x`).
- Die Umschaltung zwischen den Seiten erfolgt nun exakt an der visuellen Diagonale.

**2. Korrektur der "Inverse Logic":**
- Die Logik wurde so angepasst, dass der Shader-Effekt (Schwarz/Weiß Kontrast) nun korrekt auf der Seite aktiv ist, auf der sich die Maus **NICHT** befindet.
- Dies verbessert die Lesbarkeit und den Fokus auf den jeweiligen Bereich.

**3. WebGL Shader Upgrades:**
- **Farben:** Rückkehr zu den originalen, lebendigen RGB-Farben.
- **Interaktion:** Neuer interaktiver "Mouse Glow" Effekt. Der Shader reagiert nun dynamisch auf die Mausbewegung mit einem Lichteffekt.
- **Performance:** Optimierte Shader-Berechnungen für stabile 60fps.

**4. Funktionale Hitboxes:**
- Es wurden zwei großflächige, anklickbare Hitboxes (Links) hinzugefügt.
- Ein Klick auf "MOBILFUNK" oder "FAHRSTUHL" führt nun direkt zu den entsprechenden Service-Sektionen auf der Seite.

### 🎯 Features

**SplitShowcase Komponente:**
- Diagonaler Split-Screen (/) Layout.
- Three.js WebGL Shader Hintergrund.
- Inverse Maus-Interaktionslogik.
- Smooth CSS Clip-Path Animationen (700ms cubic-bezier).

**Interaktive Bereiche:**
- **MOBILFUNK** (unten links) -> Link zu `#mobilfunk`.
- **FAHRSTUHL** (oben rechts) -> Link zu `#aufzuge`.

### 📊 Build-Results v0.12.0

**Build erfolgreich:**
- ✅ Next.js 15.5.9 Compilation
- ✅ TypeScript Validation: Bestanden
- ✅ Bundle Analysis: Optimiert

---

**Release v0.12.0** verbessert die Benutzererfahrung durch präzisere Steuerung und ansprechendere Visuals, während die funktionale Verbindung zwischen dem Hero-Bereich und den Services hergestellt wird.
