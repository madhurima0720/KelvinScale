import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, Star, Snowflake, Sparkles } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function FlavorCard({
  id,
  name,
  teluguName,
  description,
  teluguDescription,
  lore,
  image,
  badge,
  category,
  price,
  rating = 4.9,
  temperature = '-18°C'
}) {
  const { setFlavorFocus, addToTray, language } = useMascot();
  const [added, setAdded] = React.useState(false);

  const flavorObj = {
    id,
    name,
    teluguName,
    description,
    teluguDescription,
    lore,
    image,
    price,
    container: 'Glacier Frosted Waffle Cone'
  };

  const handleMouseEnter = () => {
    setFlavorFocus(flavorObj);
  };

  const handleMouseLeave = () => {
    setFlavorFocus(null);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    addToTray(flavorObj);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card frost-shimmer rounded-3xl p-5 flex flex-col justify-between group relative border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(0,183,255,0.25)] transition-all duration-500"
    >
      {/* Top Media & Floating Badges */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-4 bg-slate-950/40">
        {/* Category & Badge */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <span className="glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-200 uppercase tracking-wider">
            {category}
          </span>
        </div>

        {badge && (
          <span className="absolute top-3 right-3 z-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-lg">
            {badge}
          </span>
        )}

        {/* Serving Temperature Pill */}
        <div className="absolute bottom-3 left-3 z-10 glass-pill px-2 py-0.5 rounded-md text-[10px] font-semibold text-cyan-300 flex items-center gap-1">
          <Snowflake className="w-3 h-3 text-cyan-300" />
          <span>{temperature}</span>
        </div>

        {/* Image with smooth zoom and glossy sheen */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Ambient Dark/Cyan Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
      </div>

      {/* Flavor Details */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-amber-300 text-xs font-semibold shrink-0 pt-1">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Telugu Subtitle */}
        <p className="text-cyan-400/90 text-xs font-semibold mb-2.5 tracking-wide">
          {teluguName}
        </p>

        {/* Description */}
        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
          {language === 'te' && teluguDescription ? teluguDescription : description}
        </p>
      </div>

      {/* Footer / Price & Add to Scoop Tray */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
        <div>
          <span className="text-[10px] text-cyan-200/70 uppercase block tracking-wider font-medium">
            Per Double Scoop
          </span>
          <span className="text-lg font-extrabold text-white tracking-tight">
            ₹{price}
          </span>
        </div>

        <button
          onClick={handleAdd}
          className={`px-4 py-2 rounded-full font-bold text-xs tracking-wider flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-md ${
            added
              ? 'bg-emerald-500 text-white shadow-emerald-500/40 scale-105'
              : 'bg-cyan-500/20 hover:bg-cyan-400 text-cyan-200 hover:text-slate-950 border border-cyan-400/40 hover:border-cyan-400 shadow-cyan-500/20'
          }`}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Add Scoop</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}