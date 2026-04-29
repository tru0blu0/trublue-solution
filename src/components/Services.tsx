import { motion } from 'framer-motion'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block text-[10px] sm:text-[11px]">What We Do</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Operations consulting that delivers<br />
            <span className="text-gold">measurable results</span>, not slide decks.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="card-base p-5 sm:p-6 hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="font-display text-base sm:text-lg font-bold mb-1 group-hover:text-navy transition-colors">
                {service.title}
              </h3>
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.08em] text-gold mb-2 sm:mb-3">
                {service.price}
              </p>
              <p className="text-sm text-text-muted mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="text-xs text-text-muted flex items-start gap-2">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {d}
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
