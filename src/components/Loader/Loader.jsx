function Loader({ texto = 'Carregando...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10" role="status">
      <div className="size-10 animate-spin rounded-full border-4 border-border-violet border-t-gold" />
      <span className="text-sm text-lavender">{texto}</span>
    </div>
  );
}

export default Loader;