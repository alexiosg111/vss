#!/bin/bash

# VSS Website Live Preview Script mit Monitor
echo "🚀 VSS Website Live Preview wird gestartet..."

# Prüfe ob bereits ein Server läuft
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Development Server läuft bereits auf Port 3000"
    
    # Öffne Monitor im Browser
    if [ ! -f setup-monitor.html ]; then
        echo "📊 Erstelle Setup-Monitor..."
        curl -s https://localhost:3000 >/dev/null 2>&1
    fi
    
    echo "🌐 Öffnen Sie:"
    echo "   🏠 Website:    http://localhost:3000"
    echo "   🎯 Preview:    http://localhost:3000/preview"
    echo "   📊 Monitor:    file://$(pwd)/setup-monitor.html"
    echo ""
    echo "🧪 Testing Features:"
    echo "   • Desktop: http://localhost:3000"
    echo "   • Mobile: F12 → Device Toolbar"
    echo "   • Preview: http://localhost:3000/preview"
    echo "   • Monitor: file://$(pwd)/setup-monitor.html"
    echo ""
    
    # Öffne Browser
    if command -v open &> /dev/null; then
        open "http://localhost:3000/preview"
        open "file://$(pwd)/setup-monitor.html"
    elif command -v xdg-open &> /dev/null; then
        xdg-open "http://localhost:3000/preview"
        xdg-open "file://$(pwd)/setup-monitor.html"
    fi
    
    echo "⏹️  Drücken Sie Ctrl+C zum Stoppen"
    echo ""
    
    # Halte den Prozess am Leben
    trap "echo ''; echo '🛑 Preview beendet.'; exit 0" INT
    wait
else
    echo "🔨 Starte Development Server..."
    
    # Erstelle Monitor wenn nicht vorhanden
    if [ ! -f setup-monitor.html ]; then
        echo "📊 Erstelle Setup-Monitor..."
        
        # Erstelle einfache Monitor HTML
        cat > setup-monitor.html << 'EOF'
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VSS Website - Server Status</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1e3a8a 0%, #059669 50%, #ea580c 100%);
            color: white;
            margin: 0;
            padding: 2rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 20px;
            padding: 2rem;
            max-width: 600px;
            text-align: center;
        }
        .logo {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #3b82f6, #10b981, #f97316);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .status {
            font-size: 1.2rem;
            margin: 1rem 0;
            padding: 1rem;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
        }
        .status.online {
            background: rgba(16, 185, 129, 0.3);
            animation: pulse 2s infinite;
        }
        .urls {
            margin: 2rem 0;
            font-size: 1.1rem;
        }
        .url {
            display: block;
            margin: 0.5rem 0;
            padding: 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            text-decoration: none;
            color: white;
        }
        .url:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">VSS Website</div>
        <h1>🚀 Live Preview</h1>
        
        <div class="status" id="status">
            ⏳ Server wird gestartet...
        </div>
        
        <div class="urls" id="urls" style="display: none;">
            <h2>🎉 Website ist online!</h2>
            <a href="http://localhost:3000" class="url" target="_blank">
                🏠 Hauptseite öffnen
            </a>
            <a href="http://localhost:3000/preview" class="url" target="_blank">
                🎯 Preview-Seite öffnen
            </a>
            <div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                <p>🧪 Testen Sie:</p>
                <p>• Container-Scroll-Animation</p>
                <p>• Responsive Design (F12 → Device Toolbar)</p>
                <p>• VSS Brand Colors</p>
                <p>• Performance (Lighthouse Audit)</p>
            </div>
        </div>
        
        <div style="margin-top: 2rem; font-size: 0.8rem; opacity: 0.6;">
            Status wird automatisch aktualisiert...
        </div>
    </div>

    <script>
        function updateStatus() {
            fetch('http://localhost:3000')
                .then(() => {
                    const status = document.getElementById('status');
                    const urls = document.getElementById('urls');
                    
                    status.textContent = '✅ Server ist online und bereit!';
                    status.className = 'status online';
                    urls.style.display = 'block';
                    
                    // Öffne Websites nach 1 Sekunde
                    setTimeout(() => {
                        window.open('http://localhost:3000', '_blank');
                        window.open('http://localhost:3000/preview', '_blank');
                    }, 1000);
                })
                .catch(() => {
                    setTimeout(updateStatus, 3000);
                });
        }
        
        // Starte Status-Überwachung nach 3 Sekunden
        setTimeout(updateStatus, 3000);
        
        // Initial Status
        document.getElementById('status').innerHTML = '🚀 Server wird gestartet...<br><small>Warte auf Bereitschaft...</small>';
    </script>
</body>
</html>
EOF
    fi
    
    # Öffne Monitor im Browser
    if command -v open &> /dev/null; then
        echo "📊 Öffne Server-Monitor..."
        open "file://$(pwd)/setup-monitor.html"
    elif command -v xdg-open &> /dev/null; then
        echo "📊 Öffne Server-Monitor..."
        xdg-open "file://$(pwd)/setup-monitor.html"
    fi
    
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
    echo "   📊 Monitor:     file://$(pwd)/setup-monitor.html"
    echo ""
    echo "🧪 Testing Features:"
    echo "   • Container-Scroll-Animation testen"
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