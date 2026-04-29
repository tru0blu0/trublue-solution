import { motion } from 'framer-motion'

const jacksonIndustries = [
  {
    name: 'Automotive & Advanced Mobility',
    description: 'Jackson County is home to MACI, TAC Manufacturing, and dozens of Tier 1/2 suppliers. From EV transition to lean manufacturing, your operation needs processes that move as fast as your production line.',
    companies: 'MACI · TAC Manufacturing · Jackson Flexible Products · Classic Turning',
    needs: ['Process optimization for EV transition', 'Quality system documentation', 'Supplier compliance programs'],
  },
  {
    name: 'Food & Beverage Manufacturing',
    description: 'Dawn Foods is headquartered here. Aunt Millie\'s, Gilbert Chocolates, and specialty producers drive Jackson\'s food cluster. FDA compliance, scaling production, and vendor management aren\'t optional — they\'re survival.',
    companies: 'Dawn Foods HQ · Aunt Millie\'s Bakery · Fry Krisp · Gilbert Chocolates',
    needs: ['FDA/FSMA compliance systems', 'Production scaling & SOPs', 'Vendor consolidation strategies'],
  },
  {
    name: 'Defense & Precision Manufacturing',
    description: 'Danfoss, Eaton, Orbitform, and Technique Inc. serve the defense supply chain from right here in Jackson. DFARS compliance, precision quality systems, and audit-ready documentation are table stakes.',
    companies: 'Danfoss · Eaton · Orbitform · Technique Inc. · Aertech',
    needs: ['DFARS/quality compliance', 'Precision process documentation', 'Audit preparation & readiness'],
  },
  {
    name: 'Logistics & Distribution',
    description: 'Jackson\'s I-94/US-127 corridor is a logistics artery. With 11,000+ trade and transportation jobs, the need for TMS implementation, carrier compliance, and cross-border documentation is constant.',
    companies: 'I-94 Corridor · Cross-Border Routes · Regional Distribution Centers',
    needs: ['TMS selection & deployment', 'Carrier compliance & ELD programs', 'Cross-border documentation'],
  },
]

export default function JacksonIndustries() {
  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block">Jackson Industries We Serve</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Deep expertise in the industries<br />
            <span className="text-gold">that built Jackson County.</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            We don't just consult on these industries — we've worked inside them. From the factory floor
            to the loading dock, we know how Jackson businesses actually operate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {jacksonIndustries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="card-base p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold text-navy mb-2">{ind.name}</h3>
              <p className="text-sm text-text-muted mb-4 leading-relaxed flex-1">{ind.description}</p>

              <div className="text-xs text-text-muted mb-4 font-mono tracking-[0.05em] uppercase opacity-70">
                {ind.companies}
              </div>

              <div className="gold-rule my-3" />

              <ul className="space-y-1.5">
                {ind.needs.map((n) => (
                  <li key={n} className="text-xs text-text-muted flex items-start gap-2">
                    <span className="text-gold mt-0.5 shrink-0">→</span>
                    {n}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
