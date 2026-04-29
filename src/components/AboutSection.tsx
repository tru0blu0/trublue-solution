import { motion } from 'framer-motion'
import { about, site } from '../data'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-bg-light overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block text-[10px] sm:text-[11px]">About</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Operations isn't what we advise on.<br />
            <span className="text-gold">It's what we've lived.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left: Story */}
          <motion.div
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3">The Story</h3>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">{about.story}</p>
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3">Why Trublue Exists</h3>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">{about.why}</p>
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3">What Makes Us Different</h3>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">{about.differentiation}</p>
            </div>
          </motion.div>

          {/* Right: Founder + credentials */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-base p-4 sm:p-6">
              <h3 className="font-display text-base sm:text-lg font-bold text-navy mb-1 sm:mb-2">{about.name}</h3>
              <p className="text-gold font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] mb-3 sm:mb-4">{about.title}</p>
              <a
                href={site.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] text-navy hover:text-gold transition-colors"
              >
                Full bio & credentials →
              </a>
            </div>

            <div className="card-base p-4 sm:p-6">
              <h3 className="font-display font-bold text-navy mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-[0.1em]">Credentials</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {about.credentials.map((c) => (
                  <li key={c} className="text-sm text-text-muted flex items-start gap-2">
                    <span className="text-gold mt-0.5 shrink-0">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base p-4 sm:p-6">
              <h3 className="font-display font-bold text-navy mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-[0.1em]">Common Objections</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">"We can't afford a consultant."</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Our diagnostic starts at $2,500 and typically identifies savings that cover its cost within the first quarter.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">"We tried consultants before."</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Most deliver recommendations. We deliver systems — documented, implemented, handed off to your team.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">"Our problems are too specific."</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Operational problems follow patterns across industries. If yours is genuinely novel, we'll tell you. It probably isn't.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
