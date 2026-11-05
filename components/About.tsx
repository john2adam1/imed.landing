import { about } from '@/lib/content'

export default function About() {
  return (
    <section id={about.id} className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 reveal">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {about.title}
            </h2>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-[15px] font-bold text-slate-800 leading-relaxed border-l-4 border-primary pl-4'
                      : 'text-[15px] font-medium text-slate-600 leading-relaxed pl-5'
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-2.5 reveal">
            {about.goals.map((goal) => (
              <div
                key={goal}
                className="flex items-start gap-4 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="mt-0.5 w-6 h-6 rounded-lg bg-white shadow-sm text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-[15px] font-bold text-slate-800 leading-relaxed">{goal}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
