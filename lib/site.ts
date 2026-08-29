// Central place for contact links. Swap these placeholders for real values later.
export const CONTACT = {
  // wa.me click-to-chat with a pre-filled message
  whatsapp:
    'https://wa.me/94786377869?text=Hi%20SMART%20X9%2C%20I%27d%20like%20to%20see%20a%20demo',
  messenger: 'https://m.me/your-page',
  linkedin: 'https://www.linkedin.com/company/your-company',
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
