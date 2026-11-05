import Reveal from '@/components/Reveal'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-primary-100 selection:text-primary">
      <Reveal />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
