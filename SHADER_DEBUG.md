# Shader Debug Status

## Problem
Der Shader zeigt nur schimmernde Farben statt des vollen RGB-Effekts.

## Root Cause Analysis

### Issue 1: gl_FragCoord vs Resolution Mismatch
- `gl_FragCoord` gibt Pixel-Koordinaten im **Drawing Buffer** (physische Pixel)
- `renderer.setSize(width, height)` setzt CSS-Größe
- Mit `setPixelRatio(2)` ist Drawing Buffer = CSS Size × 2
- **u_resolution muss Drawing Buffer Size matchen, nicht CSS Size!**

### Issue 2: Pointer Events
- Shader-Canvas ist hinter Overlays in SplitShowcase
- Container-basierte Events feuern nicht
- **Lösung: Window-basierte Events mit Bounds-Check**

### Issue 3: Canvas-Sichtbarkeit
- Canvas muss explizit `width: 100%, height: 100%` haben
- `display: block` verhindert inline-gaps

## Fixes Applied

### 1. Drawing Buffer Size Sync
```tsx
const drawingBufferSize = new THREE.Vector2()
renderer.getDrawingBufferSize(drawingBufferSize)
uniforms.u_resolution.value.copy(drawingBufferSize)
```

### 2. Window-based Pointer Events
```tsx
window.addEventListener('pointermove', handlePointerMove, { passive: true })
// mit Bounds-Check für out-of-bounds
if (x < 0 || x > 1 || y < 0 || y > 1) {
  uniforms.u_mouse.value.set(-10, -10)
}
```

### 3. Canvas Styling
```tsx
renderer.domElement.style.width = '100%'
renderer.domElement.style.height = '100%'
renderer.domElement.style.display = 'block'
```

## Expected Result
- ✅ Vibrant RGB colors (Red-Pink, Blue-Cyan, Green-Lime)
- ✅ Flowing noise patterns mit fbm()
- ✅ Mouse glow interaktion
- ✅ Smooth 60fps animation
- ✅ Responsive auf allen Größen

## Test Checklist
- [ ] Shader lädt ohne Console-Errors
- [ ] Farben sind sichtbar (nicht nur schwarz/grau)
- [ ] Animation läuft smooth (nicht frozen)
- [ ] Mouse-Bewegung erzeugt Glow-Effekt
- [ ] Resize funktioniert korrekt
- [ ] Touch-Events funktionieren
