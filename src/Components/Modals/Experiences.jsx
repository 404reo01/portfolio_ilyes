import React from 'react';
import { cvData } from '../../data/cvData';
import mountainImg from '../../assets/mountain.jpg';

const Experiences = ({ onClose }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      
      <div className="relative w-full max-w-5xl h-[600px] bg-[#f2e8cf] border-2 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden flex">
        
        {/* IMAGE : LA MONTAGNE */}
        <div className="relative w-1/3 h-full border-r-2 border-black">
          <img 
            src={mountainImg} 
            alt="Mountain" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* CONTENU : LES MISSIONS */}
        <div className="relative w-2/3 h-full p-10 flex flex-col bg-[#f2e8cf] overflow-y-auto">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-900 transition-colors"
          >
            [ Fermer ]
          </button>

          <div className="border-l-4 border-red-900 pl-6 mb-8">
            <h2 className="text-4xl font-serif uppercase tracking-tight">Expériences</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-red-900 font-bold italic">Les hauts faits d'armes</p>
          </div>

          <div className="space-y-10">
            {cvData.experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-baseline border-b border-black/10 pb-2 mb-4">
                  <h3 className="text-xl font-serif uppercase tracking-tighter font-bold">
                    {exp.role} <span className="text-sm font-normal normal-case opacity-50 px-2">@ {exp.company}</span>
                  </h3>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-60 italic whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="grid grid-cols-1 gap-3">
                  {exp.tasks.map((task, tIndex) => (
                    <li key={tIndex} className="text-sm flex items-start gap-3 italic opacity-80 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-red-900 rotate-45 shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-black/5 text-[10px] uppercase tracking-[0.3em] opacity-40 italic text-center">
            "Chaque sommet atteint révèle une nouvelle voie"
          </div>
        </div>

        {/* Texture papier */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      </div>
    </div>
  );
};

export default Experiences;