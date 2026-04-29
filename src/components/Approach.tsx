import { motion } from 'framer-motion'
import { approach } from '../data'

export default function Approach() {
  return (
    <section id="approach" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-navy text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] text-gold uppercase mb-3 block">How We Work</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Every engagement follows<br />
            <span className="text-gold">a proven approach.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {approach.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-gold/20 absolute top-0 left-0 leading-none">
                {step.step}
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3 relative z-10">{step.title}</h3>
              <p className="text-sm text-text-light/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
