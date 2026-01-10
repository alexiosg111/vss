import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Settings, Shield, Zap } from 'lucide-react'
import { HeroScrollDemo } from '@/components/hero-scroll-demo'

const MobilfunkSection = () => {
  const highlights = [
    {
      title: 'Planung & Funkfeldanalyse',
      description:
        'Wir analysieren Abdeckung, Gebäudestruktur und Anforderungen – als Basis für ein sauberes Konzept.',
    },
    {
      title: 'Implementierung & Inbetriebnahme',
      description:
        'Von Indoor-Coverage bis Campus-Lösung: Installation, Messung, Abnahme und Dokumentation aus einer Hand.',
    },
    {
      title: 'Monitoring & Optimierung',
      description:
        'Kontinuierliche Qualitätssicherung, Troubleshooting und Performance-Tuning – für dauerhaft stabilen Empfang.',
    },
  ]

  const scope = [
    '5G / LTE Indoor Coverage (z. B. DAS, Small Cells)',
    'Signalverstärkung & Repeater-Konzepte',
    'Standortplanung, Messungen & Abnahmetests',
    'Netzwerk-Monitoring & Störungsbehebung',
    'Skalierbare Erweiterungen für wachsende Anforderungen',
  ]

  return (
    <section
      id="mobilfunk"
      className="section-padding bg-gradient-to-br from-white via-gray-50 to-green-50/40 scroll-mt-24"
    >
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg mb-8">
            <Zap className="h-4 w-4 text-vss-green" />
            <span className="text-sm font-medium text-dark-800">Mobilfunk-Infrastruktur</span>
          </div>

          <HeroScrollDemo />

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card p-8 hover:shadow-vss-green transition-all duration-500 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-dark-900 mb-3">{item.title}</h3>
                <p className="text-dark-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-vss-green to-vss-green/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900">Leistungsumfang</h3>
                  <p className="text-dark-600">Was Sie von uns erwarten können</p>
                </div>
              </div>

              <div className="space-y-3">
                {scope.map((line) => (
                  <div key={line} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-vss-green mt-0.5 flex-shrink-0" />
                    <span className="text-dark-700">{line}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  href="#kontakt"
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-vss-green to-vss-green/80 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Mobilfunk-Lösung anfragen</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-vss-blue to-vss-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900">Warum VSS?</h3>
                  <p className="text-dark-600">Sicher, messbar, dokumentiert</p>
                </div>
              </div>

              <div className="space-y-4 text-dark-700">
                <p>
                  Unsere Mobilfunk-Sparte ist darauf ausgelegt, reale Gebäudeanforderungen präzise abzubilden: von der
                  Vor-Ort-Messung bis zum laufenden Monitoring.
                </p>
                <p>
                  Ergebnis: stabile Abdeckung dort, wo sie gebraucht wird – inklusive sauberer Dokumentation für
                  Betreiber, IT und Facility.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  'Planung nach Bedarf',
                  'Messbar & nachvollziehbar',
                  'Skalierbar für Wachstum',
                  'Sicherer Betrieb',
                ].map((badge) => (
                  <div
                    key={badge}
                    className="bg-white/80 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-dark-800"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobilfunkSection
