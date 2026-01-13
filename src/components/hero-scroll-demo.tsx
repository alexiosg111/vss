'use client'

import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-50 py-20">
      {/* TEXT ÜBER DEM TABLET */}
      <div className="max-w-5xl mx-auto text-center px-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Telekommunikationsinfrastruktur
        </h2>
        <p className="text-xl md:text-2xl text-slate-600">
          mit uns in die digitale zukunft
        </p>
      </div>

      {/* TABLET MIT SCROLL-ANIMATION */}
      <ContainerScroll titleComponent={null}>
        <Image
          src="/images/mobilfunk/tablet-showcase.jpg"
          alt="Telekommunikationsinfrastruktur"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
