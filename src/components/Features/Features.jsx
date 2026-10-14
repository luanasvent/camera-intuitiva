import FeatureCard from './FeatureCard.jsx';
import { featureCards } from '../../data/features.js';
import cameraCompleta from '../../assets/images/camera-completa.gif';

function Features() {
  return (
    <section
      className="flex flex-col items-center gap-4 bg-black px-5 pt-10 pb-14 md:gap-8 md:px-10 lg:px-20"
      id="features"
    >
      <div className="h-px w-full bg-border-subtle" />

      <h2 className="text-center text-3xl leading-[1.2] font-extrabold text-gray-50 md:text-5xl">
        Tecnologia que transforma
      </h2>

      <p className="max-w-[760px] text-center text-base leading-[1.55] text-gray-400 md:text-lg">
        Do mirar ao clique: algoritmos classificam a cena, escolhem o modo certo e refinam parâmetros para cada situação. Sem menu infinito.
      </p>

      <div className="flex w-full flex-col items-center gap-6 md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-5 lg:gap-11">
        <div className="flex h-auto min-h-80 w-full max-w-full items-center justify-center rounded-3xl border-2 border-gray-800 bg-surface-alt md:h-234 md:w-110">
          <img
            src={cameraCompleta}
            alt="Camera completa"
            className="size-full rounded-3xl object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-3.5 lg:max-w-110">
          {featureCards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
