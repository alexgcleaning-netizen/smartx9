import { Check, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site'

const TIERS = [
  {
    name: 'Starter',
    price: '$X99',
    cadence: '/mo',
    tagline: 'Get your customer tool going.',
    features: [
      'Fast price form',
      'WhatsApp customer pings',
      '1-page selling site',
      'Customer list',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$X99',
    cadence: '/mo',
    tagline: 'For shops ready to grow.',
    features: [
      'Everything in Starter',
      'WhatsApp + text pings',
      'Full easy-to-find website',
      'Auto review asks',
      'Fast help',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    price: '$X,X99',
    cadence: '/mo',
    tagline: 'The most reach and hands-off help.',
    features: [
      'Everything in Growth',
      'Auto email reach-out',
      'Ad runs for many jobs',
      'Custom hook-ups',
      'Your own helper',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[380px] w-[560px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Simple plans that pay for themselves with one job.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Sample prices — real numbers go here once plans are set.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-7 backdrop-blur ${
                tier.featured
                  ? 'border-primary/60 bg-card/80 shadow-[0_0_60px_-20px_var(--primary)]'
                  : 'border-border bg-card/50'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.cadence}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.featured ? 'text-primary' : 'text-success'
                      }`}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  tier.featured
                    ? 'bg-primary text-primary-foreground shadow-[0_0_30px_-6px_var(--primary)]'
                    : 'border border-border bg-muted/40 text-foreground hover:bg-muted'
                }`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
