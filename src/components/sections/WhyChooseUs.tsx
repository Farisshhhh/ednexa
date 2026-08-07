"use client";

import { Compass, Palette, Gauge, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import StrategyPattern from "@/components/illustrations/StrategyPattern";
import DesignPattern from "@/components/illustrations/DesignPattern";
import PerformancePattern from "@/components/illustrations/PerformancePattern";
import GrowthPattern from "@/components/illustrations/GrowthPattern";
import HeroFeatureCard from "@/components/why/HeroFeatureCard";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-36">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C7A86D]/5 blur-[180px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.30em] text-neutral-500">
            WHY CHOOSE EDNEXA
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[1] tracking-[-0.05em] text-[#111111] md:text-7xl">
            Built differently.
            <br />
            Designed to deliver results.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            Every project is built with strategy, thoughtful design and
            modern technology. We don't just create beautiful websites —
            we build digital experiences that help businesses earn trust,
            generate enquiries and grow confidently.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

  {/* LEFT COLUMN */}

  <div>
    <HeroFeatureCard
  icon={<Compass size={34} />}
  title={`Think.
Design.
Grow.`}
  description="Every successful website starts with understanding your business, customers and goals. Only then do we design, develop and optimise an experience that delivers measurable results."
  illustration={<StrategyPattern />}
/>
  </div>

  {/* RIGHT COLUMN */}

  <div className="flex flex-col gap-8">

    <FeatureCard
      icon={<Palette size={28} />}
      title="Premium Design"
      description="Clean layouts, refined typography and thoughtful details that immediately increase perceived trust and quality."
      illustration={<DesignPattern />}
    />

    <FeatureCard
      icon={<Gauge size={28} />}
      title="Performance Optimized"
      description="Fast loading, responsive experiences and SEO-ready development built for long-term business growth."
      illustration={<PerformancePattern />}
    />

    <FeatureCard
      icon={<TrendingUp size={28} />}
      title="Conversion Focused"
      description="Every page is designed to guide visitors toward taking action, generating more enquiries and increasing conversions."
      illustration={<GrowthPattern />}
    />

  </div>

</div>
      </Container>
    </section>
  );
}