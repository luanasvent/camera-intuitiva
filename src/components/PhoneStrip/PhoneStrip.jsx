import PhoneCard from './PhoneCard.jsx';
import { phoneStripCards } from '../../data/phoneStrip.js';

function PhoneStrip() {
  return (
    <section className="flex flex-col items-center gap-4 bg-overlay px-5 pt-5.5 pb-8 md:gap-3.5 md:px-10 lg:px-20">
      <h2 className="text-center text-3xl leading-[1.2] font-extrabold text-gray-50">
        Telas reais em smartphones
      </h2>

      <p className="max-w-[900px] text-center text-lg text-gray-400">
        Modos inteligentes, guia de enquadramento e configurações profissionais em um clique.
      </p>

      <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:gap-3">
        {phoneStripCards.map((card) => (
          <PhoneCard key={card.id} imagem={card.imagem} alt={card.alt} />
        ))}
      </div>
    </section>
  );
}

export default PhoneStrip;