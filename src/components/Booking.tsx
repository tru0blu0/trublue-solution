import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    Calendly: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void }
  }
}

const CALENDLY_URL = 'https://calendly.com/trubluesolution'
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) {
      setScriptLoaded(true)
      return
    }
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.head.appendChild(script)
  }, [inView])

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.Calendly) return
    window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: containerRef.current })
  }, [scriptLoaded])

  return (
    <section id="book" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block text-[10px] sm:text-[11px]">Book a Call</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-balance">
            Let's talk about<br />
            <span className="text-gold">your operation.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted mb-8 sm:mb-10 max-w-xl mx-auto">
            Pick a time that works for you. 30 minutes — no commitment.
          </p>
        </motion.div>

        {!scriptLoaded && (
          <div className="h-[400px] sm:h-[600px] border border-border rounded-md flex items-center justify-center bg-bg-light">
            <div className="flex items-center gap-3 text-text-muted text-sm">
              <span className="w-2 h-2 rounded-full bg-gold/40 animate-pulse" />
              Loading scheduler...
            </div>
          </div>
        )}

        <div ref={containerRef} className="overflow-hidden rounded-md" style={{ minHeight: scriptLoaded ? '500px' : '0' }} />
      </div>
    </section>
  )
}
