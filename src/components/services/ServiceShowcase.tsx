"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceShowcaseProps {
  number: string;
  title: string;
  description: string;
  previewTitle: string;
  reverse?: boolean;
}

export default function ServiceShowcase({
  number,
  title,
  description,
  previewTitle,
  reverse = false,
}: ServiceShowcaseProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="border-t border-neutral-200 py-20 first:border-t-0"
    >
      <div
        className={`grid items-center gap-16 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Content */}
        <div>
          <p className="text-6xl font-semibold tracking-[-0.06em] text-neutral-200">
            {number}
          </p>

          <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#111111] md:text-5xl">
            {title}
          </h3>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
            {description}
          </p>

          <button className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#111111]">
            Explore Service

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Preview */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm"
        >
          <div className="rounded-2xl border border-neutral-100 bg-[#F8F7F4] p-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.25em] text-[#C7A86D]">
                Preview
              </p>

              <h4 className="mt-3 text-3xl font-semibold text-[#111111]">
                {previewTitle}
              </h4>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-xl bg-white shadow-sm" />
                <div className="h-24 rounded-xl bg-neutral-200" />
                <div className="h-24 rounded-xl bg-[#C7A86D]/20" />
              </div>

              <div className="mt-6 h-4 w-3/4 rounded-full bg-neutral-200" />
              <div className="mt-3 h-4 w-1/2 rounded-full bg-neutral-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}