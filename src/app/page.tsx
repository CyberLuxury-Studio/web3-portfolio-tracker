import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from "@/components/CTASection";

import dynamic from 'next/dynamic';
const AssetAllocationMatrix = dynamic(() => import('@/components/AssetAllocationMatrix'), { ssr: false });
const LiveMarquee = dynamic(() => import('@/components/LiveMarquee'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/FAQSection'), { ssr: false });


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] font-['Inter'] selection:bg-[#00FF41] selection:text-black">
      <Navbar />
      <LiveMarquee />
      <Hero />
      <AssetAllocationMatrix />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
