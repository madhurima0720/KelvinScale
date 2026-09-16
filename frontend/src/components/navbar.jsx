import React from 'react';
import { ShoppingBag, Sparkles, ThermometerSnowflake, Globe } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function Navbar() {
  const { isTrayOpen, setIsTrayOpen, trayItems, language, toggleLanguage } = useMascot();

  const totalScoops = trayItems.reduce((acc, item) => acc + (item.scoops || 1), 0);

  return (
    <nav className="glass-nav fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo with Official Golden Emblem */}
        <a href="#home" className="flex items-center gap-3.5 group">
          {/* Logo Container: Circular Glassmorphic Badge with Warm Golden Glow */}
          <div className="relative flex items-center justify-center">
            {/* Warm ambient golden glow behind the emblem */}
            <div className="absolute -inset-1 rounded-full bg-amber-400/25 blur-md group-hover:bg-amber-400/40 group-hover:scale-110 transition-all duration-300" />
            
            {/* Glassmorphic Badge Container */}
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full backdrop-blur-md bg-white/10 border border-amber-400/30 p-1 flex items-center justify-center shadow-[0_4px_16px_rgba(234,179,8,0.25)] group-hover:border-amber-400/60 transition-all duration-300 overflow-hidden">
              <img 
                src="/assets/kelvin-gold-emblem.png" 
                alt="Kelvin Scale Official Emblem" 
                className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(234,179,8,0.4)] transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>

          {/* Typography Styling */}
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5 leading-tight">
              KELVIN SCALE
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-semibold tracking-normal uppercase">
                0 K
              </span>
            </span>
            <span className="text-[10px] text-cyan-300 font-semibold tracking-widest uppercase mt-0.5">
              ABSOLUTE ICE CREAM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
          <a
            href="#home"
            className="text-gray-200 hover:text-cyan-300 transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            Home
          </a>
          <a
            href="#flavors"
            className="text-gray-200 hover:text-cyan-300 transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            Flavors
          </a>
          <a
            href="#science"
            className="text-gray-200 hover:text-cyan-300 transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            Science of 0K
          </a>
          <a
            href="#crafter"
            className="text-gray-200 hover:text-cyan-300 transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            Cryo-Bowl Crafter
          </a>
          <a
            href="#about"
            className="text-gray-200 hover:text-cyan-300 transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            About Us
          </a>
        </div>

        {/* Actions & Scoop Tray Button */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="glass-pill px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-200 hover:text-white hover:bg-white/20 transition-all flex items-center gap-1.5 border border-cyan-400/20 cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-300" />
            <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
          </button>

          {/* Scoop Tray Cart Button */}
          <button
            onClick={() => setIsTrayOpen(true)}
            className="relative glass-card px-4 py-2 rounded-full hover:border-cyan-400/60 hover:bg-white/15 transition-all flex items-center gap-2.5 group cursor-pointer shadow-[0_4px_16px_rgba(0,183,255,0.2)]"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
              {totalScoops > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalScoops}
                </span>
              )}
            </div>
            <span className="text-xs font-bold text-white tracking-wider hidden sm:inline">
              Scoop Tray
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}