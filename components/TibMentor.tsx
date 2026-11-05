import { courses, extras, tibmentor as t } from '@/lib/content'

const btnBase = 'inline-flex items-center gap-3 py-4 px-8 rounded-2xl font-black transition-all w-fit'

function Check({ className = '' }: { className?: string }) {
  return (
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${className}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

function StoreButton({
  href,
  hint,
  label,
  icon,
}: {
  href: string
  hint: string
  label: string
  icon: 'apple' | 'android'
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3.5 bg-black/60 hover:bg-black text-white rounded-2xl font-bold flex items-center gap-4 border border-white/15 transition-all active:scale-95"
    >
      {icon === 'apple' ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="iOS"
          className="w-7 h-7 brightness-0 invert"
        />
      ) : (
        <img src="https://www.vectorlogo.zone/logos/android/android-icon.svg" alt="Android" className="w-7 h-7" />
      )}
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{hint}</span>
        <span className="text-lg font-extrabold tracking-tight">{label}</span>
      </div>
    </a>
  )
}

export default function TibMentor() {
  return (
    <section id={t.id} className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-tibmentor-ink via-tibmentor-dark to-tibmentor text-white py-16 sm:py-24">
        <div className="absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full bg-tibmentor-light/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-tibmentor-violet/30 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="reveal space-y-6 max-w-3xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
              {t.badge} · {t.name}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">{t.title}</h2>
            <p className="text-xl font-bold text-tibmentor-100">{t.tagline}</p>
            <div className="space-y-4">
              {t.intro.map((p) => (
                <p key={p} className="text-white/80 font-medium leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={t.siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} bg-white text-tibmentor hover:bg-tibmentor-50`}
              >
                {t.siteCta}
              </a>
            </div>

            <div className="pt-6 space-y-4">
              <p className="font-bold text-white/90">{t.appHint}</p>
              <div className="flex flex-wrap gap-4">
                <StoreButton href={t.ios.href} hint={t.ios.hint} label={t.ios.label} icon="apple" />
                <StoreButton href={t.android.href} hint={t.android.hint} label={t.android.label} icon="android" />
              </div>
            </div>
          </div>

          <div className="reveal justify-self-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-[2.5rem] bg-white shadow-2xl shadow-black/30 ring-4 ring-white/10 flex items-center justify-center p-4">
              <img src={t.logo} alt={t.name} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 sm:py-20 bg-tibmentor-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="reveal text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            {t.features.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((f) => (
              <article
                key={f.title}
                className="reveal bg-white rounded-[2rem] p-6 sm:p-7 border border-slate-100 shadow-card hover:border-tibmentor/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-tibmentor-50 flex items-center justify-center text-2xl mb-5">
                  {f.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{f.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-[15px]">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Courses */}
      <div id={courses.id} className="py-16 sm:py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{courses.title}</h3>
            <p className="text-slate-500 mt-3 font-medium">{courses.subtitle}</p>
          </div>

          <div className="grid gap-4">
            {courses.groups.map((group) => (
              <details
                key={group.title}
                className="reveal group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-soft open:border-tibmentor/30 transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 select-none">
                  <span className="font-bold text-lg text-slate-900">
                    {group.title}
                    <span className="ml-3 text-sm font-bold text-slate-400">{group.items.length} ta</span>
                  </span>
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 group-open:rotate-45 group-open:bg-tibmentor group-open:text-white transition-all duration-300">
                    +
                  </span>
                </summary>
                <ul className="pt-4 mt-4 border-t border-slate-100 text-slate-600 text-sm font-medium list-disc pl-5 space-y-2 marker:text-tibmentor md:columns-2 md:gap-x-10">
                  {group.items.map((item) => (
                    <li key={item} className="break-inside-avoid">
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Premium */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-tibmentor-ink rounded-[3rem] p-8 sm:p-12 text-white shadow-2xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-tibmentor/50 blur-[100px]" />
            <div className="relative space-y-5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-tibmentor-light/20 text-tibmentor-light">
                Premium
              </span>
              <h3 className="text-3xl sm:text-4xl font-black leading-tight">{t.premium.title}</h3>
              <p className="text-xl font-bold text-tibmentor-light">{t.premium.subtitle}</p>
              <p className="text-white/70 font-medium leading-relaxed">{t.premium.text}</p>
            </div>
            <ul className="relative space-y-3">
              {t.premium.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold"
                >
                  <Check className="bg-tibmentor-light text-tibmentor-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* How */}
      <div className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="reveal text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            {t.how.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.how.steps.map((s, i) => (
              <div key={s.title} className="reveal bg-white rounded-[2rem] p-6 sm:p-7 border border-slate-100 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-tibmentor text-white font-black text-lg flex items-center justify-center mb-5">
                  {i + 1}
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-[15px]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extras */}
      <div className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="reveal text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
            {t.extra.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {t.extra.items.map((item) => (
              <div
                key={item}
                className="reveal flex items-start gap-4 p-5 rounded-2xl bg-tibmentor-50 border border-tibmentor-100"
              >
                <Check className="mt-0.5 bg-tibmentor text-white" />
                <p className="text-[15px] font-bold text-slate-800 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-tibmentor-ink rounded-[3rem] p-8 sm:p-10 text-white shadow-2xl">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-tibmentor/40 blur-[90px]" />
            <div className="relative max-w-2xl">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">{extras.feedback.title}</h3>
              <p className="text-white/70 text-lg font-medium mb-8 leading-relaxed">{extras.feedback.text}</p>
              <a
                href={extras.feedback.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} bg-white text-tibmentor hover:bg-tibmentor-50`}
              >
                {extras.feedback.cta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal rounded-[3rem] bg-gradient-to-br from-tibmentor-dark to-tibmentor text-white text-center p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-tibmentor-light/20 blur-[100px]" />
            <div className="relative max-w-3xl mx-auto space-y-6">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white p-2">
                <img src={t.logo} alt={t.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black leading-tight">{t.final.title}</h3>
              <p className="text-white/80 font-medium leading-relaxed">{t.final.text}</p>
              <div className="flex justify-center pt-2">
                <a
                  href={t.siteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnBase} bg-white text-tibmentor hover:bg-tibmentor-50`}
                >
                  {t.siteCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
