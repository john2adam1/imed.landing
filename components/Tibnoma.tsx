import { extras, tibnoma as t } from '@/lib/content'

const btnBase = 'inline-flex items-center gap-3 py-4 px-8 rounded-2xl font-black transition-all w-fit'

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Check({ className = '' }: { className?: string }) {
  return (
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${className}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function Tibnoma() {
  return (
    <section id={t.id} className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-tibnoma text-white py-16 sm:py-24">
        <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-tibnoma-light/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-tibnoma-dark blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[auto_1fr] gap-12 items-center">
          <div className="reveal justify-self-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl shadow-black/30 ring-4 ring-white/10 bg-white">
              <img src={t.logo} alt={t.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="reveal space-y-6 max-w-3xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
              {t.badge} · {t.name}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              {t.name} — {t.title}
            </h2>
            <p className="text-xl font-bold text-tibnoma-100">{t.tagline}</p>
            <div className="space-y-4">
              {t.intro.map((p) => (
                <p key={p} className="text-white/80 font-medium leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#tibnoma-offers" className={`${btnBase} bg-white text-tibnoma hover:bg-tibnoma-50`}>
                {t.booksCta}
              </a>
              <a
                href={t.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} border-2 border-white/40 text-white hover:bg-white/10`}
              >
                <TelegramIcon />
                {t.telegramCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="py-16 sm:py-20 bg-tibnoma-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="reveal">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{t.about.title}</h3>
            <p className="mt-3 text-lg font-bold text-tibnoma">{t.about.subtitle}</p>
          </div>
          <div className="reveal space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p
                key={p}
                className={
                  i === 0
                    ? 'text-[15px] font-bold text-slate-800 leading-relaxed border-l-4 border-tibnoma pl-4'
                    : 'text-[15px] font-medium text-slate-600 leading-relaxed pl-5'
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Offers */}
      <div id="tibnoma-offers" className="py-16 sm:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="reveal text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            {t.offers.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.offers.items.map((f) => (
              <article
                key={f.title}
                className="reveal bg-white rounded-[2rem] p-6 sm:p-7 border border-slate-100 shadow-card hover:border-tibnoma/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-tibnoma-50 flex items-center justify-center text-2xl mb-5">
                  {f.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{f.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-[15px]">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Authored books */}
      <div className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch bg-white rounded-[3rem] border border-tibnoma-100 shadow-card p-8 sm:p-10">
            <div className="flex flex-col">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                {extras.books.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed flex-grow">
                iMed Team jamoasi mualliflari tomonidan tayyorlangan tibbiy kitoblar.
              </p>
              <a
                href={extras.books.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} mt-8 bg-tibnoma text-white hover:bg-tibnoma-dark`}
              >
                <span aria-hidden>🛒</span>
                {extras.books.cta}
              </a>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 content-start">
              {extras.books.items.map((book) => (
                <li
                  key={book}
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-tibnoma-50 border border-tibnoma-100 font-bold text-slate-800"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-tibnoma shrink-0" />
                  {book}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="reveal text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            {t.why.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.items.map((w) => (
              <div
                key={w.title}
                className="reveal bg-white rounded-[2rem] p-6 sm:p-7 border border-slate-100 shadow-soft border-t-4 border-t-tibnoma"
              >
                <h4 className="text-lg font-black text-slate-900 mb-2">{w.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-[15px]">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="reveal text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            {t.audience.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {t.audience.items.map((a) => (
              <div
                key={a.title}
                className="reveal flex items-start gap-4 p-6 rounded-2xl bg-tibnoma-50 border border-tibnoma-100"
              >
                <Check className="mt-0.5 bg-tibnoma text-white" />
                <div>
                  <h4 className="font-black text-slate-900 mb-1">{a.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed text-[15px]">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order steps */}
      <div className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-slate-900 rounded-[3rem] p-8 sm:p-12 text-white shadow-2xl">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-tibnoma/50 blur-[100px]" />
            <h3 className="relative text-3xl sm:text-4xl font-black text-center mb-10">{t.order.title}</h3>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.order.steps.map((s, i) => (
                <div key={s.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="w-11 h-11 rounded-full bg-tibnoma-light text-slate-900 font-black flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-black text-lg mb-2">{s.title}</h4>
                  <p className="text-white/70 font-medium leading-relaxed text-[15px]">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal rounded-[3rem] bg-tibnoma text-white text-center p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-tibnoma-light/20 blur-[100px]" />
            <div className="relative max-w-3xl mx-auto space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-white/10 bg-white">
                <img src={t.logo} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black leading-tight">{t.final.title}</h3>
              <p className="text-white/80 font-medium leading-relaxed">{t.final.text}</p>
              <p className="font-black text-tibnoma-100">{t.final.motto}</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                  href={t.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} bg-white text-tibnoma hover:bg-tibnoma-50`}
                >
                  <TelegramIcon />
                  {t.final.telegramCta}
                </a>
                <a
                  href={t.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} border-2 border-white/40 text-white hover:bg-white/10`}
                >
                  <InstagramIcon />
                  {t.final.instagramCta}
                </a>
              </div>
              <p className="text-sm font-bold text-white/60 pt-2">{t.final.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
