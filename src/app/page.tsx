import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";



export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] font-['Inter'] selection:bg-[#00FF41] selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
