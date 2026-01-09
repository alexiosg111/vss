'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import OriginalShader from './OriginalShader'

const SplitShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSide, setActiveSide] = useState<'left' | 'right'>('left')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left

    // Vertical line in the middle: x < width / 2
    const midX = rect.width / 2

    // Inverse logic: determine which side should be ACTIVE (white text on black)
    // Active side is where the shader effect should run (where mouse is NOT)
    if (x < midX) {
      // Mouse is on left side -> activate right side (shader on right)
      setActiveSide('right')
    } else {
      // Mouse is on right side -> activate left side (shader on left)
      setActiveSide('left')
    }
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden font-sans bg-slate-50 selection:bg-purple-500 selection:text-white"
    >
      
      {/* SHADER HINTERGRUND (Läuft auf der ganzen Fläche) */}
      <div className="absolute inset-0 bg-black z-0">
        <OriginalShader className="w-full h-full" />
      </div>

      {/* OVERLAYS (Decken den Shader mit slate-50 ab, wo er inaktiv ist) */}

      {/* Linkes Overlay (Linke Hälfte) */}
      <div
        className={`absolute inset-0 bg-slate-50 z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeSide === 'right' ? 'clip-left-full' : 'clip-left-none'
        }`}
      />

      {/* Rechtes Overlay (Rechte Hälfte) */}
      <div
        className={`absolute inset-0 bg-slate-50 z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeSide === 'left' ? 'clip-right-full' : 'clip-right-none'
        }`}
      />

      {/* INHALT / TEXT */}
      <div className="relative z-20 w-full h-full pointer-events-none select-none">
        
        {/* MOBILFUNK (Unten Links) */}
        <div className={`absolute bottom-[25%] left-[15%] md:left-[20%] flex flex-col transition-colors duration-500 ${
          activeSide === 'left' ? 'text-white drop-shadow-md' : 'text-slate-900'
        }`}>
          <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${
            activeSide === 'left' ? 'text-white/60' : 'text-slate-500'
          }`}>
            Connectivity
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            MOBILFUNK
          </h1>
        </div>

        {/* FAHRSTUHL (Oben Rechts) */}
        <div className={`absolute top-[25%] right-[15%] md:right-[20%] flex flex-col items-end text-right transition-colors duration-500 ${
          activeSide === 'right' ? 'text-white drop-shadow-md' : 'text-slate-900'
        }`}>
          <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${
            activeSide === 'right' ? 'text-white/60' : 'text-slate-500'
          }`}>
            Vertical Systems
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            FAHRSTUHL
          </h1>
        </div>
        
        {/* Logo Platzhalter */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
             <span className="font-black text-slate-900/20 text-3xl tracking-tighter">VSS</span>
        </div>
      </div>

      {/* CLICKABLE HITBOXES (Vertikale Linie in der Mitte) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <Link
          href="#mobilfunk"
          className="absolute inset-0 pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
          title="Mobilfunk Lösungen"
        />
        <Link
          href="#aufzuge"
          className="absolute inset-0 pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
          title="Aufzug Systeme"
        />
      </div>

      {/* CSS Styles für Clip-Paths */}
      <style jsx global>{`
        .clip-left-full {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }
        .clip-left-none {
          clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        }
        .clip-right-full {
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
        .clip-right-none {
          clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
        }
      `}</style>
    </div>
  )
}

export default SplitShowcase