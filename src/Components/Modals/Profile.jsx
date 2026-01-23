import React from 'react';
import { cvData } from '../../data/cvData';
import sunflowerImg from '../../assets/sunflower.jpg';

const Profile = ({ onClose }) => {
  return (
    /* On a enlevé le bg-black/60 pour ne garder que le flou léger en fond */
    <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      
      {/* Le cadre principal sans fond noir autour */}
      <div className="relative w-full max-w-4xl h-[550px] bg-[#f2e8cf] border-2 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden flex">
        
        {/* PARTIE GAUCHE : L'IMAGE */}
        <div className="relative w-1/3 h-full border-r-2 border-black">
          <img 
            src={sunflowerImg} 
            alt="Sunflower" 
            className="w-full h-full object-cover"
          />
          {/* Overlay grain beige subtil sur l'image uniquement */}
          <div className="absolute inset-0 bg-[#f2e8cf]/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* PARTIE DROITE : LE TEXTE */}
        <div className="relative w-2/3 h-full p-10 flex flex-col bg-[#f2e8cf]">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-900 transition-colors"
          >
            [ Fermer ]
          </button>

          <div className="border-l-4 border-red-900 pl-6 mb-6">
            <h2 className="text-4xl font-serif uppercase tracking-tight text-black">
              {cvData.profile.name}
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-red-900 font-bold italic">
              {cvData.profile.title}
            </p>
          </div>
          
          <p className="text-md leading-relaxed italic opacity-80 mb-8 border-b border-black/10 pb-6">
            "{cvData.profile.intro}"
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-red-900 underline underline-offset-4">Compétences</h3>
              <ul className="text-xs space-y-2 font-serif">
                {cvData.skills.languages.slice(0, 5).map((lang, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rotate-45"></span> {lang}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-red-900 underline underline-offset-4">Outils</h3>
              <ul className="text-xs space-y-2 font-serif">
                {cvData.skills.tools.slice(0, 5).map((tool, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rotate-45"></span> {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-auto pt-6 flex justify-between text-[10px] uppercase tracking-widest opacity-60 font-bold border-t border-black/5">
            <span>{cvData.profile.location}</span>
            <span>{cvData.profile.contact.email}</span>
          </div>
        </div>

        {/* Texture de grain très légère sur toute la carte */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      </div>
    </div>
  );
};

export default Profile;