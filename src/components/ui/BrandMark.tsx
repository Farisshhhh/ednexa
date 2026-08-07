"use client";

import { motion } from "framer-motion";

interface BrandMarkProps {
  size?: number;
  animated?: boolean;
}

export default function BrandMark({
  size = 32,
  animated = true,
}: BrandMarkProps) {
  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ednexa Brand Mark"
      role="img"
    >
      {/* Outer Square */}

      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="10"
        stroke="#C8A96A"
        strokeWidth="2"
      />

      {/* Blueprint Grid */}

      <path
        d="M32 18V46"
        stroke="#C8A96A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M18 32H46"
        stroke="#C8A96A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Center Node */}

      <circle
        cx="32"
        cy="32"
        r="4"
        fill="#C8A96A"
      />
    </svg>
  );

  if (!animated) return content;

  return (
    <motion.div
      whileHover={{
        rotate: 45,
        scale: 1.08,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {content}
    </motion.div>
  );
}