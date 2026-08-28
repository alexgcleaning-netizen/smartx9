import { MessageCircle, Send } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/site'
import { Logo } from './logo'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8h4.5v14H.24V8Zm7.5 0h4.31v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22h-4.5V8Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Speed-to-Lead systems for local service businesses. Turn website visitors into
              booked jobs — instantly.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </span>
            <div className="flex gap-3">
              {[
                { href: CONTACT.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
                { href: CONTACT.messenger, icon: Send, label: 'Messenger' },
                { href: CONTACT.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_-6px_var(--primary)]"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SMART X9. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">smartx9leads.com</p>
        </div>
      </div>
    </footer>
  )
}
