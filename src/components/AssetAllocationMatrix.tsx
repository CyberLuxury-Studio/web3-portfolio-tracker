"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'BTC', value: 45, color: '#F7931A' },
  { name: 'ETH', value: 30, color: '#627EEA' },
  { name: 'SOL', value: 15, color: '#14F195' },
  { name: 'USDC', value: 10, color: '#2775CA' },
];

const holdings = [
  { asset: 'BTC', balance: '2.45', value: 167520.45, pnl: '+4.2%' },
  { asset: 'ETH', balance: '45.2', value: 158200.20, pnl: '+1.8%' },
  { asset: 'SOL', balance: '450.0', value: 65250.00, pnl: '+8.4%' },
  { asset: 'USDC', balance: '42,100', value: 42100.00, pnl: '0.0%' },
];

const ScrambleText = React.memo(({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text.replace(/[0-9]/g, '0'));

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(prev => prev.split('').map((char, i) => {
        if (char === '.' || char === ',' || char === '+' || char === '%' || char === '$' || isNaN(parseInt(text[i]))) return text[i];
        if (iterations >= 8) return text[i];
        return Math.floor(Math.random() * 10).toString();
      }).join(''));

      iterations++;
      if (iterations >= 8) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
});
ScrambleText.displayName = 'ScrambleText';


export default function AssetAllocationMatrix() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold uppercase tracking-widest font-['Space_Grotesk'] text-white flex items-center gap-4">
            <span className="w-2 h-8 bg-[#00FF00]"></span> Asset Allocation Matrix
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 p-8 rounded-lg flex flex-col items-center justify-center min-h-[400px]"
          >
             <h3 className="text-white/60 font-mono text-sm tracking-widest uppercase mb-4 self-start">Portfolio Distribution</h3>
             {isMounted && (
               <div className="w-full h-[300px]">
                 <ResponsiveContainer width="100%" height="100%" debounce={50}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                        animationBegin={0}
                        animationDuration={1500}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-jetbrains-mono)' }}
                        itemStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                 </ResponsiveContainer>
               </div>
             )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/5 p-8 rounded-lg flex flex-col"
          >
            <h3 className="text-white/60 font-mono text-sm tracking-widest uppercase mb-6">Top Holdings</h3>

            <div className="space-y-4 flex-1">
              {holdings.map((h, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors rounded">
                  <div className="flex flex-col">
                    <span className="font-bold text-white font-['Space_Grotesk'] text-lg">{h.asset}</span>
                    <span className="text-white/40 font-mono text-sm">{h.balance}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-white text-lg">
                      $<ScrambleText text={h.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} />
                    </span>
                    <span className={`font-mono text-sm ${h.pnl.startsWith('+') && h.pnl !== '+0.0%' ? 'text-[#00FF00]' : (h.pnl === '0.0%' ? 'text-white/60' : 'text-[#FF003C]')}`}>
                      <ScrambleText text={h.pnl} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-white/60 font-mono text-sm">TOTAL NAV</span>
              <span className="text-2xl font-bold text-[#00FF00] font-mono">
                $<ScrambleText text="433,070.65" />
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
