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
      <span className="font-serif text-lg font-bold tracking-tight text-foreground">
        SMART <span className="text-primary">X9</span>
      </span>
    </span>
  )
}
