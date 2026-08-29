import { Mail, MessageCircle, MessageSquare } from 'lucide-react'

type AlertCard = {
  icon: 'mail' | 'whatsapp' | 'imessage'
  header: string
  subtext: string
  time: string
  rotation: string
  delay: string
}

const CARDS: AlertCard[] = [
  {
    icon: 'whatsapp',
    header: 'NEW QUOTE LEAD — $280',
    subtext: 'Deep Clean • 3 Bed • 2 Bath • Alerted in 28s',
    time: 'Just now',
    rotation: '-rotate-2',
    delay: '0s',
  },
  {
    icon: 'mail',
    header: 'NEW JOB INQUIRY',
    subtext: 'Roof Repair • 2 Floors • Alerted in 40s',
    time: '2m ago',
    rotation: 'rotate-1',
    delay: '1.6s',
  },
  {
    icon: 'imessage',
    header: 'NEW BOOKING REQUEST',
    subtext: 'Tree Removal • $450 • Alerted in 18s',
    time: 'Just now',
    rotation: 'rotate-2',
    delay: '3.2s',
  },
]

const ICONS = {
  mail: { Icon: Mail, color: '#EA4335', label: 'Gmail' },
  whatsapp: { Icon: MessageCircle, color: '#25D366', label: 'WhatsApp' },
  imessage: { Icon: MessageSquare, color: '#0A84FF', label: 'iMessage' },
}

export function NotificationCards() {
  return (
    <div className="relative flex flex-col items-center gap-6">
      {CARDS.map((card) => {
        const { Icon, color, label } = ICONS[card.icon]
        return (
          <div
            key={card.header}
            className={`w-full max-w-sm scale-90 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:scale-100 ${card.rotation} animate-float-drift`}
            style={{ animationDelay: card.delay }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md"
                >
                  <Icon className="h-5 w-5" style={{ color }} aria-label={label} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-gray-900">{card.header}</p>
                  <p className="mt-0.5 truncate text-xs text-gray-600">{card.subtext}</p>
                </div>
              </div>
              <span className="shrink-0 pt-0.5 text-[10px] font-medium text-gray-400">
                {card.time}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
