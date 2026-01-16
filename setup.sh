#!/bin/bash
# VSS Website Setup Script v1.0.0 - Simplified Fast Setup

echo "========================================"
echo "  VSS Website Setup v1.0.0"
echo "========================================"
echo ""

# Check Node.js
echo "[1/5] Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js not installed!"
    echo ""
    echo "Please install Node.js 18+ from:"
    echo "https://nodejs.org/"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi
echo "[OK] Node.js found: $(node --version)"
echo ""

# Check npm
echo "[2/5] Checking npm..."
if ! command -v npm &> /dev/null; then
    echo "[ERROR] npm not installed!"
    read -p "Press Enter to exit..."
    exit 1
fi
echo "[OK] npm found: v$(npm --version)"
echo ""

# Install dependencies
echo "[3/5] Installing dependencies..."
echo "This may take a few minutes..."
echo ""
npm install
if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Installation failed!"
    echo ""
    echo "Possible solutions:"
    echo "1. Delete node_modules and package-lock.json manually"
    echo "2. Run: npm cache clean --force"
    echo "3. Try: npm install --legacy-peer-deps"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi
echo "[OK] Dependencies installed"
echo ""

# Create .env.local
echo "[4/5] Configuring environment variables..."
if [ ! -f .env.local ]; then
    cat > .env.local << EOL
# VSS Website Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=Vertical Service Solutions
NODE_ENV=development
EOL
    echo "[OK] .env.local created"
else
    echo "[OK] .env.local already exists"
fi
echo ""

# Create directories
echo "[5/5] Creating directories..."
mkdir -p public/images
mkdir -p public/logos
mkdir -p public/fotos/gallery
echo "[OK] Directories created"
echo ""

# Setup complete
echo "========================================"
echo "  Setup completed successfully!"
echo "========================================"
echo ""
echo "Starting Development Server..."
echo ""
echo "Website will be available at:"
echo "  http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop"
echo ""

# Start development server
npm run dev
