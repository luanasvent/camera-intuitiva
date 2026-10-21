import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero/Hero.jsx';
import Solution from '../components/Solution/Solution.jsx';
import Audience from '../components/Audience/Audience.jsx';
import PhoneStrip from '../components/PhoneStrip/PhoneStrip.jsx';
import Features from '../components/Features/Features.jsx';
import Simulator from '../components/Simulator/Simulator.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Team from '../components/Team/Team.jsx';
import CTA from '../components/CTA/CTA.jsx';

function HomePage() {
  const { abrirModal, totalInscritos } = useOutletContext();

  return (
    <>
      <Hero aoAbrirModal={abrirModal} />
      <Solution />
      <Audience />
      <PhoneStrip />
      <Features />
      <Simulator />
      <Gallery />
      <Team />
      <CTA totalInscritos={totalInscritos} aoAbrirModal={abrirModal} />
    </>
  );
}

export default HomePage;