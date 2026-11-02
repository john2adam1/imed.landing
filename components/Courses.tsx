import { courses, extras } from '@/lib/content'

export default function Courses() {
  return (
    <section id={courses.id} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">{courses.title}</h2>
          <p className="text-slate-500 mt-2 font-medium">{courses.subtitle}</p>
        </div>

        <div className="grid gap-4 max-w-5xl mx-auto">
          {courses.groups.map((group) => (
            <details
              key={group.title}
              className="reveal group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-soft transition-all"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 select-none">
                <span className="font-bold text-lg text-slate-900">{group.title}</span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 group-open:rotate-45 group-open:bg-primary group-open:text-white transition-all duration-300">
                  +
                </span>
              </summary>
              <div className="pt-4 text-slate-600 text-sm grid md:grid-cols-2 gap-3 border-t border-slate-100 mt-4">
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch reveal mt-16">
          <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl flex flex-col">
            <h3 className="text-4xl font-black mb-4">{extras.feedback.title}</h3>
            <p className="text-white/60 text-lg font-medium mb-8 leading-relaxed flex-grow">
              {extras.feedback.text}
            </p>
            <a
              href={extras.feedback.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-5 px-10 rounded-2xl bg-primary text-white font-black hover:bg-primary/90 transition-all w-fit"
            >
              {extras.feedback.cta}
            </a>
          </div>

          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col">
            <h3 className="text-4xl font-black text-slate-900 mb-6">{extras.books.title}</h3>
            <div className="grid gap-4 mb-10 flex-grow">
              {extras.books.items.map((book) => (
                <div key={book} className="flex items-center gap-3 text-slate-600 font-bold">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {book}
                </div>
              ))}
            </div>
            <a
              href={extras.books.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-5 px-10 rounded-2xl bg-slate-900 text-white font-black hover:bg-primary transition-all w-fit"
            >
              {extras.books.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
