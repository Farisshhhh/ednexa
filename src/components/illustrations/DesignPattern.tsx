export default function DesignPattern() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid */}

      <rect
        x="30"
        y="30"
        width="120"
        height="120"
        rx="20"
        stroke="#C7A86D"
        strokeWidth="2"
        strokeOpacity="0.18"
      />

      {/* Layout Blocks */}

      <rect
        x="48"
        y="48"
        width="84"
        height="18"
        rx="8"
        fill="#C7A86D"
        fillOpacity="0.15"
      />

      <rect
        x="48"
        y="80"
        width="36"
        height="50"
        rx="10"
        stroke="#C7A86D"
        strokeOpacity="0.25"
        strokeWidth="2"
      />

      <rect
        x="96"
        y="80"
        width="36"
        height="50"
        rx="10"
        stroke="#C7A86D"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
    </svg>
  );
}