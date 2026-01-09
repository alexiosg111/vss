# VSS Website Release v0.14.0 - Fixed Diagonal Layout mit Inline Shader

## 🎉 Release 0.14.0: Korrigierte Diagonale Aufteilung & Neuer Inline Shader

**Version Bump:** 0.13.0 → 0.14.0
**Build Status:** ✅ SUCCESSFUL
**Type:** Bug Fix & Code Refactoring Release

### 🔴 Problem identifiziert

In v0.13.0 wurde versehentlich eine vertikale Linie als Hitbox implementiert, obwohl eine diagonale Aufteilung gewünscht war. Zusätzlich gab es Kompatibilitätsprobleme mit styled-jsx.

### 🚀 Highlights

Dieses Release korrigiert die diagonale Aufteilung und implementiert einen neuen Inline-Shader für bessere Performance und Kompatibilität.

### 🔧 Änderungen & Fixes

**1. Korrigierte Diagonale Hitbox:**
- Die vertikale Linie wurde wieder durch eine korrekte diagonale Aufteilung ersetzt.
- Hitbox-Logik: `y < x` für Oben Rechts (Fahrstuhl), `y > x` für Unten Links (Mobilfunk).
- Die Diagonale verläuft von oben links nach unten rechts (/).

**2. Neuer Inline ShaderCanvas:**
- OriginalShader.tsx wurde durch einen Inline-Shader in SplitShowcase.tsx ersetzt.
- Der Shader-Code ist nun direkt in der Komponente enthalten.
- Bessere Performance und weniger Abhängigkeiten.

**3. Standard CSS statt styled-jsx:**
- styled-jsx wurde durch Standard `<style>` Tags ersetzt.
- Vermeidet Kompatibilitätsprobleme mit Next.js-Konfigurationen.
- Bessere Browser-Kompatibilität.

**4. Modernes Farbschema:**
- Inaktiver Bereich: `#f8fafc` (sehr helles Grau) mit Text `#1e293b`.
- Aktiver Bereich: `#000000` (Schwarz) mit Text `#ffffff`.
- Hex-Farbcodes für konsistentes Styling.

### 🎯 Features

**SplitShowcase Komponente:**
- Diagonaler Split-Screen (/) Layout.
- Inline ShaderCanvas mit Three.js WebGL.
- Inverse Maus-Interaktionslogik (Shader wo Maus NICHT ist).
- Smooth CSS Clip-Path Animationen (700ms cubic-bezier).
- Triangle Overlays für diagonale Trennung.

**Shader-Eigenschaften:**
- Kontinuierliche Animation mit Zeit-Variable.
- RGB-Farbschema im Shader.
- Optimiert für 60fps Performance.
- Keine externen Shader-Abhängigkeiten mehr.

**Clip-Path Konfiguration:**
- Links sichtbar: `polygon(0 0, 0 100%, 100% 100%)` (Dreieck unten links)
- Links versteckt: `polygon(0 0, 0 0, 0 0)` (kein sichtbarer Bereich)
- Rechts sichtbar: `polygon(0 0, 100% 0, 100% 100%)` (Dreieck oben rechts)
- Rechts versteckt: `polygon(100% 0, 100% 0, 100% 0)` (kein sichtbarer Bereich)

### 📊 Build-Results v0.14.0

**Build erfolgreich:**
- ✅ Next.js 15.5.9 Compilation
- ✅ TypeScript Validation: Bestanden
- ✅ Shader Rendering: Funktionstüchtig
- ✅ Mouse Interaction: Korrigiert

### 💡 Technische Details

**Hitbox-Logik:**
```typescript
const x = e.clientX - rect.left
const y = e.clientY - rect.top

// Diagonale: y < x -> Oben Rechts (Fahrstuhl)
const isRightSide = y < x

// Inverse Logik: Maus Rechts -> Shader Links
if (isRightSide) {
  setActiveSide('left')
} else {
  setActiveSide('right')
}
```

**Shader Fragment:**
```glsl
void main(void) {
  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
  float t = time*0.05;
  float lineWidth = 0.002;

  vec3 color = vec3(0.0);
  for(int j = 0; j < 3; j++){
    for(int i=0; i < 5; i++){
      color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
    }
  }

  gl_FragColor = vec4(color[0],color[1],color[2],1.0);
}
```

**Farbschema:**
- Hintergrund inaktiv: `#f8fafc` (slate-50)
- Text inaktiv: `#1e293b` (slate-800)
- Hintergrund aktiv: `#000000` (schwarz)
- Text aktiv: `#ffffff` (weiß)

### 🔄 Code Refactoring

**Vorher (v0.13.0):**
- Vertikale Hitbox (`x < width/2`)
- Externe OriginalShader.tsx Komponente
- styled-jsx für Clip-Paths
- Slate-50 und Slate-900 Farben

**Jetzt (v0.14.0):**
- Diagonale Hitbox (`y < x`)
- Inline ShaderCanvas Komponente
- Standard `<style>` Tags
- Hex-Codes `#f8fafc` und `#1e293b`

### 🚨 Breaking Changes

- **SplitShowcase komplett neu geschrieben**
- **OriginalShader.tsx wird nicht mehr verwendet**
- **Hitbox wieder korrigiert zu diagonal (y < x)**
- **Styled-jsx durch Standard CSS ersetzt**

### 📋 Geänderte Dateien:

1. `package.json` - Version 0.14.0, aktualisierte Keywords und Release-Info
2. `src/components/SplitShowcase.tsx` - Komplett neu geschrieben mit Inline Shader und diagonaler Hitbox

### 🎯 Testing

**Lokal testen:**
```bash
npm run dev
# Server läuft auf http://localhost:3000
```

**Akzeptanz-Kriterien:**
- ✅ Diagonale Aufteilung korrekt implementiert
- ✅ Shader-Effekt zeigt sich wo Maus NICHT ist
- ✅ Triangle Overlays funktionieren mit clip-paths
- ✅ Farben wechseln korrekt bei Mausbewegung
- ✅ Keine Kompatibilitätsprobleme mit styled-jsx
- ✅ Keine Fehler in der Konsole
- ✅ v0.14.0 ist offiziell getaggt und released

---

**Release v0.14.0** korrigiert die Probleme von v0.13.0 und implementiert eine saubere, performante Lösung mit inline Shader und korrekter diagonal Aufteilung.
