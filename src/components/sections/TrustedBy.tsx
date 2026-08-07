"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Factory,
  Rocket,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const industries = [
  {
    title: "Construction",
    description:
      "Generate high-quality enquiries with premium websites that build trust.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    description:
      "Create confidence with modern websites designed for clinics and healthcare brands.",
    icon: Stethoscope,
  },
  {
    title: "Restaurants",
    description:
      "Turn visitors into reservations with beautiful digital experiences.",
    icon: UtensilsCrossed,
  },
  {
    title: "Manufacturing",
    description:
      "Showcase your capabilities with enterprise-level web experiences.",
    icon: Factory,
  },
  {
    title: "Startups",
    description:
      "Launch faster with scalable branding, websites and automation.",
    icon: Rocket,
  },
  {
    title: "Small Businesses",
    description:
      "Professional online presence that helps local businesses grow.",
    icon: Briefcase,
  },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#F8F7F4] py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
            Built for Ambitious Businesses
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-center text-4xl font-semibold tracking-[-0.04em] text-[#111111] md:text-5xl">
            We create digital experiences
            <br />
            for businesses that want to grow.
          </h2>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group cursor-pointer rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F7F4]">
                      <Icon
                        size={28}
                        className="text-[#C7A86D]"
                      />
                    </div>

                    <ArrowUpRight
                      className="text-neutral-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                      size={20}
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-[#111111]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}