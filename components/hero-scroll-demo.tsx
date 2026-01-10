'use client'

import React from 'react'
import Image from 'next/image'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-900">
              Mit uns in die digitale Zukunft
            </h2>
            <span className="block text-3xl md:text-[5rem] font-black mt-2 leading-none text-dark-900">
              Telekommunikationsstruktur
            </span>
            <p className="mt-6 text-lg text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Planung, Implementierung und Optimierung moderner Mobilfunk-Infrastruktur – für stabile Abdeckung, skalierbare Netzwerke und sichere Konnektivität.
            </p>
          </>
        }
      >
        <Image
          src="/telekommunikationsstruktur-placeholder.svg"
          alt="Telekommunikationsstruktur Visualisierung"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
          priority
          unoptimized
        />
      </ContainerScroll>
    </div>
  )
}
