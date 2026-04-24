"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold uppercase tracking-widest text-center mb-16 font-['Space_Grotesk'] text-white"
        >
          Deployment Nodes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#0a0a0a]/60 backdrop-blur-2xl p-8 border border-white/5 hover:border-white/20 transition-colors"
           >
             <h3 className="text-xl uppercase tracking-widest text-white/60 font-mono mb-2">Retail Node</h3>
             <div className="text-4xl font-bold font-mono mb-8 text-white">Free</div>
             <ul className="space-y-4 mb-8 text-white/60 text-sm font-mono">
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Delayed Market Data</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Max 3 Wallets</li>
             </ul>
             <button className="w-full py-3 border border-white/20 text-white/60 font-mono uppercase tracking-widest text-sm hover:bg-white/10 hover:text-white transition-colors">Select Plan</button>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-[#0a0a0a]/80 backdrop-blur-3xl p-10 border border-[#00FFFF]/50 shadow-[0_0_30px_rgba(0,255,255,0.1)] relative transform md:-translate-y-4 z-10"
           >
             <div className="absolute top-0 right-0 bg-[#00FFFF] text-[#0a0a0a] text-xs font-bold font-mono uppercase tracking-widest px-3 py-1">Recommended</div>
             <h3 className="text-xl uppercase tracking-widest text-[#00FFFF] font-mono mb-2">Degen Node</h3>
             <div className="text-4xl font-bold font-mono mb-8 text-white">0.05 <span className="text-lg text-[#00FFFF]">ETH/mo</span></div>
             <ul className="space-y-4 mb-8 text-white text-sm font-mono">
               <li className="flex items-center gap-2 text-[#00FFFF]"><Check className="w-4 h-4" /> Live WebSockets</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Unlimited Wallets</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> On-Chain Alerts</li>
             </ul>
             <button className="w-full py-4 bg-[#00FFFF]/10 border border-[#00FFFF] text-[#00FFFF] font-mono uppercase tracking-widest text-sm hover:bg-[#00FFFF] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all">Select Plan</button>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative p-8 bg-[#0a0a0a]/60 backdrop-blur-2xl overflow-hidden group"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#00FF00] opacity-50 blur-sm pointer-events-none group-hover:opacity-100 transition-opacity animate-pulse"></div>
             <div className="absolute inset-[1px] bg-[#0a0a0a] pointer-events-none"></div>

             <div className="relative z-10">
               <h3 className="text-xl uppercase tracking-widest text-[#00FF00] font-mono mb-2">Whale Node</h3>
               <div className="text-4xl font-bold font-mono mb-8 text-white">Custom</div>
               <ul className="space-y-4 mb-8 text-white/60 text-sm font-mono">
                 <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Private RPC Nodes</li>
                 <li className="flex items-center gap-2"><Check className="w-4 h-4" /> OTC Desk Integration</li>
                 <li className="flex items-center gap-2"><Check className="w-4 h-4" /> VIP Concierge</li>
               </ul>
               <button className="w-full py-3 border border-[#00FF00]/50 text-[#00FF00] font-mono uppercase tracking-widest text-sm hover:bg-[#00FF00]/10 transition-colors">Request Access</button>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
