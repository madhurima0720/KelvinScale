import React, { useState } from 'react';
import { Snowflake, Send, Instagram, Twitter, Facebook, MapPin, Clock, Phone, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-cyan-400/20 bg-slate-950/80 backdrop-blur-2xl mt-24 z-10">
      {/* Sub-Zero VIP Club Newsletter banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-400/30 shadow-[0_20px_50px_rgba(0,183,255,0.25)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-center md:justify-start gap-1.5 mb-1">
              <Snowflake className="w-4 h-4 text-cyan-300" />
              Kelvin Sub-Zero VIP Club
            </span>
            <h3 className="text-2xl font-black text-white">
              Get 15% Off Your First Sub-Zero Scoop!
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Secret batch releases, seasonal fruit specials, and exclusive member tastings.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass-pill px-4 py-3 rounded-full text-xs text-white placeholder-slate-400 border border-cyan-400/30 focus:outline-none focus:border-cyan-300 w-full sm:w-72"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wider transition-all shadow-lg flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Joined!</span>
                </>
              ) : (
                <>
                  <span>Join VIP</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full backdrop-blur-md bg-white/10 border border-amber-400/30 p-0.5 flex items-center justify-center shadow-[0_2px_10px_rgba(234,179,8,0.2)]">
                <img src="/assets/kelvin-gold-emblem.png" alt="Kelvin Scale" className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
              </div>
              <span className="font-extrabold text-base text-white tracking-wider">
                KELVIN SCALE
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Absolute zero ice cream churned at 0 Kelvin (-273.15°C). 100% real fruit pulp, pure dairy cream, and zero coarse ice crystals.
            </p>
            <div className="flex gap-3 pt-2 text-cyan-300">
              <a href="#" className="glass-pill p-2 rounded-full hover:text-white hover:border-cyan-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="glass-pill p-2 rounded-full hover:text-white hover:border-cyan-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="glass-pill p-2 rounded-full hover:text-white hover:border-cyan-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Discover
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#flavors" className="hover:text-cyan-300 transition-colors">Artisanal Flavors</a></li>
              <li><a href="#science" className="hover:text-cyan-300 transition-colors">Cryo Technology</a></li>
              <li><a href="#crafter" className="hover:text-cyan-300 transition-colors">Custom Bowl Crafter</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">Reviews & Quality</a></li>
            </ul>
          </div>

          {/* Store Hours */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Chamber Hours
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mon - Sun: 11:00 AM - 1:00 AM</span>
              </div>
              <p className="text-[11px] text-cyan-200/70">Late-night sub-zero cravings welcomed!</p>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Parlour Hub
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Cryo Hub #7, Jubilee Hills / Gachibowli, Hyderabad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Kelvin Scale: Absolute Ice Cream. Churned Fresh. Served Happy.</p>
          <div className="flex gap-4">
            <span className="text-cyan-400">0 K Guaranteed (-273.15°C)</span>
            <span>•</span>
            <span>Crafted with Framer Motion & Love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}