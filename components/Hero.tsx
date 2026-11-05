import { hero, products, site } from '@/lib/content'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-16 lg:pt-28 lg:pb-24">
      {/* background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at 30% 30%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 30% 30%, black 20%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] rounded-full bg-primary/10 blur-[140px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[36rem] h-[36rem] rounded-full bg-primary/5 blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
        {/* left */}
        <div className="reveal">
          <div className="inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-white border border-primary/15 shadow-soft text-sm font-bold text-slate-800 mb-8">
            <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
              <img src={site.logo} alt="" className="w-5 h-5 object-contain" />
            </span>
            {hero.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
            {hero.titleBefore}
            <br />
            <span className="relative inline-block text-primary">
              {hero.titleAccent}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden
              >
                <path d="M2 8c60-8 120-8 296-2" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            {hero.titleAfter}
          </h1>

          <p className="mt-8 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-xl">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl bg-primary text-white font-black shadow-xl shadow-primary/25 hover:bg-primary-600 hover:-translate-y-0.5 transition-all"
            >
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center px-9 py-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-800 font-black hover:border-primary hover:text-primary transition-all"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {hero.stats.map((s) => (
              <div key={s.label} className="border-l-4 border-primary pl-4">
                <dt className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">{s.value}</dt>
                <dd className="mt-1 text-xs sm:text-sm font-bold text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: loyihalar */}
        <div id={products.id} className="reveal relative scroll-mt-28">
          <div className="absolute -inset-4 bg-primary/10 rounded-[3.5rem] rotate-2 blur-2xl" />

          <div className="relative rounded-[3rem] bg-slate-950 p-6 sm:p-8 shadow-2xl shadow-primary/20 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/40 blur-[90px]" />
            <p className="relative text-[11px] uppercase tracking-widest font-black text-white/50 mb-5">
              {hero.projectsLabel}
            </p>

            <ul className="relative space-y-3">
              {products.items.map((p) => (
                <li
                  key={p.name}
                  className="rounded-3xl bg-white/5 border border-white/10 hover:border-primary/60 p-4 transition-all"
                >
                  <a href={p.href} className="group flex items-center gap-4">
                    <span
                      className={`w-16 h-16 overflow-hidden bg-white flex items-center justify-center shrink-0 ${
                        p.logoShape === 'circle' ? 'rounded-full' : 'rounded-[22%]'
                      }`}
                    >
                      <img src={p.logo} alt="" className="w-full h-full object-contain" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="font-black text-lg text-white">{p.name}</span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                            p.statusTone === 'live' ? 'bg-emerald-400/15 text-emerald-300' : 'bg-amber-400/15 text-amber-300'
                          }`}
                        >
                          {p.status}
                        </span>
                      </span>
                      <span className="block text-sm font-medium text-white/60 line-clamp-2">{p.description}</span>
                    </span>
                    <span
                      className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-primary text-white flex items-center justify-center shrink-0 transition-colors"
                      aria-hidden
                    >
                      →
                    </span>
                  </a>

                  {p.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pl-20">
                      {p.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white/80 hover:bg-primary hover:text-white transition-colors"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <p className="relative mt-6 text-sm font-bold text-white/50">{site.name} MCHJ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
