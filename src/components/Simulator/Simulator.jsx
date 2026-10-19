import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import Button from '../Button/Button.jsx';
import SceneResult from './SceneResult.jsx';
import HistoryList from './HistoryList.jsx';
import StatsPanel from './StatsPanel.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import { analisarCena, calcularEstatisticas } from '../../utils/analiseDeCena.js';

function Simulator() {
  const [historico, setHistorico] = useLocalStorage('simulador-historico', []);
  const [resultadoAtual, setResultadoAtual] = useState(null);

  function analisarCenaAtual() {
    const resultado = analisarCena();
    setResultadoAtual(resultado);
    setHistorico((atual) => [resultado, ...atual].slice(0, 20));
  }

  function limparHistorico() {
    setHistorico([]);
  }

  const estatisticas = calcularEstatisticas(historico);

  return (
    <section className="w-full bg-surface px-5 py-10 md:px-12 md:py-20" id="simulator">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          titulo="Simulador de Modo Automático"
          subtitulo="Veja como a câmera analisa a cena e calcula ISO, exposição, abertura e confiança sozinha."
        />

        <div className="mb-10 flex justify-center">
          <Button onClick={analisarCenaAtual}>Analisar cena</Button>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SceneResult resultado={resultadoAtual} />

          <div className="flex flex-col gap-6">
            <StatsPanel estatisticas={estatisticas} />
            <HistoryList historico={historico} aoLimpar={limparHistorico} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Simulator;