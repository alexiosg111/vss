# VSS Website Release v0.13.0 - Vertikale Linie als Hitbox mit neuem Effekt

## 🎉 Release 0.13.0: Intuitive Vertikale Interaktion & Color-Shift Effekt

**Version Bump:** 0.12.0 → 0.13.0
**Build Status:** ✅ SUCCESSFUL
**Type:** Major UX Improvement & Visual Enhancement Release

### 🚀 Highlights

Dieses Revolution transformiert die `SplitShowcase` Komponente von einer diagonalen zu einer vertikalen Aufteilung und integriert einen neuen dynamischen Color-Shift Effekt. Die Interaktion ist nun deutlich intuitiver und die visuelle Auswirkung beeindruckender.

### 🔧 Änderungen & Neue Features

**1. Vertikale Linie als Hitbox:**
- Die diagonale Hitbox wurde durch eine vertikale Linie in der Bildschirmmitte ersetzt.
- Neue Logik: `x < window.innerWidth / 2` für Links/Rechts-Bestimmung.
- Dies macht die Interaktion klarer und natürlicher.

**2. Neuer Color-Shift Effekt:**
- **Shader Background:** Der Three.js WebGL Shader läuft kontinuierlich mit den originalen RGB-Farben (Rot-Pink, Blau-Cyan, Grün-Limette).
- **Overlay-System:** Zwei Rechteck-Overlays decken den Shader mit slate-50 ab, wo er inaktiv ist.
- **Inverse Hover-Logik:** Der Effekt zeigt sich dort, wo die Maus **NICHT** ist (inverse Logik).
- **Smooth Transitions:** CSS Clip-Path Animationen (700ms cubic-bezier) für nahtlose Farbwechsel.

**3. Aktualisierte Clip-Paths:**
- Linkes Overlay: `polygon(0 0, 50% 0, 50% 100%, 0 100%)` (linke Hälfte)
- Rechtes Overlay: `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)` (rechte Hälfte)
- Diese ersetzen die vorherigen diagonalen Dreiecks-Clip-Paths.

**4. Klickbare Hitboxes:**
- Die klickbaren Bereiche wurden ebenfalls an die vertikale Aufteilung angepasst.
- MOBILFUNK (linke Hälfte) führt zu `#mobilfunk`.
- FAHRSTUHL (rechte Hälfte) führt zu `#aufzuge`.

### 🎯 Features

**SplitShowcase Komponente:**
- Vertikaler Split-Screen (|) Layout.
- Three.js WebGL Shader Hintergrund mit RGB-Farben.
- Inverse Maus-Interaktionslogik (Shader aktiv wo Maus NICHT ist).
- Smooth CSS Clip-Path Animationen (700ms cubic-bezier).
- Interaktiver Mouse Glow im Shader.

**Color-Shift Mechanik:**
- Maus auf der linken Seite → Rechte Seite wird aktiv (Shader sichtbar, weißer Text).
- Maus auf der rechten Seite → Linke Seite wird aktiv (Shader sichtbar, weißer Text).
- Der Wechsel erfolgt mit sanften 700ms Übergängen für visuelle Harmonie.

**Interaktive Bereiche:**
- **MOBILFUNK** (unten links) → Link zu `#mobilfunk`.
- **FAHRSTUHL** (oben rechts) → Link zu `#aufzuge`.

### 📊 Build-Results v0.13.0

**Build erfolgreich:**
- ✅ Next.js 15.5.9 Compilation
- ✅ TypeScript Validation: Bestanden
- ✅ Bundle Analysis: Optimiert
- ✅ Shader Performance: 60fps stabil

### 💡 Verbesserungen

**Benutzererfahrung:**
- Deutlich intuitivere Interaktion mit klarer Links/Rechts-Aufteilung.
- Bessere visuelle Trennung zwischen den beiden Service-Bereichen.
- Nahtlose Farbwechsel ohne harte Übergänge.

**Visuelle Qualität:**
- Shader-Effekt ist nun prägnanter durch die vertikale Aufteilung.
- Color-Shift Effekt schafft dynamische Kontraste.
- Beibehaltung der vibranten RGB-Farben für maximale visuelle Wirkung.

### 🔍 Technische Details

**Hitbox-Logik:**
```typescript
const midX = rect.width / 2;
if (x < midX) {
  setActiveSide('right'); // Maus links → Rechts aktiv
} else {
  setActiveSide('left');  // Maus rechts → Links aktiv
}
```

**Clip-Path Konfiguration:**
- Linke Hälfte: `clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%)`
- Rechte Hälfte: `clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`

**Inverse Logik:**
- Wenn Maus auf der linken Seite ist, wird die rechte Seite aktiviert (Shader sichtbar).
- Dies sorgt für den dynamischen Effekt, bei dem der Shader dort erscheint, wo die Maus nicht ist.

### 🚨 Breaking Changes

- **Hitbox-Art:** Von diagonal zu vertikal geändert.
- **Overlay-Form:** Von Dreiecken zu Rechtecken aktualisiert.
- **Interaktionsmodell:** Neu und intuitiver für bessere UX.

---

**Release v0.13.0** repräsentiert einen bedeutenden Schritt in der Evolution der VSS Website. Die vertikale Aufteilung und der neue Color-Shift Effekt schaffen ein noch beeindruckenderes und benutzerfreundlicheres Erlebnis.
