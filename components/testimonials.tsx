import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { SOCIALS } from '@/lib/site'
import profilePhoto from '@/images/profile photo.jpeg'
import testimonialShotOne from '@/images/testimonials (1).jpg'
import testimonialShotTwo from '@/images/testimonials (2).jpg'
import testimonialShotThree from '@/images/testimonials (3).jpg'

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

const RECOMMENDATIONS = [
  { src: testimonialShotOne, alt: 'Written client recommendation — Daniel Rathbone', delay: '0s' },
  { src: testimonialShotTwo, alt: 'Written client recommendation — Jose Barraza', delay: '1.2s' },
  { src: testimonialShotThree, alt: 'Written client recommendation — Emily Graves', delay: '2.4s' },
]

const BIO = [
  'It started with a simple observation: in every market he studied, the business that answered first almost always won the job — no matter the price, the reviews, or how nice the website looked.',
  'Ruchith is an undergraduate scholar in the Department of Finance at the University of Colombo, an active venture-builder, and a growth strategist with over 9 years of hands-on experience scaling international client revenues. Driven by a deep passion for learning, online marketing, and high-ROI investments, he builds and scales high-performance business systems alongside his academic pursuits.',
  'Every automated workflow, every line of high-converting copy, and every instant alert engine he ships is engineered for one purpose — turning website visitors into predictable revenue, with all the technical complexity kept invisible to the local business owner.',
]

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            What owners say.
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            {RECOMMENDATIONS.map((r) => (
              <figure
                key={r.alt}
                className="animate-float-drift overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.7)] transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-6px_rgba(168,85,247,0.4)]"
                style={{ animationDelay: r.delay }}
              >
                <Image src={r.src} alt={r.alt} className="h-auto w-full rounded-xl" />
              </figure>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center sm:p-8 lg:col-span-2">
            <div className="mx-auto w-fit">
              <Image
                src={profilePhoto}
                alt="Ruchith Samudika — Founder & Lead Systems Engineer of SMART X9"
                className="h-24 w-24 rounded-full object-cover shadow-[0_0_30px_rgba(168,85,247,0.45)] ring-2 ring-primary/60"
              />
            </div>
            <h3 className="mt-5 flex items-center justify-center gap-2 text-xl font-bold text-white">
              Ruchith Samudika
              <BadgeCheck className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#25D366]">
              Founder &amp; Lead Systems Engineer
            </p>

            <div className="mt-5 space-y-3 text-left">
              {BIO.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[11px] leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3">
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
        </div>
      </div>
    </section>
  )
}
