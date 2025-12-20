interface OrnamentProps {
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function Ornament({ className = "", position = "top" }: OrnamentProps) {
  if (position === "top" || position === "bottom") {
    return (
      <div className={`flex justify-center ${className}`}>
        <svg
          width="120"
          height="30"
          viewBox="0 0 120 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-amber-500"
        >
          {/* Center flourish */}
          <path
            d="M60 15 C 55 10, 50 8, 45 10 C 40 12, 38 15, 40 18 C 42 21, 45 22, 50 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M60 15 C 65 10, 70 8, 75 10 C 80 12, 82 15, 80 18 C 78 21, 75 22, 70 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Left curl */}
          <path
            d="M45 15 C 40 12, 35 11, 30 12 C 25 13, 22 15, 23 17 C 24 19, 27 19, 32 18"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M30 15 C 25 13, 20 12, 15 13 C 10 14, 7 16, 8 18 C 9 20, 12 20, 17 19"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Right curl */}
          <path
            d="M75 15 C 80 12, 85 11, 90 12 C 95 13, 98 15, 97 17 C 96 19, 93 19, 88 18"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M90 15 C 95 13, 100 12, 105 13 C 110 14, 113 16, 112 18 C 111 20, 108 20, 103 19"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Center dot */}
          <circle cx="60" cy="15" r="2.5" fill="currentColor" />
        </svg>
      </div>
    );
  }

  // Vertical ornament for corners
  return (
    <div className={className}>
      <svg
        width="40"
        height="80"
        viewBox="0 0 40 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-amber-500 opacity-30"
      >
        <path
          d="M20 10 C 15 15, 12 20, 15 25 C 18 30, 22 32, 25 30 C 28 28, 28 23, 25 20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 40 C 25 45, 28 50, 25 55 C 22 60, 18 62, 15 60 C 12 58, 12 53, 15 50"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="20" cy="30" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-amber-500/20 ${className}`}
    >
      {/* Decorative corner flourish */}
      <path
        d="M10 10 Q 15 15, 20 12 Q 25 9, 30 15 Q 35 21, 40 18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 10 Q 15 15, 12 20 Q 9 25, 15 30 Q 21 35, 18 40"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M15 15 Q 20 18, 25 16 Q 30 14, 33 18 Q 36 22, 32 26"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}
