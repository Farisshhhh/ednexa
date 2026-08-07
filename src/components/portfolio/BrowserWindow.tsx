"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  url?: string;
}

export default function BrowserWindow({
  children,
  url = "www.ednexa.in",
}: BrowserWindowProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-[34px] border border-neutral-200 bg-white shadow-[0_35px_90px_rgba(17,17,17,0.12)]"
    >
      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C7A86D]/15 blur-[100px]" />
      </div>

      {/* Browser Header */}

      <div className="border-b border-neutral-100 bg-[#FCFCFB] px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Traffic Lights */}

          <div className="flex items-center gap-2.5">
            <span className="h-3.5 w-3.5 rounded-full bg-[#FF605C]" />

            <span className="h-3.5 w-3.5 rounded-full bg-[#FFBD44]" />

            <span className="h-3.5 w-3.5 rounded-full bg-[#00CA4E]" />
          </div>

          {/* URL */}

          <div className="rounded-full border border-neutral-200 bg-white px-6 py-2 text-sm font-medium text-neutral-500 shadow-sm">
            {url}
          </div>

          {/* Empty space */}

          <div className="w-16" />
        </div>
      </div>

      {/* Browser Body */}

      <div className="relative overflow-hidden bg-white">
        {children}
      </div>

      {/* Bottom Gradient */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#C7A86D]/8 via-transparent to-transparent" />

      {/* Shine Effect */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />
    </motion.div>
  );
}