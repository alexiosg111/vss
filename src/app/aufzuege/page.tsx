'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Wrench, Clock, Shield, CheckCircle } from 'lucide-react';

const AufzuegePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80"
        bgImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
        title="Professionelle Aufzüge"
        date="Zuverlässig & Sicher"
        scrollToExpand="Scrollen zum Erkunden"
        textBlend
      >
        <div className='max-w-4xl mx-auto space-y-8'>
          <h2 className='text-4xl font-bold mb-6 text-slate-900 dark:text-white'>
            Moderne Aufzugslösungen für jedes Gebäude
          </h2>
          
          <div className='space-y-6'>
            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3'>
                <Building2 className='w-7 h-7 text-blue-600' />
                Unsere Leistungen
              </h3>
              <ul className='space-y-3 text-lg text-slate-700 dark:text-slate-300'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
                  <span><strong>Installation:</strong> Fachgerechte Montage neuer Aufzugsanlagen nach neuesten Standards</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
                  <span><strong>Modernisierung:</strong> Upgrade bestehender Systeme mit modernster Technologie</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
                  <span><strong>Wartung:</strong> Regelmäßige Inspektionen und präventive Instandhaltung</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-6 h-6 text-green-600 flex-shrink-0 mt-1' />
                  <span><strong>Reparatur:</strong> 24/7 Notdienst bei Störungen und Ausfällen</span>
                </li>
              </ul>
            </div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3'>
                <Shield className='w-7 h-7 text-blue-600' />
                Sicherheit & Qualität
              </h3>
              <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed'>
                Alle unsere Aufzugsanlagen entsprechen den höchsten Sicherheitsstandards und sind TÜV-zertifiziert. 
                Wir verwenden ausschließlich hochwertige Komponenten führender Hersteller und garantieren eine 
                zuverlässige Funktion über viele Jahre hinweg.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3'>
                <Clock className='w-7 h-7 text-blue-600' />
                Schneller Service
              </h3>
              <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed'>
                Bei Störungen sind wir innerhalb von 2 Stunden vor Ort. Unser erfahrenes Techniker-Team steht 
                rund um die Uhr bereit, um Probleme schnell und effizient zu lösen. Minimale Ausfallzeiten sind 
                für uns selbstverständlich.
              </p>
            </div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3'>
                <Wrench className='w-7 h-7 text-blue-600' />
                Technische Spezifikationen
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-slate-700 dark:text-slate-300'>
                <div>
                  <strong>Tragkraft:</strong> 320 kg bis 2.500 kg
                </div>
                <div>
                  <strong>Geschwindigkeit:</strong> bis 2,5 m/s
                </div>
                <div>
                  <strong>Maximale Höhe:</strong> bis 150 Meter
                </div>
                <div>
                  <strong>Kabinengröße:</strong> individuell anpassbar
                </div>
                <div>
                  <strong>Energieeffizienz:</strong> Klasse A+++
                </div>
                <div>
                  <strong>Lärmschutz:</strong> < 35 dB
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg shadow-xl text-white'>
              <h3 className='text-3xl font-bold mb-4'>
                Kontaktieren Sie uns
              </h3>
              <p className='text-xl mb-6'>
                Interessiert an einer unverbindlichen Beratung? Unsere Experten helfen Ihnen gerne weiter.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a 
                  href="tel:+491234567890" 
                  className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center'
                >
                  Jetzt anrufen
                </a>
                <a 
                  href="mailto:info@vss-aufzuege.de" 
                  className='bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center'
                >
                  E-Mail senden
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
      <Footer />
    </>
  );
};

export default AufzuegePage;
