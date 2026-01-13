# Docker Migration - v0.11.0+

## 📌 Wichtige Info

**Docker wurde in v0.11.0 aus dem Development-Setup entfernt.**

## ❓ Warum wurde Docker entfernt?

### Probleme mit Docker (v0.9-0.10):
- ❌ Setup dauerte 60s+ (vs. 30s ohne Docker)
- ❌ Container-Instabilität in lokaler Entwicklung
- ❌ Unnötige Komplexität für lokales Development
- ❌ Schwieriger zu debuggen

### Vorteile npm-only Setup (v0.11.0+):
- ✅ Schneller: ~35s Setup-Zeit
- ✅ Einfacher: Direkter npm-Workflow
- ✅ Zuverlässiger: Keine Container-Probleme
- ✅ Bewährt: Zurück zu v0.8 Setup-Logik

## 🚀 Neuer Setup-Prozess

### Altes Setup (v0.9-0.10 mit Docker):
```bash
docker-compose up vss-website
# → 60s+ bis Container läuft
```

### Neues Setup (v0.11.0+ ohne Docker):
```bash
./setup.sh
# oder
npm install
npm run dev
# → ~35s bis Server läuft
```

## 🔄 Migration von Docker

Wenn du vorher Docker genutzt hast:

### 1. Stoppe alle Container:
```bash
docker-compose down
```

### 2. Lösche Docker-Images (optional):
```bash
docker rmi vss-website
```

### 3. Nutze neues Setup:
```bash
./setup.sh
```

## 📋 Was wurde entfernt?

### Dateien gelöscht (v0.22.0):
- ❌ `Dockerfile`
- ❌ `Dockerfile.dev`
- ❌ `docker-compose.yml`
- ❌ `nginx.conf`

### package.json Scripts geändert:
```json
// Alte Docker-Scripts (deaktiviert in v0.11.0):
"docker:dev": "echo 'Docker removed in v0.11 - use npm run dev instead'"
"docker:prod": "echo 'Docker removed in v0.11 - use npm run build && npm run start'"
"docker:down": "echo 'Docker removed in v0.11'"
```

## ✅ Was bleibt erhalten?

### Setup-Scripts:
- ✅ `setup.sh` - Automatisches Setup (empfohlen)
- ✅ `setup-v0.11.sh` - Backup der v0.11 Setup-Logik
- ✅ `setup.bat` - Windows Setup
- ✅ `preview.sh` - Preview-Seite

### npm Scripts:
```bash
npm run dev          # Development Server
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint
npm run test         # Build Test
```

## 🎯 Empfohlener Workflow

### Für lokale Entwicklung:
```bash
# 1. Projekt klonen
git clone https://github.com/alexiosg111/vss.git
cd vss

# 2. Setup ausführen
./setup.sh

# 3. Fertig! Browser öffnet automatisch
```

### Für CI/CD:
```bash
npm ci
npm run build
npm run start
```

### Für Production Deployment:
- **Vercel:** Automatisches Deployment (empfohlen)
- **Andere Hosts:** `npm run build && npm run start`

## 🐳 Brauche ich Docker noch?

### Nein, für Development nicht mehr!

Docker kann aber weiterhin sinnvoll sein für:
- ✅ **Production Deployment:** Container für Server-Deployment
- ✅ **CI/CD Pipelines:** Reproduzierbare Build-Umgebungen
- ✅ **Multi-Service Setups:** Wenn du Backend-Services brauchst

### Für reine Next.js Frontend-Entwicklung:
- ❌ **Nicht nötig** - npm-only Setup ist einfacher und schneller

## 📚 Weitere Infos

### Setup-Anleitung:
Siehe **SETUP_README.md** für detaillierte Setup-Anweisungen.

### Troubleshooting:
Siehe **SETUP_README.md** → Troubleshooting-Sektion.

### Versionshistorie:
- **v0.8:** npm-only Setup (funktional)
- **v0.9-0.10:** Docker-Integration (problematisch)
- **v0.11.0+:** Zurück zu npm-only (stabil)
- **v0.22.0:** Docker-Dateien entfernt

## 🙋 FAQ

### Q: Kann ich Docker trotzdem nutzen?
**A:** Ja, aber es wird nicht mehr offiziell supported. Du müsstest eigene Dockerfiles erstellen.

### Q: Wird Docker jemals zurückkommen?
**A:** Nur wenn es echte Vorteile bringt. Aktuell: npm-only ist besser für Development.

### Q: Was ist mit Production Deployment?
**A:** Vercel (empfohlen) oder eigener Server mit `npm run build && npm run start`.

### Q: Ich habe Probleme mit npm-Setup!
**A:** Siehe **SETUP_README.md** → Troubleshooting oder öffne ein GitHub Issue.

### Q: Warum sind alte Docker-Scripts noch in package.json?
**A:** Sie zeigen eine Info-Message statt zu funktionieren (für Backward-Compatibility).

---

**Zusammenfassung:** Docker ist seit v0.11.0 Geschichte. Nutze `./setup.sh` für einfaches, schnelles Setup!
