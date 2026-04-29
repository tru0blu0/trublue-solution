import { motion } from 'framer-motion'
import { site } from '../data'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block text-[10px] sm:text-[11px]">Let's Talk</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-balance">
            Ready to fix your operations?
          </h2>
          <p className="text-base sm:text-lg text-text-muted mb-6 sm:mb-8 max-w-xl mx-auto">
            Every engagement starts with a conversation. We'll map your current state and tell you what we'd do — before you commit to anything.
          </p>
        </motion.div>

        {/* Lead magnet */}
        <motion.div
          className="max-w-xl mx-auto mb-6 sm:mb-8 p-4 sm:p-6 border border-gold/20 rounded-md bg-gold/[0.03] text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <span aria-hidden="true" className="text-xl sm:text-2xl shrink-0">📋</span>
            <div>
              <h3 className="font-display font-bold text-navy mb-1 text-sm sm:text-base">Free Operations Health Check</h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-2 sm:mb-3">
                A 10-point diagnostic checklist to assess your operation's readiness for scale.
              </p>
              <a
                href={`mailto:${site.email}?subject=Operations Health Check`}
                className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] text-gold hover:text-navy transition-colors font-medium"
              >
                Request the checklist →
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card-base p-5 sm:p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-3 sm:space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl">📧</span>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider">Email</p>
                <a href={`mailto:${site.email}`} className="font-medium text-navy hover:text-gold transition-colors text-sm break-all">
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl">📞</span>
              <div>
                <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider">Phone</p>
                <a href={`tel:${site.phone}`} className="font-medium text-navy hover:text-gold transition-colors text-sm">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl">📍</span>
              <div>
                <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider">Location</p>
                <p className="font-medium text-navy text-sm">{site.location}</p>
              </div>
            </div>
          </div>

          <div className="gold-rule my-5 sm:my-6" />

          {/* Contact form */}
          <div className="max-w-md mx-auto mb-5 sm:mb-6">
            <ContactForm />
          </div>

          <div className="gold-rule my-6 sm:my-8" />

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.1em] px-6 sm:px-8 py-3 sm:py-4 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium w-full sm:w-auto"
            >
              Book a Call
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`mailto:${site.email}?subject=Operations%20Assessment%20Request`}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-[0.1em] px-6 sm:px-8 py-3 sm:py-4 border border-border text-text-dark hover:border-navy hover:text-navy transition-all rounded-md w-full sm:w-auto"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
