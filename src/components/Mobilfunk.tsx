'use client'

import React from 'react'
import Image from 'next/image'
import { ContainerScroll } from './ui/container-scroll-animation'

export default function Mobilfunk() {
  return (
    <section id="mobilfunk" className="flex flex-col overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              Telekommunikations<br />infrastruktur
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mt-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              mit uns in die digitale zukunft
            </p>
          </>
        }
      >
        <Image
          src="/fotos/gallery/mobile-network.jpg"
          alt="Moderne Mobilfunknetzwerk-Infrastruktur"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}
