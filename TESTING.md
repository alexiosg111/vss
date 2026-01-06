# VSS Website Testing & Preview Guide

## 🚀 Quick Start - Sofortiges Testen

### Option 1: Setup Script (Empfohlen)
```bash
# Linux/Mac
chmod +x setup.sh
./setup.sh

# Windows
setup.bat
```

### Option 2: Live Preview
```bash
# Automatisches Setup + Browser-Öffnung
chmod +x preview.sh
./preview.sh
```

### Option 3: Docker (Für alle Plattformen)
```bash
# Development
docker-compose up vss-website

# Production-ähnlich
docker-compose --profile production up --build
```

### Option 4: Manuell
```bash
npm install
npm run dev
# Öffnen Sie: http://localhost:3000
# Preview: http://localhost:3000/preview
```

## 🎯 Test-Szenarien

### 1. Container-Scroll-Animation Test
**URL:** http://localhost:3000

**Schritte:**
1. Öffnen Sie die Hauptseite
2. Scrollen Sie nach unten zur dunklen Sektion
3. **Erwartetes Verhalten:**
   - Card rotiert von 20° zu 0°
   - Card skaliert von 1.05 zu 1.0 (Desktop) oder 0.9 zu 0.9 (Mobile)
   - Smooth 60fps Animation
   - VSS Brand Colors (Blue/Green/Orange)

**Browser DevTools:**
```
F12 → Console → Überwachen Sie die Animation Performance
```

### 2. Responsive Design Test
**URL:** http://localhost:3000

**Mobile Test:**
1. F12 → Device Toolbar (Mobile Icon)
2. iPhone/Android auswählen
3. **Erwartetes Verhalten:**
   - Responsive Navigation
   - Optimierte Container-Scroll-Skalierung (0.7→0.9)
   - Touch-freundliche Buttons

**Tablet Test:**
1. F12 → Device Toolbar
2. iPad/Tablet auswählen
3. **Erwartetes Verhalten:**
   - Angepasste Grid-Layouts
   - Optimierte Spacing

### 3. Preview Page Test
**URL:** http://localhost:3000/preview

**Features zum Testen:**
- ✅ Viewport Controls (Mobile/Tablet/Desktop)
- ✅ Feature Status Overview
- ✅ Live Preview Toggle
- ✅ Performance Metrics
- ✅ Quick Start Status

### 4. Performance Test
**Lighthouse Audit:**
```bash
F12 → Lighthouse Tab → Generate Report
```

**Erwartete Werte:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### 5. Cross-Browser Test
**Browser:**
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

**Container-Scroll-Test in jedem Browser:**
1. Öffnen Sie http://localhost:3000
2. Scrollen Sie zur Animation-Sektion
3. Prüfen Sie Smooth Animation ohne Jank

## 🛠️ Debug-Tools

### Development Tools
```bash
# Build Test
npm run build

# Linting
npm run lint

# Type Check
npx tsc --noEmit
```

### Browser DevTools
```javascript
// Console Commands für Debugging
console.log('VSS Debug:', window.location.pathname)

// Performance Monitoring
console.log(performance.getEntriesByType('navigation'))

// Framer Motion Debug
document.querySelector('[data-framer-motion]')
```

### Network Test
```bash
# Throttling Test
F12 → Network → Slow 3G
# Prüfen Sie: Ladezeit < 3 Sekunden
```

## 🐛 Known Issues & Solutions

### Issue 1: Animation nicht sichtbar
**Lösung:**
1. Prüfen Sie Framer Motion Installation: `npm list framer-motion`
2. Prüfen Sie Browser Console auf Fehler
3. Testen Sie in Incognito/Private Mode

### Issue 2: Build Fehler
**Lösung:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue 3: Docker Probleme
**Lösung:**
```bash
docker-compose down
docker system prune -f
docker-compose up --build
```

### Issue 4: Port 3000 bereits belegt
**Lösung:**
```bash
# Finden Sie den Prozess
lsof -ti:3000

# Kill den Prozess
kill -9 $(lsof -ti:3000)

# Oder verwenden Sie einen anderen Port
PORT=3001 npm run dev
```

## 📊 Performance Benchmarks

### Container-Scroll-Animation
- **FPS:** 60fps (smooth)
- **CPU Usage:** < 5%
- **Memory:** +2MB
- **Bundle Impact:** +45KB

### Page Load
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **First Input Delay:** < 100ms
- **Cumulative Layout Shift:** < 0.1

### Bundle Analysis
```bash
npm run analyze
# Prüfen Sie: framer-motion bundle size
```

## 🎨 Design Testing

### VSS Brand Colors
```css
/* In Browser DevTools Console */
getComputedStyle(document.documentElement).getPropertyValue('--vss-blue')
// Erwartet: #0284c7

getComputedStyle(document.documentElement).getPropertyValue('--vss-green')
// Erwartet: #10b981

getComputedStyle(document.documentElement).getPropertyValue('--vss-orange')
// Erwartet: #f59e0b
```

### Typography Test
```css
/* Schriftarten laden */
document.fonts.ready.then(() => {
    console.log('Fonts loaded:', document.fonts.size);
});
```

## 📱 Mobile-Specific Tests

### Touch Interactions
1. **Tap Test:** Alle Buttons reagieren auf Touch
2. **Scroll Test:** Smooth scrolling ohne Bounce Issues
3. **Zoom Test:** Zoom bis 320px Breite funktioniert

### Performance auf Mobile
```javascript
// Performance Monitor
const perfData = performance.getEntriesByType('navigation')[0];
console.log('Mobile Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
```

## 🔧 Troubleshooting

### Reset Development Environment
```bash
# Kompletter Reset
rm -rf node_modules .next package-lock.json
npm install
npm run build
npm run dev
```

### Fresh Docker Environment
```bash
# Clean Docker
docker-compose down -v
docker system prune -af
docker-compose up --build
```

### Git Reset (falls nötig)
```bash
git stash
git reset --hard HEAD
npm install
npm run dev
```

## ✅ Testing Checklist

### Basis-Funktionalität
- [ ] Website lädt ohne Fehler
- [ ] Navigation funktioniert
- [ ] Alle Links sind klickbar
- [ ] Bilder laden korrekt
- [ ] Responsive Design funktioniert

### Container-Scroll-Animation
- [ ] Animation startet beim Scrollen
- [ ] Rotation funktioniert (20°→0°)
- [ ] Skalierung funktioniert
- [ ] Smooth 60fps Performance
- [ ] VSS Brand Colors sichtbar

### Performance
- [ ] Lighthouse Score > 90
- [ ] First Load JS < 200KB
- [ ] Mobile Performance > 90
- [ ] Accessibility Score > 95

### Cross-Browser
- [ ] Chrome funktioniert
- [ ] Firefox funktioniert
- [ ] Safari funktioniert
- [ ] Edge funktioniert

---

**🎯 Testing-Ziel:** Alle Checkboxes sollten grün sein für Production-Ready Status!