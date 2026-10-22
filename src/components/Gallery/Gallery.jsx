import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import GalleryItem from './GalleryItem.jsx';
import GalleryFilters from './GalleryFilters.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { api } from '../../services/api.js';
import { useFetch } from '../../hooks/useFetch.js';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function Gallery() {
  const { dados: fotos, carregando, erro, recarregar } = useFetch(api.getFotos);
  const [favoritos, setFavoritos] = useLocalStorage('galeria-favoritos', []);
  const [filtro, setFiltro] = useState('todos');

  function alternarFavorito(id) {
    setFavoritos((atual) => (
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    ));
  }

  const modos = fotos ? [...new Set(fotos.map((foto) => foto.modo))] : [];

  const opcoes = [
    { valor: 'todos', rotulo: 'Todas' },
    { valor: 'favoritos', rotulo: 'Favoritas' },
    ...modos.map((modo) => ({ valor: modo, rotulo: capitalizar(modo) })),
  ];

  const fotosVisiveis = (fotos ?? []).filter((foto) => {
    if (filtro === 'todos') return true;
    if (filtro === 'favoritos') return favoritos.includes(foto.id);
    return foto.modo === filtro;
  });

  return (
    <section className="bg-midnight px-5 py-15" id="gallery">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          titulo="Galeria de Capturas"
          subtitulo="Veja fotos reais tiradas com os modos automáticos e inteligência artificial da nossa câmera."
          corSubtitulo="text-lavender"
        />

        {carregando && <Loader texto="Carregando fotos..." />}

        {erro && <ErrorMessage mensagem={erro} aoTentarNovamente={recarregar} />}

        {fotos && (
          <>
            <GalleryFilters opcoes={opcoes} selecionado={filtro} aoSelecionar={setFiltro} />

            {fotosVisiveis.length === 0 ? (
              <p className="text-center text-lavender">Nenhuma foto encontrada neste filtro.</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                {fotosVisiveis.map((foto) => (
                  <GalleryItem
                    key={foto.id}
                    id={foto.id}
                    imagem={foto.imagem}
                    alt={foto.alt}
                    tag={foto.tag}
                    favorito={favoritos.includes(foto.id)}
                    aoAlternarFavorito={() => alternarFavorito(foto.id)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Gallery;