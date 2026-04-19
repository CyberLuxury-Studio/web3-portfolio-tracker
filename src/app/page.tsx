import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] font-inter">
      {/* Dynamic Header based on repo name */}
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#3b4b37]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-space-grotesk text-2xl font-bold tracking-widest text-[#00FF41] uppercase">web3_PROT</div>
          <div className="hidden md:flex gap-8 font-space-grotesk text-sm uppercase tracking-widest text-[#84967e]">
            <a href="#features" className="hover:text-[#00FF41]">Features</a>
            <a href="#pricing" className="hover:text-[#00FF41]">Pricing</a>
            <a href="#docs" className="hover:text-[#00FF41]">Docs</a>
          </div>
          <button className="px-6 py-2 border border-[#00FF41] text-[#00FF41] font-mono text-sm hover:bg-[#00FF41] hover:text-[#050505] transition-colors">
            INITIATE
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center min-h-[80vh]">
         <div className="inline-block px-3 py-1 bg-[#131313] border border-[#3b4b37] text-[#84967e] font-mono text-xs mb-8">SYSTEM_STATUS: SECURE</div>
         <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter mb-6 uppercase">
           THE ULTIMATE <br/><span className="text-[#00FF41] underline decoration-[#FF003C] underline-offset-8 decoration-4">web3 portfolio tracker</span>
         </h1>
         <p className="text-lg text-[#84967e] max-w-2xl mb-12">
           Build a crypto portfolio tracker. Include a wallet balance hero section, asset distribution bars, and transaction history rows.
         </p>
         <button className="px-12 py-4 bg-[#00FF41] text-[#003907] font-space-grotesk font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]">
           LAUNCH TERMINAL
         </button>
      </section>

      {/* Features */}
      <section id="features" className="py-32 bg-[#0e0e0e] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-space-grotesk font-bold uppercase tracking-widest mb-16 text-[#00FF41] border-b border-[#3b4b37]/30 pb-4">Core Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#131313] p-8 border border-[#3b4b37]/30 hover:border-[#00FF41]/50 transition-colors">
                <div className="text-3xl font-mono text-[#FF003C] mb-6">0{i}</div>
                <h3 className="text-xl font-space-grotesk uppercase tracking-widest mb-4">Module {i}</h3>
                <p className="text-[#84967e] text-sm">High-performance components designed for extreme data density and rapid execution. No bloated code. Just pure function.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 border border-[#3b4b37]/50 bg-[#0e0e0e]">
            <h3 className="text-2xl font-space-grotesk uppercase tracking-widest mb-2 text-[#84967e]">Base Node</h3>
            <div className="text-4xl font-mono mb-8 text-[#e5e2e1]">./process_batch1_landing.sh / mo</div>
            <button className="w-full py-3 border border-[#84967e] text-[#84967e] font-mono text-sm uppercase mb-8 hover:bg-[#84967e] hover:text-[#050505]">Deploy Base</button>
            <ul className="space-y-4 font-mono text-sm text-[#84967e]">
              <li>+ Standard API Limits</li>
              <li>+ Community Support</li>
            </ul>
          </div>
          <div className="p-10 border border-[#00FF41] bg-[#131313] shadow-[0_0_30px_rgba(0,255,65,0.05)]">
            <h3 className="text-2xl font-space-grotesk uppercase tracking-widest mb-2 text-[#00FF41]">Quantum Node</h3>
            <div className="text-4xl font-mono mb-8 text-[#e5e2e1]">9 / mo</div>
            <button className="w-full py-3 bg-[#00FF41] text-[#003907] font-mono font-bold text-sm uppercase mb-8 hover:bg-white">Deploy Quantum</button>
            <ul className="space-y-4 font-mono text-sm text-[#e5e2e1]">
              <li className="text-[#00FF41]">+ Unlimited API Calls</li>
              <li>+ Dedicated SLA</li>
              <li>+ Custom Integrations</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-[#3b4b37]/30 text-center font-mono text-xs text-[#84967e]">
        <p>END OF FILE. web3-portfolio-tracker © 2024</p>
      </footer>
    </main>
  );
}
