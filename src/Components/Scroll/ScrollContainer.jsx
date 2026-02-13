import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cvData } from '../../data/cvData';

const ScrollContainer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [currentSection, setCurrentSection] = useState(0);

  // Transformation pour les effets de parallax
  const mountain1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const mountain2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const birdsY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Sections du portfolio
  const sections = [
    { id: 'hero', title: 'Accueil', component: HeroSection },
    { id: 'profil', title: 'Profil', component: ProfileSection },
    { id: 'parcours', title: 'Parcours', component: ParcoursSection },
    { id: 'experiences', title: 'Expériences', component: ExperiencesSection },
    { id: 'projets', title: 'Projets', component: ProjectsSection },
    { id: 'contact', title: 'Contact', component: ContactSection },
  ];

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-auto bg-map">

      {/* 🌸 Sakura particles - densité variable selon scroll */}
      <motion.div
        className="sakura-layer pointer-events-none fixed inset-0 z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 1.0])
        }}
      />

      {/* 🏔️ Éléments décoratifs en parallax */}
      <motion.img
        src="/decor/mountain1.png"
        className="fixed top-[10%] left-[20%] w-64 opacity-20 pointer-events-none z-5"
        style={{ y: mountain1Y }}
      />
      <motion.img
        src="/decor/mountain2.png"
        className="fixed bottom-[20%] right-[15%] w-72 opacity-25 pointer-events-none z-5"
        style={{ y: mountain2Y }}
      />
      <motion.img
        src="/decor/birds.png"
        className="fixed top-[20%] right-[25%] w-24 opacity-20 pointer-events-none z-5"
        style={{ y: birdsY }}
      />

      {/* 🏯 Sceau Sticky */}
      <motion.div
        className="fixed bottom-6 left-6 z-50 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative">
          <div className="w-24 h-24 bg-red-900 rounded-full shadow-2xl border-3 border-red-800 flex items-center justify-center transform rotate-12">
            <div className="text-center text-white font-serif text-xs leading-tight">
              <div className="font-bold text-sm mb-1">{cvData.profile.name}</div>
              <div className="text-[10px] opacity-90">{cvData.profile.title}</div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-red-700/30 animate-pulse"></div>
        </div>
      </motion.div>

      {/* 🗺️ Carte du voyageur - chemin central qui traverse l'écran */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 1], [0, 0.7, 0.9])
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 8000" preserveAspectRatio="none">
          {/* Ombre du chemin pour effet de relief */}
          <motion.path
            d="
              M 600 1000
              Q 650 1200, 550 1400
              Q 450 1600, 650 1800
              Q 750 2000, 550 2200
              Q 400 2400, 700 2600
              Q 850 2800, 600 3000
              Q 450 3200, 750 3400
              Q 900 3600, 650 3800
              Q 500 4000, 800 4200
              Q 950 4400, 700 4600
              Q 550 4800, 850 5000
              Q 1000 5200, 750 5400
              Q 600 5600, 900 5800
              Q 1050 6000, 800 6200
              Q 650 6400, 950 6600
              Q 1100 6800, 850 7000
            "
            fill="none"
            stroke="#2b2b2b"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#shadow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 6, ease: "easeInOut" }}
          />

          {/* Chemin principal - trait de la carte */}
          <motion.path
            d="
              M 600 1000
              Q 650 1200, 550 1400
              Q 450 1600, 650 1800
              Q 750 2000, 550 2200
              Q 400 2400, 700 2600
              Q 850 2800, 600 3000
              Q 450 3200, 750 3400
              Q 900 3600, 650 3800
              Q 500 4000, 800 4200
              Q 950 4400, 700 4600
              Q 550 4800, 850 5000
              Q 1000 5200, 750 5400
              Q 600 5600, 900 5800
              Q 1050 6000, 800 6200
              Q 650 6400, 950 6600
              Q 1100 6800, 850 7000
            "
            fill="none"
            stroke="url(#mapPathGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="25 8"
            initial={{ pathLength: 0 }}
            style={{
              pathLength: useTransform(scrollYProgress, [0, 1], [0, 1])
            }}
            transition={{ duration: 0.1, ease: "linear" }}
          />

          {/* Points de repère sur la carte */}
          <motion.circle
            cx="600" cy="1000" r="8"
            fill="#8B0000"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.circle
            cx="550" cy="1400" r="6"
            fill="#8B4513"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.circle
            cx="650" cy="1800" r="8"
            fill="#8B0000"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.circle
            cx="550" cy="2200" r="6"
            fill="#8B4513"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
          <motion.circle
            cx="700" cy="2600" r="8"
            fill="#8B0000"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          />
          <motion.circle
            cx="600" cy="3000" r="6"
            fill="#8B4513"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 3 }}
          />
          <motion.circle
            cx="750" cy="3400" r="8"
            fill="#8B0000"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 3.5 }}
          />
          <motion.circle
            cx="650" cy="3800" r="6"
            fill="#8B4513"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 4 }}
          />
          <motion.circle
            cx="800" cy="4200" r="8"
            fill="#8B0000"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 4.5 }}
          />
          <motion.circle
            cx="700" cy="4600" r="6"
            fill="#8B4513"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 5 }}
          />
          <motion.circle
            cx="850" cy="5000" r="8"
            fill="#8B0000"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 5.5 }}
          />

          {/* Flèche finale pointant vers le contact */}
          <motion.polygon
            points="850,5020 860,5030 845,5040"
            fill="#8B0000"
            stroke="#2b2b2b"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 6 }}
          />

          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="4" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/>
            </filter>
            <linearGradient id="mapPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#654321', stopOpacity:0.9}} />
              <stop offset="30%" style={{stopColor:'#8B4513', stopOpacity:1}} />
              <stop offset="70%" style={{stopColor:'#A0522D', stopOpacity:0.9}} />
              <stop offset="100%" style={{stopColor:'#8B0000', stopOpacity:0.8}} />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 📜 Sections du portfolio */}
      <div className="relative z-30">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            className="min-h-screen flex items-center justify-center px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <section.component />
          </motion.section>
        ))}
      </div>

    </div>
  );
};

// Composants des sections
const HeroSection = () => (
  <motion.div
    className="text-center max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-7xl font-serif font-bold text-black mb-6 tracking-tight">
      {cvData.profile.name}
    </h1>
    <p className="text-2xl font-serif text-red-900 mb-8 tracking-wide">
      {cvData.profile.title}
    </p>
    <p className="text-xl text-black/80 max-w-2xl mx-auto leading-relaxed">
      {cvData.profile.intro}
    </p>
  </motion.div>
);

const ProfileSection = () => (
  <motion.div
    className="max-w-6xl mx-auto text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-serif font-bold text-black mb-12 tracking-tight">
      Profil
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h3 className="text-3xl font-serif text-red-900 mb-6">Compétences</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-black mb-3">Langages</h4>
            <div className="flex flex-wrap gap-3">
              {cvData.skills.languages.map((lang, index) => (
                <span key={index} className="px-4 py-2 bg-black/10 text-black rounded-full text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-3">Outils</h4>
            <div className="flex flex-wrap gap-3">
              {cvData.skills.tools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-red-900/10 text-red-900 rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-left space-y-6">
        <p className="text-lg text-black/80 leading-relaxed">
          "{cvData.profile.intro}"
        </p>
        <div className="space-y-3">
          <p className="text-black"><strong>Localisation:</strong> {cvData.profile.location}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ParcoursSection = () => {
  const education = [
    {
      degree: "BUT Informatique 3ᵉ année",
      school: "IUT de Villetaneuse - Sorbonne Paris Nord",
      period: "2023 - 2025",
      description: "Spécialisation développement web et logiciel"
    },
    {
      degree: "BTS Services Informatiques aux Organisations",
      school: "Lycée Louise Michel",
      period: "2021 - 2023",
      description: "solutions logicielles et applications métiers"
    },
    {
      degree: "Baccalauréat Sciences et Technologies du Management et de la Gestion",
      school: "Lycée Alfred Nobel",
      period: "2020 - 2021",
      description: "Option Management des organisations"
    }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-6xl font-serif font-bold text-black mb-16 tracking-tight text-center">
        Parcours
      </h2>

      {/* Timeline du parcours scolaire */}
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-900 h-full"></div>

        <div className="space-y-16">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-900 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Contenu */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-black/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-red-900 mb-2">{item.degree}</h3>
                  <h4 className="text-lg font-semibold text-black mb-2">{item.school}</h4>
                  <p className="text-sm text-red-900/80 font-medium mb-3">{item.period}</p>
                  <p className="text-black/80">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperiencesSection = () => (
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-serif font-bold text-black mb-16 tracking-tight text-center">
      Expériences
    </h2>
    <div className="space-y-12">
      {cvData.experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-black/10"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold text-red-900 mb-2">{exp.company}</h3>
          <h4 className="text-xl font-semibold text-black mb-4">{exp.role}</h4>
          <p className="text-sm text-black/60 mb-4">{exp.period}</p>
          <ul className="space-y-2">
            {exp.tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="flex items-center text-black/80">
                <span className="w-2 h-2 bg-red-900 rounded-full mr-3"></span>
                {task}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <motion.div
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-serif font-bold text-black mb-16 tracking-tight text-center">
      Projets
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {cvData.projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-black/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">{project.name}</h3>
          <p className="text-black/80 mb-4">{project.desc}</p>
          <a
            href={project.link}
            className="inline-flex items-center text-black hover:text-red-900 transition-colors font-medium"
          >
            Voir le projet →
          </a>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ContactSection = () => (
  <motion.div
    className="max-w-4xl mx-auto text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-serif font-bold text-black mb-12 tracking-tight">
      Contact
    </h2>
    <div className="space-y-8">
      <p className="text-xl text-black/80 leading-relaxed">
        Intéressé par une collaboration ? N'hésitez pas à me contacter.
      </p>
      <div className="space-y-6">
        <motion.a
          href={`mailto:${cvData.profile.contact.email}`}
          className="block text-black hover:text-red-900 transition-colors text-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>Email:</strong> {cvData.profile.contact.email}
        </motion.a>
        <motion.a
          href={cvData.profile.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-black hover:text-red-900 transition-colors text-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>GitHub:</strong> Voir mon profil →
        </motion.a>
        <motion.a
          href={cvData.profile.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-black hover:text-red-900 transition-colors text-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>LinkedIn:</strong> Connectons-nous →
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default ScrollContainer;