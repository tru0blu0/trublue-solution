import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { site, navItems } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm' : ''
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label={`${site.name} — home`}>
          <div className="w-7 h-7 sm:w-8 sm:h-8">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" aria-hidden="true" focusable="false">
              <rect width="32" height="32" rx="6" fill="#1B3A5C"/>
              <path d="M10 8h12M16 8v16" stroke="#E8913A" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M26 16H16M26 24H16" stroke="#2D7DD2" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display text-sm sm:text-lg font-bold tracking-tight leading-tight">
            Trublue <span className="text-gold font-normal">Solution</span>
          </span>
        </a>

        {/* Availability badge — desktop only */}
        {site.available && (
          <div className="hidden lg:flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="font-mono text-[9px] tracking-[0.12em] text-gold">{site.availableText}</span>
          </div>
        )}

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-label hover:text-navy transition-colors relative group"
            >
              {item.label}
              <span aria-hidden="true" className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA button — desktop only */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase px-3 sm:px-5 py-2 sm:py-2.5 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-xl sm:text-2xl font-bold text-navy hover:text-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              className="font-mono text-sm uppercase px-8 py-3 bg-navy text-white rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
