@echo off
REM VSS Website Setup Script v1.0.0 - Simplified Fast Setup
echo ========================================
echo   VSS Website Setup v1.0.0
echo ========================================
echo.

REM Prüfe Node.js
echo [1/5] Pruefe Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo [FEHLER] Node.js ist nicht installiert!
    echo.
    echo Bitte installieren Sie Node.js 18+ von:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)
for /f "delims=" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION% gefunden
echo.

REM Prüfe npm
echo [2/5] Pruefe npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo [FEHLER] npm ist nicht installiert!
    pause
    exit /b 1
)
for /f "delims=" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] npm v%NPM_VERSION% gefunden
echo.

REM Installiere Dependencies
echo [3/5] Installiere Dependencies...
echo Dies kann einige Minuten dauern...
echo.
npm install
if errorlevel 1 (
    echo.
    echo [FEHLER] Installation fehlgeschlagen!
    echo.
    echo Moegliche Loesungen:
    echo 1. Loeschen Sie 'node_modules' und 'package-lock.json'
    echo 2. Fuehren Sie aus: npm cache clean --force
    echo 3. Versuchen Sie: npm install --legacy-peer-deps
    echo.
    pause
    exit /b 1
)
echo [OK] Dependencies installiert
echo.

REM Erstelle .env.local falls nicht vorhanden
echo [4/5] Konfiguriere Umgebungsvariablen...
if not exist .env.local (
    (
        echo # VSS Website Environment Variables
        echo NEXT_PUBLIC_SITE_URL=http://localhost:3000
        echo NEXT_PUBLIC_COMPANY_NAME=Vertical Service Solutions
        echo NODE_ENV=development
    ) > .env.local
    echo [OK] .env.local erstellt
) else (
    echo [OK] .env.local bereits vorhanden
)
echo.

REM Erstelle Verzeichnisse
echo [5/5] Erstelle Verzeichnisse...
if not exist public\images mkdir public\images
if not exist public\logos mkdir public\logos
if not exist public\fotos\gallery mkdir public\fotos\gallery
echo [OK] Verzeichnisse erstellt
echo.

REM Setup abgeschlossen
echo ========================================
echo   Setup erfolgreich abgeschlossen!
echo ========================================
echo.
echo Starte Development Server...
echo.
echo Die Website wird verfuegbar sein unter:
echo   http://localhost:3000
echo.
echo Druecken Sie Ctrl+C zum Stoppen
echo.

REM Starte Development Server
npm run dev
