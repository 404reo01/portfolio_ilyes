import React from 'react';
import { cvData } from '../../data/cvData';
import redTreeImg from '../../assets/red_tree.jpg';

const Parcours = ({ onClose }) => {
  // Données de formation extraites du CV
  const formations = [
    {
      year: "2023 - 2025",
      title: "BUT Informatique (BUT3)",
      school: "Université Sorbonne Paris Nord",
      details: "Spécialisation en développement d'applications."
    },
    {
      year: "2021 - 2023",
      title: "BTS SIO (SLAM)",
      school: "Lycée Olympe de Gouges",
      details: "Solutions Logicielles et Applications Métiers."
    },
    {
      year: "2021",
      title: "Baccalauréat STMG",
      school: "Lycée Albert Schweitzer",
      details: "Spécialités Mathématiques et NSI."
    }
  ];

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      
      <div className="relative w-full max-w-4xl h-[550px] bg-[#f2e8cf] border-2 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden flex">
        
        {/* PARTIE GAUCHE : L'IMAGE (L'Arbre Rouge) */}
        <div className="relative w-1/3 h-full border-r-2 border-black">
          <img 
            src={redTreeImg} 
            alt="Red Tree" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* PARTIE DROITE : LA TIMELINE */}
        <div className="relative w-2/3 h-full p-10 flex flex-col bg-[#f2e8cf] overflow-y-auto">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-900 transition-colors"
          >
            [ Fermer ]
          </button>

          <div className="border-l-4 border-black pl-6 mb-8">
            <h2 className="text-4xl font-serif uppercase tracking-tight text-black">
              Parcours
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-red-900 font-bold italic">
              L'apprentissage du sabre
            </p>
          </div>

          {/* Timeline des formations */}
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-2 before:h-full before:w-0.5 before:bg-black/10">
            {formations.map((f, index) => (
              <div key={index} className="relative pl-8">
                {/* Le point sur la ligne */}
                <div className="absolute left-0 mt-1.5 h-4 w-4 -translate-x-1/2 rotate-45 border border-black bg-[#f2e8cf] group-hover:bg-black transition-colors"></div>
                
                <span className="text-[10px] font-bold text-red-900 tracking-widest uppercase italic">
                  {f.year}
                </span>
                <h3 className="text-xl font-serif uppercase tracking-tighter mt-1">{f.title}</h3>
                <p className="text-sm font-bold opacity-70 italic">{f.school}</p>
                <p className="text-xs mt-2 opacity-60 leading-relaxed max-w-md">
                  {f.details}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 text-[10px] uppercase tracking-[0.4em] opacity-40 text-center italic">
            "Le savoir est une arme que l'on forge chaque jour"
          </div>
        </div>

        {/* Grain de papier global */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      </div>
    </div>
  );
};

export default Parcours;