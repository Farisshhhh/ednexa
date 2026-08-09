import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyChoose from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Editorial from "@/components/sections/Editorial";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Ednexa | Web Design & Digital Growth Agency",
  description:
    "Ednexa builds premium websites, brand identities, SEO strategies and AI automation systems for ambitious businesses in Mangalore and across India.",
  alternates: {
    canonical: "https://ednexa.in",
  },
  openGraph: {
    title: "Ednexa | Web Design & Digital Growth Agency",
    description:
      "Premium websites, branding, SEO and AI automation for ambitious businesses in Mangalore and across India.",
    url: "https://ednexa.in",
    siteName: "Ednexa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ednexa — Web Design & Digital Growth Agency",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
  <Navbar />

  <main>
    <Hero />

    <Portfolio />

    <TrustedBy />

    <Services />

    <WhyChoose />

    <Editorial />

    <Process />
  </main>

  <Footer />
</>
  );
}