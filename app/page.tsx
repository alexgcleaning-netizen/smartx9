import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { HowItWorks } from '@/components/how-it-works'
import { DemoWidget } from '@/components/demo-widget'
import { Niches } from '@/components/niches'
import { WhatsIncluded } from '@/components/whats-included'
import { Pricing } from '@/components/pricing'
import { Results } from '@/components/results'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <DemoWidget />
        <Niches />
        <WhatsIncluded />
        <Pricing />
        <Results />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
