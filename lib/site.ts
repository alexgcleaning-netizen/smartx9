// Central place for contact links.
export const CONTACT = {
  // wa.me click-to-chat with a pre-filled message
  whatsapp:
    'https://wa.me/94786377869?text=Hey%20I%27m%20interested%21%20I%20want%20to%20make%20my%20website%20with%20your%20system.',
  messenger: 'https://m.me/team.smartx9',
  linkedin: 'https://www.linkedin.com/in/ruchith-samudika-83a773252',
}

// Social profiles shown in the founder card (testimonials section).
export const SOCIALS = {
  instagram: 'https://www.instagram.com/samudika9',
  facebook: 'https://www.facebook.com/team.smartx9',
  linkedin: 'https://www.linkedin.com/in/ruchith-samudika-83a773252',
}

// Build a wa.me click-to-chat link with a custom pre-filled message.
export function whatsappLink(message: string) {
  return `https://wa.me/94786377869?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
]

// Facebook group community (bonus offer CTA in the hero).
export const FACEBOOK_GROUP = 'https://www.facebook.com/share/g/1MSEfcFg13/'

// ── Web3Forms — "Claim the $20/mo launch deal" form ─────────────────────────
// Free access key: https://web3forms.com/ (create it with samudikax@gmail.com so
// submissions land in that inbox). Keys are safe to expose in the browser.
export const WEB3FORMS_ACCESS_KEY = 'e179aab4-354e-4082-8598-c1dd0dd4382a'
export const CLAIM_SUBJECT = '🔥 New $20/mo Launch Deal Claim'
export const CLAIM_FROM_NAME = 'SMART X9 — Deal Claim Form'
