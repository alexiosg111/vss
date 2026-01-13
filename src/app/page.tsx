import Header from '@/components/Header'
import SplitShowcase from '@/components/SplitShowcase'
import Services from '@/components/Services'
import ImageGallery from '@/components/ImageGallery'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SplitShowcase />
      <Services />
      <ImageGallery />
      <CTA />
      <Footer />
    </main>
  )
}