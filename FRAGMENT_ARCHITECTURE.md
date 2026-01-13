# Fragment Design - System Architecture

## 🏗️ Component Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   SplitShowcase.tsx                      │
│  (Main Container - Diagonal Split Hero Section)         │
└─────────────────────────────────────────────────────────┘
                          │
          ┌───────────────┴───────────────┐
          │                               │
          ▼                               ▼
┌──────────────────────┐      ┌──────────────────────┐
│  FragmentShader.tsx  │      │ FragmentOverlay.tsx  │
│  (WebGL Component)   │      │  (CSS Component)     │
└──────────────────────┘      └──────────────────────┘
          │                               │
          ▼                               ▼
┌──────────────────────┐      ┌──────────────────────┐
│   Three.js Scene     │      │   8x Fragment Divs   │
│   - Renderer         │      │   - Random Positions │
│   - Camera           │      │   - Glassmorphism    │
│   - Plane Geometry   │      │   - Staggered Anims  │
└──────────────────────┘      └──────────────────────┘
          │
          ▼
┌──────────────────────┐
│  GLSL Shader Code    │
│  - Voronoi Function  │
│  - Edge Detection    │
│  - Color Mixing      │
│  - Mouse Interaction │
└──────────────────────┘
```

## 🎨 Visual Layer Stack

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  z-30: Hitboxes (Clickable Areas)                    ┃
┃  ┌─────────────────┐  ┌─────────────────┐            ┃
┃  │  #mobilfunk     │ /│   #aufzuge      │            ┃
┃  │  (Bottom-Left)  │/ │   (Top-Right)   │            ┃
┃  └─────────────────┘  └─────────────────┘            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
         ↑ Diagonal Split Line (/)
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  z-20: Content Layer                                 ┃
┃  ┌────────────┐                  ┌──────────────┐   ┃
┃  │ MOBILFUNK  │                  │  FAHRSTUHL   │   ┃
┃  │  (Text)    │                  │    (Text)    │   ┃
┃  └────────────┘                  └──────────────┘   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
         ↑ Text changes color based on activeSide
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  z-15: Fragment Overlays (CSS)                       ┃
┃  ╔════╗    ╔═══╗       ╔════╗    ╔═══╗              ┃
┃  ║ ▓▓ ║    ║▓▓▓║       ║ ▓▓ ║    ║▓▓▓║              ┃
┃  ╚════╝    ╚═══╝       ╚════╝    ╚═══╝              ┃
┃     ╔═══╗   ╔════╗  ╔═══╗   ╔════╗                  ┃
┃     ║▓▓▓║   ║ ▓▓ ║  ║▓▓▓║   ║ ▓▓ ║                  ┃
┃     ╚═══╝   ╚════╝  ╚═══╝   ╚════╝                  ┃
┃  (8 Fragments Left + 8 Fragments Right)              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
         ↑ Glassmorphism with backdrop-blur
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  z-10: Solid Overlays (slate-50)                     ┃
┃  ████████████████╱                                   ┃
┃  ████████████████                                    ┃
┃  ███████████████╱           ╲████████████████        ┃
┃  ██████████████╱             ╲███████████████        ┃
┃  █████████████╱               ╲██████████████        ┃
┃  (Clip-Path Triangles - Mask Shader)                 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
         ↑ CSS Clip-Path with 700ms transition
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  z-0: Fragment Shader (WebGL)                        ┃
┃  ╔═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╗    ┃
┃  ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣    ┃
┃  ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣    ┃
┃  ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣    ┃
┃  ╚═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╝    ┃
┃  (Voronoi Cells with Glowing Edges)                  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
         ↑ Full-screen WebGL canvas
```

## 🔄 Interaction Flow

```
┌─────────────┐
│ Mouse Move  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────┐
│ handleMouseMove()           │
│ Calculate diagonal position │
│ (y > mx) ? right : left     │
└──────┬──────────────────────┘
       │
       ├──────────────────┬──────────────────┐
       ▼                  ▼                  ▼
┌─────────────┐   ┌──────────────┐   ┌──────────────┐
│ setActiveSide│   │ Update Shader│   │Update Overlays│
│ (state)      │   │ u_mouse.value│   │ isActive prop│
└──────┬───────┘   └──────┬───────┘   └──────┬───────┘
       │                  │                  │
       ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────┐
│              Visual Updates (sync)                  │
│  • Clip-Path Transitions (700ms)                    │
│  • Shader Mouse Glow (instant)                      │
│  • Fragment Overlays Scale (500-800ms)              │
│  • Text Color Changes (500ms)                       │
└─────────────────────────────────────────────────────┘
```

## 🎬 Animation Timeline

```
Mouse enters new side (activeSide changes)
│
├─ t = 0ms
│  ├─ State Update: setActiveSide('left' | 'right')
│  ├─ Shader Update: u_mouse.value instant
│  └─ Trigger: CSS/Component transitions
│
├─ t = 0-200ms (Staggered)
│  └─ FragmentOverlay elements start animating
│     ├─ Fragment 0: delay 0ms
│     ├─ Fragment 1: delay 50ms
│     ├─ Fragment 2: delay 120ms
│     └─ ... (random delays 0-200ms)
│
├─ t = 500ms
│  └─ Text color transition completes
│
├─ t = 500-800ms
│  └─ Fragment Overlays complete
│     └─ Scale: 0.5 → 1.0, Opacity: 0 → 1
│
└─ t = 700ms
   └─ Clip-Path transition completes
      └─ Solid overlays fully masked/unmasked
```

## 🧮 Shader Data Flow

```
┌─────────────────────────────────────────────────┐
│           Shader Uniforms (Input)               │
│  u_time: float       (animation time)           │
│  u_resolution: vec2  (canvas size)              │
│  u_mouse: vec2       (mouse position 0-1)       │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│         Fragment Shader Pipeline                │
│                                                  │
│  1. UV Calculation                               │
│     uv = gl_FragCoord.xy / u_resolution.xy      │
│                                                  │
│  2. Voronoi Tessellation                         │
│     vor = voronoi(uv * scale)                   │
│     → (distance, cellId)                        │
│                                                  │
│  3. Multi-Layer Fragments                        │
│     frag1 = fragmentEdges(uv, 4.0)              │
│     frag2 = fragmentEdges(uv, 8.0)              │
│     frag3 = fragmentEdges(uv, 12.0)             │
│     combined = frag1 * frag2 * frag3            │
│                                                  │
│  4. Color Calculation                            │
│     color = mix(color1, color2, cellId)         │
│     color = mix(color, color3, noise)           │
│     color = mix(color, color4, distance)        │
│                                                  │
│  5. Edge Glow                                    │
│     edgeGlow = pow(1.0 - combined, 3.0)         │
│     color += vec3(edgeGlow)                     │
│                                                  │
│  6. Mouse Interaction                            │
│     dist = distance(uv, u_mouse)                │
│     glow = exp(-dist * 3.0)                     │
│     color += glow * vec3(0.8, 0.9, 1.0)         │
│                                                  │
│  7. Pulsing Animation                            │
│     pulse = 0.85 + 0.15 * sin(u_time + cellId)  │
│     color *= pulse                              │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│           gl_FragColor (Output)                 │
│           vec4(finalColor, 1.0)                 │
└─────────────────────────────────────────────────┘
```

## 📊 Performance Budget

```
┌────────────────────────────────────────────────────┐
│              Performance Metrics                   │
├────────────────────────────────────────────────────┤
│  Frame Time Budget: 16.67ms (60fps)               │
├────────────────────────────────────────────────────┤
│  • Shader Execution:        ~8ms   (48%)           │
│  • DOM Updates:             ~2ms   (12%)           │
│  • CSS Transitions:         ~3ms   (18%)           │
│  • React Rendering:         ~2ms   (12%)           │
│  • Browser Compositing:     ~1ms   (6%)            │
│  • Reserve Buffer:          ~0.67ms (4%)           │
├────────────────────────────────────────────────────┤
│  Total:                    16.67ms (100%)          │
└────────────────────────────────────────────────────┘
```

## 🔧 Configuration Points

```tsx
// FragmentShader.tsx
const SCALES = [4.0, 8.0, 12.0]           // Fragment densities
const COLORS = [
  [1.0, 0.1, 0.4],                         // Red-Pink
  [0.1, 0.7, 1.0],                         // Blue-Cyan
  [0.4, 1.0, 0.1],                         // Green-Lime
  [1.0, 0.6, 0.1]                          // Orange
]
const MOUSE_GLOW_STRENGTH = 3.0            // Proximity falloff
const ANIMATION_SPEED = 0.3                // Time multiplier
const EDGE_THRESHOLD = 0.05                // Edge detection sensitivity

// FragmentOverlay.tsx
const FRAGMENT_COUNT = 8                   // Fragments per side
const SIZE_MIN = 50                        // px
const SIZE_MAX = 150                       // px
const DELAY_MAX = 200                      // ms
const DURATION_MIN = 500                   // ms
const DURATION_MAX = 800                   // ms
const OPACITY = 0.2                        // Background opacity
const BLUR = 'sm'                          // Backdrop blur level

// SplitShowcase.tsx
const CLIP_PATH_TRANSITION = 700           // ms
const EASING = 'cubic-bezier(0.16,1,0.3,1)' // Transition function
```

## 🎯 Optimization Strategies

```
┌─────────────────────────────────────────────────┐
│            GPU Optimizations                    │
├─────────────────────────────────────────────────┤
│  ✓ Constant loop bounds (unrollable)            │
│  ✓ Minimal branching in shader                  │
│  ✓ Pre-computed hash values                     │
│  ✓ Efficient vec operations                     │
│  ✓ Texture-free shader (no sampling)            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│            CPU Optimizations                    │
├─────────────────────────────────────────────────┤
│  ✓ useMemo for fragment generation              │
│  ✓ useRef to avoid re-renders                   │
│  ✓ Throttled mouse events                       │
│  ✓ Conditional rendering (isActive)             │
│  ✓ Single animation loop                        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│            Browser Optimizations                │
├─────────────────────────────────────────────────┤
│  ✓ CSS transforms (GPU-accelerated)             │
│  ✓ will-change hints (implicit)                 │
│  ✓ Backdrop-filter (GPU compositing)            │
│  ✓ Absolute positioning (no layout)             │
│  ✓ Single WebGL context                         │
└─────────────────────────────────────────────────┘
```

## 🧪 Testing Checklist

```
[ ] Build Compilation
    ├─ [ ] TypeScript validation
    ├─ [ ] Next.js build success
    └─ [ ] No console errors

[ ] Visual Rendering
    ├─ [ ] Fragment shader visible
    ├─ [ ] Fragment overlays animate
    ├─ [ ] Colors match palette
    └─ [ ] Diagonal split accurate

[ ] Interactions
    ├─ [ ] Mouse hover triggers effects
    ├─ [ ] Shader glow follows mouse
    ├─ [ ] Fragments scale on activation
    └─ [ ] Text color changes correctly

[ ] Performance
    ├─ [ ] 60fps maintained
    ├─ [ ] No frame drops on hover
    ├─ [ ] Smooth animations
    └─ [ ] Low CPU usage

[ ] Responsive
    ├─ [ ] Mobile displays correctly
    ├─ [ ] Tablet aspect ratios work
    └─ [ ] Desktop full features

[ ] Cross-Browser
    ├─ [ ] Chrome (WebGL support)
    ├─ [ ] Firefox (WebGL support)
    ├─ [ ] Safari (WebGL support)
    └─ [ ] Edge (WebGL support)
```

---

**Fragment Design Architecture v0.12.0** - Eine durchdachte, skalierbare und performante Implementation eines modernen Fragmentierungs-Systems.
