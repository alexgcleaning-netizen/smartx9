import {
  Zap,
  BellRing,
  Globe,
  Star,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Globe,
    title: 'High-Speed Local Website',
    body: 'Built to rank high on Google and load in under 1 second. Beats every local competitor in your area so buyers never leave.',
  },
  {
    icon: Zap,
    title: '33-Second Price Calculator',
    body: 'Visitors type in basic details to unlock their price. Turns random website visitors into hot leads instantly.',
  },
  {
    icon: BellRing,
    title: 'Instant Phone Pings',
    body: 'Your phone gets a SMS alert in seconds. Call leads back before your competitors even see the notification.',
  },
  {
    icon: Star,
    title: 'Auto 5-Star Reviews',
    body: 'Sends automatic review requests to happy clients after a finished job. Builds your 5-star Google rating on autopilot.',
  },
  {
    icon: BarChart3,
    title: 'Automated Lead Vault',
    body: 'Every name, phone number, and quote estimate is saved in one clean dashboard. Never lose a client contact again.',
  },
  {
    icon: ShieldCheck,
    title: '100% Done-For-You Setup',
    body: 'We write the copy, design the site, wire up the code, and launch it. You only pick up the phone and collect payments.',
  },
]

export function WhatsIncluded() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            What&apos;s included
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Everything Included In Your System
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Zero tech work for you. We build, launch, and manage the entire engine.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] transition-shadow group-hover:shadow-[0_0_24px_-4px_rgba(37,211,102,0.8)]">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
