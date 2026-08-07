"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="space-y-8"
    >
      {/* Contact Card */}

      <div className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <p className="text-sm font-medium uppercase tracking-[0.30em] text-[#C7A86D]">
          Contact
        </p>

        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#111111]">
          Let's start the conversation.
        </h3>

        <p className="mt-5 leading-8 text-neutral-600">
          Have a question or an idea?
          We'd love to hear about your project and discuss how
          we can help.
        </p>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <Mail className="text-[#C7A86D]" size={22} />

            <div>
              <p className="text-sm text-neutral-500">
                Email
              </p>

              <Link
                href="mailto:hello@ednexa.com"
                className="font-medium text-[#111111] hover:text-[#C7A86D]"
              >
                hello@ednexa.com
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#C7A86D]" size={22} />

            <div>
              <p className="text-sm text-neutral-500">
                Phone
              </p>

              <Link
                href="tel:+917975569374"
                className="font-medium text-[#111111] hover:text-[#C7A86D]"
              >
                +91 79755 69374
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#C7A86D]" size={22} />

            <div>
              <p className="text-sm text-neutral-500">
                Location
              </p>

              <p className="font-medium text-[#111111]">
                Mangalore, Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="text-[#C7A86D]" size={22} />

            <div>
              <p className="text-sm text-neutral-500">
                Response Time
              </p>

              <p className="font-medium text-[#111111]">
                Within 24 Hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}

      <div className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">

        <p className="text-sm font-medium uppercase tracking-[0.30em] text-[#C7A86D]">
          Quick Actions
        </p>

        <div className="mt-8 space-y-4">

          <Link
            href="https://wa.me/917975569374"
            target="_blank"
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-neutral-200
              px-6
              py-5
              transition-all
              duration-300
              hover:border-[#C7A86D]
              hover:bg-[#FAFAF8]
            "
          >
            <span className="font-medium">
              WhatsApp
            </span>

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>

          <Link
            href="#"
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-neutral-200
              px-6
              py-5
              transition-all
              duration-300
              hover:border-[#C7A86D]
              hover:bg-[#FAFAF8]
            "
          >
            <span className="font-medium">
              Book Discovery Call
            </span>

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>

        </div>
      </div>
    </motion.aside>
  );
}