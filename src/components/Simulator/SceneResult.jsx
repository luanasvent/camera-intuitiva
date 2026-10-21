function SceneResult({ resultado }) {
  if (!resultado) {
    return (
      <div className="rounded-lg border border-border-subtle bg-card p-8 text-center text-gray-400">
        <p>Clique em "Analisar cena" para ver o modo automático em ação.</p>
      </div>
    );
  }

  const parametros = [
    { label: 'ISO', valor: resultado.iso },
    { label: 'Exposição', valor: resultado.exposicao },
    { label: 'Abertura', valor: resultado.abertura },
    { label: 'Confiança', valor: `${resultado.confianca}%` },
  ];

  return (
    <div className="rounded-lg border border-border-subtle bg-card p-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-3xl font-extrabold text-gold">Modo {resultado.nomeModo}</h3>
        <span className="text-xs text-gray-500">#{resultado.codigo}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {parametros.map((parametro) => (
          <div
            key={parametro.label}
            className="rounded-md border border-gray-800 bg-surface-deep p-4"
          >
            <span className="mb-1 block text-[0.625rem] text-gray-500">{parametro.label}</span>
            <span className="text-2xl font-bold text-white">{parametro.valor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SceneResult;