#!/bin/bash

# VSS Website Live Preview Script
echo "🚀 VSS Website Live Preview wird gestartet..."

# Prüfe ob bereits ein Server läuft
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Development Server läuft bereits auf Port 3000"
    
    echo "🌐 Öffnen Sie:"
    echo "   🏠 Website:    http://localhost:3000"
    echo "   🎯 Preview:    http://localhost:3000/preview"
    echo ""
    echo "🧪 Testing Features:"
    echo "   • Desktop: http://localhost:3000"
    echo "   • Mobile: F12 → Device Toolbar"
    echo "   • Preview: http://localhost:3000/preview"
    echo ""
    
    # Öffne Browser
    if command -v open &> /dev/null; then
        open "http://localhost:3000/preview"
    elif command -v xdg-open &> /dev/null; then
        xdg-open "http://localhost:3000/preview"
    fi
    
    echo "⏹️  Drücken Sie Ctrl+C zum Stoppen"
    echo ""
    
    # Halte den Prozess am Leben
    trap "echo ''; echo '🛑 Preview beendet.'; exit 0" INT
    wait
else
    echo "🔨 Starte Development Server..."
    
    # Starte Server im Hintergrund
    npm run dev &
    SERVER_PID=$!
    
    echo "⏳ Warte auf Server-Bereitschaft..."
    
    # Warte bis Server bereit ist (max 30 Sekunden)
    for i in {1..30}; do
        if curl -s http://localhost:3000 >/dev/null 2>&1; then
            echo "✅ Server ist bereit!"
            break
        fi
        sleep 1
        echo "⏳ Warte... ($i/30)"
    done
    
    echo ""
    echo "🎉 VSS Website ist live!"
    echo ""
    echo "📱 URLs:"
    echo "   🏠 Hauptseite: http://localhost:3000"
    echo "   🎯 Preview:     http://localhost:3000/preview"
    echo ""
    echo "🧪 Testing Features:"
    echo "   • SplitShowcase Hero testen"
    echo "   • WebGL Shader Performance (60fps)"
    echo "   • Responsive Design (F12 → Device Toolbar)"
    echo "   • VSS Brand Colors prüfen"
    echo "   • Performance messen (Lighthouse)"
    echo ""
    echo "⏹️  Drücken Sie Ctrl+C zum Stoppen"
    echo ""
    
    # Warte auf Benutzer-Input
    trap "echo ''; echo '🛑 Stoppe Server...'; kill $SERVER_PID 2>/dev/null; exit 0" INT
    wait $SERVER_PID
fi