import React from 'react';
import { UserCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-100 to-pink-200 py-20">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold text-pink-800">Janet Garcia</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-pink-800 hover:text-pink-600 transition-colors">Projects</a>
            <a href="#process" className="text-pink-800 hover:text-pink-600 transition-colors">Process</a>
            <a href="#contact" className="text-pink-800 hover:text-pink-600 transition-colors">Contact</a>
          </div>
        </nav>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 rounded-full bg-pink-300 flex items-center justify-center overflow-hidden">
            <UserCircle size={120} className="text-pink-800" />
          </div>
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
              Creating meaningful designs that tell your story
            </h2>
            <p className="text-lg text-pink-700 mb-6 leading-relaxed">
              I'm a graphic designer based in San Francisco, specializing in brand identity 
              and digital design. With a keen eye for detail and a strategic mindset, 
              I help businesses communicate their unique value through compelling visual narratives.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-pink-300 text-pink-800 rounded-full text-sm font-medium">Brand Identity</span>
              <span className="px-4 py-2 bg-pink-300 text-pink-800 rounded-full text-sm font-medium">UI/UX Design</span>
              <span className="px-4 py-2 bg-pink-300 text-pink-800 rounded-full text-sm font-medium">Digital Design</span>
              <span className="px-4 py-2 bg-pink-300 text-pink-800 rounded-full text-sm font-medium">Typography</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;