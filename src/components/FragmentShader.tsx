'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface FragmentShaderProps {
  className?: string
}

const FragmentShader: React.FC<FragmentShaderProps> = ({ className = '' }) => {
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

    // Fragment Shader with Shattered/Fragmented Design
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      // Hash function for randomness
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      // Voronoi distance function for fragment cells
      vec2 voronoi(vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        
        float minDist = 1.0;
        vec2 minPoint = vec2(0.0);
        
        for(int j = -1; j <= 1; j++) {
          for(int i = -1; i <= 1; i++) {
            vec2 b = vec2(float(i), float(j));
            vec2 r = b + hash(p + b) * 0.8 - f + 0.5;
            float d = length(r);
            
            if(d < minDist) {
              minDist = d;
              minPoint = p + b;
            }
          }
        }
        
        return vec2(minDist, hash(minPoint));
      }

      // Create sharp edges between fragments
      float fragmentEdges(vec2 uv, float scale) {
        vec2 vor = voronoi(uv * scale);
        float edges = smoothstep(0.0, 0.05, vor.x);
        return edges;
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

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 centered = uv - 0.5;
        centered.x *= u_resolution.x / u_resolution.y;

        // Time-based animation
        float t = u_time * 0.3;

        // Create multiple layers of fragments at different scales
        float fragments1 = fragmentEdges(centered, 4.0 + sin(t * 0.5) * 0.5);
        float fragments2 = fragmentEdges(centered, 8.0 + cos(t * 0.3) * 0.8);
        float fragments3 = fragmentEdges(centered, 12.0);
        
        // Combine fragment layers
        float combinedFragments = fragments1 * fragments2 * fragments3;

        // Create color variation based on fragment cells
        vec2 vor = voronoi(centered * 6.0 + t * 0.2);
        float cellId = vor.y;
        
        // Original vibrant RGB colors with fragment-based variation
        vec3 color1 = vec3(1.0, 0.1, 0.4); // Red-pink
        vec3 color2 = vec3(0.1, 0.7, 1.0); // Blue-cyan  
        vec3 color3 = vec3(0.4, 1.0, 0.1); // Green-lime
        vec3 color4 = vec3(1.0, 0.6, 0.1); // Orange
        
        // Mix colors based on cell ID and position
        vec3 finalColor = mix(color1, color2, cellId);
        finalColor = mix(finalColor, color3, noise(centered * 3.0 + t));
        finalColor = mix(finalColor, color4, smoothstep(0.3, 0.7, vor.x));

        // Add fragment edges as bright highlights
        float edgeGlow = 1.0 - combinedFragments;
        edgeGlow = pow(edgeGlow, 3.0) * 0.5;
        finalColor += vec3(edgeGlow);

        // Mouse interaction - fragments react to proximity
        float mouseDist = distance(uv, u_mouse);
        float mouseEffect = exp(-mouseDist * 3.0);
        
        // Fragments pulse and brighten near mouse
        finalColor += mouseEffect * vec3(0.8, 0.9, 1.0) * 0.6;
        finalColor *= 1.0 + mouseEffect * 0.3;

        // Add subtle pulsing animation
        float pulse = 0.85 + 0.15 * sin(t * 2.0 + cellId * 6.28);
        finalColor *= pulse;

        // Fragment displacement effect
        float displacement = (1.0 - combinedFragments) * 0.1;
        finalColor *= 1.0 + displacement;

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

    // Handle mouse move for shader interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      uniforms.u_mouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

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
      window.removeEventListener('mousemove', handleMouseMove)
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

export default FragmentShader
