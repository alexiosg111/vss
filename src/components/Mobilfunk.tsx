'use client'

import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'

export default function Mobilfunk() {
  return (
    <section id="mobilfunk" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-20">
          Telekommunikationsinfrastruktur mit uns in die digitale zukunft
        </h2>
        
        <ContainerScroll
          titleComponent={
            <div className="text-white text-2xl font-bold">
              Mobilfunk Lösungen
            </div>
          }
        >
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/fotos/gallery/mobile-network.jpg"
              alt="Mobile Network Infrastructure"
              fill
              className="object-cover"
              priority
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}
