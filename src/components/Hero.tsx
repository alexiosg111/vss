'use client'

import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import { HeroScrollDemo } from './demo'
import HeroSplit from './HeroSplit'

const Hero = () => {
  return (
    <>
      {/* HeroSplit - Above-the-fold diagonal split */}
      <HeroSplit />

      {/* Container Scroll Animation Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <HeroScrollDemo />
      </section>
    </>
  )
}

export default Hero