import React, { createContext, useContext, useState, useCallback } from 'react';

const MascotContext = createContext(null);

const DEFAULT_MESSAGES = {
  en: {
    message: "Hey there! I'm Kelvin 🐧",
    subText: "Churned at Absolute Zero (-273.15°C) for microscopic ice crystals and ultra-velvety richness! Hover on any flavor to explore.",
    mood: "chill"
  },
  te: {
    message: "హాయ్! నేను కెల్విన్ 🐧",
    subText: "మా ఐస్ క్రీములు Absolute Zero Degrees వద్ద frozen, 100% అసలైన పండ్లతో తయారవుతాయి. మీకు ఏ ఫ్లేవర్ ఇష్టం?",
    mood: "chill"
  }
};

export const FUN_FACTS = [
  {
    en: "Fun Fact: At Absolute Zero (0 Kelvin / -273.15°C), all atomic motion ceases! Our cryo-churning locks flavor at the molecular level.",
    te: "తెలుసా? Absolute Zero వద్ద అణువులు కూడా స్తంభించిపోతాయి! అందుకే మా ఐస్ క్రీమ్ రుచి ఎప్పటికీ తాజాగా ఉంటుంది."
  },
  {
    en: "Zero Ice Crystals: Rapid cryo-freezing prevents large ice crystals from forming, making each scoop 300% smoother than regular store-bought ice cream!",
    te: "రహస్యం: వేగంగా కూల్ చేయడం వల్ల ఐస్ గడ్డలు కట్టవు. ప్రతి స్పూన్ పట్టులా కరిగిపోతుంది!"
  },
  {
    en: "Pure Organic Farm Milk & Real Pulp: We use zero synthetic powders or hydrogenated vegetable fats!",
    te: "100% సహజత్వం: ఎటువంటి కెమికల్స్ లేకుండా స్వచ్ఛమైన పాలు మరియు సహజ పండ్లతో తయారుచేస్తాము."
  }
];

export function MascotProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mascotMessage, setMascotMessage] = useState(DEFAULT_MESSAGES.en.message);
  const [mascotSubText, setMascotSubText] = useState(DEFAULT_MESSAGES.en.subText);
  const [mascotMood, setMascotMood] = useState('chill');
  const [activeFlavor, setActiveFlavor] = useState(null);
  const [spinTrigger, setSpinTrigger] = useState(0);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [trayItems, setTrayItems] = useState([
    {
      id: 'tray-init-1',
      name: 'Belgian Dark Chocolate Crunch',
      teluguName: 'బెల్జియన్ డార్క్ చాక్లేట్',
      price: 180,
      scoops: 1,
      container: 'Glacier Frosted Waffle Cone',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=600'
    }
  ]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'te' : 'en';
      setMascotMessage(DEFAULT_MESSAGES[next].message);
      setMascotSubText(DEFAULT_MESSAGES[next].subText);
      return next;
    });
  }, []);

  const triggerSpin = useCallback(() => {
    setSpinTrigger((prev) => prev + 1);
    const randomFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
    setMascotMessage(language === 'en' ? "Whoosh! Zero-G Spin! ❄️" : "ఓహో! జీరో-గ్రావిటీ ట్రిక్! ❄️");
    setMascotSubText(randomFact[language]);
    setMascotMood('excited');
  }, [language]);

  const setFlavorFocus = useCallback((flavor) => {
    if (!flavor) {
      setActiveFlavor(null);
      setMascotMessage(DEFAULT_MESSAGES[language].message);
      setMascotSubText(DEFAULT_MESSAGES[language].subText);
      setMascotMood('chill');
      return;
    }

    setActiveFlavor(flavor);
    setMascotMood('excited');
    if (language === 'te') {
      setMascotMessage(`${flavor.teluguName}! 🍨`);
      setMascotSubText(flavor.teluguDescription || flavor.description);
    } else {
      setMascotMessage(`${flavor.name}! 🍨`);
      setMascotSubText(flavor.lore || flavor.description);
    }
  }, [language]);

  const addToTray = useCallback((item) => {
    setTrayItems((prev) => {
      const existing = prev.find((i) => i.name === item.name && i.container === item.container);
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, scoops: i.scoops + (item.scoops || 1) } : i
        );
      }
      return [...prev, { ...item, id: `tray-${Date.now()}` }];
    });

    setMascotMessage(language === 'en' ? "Delicious pick added to your Sub-Zero Tray! ❄️" : "మీ సబ్-జీరో ట్రేకి ఫ్లేవర్ యాడ్ అయింది! ❄️");
    setMascotSubText(language === 'en' ? `Enjoying ${item.name} at optimal -18°C serving cold.` : `${item.name} అత్యుత్తమ టేస్ట్‌తో సర్వ్ అవుతుంది.`);
    setMascotMood('sparkle');
  }, [language]);

  const removeFromTray = useCallback((id) => {
    setTrayItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearTray = useCallback(() => {
    setTrayItems([]);
  }, []);

  return (
    <MascotContext.Provider
      value={{
        language,
        toggleLanguage,
        mascotMessage,
        mascotSubText,
        mascotMood,
        activeFlavor,
        setFlavorFocus,
        spinTrigger,
        triggerSpin,
        isTrayOpen,
        setIsTrayOpen,
        trayItems,
        addToTray,
        removeFromTray,
        clearTray
      }}
    >
      {children}
    </MascotContext.Provider>
  );
}

export function useMascot() {
  const context = useContext(MascotContext);
  if (!context) {
    throw new Error('useMascot must be used within a MascotProvider');
  }
  return context;
}
