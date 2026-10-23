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

function LinksSecoes({ aoNavegar, itemClasse = '' }) {
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
    </>
  );
}

// "Entrar" (deslogada) ou "Seu Painel" (logada)
function LinkConta({ aoNavegar }) {
  const { usuario } = useAuth();

  return usuario ? (
    <Link to="/dashboard" onClick={aoNavegar} className={destaqueStyle}>
      Seu Painel
    </Link>
  ) : (
    <Link to="/login" onClick={aoNavegar} className={destaqueStyle}>
      Entrar
    </Link>
  );
}

function BotaoSair({ aoNavegar, itemClasse = '' }) {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  if (!usuario) return null;

  function sair() {
    logout();
    aoNavegar();
    navigate('/');
  }

  return (
    <button
      type="button"
      onClick={sair}
      className={`cursor-pointer text-left ${linkStyle} ${itemClasse}`}
    >
      Sair
    </button>
  );
}

function Header() {
  const menu = useModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-black/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-3 px-5 py-4 md:px-12 md:py-5">
        <Link to="/" onClick={menu.fechar} className="text-xl font-extrabold text-white sm:text-2xl">
          Diamond Eye
        </Link>

        {/* telas grandes: tudo em linha */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <LinksSecoes aoNavegar={menu.fechar} />
          <LinkConta aoNavegar={menu.fechar} />
          <BotaoSair aoNavegar={menu.fechar} />
        </div>

        {/* celular e tablet: conta fora do menu, ao lado do hambúrguer */}
        <div className="flex items-center gap-4 lg:hidden">
          <LinkConta aoNavegar={menu.fechar} />

          <button
            type="button"
            className="flex size-10 cursor-pointer items-center justify-center rounded-md border border-border-subtle text-white"
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
        </div>
      </nav>

      {menu.aberto && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border-subtle px-5 py-2 lg:hidden">
          <div className="flex flex-col">
            <LinksSecoes
              aoNavegar={menu.fechar}
              itemClasse="border-b border-border-subtle py-3 last:border-b-0"
            />
            <BotaoSair aoNavegar={menu.fechar} itemClasse="py-3" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;