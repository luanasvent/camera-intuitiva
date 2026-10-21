import { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import { api } from '../services/api.js';
import { useFetch } from '../hooks/useFetch.js';

function PhotoPage() {
  const { id } = useParams();
  const buscarFoto = useCallback(() => api.getFoto(id), [id]);
  const { dados: foto, carregando, erro, recarregar } = useFetch(buscarFoto);

  const parametros = foto
    ? [
        { label: 'ISO', valor: foto.iso },
        { label: 'Exposição', valor: foto.exposicao },
        { label: 'Abertura', valor: foto.abertura },
      ]
    : [];

  return (
    <section className="min-h-[60vh] bg-midnight px-5 py-12 md:px-12">
      <div className="mx-auto max-w-[1000px]">
        <Link
          to="/#gallery"
          className="mb-8 inline-block text-sm font-semibold text-lavender transition-colors duration-200 hover:text-gold"
        >
          ← Voltar para a galeria
        </Link>

        {carregando && <Loader texto="Carregando foto..." />}

        {erro && <ErrorMessage mensagem={erro} aoTentarNovamente={recarregar} />}

        {foto && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <img
              src={foto.imagem}
              alt={foto.alt}
              className="w-full rounded-lg border border-border-violet object-cover"
            />

            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-gold px-3 py-1.5 text-sm font-bold text-gold">
                {foto.tag}
              </span>

              <h1 className="text-3xl leading-[1.2] font-extrabold text-white md:text-4xl">
                {foto.alt}
              </h1>

              <p className="leading-[1.8] text-lavender">{foto.descricao}</p>

              <div className="grid grid-cols-3 gap-3">
                {parametros.map((parametro) => (
                  <div
                    key={parametro.label}
                    className="rounded-md border border-gray-800 bg-surface-deep p-4"
                  >
                    <span className="mb-1 block text-xs text-gray-500">{parametro.label}</span>
                    <span className="text-xl font-bold text-white">{parametro.valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotoPage;