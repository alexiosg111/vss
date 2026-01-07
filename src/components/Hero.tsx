'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type ActivePanel = 'mobilfunk' | 'aufzuege' | null

const VSS_HOMEPAGE_COLORS = {
  primary: '#fca817',
  secondary: '#43bc75',
  dark: '#1f2026',
} as const

const Hero = () => {
  const [activePanel, setActivePanel] = useState<ActivePanel>(null)

  const split = useMemo(() => {
    if (activePanel === 'mobilfunk') {
      return { top: 48, bottom: 62 }
    }

    if (activePanel === 'aufzuege') {
      return { top: 68, bottom: 82 }
    }

    return { top: 58, bottom: 74 }
  }, [activePanel])

  const mobilfunkClip = `polygon(0 0, ${split.top}% 0, ${split.bottom}% 100%, 0 100%)`
  const aufzuegeClip = `polygon(${split.top}% 0, 100% 0, 100% 100%, ${split.bottom}% 100%)`

  const isMobilfunkEmphasized = activePanel === 'aufzuege'
  const isAufzuegeEmphasized = activePanel === 'mobilfunk'

  return (
    <section className="bg-white" style={{ color: VSS_HOMEPAGE_COLORS.dark }}>
      <div className="min-h-[100svh] grid grid-rows-[auto_1fr_auto]">
        {/* Header (Logo + Intro Text) */}
        <header className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="mx-auto max-w-7xl grid grid-cols-[auto_1fr] items-center gap-6">
            <Link href="/" className="inline-flex items-center" aria-label="Vertical Service Solutions - Startseite">
              <Image
                src="/vss/homepage/vss-logo.png"
                alt="Vertical Service Solutions"
                width={180}
                height={56}
                priority
              />
            </Link>

            <article className="hidden md:block max-w-3xl">
              <h1 className="uppercase tracking-wide text-lg font-medium text-[#1f2026]">
                <span>Aufzüge</span> <span className="font-normal">&</span> <span>Mobilfunk</span>
              </h1>
              <div className="mt-2 text-sm leading-relaxed text-[#40464f]">
                <p>
                  Bei Vertical Service Solutions bieten wir Ihnen zuverlässigen und auf Ihre Bedürfnisse abgestimmten Service in den zwei
                  Geschäftsfeldern: Aufzüge &amp; Mobilfunk.
                </p>
                <p className="mt-2">
                  Bitte <strong>wählen</strong> Sie das gewünschte Geschäftsfeld:
                </p>
              </div>
            </article>
          </div>
        </header>

        {/* Split Area */}
        <div className="relative overflow-hidden">
          {/* Mobile/Tablet (stacked) */}
          <div className="lg:hidden h-full grid grid-rows-2">
            <Link
              href="/aufzug"
              className="relative vss-split-panel"
              style={{ backgroundImage: 'url(/vss/homepage/aufzuege.jpg)' }}
            >
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative h-full p-4 flex items-start justify-end">
                <div className="vss-split-card">
                  <h2 className="vss-split-title">Aufzüge</h2>
                  <div className="vss-split-subtitle" style={{ color: VSS_HOMEPAGE_COLORS.primary }}>
                    Bereich besuchen <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/mobilfunk"
              className="relative vss-split-panel"
              style={{ backgroundImage: 'url(/vss/homepage/mobilfunk.jpg)' }}
            >
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative h-full p-4 flex items-end justify-start">
                <div className="vss-split-card">
                  <h2 className="vss-split-title">Mobilfunk</h2>
                  <div className="vss-split-subtitle" style={{ color: VSS_HOMEPAGE_COLORS.secondary }}>
                    Bereich besuchen <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop (diagonal split with inverse hover) */}
          <div className="hidden lg:block absolute inset-0">
            {/* Mobilfunk (left / bottom-left) */}
            <Link
              href="/mobilfunk"
              onMouseEnter={() => setActivePanel('mobilfunk')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('mobilfunk')}
              onBlur={() => setActivePanel(null)}
              className="absolute inset-0 vss-split-panel"
              style={{
                clipPath: mobilfunkClip,
                backgroundImage: 'url(/vss/homepage/mobilfunk.jpg)',
                filter: isMobilfunkEmphasized ? 'saturate(1.1) brightness(1.05)' : activePanel ? 'brightness(0.75)' : 'none',
                transform: isMobilfunkEmphasized ? 'scale(1.01)' : 'scale(1)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,${isMobilfunkEmphasized ? 0.25 : 0.35}) 0%, rgba(0,0,0,${
                    activePanel && !isMobilfunkEmphasized ? 0.6 : 0.35
                  }) 100%)`,
                }}
              />

              <div className="relative h-full p-10 flex items-end justify-start">
                <div className="vss-split-card">
                  <h2 className="vss-split-title">Mobilfunk</h2>
                  <div className="vss-split-subtitle" style={{ color: VSS_HOMEPAGE_COLORS.secondary }}>
                    Bereich besuchen <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Aufzüge (right / top-right) */}
            <Link
              href="/aufzug"
              onMouseEnter={() => setActivePanel('aufzuege')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('aufzuege')}
              onBlur={() => setActivePanel(null)}
              className="absolute inset-0 vss-split-panel"
              style={{
                clipPath: aufzuegeClip,
                backgroundImage: 'url(/vss/homepage/aufzuege.jpg)',
                filter: isAufzuegeEmphasized ? 'saturate(1.1) brightness(1.05)' : activePanel ? 'brightness(0.75)' : 'none',
                transform: isAufzuegeEmphasized ? 'scale(1.01)' : 'scale(1)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(315deg, rgba(0,0,0,${isAufzuegeEmphasized ? 0.25 : 0.35}) 0%, rgba(0,0,0,${
                    activePanel && !isAufzuegeEmphasized ? 0.6 : 0.35
                  }) 100%)`,
                }}
              />

              <div className="relative h-full p-10 flex items-start justify-end">
                <div className="vss-split-card">
                  <h2 className="vss-split-title">Aufzüge</h2>
                  <div className="vss-split-subtitle" style={{ color: VSS_HOMEPAGE_COLORS.primary }}>
                    Bereich besuchen <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-4 sm:px-6 lg:px-8 py-3 bg-white text-[#40464f]">
          <div className="mx-auto max-w-7xl flex items-center justify-between text-xs">
            <p>
              Copyright &copy; <span className="font-medium">Vertical Service Solutions GmbH</span>
            </p>
            <p className="hidden sm:block">
              Developed by{' '}
              <a
                href="https://www.pixeldives.gr/en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80"
              >
                pixeldives.gr
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Hero
