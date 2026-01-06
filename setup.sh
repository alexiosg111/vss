#!/bin/bash

# VSS Website Setup Script mit Setup-Monitor
echo "🚀 VSS Website Setup wird gestartet..."

# Prüfe ob HTML-Monitor existiert
if [ ! -f setup-monitor.html ]; then
    echo "❌ setup-monitor.html nicht gefunden!"
    echo "Stelle sicher, dass alle Dateien korrekt heruntergeladen wurden."
    exit 1
fi

echo "✅ Setup-Monitor gefunden: setup-monitor.html"

# Öffne Browser mit Monitor
echo "📊 Öffne Setup-Monitor im Browser..."
if command -v open &> /dev/null; then
    open "file://$(pwd)/setup-monitor.html"
elif command -v xdg-open &> /dev/null; then
    xdg-open "file://$(pwd)/setup-monitor.html"
elif command -v start &> /dev/null; then
    start "file://$(pwd)/setup-monitor.html"
fi

# Warte 2 Sekunden damit der Browser öffnet
sleep 2

echo "🔧 Starte Setup-Prozess..."
echo ""

# Prüfe Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert. Bitte installieren Sie Node.js 18+ zuerst."
    echo "Download: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js gefunden: $(node --version)"

# Prüfe npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm ist nicht installiert."
    exit 1
fi

echo "✅ npm gefunden: $(npm --version)"

# Installiere Dependencies
echo "📦 Installiere Dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Fehler bei der Installation der Dependencies."
    exit 1
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
    echo "❌ Build-Test fehlgeschlagen. Bitte prüfen Sie die Fehler."
    exit 1
fi

echo "✅ Build erfolgreich."

# Starte Development Server
echo "🎉 Setup abgeschlossen!"
echo ""
echo "🚀 Starte Development Server..."
echo ""
echo "📱 Die Website wird verfügbar sein unter:"
echo "   http://localhost:3000"
echo ""
echo "🎯 Features zum Testen:"
echo "   • Container-Scroll-Animation (Framer Motion)"
echo "   • Responsive Design (Mobile/Tablet/Desktop)"
echo "   • VSS Brand Colors (Blue/Green/Orange)"
echo "   • Industrial High-Tech Design"
echo "   • SEO-optimierte Meta-Tags"
echo ""
echo "⏹️  Drücken Sie Ctrl+C zum Stoppen des Servers"
echo ""

npm run dev