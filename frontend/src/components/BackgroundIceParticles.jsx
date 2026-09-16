import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundIceParticles() {
  // Generate random stable particles for performance
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
      drift: (Math.random() - 0.5) * 40,
      opacity: Math.random() * 0.4 + 0.2
    }));
  }, []);

  const snowflakes = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: `flake-${i}`,
      left: Math.random() * 100,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 14 + 18,
      delay: Math.random() * 8,
      sway: Math.random() * 60 + 20
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Ambient Neon Ice Spotlights */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-glow" 
      />
      <div 
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-blue-600/15 blur-[140px] animate-pulse-glow" 
        style={{ animationDelay: '2.5s' }}
      />
      <div 
        className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] rounded-full bg-teal-400/10 blur-[130px] animate-pulse-glow" 
        style={{ animationDelay: '1.2s' }}
      />

      {/* Floating Micro Ice Crystals */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.8), 0 0 20px rgba(56, 189, 248, 0.4)',
            opacity: p.opacity
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, p.drift, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Drifting Frost Snowflakes */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-cyan-200/20 font-serif"
          style={{
            left: `${flake.left}%`,
            top: '-5%',
            fontSize: `${flake.size}px`,
            filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.4))'
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, flake.sway, -flake.sway, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: 'linear'
          }}
        >
          ❄
        </motion.div>
      ))}

      {/* Subtle Frost Grid Horizon */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" 
      />
    </div>
  );
}
