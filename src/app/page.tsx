import Header from '@/components/Header'
import SplitShowcase from '@/components/SplitShowcase'
import { HeroScrollDemo } from '@/components/hero-scroll-demo'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SplitShowcase />
      <HeroScrollDemo />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}