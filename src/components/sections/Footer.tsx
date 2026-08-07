"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navigation = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Contact",
    href: "#footer",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#111111] text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#C7A86D]/10 blur-[220px]" />

      {/* Giant Background Wordmark */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="pointer-events-none absolute inset-x-0 bottom-24 overflow-hidden"
      >
        <h2
          className="
            whitespace-nowrap
            text-center
            text-[150px]
            font-semibold
            tracking-[-0.08em]
            text-white/[0.03]
            md:text-[240px]
            xl:text-[320px]
          "
        >
          EDNEXA
        </h2>
      </motion.div>

      <Container>
        <div className="relative py-36">

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#C7A86D]">
              READY TO BUILD?
            </p>

            <h2 className="mt-8 text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl">
              Build something
              <br />
              exceptional.
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-neutral-400">
              Every ambitious business deserves a digital
              experience that builds trust, attracts customers
              and accelerates growth.
            </p>

            <div className="mt-14">
              <Button
  className="group"
  onClick={() => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
>
  <span className="flex items-center gap-2">
    Book Discovery Call

    <ArrowUpRight
      size={18}
      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
    />
  </span>
</Button>
            </div>
          </motion.div>

          {/* Premium Divider */}

          <div
            className="
              my-28
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-[#C7A86D]/40
              to-transparent
            "
          />

          {/* Footer Grid */}

          <div className="grid gap-24 lg:grid-cols-[1.5fr_1fr]">

            {/* Brand */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="flex items-center gap-5">

                <Image
                  src="/logo/ednexa-symbol.png"
                  alt="Ednexa Logo"
                  width={72}
                  height={72}
                  priority
                  className="h-[72px] w-[72px] object-contain"
                />

                <h3 className="text-5xl font-semibold tracking-[-0.06em]">
                  EDNEXA
                </h3>

              </div>

              <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-400">
                We create premium websites, digital identities,
                AI automation and growth-focused experiences
                that help ambitious businesses stand out.
              </p>
                            {/* Social Links */}

              <div className="mt-12 flex flex-wrap gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-[20px]
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-5
                      py-3
                      text-sm
                      text-neutral-300
                      transition-all
                      duration-300
                      hover:border-[#C7A86D]
                      hover:bg-white/[0.04]
                      hover:text-white
                    "
                  >
                    {social.label}

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Side */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
              }}
              className="grid grid-cols-2 gap-16"
            >
              {/* Navigation */}

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C7A86D]">
                  Navigation
                </p>

                <div className="mt-8 flex flex-col gap-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-neutral-400
                        transition-all
                        duration-300
                        hover:text-white
                      "
                    >
                      {item.label}

                      <ArrowUpRight
                        size={14}
                        className="
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#C7A86D]">
                  Contact
                </p>

                <div className="mt-8 flex flex-col gap-5">
                  <Link
                    href="mailto:hello@ednexa.com"
                    className="transition-colors duration-300 hover:text-white text-neutral-400"
                  >
                    hello@ednexa.com
                  </Link>

                  <Link
                    href="tel:+917975569374"
                    className="transition-colors duration-300 hover:text-white text-neutral-400"
                  >
                    +91 79755 69374
                  </Link>

                  <p className="text-neutral-500">
                    Mangalore, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Divider */}

          <div className="mt-24 h-px bg-white/10" />

          {/* Bottom Footer */}

          <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Ednexa. All rights reserved.
            </p>

            <p className="text-sm text-neutral-500">
              Crafted with precision in India.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}