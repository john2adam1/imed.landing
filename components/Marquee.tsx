import { site } from '@/lib/content'

export default function Marquee() {
  const items = Array.from({ length: 16 })

  return (
    <section className="py-10 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="marquee relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <div className="marquee-track py-2">
            {items.map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-[1.5rem] bg-white border border-slate-100 shadow-lg shadow-slate-200/20 min-w-[180px]"
              >
                <img src={site.logo} alt="" className="w-8 h-8 object-contain" />
                <span className="font-extrabold text-base text-slate-900 tracking-tight">{site.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
