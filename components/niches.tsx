import {
  Home,
  Sparkles,
  Trees,
  Droplets,
  Wrench,
  Truck,
  Bug,
  Plus,
} from 'lucide-react'

const NICHES = [
  { icon: Home, label: 'Roofing' },
  { icon: Sparkles, label: 'Cleaning' },
  { icon: Trees, label: 'Tree removal' },
  { icon: Droplets, label: 'Repair' },
  { icon: Wrench, label: 'Heating & Plumbing' },
  { icon: Truck, label: 'Moving' },
  { icon: Bug, label: 'Bug control' },
  { icon: Plus, label: '& more' },
]

export function Niches() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Made for local jobs
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            One tool, every kind of job.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            If being fast wins you the customer, SMART X9 fits. Same tool, set up for your
            kind of work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {NICHES.map((n) => (
            <div
              key={n.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/60 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_24px_-6px_var(--primary)]">
                <n.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground">{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
