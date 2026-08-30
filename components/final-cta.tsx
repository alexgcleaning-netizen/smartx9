import { MessageCircle, Send, PlayCircle, ArrowRight } from 'lucide-react'
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
            Turn Your Zero Visitors Website Into A 24/7 Booking Engine.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Grab our $20/mo launch deal before your top local competitor locks you out. No sales
            calls required—just text us on WhatsApp or Messenger to start.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-[#07120c] shadow-[0_0_24px_-4px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Lock In $20/mo Deal On WhatsApp
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={CONTACT.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#00B2FF] to-[#006AFF] px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_24px_-4px_rgba(0,132,255,0.7)] transition-transform hover:scale-[1.03]"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              Messenger
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Try The Live Demo First
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
