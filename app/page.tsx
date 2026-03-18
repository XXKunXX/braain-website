import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Workflow from "@/components/sections/Workflow";
import Pricing from "@/components/sections/Pricing";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
