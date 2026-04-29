import { motion } from 'framer-motion'
import { clientResults, hero } from '../data'

export default function CaseStudies() {
  return (
    <section id="results" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block text-[10px] sm:text-[11px]">Client Results</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Problems solved. Systems built.<br />
            <span className="text-gold">Operations that stayed fixed.</span>
          </h2>
          <p className="text-text-muted mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Every engagement starts with a mess and ends with a system. Here's what that looks like
            for businesses like yours.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {clientResults.map((result, i) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-base overflow-hidden">
                {/* Header */}
                <div className="p-4 sm:p-6 md:p-8 border-b border-border">
                  <div className="flex flex-col gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-gold uppercase">
                      {result.industry}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-navy leading-tight">
                        {result.summary}
                      </h3>
                      <span className="text-xs sm:text-sm text-text-muted font-medium shrink-0">
                        {result.client}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold text-navy uppercase tracking-[0.12em] mb-1.5 sm:mb-2 font-mono">
                        The Situation
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {result.situation}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold text-navy uppercase tracking-[0.12em] mb-1.5 sm:mb-2 font-mono">
                        What We Did
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {result.whatWeDid}
                      </p>
                    </div>
                  </div>

                  {/* Outcomes + testimonial */}
                  <div className="space-y-4 sm:space-y-5">
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold text-navy uppercase tracking-[0.12em] mb-2 sm:mb-3 font-mono">
                        Results
                      </h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {result.outcomes.map((o) => (
                          <div
                            key={o.label}
                            className="bg-white border border-border rounded-md p-2 sm:p-3 text-center"
                          >
                            <div className="font-display text-lg sm:text-2xl font-bold text-navy leading-none mb-0.5 sm:mb-1">
                              {o.metric}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-text-muted leading-tight uppercase tracking-[0.05em]">
                              {o.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="relative border-l-2 border-gold pl-3 sm:pl-4 italic text-sm text-text-muted leading-relaxed">
                      &ldquo;{result.testimonial.quote}&rdquo;
                      <footer className="mt-2 sm:mt-3 not-italic">
                        <p className="font-display font-bold text-navy text-xs">
                          &mdash; {result.testimonial.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {result.testimonial.role}
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted mb-4 sm:mb-6 text-base sm:text-lg">
            Your operation could be the next one on this page.
          </p>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.1em] px-6 sm:px-8 py-3 sm:py-4 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium w-full sm:w-auto"
          >
            {hero.cta}
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
