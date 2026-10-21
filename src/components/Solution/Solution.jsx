import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import SolutionCard from './SolutionCard.jsx';
import { solucaoCards } from '../../data/solucao.js';

function Solution() {
  return (
    <section className="w-full bg-surface px-5 py-12 md:px-12 md:py-20" id="solution">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          titulo="A solução"
          subtitulo="Uma câmera inteligente que entende a cena e ajuda você a capturar melhores fotos sem precisar dominar configurações profissionais."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {solucaoCards.map((card) => (
            <SolutionCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solution;