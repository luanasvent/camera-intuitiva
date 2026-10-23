import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import { useModal } from '../../hooks/useModal.js';

const links = [
  { to: '/#solution', label: 'A Solução' },
  { to: '/#audience', label: 'Público-Alvo' },
  { to: '/#simulator', label: 'Simulador' },
  { to: '/#gallery', label: 'Galeria' },
  { to: '/#team', label: 'Nossa Equipe' },
];

const linkStyle =
  'text-base font-semibold text-gray-300 transition-colors duration-200 hover:text-purple-light';
const destaqueStyle = 'text-base font-semibold text-gold';

// ajuste do menu para todas as telas
function MenuItens({ aoNavegar, itemClasse }) {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function sair() {
    logout();
    aoNavegar();
    navigate('/');
  }

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={aoNavegar}
          className={`${linkStyle} ${itemClasse}`}
        >
          {link.label}
        </Link>
      ))}

      {usuario ? (
        <>
          <Link to="/dashboard" onClick={aoNavegar} className={`${destaqueStyle} ${itemClasse}`}>
            Painel
          </Link>
          <button
            type="button"
            onClick={sair}
            className={`cursor-pointer text-left ${linkStyle} ${itemClasse}`}
          >
            Sair
          </button>
        </>
      ) : (
        <Link to="/login" onClick={aoNavegar} className={`${destaqueStyle} ${itemClasse}`}>
          Entrar
        </Link>
      )}
    </>
  );
}

function Header() {
  const menu = useModal();

  return (
    <header className="w-full border-b border-border-subtle bg-black">
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-4 md:px-12 md:py-5">
        <Link to="/" onClick={menu.fechar} className="text-2xl font-extrabold text-white">
          Diamond Eye
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <MenuItens aoNavegar={menu.fechar} itemClasse="" />
        </div>

        <button
          type="button"
          className="flex size-10 cursor-pointer items-center justify-center rounded-md border border-border-subtle text-white lg:hidden"
          aria-label={menu.aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menu.aberto}
          onClick={menu.alternar}
        >
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menu.aberto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menu.aberto && (
        <div className="border-t border-border-subtle px-5 py-2 lg:hidden">
          <div className="flex flex-col">
            <MenuItens
              aoNavegar={menu.fechar}
              itemClasse="border-b border-border-subtle py-3 last:border-b-0"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;