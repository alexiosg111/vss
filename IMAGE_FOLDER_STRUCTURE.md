# 🖼️ Image Folder Structure & Documentation

## 📁 Organisierte Bild-Ordner Struktur

**Erstellt in v0.19.0:**

```
public/images/
├── mobilfunk/          (leer - bereit für Mobile Bilder)
├── fahrstuhl/          (leer - bereit für Aufzug-Bilder)
├── hero/               (leer - bereit für Hero-Bilder)
└── telecom-structure.svg  (existiert - wird in Mobilfunk verwendet)
```

---

## 📝 Struktur-Dokumentation

### Warum diese Struktur?

1. **Organisation:** Jede Sektion hat ihren eigenen Ordner
2. **Übersicht:** Leicht zu finden was wo Bilder sind
3. **Skalierbarkeit:** Struktur wächst mit Bildern
4. **Wartbarkeit:** Neue Bilder einfach hinzufügen
5. **Team-Arbeit:** Mehrere Entwickler können gleichzeitig arbeiten ohne Konflikte

---

## 📋 Empfehlung für Bild-Größen

### Hero-Bilder (Startseite)
- **Höhe:** 600-800px (Above the fold)
- **Breite:** 1200-1920px (Full width)
- **Format:** WebP oder PNG (optimiert)
- **Dateigröße:** Unter 500KB pro Bild

### Mobilfunk-Bilder
- **Höhe:** 600-800px
- **Breite:** 800-1200px (Tablet-Display)
- **Format:** SVG (Vektor, skalierbar)
- **Dateigröße:** Unter 200KB pro SVG

### Fahrstuhl-Bilder
- **Höhe:** 600-800px
- **Breite:** 800-1200px
- **Format:** PNG oder JPG (Hochwertig)
- **Dateigröße:** Unter 500KB pro Bild

---

## 🚨 Dateiname-Conventionen

### Dateinamen
```
hero-banner-1920.webp       (Hero Banner, 1920px breit)
hero-background-1200.webp    (Hero Hintergrund)
mobilfunk-tower.svg          (Mobilfunk Turm Vektor)
mobilfunk-network.svg         (Netzwerk Vektor)
fahrstuhl-elevator.png        (Aufzug Foto)
fahrstuhl-control-panel.svg   (Steuerfeld Vektor)
```

---

## 📊 Phase-Plan für Bild-Integration

### Phase 1: Struktur & Dokumentation (v0.20.0) ✅
- [x] Ordner erstellt
- [x] Struktur dokumentiert
- [x] Empfehlungen für Bild-Größen
- [x] Benamenskonventionen definiert

### Phase 2: Header Dark Mode (Geplant)
- [ ] Header mit Dark Mode Toggle
- [ ] Fixed Position oben auf Header
- [ ] Schwarze Stelle bei Mobilfunk im Header
- [ ] Globale Dark Mode State

### Phase 3: Hero-Bilder (Geplant)
- [ ] Hero Banner (1920px breit)
- [ ] Hero Hintergrund
- [ ] Logo in verschiedenen Größen
- [ ] Favicon (32x32 und 16x16)

### Phase 4: Mobilfunk-Bilder (Geplant)
- [ ] Mehrere SVG-Vektoren
- [ ] Netzwerk-Visualisierungen
- [ ] Sendemasten
- [ ] 5G-Icons

### Phase 5: Fahrstuhl-Bilder (Geplant)
- [ ] Aufzug-Fotos (verschiedene Modelle)
- [ ] Steuerfeld-Visualisierungen
- [ ] Interaktive UI-Elemente
- [ ] Dashboard-Screenshots

---

## 🎯 Design-Empfehlungen

### Bild-Stil
- **Fotos:** Professionell, hochwertig, keine Stock-Fotos
- **Vektoren:** SVG, skalierbar, sauber, konsistent
- **Icons:** Einheitlicher Stil, gleiche Linienstärke

### Farbschema für Bilder
- **Mobilfunk:** VSS Blue (#0284c7) Primär
- **Fahrstuhl:** VSS Orange (#f59e0b) Primär
- **Neutral:** VSS Green (#10b981) und Slate Grays
- **Kontrast:** Bilder sollten auf Schwarz/Weiß funktionieren

---

## 📐 Technical Details

### Bild-Optimierung
```bash
# Für WebP Konvertierung (empfohlen)
npm install -g sharp

# Beispiel: Bild optimieren
sharp input.jpg --webp -q 80 -o output.webp

# SVG-Optimierung
svgo input.svg --precision 2 --enable-viewbox --remove-attributes "data-name"
```

### Tailwind Classes für Bilder
```tsx
{/* Responsive Bild */}
<Image
  src="/images/mobilfunk/tower.svg"
  alt="Mobilfunk Turm"
  width={800}
  height={600}
  className="w-full h-auto object-contain"
  priority
/>

{/* Hintergrund-Bild */}
<div className="absolute inset-0">
  <Image
    src="/images/hero/background.webp"
    alt="Hero Hintergrund"
    fill
    className="w-full h-full object-cover"
    priority
  />
</div>
```

---

## ✅ V0.20.0 Status

### Implementiert
- [x] Image-Folder Struktur erstellt
- [x] Dokumentation für Bild-Struktur
- [x] Empfehlungen für Bild-Größen
- [x] Dateiname-Konventionen definiert

### In Arbeit
- [ ] Header Dark Mode (in Planung)
- [ ] Hero-Bilder (in Planung)
- [ ] Mehrere Bilder pro Sektion (Phase 3, 4, 5)

---

## 📞 Nächste Schritte

### Für v0.21.0
1. Header Dark Mode implementieren
2. Hero-Bilder hinzufügen
3. Mehrere Bilder für Mobilfunk
4. Mehrere Bilder für Fahrstuhl
5. Bilg-Galerie oder Portfolio

### Für v0.22.0
1. Bild-Optimierung (WebP, SVG-SVGO)
2. Lazy Loading für alle Bilder
3. Bild-Caching Strategie
4. Responsive Bild-Sizes
5. Fallback für fehlende Bilder

---

**Status:** ✅ V0.20.0 BEREIT FÜR BILDER
**Nächste Phase:** Header Dark Mode Integration
