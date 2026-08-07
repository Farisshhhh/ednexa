"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
      "
    >
      {/* Top Row */}

      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#C7A86D]/10
            text-[#C7A86D]
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        >
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="
            text-neutral-300
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#111111]
          "
        />
      </div>

      {/* Content */}

      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-[#111111]">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-neutral-600">
        {description}
      </p>

      {/* Bottom Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-[#C7A86D]/5
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}