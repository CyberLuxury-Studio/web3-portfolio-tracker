"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
const DataCoin3D = dynamic(() => import('./DataCoin3D'), { ssr: false });

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[90vh] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-12">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF00] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      
      <div className="flex-1 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1 border border-[#00FF00]/30 text-[#00FF00] font-mono text-xs uppercase tracking-widest mb-8 bg-[#0a0a0a]/60 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,0,0.1)]"
        >
          <ShieldAlert className="w-4 h-4" /> SYSTEM_STATUS: SECURE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-['Space_Grotesk'] uppercase leading-tight text-white"
        >
          THE web3 portfolio tracker <br/><span className="text-[#00FF00] underline decoration-[#00FFFF] underline-offset-8">PROTOCOL.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-light"
        >
          Build a crypto portfolio tracker. Engineered for extreme data density and uncompromising security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6"
        >
          <button className="flex items-center gap-3 px-8 py-4 bg-transparent border border-[#00FFFF] text-[#00FFFF] font-mono uppercase tracking-widest text-sm hover:bg-[#00FFFF]/10 transition-colors">
            <Zap className="w-4 h-4" /> INITIALIZE SEQUENCE
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 w-full h-[500px] relative z-10"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#00FF00" />
          <DataCoin3D />
          <Environment preset="city" />
        </Canvas>
      </motion.div>

    </section>
  );
}
