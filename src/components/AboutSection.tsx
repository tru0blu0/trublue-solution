import { motion } from 'framer-motion'
import { about, site } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block">About</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Operations isn't what we advise on.<br />
            <span className="text-gold">It's what we've lived.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <h3 className="font-display text-lg font-bold text-navy mb-3">The Story</h3>
              <p className="text-text-muted leading-relaxed">{about.story}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy mb-3">Why Trublue Exists</h3>
              <p className="text-text-muted leading-relaxed">{about.why}</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy mb-3">What Makes Us Different</h3>
              <p className="text-text-muted leading-relaxed">{about.differentiation}</p>
            </div>
          </motion.div>

          {/* Right: Founder + credentials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-base p-6">
              <h3 className="font-display text-lg font-bold text-navy mb-2">{about.name}</h3>
              <p className="text-gold font-mono text-xs uppercase tracking-[0.1em] mb-4">{about.title}</p>
              <a
                href={site.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.1em] text-navy hover:text-gold transition-colors"
              >
                Full bio & credentials →
              </a>
            </div>

            <div className="card-base p-6">
              <h3 className="font-display font-bold text-navy mb-4 text-sm uppercase tracking-[0.1em]">Jackson by the Numbers</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-bg-light rounded-md">
                  <div className="font-display text-2xl font-bold text-navy">100+</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.05em] mt-0.5">Manufacturers in Jackson County</div>
                </div>
                <div className="text-center p-3 bg-bg-light rounded-md">
                  <div className="font-display text-2xl font-bold text-navy">9K</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.05em] mt-0.5">Manufacturing Jobs</div>
                </div>
                <div className="text-center p-3 bg-bg-light rounded-md">
                  <div className="font-display text-2xl font-bold text-navy">11K</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.05em] mt-0.5">Trade & Logistics Jobs</div>
                </div>
                <div className="text-center p-3 bg-bg-light rounded-md">
                  <div className="font-display text-2xl font-bold text-navy">500+</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-[0.05em] mt-0.5">Chamber Members</div>
                </div>
              </div>
              <p className="text-[9px] text-text-muted mt-4 text-center">BLS Jackson MSA (Feb 2026) · Accelerate Jackson</p>
            </div>

            <div className="card-base p-6">
              <h3 className="font-display font-bold text-navy mb-4 text-sm uppercase tracking-[0.1em]">Credentials</h3>
              <ul className="space-y-2.5">
                {about.credentials.map((c) => (
                  <li key={c} className="text-sm text-text-muted flex items-start gap-2">
                    <span className="text-gold mt-0.5 shrink-0">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-base p-6">
              <h3 className="font-display font-bold text-navy mb-4 text-sm uppercase tracking-[0.1em]">Common Objections</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">"We can't afford a consultant."</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Our diagnostic starts at $2,500 and typically identifies savings that cover its cost within the first quarter. If we can't show you a path to ROI, we'll tell you — before you spend a dollar.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">"We tried consultants before."</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Most consultants deliver recommendations. We deliver systems — documented, implemented, and handed off to your team. The difference is the difference between a map and a road.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">"Our problems are too specific."</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Operational problems follow patterns. We've seen them across logistics, restaurants, legal, and manufacturing — the industry changes, the root causes don't. If your problem is genuinely novel, we'll tell you. But it probably isn't.
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
