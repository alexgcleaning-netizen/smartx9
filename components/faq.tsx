'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'How long does setup take?',
    a: 'Most builds go live within days, not weeks. We handle the site, the quote form, and the alert wiring — you just confirm details and start answering leads.',
  },
  {
    q: 'Is there a long contract?',
    a: 'No lock-in games. Plans are month-to-month unless you choose otherwise. The system should earn its keep every month.',
  },
  {
    q: 'Do I need to switch my current website?',
    a: 'Not necessarily. We can build a dedicated high-converting landing site or integrate the quote system into what you already have.',
  },
  {
    q: 'How do the WhatsApp alerts actually work?',
    a: 'When a lead submits your quote form, you get an instant notification with their name, phone, and job details — plus a one-tap way to call or message them back.',
  },
  {
    q: 'What if I serve a niche you haven’t listed?',
    a: 'The engine is niche-agnostic. If speed-to-lead wins you jobs, it fits. We tailor the copy and form to your trade.',
  },
  {
    q: 'Can it handle cold outreach too?',
    a: 'Yes — higher tiers include an always-on cold email engine that pulls prospects, sends personalized outreach, and logs replies automatically.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur transition-colors hover:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
