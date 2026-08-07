import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyChoose from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Editorial from "@/components/sections/Editorial";
import Footer from "@/components/sections/Footer";

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