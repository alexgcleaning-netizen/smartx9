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
    icon: Zap,
    title: 'Fast price form',
    body: 'A quick form that grabs customers the moment they want you most.',
  },
  {
    icon: BellRing,
    title: 'WhatsApp & text pings',
    body: 'Every form pings your phone in seconds with all the details.',
  },
  {
    icon: Globe,
    title: 'Easy-to-find website',
    body: 'A fast, phone-friendly site made to show up near the top and load in under a second.',
  },
  {
    icon: Star,
    title: 'Auto review asks',
    body: 'It nudges happy customers to leave 5-star reviews after the job, all on its own.',
  },
  {
    icon: BarChart3,
    title: 'Customer list',
    body: 'Every customer saved and sorted so no one slips away.',
  },
  {
    icon: ShieldCheck,
    title: 'We set it all up',
    body: 'We build it, hook it up, and turn it on. You just answer the customers that come in.',
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
            Everything you need to get and win customers.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_24px_-4px_var(--primary)]">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
