"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface HeroFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  illustration?: ReactNode;
}

const process = [
  "Business Discovery",
  "Competitor Research",
  "UX Journey Mapping",
  "Conversion Planning",
];

export default function HeroFeatureCard({
  icon,
  title,
  description,
  illustration,
}: HeroFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[40px]
        border
        border-[#ECE7DF]
        bg-gradient-to-br
        from-white
        to-[#FAF8F4]
        p-12
        shadow-[0_25px_70px_rgba(15,23,42,0.06)]
        transition-all
        duration-500
        hover:border-[#C7A86D]/40
        hover:shadow-[0_45px_90px_rgba(15,23,42,0.12)]
      "
    >
      {/* Blueprint Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          transition-opacity
          duration-500
          group-hover:opacity-[0.05]
          [background-image:linear-gradient(#C7A86D_1px,transparent_1px),linear-gradient(90deg,#C7A86D_1px,transparent_1px)]
          [background-size:36px_36px]
        "
      />

      {/* Arrow */}

      <div
        className="
          absolute
          right-10
          top-10
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-[#ECE7DF]
          bg-white
          transition-all
          duration-300
          group-hover:rotate-12
          group-hover:border-[#C7A86D]/40
          group-hover:bg-[#FAF6EE]
        "
      >
        <ArrowUpRight
          size={18}
          className="text-[#C7A86D]"
        />
      </div>

      {/* Icon */}

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-[28px]
          border
          border-[#EFE8DA]
          bg-[#FAF6EE]
          text-[#C7A86D]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:rotate-3
        "
      >
        {icon}
      </div>

      {/* Heading */}

      <h3 className="mt-10 whitespace-pre-line text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-[#111111]">
        {title}
      </h3>

      <p className="mt-6 max-w-md text-base leading-8 text-neutral-500">
        Great digital experiences are planned before they are designed.
      </p>

      {/* Description */}

      <p className="mt-8 max-w-lg text-lg leading-9 text-neutral-600">
        {description}
      </p>

      {/* Divider */}

      <div className="my-12 h-px bg-[#ECE7DF]" />

      {/* Process */}

      <div className="grid gap-6">
        {process.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-5"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#ECE7DF]
                bg-[#FAF6EE]
                text-sm
                font-semibold
                text-[#C7A86D]
              "
            >
              {(index + 1).toString().padStart(2, "0")}
            </div>

            <span className="text-[15px] font-medium text-neutral-700">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Illustration */}

      {illustration && (
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            scale-125
            opacity-[0.12]
            transition-all
            duration-500
            group-hover:scale-[1.35]
            group-hover:opacity-[0.22]
          "
        >
          {illustration}
        </div>
      )}
    </motion.div>
  );
}