import { CheckCircle2, FileText, MessageCircle } from 'lucide-react'

const STEPS = [
  {
    icon: FileText,
    step: '01',
    title: 'Review the page',
    body: 'Check out the features, test the demo, and check your city.',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'Send a 1-line chat',
    body: 'Click to message us directly on WhatsApp or Messenger.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'We do the work',
    body: 'Our team replies instantly in chat and handles 100% of your setup for you.',
  },
]

export function Problem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            No Sales Calls. No Pushy Pitches. No{' '}
            <span className="text-secondary">$1,000</span> Contracts.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We won&apos;t waste your time with 45-minute booking calls or high-pressure phone
            pitches. Everything we build, offer, and charge is 100% transparent right here on this
            page.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <s.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
              <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                {s.step}
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
