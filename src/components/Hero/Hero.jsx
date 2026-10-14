import Badge from './Badge.jsx';
import TitleStack from './TitleStack.jsx';
import StatCard from './StatCard.jsx';
import Chip from './Chip.jsx';
import Button from '../Button/Button.jsx';
import { heroStats, heroChips } from '../../data/hero.js';
import cell1 from '../../assets/images/cell-1.png';
import camera from '../../assets/images/camera.png';
import cell2 from '../../assets/images/cell-2.png';

const phoneBase =
  'flex flex-col items-center justify-center rounded-3xl border-2 border-border';
const phoneSide = 'h-72 w-26 md:h-[25.25rem] md:w-33';
const phoneCenter =
  'h-88 w-32 border-indigo-border bg-surface shadow-[0_18px_40px_rgba(79,70,229,0.27)] md:h-[29.5rem] md:w-53';
const phoneImage = 'size-full rounded-3xl object-cover';

function Hero({ aoAbrirModal }) {
  return (
    <section className="flex max-w-full flex-col items-center gap-10 bg-[radial-gradient(#7c3aed49,#4d1d9545,#000000,#000000)] px-4 pt-5 pb-6 sm:px-5 sm:pt-8 sm:pb-10 md:px-10 md:pt-10 md:pb-14 lg:flex-row lg:gap-14 lg:px-20 lg:pt-16 lg:pb-22">
      <div className="flex w-full flex-col gap-4 md:gap-5.5 lg:w-auto lg:min-w-100 lg:flex-1">
        <Badge texto="LANÇAMENTO 2026" />

        <TitleStack />

        <p className="max-w-full text-base leading-normal text-gray-400 md:text-lg">
          Algoritmos analisam a cena em tempo real quando você mira a câmera, escolhem o melhor modo (comida, retrato, paisagem, animal, noite…) e ajustam ISO, exposição e foco para você. Menos tentativa e erro, mais fotos com cara de profissional.
        </p>

        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-3.5">
          <Button onClick={aoAbrirModal}>
            Se inscreva para receber atualizações
          </Button>
          <Button variant="secondary" href="#features">
            Conhecer Recursos
          </Button>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-5 pt-3">
          {heroStats.map((stat) => (
            <StatCard key={stat.id} numero={stat.numero} label={stat.label} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 pt-2">
          {heroChips.map((chip) => (
            <Chip key={chip} texto={chip} />
          ))}
        </div>
      </div>

      <div className="flex w-full items-end justify-center gap-2 md:gap-3 lg:w-auto lg:min-w-75 lg:flex-1">
        <div className={`${phoneBase} ${phoneSide}`}>
          <img src={cell1} alt="Smartphone — tela A" className={phoneImage} />
        </div>

        <div className={`${phoneBase} ${phoneCenter}`}>
          <img src={camera} alt="Camera" className={phoneImage} />
        </div>

        <div className={`${phoneBase} ${phoneSide}`}>
          <img src={cell2} alt="Smartphone — tela B" className={phoneImage} />
        </div>
      </div>
    </section>
  );
}

export default Hero;