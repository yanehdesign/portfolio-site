export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-20 bg-pink-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Company Info */}
        <aside className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
            <span className="text-pink-800 font-bold text-xl font-sans">Y</span>
          </div>
          <p className="font-bold text-center">
            Yaneh Design.<br />
            Providing bonito designs.
          </p>
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
          <p className="font-sans text-pink-200 text-sm">
            Made with 💖 and mucho flow
          </p>
        </aside>

        {/* Social Media Links */}
        <nav>
          <div className="flex justify-center items-center gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.388 3.678 1.369c-.981.981-1.238 2.093-1.297 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.316 2.393 1.297 3.374.981.981 2.093 1.238 3.374 1.297C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.316 3.374-1.297.981-.981 1.238-2.093 1.297-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.316-2.393-1.297-3.374-.981-.981-2.093-1.238-3.374-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.428 0H4.572C2.048 0 0 2.048 0 4.572v14.856C0 21.952 2.048 24 4.572 24h14.856C21.952 24 24 21.952 24 19.428V4.572C24 2.048 21.952 0 19.428 0zM7.059 20.438H3.875V9.563h3.184v10.875zm-1.592-12.5a1.842 1.842 0 1 1 0-3.684 1.842 1.842 0 0 1 0 3.684zm15.155 12.5h-3.184v-5.125c0-1.225-.025-2.803-1.707-2.803-1.707 0-1.964 1.333-1.964 2.713v5.215h-3.184V9.563h3.055v1.475h.043c.426-.807 1.465-1.658 3.016-1.658 3.227 0 3.828 2.125 3.828 4.898v6.265z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};
