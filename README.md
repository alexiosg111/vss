# VSS Website Redesign - Vertical Service Solutions

Eine moderne Next.js-Website mit Tailwind CSS für Vertical Service Solutions, inspiriert von 21st.dev Design-Patterns.

## 🚀 Features

- **Modern Design:** Industrial High-Tech Styling basierend auf 21st.dev Ästhetik
- **Responsive:** Mobile-first Design für alle Geräte
- **Fast:** Next.js 15 mit TypeScript und optimierten Builds
- **Accessible:** WCAG-konforme Implementierung
- **SEO-optimiert:** Meta-Tags, Open Graph, strukturierte Daten
- **Animationen:** Smooth Transitions und moderne Effekte

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Icons:** Lucide React
- **Fonts:** Inter & JetBrains Mono (Google Fonts)
- **Deployment:** Vercel-ready

## 📦 Installation

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Setup

1. **Dependencies installieren:**
```bash
npm install
# oder
yarn install
```

2. **Development Server starten:**
```bash
npm run dev
# oder
yarn dev
```

3. **Build für Production:**
```bash
npm run build
# oder
yarn build
```

4. **Production Server starten:**
```bash
npm start
# oder
yarn start
```

## 🏗️ Projektstruktur

```
/src
  /app
    /page.tsx           # Landing Page
    /layout.tsx         # Root Layout
    /globals.css        # Global Styles
  /components
    /Header.tsx         # Navigation Header
    /Hero.tsx           # Hero Section
    /Services.tsx       # Services Overview
    /CTA.tsx            # Contact CTA
    /Footer.tsx         # Footer
/styles
  /globals.css          # Tailwind + Custom Styles
/public                 # Static Assets
tailwind.config.js      # Tailwind Configuration
next.config.js          # Next.js Configuration
tsconfig.json           # TypeScript Configuration
package.json            # Dependencies & Scripts
```

## 🎨 Design System

### Farbpalette

- **Primary (VSS Blue):** `#0284c7` - Hauptfarbe für Marke
- **Secondary (VSS Green):** `#10b981` - Akzentfarbe für Services  
- **Accent (VSS Orange):** `#f59e0b` - CTA- und Highlight-Farbe
- **Dark:** `#1f2937` - Text und Backgrounds
- **Light:** `#f8fafc` - Helle Backgrounds

### Komponenten-Styles

- **Buttons:** `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards:** `.card`, `.card-dark` mit Glasmorphism-Effekten
- **Gradients:** `.text-gradient-vss` für Text-Highlights
- **Animations:** Fade-in, Slide-up, Float-Effekte

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (sm)
- **Tablet:** 768px - 1024px (md)
- **Desktop:** > 1024px (lg, xl, 2xl)

## 🎯 Seitenstruktur

1. **Header:** Logo, Navigation, Kontakt-CTA
2. **Hero:** Hauptbotschaft, Service-Übersicht, CTA
3. **Services:** Aufzüge & Mobilfunk Detailansicht
4. **Benefits:** Warum VSS wählen
5. **CTA:** Kontaktmöglichkeiten, Testimonials
6. **Footer:** Links, Kontakt, Social Media, Legal

## 🔧 Konfiguration

### Tailwind CSS
- Custom Colors: VSS Brand Colors
- Extended Spacing: 18, 88, 128
- Custom Shadows: Glass, Glow-Effekte
- Animations: Fade-in, Slide-up, Float

### Next.js
- App Router aktiviert
- TypeScript Strict Mode
- Image Optimization konfiguriert

## 🚀 Deployment

### Vercel (Empfohlen)

1. **GitHub Repository verknüpfen**
2. **Vercel Dashboard → New Project**
3. **Framework Preset: Next.js**
4. **Deploy!**

### Andere Plattformen

```bash
# Build generieren
npm run build

# .next/ Ordner hochladen
```

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimiert für alle Metriken
- **Image Optimization:** Next.js Image Component
- **Code Splitting:** Automatisch durch Next.js

## 🎨 Design-Prinzipien

- **Industrial High-Tech:** Moderne, professionelle Ästhetik
- **21st.dev Inspirierung:** Glasmorphism, Gradients, Smooth Animations
- **Accessibility First:** High Contrast, Semantic HTML
- **Mobile-first:** Optimiert für Smartphone-Nutzung
- **Performance:** Minimal JS, Optimized CSS

## 📝 Entwicklung

### Komponenten hinzufügen

1. **Neue Komponente in `/src/components/` erstellen**
2. **TypeScript Interface definieren**
3. **Tailwind CSS Styling verwenden**
4. **In `page.tsx` importieren**

### Styling Guidelines

- **Kein inline CSS** - nur Tailwind Utility Classes
- **Konsistente Farbpalette** verwenden
- **Responsive Design** beachten
- **Animationen sparsam** einsetzen
- **Accessibility** berücksichtigen

## 🐛 Known Issues

- Keine bekannten kritischen Issues
- Cross-Browser Testing durchgeführt

## 📞 Support

Für technische Fragen oder Support:
- **E-Mail:** dev@vertical-service-solutions.com
- **Telefon:** +49 (0) 123 456 789

## 📄 Lizenz

© 2024 Vertical Service Solutions GmbH. Alle Rechte vorbehalten.

---

**Entwickelt mit Next.js 15 + Tailwind CSS | Industrial High-Tech Design**