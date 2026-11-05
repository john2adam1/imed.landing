import { contact } from '@/lib/content'

export default function Contact() {
  return (
    <section id={contact.id} className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">
              {contact.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              {contact.title} <br />
              <span className="text-primary">{contact.titleAccent}</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-lg">
              {contact.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {contact.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5"
                >
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                      {item.label}
                    </span>
                    <span className="block text-white font-bold text-[15px] truncate">{item.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="bg-white rounded-[2rem] p-8 shadow-soft hover:shadow-card transition-all duration-300">
              <h3 className="text-2xl font-black text-slate-900 mb-3">{contact.telegramTitle}</h3>
              <p className="text-slate-500 font-medium mb-6 leading-relaxed text-[15px]">{contact.telegramText}</p>
              <a
                href={contact.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-white font-black text-lg shadow-lg shadow-primary/20 hover:bg-primary-600 active:scale-[0.98] transition-all"
              >
                {contact.telegramCta}
              </a>
              <p className="mt-6 pt-6 border-t border-slate-100 text-center text-slate-400 font-bold text-sm tracking-wide">
                {contact.channelLabel}
                <a href={contact.telegramHref} className="text-primary ml-2 hover:underline">
                  {contact.telegramCta}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
