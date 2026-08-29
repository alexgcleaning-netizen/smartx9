import { MessageCircle, PlayCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site'
import { NotificationCards } from './notification-cards'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 h-[360px] w-[360px] rounded-full bg-secondary/20 blur-[120px]"
      />
      <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="animate-float-in">
          <span className="animate-float-bob inline-flex flex-wrap items-center justify-center rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-center text-sm font-medium text-muted-foreground backdrop-blur">
            We Will Turn Your Website Into An Automated Lead Capture Engine
          </span>

          <div className="mt-6">
            <h1 className="max-w-2xl text-balance font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              How many{' '}
              <span className="font-black text-primary">new clients</span> did{' '}
              <span className="font-black text-primary">your website</span> bring
              you this month?
            </h1>
          </div>

          <div className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            <p className="leading-relaxed">
              <span className="font-semibold text-white">Harvard Business Review</span> found a
              brutal fact: <span className="font-bold text-white">70% of local websites</span> get{' '}
              <span className="font-bold text-white">zero traffic</span> from Google. The rest take{' '}
              <span className="font-bold text-white">42 hours to reply</span> to a lead. And{' '}
              <span className="font-bold text-white">23% never reply at all</span>. Only{' '}
              <span className="font-bold text-white">3% of businesses reply within 5 minutes</span>
              —giving them a <span className="font-bold text-white">90% chance to win that client</span>.
              Our system puts you inside that{' '}
              <span className="font-bold text-white">top 3%</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-[0_0_36px_-6px_var(--primary)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Start on WhatsApp
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted/40 px-6 py-3.5 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
            >
              <PlayCircle className="h-5 w-5 text-cyan" aria-hidden="true" />
              See it work
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { v: '<60s', l: 'to first ping' },
              { v: '5x', l: 'more jobs won' },
              { v: '24/7', l: 'always working' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-2xl font-bold text-foreground">{s.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-float-in [animation-delay:120ms]">
          <NotificationCards />
        </div>
      </div>
    </section>
  )
}
