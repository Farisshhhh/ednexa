"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx(
        "inline-flex items-center gap-2",
        "rounded-full",
        "border border-neutral-200",
        "bg-white",
        "px-4 py-2",
        "text-sm",
        "font-medium",
        "tracking-tight",
        "text-neutral-700",
        "shadow-sm",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-[#C7A86D]" />

      <span>{children}</span>
    </motion.div>
  );
}