import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

const CALENDLY_URL = 'https://calendly.com/trubluesolution'
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  // Intersection Observer — lazy load Calendly
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

  // Load script when section nears viewport
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

  // Init widget
  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.Calendly) return
    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: containerRef.current,
    })
  }, [scriptLoaded])

  return (
    <section id="book" ref={ref} className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-tag mb-3 block">Book a Call</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            Let's talk about<br />
            <span className="text-gold">your operation.</span>
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Pick a time that works for you. 30 minutes — no commitment, just a conversation
            about what you're building and where you're stuck.
          </p>
        </motion.div>

        {!scriptLoaded && (
          <div className="h-[600px] border border-border rounded-md flex items-center justify-center bg-bg-light">
            <div className="flex items-center gap-3 text-text-muted">
              <span className="w-2 h-2 rounded-full bg-gold/40 animate-pulse" />
              Loading scheduler...
            </div>
          </div>
        )}

        <div ref={containerRef} style={{ minHeight: scriptLoaded ? '650px' : '0' }} />
      </div>
    </section>
  )
}
