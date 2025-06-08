import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-20 bg-pink-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Company Info */}
        <aside className="flex flex-col items-start mb-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow mb-2">
            <span className="text-pink-800 font-bold text-xl font-sans">Y</span>
          </div>
          <p className="font-bold text-left">
            Yaneh Design.<br />
            Providing bonito designs.
          </p>
          <p className="text-left">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
          <p className="font-sans text-pink-200 text-sm">
            Made with 💖 y mucho flow
          </p>
        </aside>

        {/* Social Media Links */}
        <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/yanehdesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl text-pink-200 hover:text-white transition" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/janet-g-7a8245351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_appq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current text-pink-200 hover:text-white transition"
              >
                <path d="M19.428 0H4.572C2.048 0 0 2.048 0 4.572v14.856C0 21.952 2.048 24 4.572 24h14.856C21.952 24 24 21.952 24 19.428V4.572C24 2.048 21.952 0 19.428 0zM7.059 20.438H3.875V9.563h3.184v10.875zm-1.592-12.5a1.842 1.842 0 1 1 0-3.684 1.842 1.842 0 0 1 0 3.684zm15.155 12.5h-3.184v-5.125c0-1.225-.025-2.803-1.707-2.803-1.707 0-1.964 1.333-1.964 2.713v5.215h-3.184V9.563h3.055v1.475h.043c.426-.807 1.465-1.658 3.016-1.658 3.227 0 3.828 2.125 3.828 4.898v6.265z" />
              </svg>
            </a>
          </div>
          {/* Email and Location */}
          <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
            <a
              href="mailto:yaneh@yanehdesign.com"
              className="underline hover:text-pink-100 transition"
            >
              yaneh@yanehdesign.com
            </a>
            <span className="mt-1 text-pink-200">Portland, OR</span>
          </div>
        </nav>
      </div>
    </footer>
  );
};
