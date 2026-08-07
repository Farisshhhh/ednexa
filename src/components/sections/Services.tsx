"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ServiceShowcase from "@/components/services/ServiceShowcase";

export default function Services() {
  return (
    <section
      id="services"
       className="relative overflow-hidden bg-[#F8F7F4] py-40"
    >
      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
            Our Services
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.05em] text-[#111111] md:text-7xl">
            Digital solutions
            <br />
            designed to help
            <br />
            businesses grow.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every project is crafted with strategy, design and
            technology working together to create measurable
            business results.
          </p>
        </motion.div>

        {/* Services */}

        <ServiceShowcase
          number="01"
          title="Website Design"
          description="Premium websites designed to build trust, communicate your value clearly, and convert visitors into customers."
          previewTitle="Premium Website"
        />

        <ServiceShowcase
          number="02"
          title="Brand Identity"
          description="Build a memorable brand with thoughtful visual identity, typography, colors and messaging that customers remember."
          previewTitle="Brand System"
          reverse
        />

        <ServiceShowcase
          number="03"
          title="SEO & Growth"
          description="Increase your visibility on Google and generate qualified enquiries through sustainable organic growth."
          previewTitle="Growth Dashboard"
        />

        <ServiceShowcase
          number="04"
          title="AI Automation"
          description="Automate repetitive workflows, improve efficiency and give your team more time to focus on growth."
          previewTitle="AI Workflow"
          reverse
        />
      </Container>
    </section>
  );
}