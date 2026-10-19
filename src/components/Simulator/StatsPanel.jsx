import { nomeDoModo } from '../../utils/analiseDeCena.js';

function StatsPanel({ estatisticas }) {
  const { total, modoMaisFrequente, isoMedio, percentualPorModo } = estatisticas;

  return (
    <div className="rounded-lg border border-border-subtle bg-card p-6 md:p-8">
      <h3 className="mb-6 text-center text-2xl font-extrabold text-white">
        Estatísticas
      </h3>

      <div className="mb-6 grid grid-cols-2 gap-3 text-center">
        <div>
          <div className="text-4xl font-bold text-purple-light">{total}</div>
          <p className="mt-1 text-xs text-gray-400">Análises realizadas</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-purple-light">{isoMedio}</div>
          <p className="mt-1 text-xs text-gray-400">ISO médio</p>
        </div>
      </div>

      {modoMaisFrequente && (
        <p className="mb-3 text-center text-sm text-gray-400">
          Modo mais frequente:{' '}
          <strong className="text-white">{nomeDoModo(modoMaisFrequente)}</strong>
        </p>
      )}

      {percentualPorModo.map((item) => (
        <div key={item.modo} className="mb-3 flex items-center gap-3">
          <span className="w-24 shrink-0 text-sm text-gray-300">
            {nomeDoModo(item.modo)}
          </span>

          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-deep">
            <div
              className="h-full bg-[linear-gradient(90deg,#7C3AED,#FFD700)] transition-all duration-500"
              style={{ width: `${item.percentual}%` }}
            />
          </div>

          <span className="w-12 text-right text-sm text-gray-400">
            {item.percentual}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default StatsPanel;