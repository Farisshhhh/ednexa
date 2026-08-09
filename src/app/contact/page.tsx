import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/sections/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ednexa",
  description:
    "Start your project with Ednexa. Get premium website development, branding, SEO and AI automation for your business.",
  alternates: {
    canonical: "https://ednexa.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F7F4]">
        <ContactHero />

        <section
          id="contact-form"
          className="py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ContactForm />

            <ContactInfo />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}