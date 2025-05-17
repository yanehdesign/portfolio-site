import React from 'react';
import { processItems } from '../data/projectsData';
import ProcessCard from './ProcessCard';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-pink-800 mb-2">My Creative Process</h2>
        <p className="text-pink-700 mb-12 max-w-2xl">
          A glimpse into how I work—from initial concepts to final execution.
        </p>
        
        <div className="space-y-4">
          {processItems.map((item, index) => (
            <ProcessCard key={item.id} processItem={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;