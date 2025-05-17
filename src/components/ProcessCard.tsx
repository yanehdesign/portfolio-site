import React from 'react';
import { ProcessItem } from '../types';

interface ProcessCardProps {
  processItem: ProcessItem;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ processItem, index }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:items-center py-8 md:py-12 border-b border-pink-200 group">
      <div className="md:w-1/3">
        <div className="overflow-hidden rounded-lg">
          <img 
            src={processItem.imageUrl} 
            alt={processItem.title} 
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="flex items-center mb-3">
          <span className="w-8 h-8 rounded-full bg-pink-300 text-pink-800 flex items-center justify-center font-bold mr-3">
            {index + 1}
          </span>
          <h3 className="text-xl font-bold text-pink-800">{processItem.title}</h3>
        </div>
        <p className="text-pink-700 leading-relaxed">{processItem.description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;