import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus, Check, ShoppingBag } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

const VESSELS = [
  { id: 'v1', name: 'Glacier Frosted Waffle Cone', price: 30, icon: '🍦' },
  { id: 'v2', name: 'Cryo Crystal Glass Bowl', price: 20, icon: '🍨' },
  { id: 'v3', name: 'Sub-Zero Toasted Brioche Bun', price: 45, icon: '🥯' }
];

const SCOOP_OPTIONS = [
  { id: 's1', name: 'Belgian Dark Chocolate', price: 90, color: '#4a2c2a' },
  { id: 's2', name: 'Caramel Pecan Praline', price: 100, color: '#b87333' },
  { id: 's3', name: 'Alphonso Mango', price: 85, color: '#f59e0b' },
  { id: 's4', name: 'Wild Berry Blast', price: 90, color: '#db2777' },
  { id: 's5', name: 'Cryo Pistachio', price: 105, color: '#10b981' },
  { id: 's6', name: 'Red Velvet Cake', price: 105, color: '#e11d48' }
];

const TOPPING_OPTIONS = [
  { id: 't1', name: 'Liquid Nitrogen Choco Shell', price: 35 },
  { id: 't2', name: 'Freeze-Dried Strawberries', price: 30 },
  { id: 't3', name: 'Roasted Georgia Pecan Crumble', price: 40 },
  { id: 't4', name: '24K Edible Gold Frost Flakes', price: 60 }
];

export default function ScoopBuilder() {
  const { addToTray, language } = useMascot();
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [selectedScoops, setSelectedScoops] = useState([SCOOP_OPTIONS[0], SCOOP_OPTIONS[1]]);
  const [selectedToppings, setSelectedToppings] = useState([TOPPING_OPTIONS[0]]);
  const [added, setAdded] = useState(false);

  const toggleScoop = (scoop) => {
    if (selectedScoops.some((s) => s.id === scoop.id)) {
      if (selectedScoops.length > 1) {
        setSelectedScoops(selectedScoops.filter((s) => s.id !== scoop.id));
      }
    } else {
      if (selectedScoops.length < 3) {
        setSelectedScoops([...selectedScoops, scoop]);
      }
    }
  };

  const toggleTopping = (topping) => {
    if (selectedToppings.some((t) => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const totalPrice =
    selectedVessel.price +
    selectedScoops.reduce((sum, s) => sum + s.price, 0) +
    selectedToppings.reduce((sum, t) => sum + t.price, 0);

  const handleAddCustomBowl = () => {
    const customItem = {
      name: `Custom Cryo-Bowl (${selectedScoops.map((s) => s.name).join(' + ')})`,
      teluguName: 'కస్టమ్ క్రయో-బౌల్',
      price: totalPrice,
      container: selectedVessel.name,
      toppings: selectedToppings.map((t) => t.name).join(', '),
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800',
      scoops: 1
    };
    addToTray(customItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <section id="crafter" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Mixology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Craft Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Custom Sub-Zero Bowl</span>
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          {language === 'en'
            ? "Pick your vessel, mix up to 3 artisanal scoops, and finish with cryogenic toppings!"
            : "మీకు నచ్చిన కోన్ లేదా బౌల్ ఎంచుకోండి, 3 రకాల ఫ్లేవర్లను కలపండి, పైన స్పెషల్ టాపింగ్స్ జోడించండి!"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: Selection Steps */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Vessel */}
          <div className="glass-card rounded-3xl p-6 border border-cyan-400/20">
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
              Choose Vessel
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {VESSELS.map((vessel) => {
                const isSelected = selectedVessel.id === vessel.id;
                return (
                  <button
                    key={vessel.id}
                    onClick={() => setSelectedVessel(vessel)}
                    className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                        : 'glass-pill hover:border-cyan-400/30'
                    }`}
                  >
                    <span className="text-3xl mb-2">{vessel.icon}</span>
                    <span className="text-xs font-bold text-white leading-tight">{vessel.name}</span>
                    <span className="text-[11px] text-cyan-300 mt-1 font-semibold">+₹{vessel.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scoops (Up to 3) */}
          <div className="glass-card rounded-3xl p-6 border border-cyan-400/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                Choose Scoops ({selectedScoops.length}/3)
              </h4>
              <span className="text-xs text-slate-400">Select 1 to 3 flavors</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SCOOP_OPTIONS.map((scoop) => {
                const isSelected = selectedScoops.some((s) => s.id === scoop.id);
                return (
                  <button
                    key={scoop.id}
                    onClick={() => toggleScoop(scoop)}
                    className={`p-3.5 rounded-2xl flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/25 border border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                        : 'glass-pill hover:border-cyan-400/30'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/40 shadow shrink-0"
                      style={{ backgroundColor: scoop.color }}
                    />
                    <div className="truncate flex-1">
                      <p className="text-xs font-bold text-white truncate">{scoop.name}</p>
                      <p className="text-[10px] text-cyan-300">₹{scoop.price}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Sub-Zero Toppings */}
          <div className="glass-card rounded-3xl p-6 border border-cyan-400/20">
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-xs font-black">3</span>
              Sub-Zero Cryo Toppings
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOPPING_OPTIONS.map((topping) => {
                const isSelected = selectedToppings.some((t) => t.id === topping.id);
                return (
                  <button
                    key={topping.id}
                    onClick={() => toggleTopping(topping)}
                    className={`p-3.5 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/25 border border-cyan-400'
                        : 'glass-pill hover:border-cyan-400/30'
                    }`}
                  >
                    <span className="text-xs font-semibold text-white">{topping.name}</span>
                    <span className="text-xs font-bold text-cyan-300">+₹{topping.price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Live Live Bowl Preview & Order Box */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-card rounded-3xl p-7 border border-cyan-400/30 shadow-[0_20px_50px_rgba(0,183,255,0.25)]">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div>
                <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider block">
                  Your Custom Creation
                </span>
                <h3 className="text-xl font-extrabold text-white">Sub-Zero Cryo-Bowl</h3>
              </div>
              <span className="text-2xl">{selectedVessel.icon}</span>
            </div>

            {/* Vessel summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Vessel:</span>
                <span className="font-semibold text-white">{selectedVessel.name} (₹{selectedVessel.price})</span>
              </div>

              {/* Scoops summary */}
              <div className="text-xs text-slate-300">
                <span className="block mb-1">Flavors ({selectedScoops.length}):</span>
                <div className="flex flex-wrap gap-1.5 pl-2">
                  {selectedScoops.map((s) => (
                    <span
                      key={s.id}
                      className="glass-pill px-2 py-0.5 rounded-md text-[11px] text-cyan-200 font-medium"
                    >
                      {s.name} (₹{s.price})
                    </span>
                  ))}
                </div>
              </div>

              {/* Toppings summary */}
              {selectedToppings.length > 0 && (
                <div className="text-xs text-slate-300">
                  <span className="block mb-1">Toppings:</span>
                  <div className="flex flex-wrap gap-1.5 pl-2">
                    {selectedToppings.map((t) => (
                      <span
                        key={t.id}
                        className="glass-pill px-2 py-0.5 rounded-md text-[11px] text-cyan-200 font-medium"
                      >
                        {t.name} (₹{t.price})
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Total Price & Add Button */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between mb-5">
              <div>
                <span className="text-[10px] text-cyan-200/80 uppercase tracking-wider block">
                  Custom Total
                </span>
                <span className="text-3xl font-black text-cyan-300">
                  ₹{totalPrice}
                </span>
              </div>
              <span className="text-xs text-emerald-400 font-semibold glass-pill px-2.5 py-1 rounded-full">
                ❄ Freshly Blast Frozen
              </span>
            </div>

            <button
              onClick={handleAddCustomBowl}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg ${
                added
                  ? 'bg-emerald-500 text-white shadow-emerald-500/50'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-[1.02]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Scoop Tray!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Cryo-Bowl to Tray</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
