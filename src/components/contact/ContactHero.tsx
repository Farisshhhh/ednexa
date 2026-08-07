"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-24">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C7A86D]/10 blur-[160px]" />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#C7A86D]" />

            <span className="text-sm font-medium text-neutral-700">
              Let's Build Something Exceptional
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111111] md:text-7xl xl:text-[82px]"
          >
            Tell us about
            <br />
            your next
            <br />
            <span className="text-[#C7A86D]">
              big idea.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600"
          >
            Whether you're launching a new business,
            redesigning an existing website or exploring AI
            automation, we'd love to understand your goals
            and discuss how Ednexa can help.
          </motion.p>

          {/* Quick Stats */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="mt-16 flex flex-wrap justify-center gap-12"
          >
            <div>
              <h3 className="text-3xl font-semibold text-[#111111]">
                24 hrs
              </h3>

              <p className="mt-2 text-neutral-500">
                Typical response time
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#111111]">
                Remote
              </h3>

              <p className="mt-2 text-neutral-500">
                Clients worldwide
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#111111]">
                Free
              </h3>

              <p className="mt-2 text-neutral-500">
                Discovery consultation
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}