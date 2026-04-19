import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0e15] text-[#eeedf7] font-['Space_Grotesk'] selection:bg-[#00F3FF] selection:text-black">
      {/* Top Nav */}
      <nav className="fixed w-full z-50 bg-[#0d0e15]/80 backdrop-blur-xl border-b border-[#474750]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#00F3FF]">KINETIC_SYNC</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#abaab4]">
            <a href="#distribution" className="hover:text-[#00F3FF] transition-colors">Analytics</a>
            <a href="#features" className="hover:text-[#00F3FF] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#00F3FF] transition-colors">Tiers</a>
          </div>
          <button className="px-6 py-2 bg-[#00F3FF] text-[#004145] font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF51FA] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none uppercase">
              DOMINATE <br/>THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F3FF] to-[#FF51FA]">CHAIN.</span>
            </h1>
            <p className="text-xl text-[#abaab4] mb-10 max-w-lg">
              Multi-chain portfolio tracking. Institutional-grade analytics. Zero compromises. Sync all your wallets into a single, unified command center.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#00F3FF] text-[#004145] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
                Launch Dashboard
              </button>
            </div>
          </div>
          
          {/* Simulated UI Visual */}
          <div className="bg-[#12131b] border border-[#474750]/30 p-8 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
             <div className="text-xs uppercase tracking-widest text-[#abaab4] mb-4 flex justify-between border-b border-[#474750]/30 pb-2">
               <span>Total Balance</span>
               <span className="text-[#00F3FF]">SYNCED</span>
             </div>
             <div className="text-5xl md:text-7xl font-bold text-[#eeedf7] mb-8 font-mono">
               42,890<span className="text-2xl text-[#abaab4]">.00</span>
             </div>
             <div className="space-y-4">
               <div className="flex justify-between items-center bg-[#181922] p-4 border border-[#474750]/30">
                 <div className="flex items-center gap-3"><span className="w-3 h-3 bg-[#00F3FF]"></span><span className="uppercase tracking-widest text-sm">Ethereum</span></div>
                 <div className="text-[#00F3FF] font-mono">5,400</div>
               </div>
               <div className="flex justify-between items-center bg-[#181922] p-4 border border-[#474750]/30">
                 <div className="flex items-center gap-3"><span className="w-3 h-3 bg-[#FF51FA]"></span><span className="uppercase tracking-widest text-sm">Solana</span></div>
                 <div className="text-[#FF51FA] font-mono">5,200</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Asset Distribution */}
      <section id="distribution" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-12 text-[#eeedf7]">Portfolio Breakdown</h2>
        <div className="bg-[#12131b] p-8 border border-[#474750]/30">
          <div className="h-6 w-full flex mb-8 bg-[#000000]">
             <div className="h-full bg-gradient-to-r from-[#006a6f] to-[#00F3FF] shadow-[0_0_15px_rgba(0,243,255,0.4)]" style={{width: '60%'}}></div>
             <div className="h-full bg-gradient-to-r from-[#a900a9] to-[#FF51FA]" style={{width: '30%'}}></div>
             <div className="h-full bg-[#abaab4]" style={{width: '10%'}}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-sm uppercase tracking-widest">
            <div><span className="text-[#00F3FF] block text-2xl font-bold mb-1">60%</span>ETH (L1)</div>
            <div><span className="text-[#FF51FA] block text-2xl font-bold mb-1">30%</span>SOL (L1)</div>
            <div><span className="text-[#abaab4] block text-2xl font-bold mb-1">10%</span>STABLES</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {title: "Real-time Data", c: "#00F3FF"},
            {title: "Multi-wallet Sync", c: "#FF51FA"},
            {title: "Gas Tracker", c: "#00F3FF"},
            {title: "Alpha Alerts", c: "#FF51FA"}
          ].map((f, i) => (
            <div key={i} className="bg-[#12131b] border border-[#474750]/30 p-8 hover:bg-[#181922] transition-colors border-t-2" style={{borderTopColor: f.c}}>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4" style={{color: f.c}}>{f.title}</h3>
              <p className="text-[#abaab4] text-sm">Monitor your assets across all major EVM and non-EVM chains with zero latency.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activity */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-12 text-[#eeedf7]">Recent Activity</h2>
        <div className="bg-[#000000] border border-[#474750]/30">
           <div className="grid grid-cols-4 p-4 border-b border-[#474750]/30 text-xs uppercase tracking-widest text-[#abaab4]">
             <div>Type</div><div>Asset</div><div>Amount</div><div className="text-right">Status</div>
           </div>
           {[
             {t: "BUY", a: "SOL", am: "+45.00", s: "SUCCESS", c: "#00F3FF"},
             {t: "SEND", a: "USDC", am: "-1200.00", s: "SUCCESS", c: "#00F3FF"},
             {t: "MINT", a: "NFT", am: "-0.15 ETH", s: "FAILED", c: "#ff716c"},
           ].map((r, i) => (
             <div key={i} className="grid grid-cols-4 p-4 border-b border-[#474750]/30 last:border-0 items-center text-sm font-mono">
               <div className="text-[#eeedf7]">{r.t}</div>
               <div className="text-[#abaab4]">{r.a}</div>
               <div className="text-[#eeedf7]">{r.am}</div>
               <div className="text-right text-xs"><span className="px-2 py-1 bg-opacity-10 border" style={{color: r.c, borderColor: r.c, backgroundColor: r.c}}>{r.s}</span></div>
             </div>
           ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-[#12131b]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-16">Access Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="bg-[#181922] border border-[#474750]/50 p-8">
              <h3 className="text-xl uppercase tracking-widest text-[#abaab4] mb-4">Neon Basic</h3>
              <div className="text-4xl font-bold text-[#eeedf7] mb-8">Free</div>
              <ul className="space-y-4 text-sm text-[#abaab4] mb-8 uppercase tracking-widest">
                <li>3 Wallets Sync</li>
                <li>Basic Analytics</li>
              </ul>
              <button className="w-full py-3 border border-[#abaab4] hover:bg-[#abaab4] hover:text-black uppercase tracking-widest text-sm transition-colors">Start Free</button>
            </div>
            
            <div className="bg-[#1e1f28] border-2 border-[#00F3FF] p-10 shadow-[0_0_30px_rgba(0,243,255,0.15)] relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-[#00F3FF] text-[#004145] text-xs font-bold px-3 py-1 uppercase tracking-widest">Most Popular</div>
              <h3 className="text-xl uppercase tracking-widest text-[#00F3FF] mb-4">Cyber Pro</h3>
              <div className="text-4xl font-bold text-[#eeedf7] mb-8">9<span className="text-lg text-[#abaab4]">/mo</span></div>
              <ul className="space-y-4 text-sm text-[#eeedf7] mb-8 uppercase tracking-widest">
                <li className="text-[#00F3FF]">Unlimited Wallets</li>
                <li>Real-time Tax Export</li>
                <li>Custom Alerts</li>
              </ul>
              <button className="w-full py-4 bg-[#00F3FF] text-[#004145] font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">Go Pro</button>
            </div>

            <div className="bg-[#181922] border border-[#474750]/50 p-8">
              <h3 className="text-xl uppercase tracking-widest text-[#abaab4] mb-4">Data Lord</h3>
              <div className="text-4xl font-bold text-[#eeedf7] mb-8">9<span className="text-lg text-[#abaab4]">/mo</span></div>
              <ul className="space-y-4 text-sm text-[#abaab4] mb-8 uppercase tracking-widest">
                <li>API Access</li>
                <li>Whale Tracking</li>
              </ul>
              <button className="w-full py-3 border border-[#abaab4] hover:bg-[#abaab4] hover:text-black uppercase tracking-widest text-sm transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#474750]/30 bg-[#0d0e15]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm uppercase tracking-widest text-[#abaab4]">
          <div className="mb-4 md:mb-0">KINETIC_SYNC © 2024</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00F3FF]">Privacy</a>
            <a href="#" className="hover:text-[#00F3FF]">Terms</a>
            <a href="#" className="hover:text-[#00F3FF]">X/Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
