import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    className="sticky top-0 z-50 w-full bg-white shadow"
    style={{ background: 'var(--color-1)' }}
  >
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <span className="font-bold text-xl" style={{ color: 'var(--color-4)' }}>
        Yaneh Design
      </span>
      <ul className="flex gap-8 font-semibold">
        <li>
          <Link to="/" style={{ color: 'var(--color-4)' }}>Home</Link>
        </li>
        <li>
          <Link to="/" style={{ color: 'var(--color-4)' }}>Projects</Link>
        </li>
        <li>
          <Link to="#contact" style={{ color: 'var(--color-4)' }}>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;