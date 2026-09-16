import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, Volume2, MessageSquare, Compass } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function InteractiveMascot({ mode = 'hero', className = '' }) {
  const {
    mascotMessage,
    mascotSubText,
    mascotMood,
    triggerSpin,
    spinTrigger,
    language,
    toggleLanguage
  } = useMascot();

  const containerRef = useRef(null);

  // Framer Motion physics values for cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth zero-gravity spring physics
  const springConfig = { damping: 20, stiffness: 90, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Dynamic 3D tilt and drift based on cursor offset
  const maxOffset = mode === 'hero' ? 45 : 25;
  const driftX = useTransform(smoothX, [-400, 400], [-maxOffset, maxOffset]);
  const driftY = useTransform(smoothY, [-400, 400], [-maxOffset * 0.7, maxOffset * 0.7]);
  const rotateX = useTransform(smoothY, [-400, 400], [12, -12]);
  const rotateY = useTransform(smoothX, [-400, 400], [-16, 16]);
  const rotateZ = useTransform(smoothX, [-400, 400], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const isHero = mode === 'hero';

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* Interactive Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mascotMessage}-${language}`}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`glass-card ${
            isHero ? 'max-w-md px-6 py-4 mb-6' : 'max-w-xs px-4 py-3 mb-3'
          } rounded-3xl border border-cyan-300/40 shadow-[0_12px_32px_rgba(0,183,255,0.25)] relative text-center z-20 backdrop-blur-xl`}
        >
          {/* Top Badge Indicator */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>Kelvin Guide</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin [animation-duration:8s]" />
            </div>

            <button
              onClick={toggleLanguage}
              title="Toggle Language"
              className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-200 border border-cyan-400/30 transition-all cursor-pointer"
            >
              {language === 'en' ? 'తెలుగు' : 'English'}
            </button>
          </div>

          {/* Primary Speech Text */}
          <h4
            className={`${
              isHero ? 'text-lg md:text-xl' : 'text-sm'
            } font-bold text-white tracking-wide leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}
          >
            {mascotMessage}
          </h4>

          {/* Subtext description */}
          {mascotSubText && (
            <p
              className={`${
                isHero ? 'text-xs md:text-sm mt-1.5' : 'text-xs mt-1'
              } text-cyan-100/90 leading-relaxed font-normal`}
            >
              {mascotSubText}
            </p>
          )}

          {/* Interactive Hint */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-cyan-300/80">
            <span className="hover:text-cyan-200 cursor-pointer" onClick={triggerSpin}>
              ✨ Click Kelvin to see a Zero-G trick!
            </span>
          </div>

          {/* Speech Bubble Arrow pointing to mascot */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-cyan-400/40 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" />
        </motion.div>
      </AnimatePresence>

      {/* Zero-G Mascot Container with Cursor Spring Physics */}
      <motion.div
        style={{
          x: driftX,
          y: driftY,
          rotateX: rotateX,
          rotateY: rotateY,
          rotateZ: rotateZ,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          y: [0, -16, 0],
          rotate: [-1.5, 1.5, -1.5]
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="relative cursor-pointer group"
        onClick={triggerSpin}
      >
        {/* Anti-Gravity Orbital Frost Rings */}
        <div className="absolute -inset-8 pointer-events-none flex items-center justify-center">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border border-cyan-400/20 animate-spin [animation-duration:24s] border-dashed" />
          <div className="absolute w-44 h-44 md:w-64 md:h-64 rounded-full border border-blue-400/15 animate-spin [animation-duration:16s] [animation-direction:reverse]" />
          <div className="absolute w-60 h-20 md:w-96 md:h-28 rounded-full bg-cyan-400/10 blur-xl translate-y-24 scale-y-50" />
        </div>

        {/* Ambient Zero-G Glow Behind Mascot */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-2xl group-hover:scale-110 transition-transform duration-500" />

        {/* The Blue Penguin Mascot */}
        <motion.img
          src="/assets/kelvin-penguin.png"
          alt="Kelvin the Penguin - Absolute Ice Cream Mascot"
          key={spinTrigger}
          initial={spinTrigger > 0 ? { rotateY: 0, scale: 0.95 } : false}
          animate={
            spinTrigger > 0
              ? {
                  rotateY: [0, 360],
                  scale: [0.95, 1.1, 1],
                  y: [0, -25, 0]
                }
              : {}
          }
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className={`${
            isHero ? 'w-56 sm:w-64 md:w-80' : 'w-24 sm:w-28'
          } h-auto relative z-10 drop-shadow-[0_24px_36px_rgba(0,183,255,0.45)] transition-all duration-300 filter group-hover:brightness-105 group-hover:drop-shadow-[0_28px_45px_rgba(56,189,248,0.6)]`}
        />

        {/* Floating Sub-Zero Sparkles Around Mascot */}
        <motion.div
          className="absolute -top-3 -right-2 z-20 bg-cyan-300/30 backdrop-blur-md p-1.5 rounded-full border border-cyan-200/40 text-cyan-200 text-xs shadow-lg"
          animate={{ scale: [1, 1.25, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-4 h-4 text-cyan-300" />
        </motion.div>

        <motion.div
          className="absolute bottom-6 -left-3 z-20 bg-blue-400/25 backdrop-blur-md px-2.5 py-1 rounded-full border border-blue-200/30 text-[10px] text-cyan-100 font-bold tracking-wider shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          -273.15°C
        </motion.div>
      </motion.div>

      {/* Floating Anti-Gravity Shadow */}
      <motion.div
        className={`${
          isHero ? 'w-48 md:w-64 h-5' : 'w-20 h-3'
        } rounded-full bg-cyan-950/60 blur-md mt-4 pointer-events-none`}
        animate={{
          scale: [0.85, 1.1, 0.85],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}
