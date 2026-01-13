'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import FragmentShader from './FragmentShader'

const SplitShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSide, setActiveSide] = useState<'left' | 'right'>('left')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    
    // Vertikale Linie in der Mitte
    // Inverse logic: Shader läuft auf der Seite wo die Maus NICHT ist
    if (x < rect.width / 2) {
      // Mouse is on left side -> activate right side (shader right)
      setActiveSide('right')
    } else {
      // Mouse is on right side -> activate left side (shader left)
      setActiveSide('left')
    }
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden font-sans bg-slate-50 selection:bg-purple-500 selection:text-white"
    >
      
      {/* FRAGMENT SHADER HINTERGRUND (Läuft auf der ganzen Fläche) */}
      <div className="absolute inset-0 bg-black z-0">
        <FragmentShader className="w-full h-full" />
      </div>

      {/* OVERLAYS (Decken den Shader mit slate-50 ab, wo er inaktiv ist) */}
      
      {/* Linkes Overlay (Vertikale linke Hälfte) */}
      <div 
        className={`absolute inset-0 bg-slate-50 z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeSide === 'right' ? 'clip-left-vertical-full' : 'clip-left-vertical-none'
        }`} 
      />
      
      {/* Rechtes Overlay (Vertikale rechte Hälfte) */}
      <div 
        className={`absolute inset-0 bg-slate-50 z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          activeSide === 'left' ? 'clip-right-vertical-full' : 'clip-right-vertical-none'
        }`} 
      />

      {/* INHALT / TEXT */}
      <div className="relative z-20 w-full h-full pointer-events-none select-none">
        
        {/* MOBILFUNK (Links - zentriert vertikal) */}
        <div className={`absolute left-[10%] md:left-[15%] top-1/2 -translate-y-1/2 flex flex-col transition-colors duration-500 ${
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

        {/* FAHRSTUHL (Rechts - zentriert vertikal) */}
        <div className={`absolute right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 flex flex-col items-end text-right transition-colors duration-500 ${
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

      {/* CLICKABLE HITBOXES (Vertikal in der Mitte getrennt) */}
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

      {/* CSS Styles für Clip-Paths (Vertikal) */}
      <style jsx global>{`
        .clip-left-vertical-full {
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        }
        .clip-left-vertical-none {
          clip-path: polygon(0 0, 0 0, 0 0, 0 0);
        }
        .clip-right-vertical-full {
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
        }
        .clip-right-vertical-none {
          clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
        }
      `}</style>
    </div>
  )
}

export default SplitShowcase