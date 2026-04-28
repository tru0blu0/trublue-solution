import { motion } from 'framer-motion'
import { clientResults, hero } from '../data'

export default function CaseStudies() {
  return (
    <section id="results" className="py-24 px-6 md:px-10 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block">Client Results</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Problems solved. Systems built.<br />
            <span className="text-gold">Operations that stayed fixed.</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Every engagement starts with a mess and ends with a system. Here's what that looks like
            for businesses like yours.
          </p>
        </motion.div>

        <div className="space-y-12">
          {clientResults.map((result, i) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Client result card */}
              <div className="card-base overflow-hidden">
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-1 block">
                        {result.industry}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-navy leading-tight">
                        {result.summary}
                      </h3>
                    </div>
                    <span className="text-sm text-text-muted font-medium shrink-0">
                      {result.client}
                    </span>
                  </div>
                </div>

                {/* Body — two columns on desktop */}
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-[0.12em] mb-2 font-mono">
                        The Situation
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {result.situation}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-[0.12em] mb-2 font-mono">
                        What We Did
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {result.whatWeDid}
                      </p>
                    </div>
                  </div>

                  {/* Outcomes + testimonial */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-[0.12em] mb-3 font-mono">
                        Results
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {result.outcomes.map((o) => (
                          <div
                            key={o.label}
                            className="bg-white border border-border rounded-md p-3 text-center"
                          >
                            <div className="font-display text-2xl font-bold text-navy leading-none mb-1">
                              {o.metric}
                            </div>
                            <div className="text-[10px] text-text-muted leading-tight uppercase tracking-[0.05em]">
                              {o.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="relative border-l-2 border-gold pl-4 italic text-sm text-text-muted leading-relaxed">
                      &ldquo;{result.testimonial.quote}&rdquo;
                      <footer className="mt-3 not-italic">
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted mb-6 text-lg">
            Your operation could be the next one on this page.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] px-8 py-4 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium"
          >
            {hero.cta}
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
