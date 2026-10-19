import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import GalleryItem from './GalleryItem.jsx';
import { galeriaItens } from '../../data/galeria.js';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

function Gallery() {
  const [favoritos, setFavoritos] = useLocalStorage('galeria-favoritos', []);

  function alternarFavorito(id) {
    setFavoritos((atual) => (
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    ));
  }

  return (
    <section className="bg-midnight px-5 py-15" id="gallery">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          titulo="Galeria de Capturas"
          subtitulo="Veja fotos reais tiradas com os modos automáticos e inteligência artificial da nossa câmera."
          corSubtitulo="text-lavender!"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {galeriaItens.map((item) => (
            <GalleryItem
              key={item.id}
              imagem={item.imagem}
              alt={item.alt}
              tag={item.tag}
              favorito={favoritos.includes(item.id)}
              aoAlternarFavorito={() => alternarFavorito(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;