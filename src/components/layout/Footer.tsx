import React, { JSX } from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialLink {
  id: string;
  icon: JSX.Element;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    icon: <FaInstagram size={24} />,
    url: 'https://www.instagram.com/yanehdesign',
    label: 'Instagram'
  },
  {
    id: 'linkedin',
    icon: <FaLinkedin size={24} />,
    url: 'https://www.linkedin.com/in/janet-g-7a8245351',
    label: 'LinkedIn'
  }
];

const Logo = () => (
  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
    <span className="text-primary font-bold text-lg">J</span>
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-4 mb-4">
    {socialLinks.map(({ id, icon, url, label }) => (
      <a
        key={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-accent hover:text-accent-hover transition-colors"
      >
        {icon}
      </a>
    ))}
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Column - Brand Info */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Logo />
            <p className="text-decorative font-bold text-center md:text-left">
              Yaneh Design<br />
              Providing bonito designs
            </p>
            <p className="text-primary mt-4 text-sm">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
            <p className="text-decorative mt-2 text-sm">
              Made with 💖 y mucho flow
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks />
            <a 
              href="mailto:yaneh@yanehdesign.com"
              className="text-accent hover:text-accent-hover transition-colors mb-2"
            >
              yaneh@yanehdesign.com
            </a>
            <p className="text-primary">Portland, OR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
