import Header from '@/components/Header'
import SplitShowcase from '@/components/SplitShowcase'
import Services from '@/components/Services'
import MobilfunkSection from '@/components/sections/mobilfunk-section'
import FahrstuhlSection from '@/components/sections/fahrstuhl-section'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SplitShowcase />
      <Services />
      <MobilfunkSection />
      <FahrstuhlSection />
      <CTA />
      <Footer />
    </main>
  )
}