import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: 'normal',
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Turn Your Dead Website Into A 24/7 Leads Capture Engine',
  description:
    'Turn random site visitors into paid jobs while you sleep. Instant SMS alerts & 1-second site for $20/mo. 1 City. 1 Niche. 1 Partner. Claim your spot now.',
  openGraph: {
    title: 'Turn Your Dead Website Into A 24/7 Leads Capture Engine',
    description:
      'Turn random site visitors into paid jobs while you sleep. Complete technical setup, instant SMS alerts, and a 1-second site for just $20/mo. 1 City. 1 Niche. 1 Partner. Claim your spot.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth bg-background ${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}