import Image from 'next/image'

import testimonialShotOne from '@/images/testimonials (1).jpg'
import testimonialShotTwo from '@/images/testimonials (2).jpg'
import testimonialShotThree from '@/images/testimonials (3).jpg'

const RECOMMENDATIONS = [
  {
    src: testimonialShotOne,
    alt: 'Written client recommendation — Daniel Rathbone',
    name: 'Daniel Rathbone',
    delay: '0s',
  },
  {
    src: testimonialShotTwo,
    alt: 'Written client recommendation — Jose Barraza',
    name: 'Jose Barraza',
    delay: '1.2s',
  },
  {
    src: testimonialShotThree,
    alt: 'Written client recommendation — Emily Graves',
    name: 'Emily Graves',
    delay: '2.4s',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            What owners say.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Real written recommendations from the owners we&apos;ve built systems for — straight
            from their inbox.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-4 md:grid-cols-3">
          {RECOMMENDATIONS.map((r) => (
            <figure
              key={r.alt}
              className="animate-float-drift overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.7)] transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-6px_rgba(168,85,247,0.4)]"
              style={{ animationDelay: r.delay }}
            >
              <Image src={r.src} alt={r.alt} className="h-auto w-full rounded-xl" />
              <figcaption className="mt-3 px-1 pb-1 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-[#25D366]">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
