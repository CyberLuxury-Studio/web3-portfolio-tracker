"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockTokens = [
  { symbol: "BTC", price: "68,432.10", change: "+2.4%", isPositive: true },
  { symbol: "ETH", price: "3,512.45", change: "-0.8%", isPositive: false },
  { symbol: "SOL", price: "145.20", change: "+5.1%", isPositive: true },
  { symbol: "BNB", price: "590.30", change: "+1.2%", isPositive: true },
  { symbol: "XRP", price: "0.54", change: "-2.1%", isPositive: false },
  { symbol: "DOGE", price: "0.15", change: "+4.4%", isPositive: true },
  { symbol: "AVAX", price: "35.80", change: "-1.5%", isPositive: false },
  { symbol: "LINK", price: "14.20", change: "+3.2%", isPositive: true },
];

const marqueeItems = [...mockTokens, ...mockTokens];

export default function LiveMarquee() {
  return (
    <div className="w-full bg-[#050505] border-b border-white/10 overflow-hidden py-2 font-mono text-xs flex">
      <motion.div
        className="flex whitespace-nowrap" style={{ willChange: "transform" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((token, i) => (
          <div key={i} className="flex items-center space-x-3 px-6 border-r border-white/5 last:border-r-0">
            <span className="text-[#e5e2e1] font-bold">${token.symbol}</span>
            <span className="text-white/60">${token.price}</span>
            <span className={`flex items-center ${token.isPositive ? 'text-[#00FF00]' : 'text-[#FF003C]'}`}>
              {token.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
              {token.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
