import { MessageCircle, PlayCircle, Zap } from 'lucide-react'
import { CONTACT } from '@/lib/site'
import { PhoneAlert } from './phone-alert'

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
          <span className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-center text-sm font-medium text-muted-foreground backdrop-blur">
            <Zap className="h-4 w-4 text-cyan" aria-hidden="true" />
            Turn Your Website Into An Automated Lead Capture Engine
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Win the customer before anyone else can{' '}
            <span className="text-primary glow-text">answer</span>.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            SMART X9 turns website visitors into paid jobs. When someone asks for a price,
            your phone gets a WhatsApp ping right away — so you can call them back in
            minutes, not hours.
          </p>

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
          <PhoneAlert />
        </div>
      </div>
    </section>
  )
}
