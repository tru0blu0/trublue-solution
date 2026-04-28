import { motion } from 'framer-motion'
import { caseStudies } from '../data'

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
          <span className="section-tag mb-3 block">Case Studies</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Real results from<br />
            <span className="text-gold">real operations.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              className="card-base p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-2">{cs.domain}</span>
              <h3 className="font-display text-lg font-bold mb-2 leading-snug">{cs.headline}</h3>
              <p className="text-sm text-text-muted mb-4">{cs.tagline}</p>

              <div className="gold-rule my-4" />

              <p className="text-xs text-text-muted mb-4 leading-relaxed flex-1">
                <span className="font-semibold text-text-dark">Challenge:</span> {cs.challenge}
              </p>

              <div className="space-y-2 mt-auto">
                {cs.results.map((r) => (
                  <div key={r.label} className="flex items-baseline gap-2">
                    <span className="font-display text-xl font-bold text-navy shrink-0">{r.metric}</span>
                    <span className="text-xs text-text-muted leading-tight">{r.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-12 card-base p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-text-dark italic leading-relaxed mb-4">
            "Jimmy built our freight brokerage operation from absolute zero. He secured our FMCSA authority, selected and implemented our TMS, got every truck ELD-compliant ahead of the federal deadline. In three years under his operational management, we had zero FMCSA enforcement actions."
          </p>
          <p className="font-display font-bold text-navy">Ryan Frasier</p>
          <p className="text-sm text-text-muted">General Manager, J&J Freight Logistics, LLC</p>
        </motion.div>
      </div>
    </section>
  )
}
