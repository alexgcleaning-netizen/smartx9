import Image from 'next/image'

const NICHES = [
  {
    label: 'Roofing',
    image:
      'https://images.unsplash.com/photo-1632154028712-b69f2ae903ac?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'HVAC & Heating',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Plumbing',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'House Cleaning',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Tree Removal',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Pressure Washing',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Junk Removal',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: '& more',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=70',
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
          {NICHES.map((n) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}

