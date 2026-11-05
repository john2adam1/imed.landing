'use client'

import { useEffect, useState } from 'react'
import { nav, site, hero } from '@/lib/content'

export default function Header({ home = true }: { home?: boolean }) {
  const link = (href: string) => (home ? href : `/${href}`)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  // Aktiv bo‘limni kuzatish
  useEffect(() => {
    if (!home) return
    const ids = nav.map((n) => n.href.slice(1))
    const onScroll = () => {
      const y = window.scrollY + 140
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(`#${current}`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [home])

  // Menyu ochiq: Escape bilan yopish, sahifa scrollini qulflash, katta ekranda avtomatik yopish
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between gap-4">
          <a href={home ? '#home' : '/'} onClick={close} className="flex items-center gap-3 group min-w-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img src={site.logo} alt={site.name} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-primary transition-colors truncate">
                {site.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary mt-1">
                {site.tagline}
              </span>
            </div>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 xl:gap-2">
            {nav.map((item) => {
              const isActive = home && active === item.href
              return (
                <a
                  key={item.href}
                  href={link(item.href)}
                  className={`px-2.5 lg:px-3 xl:px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide whitespace-nowrap transition-colors ${
                    isActive ? 'bg-primary-50 text-primary' : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={link(hero.secondaryCta.href)}
              className="hidden xl:inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-wide hover:bg-primary-600 transition-colors"
            >
              Aloqa
            </a>
            <button
              type="button"
              className="md:hidden w-11 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {open ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil / planshet menyu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full h-screen bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden
      />
      <div
        id="mobile-menu"
        className={`md:hidden absolute inset-x-0 top-full bg-white border-b border-slate-100 shadow-2xl shadow-slate-900/10 transition-all duration-300 origin-top ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid gap-1 sm:grid-cols-2 sm:gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {nav.map((item) => {
            const isActive = home && active === item.href
            return (
              <a
                key={item.href}
                href={link(item.href)}
                onClick={close}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-black text-base transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary'
                    : 'text-slate-800 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {item.label}
                <span aria-hidden className="text-slate-300">→</span>
              </a>
            )
          })}
          <a
            href={link(hero.secondaryCta.href)}
            onClick={close}
            className="sm:col-span-2 mt-2 inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary-600 transition-colors"
          >
            {hero.secondaryCta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
