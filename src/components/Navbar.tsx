const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white shadow"
      style={{ background: 'white' }}
    >
      <div className="container mx-auto flex flex-row justify-between items-center py-4 px-4 sm:px-6">
        <span className="font-bold text-xl" style={{ color: 'var(--color-4)' }}>
          Yaneh Design
        </span>
        <ul className="flex flex-row gap-6 font-semibold">
          <li>
            <a href="#projects" style={{ color: 'var(--color-4)' }}>Projects</a>
          </li>
          <li>
            <a href="#contact" style={{ color: 'var(--color-4)' }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;