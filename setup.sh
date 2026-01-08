#!/bin/bash

# VSS Website Setup Script v0.10.0 mit Enhanced Setup-Monitor
echo "🚀 VSS Website Setup v0.10.0 wird gestartet..."

# Erweiterte Browser-Detection für Container-Umgebungen
echo "🔍 Prüfe Browser-Verfügbarkeit..."
browser_found=false

if command -v open &> /dev/null; then
    echo "✅ macOS Browser (open) verfügbar"
    browser_found=true
elif command -v xdg-open &> /dev/null; then
    echo "✅ Linux Browser (xdg-open) verfügbar"
    browser_found=true
elif command -v start &> /dev/null; then
    echo "✅ Windows Browser (start) verfügbar"
    browser_found=true
elif [ -n "$DISPLAY" ]; then
    echo "✅ DISPLAY Variable gesetzt - Linux Umgebung"
    browser_found=true
else
    echo "⚠️ Kein Browser verfügbar (Container/Headless Umgebung)"
fi

# Erweiterte Umgebungs-Checks
echo "🔍 Prüfe Umgebungs-Variablen..."
if [ -n "$VSS_SILENT_MODE" ]; then
    echo "🔇 Silent Mode aktiviert"
    silent_mode=true
else
    silent_mode=false
fi

if [ -n "$VSS_NO_BROWSER" ]; then
    echo "🚫 Browser-Öffnung deaktiviert"
    no_browser=true
else
    no_browser=false
fi

# Prüfe Node.js mit besserer Version
echo "📦 Prüfe Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert. Bitte installieren Sie Node.js 18+ zuerst."
    echo "Download: https://nodejs.org/"
    echo "📱 Aktuell installierte Version: $(node --version 2>/dev/null || echo 'Keine')"
    exit 1
fi

node_version=$(node --version | cut -d'v' -f2)
required_version="18.0.0"

if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "❌ Node.js Version $node_version ist zu alt. Benötigt wird Version 18+."
    echo "Bitte aktualisieren Sie Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js gefunden: v$node_version (kompatibel)"

# Prüfe npm mit besserer Version
echo "📦 Prüfe npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm ist nicht installiert."
    exit 1
fi

npm_version=$(npm --version)
echo "✅ npm gefunden: v$npm_version"

# Installiere Dependencies mit Progress
echo "📦 Installiere Dependencies..."
if [ "$silent_mode" = true ]; then
    npm install --silent
else
    npm install
fi

if [ $? -ne 0 ]; then
    echo "❌ Fehler bei der Installation der Dependencies."
    echo "🔧 Versuche Troubleshooting..."
    echo "📝 Lösche node_modules und package-lock.json..."
    rm -rf node_modules package-lock.json
    echo "📦 Installiere erneut..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Fehler bei der Installation persistiert. Bitte prüfen Sie:"
        echo "   - Internetverbindung"
        echo "   - npm Registry: npm config get registry"
        echo "   - Node.js Version: https://nodejs.org/"
        exit 1
    fi
fi

echo "✅ Dependencies installiert."

# Prüfe .env.local
if [ ! -f .env.local ]; then
    echo "📝 Erstelle .env.local für lokale Entwicklung..."
    cat > .env.local << EOL
# VSS Website Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=Vertical Service Solutions
NEXT_PUBLIC_COMPANY_PHONE=+49 (0) 123 456 789
NEXT_PUBLIC_COMPANY_EMAIL=info@vertical-service-solutions.com
NODE_ENV=development
EOL
    echo "✅ .env.local erstellt."
else
    echo "✅ .env.local existiert bereits."
fi

# Erstelle notwendige Verzeichnisse
echo "📁 Erstelle Verzeichnisse..."
mkdir -p public/images
mkdir -p public/logos

# Build-Test mit Enhanced Error Handling
echo "🔨 Teste Build..."
if [ "$silent_mode" = true ]; then
    npm run build --silent
else
    npm run build
fi

if [ $? -ne 0 ]; then
    echo "❌ Build-Test fehlgeschlagen. Bitte prüfen Sie die Fehler."
    echo "🔧 Troubleshooting-Tipps:"
    echo "   - Prüfen Sie TypeScript-Errors: npm run lint"
    echo "   - Prüfen Sie Import-Errors in Komponenten"
    echo "   - Stellen Sie sicher, dass alle Dependencies kompatibel sind"
    exit 1
fi

echo "✅ Build erfolgreich."

# Starte Development Server
echo "🎉 Setup v0.10.0 abgeschlossen!"
echo ""
echo "🚀 Starte Development Server..."
echo ""

# Starte Next.js Development Server
npm run dev &
SERVER_PID=$!

# Warte bis Server läuft
echo "⏳ Warte auf Server-Start..."
sleep 5

# Öffne Browser mit Setup-Monitor (nur wenn Browser verfügbar)
if [ "$browser_found" = true ] && [ "$no_browser" = false ]; then
    echo "📊 Öffne Setup-Monitor im Browser..."
    if command -v open &> /dev/null; then
        open "http://localhost:3000/setup-monitor" &> /dev/null &
    elif command -v xdg-open &> /dev/null; then
        xdg-open "http://localhost:3000/setup-monitor" &> /dev/null &
    elif command -v start &> /dev/null; then
        start "http://localhost:3000/setup-monitor" &> /dev/null &
    else
        echo "📱 Setup-Monitor verfügbar unter: http://localhost:3000/setup-monitor"
    fi
else
    echo "📱 Setup-Monitor verfügbar unter: http://localhost:3000/setup-monitor"
fi

echo "✅ Setup abgeschlossen!"
echo "🌐 VSS Website läuft unter: http://localhost:3000"
echo "📊 Setup-Monitor verfügbar unter: http://localhost:3000/setup-monitor"
echo "🎯 SplitShowcase Komponente mit Three.js Shader: http://localhost:3000"
echo ""
echo "📱 Die Website wird verfügbar sein unter:"
echo "   http://localhost:3000"
echo ""
echo "🎯 Features zum Testen (v0.10.0):"
echo "   • SplitShowcase Komponente mit diagonalem Split (/)"
echo "   • Three.js Shader Hintergrund mit originalen RGB-Farben"
echo "   • Inverse Maus-Interaktionslogik (Shader läuft wo Maus NICHT ist)"
echo "   • MOBILFUNK (unten links) und FAHRSTUHL (oben rechts) Bereiche"
echo "   • Smooth CSS Clip-Path Animationen"
echo "   • 60fps Performance mit Optimized Three.js Implementation"
echo "   • Responsive Design für alle Gerätegrößen"
echo "   • Professional Typography und Layout"
echo ""
echo "🔧 v0.10.0 Setup Verbesserungen:"
echo "   • Integrierte Setup-Monitor Route in Next.js"
echo "   • Enhanced Setup-Monitor mit Live-Logs"
echo "   • Verbesserte Browser-Detection"
echo "   • Bessere Error Handling & Troubleshooting"
echo "   • Silent Mode Support (VSS_SILENT_MODE)"
echo "   • Container-Umgebung Support"
echo ""
echo "⚡ Drücken Sie Ctrl+C zum Beenden"

# Warte auf Ctrl+C
trap 'echo ""; echo "🛑 Stoppe Development Server..."; kill $SERVER_PID; exit' INT
wait $SERVER_PID