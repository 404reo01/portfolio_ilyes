import React from 'react';

const Contact = ({ onClose }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      
      {/* Fenêtre plus petite pour le contact */}
      <div className="relative w-full max-w-md bg-[#f2e8cf] border-2 border-black p-10 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)]">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-red-900 transition-colors"
        >
          [ Fermer ]
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif uppercase tracking-widest mb-2">Contact</h2>
          <div className="w-12 h-[2px] bg-red-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Email */}
          <div className="group cursor-pointer text-center">
            <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-bold block mb-2">Par voie postale</span>
            <a 
              href="mailto:ilyes.medjd@gmail.com"
              className="text-lg font-serif tracking-widest group-hover:text-red-900 transition-colors border-b border-transparent group-hover:border-red-900/30"
            >
              ilyes.medjd@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group cursor-pointer text-center">
            <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 font-bold block mb-2">Réseau professionnel</span>
            <a 
              href="https://www.linkedin.com/in/ilyés-medjdoub-5854352b0/"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-serif tracking-widest group-hover:text-red-900 transition-colors border-b border-transparent group-hover:border-red-900/30"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Petit sceau décoratif en bas */}
        <div className="mt-12 flex justify-center opacity-20">
          <div className="w-10 h-10 border-2 border-red-900 rotate-45 flex items-center justify-center">
            <span className="text-red-900 font-bold -rotate-45 text-[8px]">CONTACT</span>
          </div>
        </div>

        {/* Texture papier */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      </div>
    </div>
  );
};

export default Contact;