@echo off
echo 🚀 VSS Website Setup v0.11.0 wird gestartet...

echo 📊 Prüfe Setup-Monitor...

REM Prüfe ob HTML-Monitor existiert
if not exist setup-monitor.html (
    echo ❌ setup-monitor.html nicht gefunden!
    echo Stelle sicher, dass alle Dateien korrekt heruntergeladen wurden.
    pause
    exit /b 1
)

echo ✅ Setup-Monitor gefunden: setup-monitor.html

REM Öffne Browser mit Monitor
echo 📊 Öffne Setup-Monitor im Browser...
start "file://%CD%\setup-monitor.html"

REM Warte 2 Sekunden damit der Browser öffnet
timeout /t 2 /nobreak >nul

echo 🔧 Starte Setup-Prozess...
echo.

REM Prüfe Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js ist nicht installiert. Bitte installieren Sie Node.js 18+ zuerst.
    echo Download: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js gefunden
node --version

REM Prüfe npm
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm ist nicht installiert.
    pause
    exit /b 1
)

echo ✅ npm gefunden
npm --version

REM Installiere Dependencies
echo 📦 Installiere Dependencies...
npm install

if errorlevel 1 (
    echo ❌ Fehler bei der Installation der Dependencies.
    pause
    exit /b 1
)

echo ✅ Dependencies installiert.

REM Prüfe .env.local
if not exist .env.local (
    echo 📝 Erstelle .env.local für lokale Entwicklung...
    (
        echo # VSS Website Environment Variables
        echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
        echo NEXT_PUBLIC_COMPANY_NAME=Vertical Service Solutions
        echo NEXT_PUBLIC_COMPANY_PHONE=+49 (0) 123 456 789
        echo NEXT_PUBLIC_COMPANY_EMAIL=info@vertical-service-solutions.com
        echo NODE_ENV=development
    ) > .env.local
    echo ✅ .env.local erstellt.
) else (
    echo ✅ .env.local existiert bereits.
)

REM Erstelle notwendige Verzeichnisse
echo 📁 Erstelle Verzeichnisse...
if not exist public\images mkdir public\images
if not exist public\logos mkdir public\logos

REM Build-Test
echo 🔨 Teste Build...
npm run build

if errorlevel 1 (
    echo ❌ Build-Test fehlgeschlagen. Bitte prüfen Sie die Fehler.
    pause
    exit /b 1
)

echo ✅ Build erfolgreich.

REM Starte Development Server
echo 🎉 Setup abgeschlossen!
echo.
echo 🚀 Starte Development Server...
echo.
echo 📱 Die Website wird verfügbar sein unter:
echo    http://localhost:3000
echo.
echo 🎯 Features zum Testen (v0.11.0):
echo    • SplitShowcase Diagonal Split (Homepage)
echo    • Three.js Shader Background (Original RGB Farben)
echo    • Inverse Maus-Interaktionslogik
echo    • Preview: /preview und Setup-Monitor: /setup-monitor
echo    • Responsive Design (Mobile/Tablet/Desktop)
echo.
echo ⏹️  Drücken Sie Ctrl+C zum Stoppen des Servers
echo.

npm run dev