
import React from 'react';
import { ModuleItem } from '../types';

interface Props {
  module: ModuleItem;
}

const ModuleCard: React.FC<Props> = ({ module }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg border border-white/10 bg-zinc-900 transition-all hover:scale-105 hover:border-yellow-500/50">
      <img 
        src={module.imageUrl} 
        alt={module.title} 
        className="w-full aspect-[3/4] object-cover opacity-60 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 bg-gradient-to-t from-black via-black/20 to-transparent">
        <h3 className="text-yellow-400 font-black text-xl tracking-tighter text-center leading-none">
          {module.title}
        </h3>
        <p className="text-white font-black text-lg tracking-tighter text-center leading-none">
          {module.subtitle}
        </p>
        <span className="text-[10px] text-zinc-500 mt-1">ADS</span>
      </div>
    </div>
  );
};

export default ModuleCard;
