import Image from 'next/image'
import {
  BadgeCheck,
  GraduationCap,
  MessageCircle,
  Quote,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

import { CONTACT, SOCIALS } from '@/lib/site'
import profilePhoto from '@/images/profile photo.jpeg'

type IconProps = { className?: string }

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const CREDENTIALS = [
  {
    icon: GraduationCap,
    value: 'Finance Scholar',
    label: 'Department of Finance, University of Colombo',
  },
  {
    icon: TrendingUp,
    value: '9+ Years',
    label: 'Scaling international client revenue',
  },
  {
    icon: ShieldCheck,
    value: 'Done-For-You',
    label: 'Built, launched and managed for you',
  },
]

const STORY = [
  'It started with a simple observation: in every market he studied, the business that answered first almost always won the job — no matter the price, the reviews, or how nice the website looked.',
  'Ruchith is an undergraduate scholar in the Department of Finance at the University of Colombo, an active venture-builder, and a growth strategist with over 9 years of hands-on experience scaling international client revenues. Driven by a deep passion for learning, online marketing, and high-ROI investments, he builds and scales high-performance business systems alongside his academic pursuits.',
  'Every automated workflow, every line of high-converting copy, and every instant alert engine he ships is engineered for one purpose — turning website visitors into predictable revenue, with all the technical complexity kept invisible to the local business owner.',
]

export function Founder() {
  return (
    <section id="founder" className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[380px] w-[380px] rounded-full bg-primary/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-[300px] w-[300px] rounded-full bg-secondary/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Who you&apos;re working with
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Meet The Person Behind Your System
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No faceless agency. No outsourced account manager. You deal directly with the person
            who designs, builds, and launches your lead engine.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Founder card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center sm:p-8 lg:col-span-2">
            <div className="mx-auto w-fit">
              <Image
                src={profilePhoto}
                alt="Ruchith Samudika — Founder & Lead Systems Engineer of SMART X9"
                className="h-28 w-28 rounded-full object-cover shadow-[0_0_30px_rgba(168,85,247,0.45)] ring-2 ring-primary/60"
              />
            </div>
            <h3 className="mt-5 flex items-center justify-center gap-2 text-xl font-bold text-white">
              Ruchith Samudika
              <BadgeCheck className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#25D366]">
              Founder &amp; Lead Systems Engineer
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              I build every system myself — and I answer your messages myself too. If your site
              isn&apos;t bringing you booked jobs, you talk straight to me.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-black shadow-[0_0_18px_rgba(37,211,102,0.35)] transition-all hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat with Ruchith
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-[#25D366]/60 hover:text-white hover:shadow-[0_0_18px_rgba(37,211,102,0.35)]"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-[#25D366]/60 hover:text-white hover:shadow-[0_0_18px_rgba(37,211,102,0.35)]"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-[#25D366]/60 hover:text-white hover:shadow-[0_0_18px_rgba(37,211,102,0.35)]"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Story */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 lg:col-span-3">
            <figure className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-3 text-pretty font-serif text-lg leading-relaxed text-foreground">
                “The business that answers first almost always wins the job — no matter the price,
                the reviews, or how nice the website looks.”
              </blockquote>
            </figure>

            <div className="mt-6 space-y-4">
              {STORY.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.value}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <c.icon className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-white">{c.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              That&apos;s why every system I ship is measured on one thing only:{' '}
              <span className="font-semibold text-foreground">
                did it put more booked jobs on your calendar?
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

