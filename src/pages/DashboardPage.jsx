import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import StatsPanel from '../components/Simulator/StatsPanel.jsx';
import HistoryList from '../components/Simulator/HistoryList.jsx';
import { api } from '../services/api.js';
import { useAuth } from '../hooks/useAuth.js';
import { useFetch } from '../hooks/useFetch.js';
import { useFavorites } from '../hooks/useFavorites.js';
import { useSimulator } from '../hooks/useSimulator.js';

function DashboardPage() {
  const { usuario } = useAuth();
  const { dados: fotos, carregando, erro, recarregar } = useFetch(api.getFotos);
  const { favoritos } = useFavorites();
  const { historico, estatisticas, limparHistorico } = useSimulator();

  const fotosFavoritas = (fotos ?? []).filter((foto) => favoritos.includes(foto.id));

  return (
    <section className="bg-midnight px-5 py-12 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Olá, {usuario.nome}!
          </h1>
          <p className="mt-2 text-lavender">
            Este é o seu painel: suas fotos favoritas e o histórico do simulador.
          </p>
        </header>

        <h2 className="mb-4 text-2xl font-extrabold text-white">Fotos favoritas</h2>

        {carregando && <Loader texto="Carregando fotos..." />}

        {erro && <ErrorMessage mensagem={erro} aoTentarNovamente={recarregar} />}

        {fotos && fotosFavoritas.length === 0 && (
          <p className="text-lavender">
            Você ainda não favoritou nenhuma foto. Marque a estrela na{' '}
            <Link to="/#gallery" className="text-gold underline">
              galeria
            </Link>
            .
          </p>
        )}

        {fotosFavoritas.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {fotosFavoritas.map((foto) => (
              <Link
                key={foto.id}
                to={`/foto/${foto.id}`}
                className="overflow-hidden rounded-md border border-border-violet transition-transform duration-300 hover:-translate-y-[5px]"
              >
                <img
                  src={foto.imagem}
                  alt={foto.alt}
                  className="block h-[200px] w-full object-cover"
                />
                <span className="block bg-card px-4 py-3 text-sm font-bold text-gold">
                  {foto.tag}
                </span>
              </Link>
            ))}
          </div>
        )}

        <h2 className="mt-12 mb-4 text-2xl font-extrabold text-white">
          Histórico do simulador
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StatsPanel estatisticas={estatisticas} />
          <HistoryList historico={historico} aoLimpar={limparHistorico} />
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;