import { Link } from 'react-router-dom';

const links = [
  { to: '/#solution', label: 'A Solução' },
  { to: '/#audience', label: 'Público-Alvo' },
  { to: '/#simulator', label: 'Simulador' },
  { to: '/#gallery', label: 'Galeria' },
  { to: '/#team', label: 'Nossa Equipe' },
];

function Header() {
  return (
    <header className="w-full border-b border-border-subtle bg-black">
      <nav className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row md:px-12 md:py-5">
        <Link to="/" className="text-2xl font-extrabold text-white">
          Diamond Eye
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-base font-semibold text-gray-300 transition-colors duration-200 hover:text-purple-light"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;