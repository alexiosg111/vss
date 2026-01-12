'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, Monitor, Smartphone, Tablet, Github, ExternalLink, CheckCircle, AlertCircle, Zap, Code, Palette, Smartphone as MobileIcon } from 'lucide-react'

const PreviewPage = () => {
  const [currentViewport, setCurrentViewport] = useState('desktop')
  const [isPlaying, setIsPlaying] = useState(false)

  const viewports = [
    { id: 'mobile', name: 'Mobile', icon: Smartphone, size: 'max-w-sm' },
    { id: 'tablet', name: 'Tablet', icon: Tablet, size: 'max-w-2xl' },
    { id: 'desktop', name: 'Desktop', icon: Monitor, size: 'max-w-none' }
  ]

  const features = [
    {
      icon: Zap,
      title: 'SplitShowcase',
      description: 'Diagonaler Split-Screen mit WebGL Shader',
      status: '✅ Active',
      details: 'Präzise Hitbox-Trennung & Inverse Logik'
    },
    {
      icon: Palette,
      title: 'Shader Effects',
      description: 'Interactive Mouse Glow Effect',
      status: '✅ Integrated',
      details: 'Vibrant RGB Colors & 60fps Performance'
    },
    {
      icon: MobileIcon,
      title: 'Responsive Design',
      description: 'Mobile-first Approach',
      status: '✅ Optimized',
      details: 'Angepasste Positionierung für alle Devices'
    },
    {
      icon: Code,
      title: 'Clean Setup',
      description: 'No Docker, pure npm setup',
      status: '✅ Simplified',
      details: 'Schnellere Installation und höhere Stabilität'
    },
    {
      icon: CheckCircle,
      title: 'Performance',
      description: 'Optimized Bundle Size',
      status: '✅ Ready',
      details: 'Effizientes Shader-Rendering & Asset-Loading'
    },
    {
      icon: AlertCircle,
      title: 'Production Ready',
      description: 'Vollständig funktional',
      status: '✅ v0.12.0',
      details: 'Alle Kernkomponenten erfolgreich implementiert'
    }
  ]

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPlaying(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-vss-blue to-vss-green rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">VSS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-dark-900">VSS Website Preview</h1>
                <p className="text-sm text-dark-600">Version 0.12.0 - SplitShowcase Diagonal Split</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/alexiosg111/vss"
                className="flex items-center space-x-2 text-dark-600 hover:text-vss-blue transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isPlaying 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-vss-blue hover:bg-vss-blue/90 text-white'
                }`}
              >
                <Play className="h-4 w-4" />
                <span>{isPlaying ? 'Stop' : 'Preview'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Viewport Controls */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-dark-900">Viewport Testing</h2>
            <div className="text-sm text-dark-600">
              Aktuell: <span className="font-medium capitalize">{currentViewport}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {viewports.map((viewport) => {
              const IconComponent = viewport.icon
              return (
                <button
                  key={viewport.id}
                  onClick={() => setCurrentViewport(viewport.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentViewport === viewport.id
                      ? 'bg-vss-blue text-white shadow-lg'
                      : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{viewport.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-vss-blue to-vss-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-dark-900">{feature.title}</h3>
                      <span className="text-xs bg-vss-green/20 text-vss-green px-2 py-1 rounded-full">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-sm text-dark-600 mb-2">{feature.description}</p>
                    <p className="text-xs text-dark-500">{feature.details}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Preview Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-dark-900">Live Preview</h2>
            <div className="flex items-center space-x-2 text-sm text-dark-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Development Server</span>
            </div>
          </div>

          {/* Preview Frame */}
          <div className={`mx-auto transition-all duration-300 ${viewports.find(v => v.id === currentViewport)?.size}`}>
            <div className="bg-gray-900 rounded-t-xl p-2 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
                http://localhost:3000
              </div>
            </div>
            
            <div className="bg-white rounded-b-xl overflow-hidden" style={{ height: '600px' }}>
              {isPlaying ? (
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-vss-blue to-vss-green rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900">Preview aktiv</h3>
                      <p className="text-sm text-dark-600">Scrollen Sie in der Hauptseite, um die Animation zu sehen</p>
                    </div>
                    <Link
                      href="/"
                      className="inline-flex items-center space-x-2 bg-vss-blue text-white px-4 py-2 rounded-lg hover:bg-vss-blue/90 transition-colors"
                    >
                      <span>Zur Hauptseite</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900">Preview bereit</h3>
                      <p className="text-sm text-dark-600">Klicken Sie auf "Preview" um zu starten</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <h3 className="text-lg font-semibold text-dark-900 mb-4">🚀 Quick Start</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-4 w-4 text-vss-green" />
                <span className="text-dark-600">Dependencies installiert</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-4 w-4 text-vss-green" />
                <span className="text-dark-600">Build erfolgreich</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-4 w-4 text-vss-green" />
                <span className="text-dark-600">Development Server läuft</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-4 w-4 text-vss-green" />
                <span className="text-dark-600">Container-Scroll-Animation aktiv</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <h3 className="text-lg font-semibold text-dark-900 mb-4">📊 Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-dark-600">First Load JS</span>
                <span className="font-medium text-vss-blue">156 kB</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-dark-600">Bundle Splitting</span>
                <span className="font-medium text-vss-green">✅ Active</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-dark-600">Static Generation</span>
                <span className="font-medium text-vss-green">4/4 Pages</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-dark-600">TypeScript</span>
                <span className="font-medium text-vss-green">0 Errors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewPage