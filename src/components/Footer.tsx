import { site } from '../data'

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-10 bg-bg-dark text-text-light">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" aria-hidden="true" focusable="false">
                <rect width="32" height="32" rx="6" fill="#1B3A5C"/>
                <path d="M10 8h12M16 8v16" stroke="#E8913A" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M26 16H16M26 24H16" stroke="#2D7DD2" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-white">Trublue Solution</p>
              <p className="text-xs text-text-light/50">{site.location}</p>
            </div>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right">
            <p className="text-xs text-text-light/50">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            <p className="text-xs text-text-light/30 mt-1">
              {site.domain} · <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">{site.email}</a>
            </p>
            <p className="text-xs text-text-light/30 mt-2">
              <a href={site.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                Meet the founder →
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
