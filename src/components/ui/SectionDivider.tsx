"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({
  className = "",
}: SectionDividerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className={`relative flex items-center justify-center py-12 ${className}`}
    >
      {/* Left Line */}

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E8E6E1] to-[#E8E6E1]" />

      {/* Center Mark */}

      <div className="relative mx-8 flex items-center justify-center">
        {/* Outer Ring */}

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E6E1] bg-[#FAF9F6] shadow-sm">
          {/* Inner Dot */}

          <div className="h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />
        </div>

        {/* Soft Glow */}

        <div className="absolute h-16 w-16 rounded-full bg-[#C8A96A]/10 blur-xl" />
      </div>

      {/* Right Line */}

      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#E8E6E1] to-[#E8E6E1]" />
    </motion.div>
  );
}