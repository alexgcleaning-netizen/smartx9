import { Gift, Lock, MessageCircle, PlayCircle, Send, Zap } from 'lucide-react'
import { CONTACT, FACEBOOK_GROUP } from '@/lib/site'
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
        <div className="animate-float-in text-center">
          <h1 className="mx-auto max-w-3xl text-balance font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
            Turn Your Zero Visitors Website Into A{' '}
            <span className="text-primary">24/7 Lead-Capture Engine.</span>
          </h1>

          <div className="mx-auto mt-6 max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
              Turn random website visitors into paid jobs while you sleep. Complete done-for-you
              setup, instant phone alerts, and a 1-second high-speed site for just{' '}
              <span className="font-bold text-[#25D366]">$20/mo</span>.
            </p>

            <div className="inline-block rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2 shadow-lg">
              <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-bold text-white sm:text-base">
                <Lock className="h-4 w-4 shrink-0 text-[#25D366]" aria-hidden="true" />
                <span>
                  <span className="text-[#25D366]">1 City. 1 Niche. 1 Partner.</span> We build your
                  engine so you answer first every time.
                </span>
              </p>
            </div>

            <p className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] sm:text-sm">
              <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
              Act before your local competitor claims your spot.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg font-semibold text-white sm:text-xl">
              Want to be that{' '}
              <span className="text-primary [text-shadow:0_0_8px_rgba(168,85,247,0.9)] [box-shadow:inset_0_-3px_0_rgba(168,85,247,1),0_0_10px_rgba(168,85,247,0.55)]">
                Top 1%
              </span>
              ?{' '}
              <span className="animate-shine-text font-bold">Let&apos;s Chat</span>
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_var(--primary)] transition-transform hover:scale-[1.03]"
              >
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                How it works
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-[#07120c] shadow-[0_0_20px_-4px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={CONTACT.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#00B2FF] to-[#006AFF] px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(0,132,255,0.7)] transition-transform hover:scale-[1.03]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Messenger
              </a>
              <a
                href={FACEBOOK_GROUP}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-bonus-glow inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-primary/50 bg-primary/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
              >
                <Gift className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Claim FREE Access To Our Facebook Group (
                  <span className="font-bold text-primary">$99 Value</span>)
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="animate-float-in [animation-delay:120ms]">
          <NotificationCards />
        </div>
      </div>
    </section>
  )
}
