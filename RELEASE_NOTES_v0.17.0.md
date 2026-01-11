# Release Notes v0.17.0: Clean Setup - Docker Files Removed

**Release Date:** January 11, 2025
**Version:** 0.17.0

---

## 🧹 Cleanup

### Docker Files Removed

**Problem:**
- Docker files (Dockerfile, Dockerfile.dev, docker-compose.yml) were still in repository
- Old setup-v0.11.sh script was still present
- Repository wasn't truly "clean without Docker"

**Solution:**
- Removed all Docker-related files from repository
- Removed old setup-v0.11.sh script
- Updated .gitignore to ignore Docker files
- Verified setup script works correctly

### Files Removed
1. **Dockerfile** - Docker configuration for production
2. **Dockerfile.dev** - Docker configuration for development
3. **docker-compose.yml** - Docker Compose configuration
4. **setup-v0.11.sh** - Old setup script

### Files Updated
1. **.gitignore** - Added Docker files to ignore list
2. **setup.sh** - Already fixed in v0.16.0, verified working

---

## ✅ Testing

### Setup Script Test ✅
```bash
bash setup.sh
🚀 VSS Website Setup v0.15.0 wird gestartet...
🔄 Clean Setup ohne Docker (wie v0.8)
✅ Node.js gefunden: v20.19.6
✅ npm gefunden: v11.7.0
✅ Dependencies installiert.
✅ Build erfolgreich.
```

### Build Test ✅
```bash
npm run build
✓ Compiled successfully in 14.2s
✓ Linting and checking validity of types
✓ Generating static pages (6/6)
```

---

## 📝 Changes

### Removed Files
- `Dockerfile`
- `Dockerfile.dev`
- `docker-compose.yml`
- `setup-v0.11.sh`

### Modified Files
- `.gitignore` - Added Docker files to ignore list
- `package.json` - Version bump to v0.17.0

---

## 🔄 Breaking Changes

### Docker Support Removed
**Important:** Docker files have been removed from the repository.

**Migration:**
- Use `npm install` instead of `docker-compose up`
- Use `npm run dev` instead of `docker:dev`
- Use `npm run build` instead of `docker:build`

**Benefits:**
- Simpler setup process
- Faster dependency installation
- Better compatibility
- No Docker-related issues

---

## 🚀 What's Preserved

All v0.15.0 and v0.16.0 features are intact:
- ✅ ContainerScroll Animation
- ✅ Mobilfunk Section with tablet and SVG image
- ✅ Fahrstuhl Section with tablet design
- ✅ Smooth scroll navigation
- ✅ Correct hitboxes (#mobilfunk, #fahrstuhl)
- ✅ Responsive design
- ✅ 60fps animations
- ✅ Setup script working correctly

---

## 📁 .gitignore Update

```gitignore
# Docker files (removed in v0.11.0 - clean setup)
Dockerfile
Dockerfile.dev
docker-compose.yml
```

---

## ✅ Verification Checklist

- [x] Docker files removed
- [x] Old setup script removed
- [x] .gitignore updated
- [x] Setup script tested
- [x] Build successful
- [x] All v0.15.0 features intact
- [x] No errors in setup process

---

## 🎯 Summary

**v0.17.0 is a cleanup release** that removes Docker files from the repository.

**What's Removed:**
- ✅ Dockerfile
- ✅ Dockerfile.dev
- ✅ docker-compose.yml
- ✅ setup-v0.11.sh

**What's Preserved:**
- ✅ All v0.15.0 features
- ✅ ContainerScroll animations
- ✅ Mobilfunk & Fahrstuhl sections
- ✅ Smooth scroll navigation
- ✅ Setup script (npm-based)

**What's Improved:**
- ✅ Repository is truly clean
- ✅ No Docker confusion
- ✅ Simple npm-based setup
- ✅ Better documentation

---

**Release Status:** ✅ PRODUCTION READY
**Release Type:** Cleanup
**Breaking Changes:** Docker support removed (use npm instead)
