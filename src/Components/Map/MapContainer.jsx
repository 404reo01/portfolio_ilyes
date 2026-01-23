import React, { useState } from 'react';
import { cvData } from '../../data/cvData';
import { motion, AnimatePresence } from 'framer-motion';
import Profile from '../Modals/Profile'; 
import Parcours from '../Modals/Parcours'; 
import Experiences from '../Modals/Experiences';
import Projets from '../Modals/Projets';
import Contact from '../Modals/Contact';
const MapContainer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const points = [
    { id: 'profil', label: 'Profil', top: '20%', left: '15%' },
    { id: 'parcours', label: 'Parcours', top: '45%', left: '30%' },
    { id: 'experiences', label: 'Expériences', top: '35%', left: '65%' },
    { id: 'projets', label: 'Projets', top: '75%', left: '80%' },
    { id: 'contact', label: 'Contact', top: '85%', left: '40%' },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-map">

      {/* 🌸 Sakura particles */}
      <div className="sakura-layer pointer-events-none absolute inset-0 z-10" />

      {/* 🌫️ Brume */}
      <div className="fog-layer pointer-events-none absolute inset-0 z-20" />

      {/* 🏯 HUD - disparaît quand une section est ouverte */}
      <AnimatePresence>
        {!activeSection && (
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="absolute top-12 left-12 border-l-[4px] border-black pl-6 z-40"
          >
            <h1 className="text-5xl font-serif tracking-[0.4em] uppercase">
              {cvData.profile.name}
            </h1>
            <p className="text-md tracking-[0.2em] uppercase mt-2 opacity-50 italic">
              Chroniques d'un Développeur
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🗺️ MAP ZONE */}
      <motion.div
        animate={{
          scale: activeSection ? 1.18 : 1,
        }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="relative w-[90vw] h-[85vh] border border-black/10 shadow-2xl bg-white/10 backdrop-blur-sm overflow-hidden"
      >

        {/* 🏔️ Décors fixes */}
        <img src="/decor/mountain1.png" className="absolute top-[5%] left-[20%] w-64 opacity-20 pointer-events-none" />
        <img src="/decor/mountain2.png" className="absolute bottom-[10%] right-[15%] w-72 opacity-25 pointer-events-none" />
        <img src="/decor/torii.png" className="absolute bottom-[25%] left-[40%] w-32 opacity-30 pointer-events-none" />
        <img src="/decor/rocks.png" className="absolute top-[60%] left-[10%] w-40 opacity-25 pointer-events-none" />
        <img src="/decor/birds.png" className="absolute top-[15%] right-[25%] w-24 opacity-20 pointer-events-none animate-float" />

        {/* ✨ Chemin animé */}
      {/* ✨ Chemin principal réaliste */}
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 800" preserveAspectRatio="none">

  {/* Ombre / base du chemin */}
  <motion.path
    d="
      M 150 160
      C 260 260, 300 340, 350 380
      S 520 420, 650 350
      S 820 300, 750 300
      S 900 450, 950 650
    "
    fill="none"
    stroke="#2b2b2b"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 3.5, ease: "easeInOut" }}
    opacity="0.15"
  />

  {/* Tracé principal animé */}
  <motion.path
    d="
      M 150 160
      C 260 260, 300 340, 350 380
      S 520 420, 650 350
      S 820 300, 750 300
      S 900 450, 950 650
    "
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray="10 8"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    opacity="0.35"
  />

  {/* Lueur subtile encre */}
  <motion.path
    d="
      M 150 160
      C 260 260, 300 340, 350 380
      S 520 420, 650 350
      S 820 300, 750 300
      S 900 450, 950 650
    "
    fill="none"
    stroke="#7a1c1c"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.1, 0.25, 0.1] }}
    transition={{ duration: 4, repeat: Infinity }}
  />

</svg>


        {/* 📍 Points interactifs */}
        {points.map((point) => (
          <motion.div 
            key={point.id}
            className="absolute group cursor-pointer z-50"
            style={{ top: point.top, left: point.left }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveSection(point.id)}
            animate={{
              scale: activeSection === point.id ? 1.6 : 1,
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Icône */}
            <div className="relative flex items-center justify-center">
              <div className={`w-8 h-8 rotate-45 shadow-xl transition-all duration-500 
                ${activeSection === point.id ? 'bg-red-900 animate-pulse' : 'bg-black group-hover:bg-red-900'}`}>
              </div>
              <div className={`absolute w-14 h-14 border rotate-45 transition-all duration-700 
                ${activeSection === point.id ? 'border-red-900 scale-125' : 'border-black/20 group-hover:border-red-900/50'}`}>
              </div>
            </div>

            {/* Label */}
            <div className="absolute top-1/2 left-14 -translate-y-1/2">
              <span className={`block text-lg font-serif uppercase tracking-[0.25em] transition-all duration-700 whitespace-nowrap
                ${activeSection === point.id ? 'opacity-100 text-red-900 translate-x-4' : 'opacity-40 group-hover:opacity-100 group-hover:translate-x-2'}`}>
                {point.label}
              </span>
            </div>
          </motion.div>
        ))}

        {/* 🪟 Modals */}
        <AnimatePresence>
          {activeSection === 'profil' && <Profile onClose={() => setActiveSection(null)} />}
          {activeSection === 'parcours' && <Parcours onClose={() => setActiveSection(null)} />}
          {activeSection === 'experiences' && <Experiences onClose={() => setActiveSection(null)} />}
          {activeSection === 'projets' && <Projets onClose={() => setActiveSection(null)} />}
          {activeSection === 'contact' && <Contact onClose={() => setActiveSection(null)} />}
        </AnimatePresence>

      </motion.div>

      {/* Coin estampe */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-900/10 rounded-tr-full pointer-events-none z-30"></div>
    </div>
  );
};

export default MapContainer;
