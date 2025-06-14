import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="intro" className="w-full py-10 overflow-hidden" role="banner">
      <div className="relative">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 w-full h-full -z-20 animate-gradient"></div>
        {/* Pattern Overlay */}
        <div className="fixed inset-0 w-full h-full -z-10 bg-pattern pointer-events-none mix-blend-color-burn"></div>
        {/* Floating Shapes */}
        <div
          className="fixed rounded-full mix-blend-soft-light animate-float-slow"
          style={{
            background: 'var(--color-1)',
            top: '100px',
            left: '5%',
            width: '120px', // smaller for mobile
            height: '120px'
          }}
        ></div>
        <div
          className="fixed rounded-full mix-blend-soft-light animate-float -z-10"
          style={{ background: 'var(--color-2)', top: '25px', left: '30%',width: '200px', height: '200px' }}
        ></div>
        <div
          className="fixed rounded-full mix-blend-soft-light animate-float z-10"
          style={{ background: 'var(--color-3)', top: '275px', left: '50%',width: '200px', height: '200px' }}
        ></div>
        <div
          className="fixed rounded-full mix-blend-soft-light animate-float-fast -z-10"
          style={{ background: 'var(--color-4)' , top: '250px', left: '70%',width: '200px', height: '200px'}}
        ></div>
        <div 
          className="fixed rounded-full mix-blend-soft-light animate-float-slow -z-10"
          style={{ background: 'var(--color-5)', top: '300px', left: '20%',width: '200px', height: '200px'}}
        ></div>
        <div 
          className="fixed rounded-full mix-blend-soft-light animate-float -z-10"
          style={{ background: 'var(--color-1)' , top: '350px', left: '80%',width: '200px', height: '200px'}}
        ></div>
        <div 
          className="fixed rounded-full mix-blend-soft-light animate-float-fast -z-10"
          style={{ background: 'var(--color-2)', top: '150px', left: '40%',width: '200px', height: '200px'}}
        ></div>
        <div 
          className="fixed rounded-full mix-blend-soft-light animate-float-slow -z-10"
          style={{ background: 'var(--color-3)', top: '400px', left: '10%',width: '200px', height: '200px'}}
        ></div>
        {/* ...add as many as you like, changing positions, sizes, and colors... */}
        <div className="container mx-auto px-4 sm:px-8 py-10">
          <nav className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow relative z-20 animate-float">
              <span
                className="font-bold text-6xl"
                style={{ color: 'var(--color-4)', fontFamily: 'Tahoma, sans-serif' }}
              >
                J
              </span>
            </div>
          </nav>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            <div className="max-w-10xl mx-auto text-center md:text-center z-20">
              <h1
                className="text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-bold mb-10 leading-[1.1] z-20"
                style={{ color: 'var(--color-4)', fontFamily: 'Tahoma, sans-serif' }}
              >
                JANET
                <br />
                GARCIA
              </h1>
              <h2
                className="md:text-2xl font-raleway font-semibold mb-2 animate-fade-in leading-loose z-20"
                style={{ color: 'var(--color-1)' }}
              >
                design con flow
              </h2>
              <p
                className="text-2xl md:text-xl font-raleway font-light animate-fade-in z-20"
                style={{ color: 'var(--color-4)' }}
              >
                {/* Optional subtitle or description here */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;