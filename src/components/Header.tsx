import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-pink-100 py-20">
      <div className="relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 w-full h-full -z-10 animate-gradient bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 bg-[length:200%_200%]"></div>

        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-70 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-60 animate-float"></div>

        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
              <span className="text-pink-800 font-bold text-xl font-sans">Y</span>
            </div>
            <div className="hidden md:flex space-x-8">
            </div>
          </nav>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="max-w-2xl mx-auto text-center md:text-center">
              <h1 className="font-sans text-6xl font-bold bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent">
                YANEH
              </h1>
              <h2 className="text-4xl md:text-7xl font-sans font-bold mb-8 text-pink-800 animate-fade-in leading-loose">
                Design
                <br />
                con Flow
              </h2>
              <p className="text-lg text-pink-600 mb-5 leading-snug">
                Hi, I'm Yaneh — graphic designer 
                <br />
                with a passion for transforming ideas 
                <br />
                into bold, meaningful visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;