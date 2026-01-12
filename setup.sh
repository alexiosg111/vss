#!/bin/bash

# VSS Website Setup Script v0.12.0 - Fixed Hitbox & Shader
echo "🚀 VSS Website Setup v0.12.0 wird gestartet..."
echo "🔄 Clean Setup ohne Docker (v0.12.0)"

# Einfache Browser-Detection
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
else
    echo "⚠️ Kein Browser verfügbar"
fi

# Prüfe Node.js
echo "📦 Prüfe Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert. Bitte installieren Sie Node.js 18+ zuerst."
    echo "Download: https://nodejs.org/"
    exit 1
fi

node_version=$(node --version | cut -d'v' -f2)
echo "✅ Node.js gefunden: v$node_version"

# Prüfe npm
echo "📦 Prüfe npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm ist nicht installiert."
    exit 1
fi

npm_version=$(npm --version)
echo "✅ npm gefunden: v$npm_version"

# Installiere Dependencies
echo "📦 Installiere Dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Fehler bei der Installation der Dependencies."
    echo "🔧 Versuche Troubleshooting..."
    echo "📝 Lösche node_modules und package-lock.json..."
    rm -rf node_modules package-lock.json
    echo "📦 Installiere erneut..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Fehler bei der Installation persistiert."
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

# Build-Test
echo "🔨 Teste Build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build-Test fehlgeschlagen."
    exit 1
fi

echo "✅ Build erfolgreich."

# Starte Development Server
echo "🎉 Setup v0.12.0 abgeschlossen!"
echo ""
echo "🚀 Starte Development Server..."
echo ""

# Starte Next.js Development Server
npm run dev &
SERVER_PID=$!

# Warte bis Server läuft
echo "⏳ Warte auf Server-Start..."
sleep 5

# Öffne Browser (nur wenn verfügbar)
if [ "$browser_found" = true ]; then
    echo "🌐 Öffne Website im Browser..."
    if command -v open &> /dev/null; then
        open "http://localhost:3000" &> /dev/null &
    elif command -v xdg-open &> /dev/null; then
        xdg-open "http://localhost:3000" &> /dev/null &
    elif command -v start &> /dev/null; then
        start "http://localhost:3000" &> /dev/null &
    else
        echo "📱 Website verfügbar unter: http://localhost:3000"
    fi
else
    echo "📱 Website verfügbar unter: http://localhost:3000"
fi

echo "✅ Setup abgeschlossen!"
echo "🌐 VSS Website läuft unter: http://localhost:3000"
echo "📊 Setup-Monitor verfügbar unter: http://localhost:3000/setup-monitor"
echo ""
echo "🎯 Features zum Testen (v0.12.0):"
echo "   • SplitShowcase Komponente mit präziser diagonaler Hitbox"
131: echo "   • WebGL Shader mit Mouse Glow & Vibrant Colors"
132: echo "   • MOBILFUNK & FAHRSTUHL Bereiche mit direkter Navigation"
133: echo "   • Smooth CSS Transitions (700ms cubic-bezier)"
134: echo "   • Clean Setup ohne Docker"
135: echo ""
136: echo "🔧 v0.12.0 Fixes & Upgrades:"
137: echo "   • Mathematisch korrekte Hitbox-Trennung"
138: echo "   • Korrigierte Inverse Interaktions-Logik"
139: echo "   • Interaktive Click-Bereiche im Hero"
140: echo "   • Optimierte Performance"
141: echo ""
142: echo "⚡ Drücken Sie Ctrl+C zum Beenden"
143: 
144: # Warte auf Ctrl+C
145: trap 'echo ""; echo "🛑 Stoppe Development Server..."; kill $SERVER_PID; exit' INT
146: wait $SERVER_PID
