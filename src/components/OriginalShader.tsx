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

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })

    const width = container.clientWidth
    const height = container.clientHeight

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

        // Create original RGB color scheme - more vibrant and balanced
        vec3 color1 = vec3(1.0, 0.2, 0.5); // Vibrant Red-pink
        vec3 color2 = vec3(0.2, 0.8, 1.0); // Bright Blue-cyan  
        vec3 color3 = vec3(0.5, 1.0, 0.3); // Vivid Green-lime

        // Mix colors based on combined pattern with better contrast
        vec3 finalColor = mix(color1, color2, smoothstep(0.2, 0.7, combined));
        finalColor = mix(finalColor, color3, smoothstep(0.5, 0.95, combined));

        // Use mouse for interaction - dynamic lighting effect
        float mouseDist = distance(uv, u_mouse);
        float mouseGlow = exp(-mouseDist * 3.5) * 0.5;
        finalColor += mouseGlow * vec3(1.0, 1.0, 1.2);

        // Add brightness variation with better range
        float brightness = 0.85 + 0.25 * sin(t + combined * 8.0);
        finalColor *= brightness;
        
        // Ensure colors stay vibrant
        finalColor = clamp(finalColor, 0.0, 1.0);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

    // Vertex Shader
    const vertexShader = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    // Shader uniforms
    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2(0, 0) }
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
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()

      if (rect.width === 0 || rect.height === 0) return

      uniforms.u_mouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      )
    }

    const handlePointerLeave = () => {
      uniforms.u_mouse.value.set(-10, -10)
    }

    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)

    // Resize (observer-based so it works with responsive layouts)
    const resize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      if (newWidth === 0 || newHeight === 0) return

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(newWidth, newHeight)
      uniforms.u_resolution.value.set(newWidth, newHeight)
    }

    resize()

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(container)

    // Cleanup
    return () => {
      if (frameId) cancelAnimationFrame(frameId)

      resizeObserver.disconnect()
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)

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