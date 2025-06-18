import React from 'react';
import { ProcessItem } from '../../types';

interface ProcessCardProps {
  processItem: ProcessItem;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ processItem, index }) => {
  return (
    <div
      role="article"
      aria-label={`Step ${index + 1}: ${processItem.title}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={processItem.imageUrl} 
          alt={processItem.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Step Number */}
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-cream text-burgundy mb-4">
          Step {index + 1}
        </span>

        {/* Title */}
        <h3 className="text-xl font-display font-bold text-burgundy mb-3">
          {processItem.title}
        </h3>

        {/* Description */}
        <p className="text-crimson leading-relaxed">
          {processItem.description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;