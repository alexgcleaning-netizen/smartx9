import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Terms, Privacy & Refund Policy — SMART X9',
  description:
    'SMART X9 risk-free satisfaction guarantee, 30-day money-back promise, flexible $17/mo subscription policy, strict data protection, and support contact details.',
}

const POLICY_WEBSITE = 'https://smartx9leads.site'
const POLICY_EMAIL = 'support@smartx9leads.site'

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="relative px-4 py-16 sm:px-6 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 h-[300px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-3xl">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </a>

          <article className="mt-6 rounded-3xl border border-border bg-card/60 p-7 text-slate-300 backdrop-blur sm:p-10">
            <header>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Legal</p>
              <h1 className="mt-3 text-balance font-serif text-3xl font-bold leading-tight tracking-tight text-white">
                SMART X9 — Terms, Privacy &amp; Risk-Free Satisfaction Policy
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">Last Updated: September 2026</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Website:{' '}
                <a
                  href={POLICY_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:text-primary/80 hover:underline"
                >
                  www.smartx9leads.site
                </a>
              </p>
            </header>

            {/* 1. OUR 100% RISK-FREE SATISFACTION & REFUND GUARANTEE */}
            <section className="mt-12">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
                1. OUR 100% RISK-FREE SATISFACTION &amp; REFUND GUARANTEE
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                At SMART X9, we believe the entire risk of doing business should rest on our
                shoulders, not yours. We operate with zero hidden traps, zero long-term
                commitments, and complete transparency.
              </p>

              <h3 className="mt-8 text-base font-semibold text-white">
                A. $0 Upfront Setup Guarantee
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You pay $0 upfront to start. We fully build, configure, and deploy your customized
                website upgrade, local SEO structure, and 33-second price calculator before you pay
                anything. You review and test the live demo system on your own phone first. If you
                don&apos;t love it, you walk away without spending a single penny.
              </p>
              <h3 className="mt-8 text-base font-semibold text-white">
                B. 30-Day &quot;100% Satisfaction or Money-Back&quot; Guarantee
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We want you to feel 100% confident in your investment. If within your first 30 days
                of activating your subscription you feel our system has not delivered immense value
                to your local business, simply message us. We will refund 100% of your initial $17
                payment instantly—no questions asked, no hard feelings, and no awkward
                conversations.
              </p>

              <h3 className="mt-8 text-base font-semibold text-white">
                C. Flexible $17/mo Subscription (Cancel Anytime in 1 Click)
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="font-semibold text-slate-200">Limited-Time Rate Lock:</strong>{' '}
                  The $17/mo monthly investment is a special limited-time launch rate. While new
                  subscription packages and price updates will be introduced on smartx9leads.site
                  over time, your $17/mo rate is permanently locked in for life as long as your
                  subscription remains active.
                </li>
                <li>
                  <strong className="font-semibold text-slate-200">No Contracts or Lock-ins:</strong>{' '}
                  You are never trapped in a long-term contract. Our service runs strictly
                  month-to-month.
                </li>
                <li>
                  <strong className="font-semibold text-slate-200">Instant Cancellation:</strong>{' '}
                  You can cancel your subscription at any time with 1 click inside your PayPal
                  account or by sending a simple 1-line email to{' '}
                  <a
                    href={`mailto:${POLICY_EMAIL}`}
                    className="text-primary transition-colors hover:text-primary/80 hover:underline"
                  >
                    {POLICY_EMAIL}
                  </a>
                  . Your service will simply end at the close of your current billing period with
                  zero cancellation fees or penalties.
                </li>
              </ul>
            </section>

            {/* 2. PRIVACY POLICY */}
            <section className="mt-12">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
                2. PRIVACY POLICY
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We protect your business information like our own. We collect only what is strictly
                necessary to run your lead-generation infrastructure and send instant lead alerts to
                your phone.
              </p>

              <h3 className="mt-8 text-base font-semibold text-white">A. What We Collect</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="font-semibold text-slate-200">Account Info:</strong> Your
                  business name, owner name, phone number, WhatsApp number, and email address.
                </li>
                <li>
                  <strong className="font-semibold text-slate-200">Lead Info:</strong> Customer
                  inquiry data captured by your customized price calculator for the sole purpose of
                  delivering real-time alerts to you.
                </li>
              </ul>

              <h3 className="mt-8 text-base font-semibold text-white">B. Strict Data Protection</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="font-semibold text-slate-200">We NEVER Sell Data:</strong>{' '}
                  Your customer leads and personal contact info will never be sold, rented, traded,
                  or shared with third parties or competitors.
                </li>
                <li>
                  <strong className="font-semibold text-slate-200">Enterprise Security:</strong> All
                  web traffic and lead transmissions are encrypted using bank-grade 256-bit SSL
                  encryption.
                </li>
              </ul>
            </section>

            {/* 3. CONTACT & SUPPORT */}
            <section className="mt-12">
              <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
                3. CONTACT &amp; SUPPORT
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Need help, have a question, or want to make changes to your account? We are here to
                support your business every step of the way.
              </p>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong className="font-semibold text-slate-200">Website:</strong>{' '}
                  <a
                    href={POLICY_WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-primary/80 hover:underline"
                  >
                    www.smartx9leads.site
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-slate-200">Direct Support Email:</strong>{' '}
                  <a
                    href={`mailto:${POLICY_EMAIL}`}
                    className="text-primary transition-colors hover:text-primary/80 hover:underline"
                  >
                    {POLICY_EMAIL}
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-slate-200">Response Commitment:</strong> We
                  aim to answer all client inquiries within a few business hours.
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
