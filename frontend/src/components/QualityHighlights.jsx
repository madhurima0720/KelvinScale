import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ShieldCheck, HeartHandshake, Sparkles, Award, Zap } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function QualityHighlights() {
  const { language } = useMascot();

  const features = [
    {
      icon: <Snowflake className="w-8 h-8 text-cyan-400" />,
      title: "Absolute Zero Quick-Freeze",
      teluguTitle: "అబ్సొల్యూట్ జీరో టెక్నాలజీ",
      desc: "Flash-frozen using cryogenic chambers at -273.15°C to prevent coarse ice crystallization.",
      teluguDesc: "అతి శీతల ఉష్ణోగ్రత వద్ద ఫ్రీజ్ చేయడం వల్ల ఐస్ స్పటికాలు ఏర్పడకుండా వెల్వెట్ లా మృదువుగా ఉంటుంది.",
      badge: "0 K Tech"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-300" />,
      title: "100% Real Farm Fruits",
      teluguTitle: "100% సహజమైన పండ్లు",
      desc: "Hand-picked organic Alphonso mangoes, Himalayan berries, and stone fruits. Zero synthetic syrups.",
      teluguDesc: "తోటల నుండి నేరుగా తెచ్చిన అసలైన పండ్ల గుజ్జుతో మాత్రమే తయారు చేస్తాము. ఎలాంటి రంగులు కలపము.",
      badge: "Pure Farm"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-cyan-400" />,
      title: "Hand-Churned Micro Batches",
      teluguTitle: "చేతితో చిన్న బ్యాచులలో తయారీ",
      desc: "Small artisanal batches churned fresh every dawn to preserve peak aromatics and velvety overrun.",
      teluguDesc: "ప్రతి రోజూ ఉదయాన్నే ఫ్రెష్‌గా చేతితో చిలికి తయారు చేస్తాము, అత్యుత్తమ నాణ్యత కోసం.",
      badge: "Fresh Daily"
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-300" />,
      title: "Zero Preservatives or Hydrogenated Fats",
      teluguTitle: "నో ప్రిజర్వేటివ్స్ & కెమికల్స్",
      desc: "Pure whole milk and dairy cream. Never diluted with palm oil, vegetable fat or artificial fillers.",
      teluguDesc: "స్వచ్ఛమైన పాలు, డెయిరీ క్రీమ్ మాత్రమే వాడతాము. ఆరోగ్యానికి ఎంతో మేలు.",
      badge: "100% Clean"
    }
  ];

  return (
    <section id="science" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Background Subtle Frost Glow */}
      <div className="absolute inset-0 bg-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>The Science of Cold</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Absolute Zero</span> Matters
        </h2>
        <p className="mt-4 text-slate-300 text-sm sm:text-base">
          {language === 'en'
            ? "When ice cream freezes slowly, water molecules clump into rough jagged crystals that scrape your tongue. Our Kelvin cryo-churning locks flavor molecules instantly at microscopic scales."
            : "సాధారణ ఐస్ క్రీమ్‌లలో నీటి స్పటికాలు గట్టిగా ఉంటాయి. కానీ మా అబ్సొల్యూట్ జీరో విధానంలో ప్రతి స్పూన్ వెన్నలా కరిగిపోతుంది."}
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card frost-shimmer rounded-3xl p-6 flex flex-col justify-between border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.2)] transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl glass-card border border-cyan-400/30 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <span className="glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                  {f.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">
                {f.title}
              </h3>
              <p className="text-xs font-semibold text-cyan-300/80 mb-2">
                {f.teluguTitle}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'te' ? f.teluguDesc : f.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyan-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tested at 0 Kelvin</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Microscopic Comparison Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 glass-card rounded-3xl p-6 sm:p-8 border border-cyan-400/30 shadow-[0_10px_30px_rgba(0,183,255,0.15)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
              Microscopic Comparison
            </span>
            <h4 className="text-2xl font-bold text-white">
              Standard Ice Cream vs Kelvin Scale Absolute Zero
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Standard commercial ice cream contains large ice crystals (45 to 65 microns) and 50% pumped air overrun. Kelvin Scale uses rapid sub-zero blast freezing to lock crystal size under 10 microns, delivering unmatched density, silkiness, and pure flavor intensity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-4 bg-slate-900/60 border border-red-400/20 text-center">
              <span className="text-xs text-red-300 font-semibold block mb-1">Standard Churn</span>
              <span className="text-2xl font-black text-white">55µm</span>
              <span className="text-[10px] text-slate-400 block mt-1">Coarse, gritty crystals</span>
            </div>
            <div className="rounded-2xl p-4 bg-slate-900/60 border border-cyan-400/40 text-center shadow-[0_0_20px_rgba(56,189,248,0.2)]">
              <span className="text-xs text-cyan-300 font-semibold block mb-1">Kelvin Scale</span>
              <span className="text-2xl font-black text-cyan-300">&lt; 8µm</span>
              <span className="text-[10px] text-cyan-200 block mt-1">Pure velvety silk</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
