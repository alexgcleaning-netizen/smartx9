import { Check, Lock, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site'

const STARTER_FEATURES = [
  'High-Speed Local Website',
  '33-Second Price Calculator',
  'Instant WhatsApp & SMS Phone Pings',
  'Auto 5-Star Google Review Generator',
  'Automated Lead Vault',
  '100% Done-For-You Setup',
]

const LOCKED_TIERS = [
  {
    name: 'Growth',
    price: '$197',
    tagline: 'For shops ready to grow.',
    features: [
      'Everything in Starter',
      'WhatsApp + SMS pings',
      'Full ranking website',
      'Auto review engine',
      'Priority support',
    ],
  },
  {
    name: 'Pro',
    price: '$497',
    tagline: 'The most reach and hands-off help.',
    features: [
      'Everything in Growth',
      'Automated outreach',
      'Multi-service campaigns',
      'Custom integrations',
      'Dedicated manager',
    ],
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
            Limited Time Launch Offer
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Get full access to our complete automated lead engine for just $20/mo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Active — Starter Launch Deal */}
          <div className="relative flex flex-col rounded-3xl border-2 border-[#25D366] bg-slate-900/70 p-7 shadow-[0_0_25px_rgba(37,211,102,0.3)]">
            <span className="absolute -top-3.5 left-7 rounded-full bg-[#25D366] px-3 py-1 text-xs font-bold text-black shadow-[0_0_18px_rgba(37,211,102,0.6)]">
              🔥 SPECIAL LAUNCH DEAL
            </span>

            <h3 className="font-serif text-xl font-semibold text-white">Starter</h3>

            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-5xl font-bold text-white">$20</span>
              <span className="text-lg text-muted-foreground">/ mo</span>
              <span className="line-through text-slate-400 text-lg">$97/mo Value</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              All features unlocked. No setup fees. Cancel anytime.
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {STARTER_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 text-base font-bold text-black shadow-[0_0_30px_-6px_rgba(37,211,102,0.8)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Claim All Features For $20/mo →
            </a>
          </div>

          {/* Locked tiers */}
          {LOCKED_TIERS.map((tier) => (
            <div key={tier.name} className="relative">
              <div
                aria-hidden="true"
                className="relative h-full select-none overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-7 opacity-50 blur-[2px] pointer-events-none"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/ mo</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl bg-slate-950/70 backdrop-blur-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 shadow-[0_0_20px_rgba(37,211,102,0.25)]">
                  <Lock className="h-5 w-5 text-slate-200" aria-hidden="true" />
                </span>
                <p className="mt-3 text-sm font-bold uppercase tracking-widest text-white">
                  Currently Locked
                </p>
                <p className="mt-1 max-w-[240px] text-center text-xs leading-relaxed text-slate-400">
                  All features included in $20 Starter Launch Deal
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
