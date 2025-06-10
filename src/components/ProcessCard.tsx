import React from 'react';
import { ProcessItem } from '../types';

interface ProcessCardProps {
  processItem: ProcessItem;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ processItem, index }) => {
  return (
    <div
      role="article"
      aria-label={`Step ${index + 1}: ${processItem.title}`}
      className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:items-center py-8 md:py-12 border-b border-pink-200 group`}
    >
      <div className="md:w-1/3">
        <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-pink-300 transition-shadow duration-300">
          <img 
            src={processItem.imageUrl} 
            alt={processItem.title} 
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="space-y-4">
          <span className="text-sm uppercase text-pink-500 tracking-wide">
            Step {index + 1}
          </span>
          <h3 className="text-xl font-bold tracking-wide">
            {processItem.title}
          </h3>
          <p className="tracking-wide">
            {processItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;