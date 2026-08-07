"use client";

import { motion } from "framer-motion";

interface TrustMetricProps {
  value: string;
  label: string;
  delay?: number;
}

export default function TrustMetric({
  value,
  label,
  delay = 0,
}: TrustMetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-[28px] border border-[#ECE7DF] bg-white p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
    >
      <h3 className="text-4xl font-semibold tracking-[-0.04em] text-[#111111]">
        {value}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-500">
        {label}
      </p>
    </motion.div>
  );
}