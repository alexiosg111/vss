import Header from '@/components/Header'
import SplitShowcase from '@/components/SplitShowcase'
import MobilfunkSection from '@/components/MobilfunkSection'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SplitShowcase />
      <MobilfunkSection />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}