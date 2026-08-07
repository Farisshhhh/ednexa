"use client";

import { motion } from "framer-motion";

interface ProjectMetricsProps {
  value: string;
  label: string;
}

export default function ProjectMetrics({
  value,
  label,
}: ProjectMetricsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        rounded-[28px]
        border
        border-neutral-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
      "
    >
      <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#111111]">
        {value}
      </h3>

      <p className="mt-3 text-base leading-7 text-neutral-600">
        {label}
      </p>
    </motion.div>
  );
}