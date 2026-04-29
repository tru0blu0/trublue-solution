import { useState, useRef } from 'react'
import type { FormEvent } from 'react'

const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('error')
      setErrorMsg('Form not configured. Please email or call instead.')
      return
    }
    setStatus('sending')
    setErrorMsg('')

    const form = formRef.current
    if (!form) return
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) { setStatus('sent'); form.reset() }
      else { setStatus('error'); setErrorMsg(json.message || 'Something went wrong.') }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please email us directly.')
    }
  }

  const input = 'w-full bg-white border border-border rounded-md px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors'

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="bot-field">Don't fill</label>
        <input type="text" id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-[0.1em] text-text-muted mb-1.5">Name</label>
          <input type="text" id="name" name="name" required minLength={2} autoComplete="name" className={input} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-[0.1em] text-text-muted mb-1.5">Email</label>
          <input type="email" id="email" name="email" required autoComplete="email" className={input} placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-[0.1em] text-text-muted mb-1.5">Company <span className="opacity-50">(optional)</span></label>
        <input type="text" id="company" name="company" autoComplete="organization" className={input} placeholder="Where you're building" />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-[0.1em] text-text-muted mb-1.5">What are you looking to solve?</label>
        <textarea id="message" name="message" required minLength={10} rows={4} className={input + ' resize-y'} placeholder="Your operational challenge..." />
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="font-mono text-sm uppercase tracking-[0.1em] px-6 py-3 bg-navy text-white hover:bg-navy-light transition-colors rounded-md font-medium disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent' : 'Send Message'}
      </button>

      {status === 'sent' && <p role="status" className="text-sm text-green-600">Thanks — we'll respond within 1 business day.</p>}
      {status === 'error' && <p role="alert" className="text-sm text-red-600">{errorMsg}</p>}
    </form>
  )
}
