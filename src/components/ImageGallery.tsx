'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Cog, Signal, Building2 } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: 'mobilfunk' | 'fahrstuhl'
}

const ImageGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobilfunk' | 'fahrstuhl'>('all')

  const galleryImages: GalleryImage[] = [
    // Mobilfunk Images
    {
      src: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8f?auto=format&fit=crop&w=800&q=80',
      alt: '5G Antenne und Mobilfunk-Infrastruktur',
      title: '5G Antennen-Installation',
      category: 'mobilfunk'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091870627-3a5b57f0f1e2?auto=format&fit=crop&w=800&q=80',
      alt: 'Netzwerk-Infrastruktur und Indoor Coverage',
      title: 'Indoor-Netzwerk Implementierung',
      category: 'mobilfunk'
    },
    {
      src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      alt: 'Monitoring und Signalanalyse',
      title: 'Netzwerk-Monitoring & Analytics',
      category: 'mobilfunk'
    },
    {
      src: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80',
      alt: 'Router und Indoor Coverage Equipment',
      title: 'Indoor Coverage Systeme',
      category: 'mobilfunk'
    },
    // Fahrstuhl Images
    {
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
      alt: 'Moderner Aufzug in Gebäude',
      title: 'Moderne Aufzug-Installation',
      category: 'fahrstuhl'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094651181-35942459ef62?auto=format&fit=crop&w=800&q=80',
      alt: 'Wartung und Service am Aufzug',
      title: 'Professionelle Aufzug-Wartung',
      category: 'fahrstuhl'
    },
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      alt: 'Aufzug Steuerungssystem',
      title: 'Aufzug-Steuerung & Automation',
      category: 'fahrstuhl'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      alt: 'Aufzug-Modernisierung',
      title: 'Aufzug-Modernisierung',
      category: 'fahrstuhl'
    }
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg mb-6">
              <Building2 className="h-4 w-4 text-vss-blue" />
              <span className="text-sm font-medium text-dark-800">Unsere Projekte</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              Bilder-Galerie
              <span className="block text-gradient-vss">Projekte & Infrastruktur</span>
            </h2>
            
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Professionelle Einblicke in unsere Projekte – von Mobilfunk-Infrastruktur bis zu modernen Aufzug-Systemen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-vss-blue to-vss-green text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 text-dark-700 hover:border-vss-blue'
              }`}
            >
              Alle Projekte
            </button>
            <button
              onClick={() => setActiveFilter('mobilfunk')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                activeFilter === 'mobilfunk'
                  ? 'bg-gradient-to-r from-vss-green to-vss-green/80 text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 text-dark-700 hover:border-vss-green'
              }`}
            >
              <Signal className="h-4 w-4" />
              Mobilfunk
            </button>
            <button
              onClick={() => setActiveFilter('fahrstuhl')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                activeFilter === 'fahrstuhl'
                  ? 'bg-gradient-to-r from-vss-blue to-vss-blue/80 text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 text-dark-700 hover:border-vss-blue'
              }`}
            >
              <Cog className="h-4 w-4" />
              Aufzüge
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredImages.map((image, index) => {
              const Icon = image.category === 'mobilfunk' ? Zap : Cog
              const colorClass = image.category === 'mobilfunk' 
                ? 'from-vss-green to-vss-green/80' 
                : 'from-vss-blue to-vss-blue/80'
              
              return (
                <div
                  key={`${image.category}-${index}`}
                  className="group card overflow-hidden hover:shadow-vss transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-64 bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${colorClass} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                        <Icon className="h-3 w-3" />
                        <span className="capitalize">{image.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark-900 group-hover:text-dark-800 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-sm text-dark-600 mt-2">
                      {image.alt}
                    </p>
                    
                    <div className="mt-4">
                      <Link 
                        href={image.category === 'mobilfunk' ? '/mobilfunk' : '#aufzuge'}
                        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                      >
                        <span>Mehr erfahren</span>
                        <ArrowRight className={`h-4 w-4 ${image.category === 'mobilfunk' ? 'text-vss-green' : 'text-vss-blue'}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/mobilfunk"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-vss-green to-vss-green/80 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Signal className="h-5 w-5" />
                <span>Mobilfunk-Details</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/#services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-vss-blue to-vss-blue/80 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Cog className="h-5 w-5" />
                <span>Aufzug-Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="#kontakt"
                className="btn-outline inline-flex items-center gap-2 justify-center"
              >
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
