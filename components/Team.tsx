'use client'

import { useState } from 'react'
import { team } from '@/lib/content'

export default function Team() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? team.members : team.members.slice(0, team.visibleCount)

  return (
    <section id={team.id} className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {team.title}
          </h2>
          <p className="text-slate-500 mt-6 text-lg font-medium leading-relaxed">{team.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visible.map((member, idx) => (
            <div
              key={member.name}
              className="reveal group bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-900/10 border border-white/5 hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 text-center"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full rotate-3 group-hover:rotate-6 transition-transform" />
                <div className="absolute inset-0 bg-slate-800 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        'https://ui-avatars.com/api/?name=' +
                        encodeURIComponent(member.name) +
                        '&background=be123c&color=fff'
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-400 text-sm font-medium leading-relaxed line-clamp-4">{member.desc}</p>
            </div>
          ))}
        </div>

        {team.members.length > team.visibleCount && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-primary transition-all shadow-lg"
            >
              {showAll
                ? 'Kamroq ko‘rish'
                : `Yana ${team.members.length - team.visibleCount} ta ustozni ko‘rish`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
