import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import AudienceCard from './AudienceCard.jsx';
import { publicoAlvoCards } from '../../data/publicoAlvo.js';

function Audience() {
  return (
    <section className="w-full bg-surface px-5 py-12 md:px-12 md:py-20" id="audience">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeader
          titulo="Para quem é destinado?"
          subtitulo="Uma câmera pensada para criadores de conteúdo e estudantes que querem tirar fotos melhores sem precisar dominar configurações profissionais."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {publicoAlvoCards.map((card) => (
            <AudienceCard key={card.id} titulo={card.titulo} texto={card.texto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Audience;