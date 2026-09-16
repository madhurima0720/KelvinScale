import React from 'react';
import { motion } from 'framer-motion';

export default function HeroPenguin() {
  return (
    <div className="relative flex flex-col items-center justify-center pt-28 pb-10 px-4">
      {/* Telugu Speech Bubble */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card px-6 py-4 rounded-3xl max-w-md text-center border border-cyan-300/40 mb-6 shadow-2xl relative"
      >
        <p className="text-white text-base font-medium leading-relaxed">
          హాయ్! నేను కెల్విన్ 🐧. మా ఐస్ క్రీములు <span className="text-cyan-300 font-bold">Absolute Zero Degrees</span> వద్ద frozen, 100% అసలైన పండ్లతో తయారవుతాయి. మీకు ఏ ఫ్లేవర్ ఇష్టం?
        </p>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/20" />
      </motion.div>

      {/* Floating Mascot */}
      <motion.img 
        src="/assets/kelvin-penguin.png" 
        alt="Kelvin Penguin" 
        className="w-60 md:w-72 h-auto drop-shadow-[0_20px_30px_rgba(0,183,255,0.4)]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}