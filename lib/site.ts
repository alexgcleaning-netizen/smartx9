// Central place for contact links. Swap these placeholders for real values later.
export const CONTACT = {
  // wa.me click-to-chat with a pre-filled message
  whatsapp:
    'https://wa.me/94786377869?text=Hi%20SMART%20X9%2C%20I%27d%20like%20to%20see%20a%20demo',
  messenger: 'https://m.me/your-page',
  linkedin: 'https://www.linkedin.com/company/your-company',
}

// Social profiles shown in the founder card (testimonials section).
// Swap these placeholder URLs for the real profiles.
export const SOCIALS = {
  instagram: 'https://www.instagram.com/your-instagram',
  facebook: 'https://www.facebook.com/your-facebook',
  linkedin: 'https://www.linkedin.com/in/your-linkedin',
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
// Swap this placeholder URL for the real group invite link.
export const FACEBOOK_GROUP = 'https://www.facebook.com/groups/your-group'
