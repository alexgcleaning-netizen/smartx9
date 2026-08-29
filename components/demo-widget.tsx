'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, MessageCircle, ArrowRight, ArrowLeft, Lock } from 'lucide-react'
import { CONTACT } from '@/lib/site'

const CLEANING_TYPES = [
  'Standard home clean',
  'Deep clean',
  'Move-in / move-out',
  'Post-construction',
  'Office / commercial',
]

const PROPERTY_SIZES = [
  { label: '1–2 bedrooms', factor: 1 },
  { label: '3–4 bedrooms', factor: 1.6 },
  { label: '5+ bedrooms', factor: 2.3 },
  { label: 'Commercial space', factor: 3 },
]

type Step = 'estimate' | 'unlock' | 'done'

export function DemoWidget() {
  const [step, setStep] = useState<Step>('estimate')
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')
  const [form, setForm] = useState({
    type: '',
    size: '',
    name: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Design-only placeholder price derived from selections
  const factor = PROPERTY_SIZES.find((s) => s.label === form.size)?.factor ?? 1
  const price = Math.round((120 * factor) / 5) * 5

  function validateEstimate() {
    const next: Record<string, string> = {}
    if (!form.type) next.type = 'Choose a cleaning type'
    if (!form.size) next.size = 'Choose a property size'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function validateUnlock() {
    const next: Record<string, string> = {}
    if (form.name.trim().length < 2) next.name = 'Enter your name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (form.phone.replace(/\D/g, '').length < 7) next.phone = 'Enter a valid phone number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function goToUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (!validateEstimate()) return
    setErrors({})
    setStep('unlock')
  }

  function onUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    if (!validateUnlock()) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('idle')
      setStep('done')
    }, 1100)
  }

  function reset() {
    setForm({ type: '', size: '', name: '', email: '', phone: '' })
    setErrors({})
    setStatus('idle')
    setStep('estimate')
  }

  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            Live Demo · ABC Cleaning Company
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Get An Instant Quote — Unlock Your Price In 33 Seconds
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Test our instant lead engine right now. See how your website visitors turn into booked
            jobs before your competitors even answer the phone.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {['Built for cleaning businesses', 'Instant on-screen estimate', 'You get notified in under 60 seconds'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* Price preview card */}
          <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/50 p-5">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                Estimated price
              </p>
              <p
                className={`mt-1 font-serif text-3xl font-bold tabular-nums text-foreground transition-all ${
                  step === 'done' ? '' : 'select-none blur-md'
                }`}
                aria-hidden={step !== 'done'}
              >
                ${step === 'done' ? price : 145}
                <span className="text-base font-normal text-muted-foreground">/visit</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {form.type || 'Cleaning service'}
              </p>
            </div>
            {step !== 'done' && (
              <span className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground">
                <Lock className="h-4 w-4 text-primary" aria-hidden="true" />
                Unlock your price
              </span>
            )}
            {step === 'done' && (
              <span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-success/15 px-4 py-2.5 text-sm font-semibold text-success">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Unlocked
              </span>
            )}
          </div>

          {step === 'estimate' && (
            <form onSubmit={goToUnlock} noValidate className="space-y-4 animate-float-in">
              <Field label="Cleaning type" error={errors.type} htmlFor="type">
                <select
                  id="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full appearance-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                >
                  <option value="" disabled>
                    Select a cleaning type…
                  </option>
                  {CLEANING_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-card">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Property size" error={errors.size} htmlFor="size">
                <select
                  id="size"
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="w-full appearance-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                >
                  <option value="" disabled>
                    Select a property size…
                  </option>
                  {PROPERTY_SIZES.map((s) => (
                    <option key={s.label} value={s.label} className="bg-card">
                      {s.label}
                    </option>
                  ))}
                </select>
              </Field>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--primary)] transition-transform hover:scale-[1.02]"
              >
                <Lock className="h-4 w-4" aria-hidden="true" />
                Unlock your price
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Demo only — no data is stored or sent.
              </p>
            </form>
          )}

          {step === 'unlock' && (
            <form onSubmit={onUnlock} noValidate className="space-y-4 animate-float-in">
              <Field label="Full name" error={errors.name} htmlFor="name">
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Marcus Thompson"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </Field>

              <Field label="Email address" error={errors.email} htmlFor="email">
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="marcus@example.com"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </Field>

              <Field label="Phone number" error={errors.phone} htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (555) 018-4420"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </Field>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setErrors({})
                    setStep('estimate')
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--primary)] transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Unlocking…
                    </>
                  ) : (
                    <>
                      Unlock My Price
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                No spam, ever. We&apos;ll only use this to send your quote.
              </p>
            </form>
          )}

          {step === 'done' && (
            <div className="flex flex-col items-center py-4 text-center animate-float-in">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                Price unlocked
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                In a live setup, {form.name.split(' ')[0] || 'the owner'} would already have a
                WhatsApp alert with these details. Expect a callback in minutes.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Message us on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  )
}
