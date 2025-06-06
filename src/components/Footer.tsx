import React from 'react';
import ProcessSteps from './ProcessSteps';
import { processItems } from '../data/projectsData';

export type ProcessItem = {
  id: number;
  projectId: number;
  title: string;
  description: string;
};

const Footer: React.FC = () => {
  const pueblaSteps = processItems.filter(item => item.projectId === 2);

  return (
    <footer className="py-8 bg-pink-900 text-pink-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} yaneh.design. All rights reserved.
          </p>
          <ProcessSteps steps={pueblaSteps} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;