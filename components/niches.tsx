import Image, { type StaticImageData } from 'next/image'
import { Plus } from 'lucide-react'

import hvacImg from '@/images/hvac and heating.jpg'
import junkRemovalImg from '@/images/junk removal.jpg'
import plumbingImg from '@/images/plumbing.jpg'
import pressureWashingImg from '@/images/pressure washing.jpg'
import roofingImg from '@/images/roofing.jpg'
import treeRemovalImg from '@/images/tree removal.jpg'

type Niche = {
  label: string
  image?: string | StaticImageData
}

const NICHES: Niche[] = [
  {
    label: 'Roofing',
    image: roofingImg,
  },
  {
    label: 'HVAC & Heating',
    image: hvacImg,
  },
  {
    label: 'Plumbing',
    image: plumbingImg,
  },
  {
    label: 'House Cleaning',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Tree Removal',
    image: treeRemovalImg,
  },
  {
    label: 'Pressure Washing',
    image: pressureWashingImg,
  },
  {
    label: 'Junk Removal',
    image: junkRemovalImg,
  },
  {
    label: '& more',
  },
]

export function Niches() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Made for local jobs
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            One tool, every kind of job.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            If being fast wins you the customer, SMART X9 fits. Same tool, set up for your
            kind of work.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {NICHES.map((n) =>
            n.image ? (
              <div
                key={n.label}
                className="group relative flex aspect-[4/3] flex-col items-center justify-end overflow-hidden rounded-2xl border border-border p-4 backdrop-blur transition-colors hover:border-primary/40"
              >
                <Image
                  src={n.image}
                  alt={n.label}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="relative text-sm font-semibold text-white">{n.label}</span>
              </div>
            ) : (
              <div
                key={n.label}
                className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white/10 to-transparent p-4 backdrop-blur transition-colors hover:border-primary/40"
              >
                <Plus className="h-5 w-5 text-primary drop-shadow-[0_0_6px_rgba(168,85,247,0.8)] transition-transform duration-300 group-hover:scale-125" />
                <span className="text-sm font-semibold text-white">{n.label}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

