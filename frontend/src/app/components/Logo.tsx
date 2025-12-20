export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-amber-500"
      >
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" />
        <path
          d="M15 12 L15 28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 15 L18 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 19 L17 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 23 L16 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 12 L25 18 C25 18 25 22 27 22 C29 22 29 18 29 18 L29 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="flex flex-col">
        <span className="tracking-wider font-cinzel">SAVOUR</span>
        <span className="text-xs text-neutral-400 tracking-widest font-cinzel">BISTRO</span>
      </div>
    </div>
  );
}