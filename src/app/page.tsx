import Header from '@/components/Header'
import HeroSplit from '@/components/HeroSplit'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSplit />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}