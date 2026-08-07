"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import SuccessModal from "@/components/contact/SuccessModal";
import Button from "@/components/ui/Button";




const services = [
  "Website Design",
  "Brand Identity",
  "SEO & Growth",
  "AI Automation",
];

const budgets = [
  "< ₹50k",
  "₹50k – ₹1L",
  "₹1L – ₹3L",
  "₹3L+",
];

const timelines = [
  "ASAP",
  "1 Month",
  "2–3 Months",
  "Flexible",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          service,
          budget,
          timeline,
          message,
        }),
      });

      const text = await response.text();

console.log("Server Response:", text);

let data;

try {
  data = JSON.parse(text);
} catch {
  console.error("Invalid server response");

  return;
}

if (!response.ok) {
  console.error(data.error || "Server error");

  return;
}

setSuccessOpen(true);

setName("");
setEmail("");
setCompany("");
setPhone("");
setMessage("");

setService("");
setBudget("");
setTimeline("");
    } catch (error) {
  console.error(error);
} finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-[40px]
        border
        border-neutral-200
        bg-white
        p-8
        shadow-[0_20px_70px_rgba(15,23,42,0.06)]
        md:p-12
      "
    >
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#111111]">
        Start Your Project
      </h2>

      <p className="mt-4 leading-8 text-neutral-600">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-8"
      >
        {/* Name */}

        <div>
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            className="
              w-full
              rounded-2xl
              border
              border-neutral-200
              bg-[#FAFAF8]
              px-5
              py-4
              outline-none
              transition-all
              duration-300
              focus:border-[#C7A86D]
            "
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
            className="
              w-full
              rounded-2xl
              border
              border-neutral-200
              bg-[#FAFAF8]
              px-5
              py-4
              outline-none
              transition-all
              duration-300
              focus:border-[#C7A86D]
            "
          />
        </div>

        {/* Company */}

        <div>
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            Company
          </label>

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your Company"
            className="
              w-full
              rounded-2xl
              border
              border-neutral-200
              bg-[#FAFAF8]
              px-5
              py-4
              outline-none
              transition-all
              duration-300
              focus:border-[#C7A86D]
            "
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            Phone Number
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className="
              w-full
              rounded-2xl
              border
              border-neutral-200
              bg-[#FAFAF8]
              px-5
              py-4
              outline-none
              transition-all
              duration-300
              focus:border-[#C7A86D]
            "
          />
        </div>
                {/* Service */}

        <div>
          <label className="mb-4 block text-sm font-medium text-neutral-700">
            Service Required
          </label>

          <div className="grid gap-3 md:grid-cols-2">
            {services.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setService(item)}
                className={`
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  ${
                    service === item
                      ? "border-[#C7A86D] bg-[#C7A86D]/10 text-[#111111]"
                      : "border-neutral-200 bg-[#FAFAF8] hover:border-[#C7A86D]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}

        <div>
          <label className="mb-4 block text-sm font-medium text-neutral-700">
            Estimated Budget
          </label>

          <div className="flex flex-wrap gap-3">
            {budgets.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBudget(item)}
                className={`
                  rounded-full
                  border
                  px-6
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  ${
                    budget === item
                      ? "border-[#C7A86D] bg-[#C7A86D] text-white"
                      : "border-neutral-200 bg-white hover:border-[#C7A86D]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}

        <div>
          <label className="mb-4 block text-sm font-medium text-neutral-700">
            Preferred Timeline
          </label>

          <div className="flex flex-wrap gap-3">
            {timelines.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTimeline(item)}
                className={`
                  rounded-full
                  border
                  px-6
                  py-3
                  text-sm
                  transition-all
                  duration-300
                  ${
                    timeline === item
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-neutral-200 bg-white hover:border-[#111111]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}

        <div>
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            Tell us about your project
          </label>

          <textarea
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your business, goals, target audience and anything else that will help us understand your project..."
            className="
              w-full
              resize-none
              rounded-3xl
              border
              border-neutral-200
              bg-[#FAFAF8]
              px-5
              py-5
              outline-none
              transition-all
              duration-300
              focus:border-[#C7A86D]
            "
          />
        </div>

        {/* Submit */}

        <div className="pt-4">
          <Button
            size="lg"
            className="w-full"
            type="submit"
            loading={loading}
          >
            {loading ? "Sending..." : "Start My Project"}
          </Button>
        </div>
      </form>
      
      <SuccessModal
  open={successOpen}
  onClose={() => setSuccessOpen(false)}
/>
    </motion.div>
  );
}