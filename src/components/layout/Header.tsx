import React from 'react';

interface FloatingCircle {
  top: string;
  left: string;
  color: string;
  animation: string;
  size?: string;
}

// Updated circles configuration with new color scheme
const circles: FloatingCircle[] = [
  { top: '-17px', left: '-4%', color: 'bg-primary/70 mix-blend-luminosity', animation: 'animate-float-slow', size: '250px' },
  { top: '-12px', left: '15%', color: 'bg-decorative/60 mix-blend-luminosity', animation: 'animate-float', size: '300px' },
  { top: '93px', left: '40%', color: 'bg-accent/50 mix-blend-luminosity', animation: 'animate-float', size: '250px' },
  { top: '-12px', left: '55%', color: 'bg-highlight/60 mix-blend-luminosity', animation: 'animate-float-fast', size: '300px' },
  { top: '-32px', left: '80%', color: 'bg-accent/50 mix-blend-luminosity', animation: 'animate-float', size: '250px' },
  { top: '193px', left: '1%', color: 'bg-highlight/60 mix-blend-luminosity', animation: 'animate-float-fast', size: '300px' },
  { top: '218px', left: '25%', color: 'bg-primary/50 mix-blend-luminosity', animation: 'animate-float-slow', size: '250px' },
  { top: '223px', left: '55%', color: 'bg-decorative/60 mix-blend-luminosity', animation: 'animate-float', size: '300px' },
  { top: '193px', left: '80%', color: 'bg-accent/50 mix-blend-luminosity', animation: 'animate-float-fast', size: '250px' },
  { top: '418px', left: '-5%', color: 'bg-highlight/60 mix-blend-luminosity', animation: 'animate-float-slow', size: '300px' },
  { top: '418px', left: '20%', color: 'bg-primary/50 mix-blend-luminosity', animation: 'animate-float', size: '250px' },
  { top: '343px', left: '40%', color: 'bg-decorative/60 mix-blend-luminosity', animation: 'animate-float-fast', size: '300px' },
  { top: '418px', left: '60%', color: 'bg-accent/50 mix-blend-luminosity', animation: 'animate-float-slow', size: '250px' },
  { top: '368px', left: '80%', color: 'bg-highlight/60 mix-blend-luminosity', animation: 'animate-float', size: '300px' }
];

const Logo: React.FC = () => (
  <div className="w-24 h-24 bg-cream rounded-full shadow-lg mb-12 flex items-center justify-center">
    <span className="font-display font-bold text-6xl text-primary">J</span>
  </div>
);

const Title: React.FC = () => (
  <>
    <h1 className="text-[3rem] md:text-[6rem] lg:text-[8rem] font-display font-black mb-8 text-primary leading-tight text-center">
      JANET<br />GARCIA
    </h1>
    <h2 className="text-2xl font-display font-medium text-accent">
      Design con Flow
    </h2>
  </>
);

const Header: React.FC = () => {
  return (
    <header className="relative w-full min-h-screen py-10 overflow-hidden bg-decorative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 w-full h-full -z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-decorative via-decorative-light to-decorative-dark bg-[length:400%_400%] animate-gradient" />
      </div>

      {/* Floating Circles */}
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${circle.color} ${circle.animation}`}
          style={{
            top: circle.top,
            left: circle.left,
            width: circle.size || '80px',
            height: circle.size || '80px'
          }}
        />
      ))}
      
      {/* Content Container */}
      <div className="container relative mx-auto px-4 pt-20">
        <div className="flex flex-col items-center">
          <Logo />
          <Title />
        </div>
      </div>
    </header>
  );
};

export default Header;