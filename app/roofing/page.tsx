import type { Metadata } from 'next'
import { RoofingLeads } from '@/components/roofing-leads'

export const metadata: Metadata = {
  title: 'SmartX9Leads™ | Oklahoma Roofing Growth System',
  description:
    'Direct access to verified Property Managers, Asset Managers and Commercial Decision Makers across Oklahoma storm zones. Exclusive single-partner territory for just $34/mo.',
  openGraph: {
    title: 'SmartX9Leads™ | Oklahoma Roofing Growth System',
    description:
      'Connect roofers directly to verified Property Managers and Commercial Decision Makers in Oklahoma storm-hit zip codes. One partner only.',
    type: 'website',
  },
}

export default function RoofingPage() {
  return <RoofingLeads />
}
