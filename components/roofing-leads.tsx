'use client'

import { useState } from 'react'
import {
  CircleCheck,
  KeyRound,
  Lock,
  LogIn,
  Mail,
  Phone,
  Radar,
  Send,
  ShieldHalf,
  X,
  Zap,
} from 'lucide-react'

import {
  ROOFING_CLAIM_FROM_NAME,
  ROOFING_CLAIM_SUBJECT,
  ROOFING_DEAL_LABEL,
  ROOFING_LEADS,
  ROOFING_PRICE_MONTHLY,
  VISIBLE_LEAD_COUNT,
  type RoofingLead,
} from '@/lib/roofing-leads'
import { ClaimDealForm } from '@/components/claim-deal-form'

const PRICE = ROOFING_PRICE_MONTHLY

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8h4.5v14H.24V8Zm7.5 0h4.31v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22h-4.5V8Z" />
    </svg>
  )
}

// Cold-email copy generated per lead — same offer as the original HTML file.
function buildEmail(lead: RoofingLead) {
  return {
    subject: `Emergency Commercial Roof Assessment — ${lead.city} Storm Impact Area`,
    body: `Hi ${lead.firstName},

Our automated weather radar picked up severe storm damage activity across commercial properties in ${lead.city} (${lead.zipCode}).

As a Property Manager handling portfolio assets for ${lead.company}, quick mitigation is critical before interior leaks compromise tenant operations.

OUR COMMERCIAL OFFER:
• Complimentary Thermal Infrared Roof Moisture Scan ($1,200 Value)
• Priority 24-Hour Post-Storm Emergency Inspection
• Zero-Out-Of-Pocket Insurance Claim Filing Assistance

Would you be open to a 5-minute call tomorrow morning to review damage assessments for your ${lead.city} properties?

Best regards,
Commercial Storm Response Team | SmartX9Leads Partner`,
  }
}

export function RoofingLeads() {
  const [unlocked, setUnlocked] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [unlockOpen, setUnlockOpen] = useState(false)
  const [emailLead, setEmailLead] = useState<RoofingLead | null>(null)
  const [sentLeadIds, setSentLeadIds] = useState<Set<string>>(new Set())

  const lockedCount = ROOFING_LEADS.length - VISIBLE_LEAD_COUNT

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (username.trim() === 'oklahoma' && password.trim() === 'okc') {
      setUnlocked(true)
      setLoginError('')
    } else {
      setLoginError('Invalid Username or Password. Please try again.')
    }
  }

  function confirmSendEmail() {
    if (!emailLead) return
    setSentLeadIds((prev) => new Set(prev).add(emailLead.id))
    setEmailLead(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-emerald-600 selection:text-white">
      {/* ── Login / access gate ─────────────────────────────────────────── */}
      {!unlocked && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="SmartX9Leads secure access"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10">
              <Lock className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-black text-white">SmartX9Leads™ Secure Access</h2>
            <p className="mt-1 text-xs text-slate-400">
              Property Managers &amp; Targeted Commercial Decision Makers Pipeline
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
              <div>
                <label
                  htmlFor="roofing-username"
                  className="mb-1 block text-xs font-semibold uppercase text-slate-400"
                >
                  Client Username
                </label>
                <input
                  id="roofing-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter username (e.g. oklahoma)"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="roofing-password"
                  className="mb-1 block text-xs font-semibold uppercase text-slate-400"
                >
                  Access Password
                </label>
                <input
                  id="roofing-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              {loginError && (
                <p role="alert" className="text-xs font-medium text-red-400">
                  {loginError}
                </p>
              )}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                <span>Access Oklahoma System</span>
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xs text-slate-500">
                Looking for exclusive access?{' '}
                <button
                  type="button"
                  onClick={() => setUnlockOpen(true)}
                  className="cursor-pointer font-semibold text-emerald-400 hover:underline"
                >
                  Claim Oklahoma Territory (${PRICE}/mo)
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Top radar alert bar ─────────────────────────────────────────── */}
      <div className="border-b border-emerald-800/40 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 px-4 py-3 text-xs shadow-xl sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="font-black uppercase tracking-wider text-emerald-400">
              Oklahoma Radar Feed:
            </span>
            <span className="text-slate-200">
              Severe Storm Cells Detected • Verified Property Managers &amp; Commercial Decision
              Makers Loaded
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>
              <ShieldHalf className="mr-1.5 inline h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              Territory Status: <strong>Exclusive (1 Partner Only)</strong>
            </span>
          </div>
        </div>
      </div>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 p-2.5 text-sm font-black tracking-tighter text-white shadow-lg shadow-emerald-600/30">
              S9X
            </div>
            <div>
              <h1 className="flex items-center text-lg font-black tracking-tight text-white sm:text-xl">
                smartx9leads.site<span className="text-emerald-400">/roofing</span>
              </h1>
              <p className="text-xs text-slate-400">
                Connecting Roofers directly to Property Managers &amp; Targeted Commercial Decision
                Makers
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setUnlockOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500"
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            <span>Unlock Territory (${PRICE}/mo)</span>
          </button>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────────────────── */}
      <main className="mx-auto w-full max-w-7xl flex-grow space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero notice */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-6 shadow-2xl sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-80 w-80 -translate-y-12 translate-x-12 rounded-full bg-emerald-600/10 blur-3xl"
          />
          <div className="relative z-10 max-w-3xl">
            <span className="rounded-full border border-emerald-800 bg-emerald-950/80 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
              Oklahoma Metro Storm Response System
            </span>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Direct Access to Property Managers &amp; Targeted Commercial Decision Makers
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              We only partner with <strong>one roofing company per city</strong> in Oklahoma. Below
              is a live preview of verified{' '}
              <strong>
                Property Managers, Asset Managers, Facilities Directors, and Commercial Decision
                Makers
              </strong>{' '}
              in recent storm-hit zip codes. Unlock the full engine today for just{' '}
              <strong>${PRICE}/month</strong> to get complete bulk databases and automated outreach
              pipelines loaded directly into your account.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setUnlockOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white shadow-xl shadow-emerald-600/30 transition hover:bg-emerald-500"
              >
                <KeyRound className="h-4 w-4" aria-hidden="true" />
                <span>Claim Oklahoma Territory — ${PRICE}/mo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Leads table */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 py-4">
            <h3 className="flex items-center text-base font-bold text-white">
              <Radar className="mr-2 h-4 w-4 text-emerald-500" aria-hidden="true" />
              Live Feed: Property Managers &amp; Targeted Commercial Decision Makers
            </h3>
            <span className="rounded-full border border-emerald-500/20 bg-slate-800 px-3 py-1 font-mono text-xs text-emerald-400">
              Showing {VISIBLE_LEAD_COUNT} Active Preview Leads
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/50 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-3.5">Decision Maker</th>
                  <th className="px-6 py-3.5">Portfolio / Company</th>
                  <th className="px-6 py-3.5">Storm Zone</th>
                  <th className="px-6 py-3.5">Direct Contact Data</th>
                  <th className="px-6 py-3.5 text-center">LinkedIn</th>
                  <th className="px-6 py-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {ROOFING_LEADS.map((lead, index) => {
                  const isVisible = index < VISIBLE_LEAD_COUNT
                  const wasSent = sentLeadIds.has(lead.id)
                  // Blurred teaser rows hide the real identity behind a hover-reveal.
                  const teaser = isVisible ? '' : ' blur-teaser'

                  return (
                    <tr key={lead.id} className="transition hover:bg-slate-900/60">
                      <td className="px-6 py-3.5 font-medium">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-teal-600 text-xs font-bold text-white">
                            {lead.firstName.charAt(0)}
                          </div>
                          <div>
                            <div className={`font-bold text-white${teaser}`}>
                              {isVisible
                                ? `${lead.firstName} ${lead.lastName}`
                                : `${lead.firstName} S.`}
                            </div>
                            <div className={`text-xs font-normal text-slate-400${teaser}`}>
                              {lead.role}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3.5">
                        <div className={`font-semibold text-slate-200${teaser}`}>{lead.company}</div>
                        <div className={`text-xs text-slate-400${teaser}`}>
                          {isVisible ? 'Commercial Asset' : 'Commercial Portfolio'}
                        </div>
                      </td>
                      <td className="px-6 py-3.5">
                        <div className="text-slate-200">{lead.city}</div>
                        <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-emerald-400">
                          {lead.zipCode}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <div className={`font-mono text-xs text-slate-200${teaser}`}>
                          <Mail className="mr-1 inline h-3 w-3 text-slate-500" aria-hidden="true" />
                          {lead.email}
                        </div>
                        <div className={`mt-0.5 text-xs text-slate-400${teaser}`}>
                          <Phone className="mr-1 inline h-3 w-3 text-slate-500" aria-hidden="true" />
                          {lead.phone}
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {isVisible && lead.linkedin ? (
                          <a
                            href={lead.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View LinkedIn"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950/80 text-emerald-400 transition hover:bg-emerald-900 hover:text-white"
                          >
                            <LinkedinIcon className="h-3.5 w-3.5" />
                          </a>
                        ) : isVisible ? (
                          <span className="text-xs text-slate-600">N/A</span>
                        ) : (
                          <Lock className="mx-auto h-3.5 w-3.5 text-amber-500/80" aria-hidden="true" />
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        {isVisible ? (
                          wasSent ? (
                            <span className="ml-auto flex w-fit items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-600/20 px-3 py-1.5 text-xs font-bold text-emerald-400">
                              <CircleCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                              Email Sent
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setEmailLead(lead)}
                              className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-black text-slate-950 shadow-md shadow-amber-500/10 transition hover:bg-amber-400"
                            >
                              <Send className="h-3.5 w-3.5" aria-hidden="true" />
                              <span>Send Email</span>
                            </button>
                          )
                        ) : (
                          <button
                            type="button"
                            onClick={() => setUnlockOpen(true)}
                            className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-400 transition hover:bg-amber-500/20"
                          >
                            <Lock className="h-3 w-3" aria-hidden="true" />
                            <span>Unlock (${PRICE}/mo)</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-500">
            {lockedCount} more verified contacts are loaded into your account after activation.
          </p>
        </div>
      </main>
      {/* ── Cold email preview modal ───────────────────────────────────── */}
      {emailLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Cold email preview"
        >
          <div className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setEmailLead(null)}
              aria-label="Close email preview"
              className="absolute right-4 top-4 cursor-pointer text-lg text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mb-6 flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/20 text-xl text-amber-400">
                <Send className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  Cold Email &amp; Commercial Offer Preview
                </h3>
                <p className="text-xs text-slate-400">
                  Targeting {emailLead.firstName} {emailLead.lastName} ({emailLead.role} at{' '}
                  {emailLead.company})
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300">
              <div>
                <span className="font-semibold uppercase text-slate-500">To:</span>{' '}
                <span className="text-white">
                  {emailLead.firstName} {emailLead.lastName} &lt;{emailLead.email}&gt;
                </span>
              </div>
              <div>
                <span className="font-semibold uppercase text-slate-500">Subject:</span>{' '}
                <span className="font-bold text-emerald-400">{buildEmail(emailLead).subject}</span>
              </div>
              <hr className="border-slate-800" />
              <div className="whitespace-pre-line font-sans text-sm leading-relaxed text-slate-200">
                {buildEmail(emailLead).body}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEmailLead(null)}
                className="cursor-pointer rounded-xl bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmSendEmail}
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-amber-500 px-6 py-2.5 text-xs font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Send Email Now</span>
              </button>
            </div>
          </div>
        </div>
      )}



      {/* ── Territory claim — reuses the main site lead form ───────────── */}
      <ClaimDealForm
        open={unlockOpen}
        onClose={() => setUnlockOpen(false)}
        price={PRICE}
        headline="Claim Exclusive Oklahoma Territory"
        ctaLabel={`Claim My Territory For $${PRICE}/mo`}
        dealLabel={ROOFING_DEAL_LABEL}
        subject={ROOFING_CLAIM_SUBJECT}
        fromName={ROOFING_CLAIM_FROM_NAME}
        showPaypal={false}
        successMessage={`Your details are saved and your Oklahoma roofing territory is reserved. Locking out your local competitors is the next step — our team will contact you shortly to activate your $${PRICE}/mo license and load the full, un-blurred contact database.`}
      />

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="mt-12 border-t border-slate-800 bg-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4">
          <p>
            SmartX9Leads.site/roofing &bull; Exclusive Oklahoma Commercial Storm Engine &bull; $
            {PRICE}/mo Partner License
          </p>
          <p className="mt-2">
            <a href="/" className="text-slate-400 transition-colors hover:text-emerald-400">
              ← Back to smartx9leads.site
            </a>
          </p>
        </div>
      </footer>

    </div>
  )
}
