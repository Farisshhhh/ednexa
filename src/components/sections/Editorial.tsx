"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Editorial() {
  return (
    <section className="relative overflow-hidden bg-white py-44">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[#C7A86D]">
            OUR PHILOSOPHY
          </p>

          <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-[#111111] md:text-8xl">
            A website should
            <br />
            do more than
            <br />
            look beautiful.
          </h2>

          <h3 className="mt-10 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#C7A86D] md:text-7xl">
            It should become
            <br />
            your best
            <br />
            salesperson.
          </h3>

          <p className="mx-auto mt-14 max-w-3xl text-xl leading-10 text-neutral-600">
            Every interaction should build trust, remove doubt and guide
            visitors toward becoming customers. Great websites aren't
            decorations—they're business assets.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}