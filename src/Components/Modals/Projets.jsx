import React from 'react';
import { cvData } from '../../data/cvData';
import templeImg from '../../assets/temple.jpg';

const Projets = ({ onClose }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      
      <div className="relative w-full max-w-5xl h-[600px] bg-[#f2e8cf] border-2 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden flex">
        
        {/* IMAGE : LE TEMPLE */}
        <div className="relative w-1/3 h-full border-r-2 border-black">
          <img 
            src={templeImg} 
            alt="Temple" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/5 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* CONTENU : LES PROJETS */}
        <div className="relative w-2/3 h-full p-10 flex flex-col bg-[#f2e8cf] overflow-y-auto">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-900 transition-colors"
          >
            [ Fermer ]
          </button>

          <div className="border-l-4 border-black pl-6 mb-8">
            <h2 className="text-4xl font-serif uppercase tracking-tight">Projets</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-red-900 font-bold italic">Tableaux de chasse & Artefacts</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {cvData.projects.map((project, index) => (
              <div 
                key={index} 
                className="group border border-black/10 p-6 transition-all duration-500 hover:bg-[#e9d9b4] hover:border-black/30 hover:shadow-inner relative overflow-hidden"
              >
                {/* Petit accent orange vif sur le côté au hover */}
                <div className="absolute left-0 top-0 h-full w-0 bg-red-900 group-hover:w-1 transition-all duration-300"></div>

                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-serif uppercase tracking-tighter group-hover:text-black transition-colors">
                    {project.name}
                  </h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] border border-black px-3 py-1.5 uppercase tracking-widest hover:bg-black hover:text-[#f2e8cf] transition-all bg-white/30"
                  >
                    Examiner
                  </a>
                </div>
                
                <p className="text-sm italic opacity-70 mb-4 leading-relaxed group-hover:opacity-100 transition-opacity">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                   <span className="text-[9px] uppercase font-bold bg-black/5 px-2 py-0.5 border border-black/10 group-hover:border-orange-900/20 group-hover:bg-orange-900/5 transition-colors">
                     Architecture Logicielle
                   </span>
                   <span className="text-[9px] uppercase font-bold bg-black/5 px-2 py-0.5 border border-black/10 group-hover:border-orange-900/20 group-hover:bg-orange-900/5 transition-colors">
                     Open Source
                   </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 text-[10px] uppercase tracking-[0.4em] opacity-40 italic text-center">
            "L'œuvre survit à l'artisan"
          </div>
        </div>

        {/* Texture papier globale */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      </div>
    </div>
  );
};

export default Projets;