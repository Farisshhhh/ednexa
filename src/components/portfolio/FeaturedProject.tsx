"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import BrowserWindow from "./BrowserWindow";

interface FeaturedProjectProps {
  title: string;
  category: string;
  description: string;
}

export default function FeaturedProject({
  title,
  category,
  description,
}: FeaturedProjectProps) {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Ambient Glow */}

      <div className="absolute left-1/2 top-16 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#C7A86D]/8 blur-[180px]" />

      <div className="relative">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mb-24"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C7A86D]" />

            <span className="text-sm font-medium text-neutral-700">
              Featured Client Project
            </span>
          </div>

          {/* Category */}

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.32em] text-neutral-500">
            {category}
          </p>

          {/* Heading */}

          <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#111111] md:text-7xl">
            {title}
          </h2>

          {/* Overview */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
            {description}
          </p>

          {/* CTA */}

          <a
            href="https://www.ridhaaluminium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 text-base font-semibold text-[#111111]"
          >
            Visit Live Website

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Browser */}

        <BrowserWindow url="www.ednexa.in">
          <div className="relative overflow-hidden">
            {/* Main Screenshot */}

            <Image
              src="/portfolio/ridha-hero.png"
              alt="Ridha Aluminium Website"
              width={1800}
              height={1000}
              priority
              className="w-full transition duration-700 group-hover:scale-[1.02]"
            />

            {/* Floating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                absolute
                -bottom-10
                right-10
                hidden
                w-[330px]
                overflow-hidden
                rounded-[26px]
                border
                border-neutral-200
                bg-white
                shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                lg:block
              "
            >
              <Image
                src="/portfolio/ridha-services.png"
                alt="Ridha Aluminium Services"
                width={900}
                height={700}
                className="w-full"
              />

              <div className="p-6">
                <p className="text-base font-semibold text-[#111111]">
                  Services Overview
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Aluminium fabrication, ACP cladding,
                  glazing and architectural solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </BrowserWindow>
                {/* Case Study */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-28"
        >
          <div className="grid gap-20 border-t border-neutral-200 pt-20 lg:grid-cols-2">
            {/* Challenge */}

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C7A86D]">
                The Challenge
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#111111] md:text-4xl">
                Creating a digital experience that reflects real-world craftsmanship.
              </h3>

              <p className="mt-8 text-lg leading-9 text-neutral-600">
                Ridha Aluminium had years of experience delivering premium
                aluminium fabrication work, but its online presence didn't
                communicate the same level of quality. The objective was to
                create a modern website that showcases completed projects,
                builds credibility and makes it effortless for potential
                customers to enquire.
              </p>
            </div>

            {/* Approach */}

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C7A86D]">
                Our Approach
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#111111] md:text-4xl">
                Premium design guided by simplicity and clarity.
              </h3>

              <p className="mt-8 text-lg leading-9 text-neutral-600">
                We focused on clean layouts, strong typography, high-quality
                imagery and intuitive navigation. The experience was designed
                to help visitors quickly understand the company's expertise,
                explore its work and contact the business from any device.
              </p>
            </div>
          </div>

          {/* Deliverables */}

          <div className="mt-24 border-t border-neutral-200 pt-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Deliverables
                </p>

                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#111111]">
                  What Ednexa delivered
                </h3>
              </div>

              <div className="flex max-w-2xl flex-wrap gap-4">
                {[
                  "Website Design",
                  "UI/UX Design",
                  "Responsive Development",
                  "Performance Optimization",
                  "SEO Foundation",
                  "Lead Generation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-[#111111] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C7A86D]/40 hover:shadow-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="mt-28 rounded-[36px] border border-neutral-200 bg-white p-12 md:p-16"
          >
            <p className="max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#111111] md:text-5xl">
              A premium website shouldn't just look beautiful—it should
              represent the quality, professionalism and attention to detail
              that clients can expect from the business itself.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#C7A86D]/20" />

              <div>
                <p className="font-semibold text-[#111111]">
                  Ednexa Design Team
                </p>

                <p className="text-sm text-neutral-500">
                  Website Design • Development • Digital Experience
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}