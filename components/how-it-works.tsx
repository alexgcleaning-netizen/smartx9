import { FileText, BellRing, PhoneCall, CalendarCheck } from 'lucide-react'

const STEPS = [
  {
    icon: FileText,
    title: 'They ask for a price',
    body: 'Someone fills out your quick form — name, phone, and job in just seconds.',
  },
  {
    icon: BellRing,
    title: 'Fast WhatsApp ping',
    body: 'It shows up on your phone right away with all the details, ready to go.',
  },
  {
    icon: PhoneCall,
    title: 'Call back in minutes',
    body: 'You call while they still want it — before they text anyone else.',
  },
  {
    icon: CalendarCheck,
    title: 'Job booked',
    body: 'Faster answers win more jobs. The customer turns into money on your calendar.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            From click to booked job in four easy steps.
          </h2>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_24px_-4px_var(--primary)]">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
