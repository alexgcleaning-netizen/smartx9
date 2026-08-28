import { MessageCircle, Phone } from 'lucide-react'

export function PhoneAlert() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* glow behind phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-primary/30 blur-3xl"
      />

      <div className="rounded-[2.5rem] border border-border bg-card/70 p-3 shadow-2xl backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#07070c]">
          {/* notch */}
          <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />

          {/* status bar */}
          <div className="flex items-center justify-between px-6 pb-2 pt-3 font-mono text-[11px] text-muted-foreground">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-success" />
              LTE
            </span>
          </div>

          <div className="space-y-3 px-4 pb-8 pt-6">
            {/* live incoming alert */}
            <div className="animate-float-in rounded-2xl border border-primary/40 bg-primary/10 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-semibold text-primary-foreground">
                  <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="absolute inset-0 animate-ping-slow rounded-full bg-primary/60" />
                    <MessageCircle className="relative h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  New customer
                </span>
                <span className="font-mono text-[10px] text-cyan">now</span>
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">Marcus T. — Roofing</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                &ldquo;My back roof got hurt in the storm. I need a price this week.&rdquo;
              </p>
              <p className="mt-2 font-mono text-xs text-foreground">+1 (555) 018-4420</p>
            </div>

            {/* older alert */}
            <div className="rounded-2xl border border-border bg-muted/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">New customer</span>
                <span className="font-mono text-[10px] text-muted-foreground">2m ago</span>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">Dana R. — Tree removal</p>
              <p className="mt-1 text-xs text-muted-foreground">Asked for a price</p>
            </div>

            {/* callback button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-success/90 py-3 text-sm font-semibold text-[#07120c]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call back now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
