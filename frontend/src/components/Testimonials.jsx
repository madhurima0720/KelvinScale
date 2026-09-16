import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';
import { useMascot } from '../context/MascotContext';

export default function Testimonials() {
  const { language } = useMascot();

  const reviews = [
    {
      name: "Sowmya Rao",
      role: "Food Connoisseur & Pastry Chef",
      review: "The Belgian Dark Chocolate is on an entirely different level. The absence of ice crystals makes it taste like a silk ganache that turns into cold velvet. Kelvin Scale is unmatched.",
      teluguReview: "బెల్జియన్ డార్క్ చాక్లేట్ చాలా అద్భుతంగా ఉంది. సాధారణ ఐస్ క్రీమ్‌ల కంటే ఎంతో మృదువుగా, రిచ్‌గా ఉంది!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
      name: "Vikram Aditya",
      role: "Dessert Blogger",
      review: "When they say 100% real fruit, they mean it. The Alphonso Mango scoop tasted like I bit straight into a sun-ripened chilled mango from Ratnagiri.",
      teluguReview: "ఆల్ఫోన్సో మామిడి ఫ్లేవర్ తింటుంటే నిజమైన మామిడి పండు తింటున్నట్లే అనిపించింది. కెమికల్స్ లేని స్వచ్ఛమైన రుచి.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      name: "Ananya Sharma",
      role: "Culinary Enthusiast",
      review: "Caramel Pecan with the sub-zero waffle cone is pure bliss. And the penguin mascot on the website had me smiling the entire order process!",
      teluguReview: "కారమెల్ పెకాన్ స్కూప్ మరియు వాఫెల్ కోన్ కాంబినేషన్ సూపర్! వెబ్‌సైట్‌లో కెల్విన్ పెంగ్విన్ గైడ్ చాలా సరదాగా ఉంది.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
          <span>Scoop Devotees</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Loved Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">All Degrees</span>
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          {language === 'en'
            ? "Here is what true ice cream purists say after experiencing their first sub-zero scoop."
            : "మా ఐస్ క్రీమ్ రుచి చూసిన కస్టమర్లు ఏమంటున్నారో చూడండి."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-cyan-400/20 hover:border-cyan-400/40 shadow-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-300">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-cyan-400/30" />
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                "{language === 'te' ? rev.teluguReview : rev.review}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/50"
              />
              <div>
                <h5 className="text-xs font-bold text-white">{rev.name}</h5>
                <p className="text-[11px] text-cyan-300/80">{rev.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
