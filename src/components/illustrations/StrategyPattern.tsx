export default function StrategyPattern() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid */}

      <path
        d="M30 90H150"
        stroke="#C7A86D"
        strokeWidth="2"
        strokeOpacity="0.18"
        strokeLinecap="round"
      />

      <path
        d="M90 30V150"
        stroke="#C7A86D"
        strokeWidth="2"
        strokeOpacity="0.18"
        strokeLinecap="round"
      />

      {/* Frame */}

      <rect
        x="52"
        y="52"
        width="76"
        height="76"
        rx="16"
        stroke="#C7A86D"
        strokeWidth="2"
        strokeOpacity="0.28"
      />

      {/* Center */}

      <circle
        cx="90"
        cy="90"
        r="7"
        fill="#C7A86D"
        fillOpacity="0.35"
      />
    </svg>
  );
}