import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] p-10 font-inter">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-sm font-space-grotesk tracking-[0.2em] text-[#b9cacb] uppercase mb-2">Total Net Worth</h1>
          <div className="text-5xl font-bold font-space-grotesk text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">28,450<span className="text-2xl text-[#b9cacb]">.00</span></div>
        </div>
        <button className="px-6 py-2 border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-colors font-space-grotesk tracking-widest text-sm">+ Add Wallet</button>
      </header>
      
      <section className="bg-[#1a1b22] border border-[#3b494b]/30 p-8 mb-10">
        <h2 className="text-xl font-space-grotesk text-[#e3e1ec] mb-6">Asset Distribution</h2>
        <div className="h-4 w-full flex mb-4">
          <div className="h-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" style={{width: '60%'}}></div>
          <div className="h-full bg-[#FF003C]" style={{width: '25%'}}></div>
          <div className="h-full bg-[#e3e1ec]" style={{width: '15%'}}></div>
        </div>
        <div className="flex gap-8 text-sm font-space-grotesk">
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#00F0FF]"></span> ETH (60%)</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#FF003C]"></span> SOL (25%)</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#e3e1ec]"></span> USDC (15%)</div>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-space-grotesk text-[#e3e1ec] mb-6">Recent Transactions</h2>
        <div className="bg-[#1a1b22] border border-[#3b494b]/30">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex justify-between items-center p-6 border-b border-[#3b494b]/30 last:border-0 hover:bg-[#292931]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF]">↓</div>
                <div>
                  <div className="font-space-grotesk text-[#e3e1ec]">Received ETH</div>
                  <div className="text-xs text-[#b9cacb]">From: 0x...8a2B</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[#00F0FF]">+0.45 ETH</div>
                <div className="text-xs text-[#b9cacb]">~,200.00</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
