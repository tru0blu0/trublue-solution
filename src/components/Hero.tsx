import { motion } from 'framer-motion'
import { hero, stats, about } from '../data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-10">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-navy/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-tag mb-4 block">Jackson, Michigan</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-balance">
              {hero.headline}
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] px-6 py-3.5 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium"
              >
                {hero.cta}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] px-6 py-3.5 border border-border text-text-dark hover:border-navy hover:text-navy transition-all rounded-md"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            className="card-base p-8 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold mb-6">Proven Track Record</p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-navy tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-text-muted mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="gold-rule my-6" />
            <p className="text-sm text-text-muted">
              Founded by <span className="font-semibold text-text-dark">{about.name}</span> — 16 years of frontline operations leadership in logistics, restaurant, legal, and IT.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
