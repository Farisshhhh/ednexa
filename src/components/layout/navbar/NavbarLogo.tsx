"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Ednexa Home"
      className="inline-flex items-center"
    >
      <motion.div
        whileHover={{
          y: -1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex items-center gap-1"
      >
        <span
          className="
            text-[24px]
            font-semibold
            tracking-[-0.08em]
            text-[#111111]
            select-none
          "
        >
          EDNEXA
        </span>

        <span
          className="
            text-[24px]
            font-semibold
            text-[#C7A86D]
            select-none
          "
        >
          .
        </span>
      </motion.div>
    </Link>
  );
}