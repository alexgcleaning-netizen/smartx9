'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Loader2, MapPin, X } from 'lucide-react'

import { whatsappLink } from '@/lib/site'

const NICHES = [
  'Roofing',
  'HVAC',
  'Plumbing',
  'House Cleaning',
  'Tree Removal',
  'Pressure Washing',
  'Junk Removal',
  'Other',
]

type Step = 'form' | 'scanning' | 'result'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-primary/60 focus:ring-2 focus:ring-primary/30'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400'

export function CityChecker() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>('form')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [niche, setNiche] = useState('')
  const [city, setCity] = useState('')
  const [progress, setProgress] = useState(0)

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
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // Simulated 2.5s city scan with a filling progress bar.
  useEffect(() => {
    if (step !== 'scanning') return
    setProgress(0)
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setProgress(100)))
    const timer = setTimeout(() => setStep('result'), 2500)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [step])

  const close = () => {
    setOpen(false)
    setTimeout(() => {
      setStep('form')
      setProgress(0)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !company.trim() || !niche || !city.trim()) return
    setStep('scanning')
  }

  const reset = () => {
    setStep('form')
    setProgress(0)
  }

  const message = `Hi SMART X9! I just checked availability for ${company.trim()} in ${city.trim()} (${niche}). I want to claim my spot.`

  return (
    <>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-black shadow-[0_0_30px_rgba(37,211,102,0.4)] transition hover:shadow-[0_0_45px_rgba(37,211,102,0.6)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
          Check If Your City Is Available
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Check city exclusivity and availability"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <div className="animate-pop-in relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-primary/30 bg-slate-950 p-6 shadow-[0_0_60px_rgba(124,58,237,0.25)] sm:p-8">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[70px]"
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {step === 'form' && (
              <div className="animate-pop-in relative">
                <h3 className="pr-8 text-xl font-bold text-white sm:text-2xl">
                  Check City Exclusivity &amp; Availability
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  We only partner with 1 business per niche per city.
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="cc-name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="cc-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Silva"
                      className={inputClass}
                      disabled={step === 'scanning'}
                    />
                  </div>

                  <div>
                    <label htmlFor="cc-company" className={labelClass}>
                      Company Name *
                    </label>
                    <input
                      id="cc-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Silva Roofing LLC"
                      className={inputClass}
                      disabled={step === 'scanning'}
                    />
                  </div>

                  <div>
                    <label htmlFor="cc-niche" className={labelClass}>
                      Select Niche / Industry *
                    </label>
                    <select
                      id="cc-niche"
                      required
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      className={`${inputClass} appearance-none`}
                      disabled={step === 'scanning'}
                    >
                      <option value="" disabled className="bg-slate-900">
                        Select your niche
                      </option>
                      {NICHES.map((n) => (
                        <option key={n} value={n} className="bg-slate-900">
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cc-city" className={labelClass}>
                      City Name *
                    </label>
                    <input
                      id="cc-city"
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Austin"
                      className={inputClass}
                      disabled={step === 'scanning'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-black shadow-[0_0_30px_rgba(37,211,102,0.4)] transition hover:shadow-[0_0_45px_rgba(37,211,102,0.6)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60"
                  >
                    Scan My City Now
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </form>
              </div>
            )}

            {step === 'scanning' && (
              <div className="animate-pop-in relative py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10">
                  <Loader2 className="h-8 w-8 animate-spin text-[#25D366]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">Scanning your city…</h3>
                <p className="mt-2 animate-pulse text-sm text-slate-400">
                  Checking database for existing {niche} partners in {city.trim()}...
                </p>

                <div
                  className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#25D366] to-[#4ade80] shadow-[0_0_12px_rgba(37,211,102,0.7)] transition-[width] duration-[2500ms] ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">{Math.round(progress)}%</p>
              </div>
            )}

            {step === 'result' && (
              <div className="animate-pop-in relative text-center">
                <div
                  className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366]/15 blur-[60px]"
                  aria-hidden="true"
                />

                <span className="inline-flex items-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.35)]">
                  🎉 City Available!
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
                  Good news, {name.trim()}! {city.trim()} is open for {niche}.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  We currently do not have an active partner in {city.trim()}. You are eligible to
                  claim this exclusive territory.
                </p>

                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-black shadow-[0_0_30px_rgba(37,211,102,0.45)] transition hover:shadow-[0_0_45px_rgba(37,211,102,0.6)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 sm:text-base"
                >
                  Lock In {city.trim()} Now Before A Competitor Does
                  <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 text-xs text-slate-500 underline-offset-4 transition hover:text-slate-300 hover:underline"
                >
                  Check another city
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}