import AboutSection from '@/components/AboutSection'
import AmbientBackground from '@/components/AmbientBackground'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductsSection'
import ValuesSection from '@/components/ValuesSection'

function App() {
  return (
    <div className="relative isolate overflow-hidden bg-black text-white">
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ValuesSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
