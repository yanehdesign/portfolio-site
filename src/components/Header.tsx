import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-pink-100 py-10">
      <div className="relative">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 w-full h-full -z-10 animate-gradient bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 bg-[length:400%_400%] bg-[position:0%_50%]"></div>

        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-pink-200 rounded-full opacity-70 animate-float-slow"></div>
        <div className="absolute center-55 right-20 w-36 h-36 bg-pink-300 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-300 rounded-full opacity-60 animate-float z-0"></div>
        <div className="container mx-auto px-10 py-10">
          <nav className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow relative z-10 animate-float">
              <span className="text-pink-800 font-bold text-6xl font-Tahoma">Y</span>
              
            </div>
            {/* Remove or comment out the empty flex container if not needed */}
            {/* <div className="hidden md:flex space-x-8"></div> */}
          </nav>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            <div className="max-w-10xl mx-auto text-center md:text-center">
              <h1 className="font-[Tahoma,sans-serif] text-[6rem] md:text-[8rem] font-bold parallax-element bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent mb-10 leading-[1.1]">
                YANEH
                <br />
                design
              </h1>
              <h2 className="text-9xl md:text-2xl font-raleway, sans font-regular mb- text-pink-800 animate-fade-in leading-loose">
                design con flow 
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;