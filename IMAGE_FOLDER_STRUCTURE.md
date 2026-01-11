# 🖼️ Image Folder Structure & Documentation

## 📁 Organisierte Bild-Ordner Struktur

### Erstellt in v0.20.0
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
4. **Wartbarkeit:** Mehrere Entwickler können gleichzeitig arbeiten
5. **Konflikt-Frei:** Getrennte Ordner verhindern Probleme

---

## 📋 Empfehlung für Bild-Größen

### Hero-Bilder (Startseite)
- **Höhe:** 600-800px (Above the fold)
- **Breite:** 1200-1920px (Full width)
- **Format:** WebP oder PNG (optimiert)
- **Dateigröße:** Unter 500KB pro Bild

### Mobilfunk-Bilder (Tablet Display)
- **Höhe:** 600-800px
- **Breite:** 800-1200px (Tablet-Display)
- **Format:** SVG (Vektor, skalierbar)
- **Dateigröße:** Unter 200KB pro SVG

### Fahrstuhl-Bilder (Tablet Display)
- **Höhe:** 600-800px
- **Breite:** 800-1200px
- **Format:** PNG oder JPG (Hochwertig)
- **Dateigröße:** Unter 500KB pro Bild

---

## 🚨 Dateiname-Konventionen

### Hero-Bilder
```
hero-banner-1920.webp      (Hero Banner, 1920px breit)
hero-background-1200.webp    (Hero Hintergrund)
hero-logo-512.png            (Logo, 512px)
```

### Mobilfunk-Bilder
```
mobilfunk-tower.svg          (Mobilfunk Turm Vektor)
mobilfunk-network.svg         (Netzwerk Vektor)
mobilfun-5g-icon.svg          (5G Icon)
```

### Fahrstuhl-Bilder
```
fahrstuhl-elevator.png        (Aufzug Foto)
fahrstuhl-control-panel.svg  (Steuerfeld Vektor)
fahrstuhl-buttons.svg         (Aufzug Knöpfe)
```

---

## 📊 Phase-Plan für Bild-Integration

### Phase 1: Struktur & Dokumentation (v0.20.0) ✅
- [x] Ordner erstellt
- [x] Dokumentation geschrieben

### Phase 2: Header Dark Mode (Geplant für v0.21.0)
- [ ] Header mit Dark Mode Toggle
- [ ] Fixed Position oben auf Header
- [ ] Schwarze Stelle bei Mobilfunk im Header
- [ ] Globale Dark Mode State

### Phase 3: Hero-Bilder (Geplant für v0.22.0)
- [ ] Hero Banner (1920px breit)
- [ ] Hero Hintergrund
- [ ] Logo in verschiedenen Größen

### Phase 4: Mobilfunk-Bilder (Geplant für v0.23.0)
- [ ] Mehrere SVG-Vektoren
- [ ] Netzwerk-Visualisierung
- [ ] Sendemasten
- [ ] 5G-Icons

### Phase 5: Fahrstuhl-Bilder (Geplant für v0.24.0)
- [ ] Aufzug-Fotos (verschiedene Modelle)
- [ ] Steuerfeld-Visualisierung
- [ ] Interaktive UI-Elemente
- [ ] Dashboard-Screenshots

---

## 🎯 Design-Empfehlungen

### Bild-Stil
- **Fotos:** Professionell, hochwertig, keine Stock-Fotos
- **Vektoren:** SVG, skalierbar, sauber, konsistent
- **Icons:** Einheitlicher Stil, gleiche Linienstärke

### Farb-Schema
- **Mobilfunk:** VSS Blue (#0284c7) Primär
- **Fahrstuhl:** VSS Orange (#f59e0b) Primär
- **Neutral:** VSS Green (#10b981) und Slate Grays
- **Kontrast:** Bilder sollten auf Schwarz/Weiß funktionieren

---

## ✅ Implementation Status

### v0.20.0
- [x] Bild-Ordner Struktur erstellt
- [x] Dokumentation vollständig
- [x] Bereit für zukünftige Bilder

### Nächste Schritte
1. Header mit Dark Mode Toggle implementieren
2. Hero-Bilder hinzufügen
3. Mobilfunk-Bilder erweitern
4. Fahrstuhl-Bilder hinzufügen

---

## 📐 Technical Details

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

{/* Mit Hover */}
<div className="transition-transform hover:scale-105">
  <Image ... />
</div>
```

---

## 🔧 Maintenance

### Neue Bilder hinzufügen
1. Bild in den entsprechenden Ordner platzieren
2. README.md in Ordner aktualisieren (Liste alle Bilder)
3. Dateiname-Konventionen beachten
4. Optimierte Formate verwenden (WebP, SVG)

### Struktur beibehalten
```
public/images/
├── mobilfunk/      (Nur für Mobilfunk)
├── fahrstuhl/      (Nur für Fahrstuhl)
├── hero/          (Nur für Hero)
└── README.md      (Dokumentation)
```

---

## 📝 Documentation Guide

### README.md in /images/
```markdown
# VSS Website Images

## Ordner-Struktur
- `mobilfunk/` - Mobilfunk-Bilder
- `fahrstuhl/` - Fahrstuhl-Bilder
- `hero/` - Hero-Bilder

## Bild-Format-Empfehlungen
- SVG für Vektoren und Icons
- WebP für Fotos (optimiert)
- PNG/JPG als Fallback

## Dateiname-Konventionen
- Kleinbuchstaben, Bindestriche statt Unterstriche
- Beschreibende Namen
- Keine Sonderzeichen außer - und _

## Optimierung
- Bilder sollten unter 500KB liegen (außer Hero)
- Vektoren sollten sauber und optimiert sein
```

---

## 🎉 Summary

**v0.20.0 ist eine Struktur-Release** mit Bild-Ordner-Organisation.

**Was's Neu:**
- ✅ /images/mobilfunk/ Ordner
- ✅ /images/fahrstuhl/ Ordner
- ✅ /images/hero/ Ordner
- ✅ Umfassende Dokumentation

**Was's Verbessert:**
- ✅ Bild-Organisation
- ✅ Skalierbare Struktur
- ✅ Team-Arbeit erleichtert
- ✅ Konflikt-Freiheit

**Nächste Phase:**
- Header mit Dark Mode Toggle
- Hero-Bilder
- Mehrere Service-Bilder

---

**Release Status:** ✅ PRODUCTION READY
**Release Type:** Structure & Organization
**Breaking Changes:** None

---

**Prepared by:** VSS Development Team
**Date:** January 11, 2025
**Version:** 0.20.0
