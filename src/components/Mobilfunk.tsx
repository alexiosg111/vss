'use client'

import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'

export default function Mobilfunk() {
  return (
    <section id="mobilfunk" className="min-h-screen bg-gradient-to-b from-slate-900 to-black py-20 flex items-center">
      <div className="container mx-auto px-4">
        {/* Titel oben */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            Telekommunikationsinfrastruktur
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            mit uns in die digitale zukunft
          </p>
        </div>
        
        {/* Tablet mit Bild */}
        <div className="mt-16">
          <ContainerScroll>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/fotos/gallery/mobile-network.jpg"
                alt="Mobile Network Infrastructure"
                fill
                className="object-cover"
                priority
                                unoptimized
              />
            </div>
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}

              
