'use client'

import { useState } from 'react'
import { nav, site } from '@/lib/content'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <img src={site.logo} alt={site.name} className="w-14 h-14 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-slate-900 leading-none group-hover:text-primary transition-colors">
                {site.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary mt-1">
                {site.tagline}
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-black text-slate-500 hover:text-primary transition-colors uppercase tracking-wide relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://imedteam.uz"
              className="hidden lg:inline-flex px-6 py-2.5 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-primary transition-all shadow-lg shadow-slate-900/10 active:scale-95 whitespace-nowrap"
            >
              Platformaga kirish
            </a>
            <button
              type="button"
              className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menyu"
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

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-bold text-slate-700 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://imedteam.uz"
            className="block text-center py-3 rounded-2xl bg-slate-900 text-white font-bold"
          >
            Platformaga kirish
          </a>
        </div>
      )}
    </header>
  )
}
