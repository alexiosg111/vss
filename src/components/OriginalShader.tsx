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

    // Fullscreen quad with an orthographic camera
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

    // Fragment Shader - Animated RGB Stripes
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Create vertical stripes
        float stripeWidth = 50.0;
        float stripe = mod(gl_FragCoord.x + u_time * 50.0, stripeWidth * 3.0);
        
        vec3 color;
        
        // RGB stripes
        if (stripe < stripeWidth) {
          color = vec3(1.0, 0.0, 0.0); // Red
        } else if (stripe < stripeWidth * 2.0) {
          color = vec3(0.0, 1.0, 0.0); // Green
        } else {
          color = vec3(0.0, 0.0, 1.0); // Blue
        }
        
        // Add some fade at edges
        float fade = smoothstep(0.0, 0.1, uv.y) * smoothstep(1.0, 0.9, uv.y);
        color *= fade;
        
        // Mouse glow
        float mouseDist = distance(uv, u_mouse);
        float mouseGlow = exp(-mouseDist * 5.0) * 0.3;
        color += vec3(mouseGlow);
        
        gl_FragColor = vec4(color, 1.0);
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

    // Pointer interaction
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()

      if (rect.width === 0 || rect.height === 0) return

      const x = (e.clientX - rect.left) / rect.width
      const y = 1.0 - (e.clientY - rect.top) / rect.height

      if (x < 0 || x > 1 || y < 0 || y > 1) {
        uniforms.u_mouse.value.set(-10, -10)
        return
      }

      uniforms.u_mouse.value.set(x, y)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerMove, { passive: true })

    // Resize
    const drawingBufferSize = new THREE.Vector2()

    const resize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      if (newWidth === 0 || newHeight === 0) return

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(newWidth, newHeight)

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
