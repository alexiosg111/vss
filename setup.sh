#!/bin/bash
# VSS Website Setup Script v0.34.0 - Fixed Setup without Build

echo "🚀 VSS Website Setup v0.34.0"
echo ""

# Check Node.js
echo "📦 Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not installed. Please install Node.js 18+"
    echo "Download: https://nodejs.org/"
    read -p "Press Enter to exit..."
    exit 1
fi
echo "✅ Node.js found: $(node --version)"

# Check npm
echo "📦 Checking npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm not installed"
    read -p "Press Enter to exit..."
    exit 1
fi
echo "✅ npm found: v$(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ npm install failed. Trying cleanup..."
    echo "📝 Removing node_modules and package-lock.json..."
    rm -rf node_modules package-lock.json
    echo "📦 Retrying install..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Installation failed."
        echo ""
        echo "Possible solutions:"
        echo "1. Delete node_modules and package-lock.json manually"
        echo "2. Run: npm cache clean --force"
        echo "3. Try: npm install --legacy-peer-deps"
        read -p "Press Enter to exit..."
        exit 1
    fi
fi
echo "✅ Dependencies installed"

# Create .env.local
if [ ! -f .env.local ]; then
    echo ""
    echo "📝 Creating .env.local..."
    cat > .env.local << EOL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=Vertical Service Solutions
NODE_ENV=development
EOL
    echo "✅ .env.local created"
else
    echo "✅ .env.local exists"
fi

# Create directories
echo ""
echo "📁 Creating directories..."
mkdir -p public/images
mkdir -p public/logos
mkdir -p public/fotos/gallery
echo "✅ Directories created"

# Start development server
echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Starting development server..."
echo "🌐 Website will be available at: http://localhost:3000"
echo ""
echo "⚡ Press Ctrl+C to stop"
echo ""

# Start server
npm run dev
