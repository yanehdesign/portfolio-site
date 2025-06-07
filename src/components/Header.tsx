import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-pink-100 py-20">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <h1 className="text-3xl font-sans font-bold text-pink-800">yaneh.design</h1>
          <div className="hidden md:flex space-x-8">
          </div>
        </nav>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="max-w-2xl mx-auto text-center md:text-center">
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
    </header>
  );
};

export default Header;