import { motion } from 'framer-motion'
import { industryResults } from '../data'

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
          <span className="section-tag mb-3 block">Industries We Serve</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Operations expertise across<br />
            <span className="text-gold">the industries that move America.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {industryResults.map((ind, i) => (
            <motion.div
              key={ind.industry}
              className="card-base p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold mb-3 leading-snug text-navy">
                {ind.industry}
              </h3>
              <p className="text-sm text-text-muted mb-5 leading-relaxed flex-1">
                {ind.description}
              </p>
              <div className="gold-rule my-4" />
              <ul className="space-y-1.5">
                {ind.highlights.map((h) => (
                  <li key={h} className="text-xs text-text-muted flex items-start gap-2">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {h}
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
