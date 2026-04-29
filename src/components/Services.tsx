import { motion } from 'framer-motion'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Operations consulting that delivers<br />
            <span className="text-gold">measurable results</span>, not slide decks.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="card-base p-6 hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-display text-lg font-bold mb-1 group-hover:text-navy transition-colors">
                {service.title}
              </h3>
              <p className="font-mono text-xs tracking-[0.08em] text-gold mb-3">
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
