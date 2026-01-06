@echo off
echo 🚀 VSS Website Setup wird gestartet...

echo 📊 Öffne Setup-Monitor im Browser...

REM Erstelle Setup-Monitor HTML
(
echo ^<!DOCTYPE html^>
echo ^<html lang="de"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>VSS Website Setup Monitor^</title^>
echo     ^<style^>
echo         * {
echo             margin: 0;
echo             padding: 0;
echo             box-sizing: border-box;
echo         }
echo         
echo         body {
echo             font-family: 'Arial', sans-serif;
echo             background: linear-gradient(135deg, #1e3a8a 0%%, #059669 50%%, #ea580c 100%%);
echo             color: white;
echo             min-height: 100vh;
echo             display: flex;
echo             align-items: center;
echo             justify-content: center;
echo         }
echo         
echo         .container {
echo             background: rgba(0, 0, 0, 0.8);
echo             border-radius: 20px;
echo             padding: 2rem;
echo             max-width: 800px;
echo             width: 90%%;
echo             box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
echo         }
echo         
echo         .header {
echo             text-align: center;
echo             margin-bottom: 2rem;
echo         }
echo         
echo         .logo {
echo             font-size: 2.5rem;
echo             font-weight: bold;
echo             margin-bottom: 0.5rem;
echo             background: linear-gradient(45deg, #3b82f6, #10b981, #f97316);
echo             -webkit-background-clip: text;
echo             -webkit-text-fill-color: transparent;
echo             background-clip: text;
echo         }
echo         
echo         .status-card {
echo             background: rgba(255, 255, 255, 0.1);
echo             border-radius: 15px;
echo             padding: 1.5rem;
echo             margin-bottom: 1rem;
echo             border: 2px solid rgba(255, 255, 255, 0.2);
echo         }
echo         
echo         .status-item {
echo             display: flex;
echo             align-items: center;
echo             margin-bottom: 1rem;
echo             font-size: 1.1rem;
echo         }
echo         
echo         .status-icon {
echo             width: 24px;
echo             height: 24px;
echo             margin-right: 1rem;
echo             border-radius: 50%%;
echo             display: flex;
echo             align-items: center;
echo             justify-content: center;
echo             font-weight: bold;
echo         }
echo         
echo         .status-pending {
echo             background: #fbbf24;
echo             color: #000;
echo         }
echo         
echo         .status-success {
echo             background: #10b981;
echo             color: white;
echo         }
echo         
echo         .status-error {
echo             background: #ef4444;
echo             color: white;
echo         }
echo         
echo         .url-card {
echo             background: linear-gradient(135deg, #3b82f6, #1d4ed8);
echo             border-radius: 15px;
echo             padding: 1.5rem;
echo             text-align: center;
echo             margin-top: 1.5rem;
echo         }
echo         
echo         .url-card.ready {
echo             background: linear-gradient(135deg, #10b981, #059669);
echo             animation: pulse 2s infinite;
echo         }
echo         
echo         .url-link {
echo             color: white;
echo             text-decoration: none;
echo             font-size: 1.3rem;
echo             font-weight: bold;
echo             display: block;
echo             margin-top: 0.5rem;
echo         }
echo         
echo         .url-link:hover {
echo             text-decoration: underline;
echo         }
echo         
echo         .logs {
echo             background: rgba(0, 0, 0, 0.6);
echo             border-radius: 10px;
echo             padding: 1rem;
echo             margin-top: 1rem;
echo             font-family: 'Courier New', monospace;
echo             font-size: 0.9rem;
echo             max-height: 200px;
echo             overflow-y: auto;
echo         }
echo         
echo         .log-entry {
echo             margin-bottom: 0.5rem;
echo             padding: 0.25rem 0;
echo             border-left: 3px solid transparent;
echo             padding-left: 0.5rem;
echo         }
echo         
echo         .log-info {
echo             border-left-color: #3b82f6;
echo         }
echo         
echo         .log-success {
echo             border-left-color: #10b981;
echo         }
echo         
echo         .log-error {
echo             border-left-color: #ef4444;
echo         }
echo         
echo         @keyframes pulse {
echo             0%% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
echo             70%% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
echo             100%% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
echo         }
echo         
echo         .progress-bar {
echo             width: 100%%;
echo             height: 8px;
echo             background: rgba(255, 255, 255, 0.2);
echo             border-radius: 4px;
echo             overflow: hidden;
echo             margin: 1rem 0;
echo         }
echo         
echo         .progress-fill {
echo             height: 100%%;
echo             background: linear-gradient(90deg, #3b82f6, #10b981);
echo             width: 0%%;
echo             transition: width 0.3s ease;
echo         }
echo     ^</style^>
echo ^</head^>
echo ^<body^>
echo     ^<div class="container"^>
echo         ^<div class="header"^>
echo             ^<div class="logo"^>VSS Website^</div^>
echo             ^<h1^>🚀 Setup Status Monitor^</h1^>
echo             ^<p^>Live Status der VSS Website Installation^</p^>
echo         ^</div^>
echo         
echo         ^<div class="status-card"^>
echo             ^<div class="status-item"^>
echo                 ^<div class="status-icon" id="node-icon"^>⏳^</div^>
echo                 ^<span id="node-status"^>Prüfe Node.js...^</span^>
echo             ^</div^>
echo             ^<div class="status-item"^>
echo                 ^<div class="status-icon" id="npm-icon"^>⏳^</div^>
echo                 ^<span id="npm-status"^>Prüfe npm...^</span^>
echo             ^</div^>
echo             ^<div class="status-item"^>
echo                 ^<div class="status-icon" id="deps-icon"^>⏳^</div^>
echo                 ^<span id="deps-status"^>Installiere Dependencies...^</span^>
echo             ^</div^>
echo             ^<div class="status-item"^>
echo                 ^<div class="status-icon" id="build-icon"^>⏳^</div^>
echo                 ^<span id="build-status"^>Teste Build...^</span^>
echo             ^</div^>
echo             ^<div class="status-item"^>
echo                 ^<div class="status-icon" id="server-icon"^>⏳^</div^>
echo                 ^<span id="server-status"^>Starte Development Server...^</span^>
echo             ^</div^>
echo         ^</div^>
echo         
echo         ^<div class="progress-bar"^>
echo             ^<div class="progress-fill" id="progress-fill"^>^</div^>
echo         ^</div^>
echo         
echo         ^<div class="url-card" id="url-card"^>
echo             ^<h2 id="url-title"^>Server wird gestartet...^</h2^>
echo             ^<a href="#" class="url-link" id="url-link" style="display: none;"^>Website öffnen^</a^>
echo             ^<div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;"^>
echo                 ^<div^>🎯 Preview: ^<span id="preview-url"^>http://localhost:3000/preview^</span^>^</div^>
echo                 ^<div^>🧪 Features: Container-Scroll-Animation, Responsive Design^</div^>
echo             ^</div^>
echo         ^</div^>
echo         
echo         ^<div class="logs" id="logs"^>
echo             ^<div class="log-entry log-info"^>[INFO] Setup Monitor gestartet...^</div^>
echo         ^</div^>
echo     ^</div^>
echo 
echo     ^<script^>
echo         let setupProgress = 0;
echo         
echo         function updateProgress(percentage) {
echo             const progressFill = document.getElementById('progress-fill');
echo             progressFill.style.width = percentage + '%%';
echo         }
echo         
echo         function updateStatus(elementId, status, type) {
echo             const element = document.getElementById(elementId);
echo             const icon = document.getElementById(elementId.replace('-status', '-icon'));
echo             
echo             element.textContent = status;
echo             
echo             if (type === 'success') {
echo                 icon.textContent = '✅';
echo                 icon.className = 'status-icon status-success';
echo             } else if (type === 'error') {
echo                 icon.textContent = '❌';
echo                 icon.className = 'status-icon status-error';
echo             } else {
echo                 icon.textContent = '⏳';
echo                 icon.className = 'status-icon status-pending';
echo             }
echo         }
echo         
echo         function addLog(message, type = 'info') {
echo             const logs = document.getElementById('logs');
echo             const entry = document.createElement('div');
echo             entry.className = `log-entry log-$${type}`;
echo             entry.textContent = `[$${new Date().toLocaleTimeString()}] $${message}`;
echo             logs.appendChild(entry);
echo             logs.scrollTop = logs.scrollHeight;
echo         }
echo         
echo         function showServerReady() {
echo             const urlCard = document.getElementById('url-card');
echo             const urlTitle = document.getElementById('url-title');
echo             const urlLink = document.getElementById('url-link');
echo             
echo             urlCard.classList.add('ready');
echo             urlTitle.textContent = '🎉 Website ist online!';
echo             urlLink.style.display = 'block';
echo             urlLink.href = 'http://localhost:3000';
echo             
echo             updateStatus('server-status', 'Server läuft auf Port 3000', 'success');
echo             
echo             addLog('✅ Website erfolgreich gestartet!', 'success');
echo             addLog('🌐 Browser wird automatisch geöffnet...', 'info');
echo             
echo             // Öffne Website automatisch
echo             setTimeout(() =^> {
echo                 window.open('http://localhost:3000', '_blank');
echo                 window.open('http://localhost:3000/preview', '_blank');
echo             }, 2000);
echo         }
echo         
echo         // Echte Server-Überwachung
echo         function checkServer() {
echo             fetch('http://localhost:3000')
echo                 .then(() =^> {
echo                     showServerReady();
echo                     updateProgress(100);
echo                 })
echo                 .catch(() =^> {
echo                     setTimeout(checkServer, 3000);
echo                 });
echo         }
echo         
echo         // Starte Server-Überwachung
echo         setTimeout(checkServer, 5000);
echo         
echo         // Initial Logs
echo         addLog('🚀 VSS Website Setup gestartet...', 'info');
echo         addLog('⏳ Überwache Setup-Prozess...', 'info');
echo     ^</script^>
echo ^</body^>
echo ^</html^>
) > setup-monitor.html

REM Öffne Browser mit Monitor
start setup-monitor.html

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
echo 🎯 Features zum Testen:
echo    • Container-Scroll-Animation (Framer Motion)
echo    • Responsive Design (Mobile/Tablet/Desktop)
echo    • VSS Brand Colors (Blue/Green/Orange)
echo    • Industrial High-Tech Design
echo    • SEO-optimierte Meta-Tags
echo.
echo ⏹️  Drücken Sie Ctrl+C zum Stoppen des Servers
echo.

npm run dev