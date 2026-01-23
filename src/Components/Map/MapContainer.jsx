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

      {/*  HUD - disparaît quand une section est ouverte */}
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
            <p className="text-md tracking-[0.2em] uppercase mt-2 text-red-900 font-medium">
              Chroniques d'un Développeur
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🗺️ MAP ZONE */}
      <motion.div
        animate={{
          scale: activeSection ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-[90vw] h-[85vh] border border-black/10 shadow-2xl bg-white/10 backdrop-blur-sm overflow-hidden"
      >

        {/* 🏔️ Décors organisés le long du sentier */}
        <img src="/decor/mountain1.png" className="absolute top-[8%] left-[25%] w-56 opacity-25 pointer-events-none" />
        <img src="/decor/mountain2.png" className="absolute bottom-[15%] right-[20%] w-64 opacity-30 pointer-events-none" />
        <img src="/decor/torii.png" className="absolute bottom-[35%] left-[45%] w-28 opacity-35 pointer-events-none" />
        <img src="/decor/rocks.png" className="absolute top-[45%] left-[15%] w-36 opacity-30 pointer-events-none" />
        <img src="/decor/birds.png" className="absolute top-[25%] right-[30%] w-20 opacity-25 pointer-events-none" />

        {/* ⚔️ Sentier du Samouraï */}
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 800" preserveAspectRatio="none">

  {/* 🏞️ Ombre montagneuse du sentier */}
  <defs>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="3" dy="3" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
    </filter>
    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor:'#8B4513', stopOpacity:0.8}} />
      <stop offset="50%" style={{stopColor:'#2F1B14', stopOpacity:0.9}} />
      <stop offset="100%" style={{stopColor:'#8B0000', stopOpacity:0.7}} />
    </linearGradient>
  </defs>

  {/* 🌫️ Brume du sentier */}
  <motion.path
    d="
      M 150 160
      C 250 240, 320 320, 380 360
      S 480 400, 580 380
      S 720 360, 800 400
      S 850 480, 900 550
      S 920 600, 950 650
    "
    fill="none"
    stroke="#2b2b2b"
    strokeWidth="8"
    strokeLinecap="round"
    strokeLinejoin="round"
    filter="url(#shadow)"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.2 }}
    transition={{ duration: 4, ease: "easeInOut" }}
  />

  {/* 🗡️ Tracé principal - lame du katana */}
  <motion.path
    d="
      M 150 160
      C 250 240, 320 320, 380 360
      S 480 400, 580 380
      S 720 360, 800 400
      S 850 480, 900 550
      S 920 600, 950 650
    "
    fill="none"
    stroke="url(#pathGradient)"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray="15 5"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 5, ease: "easeInOut" }}
    opacity="0.8"
  />

  {/* ⚔️ Pointe de flèche vers Contact */}
  <motion.polygon
    points="950,645 960,650 955,660"
    fill="#8B0000"
    stroke="#2b2b2b"
    strokeWidth="1"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 5 }}
  />

  {/* 🏯 Marques de pas stylisées */}
  <motion.circle
    cx="200" cy="200" r="3"
    fill="#8B4513"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    transition={{ duration: 0.5, delay: 1 }}
  />
  <motion.circle
    cx="350" cy="350" r="3"
    fill="#8B4513"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    transition={{ duration: 0.5, delay: 2 }}
  />
  <motion.circle
    cx="550" cy="400" r="3"
    fill="#8B4513"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    transition={{ duration: 0.5, delay: 3 }}
  />
  <motion.circle
    cx="750" cy="450" r="3"
    fill="#8B4513"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    transition={{ duration: 0.5, delay: 4 }}
  />

</svg>


        {/* 📍 Points interactifs */}
        {points.map((point) => (
          <motion.div
            key={point.id}
            className="absolute group cursor-pointer z-50"
            style={{ top: point.top, left: point.left }}
            whileHover={{ scale: 1.15 }}
            onClick={() => setActiveSection(point.id)}
            animate={{
              scale: activeSection === point.id ? 1.3 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Icône */}
            <div className="relative flex items-center justify-center">
              <div className={`w-8 h-8 rotate-45 shadow-xl transition-all duration-300
                ${activeSection === point.id ? 'bg-red-900 animate-pulse' : 'bg-black group-hover:bg-red-900'}`}>
              </div>
              <div className={`absolute w-14 h-14 border rotate-45 transition-all duration-300
                ${activeSection === point.id ? 'border-red-900 scale-110' : 'border-black/20 group-hover:border-red-900/50'}`}>
              </div>
            </div>

            {/* Label */}
            <div className="absolute top-1/2 left-14 -translate-y-1/2">
              <span className={`block text-lg font-serif uppercase tracking-[0.25em] transition-all duration-300 whitespace-nowrap
                ${activeSection === point.id ? 'text-red-900 font-bold translate-x-2' : 'text-black/70 group-hover:text-red-900 group-hover:translate-x-2'}`}>
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

      {/* 🏯 Sceau Rouge (Hanko) - Infos principales visibles dès l'accueil */}
      <div className="absolute bottom-6 left-6 z-40 pointer-events-none">
        <div className="relative">
          {/* Sceau principal */}
          <div className="w-32 h-32 bg-red-900 rounded-full shadow-2xl border-4 border-red-800 flex items-center justify-center transform rotate-12">
            <div className="text-center text-white font-serif text-xs leading-tight">
              <div className="font-bold text-sm mb-1">{cvData.profile.name}</div>
              <div className="text-[10px] opacity-90">{cvData.profile.title}</div>
            </div>
          </div>

          {/* Ruban avec technos */}
          <div className="absolute -top-2 -right-2 bg-black text-white px-3 py-1 rounded shadow-lg transform rotate-6">
            <div className="text-[9px] font-bold uppercase tracking-wider">TECH</div>
            <div className="text-[8px] mt-1 space-y-0.5">
              {cvData.skills.languages.slice(0, 3).map((lang, index) => (
                <div key={index} className="font-serif">{lang}</div>
              ))}
            </div>
          </div>

          {/* Cachet d'encre stylisé */}
          <div className="absolute inset-0 rounded-full border-2 border-red-700/50 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
