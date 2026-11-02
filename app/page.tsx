'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Products from '@/components/Products'
import Courses from '@/components/Courses'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.classList.add('show')
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-white text-slate-900 selection:bg-primary-100 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Courses />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
