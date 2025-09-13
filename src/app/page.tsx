import About from '@/components/about'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import MarqueHeader from '@/components/marque'

export default function Home() {
  return (
    <>
      <MarqueHeader />
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </>
  )
}
