'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface OriginalShaderProps {
  className?: string
}

const OriginalShader: React.FC<OriginalShaderProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const container = mountRef.current

    // Scene setup
    const scene = new THREE.Scene()

    // Fullscreen quad with an orthographic camera.
    // Important: camera must be in front of the plane, otherwise the quad can get clipped / render incorrectly.
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: 'high-performance' 
    })

    // Initial size setup
    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    // Make canvas fill container
    if (renderer.domElement) {
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      renderer.domElement.style.display = 'block'
    }
    
    container.appendChild(renderer.domElement)

    // Fragment Shader (Original RGB Colors Preserved)
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      // Hash function for randomness
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      // Noise function
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      // Fractal Brownian Motion
      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 centered = uv - 0.5;
        centered.x *= u_resolution.x / u_resolution.y;

        // Time-based animation
        float t = u_time * 0.5;

        // Create flowing pattern
        vec2 flow = centered + vec2(
          sin(centered.y * 3.0 + t) * 0.1,
          cos(centered.x * 3.0 + t) * 0.1
        );

        // Generate noise patterns
        float pattern1 = fbm(flow * 3.0 + t);
        float pattern2 = fbm(flow * 6.0 - t * 0.7);
        float pattern3 = fbm(flow * 12.0 + t * 0.3);

        // Combine patterns for complex effect
        float combined = pattern1 * 0.5 + pattern2 * 0.3 + pattern3 * 0.2;

        // Create original RGB color scheme (v0.12 colors)
        vec3 color1 = vec3(1.0, 0.1, 0.4); // Red-pink
        vec3 color2 = vec3(0.1, 0.7, 1.0); // Blue-cyan  
        vec3 color3 = vec3(0.4, 1.0, 0.1); // Green-lime

        // Mix colors based on combined pattern
        vec3 finalColor = mix(color1, color2, smoothstep(0.1, 0.6, combined));
        finalColor = mix(finalColor, color3, smoothstep(0.4, 0.9, combined));

        // Use mouse for interaction - dynamic lighting effect
        float mouseDist = distance(uv, u_mouse);
        float mouseGlow = exp(-mouseDist * 4.0);
        finalColor += mouseGlow * vec3(0.8, 0.9, 1.0) * 0.4;

        // Add some brightness variation
        finalColor *= 0.7 + 0.3 * sin(t + combined * 10.0);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    // Vertex Shader
    const vertexShader = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const uniforms = {
      u_time: { value: 0 },
      // Important: gl_FragCoord is in *drawing buffer pixels*, not CSS pixels.
      // We will sync this value via renderer.getDrawingBufferSize() in resize().
      u_resolution: { value: new THREE.Vector2(1, 1) },
      u_mouse: { value: new THREE.Vector2(-10, -10) }
    }

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader
    })

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const clock = new THREE.Clock()
    let frameId: number | null = null

    // Animation loop
    const animate = () => {
      uniforms.u_time.value = clock.getElapsedTime()
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    // Pointer interaction (mouse + touch)
    // Note: the shader canvas is behind overlays in SplitShowcase, so we listen on window
    // and translate coordinates into the shader container.
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()

      if (rect.width === 0 || rect.height === 0) return

      const x = (e.clientX - rect.left) / rect.width
      const y = 1.0 - (e.clientY - rect.top) / rect.height

      // If pointer is outside, disable glow
      if (x < 0 || x > 1 || y < 0 || y > 1) {
        uniforms.u_mouse.value.set(-10, -10)
        return
      }

      uniforms.u_mouse.value.set(x, y)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerMove, { passive: true })

    // Resize (observer-based so it works with responsive layouts)
    const drawingBufferSize = new THREE.Vector2()

    const resize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      if (newWidth === 0 || newHeight === 0) return

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(newWidth, newHeight)

      // u_resolution MUST match the actual drawing buffer size for gl_FragCoord to work correctly
      renderer.getDrawingBufferSize(drawingBufferSize)
      uniforms.u_resolution.value.copy(drawingBufferSize)
    }

    resize()

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(container)

    // Cleanup
    return () => {
      if (frameId) cancelAnimationFrame(frameId)

      resizeObserver.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerMove)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={className} />
}

export default OriginalShader