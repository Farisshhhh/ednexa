"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  illustration?: ReactNode;
}

export default function FeatureCard({
  icon,
  title,
  description,
  illustration,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-[#ECE7DF]
        bg-gradient-to-br
        from-white
        to-[#FAF8F4]
        p-10
        shadow-[0_20px_50px_rgba(15,23,42,0.05)]
        transition-all
        duration-500
        hover:border-[#D9C39A]
        hover:shadow-[0_35px_70px_rgba(15,23,42,0.10)]
      "
    >
      {/* Arrow */}

      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.05,
        }}
        className="
          absolute
          right-8
          top-8
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-sm
        "
      >
        <ArrowUpRight
          size={18}
          className="text-[#C7A86D]"
        />
      </motion.div>

      {/* Icon */}

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 3,
        }}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-[#EFE8DA]
          bg-[#FAF6EE]
          text-[#C7A86D]
        "
      >
        {icon}
      </motion.div>

      {/* Content */}

      <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-[#111111]">
        {title}
      </h3>

      <p className="mt-5 max-w-sm leading-8 text-neutral-600">
        {description}
      </p>

      {/* Decorative Illustration */}

      {illustration && (
        <div
          className="
            pointer-events-none
            absolute
            bottom-6
            right-6
            opacity-[0.08]
            transition-all
            duration-500
            group-hover:opacity-[0.18]
            group-hover:scale-105
          "
        >
          {illustration}
        </div>
      )}
    </motion.div>
  );
}