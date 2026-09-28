import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { DemoWidget } from '@/components/demo-widget'
import { Niches } from '@/components/niches'
import { Results } from '@/components/results'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Founder } from '@/components/founder'
import { WhatsIncluded } from '@/components/whats-included'
import { Problem } from '@/components/problem'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* 1. Hero & Hook — HBR stat + live mock alerts */}
        <Hero />
        {/* 2. The Mechanism — the 4 steps to getting booked */}
        <HowItWorks />
        {/* 3. The Interactive Demo — test the 33-second price calculator */}
        <DemoWidget />
        {/* 4. Scarcity & Exclusivity — 1 business per niche, per city */}
        <Niches />
        {/* 5. The Proof & Testimonials — $14k roofing job + cleaning case studies */}
        <Results />
        <Testimonials />
        {/* 6. The Pricing Block — $17/mo launch deal */}
        <Pricing />
        {/* 7. Founder Trust & Credibility — Ruchith's bio + story */}
        <Founder />
        {/* 8. What's Included & FAQ — clear the remaining objections */}
        <WhatsIncluded />
        <Problem />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
