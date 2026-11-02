import { footer, site, socials } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <img src={site.logo} alt={site.name} className="w-8 h-8 brightness-0 invert" />
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                {site.name}
              </span>
            </a>
            <p className="text-slate-500 font-medium text-lg max-w-sm leading-relaxed">{footer.blurb}</p>
          </div>

          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6">
              {footer.socialsTitle}
            </h4>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-500 hover:text-primary font-bold transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-50 pt-10 mt-10">
          <p className="text-sm font-bold text-slate-400">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
