'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2, X } from 'lucide-react'
import { CLAIM_FROM_NAME, CLAIM_SUBJECT, WEB3FORMS_ACCESS_KEY } from '@/lib/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-primary/60 focus:ring-2 focus:ring-primary/30'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400'

export function ClaimDealForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    whatsapp: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetAndClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  function validate() {
    const next: Record<string, string> = {}
    if (form.first_name.trim().length < 2) next.first_name = 'Enter your first name'
    if (form.last_name.trim().length < 2) next.last_name = 'Enter your last name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()))
      next.email = 'Enter a valid email address'
    if (form.mobile.replace(/\D/g, '').length < 7) next.mobile = 'Enter a valid mobile number'
    if (form.whatsapp.trim() && form.whatsapp.replace(/\D/g, '').length < 7)
      next.whatsapp = 'Enter a valid WhatsApp number or leave it blank'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    if (!validate()) return
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: CLAIM_SUBJECT,
          from_name: CLAIM_FROM_NAME,
          // Honeypot — must stay empty, otherwise Web3Forms flags it as spam.
          botcheck: '',
          replyto: form.email.trim(),
          'First Name': form.first_name.trim(),
          'Last Name': form.last_name.trim(),
          'Email Address': form.email.trim(),
          'Mobile Number': form.mobile.trim(),
          'WhatsApp Number': form.whatsapp.trim() || 'Not provided',
          'Deal Requested': '$20/mo Starter Launch Offer',
        }),
      })
      const result = await response.json().catch(() => null)
      if (response.ok && result?.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(
          result?.message || 'Something went wrong. Please try again or message us on WhatsApp.',
        )
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or message us on WhatsApp.')
    }
  }

  function resetAndClose() {
    setForm({ first_name: '', last_name: '', email: '', mobile: '', whatsapp: '' })
    setErrors({})
    setStatus('idle')
    setErrorMessage('')
    onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Claim the $20/mo launch deal"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={resetAndClose} />

      <div className="animate-pop-in relative w-full max-w-md overflow-hidden rounded-3xl border border-[#25D366]/40 bg-[#0b0f16] shadow-[0_0_60px_-10px_rgba(37,211,102,0.5)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[#25D366]/15 blur-[70px]"
        />

        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="relative max-h-[85vh] overflow-y-auto p-7 sm:p-8">
          {status === 'success' ? (
            <div className="animate-float-in flex flex-col items-center py-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-bold text-white">
                You&apos;re in, {form.first_name.trim() || 'friend'}!
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                Your $20/mo launch deal request is in. We&apos;ll reach out soon to confirm your
                spot and set up your 24/7 lead engine.
              </p>
              <button
                type="button"
                onClick={resetAndClose}
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-base font-bold text-black transition-transform hover:scale-[1.02]"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <span className="inline-flex items-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#25D366]">
                🔥 Special Launch Deal
              </span>
              <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                Claim Your Spot For $20/mo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Drop your details below — no payment now, no setup fees. We&apos;ll contact you to
                activate your fully automated lead engine.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="claim-first-name" className={labelClass}>
                      First Name *
                    </label>
                    <input
                      id="claim-first-name"
                      type="text"
                      autoComplete="given-name"
                      value={form.first_name}
                      onChange={set('first_name')}
                      placeholder="John"
                      className={inputClass}
                    />
                    {errors.first_name && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.first_name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="claim-last-name" className={labelClass}>
                      Last Name *
                    </label>
                    <input
                      id="claim-last-name"
                      type="text"
                      autoComplete="family-name"
                      value={form.last_name}
                      onChange={set('last_name')}
                      placeholder="Doe"
                      className={inputClass}
                    />
                    {errors.last_name && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="claim-email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="claim-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="claim-mobile" className={labelClass}>
                    Mobile Number *
                  </label>
                  <input
                    id="claim-mobile"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.mobile}
                    onChange={set('mobile')}
                    placeholder="+1 (555) 123-4567"
                    className={inputClass}
                  />
                  {errors.mobile && <p className="mt-1.5 text-xs text-destructive">{errors.mobile}</p>}
                </div>

                <div>
                  <label htmlFor="claim-whatsapp" className={labelClass}>
                    WhatsApp Number{' '}
                    <span className="font-normal normal-case text-slate-500">(optional)</span>
                  </label>
                  <input
                    id="claim-whatsapp"
                    type="tel"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={set('whatsapp')}
                    placeholder="Same or a different number"
                    className={inputClass}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.whatsapp}</p>
                  )}
                </div>

                {/* Honeypot — hidden from humans; bots that fill it get flagged as spam. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                {status === 'error' && (
                  <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-xs text-destructive">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 text-base font-bold text-black shadow-[0_0_30px_-6px_rgba(37,211,102,0.8)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Claiming my spot…
                    </>
                  ) : (
                    <>
                      Claim My Spot For $20/mo
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-relaxed text-slate-500">
                  No setup fees · Cancel anytime · We only use these details to contact you about
                  your spot.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}