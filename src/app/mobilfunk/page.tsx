import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Signal, Antenna, Building2, Activity, Shield, Phone } from 'lucide-react'

const mobilfunkImages = [
  {
    src: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8f?auto=format&fit=crop&w=1400&q=80',
    alt: '5G Antenne auf Dach in urbaner Umgebung',
    title: '5G Antennen & Standorte',
    description: 'Planung, Standortanalyse und fachgerechte Installation moderner Funktechnik.'
  },
  {
    src: 'https://images.unsplash.com/photo-1581091870627-3a5b57f0f1e2?auto=format&fit=crop&w=1400&q=80',
    alt: 'Techniker arbeitet an Mobilfunk-Infrastruktur',
    title: 'Implementierung & Rollout',
    description: 'Effiziente Umsetzung mit dokumentierten Prozessen und Qualitätskontrollen.'
  },
  {
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Netzwerk Monitoring und Datenvisualisierung',
    title: 'Monitoring & Optimierung',
    description: 'Messungen, KPI-Auswertung und Optimierung für stabile Abdeckung.'
  },
  {
    src: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1400&q=80',
    alt: 'Router und Indoor-Netzwerktechnik für Coverage',
    title: 'Indoor Coverage',
    description: 'Konzeption und Integration für gleichmäßigen Empfang in Gebäuden.'
  },
  {
    src: 'https://images.unsplash.com/photo-1526378722439-7d6db0b2f8d3?auto=format&fit=crop&w=1400&q=80',
    alt: 'Netzwerk-Knotenpunkte und Glasfaser-/Backhaul-Infrastruktur',
    title: 'Backhaul & Infrastruktur',
    description: 'Saubere Anbindung, Redundanz-Konzepte und stabile Netzanbindung.'
  }
]

const features = [
  {
    icon: Antenna,
    title: 'Planung & Site-Survey',
    description: 'Funkfeldanalyse, Standortbewertung, Umsetzungskonzept und Zeitplan.'
  },
  {
    icon: Signal,
    title: '5G / LTE Ausbau',
    description: 'Aufbau und Erweiterung von Mobilfunkstandorten inkl. professioneller Dokumentation.'
  },
  {
    icon: Building2,
    title: 'Indoor Coverage',
    description: 'Konzeption für Hallen, Bürogebäude und kritische Bereiche (z. B. Technikräume).' 
  },
  {
    icon: Activity,
    title: 'Messungen & Optimierung',
    description: 'Drive-/Walk-Tests, KPI-Monitoring, Parameter-Optimierung und Abnahme.'
  },
  {
    icon: Shield,
    title: 'Qualität & Sicherheit',
    description: 'Standardisierte Prozesse, saubere Verkabelung, klare Abnahme- und Prüfprotokolle.'
  }
]

export default function MobilfunkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      {/* Top Navigation */}
      <div className="container-padding">
        <div className="max-w-7xl mx-auto pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dark-700 hover:text-dark-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding pt-10">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg mb-6">
                  <Signal className="h-4 w-4 text-vss-green" />
                  <span className="text-sm font-medium text-dark-800">Mobilfunk-Infrastruktur</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                  MOBILFUNK
                  <span className="block text-gradient-vss">Planung. Ausbau. Coverage.</span>
                </h1>

                <p className="text-lg md:text-xl text-dark-600 leading-relaxed max-w-2xl">
                  Wir realisieren moderne Mobilfunk-Infrastruktur – von der Standortplanung über den Rollout bis zur
                  messbaren Optimierung. Mobile-first gedacht, auf Tablets besonders übersichtlich.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/#kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Kontakt aufnehmen</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/#services" className="btn-outline inline-flex items-center justify-center gap-2">
                    <span>Alle Services</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
                  {[
                    '5G/LTE Standorte & Erweiterungen',
                    'Indoor Coverage Konzepte',
                    'Messungen & KPI-Optimierung',
                    'Dokumentation & Abnahme'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-vss-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-dark-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image (Tablet-friendly) */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200/60 bg-white">
                  <img
                    src={mobilfunkImages[0].src}
                    alt={mobilfunkImages[0].alt}
                    className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden md:block">
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-5">
                    <div className="text-sm font-semibold text-dark-900">Tablet-optimiert</div>
                    <div className="text-sm text-dark-600">2–3 Spalten Galerie + Seitentext ab 768px</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="card p-6 hover:shadow-vss-green transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vss-green to-vss-green/70 flex items-center justify-center shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-dark-900">{feature.title}</h3>
                        <p className="text-sm text-dark-600 mt-1 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8">
                <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">Bilder & Einblicke</h2>
                    <p className="text-dark-600">Professionelle Beispiele aus Mobilfunk-Infrastruktur & Coverage.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {mobilfunkImages.map((img) => (
                    <figure
                      key={img.title}
                      className="group rounded-2xl overflow-hidden bg-white border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <figcaption className="p-4">
                        <div className="text-sm font-bold text-dark-900">{img.title}</div>
                        <div className="text-sm text-dark-600 mt-1">{img.description}</div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <aside className="md:col-span-4">
                <div className="card p-6 sticky top-6">
                  <h3 className="text-xl font-bold mb-3">Service-Überblick</h3>
                  <p className="text-sm text-dark-600 leading-relaxed">
                    Wir arbeiten strukturiert, nachvollziehbar und messbar – von der Vorbereitung bis zur Abnahme.
                    Ideal für Betreiber, Industrieareale und Objekte mit kritischer Indoor-Abdeckung.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      'Klare Projektphasen & dokumentierte Abnahmen',
                      'Schnelle Rollout-Prozesse mit Qualitätschecks',
                      'Messungen vor/nach Umsetzung zur Wirksamkeit',
                      'Optimierung mit Blick auf Stabilität & Kapazität'
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-vss-green mt-0.5" />
                        <span className="text-sm text-dark-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <Link href="/#kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
                      <span>Projekt besprechen</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link href="/" className="btn-outline inline-flex items-center justify-center gap-2">
                      <span>Zurück zur Startseite</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-dark-900 text-white p-8 md:p-10 border border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Bereit für bessere Abdeckung?</h3>
                  <p className="text-gray-300 mt-1">
                    Lass uns über Ihre Anforderungen sprechen – schnell, strukturiert und mit messbaren Ergebnissen.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/#kontakt" className="btn-white inline-flex items-center justify-center gap-2">
                    <span>Kontakt</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link href="/" className="btn-outline-white inline-flex items-center justify-center gap-2">
                    <span>Startseite</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
