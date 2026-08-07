"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import ProcessItem from "@/components/process/ProcessItem";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-40"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#C7A86D]/5 blur-[200px]" />

      {/* Blueprint Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#C7A86D_1px,transparent_1px),linear-gradient(90deg,#C7A86D_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <Container>
        <div className="relative">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.30em] text-[#C7A86D]">
              OUR PROCESS
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111111] md:text-7xl">
              Thoughtfully crafted.
              <br />
              Purposefully built.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
              Every project follows a structured process that removes
              guesswork, keeps communication clear and delivers a
              website built around your business goals.
            </p>
          </motion.div>

          {/* Architectural Spine */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[320px]
              hidden
              h-[720px]
              -translate-x-1/2
              lg:block
            "
          >
            {/* Main Line */}

            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D8C8A0] to-transparent opacity-60" />

            {/* Top */}

            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-[#C7A86D]/40 bg-white" />

            {/* Middle */}

            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C7A86D]/40 bg-white" />

            {/* Bottom */}

            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-[#C7A86D]/40 bg-white" />
          </div>

          {/* Process Grid */}

          <div className="mt-32 grid gap-x-40 gap-y-32 md:grid-cols-2">
            <ProcessItem
              number="01"
              title="Discover"
              description="We begin by understanding your business, customers, competitors and goals before making a single design decision."
              delay={0.1}
            />

            <ProcessItem
              number="02"
              title="Strategy"
              description="Information architecture, messaging and user journeys are carefully planned to create a clear roadmap."
              delay={0.2}
            />

            <ProcessItem
              number="03"
              title="Design & Build"
              description="Every interface is designed with precision and developed using modern technologies for speed, responsiveness and quality."
              delay={0.3}
            />

            <ProcessItem
              number="04"
              title="Launch & Grow"
              description="After launch we continue refining, supporting and improving your website so it grows alongside your business."
              delay={0.4}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}