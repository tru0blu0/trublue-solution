import { motion } from 'framer-motion'
import { hero, stats, about, site } from '../data'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 md:pt-20 md:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Background accent — hidden on mobile, subtle on desktop */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-navy/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gold/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-tag mb-3 sm:mb-4 block text-[10px] sm:text-[11px]">Jackson, Michigan</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-4 sm:mb-6 text-balance">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-lg text-text-muted mb-6 sm:mb-8 max-w-lg leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.1em] px-5 sm:px-6 py-3 sm:py-3.5 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium w-full sm:w-auto"
              >
                {hero.cta}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.1em] px-5 sm:px-6 py-3 sm:py-3.5 border border-border text-text-dark hover:border-navy hover:text-navy transition-all rounded-md w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            className="card-base p-5 sm:p-8 lg:p-10 mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] text-gold mb-4 sm:mb-6">Proven Track Record</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="gold-rule my-5 sm:my-6" />
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Founded by <a href={site.portfolioUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy hover:text-gold transition-colors">{about.name}</a> — 16 years of frontline operations leadership in logistics, restaurant, legal, and IT.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
