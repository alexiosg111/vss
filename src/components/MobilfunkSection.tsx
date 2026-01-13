'use client'

import React from 'react'
import { Zap, Signal, Wifi, Radio, TowerControl, Network } from 'lucide-react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

const MobilfunkSection = () => {
  return (
    <section id="mobilfunk" className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-vss-green/20">
      <div className="flex flex-col overflow-hidden pb-[500px] pt-[200px]">
        <ContainerScroll
          titleComponent={
            <>
              {/* Überschrift über dem Tablet */}
              <div className="mb-12">
                <div className="inline-flex items-center space-x-2 bg-vss-green/20 backdrop-blur-sm border border-vss-green/30 rounded-full px-4 py-2 shadow-lg mb-6">
                  <Zap className="h-4 w-4 text-vss-green" />
                  <span className="text-sm font-medium text-white">Mobilfunk-Infrastruktur</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Telekommunikationsinfrastruktur
                  <br />
                  <span className="text-gradient-vss">
                    mit uns in die digitale Zukunft
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Moderne 5G-Netzwerke, Signalverstärkung und Indoor Coverage für optimale Konnektivität
                </p>
              </div>
            </>
          }
        >
          {/* Tablet Content - Mobilfunk Showcase */}
          <div className="h-full w-full relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-vss-green/20 via-vss-blue/20 to-vss-orange/20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 h-full p-8 md:p-12 flex items-center justify-center">
              <div className="max-w-6xl mx-auto w-full">
                
                {/* Mobilfunk Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  
                  {/* 5G Network */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-vss-green/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-vss-green to-vss-green/80 rounded-xl flex items-center justify-center shadow-lg mb-4">
                      <Signal className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">5G-Netzwerk</h3>
                    <p className="text-gray-300 text-sm">
                      Neueste Generation mobiler Netzwerktechnologie für höchste Geschwindigkeiten
                    </p>
                  </div>

                  {/* Indoor Coverage */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-vss-green/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-vss-blue to-vss-blue/80 rounded-xl flex items-center justify-center shadow-lg mb-4">
                      <Wifi className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Indoor Coverage</h3>
                    <p className="text-gray-300 text-sm">
                      Optimale Netzabdeckung in Gebäuden und geschlossenen Räumen
                    </p>
                  </div>

                  {/* Signalverstärkung */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-vss-green/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-vss-orange to-vss-orange/80 rounded-xl flex items-center justify-center shadow-lg mb-4">
                      <TowerControl className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Signalverstärkung</h3>
                    <p className="text-gray-300 text-sm">
                      Professionelle Repeater und Verstärker für maximale Reichweite
                    </p>
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">Technische Leistungen</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-vss-green rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-white">Netzwerkplanung</h4>
                          <p className="text-sm text-gray-300">Detaillierte Standortanalyse und Frequenzplanung</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-vss-green rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-white">Installation</h4>
                          <p className="text-sm text-gray-300">Professionelle Montage und Inbetriebnahme</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-vss-green rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-white">Optimierung</h4>
                          <p className="text-sm text-gray-300">Kontinuierliche Netzwerkoptimierung und Monitoring</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-vss-blue rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-white">Wartung</h4>
                          <p className="text-sm text-gray-300">24/7 Support und präventive Wartung</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-vss-blue rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-white">Sicherheit</h4>
                          <p className="text-sm text-gray-300">Verschlüsselte Verbindungen und Compliance</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-vss-blue rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-white">Skalierung</h4>
                          <p className="text-sm text-gray-300">Flexible Erweiterung nach Bedarf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  <button className="group bg-gradient-to-r from-vss-green to-vss-blue text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center space-x-2">
                    <span>Mobilfunk-Beratung anfragen</span>
                    <Zap className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}

export default MobilfunkSection
