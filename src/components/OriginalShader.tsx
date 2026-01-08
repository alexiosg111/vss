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

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    const container = mountRef.current
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

        // Create original RGB color scheme
        vec3 color1 = vec3(1.0, 0.2, 0.4); // Red-pink
        vec3 color2 = vec3(0.2, 0.8, 1.0); // Blue-cyan  
        vec3 color3 = vec3(0.4, 1.0, 0.2); // Green-lime

        // Mix colors based on combined pattern
        vec3 finalColor = mix(color1, color2, smoothstep(0.2, 0.8, combined));
        finalColor = mix(finalColor, color3, smoothstep(0.4, 0.9, combined));

        // Add some brightness variation
        finalColor *= 0.8 + 0.2 * sin(t + combined * 10.0);

        // Convert to grayscale for more subtle effect
        float gray = dot(finalColor, vec3(0.299, 0.587, 0.114));
        finalColor = vec3(gray) * 1.2;

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

    // Animation loop
    const animate = () => {
      uniforms.u_time.value += 0.016 // ~60fps
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!container) return
      
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      
      renderer.setSize(newWidth, newHeight)
      uniforms.u_resolution.value.set(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={className} />
}

export default OriginalShader