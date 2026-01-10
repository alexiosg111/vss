'use client'

import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import OriginalShader from './OriginalShader'

type Point = { x: number; y: number }

const RECT: Point[] = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 }
]

const POLY_POINT_COUNT = 6

const clamp01 = (n: number) => Math.max(0, Math.min(1, n))

const toCssPolygon = (points: Point[]) => {
  const padded = points.length >= POLY_POINT_COUNT
    ? points.slice(0, POLY_POINT_COUNT)
    : [...points, ...Array.from({ length: POLY_POINT_COUNT - points.length }, () => points[points.length - 1] ?? { x: 0, y: 0 })]

  return `polygon(${padded
    .map((p) => `${(p.x * 100).toFixed(3)}% ${(p.y * 100).toFixed(3)}%`)
    .join(', ')})`
}

const clipRectByDiagonal = (c: number, side: 'below' | 'above') => {
  const isInside = (p: Point) => {
    const d = p.y - p.x - c
    return side === 'below' ? d >= 0 : d <= 0
  }

  const intersection = (a: Point, b: Point) => {
    const da = a.y - a.x - c
    const db = b.y - b.x - c

    const t = da / (da - db)
    const x = a.x + t * (b.x - a.x)
    const y = a.y + t * (b.y - a.y)

    return { x: clamp01(x), y: clamp01(y) }
  }

  const output: Point[] = []

  for (let i = 0; i < RECT.length; i++) {
    const current = RECT[i]
    const previous = RECT[(i - 1 + RECT.length) % RECT.length]

    const currentInside = isInside(current)
    const previousInside = isInside(previous)

    if (currentInside) {
      if (!previousInside) output.push(intersection(previous, current))
      output.push(current)
    } else if (previousInside) {
      output.push(intersection(previous, current))
    }
  }

  return output
}

const SplitShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mobilfunkRef = useRef<HTMLDivElement>(null)
  const fahrstuhlRef = useRef<HTMLDivElement>(null)

  const [activeSide, setActiveSide] = useState<'left' | 'right'>('left')
  const [splitLineC, setSplitLineC] = useState(0)

  const updateSplitLine = useCallback(() => {
    if (!containerRef.current || !mobilfunkRef.current || !fahrstuhlRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    if (containerRect.width === 0 || containerRect.height === 0) return

    const toNorm = (x: number, y: number) => ({
      x: clamp01((x - containerRect.left) / containerRect.width),
      y: clamp01((y - containerRect.top) / containerRect.height)
    })

    const corners = (rect: DOMRect) => [
      toNorm(rect.left, rect.top),
      toNorm(rect.right, rect.top),
      toNorm(rect.right, rect.bottom),
      toNorm(rect.left, rect.bottom)
    ]

    const mobilfunkRect = mobilfunkRef.current.getBoundingClientRect()
    const fahrstuhlRect = fahrstuhlRef.current.getBoundingClientRect()

    const diffsLeft = corners(mobilfunkRect).map((p) => p.y - p.x)
    const diffsRight = corners(fahrstuhlRect).map((p) => p.y - p.x)

    const minLeft = Math.min(...diffsLeft)
    const maxRight = Math.max(...diffsRight)

    const nextC = minLeft > maxRight ? (minLeft + maxRight) / 2 : 0

    setSplitLineC((prev) => {
      if (Math.abs(prev - nextC) < 0.0005) return prev
      return nextC
    })
  }, [])

  useLayoutEffect(() => {
    const compute = () => updateSplitLine()

    const raf = requestAnimationFrame(compute)

    const handleResize = () => compute()
    window.addEventListener('resize', handleResize)

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(compute) : null
    if (ro && containerRef.current && mobilfunkRef.current && fahrstuhlRef.current) {
      ro.observe(containerRef.current)
      ro.observe(mobilfunkRef.current)
      ro.observe(fahrstuhlRef.current)
    }

    const fontsReady = (document as unknown as { fonts?: { ready?: Promise<unknown> } }).fonts?.ready
    fontsReady?.then(compute).catch(() => {})

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
      ro?.disconnect()
    }
  }, [updateSplitLine])

  const polygons = useMemo(() => {
    const below = toCssPolygon(clipRectByDiagonal(splitLineC, 'below'))
    const above = toCssPolygon(clipRectByDiagonal(splitLineC, 'above'))

    const belowCollapsed = toCssPolygon(Array.from({ length: POLY_POINT_COUNT }, () => ({ x: 0, y: 0 })))
    const aboveCollapsed = toCssPolygon(Array.from({ length: POLY_POINT_COUNT }, () => ({ x: 1, y: 0 })))

    return { below, above, belowCollapsed, aboveCollapsed }
  }, [splitLineC])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const diff = y - x

    // Split line in normalized coordinates: y = x + c
    // Use the same definition for hover detection and clip-paths, to guarantee alignment.
    if (diff > splitLineC) {
      // Mouse is in the MOBILFUNK area (below the split) -> activate right side (shader top-right)
      setActiveSide('right')
    } else {
      // Mouse is in the FAHRSTUHL area (above the split) -> activate left side (shader bottom-left)
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

      {/* Overlay unten links (MOBILFUNK Seite) */}
      <div
        className="absolute inset-0 bg-slate-50 z-10 transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ clipPath: activeSide === 'right' ? polygons.below : polygons.belowCollapsed }}
      />

      {/* Overlay oben rechts (FAHRSTUHL Seite) */}
      <div
        className="absolute inset-0 bg-slate-50 z-10 transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ clipPath: activeSide === 'left' ? polygons.above : polygons.aboveCollapsed }}
      />

      {/* INHALT / TEXT */}
      <div className="relative z-20 w-full h-full pointer-events-none select-none">
        {/* MOBILFUNK (Unten Links) */}
        <div
          ref={mobilfunkRef}
          className={`absolute bottom-[25%] left-[15%] md:left-[20%] flex flex-col transition-colors duration-500 ${
            activeSide === 'left' ? 'text-white drop-shadow-md' : 'text-slate-900'
          }`}
        >
          <span
            className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${
              activeSide === 'left' ? 'text-white/60' : 'text-slate-500'
            }`}
          >
            Connectivity
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">MOBILFUNK</h1>
        </div>

        {/* FAHRSTUHL (Oben Rechts) */}
        <div
          ref={fahrstuhlRef}
          className={`absolute top-[25%] right-[15%] md:right-[20%] flex flex-col items-end text-right transition-colors duration-500 ${
            activeSide === 'right' ? 'text-white drop-shadow-md' : 'text-slate-900'
          }`}
        >
          <span
            className={`text-xs font-bold tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${
              activeSide === 'right' ? 'text-white/60' : 'text-slate-500'
            }`}
          >
            Vertical Systems
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">FAHRSTUHL</h1>
        </div>

        {/* Logo Platzhalter */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <span className="font-black text-slate-900/20 text-3xl tracking-tighter">VSS</span>
        </div>
      </div>

      {/* CLICKABLE HITBOXES (Genau an der Diagonalen getrennt) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <Link
          href="#mobilfunk"
          className="absolute inset-0 pointer-events-auto cursor-pointer"
          style={{ clipPath: polygons.below }}
          title="Mobilfunk Lösungen"
        />
        <Link
          href="#aufzuge"
          className="absolute inset-0 pointer-events-auto cursor-pointer"
          style={{ clipPath: polygons.above }}
          title="Aufzug Systeme"
        />
      </div>
    </div>
  )
}

export default SplitShowcase
