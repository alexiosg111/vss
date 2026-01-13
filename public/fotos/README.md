# Foto-Verwaltungssystem

Dieses Verzeichnis enthält alle Bilder für die VSS-Website mit einer strukturierten Organisation nach Verwendungszweck und Größe.

## 📁 Ordnerstruktur

```
public/fotos/
├── config.json          # Metadaten-Konfiguration für alle Bilder
├── hero/                # Hero-Bilder (1920x1080)
├── gallery/             # Galerie-Bilder (800x600)
├── thumbnails/          # Vorschaubilder (300x300)
├── team/                # Team-Fotos (600x800)
└── projects/            # Projekt-Detailbilder (1200x800)
```

## 🎯 Verwendungszweck

### hero/
- **Format:** 1920x1080 (Full HD)
- **Verwendung:** Homepage Hero Section, Services Hero Section
- **Beispiel:** `hero/office-building.jpg`

### gallery/
- **Format:** 800x600 (Medium)
- **Verwendung:** Projekte Seite - Galerie
- **Beispiel:** `gallery/project-01.jpg`

### thumbnails/
- **Format:** 300x300 (Small/Square)
- **Verwendung:** Team Seite - Mitarbeiter Vorschau
- **Beispiel:** `thumbnails/team-member-01.jpg`

### team/
- **Format:** 600x800 (Portrait)
- **Verwendung:** Team Seite - Vollbild
- **Beispiel:** `team/engineer-01.jpg`

### projects/
- **Format:** 1200x800 (Large)
- **Verwendung:** Projekt-Detail Seiten
- **Beispiel:** `projects/construction-site.jpg`

## 📋 config.json Struktur

Jedes Bild wird in `config.json` mit folgenden Metadaten registriert:

```json
{
  "images": {
    "ordner/bildname.jpg": {
      "usage": "Verwendungsort (z.B. Homepage Hero Section)",
      "category": "ordnername",
      "size": {
        "width": 1920,
        "height": 1080,
        "variant": "hero|large|medium|small"
      },
      "alt": "Alternativer Text für Barrierefreiheit",
      "description": "Detaillierte Beschreibung"
    }
  },
  "categories": {
    "hero": {
      "name": "Hero Images",
      "description": "Große Vollbild-Bilder für Hero Sections",
      "dimensions": { "width": 1920, "height": 1080 }
    }
  }
}
```

## 🚀 Bilder hinzufügen

1. **Bild hochladen:** Datei in den entsprechenden Ordner legen
2. **Metadaten eintragen:** Eintrag in `config.json` hinzufügen
3. **Verwendung in der Website:**
   ```tsx
   <Image 
     src="/fotos/hero/office-building.jpg"
     alt="Modernes VSS Bürogebäude"
     width={1920}
     height={1080}
   />
   ```

## 📝 Namenskonventionen

- **Kleinbuchstaben:** alle Dateinamen
- **Bindestriche:** statt Leerzeichen (`office-building.jpg`)
- **Beschreibend:** `team-engineer-portrait.jpg` statt `IMG_1234.jpg`
- **Sprache:** Englisch für Dateinamen

## ✅ Vorteile dieses Systems

- **Zentrale Verwaltung:** Alle Bildmetadaten an einem Ort
- **Type-Safety:** TypeScript-Interfaces für Metadaten
- **Konsistenz:** Einheitliche Größen und Formate
- **SEO-optimiert:** Alt-Texte und Beschreibungen
- **Barrierefreiheit:** WCAG-konforme Alt-Texte
- **Performance:** Richtige Größen für jeden Verwendungszweck
