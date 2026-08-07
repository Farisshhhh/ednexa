"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className={`${
        centered
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }`}
    >
      {/* Eyebrow */}

      <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-5 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />

        <span className="text-sm font-medium text-neutral-600">
          {eyebrow}
        </span>
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111111] md:text-7xl">
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}