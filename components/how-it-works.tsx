import { FileText, Calculator, CalendarCheck, BellRing } from 'lucide-react'

const STEPS = [
  {
    icon: FileText,
    step: '01',
    title: 'We Double Your Traffic',
    body: (
      <>
        We fix your Google setup so{' '}
        <span className="font-semibold text-foreground">twice as many local buyers</span> find your
        site. More visitors mean more money.
      </>
    ),
    accent: 'text-primary border-primary/30 bg-primary/10 group-hover:shadow-[0_0_24px_-4px_var(--primary)]',
  },
  {
    icon: Calculator,
    step: '02',
    title: 'Instant Price Calculator',
    body: (
      <>
        We place a <span className="font-semibold text-foreground">33-second quote tool</span> on
        your site. Visitors enter their name and phone to unlock their price.
      </>
    ),
    accent: 'text-success border-success/40 bg-success/10 group-hover:shadow-[0_0_24px_-4px_var(--success)]',
  },
  {
    icon: CalendarCheck,
    step: '03',
    title: '33-Second Auto-Booking',
    body: (
      <>
        Our system texts their quote in <span className="font-semibold text-foreground">33 seconds</span> and lets
        them pick a booking date on the spot.
      </>
    ),
    accent: 'text-primary border-primary/30 bg-primary/10 group-hover:shadow-[0_0_24px_-4px_var(--primary)]',
  },
  {
    icon: BellRing,
    step: '04',
    title: 'You Wake Up To Paid Jobs',
    body: (
      <>
        You get instant phone alerts for every lead. Most owners wake up with{' '}
        <span className="font-semibold text-foreground">2 to 3 new jobs</span> already on their
        calendar.
      </>
    ),
    accent: 'text-success border-success/40 bg-success/10 group-hover:shadow-[0_0_24px_-4px_var(--success)]',
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
            How You Get Booked Jobs On Autopilot
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From invisible website to booked calendar in 4 simple steps.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.step}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-shadow ${step.accent}`}
                >
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm font-bold text-foreground/35">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

