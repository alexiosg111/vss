'use client'

import React from 'react'
import Image from 'next/image'
import { ContainerScroll } from './ui/container-scroll-animation'

export default function Mobilfunk() {
  return (
    <section id="mobilfunk" className="min-h-screen bg-gradient-to-b from-slate-900 to-black py-20 flex items-center">
      <div className="container mx-auto px-4">
        {/* Titel oben */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            Telekommunikationsinfrastruktur
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            mit uns in die digitale zukunft
          </p>
        </div>

        {/* Platzhalter für zukünftiges Bild/Content */}
        <div className="max-w-4xl mx-auto">
          <ContainerScroll>
            <div className="aspect-video rounded-2xl bg-slate-800/50 border-2 border-slate-700 flex items-center justify-center">
              <Image
                src="/fotos/gallery/mobile-network.jpg"
                alt="Bild wird hier angezeigt sobald hochgeladen"
                width={800}
                height={600}
                className="rounded-2xl object-cover"
              />
            </div>
          </ContainerScroll>
          <p className="text-slate-400 text-xl text-center mt-8">Bild wird hier angezeigt sobald hochgeladen</p>
        </div>
      </div>
    </section>
  )
}
