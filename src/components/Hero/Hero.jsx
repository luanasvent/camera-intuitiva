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
const phoneImage = 'size-full rounded-3xl object-cover';

function Hero({ aoAbrirModal }) {
  return (
    <section className="flex max-w-full flex-wrap items-center gap-14 bg-[radial-gradient(#7c3aed49,#4d1d9545,#000000,#000000)] px-6 pt-16 pb-22 md:px-20">
      <div className="flex min-w-[min(100%,25rem)] flex-1 flex-col gap-5.5">
        <Badge texto="LANÇAMENTO 2026" />

        <TitleStack />

        <p className="max-w-full text-lg leading-normal text-gray-400">
          Algoritmos analisam a cena em tempo real quando você mira a câmera, escolhem o melhor modo (comida, retrato, paisagem, animal, noite…) e ajustam ISO, exposição e foco para você. Menos tentativa e erro, mais fotos com cara de profissional.
        </p>

        <div className="flex flex-wrap gap-3.5">
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

      <div className="flex min-w-[min(100%,18.75rem)] flex-1 items-end justify-center gap-3">
        <div className={`${phoneBase} h-[25.25rem] w-33`}>
          <img src={cell1} alt="Smartphone — tela A" className={phoneImage} />
        </div>

        <div
          className={`${phoneBase} h-[29.5rem] w-53 border-indigo-border bg-surface shadow-[0_18px_40px_rgba(79,70,229,0.27)]`}
        >
          <img src={camera} alt="Camera" className={phoneImage} />
        </div>

        <div className={`${phoneBase} h-[25.25rem] w-33`}>
          <img src={cell2} alt="Smartphone — tela B" className={phoneImage} />
        </div>
      </div>
    </section>
  );
}

export default Hero;