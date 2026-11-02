import { hero, site } from '@/lib/content'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-10 lg:pt-32 lg:pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {hero.badge}
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {hero.titleBefore} <br />
            <span className="text-primary italic">{hero.titleAccent} </span>
            {hero.titleAfter}
          </h1>

          <p className="mt-8 font-bold text-slate-900 text-xl leading-relaxed max-w-xl">
            {hero.subtitle}
          </p>

          <h3 className="mt-10 text-slate-900 font-bold text-xl leading-snug max-w-lg">
            {hero.appHint}
          </h3>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={hero.ios.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-7 py-4 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center sm:justify-start gap-4 hover:bg-slate-900 transition-all duration-300 shadow-xl active:scale-95"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="iOS"
                className="w-7 h-7 brightness-0 invert"
              />
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{hero.ios.hint}</span>
                <span className="text-lg font-extrabold tracking-tight">{hero.ios.label}</span>
              </div>
            </a>

            <a
              href={hero.android.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-7 py-4 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center sm:justify-start gap-4 hover:bg-slate-900 transition-all duration-300 shadow-xl active:scale-95"
            >
              <img
                src="https://www.vectorlogo.zone/logos/android/android-icon.svg"
                alt="Android"
                className="w-7 h-7"
              />
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{hero.android.hint}</span>
                <span className="text-lg font-extrabold tracking-tight">{hero.android.label}</span>
              </div>
            </a>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-3 scale-105 blur-2xl" />
          <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl shadow-primary/10 border border-slate-100 overflow-hidden">
            <img
              src={site.heroImage}
              alt="iMed Team"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
