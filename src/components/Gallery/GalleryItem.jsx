function GalleryItem({ imagem, alt, tag, favorito, aoAlternarFavorito }) {
  const favoriteStyles = favorito
    ? 'border-gold text-gold'
    : 'border-border-violet text-lavender hover:border-gold';

  return (
    <div className="relative overflow-hidden rounded-md border border-border-violet transition-transform duration-300 hover:-translate-y-[5px]">
      <img src={imagem} alt={alt} className="block h-[250px] w-full object-cover" />

      <span className="absolute bottom-3.75 left-3.75 rounded-full border border-gold bg-midnight/80 px-3 py-1.5 text-[0.85rem] font-bold text-gold">
        {tag}
      </span>

      <button
        type="button"
        className={`absolute top-3 right-3 flex size-8 cursor-pointer items-center justify-center rounded-full border bg-midnight/80 text-[1.1rem] transition-all duration-200 ${favoriteStyles}`}
        onClick={aoAlternarFavorito}
        aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {favorito ? '★' : '☆'}
      </button>
    </div>
  );
}

export default GalleryItem;