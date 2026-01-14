import Header from '@/components/Header'
import SplitShowcase from '@/components/SplitShowcase'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Mobilfunk from '@/components/Mobilfunk'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SplitShowcase />
      <Services />
            <Mobilfunk />
      <CTA />
      <Footer />
    </main>
  )
}
