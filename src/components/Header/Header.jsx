const links = [
  { href: '#solution', label: 'A Solução' },
  { href: '#audience', label: 'Público-Alvo' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#team', label: 'Nossa Equipe' },
];

function Header() {
  return (
    <header className="w-full border-b border-border-subtle bg-black">
      <nav className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row md:px-12 md:py-5">
        <a href="#" className="text-2xl font-extrabold text-white">
          Diamond Eye
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-gray-300 transition-colors duration-200 hover:text-purple-light"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;