import { Clock, TrendingDown, PhoneOff } from 'lucide-react'

const STATS = [
  {
    icon: TrendingDown,
    value: '78%',
    label: 'of people buy from the shop that answers first.',
  },
  {
    icon: Clock,
    value: '5 min',
    label: 'is all you get. Wait longer and your chance to win drops 10x.',
  },
  {
    icon: PhoneOff,
    value: '48%',
    label: 'of new customers never get a call back. That is money walking out the door.',
  },
]

export function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Customers don&apos;t wait. They text the next{' '}
            <span className="text-secondary">three</span> shops too.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Being fast is the whole game. The shop that answers first almost always wins the
            job — no matter the price, the reviews, or how nice the website looks.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <s.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
              <p className="mt-4 font-mono text-4xl font-bold text-foreground">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
