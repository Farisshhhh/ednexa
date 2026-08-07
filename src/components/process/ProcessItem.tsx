"use client";

import { motion } from "framer-motion";

interface ProcessItemProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessItem({
  number,
  title,
  description,
  delay = 0,
}: ProcessItemProps) {
  const isRightColumn = number === "02" || number === "04";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{ y: -6 }}
      className={`
        group
        relative
        transition-all
        duration-500
        ${isRightColumn ? "lg:mt-28" : ""}
      `}
    >
      {/* Background Accent */}

      <div
        className="
          absolute
          -left-8
          top-0
          h-full
          w-px
          origin-top
          scale-y-0
          bg-[#C7A86D]
          opacity-20
          transition-transform
          duration-500
          group-hover:scale-y-100
        "
      />

      {/* Number */}

      <motion.div
        whileHover={{
          x: 6,
        }}
        className="
          text-[92px]
          font-semibold
          leading-none
          tracking-[-0.08em]
          text-[#D8C8A0]
          opacity-30
          transition-all
          duration-500
          group-hover:opacity-70
        "
      >
        {number}
      </motion.div>

      {/* Title */}

      <h3 className="mt-5 text-[40px] font-semibold leading-none tracking-[-0.05em] text-[#111111]">
        {title}
      </h3>

      {/* Divider */}

      <motion.div
        initial={{ width: 60 }}
        whileHover={{ width: 120 }}
        transition={{ duration: 0.35 }}
        className="mt-8 h-px bg-[#C7A86D]"
      />

      {/* Description */}

      <p className="mt-8 max-w-md text-[17px] leading-9 text-neutral-600">
        {description}
      </p>

      {/* Decorative Dot */}

      <div
        className="
          mt-12
          h-2
          w-2
          rounded-full
          bg-[#C7A86D]
          opacity-30
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}