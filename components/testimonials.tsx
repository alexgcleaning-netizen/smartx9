'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'Placeholder testimonial — replace with a real client quote. Keep it specific: what changed, how fast, and the result they felt.',
    name: 'Client Name',
    role: 'Owner, Roofing Co.',
  },
  {
    quote:
      'Placeholder testimonial — a second voice from a different niche builds trust. Short, punchy, and outcome-focused works best.',
    name: 'Client Name',
    role: 'Founder, Cleaning Services',
  },
  {
    quote:
      'Placeholder testimonial — mention the WhatsApp alerts or speed-to-lead directly to reinforce the core promise.',
    name: 'Client Name',
    role: 'Director, Restoration Group',
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const t = TESTIMONIALS[i]

  const prev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setI((v) => (v + 1) % TESTIMONIALS.length)

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Testimonials
        </p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          What owners say.
        </h2>

        <div className="mt-12 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur sm:p-12">
          <Quote className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
          <blockquote className="mt-6 text-balance font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-medium text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
