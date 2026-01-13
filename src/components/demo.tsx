"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { ArrowRight, Zap, Cog, Shield, Users } from "lucide-react";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Telekommunikationsinfrastruktur
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gradient-vss">
                mit uns in die digitale Zukunft
              </span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Innovative Technologie-Lösungen für Aufzüge und Mobilfunk-Infrastruktur
            </p>
          </>
        }
      >
        <div className="h-full w-full relative overflow-hidden">
          {/* VSS Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-vss-blue/10 via-vss-green/10 to-vss-orange/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230284c7%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          </div>

          {/* VSS Service Showcase Grid */}
          <div className="relative z-10 h-full p-8 md:p-12 flex items-center justify-center">
            <div className="max-w-6xl mx-auto">
              
              {/* Service Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                
                {/* Aufzüge Card */}
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-vss transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-vss-blue to-vss-blue/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-vss transition-all duration-300 transform group-hover:scale-110">
                      <Cog className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-dark-900 mb-2">Aufzug-Systeme</h3>
                      <p className="text-vss-blue font-semibold">Moderne Liftsysteme</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-vss-blue rounded-full"></div>
                      <span className="text-dark-600">Neubau & Modernisierung</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-vss-blue rounded-full"></div>
                      <span className="text-dark-600">24/7 Wartung & Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-vss-blue rounded-full"></div>
                      <span className="text-dark-600">Sicherheitsprüfungen</span>
                    </div>
                  </div>
                </div>

                {/* Mobilfunk Card */}
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-vss-green transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-vss-green to-vss-green/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-vss-green transition-all duration-300 transform group-hover:scale-110">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-dark-900 mb-2">Mobilfunk-Infrastruktur</h3>
                      <p className="text-vss-green font-semibold">Netzwerk-Lösungen</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-vss-green rounded-full"></div>
                      <span className="text-dark-600">5G-Netzwerk Implementierung</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-vss-green rounded-full"></div>
                      <span className="text-dark-600">Signalverstärkung</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-vss-green rounded-full"></div>
                      <span className="text-dark-600">Indoor & Outdoor Coverage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <h3 className="text-2xl font-bold text-dark-900 text-center mb-8">Warum VSS wählen?</h3>
                
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-vss-blue to-vss-green rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-2">Zuverlässigkeit</h4>
                    <p className="text-sm text-dark-600">Bewährte Technologien und erfahrene Techniker</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-vss-green to-vss-orange rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-2">Expertise</h4>
                    <p className="text-sm text-dark-600">15+ Jahre Branchenerfahrung</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-vss-orange to-vss-blue rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark-900 mb-2">Innovation</h4>
                    <p className="text-sm text-dark-600">Modernste Technologien und Lösungen</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <button className="group bg-gradient-to-r from-vss-blue to-vss-green text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 mx-auto">
                  <span>Kostenlose Beratung anfordern</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}