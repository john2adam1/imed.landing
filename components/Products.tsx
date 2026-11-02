import { products } from '@/lib/content'

const tones = {
  live: 'bg-emerald-50 text-emerald-700',
  soon: 'bg-amber-50 text-amber-700',
}

export default function Products() {
  return (
    <section id={products.id} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">{products.title}</h2>
          <p className="text-slate-500 mt-6 text-lg font-medium leading-relaxed">{products.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.items.map((item) => (
            <article
              key={item.name}
              className="reveal group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-card hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <h3 className="text-2xl font-black text-slate-900">{item.name}</h3>
                <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${tones[item.statusTone]}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed flex-grow">{item.description}</p>
              <a
                href={item.href}
                className="mt-8 inline-flex items-center gap-2 font-black text-primary group-hover:gap-3 transition-all"
              >
                {item.cta}
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
