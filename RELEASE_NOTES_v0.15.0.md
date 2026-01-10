# VSS Website Release v0.15.0 - Diagonale Hitbox Alignment Fix

## Release 0.15.0: Exakte Trennlinie & bessere Interaktion

**Version Bump:** 0.12.0 → 0.15.0  
**Type:** UX / Interaction Fix Release

### 🔧 Fixes

- **Fixed: Diagonal hitbox now precisely aligned with separation line**
- **Improved interaction accuracy for split screen**

### 🧠 Technische Details (SplitShowcase)

- Die Split-Logik wird jetzt in normalisierten Koordinaten (`x/width`, `y/height`) berechnet und als gemeinsame "Single Source of Truth" verwendet.
- Hover-Detection, CSS Clip-Paths (Overlays) und die klickbaren Hitboxes teilen sich dieselbe Split-Line-Definition.
- Die Split-Line wird layout-aware aktualisiert (ResizeObserver + Font-Load), damit die Trennlinie stabil über verschiedene Screen-Größen hinweg korrekt bleibt.

### ✅ Testing

1. `npm run dev`
2. Maus entlang der sichtbaren diagonalen Trennlinie bewegen
3. Sicherstellen, dass der Wechsel exakt auf der Trennlinie erfolgt (kein „frühes“ Umschalten bei MOBILFUNK)
4. Responsive prüfen (Mobile / Tablet / Desktop)
