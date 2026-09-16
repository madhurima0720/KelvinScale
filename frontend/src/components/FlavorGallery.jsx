import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Snowflake, Filter } from 'lucide-react';
import FlavorCard from './FlavorCard';
import { useMascot } from '../context/MascotContext';

export const FLAVORS_DATA = [
  {
    id: 1,
    name: "Belgian Dark Chocolate Crunch",
    teluguName: "బెల్జియన్ డార్క్ చాక్లేట్ క్రంచ్",
    description: "Rich 72% single-origin Belgian dark chocolate folded with crisp cryogenic cacao nibs and fudge swirls.",
    teluguDescription: "రిచ్ అండ్ డార్క్ 72% బెల్జియన్ చాక్లేట్, క్రంచీ కోకో నిబ్స్‌తో కూడిన అద్భుతమైన రుచి.",
    lore: "Hand-churned with 72% pure Belgian cocoa! It has a silky sub-zero crunch you will never forget!",
    category: "Chocolate",
    badge: "Best Seller",
    price: 190,
    rating: 4.95,
    temperature: "-18°C",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=800"
  },
  {
    id: 2,
    name: "Caramel Pecan Praline",
    teluguName: "కారమెల్ పెకాన్ ప్రలైన్",
    description: "Slow-roasted Georgia pecans tossed in warm sea-salt butter caramel, rippled through sweet vanilla frost.",
    teluguDescription: "వేయించిన పెకాన్ నట్స్, తియ్యటి సాల్టెడ్ కారమెల్ డిప్ తో కూడిన రాయల్ ట్రీట్.",
    lore: "Crunchy Georgia pecans soaked in warm golden butter caramel! One of my personal favorites! 🐧",
    category: "Signature",
    badge: "Chef's Choice",
    price: 210,
    rating: 4.9,
    temperature: "-18°C",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800"
  },
  {
    id: 3,
    name: "Fresh Alphonso Mango Pulp",
    teluguName: "100% ప్యూర్ ఆల్ఫోన్సో మామిడి",
    description: "100% pure Ratnagiri Alphonso mango pulp churned with farm milk, without artificial essence or color.",
    teluguDescription: "రత్నగిరి అసలైన ఆల్ఫోన్సో మామిడి గుజ్జుతో తయారైన సహజమైన తియ్యదనం.",
    lore: "Made with 100% real Ratnagiri mango pulp! Fresh, tropical, and zero artificial flavors!",
    category: "Fruits",
    badge: "100% Real Fruit",
    price: 180,
    rating: 4.98,
    temperature: "-19°C",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800"
  },
  {
    id: 4,
    name: "Cryo Pistachio & Roasted Almond",
    teluguName: "క్రయో పిస్తా & బాదం డిలైట్",
    description: "Crushed Persian pistachios and flame-roasted almonds micro-frozen for intense nutty essence.",
    teluguDescription: "పర్షియన్ పిస్తాపప్పులు మరియు కాల్చిన బాదం నట్స్ తో నిండిన రిచ్ క్రయో డిలైట్.",
    lore: "Micro-frozen Persian pistachios! The nutty aroma is locked in at -273.15°C!",
    category: "Signature",
    badge: "Sub-Zero Special",
    price: 220,
    rating: 4.88,
    temperature: "-18°C",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800"
  },
  {
    id: 5,
    name: "Sub-Zero Wild Berry Blast",
    teluguName: "వైల్డ్ బెర్రీ బ్లాస్ట్",
    description: "Himalayan blueberries, tart raspberries and sun-kissed blackberries swirled into velvety sweet cream.",
    teluguDescription: "బ్లూబెర్రీ, రాస్ప్బెర్రీ మరియు బ్లాక్‌బెర్రీల సహజ కలయికతో సూపర్ రిఫ్రెషింగ్ టేస్ట్.",
    lore: "Packed with sub-zero Himalayan wild berries! Zingy, sweet, and bursting with antioxidants!",
    category: "Fruits",
    badge: "Tangy & Fresh",
    price: 195,
    rating: 4.92,
    temperature: "-19°C",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800"
  },
  {
    id: 6,
    name: "Kelvin Red Velvet Cake Scoop",
    teluguName: "రెడ్ వెల్వెట్ కేక్ స్కూప్",
    description: "Fluffy red velvet sponge crumbles folded into silky cream cheese ice cream with white chocolate frost.",
    teluguDescription: "మృదువైన రెడ్ వెల్వెట్ కేక్ ముక్కలు మరియు క్రీమ్ చీజ్ ఫ్రాస్టింగ్‌తో చేసిన స్పెషల్ కేక్ స్కూప్.",
    lore: "Real baked red velvet cake folded straight into cream cheese frost! Pure luxury in a spoon!",
    category: "Cakes",
    badge: "Artisan Cake",
    price: 230,
    rating: 4.96,
    temperature: "-18°C",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800"
  }
];

const CATEGORIES = ["All", "Signature", "Fruits", "Chocolate", "Cakes"];

export default function FlavorGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { language } = useMascot();

  const filteredFlavors = useMemo(() => {
    if (activeCategory === "All") return FLAVORS_DATA;
    return FLAVORS_DATA.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="flavors" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Snowflake className="w-3.5 h-3.5" />
          <span>Sub-Zero Artisanal Creations</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Hand-Churned <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Cryo Flavors</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300">
          {language === 'en'
            ? "Hover over any scoop to hear Kelvin's personal review and tasting notes!"
            : "ఏదైనా ఫ్లేవర్‌పై కర్సర్ ఉంచండి — కెల్విన్ దాని విశేషాలను మీకు స్వయంగా చెబుతాడు!"}
        </p>

        {/* Interactive Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                    : 'glass-card text-cyan-100 hover:text-white hover:border-cyan-400/40 hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'All Flavors (6)' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Frosted Flavor Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredFlavors.map((flavor) => (
            <FlavorCard key={flavor.id} {...flavor} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
