export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_-2px_var(--primary)]"
        aria-hidden="true"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 2 4 11h5l-1 7 7-9h-5l1-7Z" />
        </svg>
      </span>
      <span className="whitespace-nowrap font-serif text-sm font-bold leading-tight tracking-tight sm:text-lg">
        <span className="text-[#a855f7] [text-shadow:0_0_12px_rgba(168,85,247,0.8)]">Leads</span>
        <span className="text-white [text-shadow:0_0_6px_rgba(255,255,255,0.4)]"> Day to Day - </span>
        <span className="text-[#25D366] [text-shadow:0_0_12px_rgba(37,211,102,0.8)]">Clients</span>
        <span className="text-white [text-shadow:0_0_6px_rgba(255,255,255,0.4)]"> Everyday</span>
      </span>
    </span>
  )
}
