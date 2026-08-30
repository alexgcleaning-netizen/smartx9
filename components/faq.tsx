'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'How long does setup take?',
    a: 'Usually 24 to 48 hours. We build your site, load your price calculator, and wire up your phone alerts. You just confirm basic business details and start taking leads.',
  },
  {
    q: 'Is there a long contract?',
    a: 'Zero long-term contracts. You pay month-to-month ($20/mo launch price) and can cancel anytime with 1 click. If the system doesn’t make you money, you shouldn’t pay.',
  },
  {
    q: 'Do I need to switch my current website?',
    a: 'No. We can either replace your old site with a high-speed upgrade or plug our instant lead calculator straight into your current domain. We handle 100% of the tech work.',
  },
  {
    q: 'How do the instant alerts actually work?',
    a: 'The second a visitor unlocks their price quote, our system sends an instant SMS and phone ping straight to your cell in under 33 seconds—complete with their name, phone number, and requested service.',
  },
  {
    q: 'What if I serve a niche you haven’t listed?',
    a: 'If answering fast wins jobs in your industry, SMART X9 works. Whether you do epoxy flooring, window cleaning, or lawn care—if calling back first beats your competitors, we customize the system for your business.',
  },
  {
    q: 'Can it handle cold outreach too?',
    a: 'Yes. While the core engine turns site visitors into instant bookings, our system can also send automated email and SMS follow-ups to wake up your old customer list on autopilot.',
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
            Frequently Asked Questions
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
