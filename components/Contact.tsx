import { contact } from '@/lib/content'

export default function Contact() {
  return (
    <section id={contact.id} className="py-12 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-bold mb-8">
              {contact.badge}
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
              {contact.title} <br />
              <span className="text-primary">{contact.titleAccent}</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12 max-w-lg">
              {contact.subtitle}
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {contact.items.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                    {item.label}
                  </span>
                  <span className="text-white font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="bg-white rounded-3xl p-12 shadow-soft hover:shadow-card transition-all duration-300">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">{contact.telegramTitle}</h3>
              <p className="text-slate-500 font-medium mb-10 leading-relaxed">{contact.telegramText}</p>
              <a
                href={contact.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 w-full py-6 rounded-2xl bg-primary text-white font-bold text-xl shadow-lg hover:bg-primary-600 active:scale-[0.98] transition-all"
              >
                {contact.telegramCta}
              </a>
              <div className="mt-10 pt-10 border-t border-slate-100 text-center">
                <p className="text-slate-400 font-bold text-sm tracking-wide">
                  {contact.channelLabel}
                  <a href={contact.telegramHref} className="text-primary ml-2 hover:underline">
                    {contact.telegramCta}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
