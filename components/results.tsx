import { TrendingUp, Timer, PhoneCall } from 'lucide-react'

const STATS = [
  { icon: TrendingUp, value: '+40%', label: 'Increase in booked jobs' },
  { icon: Timer, value: '33s', label: 'Average time to phone alert' },
  { icon: PhoneCall, value: '5×', label: 'Faster callback than competitors' },
]

const CASES = [
  {
    niche: 'House Cleaning',
    headline: '6 leads came through in just 14 days',
    quote:
      'Samudika Thennakoon built and updated our website setup. Less than a week after launching the update, we already had half a dozen leads come through. 6 real leads in 14 days.',
    outcome: '6 Leads in 14 Days',
  },
  {
    niche: 'Roofing',
    headline: 'Zero leads for 3 weeks... then a $14,000 job',
    quote:
      "We didn't get a single lead for the first 20 days. We were wondering if it was working. Then on day 21, our first instant alert pinged our phone while we were up on a roof. We called the homeowner back in 33 seconds and signed a $14,000 roofing job.",
    outcome: '$14,000 Job Won (Day 21 Lead)',
  },
]

export function Results() {
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Results</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Proof Speed Wins Jobs
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Real numbers from local service businesses using our system.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <s.icon className="h-6 w-6 text-[#25D366]" aria-hidden="true" />
              <p className="mt-4 font-mono text-4xl font-bold text-white">{s.value}</p>
              <p className="mt-2 text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {CASES.map((c) => (
            <div
              key={c.niche}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <span className="w-fit rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-[#25D366]">
                {c.niche}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{c.headline}</h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                “{c.quote}”
              </p>
              <span className="mt-5 w-fit rounded-full bg-[#25D366]/15 px-3 py-1.5 text-sm font-bold text-[#25D366] shadow-[0_0_14px_rgba(37,211,102,0.25)]">
                {c.outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
