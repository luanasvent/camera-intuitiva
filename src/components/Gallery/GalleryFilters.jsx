function GalleryFilters({ opcoes, selecionado, aoSelecionar }) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          type="button"
          onClick={() => aoSelecionar(opcao.valor)}
          className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            selecionado === opcao.valor
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-border-violet text-lavender hover:border-gold'
          }`}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  );
}

export default GalleryFilters;