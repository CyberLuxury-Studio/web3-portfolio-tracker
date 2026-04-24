"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this platform?",
    answer: "An institutional-grade DeFi terminal engineered for real-time portfolio telemetry and deep on-chain analytics."
  },
  {
    question: "How do I get started?",
    answer: "Initialize your sequence by connecting your Web3 wallet. Our protocol will automatically index your holdings."
  },
  {
    question: "Is there a free tier available?",
    answer: "Yes, the Retail Node provides basic access to delayed market data and limited wallet tracking without any cost."
  },
  {
    question: "How secure is the protocol?",
    answer: "We utilize encrypted data packets and zero-knowledge proofs to ensure your portfolio telemetry remains private and secure."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto bg-[#050505]">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-16 text-center text-white font-['Space_Grotesk']">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 overflow-hidden cursor-pointer hover:border-[#00FFFF]/50 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-lg font-mono text-white tracking-wide">{faq.question}</h3>
                <motion.div
                   animate={{ rotate: isOpen ? 180 : 0 }}
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <ChevronDown className="text-[#00FFFF]" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="px-6 pb-6 text-white/60 font-mono text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
