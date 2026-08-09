"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import BrowserMockup from "../hero/BrowserMockup";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C7A86D]/10 blur-[140px]" />

      <Container>
        <div className="relative grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}

          <div>
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#C7A86D]" />

              <span className="text-sm font-medium text-neutral-700">
                Business-First Digital Experiences
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-[#111111] md:text-7xl xl:text-[88px]">
              Websites
              <br />
              that earn
              <br />
              trust before
              <br />
              <span className="text-[#C7A86D]">
                you say a word.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-600">
              Ednexa helps ambitious businesses build trust,
              generate more enquiries and grow faster through
              premium websites, branding, SEO and AI
              automation.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
              >
                View Our Work
              </Button>
            </div>

            {/* Philosophy */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-16 border-t border-[#E8E3DA] pt-10"
            >
              <div className="grid gap-8 md:grid-cols-3">
                {/* Strategy */}

                <motion.div
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-[#111111]">
                    Strategy
                  </p>

                  <div className="mt-5 h-px w-10 bg-[#C7A86D] transition-all duration-300 group-hover:w-16" />

                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    Research before design.
                  </p>
                </motion.div>

                {/* Design */}

                <motion.div
                  whileHover={{ y: -4 }}
                  className="group border-t border-[#ECE7DF] pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-[#111111]">
                    Design
                  </p>

                  <div className="mt-5 h-px w-10 bg-[#C7A86D] transition-all duration-300 group-hover:w-16" />

                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    Crafted with intention.
                  </p>
                </motion.div>

                {/* Performance */}

                <motion.div
                  whileHover={{ y: -4 }}
                  className="group border-t border-[#ECE7DF] pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-[#111111]">
                    Performance
                  </p>

                  <div className="mt-5 h-px w-10 bg-[#C7A86D] transition-all duration-300 group-hover:w-16" />

                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    Engineered for speed.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <BrowserMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}