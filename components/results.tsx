import { TrendingUp, Timer, PhoneCall } from 'lucide-react'

const STATS = [
  { icon: TrendingUp, value: '+X%', label: 'increase in booked jobs', sub: 'placeholder metric' },
  { icon: Timer, value: 'Xs', label: 'average time to first alert', sub: 'placeholder metric' },
  { icon: PhoneCall, value: 'X×', label: 'more leads called back', sub: 'placeholder metric' },
]

const CASES = [
  {
    niche: 'Roofing',
    quote:
      'Placeholder case study — swap in a real client story here once results come in. Describe the before, the change, and the measurable outcome.',
    metric: '+X jobs / month',
  },
  {
    niche: 'Restoration',
    quote:
      'Placeholder case study — a short, specific win works best. Focus on speed-to-lead and revenue impact for maximum credibility.',
    metric: 'X min avg response',
  },
]

export function Results() {
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Results</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Proof that speed wins jobs.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Placeholder numbers — ready to fill with real client data as it comes in.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <s.icon className="h-6 w-6 text-cyan" aria-hidden="true" />
              <p className="mt-4 font-mono text-4xl font-bold text-foreground">{s.value}</p>
              <p className="mt-2 text-sm text-foreground">{s.label}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {CASES.map((c) => (
            <div
              key={c.niche}
              className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-primary">
                {c.niche}
              </span>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {c.quote}
              </p>
              <p className="mt-4 font-mono text-lg font-bold text-foreground">{c.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
