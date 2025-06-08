import React from 'react';

const Header: React.FC<{ small?: boolean }> = ({ small }) => {
  return (
    <header className={small ? "py-4" : "py-10"}>
      <div className="relative">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 w-full h-full -z-20 animate-gradient"></div>
        {/* Pattern Overlay */}
        <div className="fixed inset-0 w-full h-full -z-10 bg-pattern pointer-events-none mix-blend-color-burn"></div>
        {/* Floating Shapes */}
        <div
          className="fixed rounded-full mix-blend-soft-light animate-float-slow"
          style={{ background: 'var(--color-1)', top: '100px', left: '5%', width: '200px', height: '200px' }}
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
        <div className="container mx-auto px-10 py-10">
          <nav className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow relative z-20 animate-float">
              <span
                className="font-bold text-6xl font-Tahoma"
                style={{ color: 'var(--color-4)' }}
              >
                Y
              </span>
              
            </div>
            {/* Remove or comment out the empty flex container if not needed */}
            {/* <div className="hidden md:flex space-x-8"></div> */}
          </nav>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
            <div className="max-w-10xl mx-auto text-center md:text-center z-20">
              <h1
                className="font-[Tahoma,sans-serif] text-[6rem] md:text-[8rem] font-bold mb-10 leading-[1.1] z-20"
                style={{ color: 'var(--color-4)' }}
              >
                YANEH
                <br />
                design
              </h1>
              <h2
                className="md:text-2xl font-raleway font-semibold mb-2 animate-fade-in leading-loose z-20"
                style={{ color: 'var(--color-1)' }}
              >
                design con flow
              </h2>
              <p
                className="text-2xl md:text-xl font-raleway font-light animate-fade-in z-20"
                style={{ color: 'var(--color-0)' }}
              >
                By <span style={{fontWeight: 600 }}>Janet Garcia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;