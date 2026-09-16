import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, CheckCircle, Snowflake, ArrowRight } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function ScoopTrayDrawer() {
  const { isTrayOpen, setIsTrayOpen, trayItems, removeFromTray, clearTray, language } = useMascot();
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = trayItems.reduce((sum, item) => sum + item.price * (item.scoops || 1), 0);
  const deliveryFee = subtotal > 400 ? 0 : 40;
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      clearTray();
      setCheckedOut(false);
      setIsTrayOpen(false);
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isTrayOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsTrayOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          />

          {/* Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md glass-card bg-slate-950/90 border-l border-cyan-400/30 p-6 flex flex-col justify-between shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Your Sub-Zero Scoop Tray
                </h3>
              </div>
              <button
                onClick={() => setIsTrayOpen(false)}
                className="p-1.5 rounded-full glass-pill hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {checkedOut ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center border border-cyan-400/50 shadow-[0_0_30px_rgba(56,189,248,0.5)]"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h4 className="text-xl font-extrabold text-white">
                    Order Blast-Frozen & Dispatched!
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Kelvin and our cryo-courier are rushing your scoops in a vacuum-sealed dry-ice container at -20°C. Enjoy the absolute freshness!
                  </p>
                </div>
              ) : trayItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <Snowflake className="w-12 h-12 text-cyan-400/40 animate-spin [animation-duration:12s]" />
                  <p className="text-white font-semibold text-sm">Your Scoop Tray is empty!</p>
                  <p className="text-xs text-slate-400">
                    Explore our flavors and add delicious scoops frozen at 0 Kelvin.
                  </p>
                </div>
              ) : (
                trayItems.map((item) => (
                  <div
                    key={item.id}
                    className="glass-card rounded-2xl p-3.5 border border-white/10 flex items-center gap-3 relative group"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover border border-white/15 shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-white truncate">{item.name}</h5>
                      <p className="text-[11px] text-cyan-300 font-medium">{item.container}</p>
                      {item.toppings && (
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                          + {item.toppings}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-extrabold text-cyan-200">
                          ₹{item.price * (item.scoops || 1)}
                        </span>
                        {item.scoops > 1 && (
                          <span className="text-[10px] glass-pill px-1.5 py-0.2 rounded text-slate-300">
                            Qty: {item.scoops}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromTray(item.id)}
                      className="text-slate-400 hover:text-red-400 p-1.5 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {!checkedOut && trayItems.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 glass-pill p-2 rounded-xl text-[11px] text-cyan-300 border border-cyan-400/20">
                  <Snowflake className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Cold-Chain Guaranteed: Arrives at -20°C in dry ice pack</span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-white font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cryo Dry-Ice Delivery:</span>
                    <span className="text-white font-semibold">
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-white/10">
                    <span>Total Amount:</span>
                    <span className="text-cyan-300 text-base">₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Order Sub-Zero Scoops</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
