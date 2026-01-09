"use client"

import { useState, useRef, useEffect } from "react"
import * as THREE from "three"

// --- 1. DIE SHADER KOMPONENTE ---
const ShaderCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    // 1. Shader Code (Original Farben)
    const vertexShader = `void main() { gl_Position = vec4( position, 1.0 ); }`

    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    // 2. Three.js Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.Camera()
    camera.position.z = 1
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // 3. Resize & Animation
    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      uniforms.resolution.value.x = container.clientWidth
      uniforms.resolution.value.y = container.clientHeight
    }
    window.addEventListener('resize', onResize)
    onResize()

    const animate = () => {
      requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full absolute inset-0" />
}

// --- 2. DIE HAUPTKOMPONENTE ---

export default function SplitShowcase() {
  const [activeSide, setActiveSide] = useState<'left' | 'right'>('left')
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Logik: Wenn y < x -> Maus ist Oben Rechts (Fahrstuhl)
    const isRightSide = y < x

    // Inverse Logik: Wenn Maus Rechts -> Shader Links
    if (isRightSide) {
      setActiveSide('left')
    } else {
      setActiveSide('right')
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden font-sans bg-[#f8fafc]"
    >

      {/* SHADER HINTERGRUND */}
      <div className="absolute inset-0 bg-black z-0">
        <ShaderCanvas />
      </div>

      {/* ÜBERLAGE (Helles Grau deckt den Shader ab) */}

      {/* Linke Überlage (Dreieck unten links) */}
      <div
        className={`absolute inset-0 bg-[#f8fafc] z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeSide === 'right' ? 'shape-left-visible' : 'shape-left-hidden'
        }`}
      />

      {/* Rechte Überlage (Dreieck oben rechts) */}
      <div
        className={`absolute inset-0 bg-[#f8fafc] z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeSide === 'left' ? 'shape-right-visible' : 'shape-right-hidden'
        }`}
      />

      {/* INHALT TEXT */}
      <div className="relative z-20 w-full h-full pointer-events-none select-none p-8 md:p-16">

        {/* MOBILFUNK (Links Unten) */}
        <div className={`absolute bottom-[25%] left-[10%] md:left-[20%] flex flex-col transition-colors duration-500 ${
          activeSide === 'left' ? 'text-white' : 'text-[#1e293b]'
        }`}>
          <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${
            activeSide === 'left' ? 'text-white/70' : 'text-slate-400'
          }`}>
            Connectivity
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            MOBILFUNK
          </h1>
        </div>

        {/* FAHRSTUHL (Rechts Oben) */}
        <div className={`absolute top-[25%] right-[10%] md:right-[20%] flex flex-col items-end text-right transition-colors duration-500 ${
          activeSide === 'right' ? 'text-white' : 'text-[#1e293b]'
        }`}>
          <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${
            activeSide === 'right' ? 'text-white/70' : 'text-slate-400'
          }`}>
            Vertical Systems
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            FAHRSTUHL
          </h1>
        </div>

        {/* LOGO */}
        <div className="absolute top-8 left-8">
          <span className="font-black text-[#1e293b]/10 text-4xl tracking-tighter">VSS</span>
        </div>

      </div>

      {/* STYLES (Standard CSS statt styled-jsx für bessere Kompatibilität) */}
      <style>{`
        .shape-left-visible {
          clip-path: polygon(0 0, 0 100%, 100% 100%);
        }
        .shape-left-hidden {
          clip-path: polygon(0 0, 0 0, 0 0);
        }
        .shape-right-visible {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
        .shape-right-hidden {
          clip-path: polygon(100% 0, 100% 0, 100% 0);
        }
      `}</style>
    </div>
  )
}
