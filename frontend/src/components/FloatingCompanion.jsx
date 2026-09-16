import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, X, ChevronUp } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function FloatingCompanion() {
  const [showCompanion, setShowCompanion] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const { mascotMessage, mascotSubText, triggerSpin, activeFlavor, language, toggleLanguage } = useMascot();

  useEffect(() => {
    const handleScroll = () => {
      // Show floating companion once scrolled past 420px (past hero)
      if (window.scrollY > 420) {
        setShowCompanion(true);
      } else {
        setShowCompanion(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showCompanion) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto select-none">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.85 }}
            transition={{ duration: 0.3 }}
            className="mb-3 max-w-xs glass-card rounded-2xl p-3.5 border border-cyan-300/40 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                <span>Kelvin Guide 🐧</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleLanguage}
                  className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-200 border border-cyan-400/30 transition-all cursor-pointer"
                >
                  {language === 'en' ? 'తెలుగు' : 'EN'}
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-white text-xs font-bold leading-tight">
              {mascotMessage}
            </p>
            {mascotSubText && (
              <p className="text-cyan-200/80 text-[11px] mt-1 line-clamp-3 leading-snug">
                {mascotSubText}
              </p>
            )}

            <div className="mt-2 text-[10px] text-cyan-400/70 text-right cursor-pointer hover:underline" onClick={triggerSpin}>
              ✨ Tap to spin Kelvin
            </div>

            {/* Pointer arrow to mascot */}
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-cyan-400/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Avatar Button */}
      <div className="flex items-center gap-2">
        {!isExpanded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsExpanded(true)}
            className="glass-pill px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-200 flex items-center gap-1.5 hover:bg-white/20 transition-all shadow-lg"
          >
            <MessageCircle className="w-3.5 h-3.5 text-cyan-300" />
            <span>Ask Kelvin</span>
          </motion.button>
        )}

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (!isExpanded) setIsExpanded(true);
            triggerSpin();
          }}
          className="relative cursor-pointer group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-14 h-14 rounded-full glass-card border border-cyan-300/50 p-1 flex items-center justify-center overflow-hidden bg-slate-900/80">
            <img
              src="/assets/kelvin-penguin.png"
              alt="Kelvin Companion"
              className="w-full h-full object-contain filter drop-shadow group-hover:rotate-6 transition-transform"
            />
            {activeFlavor && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border border-slate-900 animate-pulse" />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
