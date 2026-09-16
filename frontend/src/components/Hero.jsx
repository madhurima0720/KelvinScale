import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Snowflake, Flame } from 'lucide-react';
import InteractiveMascot from './InteractiveMascot';
import { useMascot } from '../context/MascotContext';

export default function Hero() {
  const { language, setIsTrayOpen } = useMascot();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Brand, Headline, Cryo-Temp Meter, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* Absolute Zero Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-cyan-400/30 text-cyan-200 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-wide">CRYO-BLAST TECHNOLOGY • 0 KELVIN (-273.15°C)</span>
            <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_4px_24px_rgba(0,183,255,0.4)]">
              Frozen at Absolute
            </span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Zero Degrees,
            </span>
            <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-semibold text-cyan-200/90 font-sans">
              Served Fresh with Love!
            </span>
          </motion.h1>

          {/* Bilingual / Brand Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            {language === 'en' ? (
              <>
                Experience revolutionary sub-zero micro-churning. By locking freshness at the quantum cold of the Kelvin Scale, we eliminate coarse ice crystals for the silkiest, purest cream texture in the world.
              </>
            ) : (
              <>
                అబ్సొల్యూట్ జీరో డిగ్రీస్ వద్ద వేగంగా ఘనీభవించి, 100% సహజమైన పండ్లు మరియు స్వచ్ఛమైన పాలతో తయారయ్యే అద్భుతమైన ఐస్ క్రీములు. ప్రతి స్పూన్‌లో అమృతపు రుచి!
              </>
            )}
          </motion.p>

          {/* Live Cryo Temperature Meter & Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg"
          >
            <div className="glass-card rounded-2xl p-3 sm:p-4 text-center border border-cyan-400/20">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-300 tracking-tight block">
                0 K
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-100/70 uppercase tracking-wider block mt-0.5">
                Absolute Cold
              </span>
            </div>
            <div className="glass-card rounded-2xl p-3 sm:p-4 text-center border border-cyan-400/20">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight block">
                100%
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-100/70 uppercase tracking-wider block mt-0.5">
                Real Fruit Pulp
              </span>
            </div>
            <div className="glass-card rounded-2xl p-3 sm:p-4 text-center border border-cyan-400/20">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-300 tracking-tight block">
                -18°C
              </span>
              <span className="text-[10px] sm:text-xs text-cyan-100/70 uppercase tracking-wider block mt-0.5">
                Serving Sweetspot
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#flavors"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Explore Flavors</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#crafter"
              className="px-7 py-3.5 rounded-full glass-card border border-cyan-300/40 text-white font-semibold text-sm tracking-wide hover:bg-white/15 hover:border-cyan-300 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Craft Cryo-Bowl</span>
            </a>
          </motion.div>

          {/* Quality Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-slate-300"
          >
            <div className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>100% Real Fruits</span>
            </div>
            <div className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full">
              <HeartHandshake className="w-4 h-4 text-cyan-400" />
              <span>Hand-Churned Daily</span>
            </div>
            <div className="flex items-center gap-1.5 glass-pill px-3 py-1.5 rounded-full">
              <Snowflake className="w-4 h-4 text-cyan-400" />
              <span>Served at Absolute Zero</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: 3D Anti-Gravity Floating Mascot */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <InteractiveMascot mode="hero" />
        </div>

      </div>
    </section>
  );
}
