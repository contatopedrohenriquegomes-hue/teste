
import React from 'react';
import { FlowItem } from '../types';

interface Props {
  item: FlowItem;
}

const FlowItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="relative z-10 w-full max-w-[140px] md:max-w-[180px] aspect-[3/4] rounded-lg border-2 border-yellow-500 bg-zinc-900 overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.3)]">
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 px-2 bg-gradient-to-t from-black via-transparent to-transparent">
        <p className="text-white font-black text-xs md:text-sm text-center leading-tight tracking-tighter uppercase">
          {item.title}
        </p>
        <span className="text-[8px] text-zinc-500">ADS</span>
      </div>
    </div>
  );
};

export default FlowItemCard;
