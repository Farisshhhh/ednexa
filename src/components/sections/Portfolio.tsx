"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import FeaturedProject from "@/components/portfolio/FeaturedProject";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Container>
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-28 max-w-4xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.30em] text-neutral-500">
            Featured Work
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[1] tracking-[-0.05em] text-[#111111] md:text-7xl">
            Real projects.
            <br />
            Real businesses.
            <br />
            Real results.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every website we build is crafted around the client's
            business goals, creating digital experiences that build
            trust, improve visibility and generate enquiries.
          </p>
        </motion.div>

        <FeaturedProject
          category="ALUMINIUM FABRICATION"
          title="Ridha Aluminium Fabrication"
          description="A premium website designed for one of Mangalore's aluminium fabrication companies, focused on showcasing craftsmanship, improving credibility and generating quality enquiries."
        />
      </Container>
    </section>
  );
}