import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { products } from '@/lib/content'

export default function ProjectPage({ current, children }: { current: string; children: React.ReactNode }) {
  const others = products.items.filter((p) => p.href !== `/${current}`)

  return (
    <div className="bg-white text-slate-900 selection:bg-primary-100 selection:text-primary">
      <Reveal />
      <Header home={false} />
      <main>
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-3 text-sm font-bold text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              ← Bosh sahifa
            </Link>
            <span aria-hidden className="text-slate-300">/</span>
            <Link href="/#products" className="hover:text-primary transition-colors">
              Loyihalar
            </Link>
          </div>
        </div>

        {children}

        <section className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Boshqa loyihalarimiz</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group flex items-center gap-4 bg-white rounded-3xl p-5 border border-slate-100 shadow-soft hover:border-primary/30 transition-all"
                >
                  <span
                    className={`w-16 h-16 overflow-hidden bg-white border border-slate-100 flex items-center justify-center shrink-0 ${
                      p.logoShape === 'circle' ? 'rounded-full' : 'rounded-[22%]'
                    }`}
                  >
                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-black text-lg text-slate-900 group-hover:text-primary transition-colors">
                      {p.name}
                    </span>
                    <span className="block text-sm font-medium text-slate-500 line-clamp-2">{p.description}</span>
                  </span>
                  <span aria-hidden className="ml-auto text-slate-300 group-hover:text-primary">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer home={false} />
    </div>
  )
}
