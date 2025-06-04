import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-pink-900 text-pink-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
           <p className="text-zinc-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} yaneh.design. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-400 hover:text-primary-light transition">Instagram</a>
            <a href="#" className="text-zinc-400 hover:text-primary-light transition">Dribbble</a>
            <a href="#" className="text-zinc-400 hover:text-primary-light transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;