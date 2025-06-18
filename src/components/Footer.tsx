import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12 bg-cream bg-opacity-90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
              <span className="font-display font-bold text-xl text-burgundy">J</span>
            </div>
            <p className="text-rose font-bold text-center md:text-left">
              Yaneh Design<br />
              Providing bonito designs
            </p>
            <p className="text-burgundy mt-4 text-sm">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
            <p className="text-rose mt-2 text-sm">
              Made with 💖 y mucho flow
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end">
            {/* Social Links */}
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.instagram.com/yanehdesign"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-burgundy hover:text-crimson transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/janet-g-7a8245351"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-burgundy hover:text-crimson transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            {/* Contact Info */}
            <a 
              href="mailto:yaneh@yanehdesign.com"
              className="text-burgundy hover:text-crimson transition-colors mb-2"
            >
              yaneh@yanehdesign.com
            </a>
            <p className="text-burgundy">Portland, OR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
