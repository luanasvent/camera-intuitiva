function HistoryList({ historico, aoLimpar }) {
  return (
    <div className="rounded-lg border border-border-subtle bg-card p-6">
      <div className="relative mb-4 flex items-center justify-center">
        <h3 className="text-2xl font-extrabold text-white">Histórico</h3>
        {historico.length > 0 && (
          <button
            type="button"
            className="absolute right-0 cursor-pointer text-xs text-gray-400 underline hover:text-gray-300"
            onClick={aoLimpar}
          >
            Limpar
          </button>
        )}
      </div>

      {historico.length === 0 ? (
        <p className="text-xs text-gray-500!">Nenhuma análise realizada ainda.</p>
      ) : (
        <div className="flex max-h-56 flex-col gap-2 overflow-y-auto pr-1 [scrollbar-color:#3F3F46_transparent] [scrollbar-width:thin]">
          {historico.map((analise) => (
            <div
              key={analise.codigo}
              className="flex justify-between rounded-sm bg-surface-deep px-3 py-2 text-xs text-gray-300"
            >
              <span>{analise.nomeModo}</span>
              <span>ISO {analise.iso} · {analise.confianca}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryList;