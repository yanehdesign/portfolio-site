import React from 'react';
import { UserCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-pink-100 py-20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-pink-800">yaneh.design</h1>
          <div className="hidden md:flex space-x-8">
            {/* Temporarily comment out these links */}
            {/* <a href="#projects" className="text-pink-800 hover:text-pink-600 transition-colors">Projects</a> */}
            {/* <a href="#process" className="text-pink-800 hover:text-pink-600 transition-colors">Process</a> */}
            <a href="#contact" className="text-pink-800 hover:text-pink-600 transition-colors">Contact</a>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="max-w-2xl mx-auto text-center md:text-center">
            <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 text-pink-800 animate-fade-in">
              Design that
              <br />
              makes waves
            </h2>
            <p className="text-lg text-pink-600 mb-6 leading-relaxed">
              Hi, I'm Yaneh — graphic designer and student with a passion for transforming ideas into bold, 
              meaningful visuals.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;