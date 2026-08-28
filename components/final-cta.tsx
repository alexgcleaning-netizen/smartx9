import { MessageCircle, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/40 bg-gradient-to-br from-primary via-[#8b31d9] to-secondary p-10 text-center sm:p-16">
        <div
          aria-hidden="true"
          className="grid-texture pointer-events-none absolute inset-0 opacity-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan/30 blur-[100px]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Stop losing jobs to whoever answers first. Be first.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Get the Speed-to-Lead system live and turn your website into a booking machine.
            Message us and we&apos;ll map it to your business today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-medium text-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
              Start on WhatsApp
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Try the live demo
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
