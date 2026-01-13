'use client'

import React from 'react'

interface FragmentOverlayProps {
  isActive: boolean
  side: 'left' | 'right'
}

const FragmentOverlay: React.FC<FragmentOverlayProps> = ({ isActive, side }) => {
  // Generate random fragment positions for a shattered glass effect
  const fragments = React.useMemo(() => {
    const count = side === 'left' ? 8 : 8
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 50 + Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 200,
      duration: 500 + Math.random() * 300
    }))
  }, [side])

  return (
    <div className={`absolute inset-0 pointer-events-none ${side === 'left' ? 'z-15' : 'z-15'}`}>
      {fragments.map((fragment) => (
        <div
          key={fragment.id}
          className={`absolute bg-slate-50/20 backdrop-blur-sm rounded-lg transition-all ${
            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            left: `${fragment.x}%`,
            top: `${fragment.y}%`,
            width: `${fragment.size}px`,
            height: `${fragment.size}px`,
            transform: `rotate(${fragment.rotation}deg) ${isActive ? 'scale(1)' : 'scale(0.5)'}`,
            transitionDelay: `${fragment.delay}ms`,
            transitionDuration: `${fragment.duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: isActive ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
      ))}
    </div>
  )
}

export default FragmentOverlay
