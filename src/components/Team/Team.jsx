import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import TeamCard from './TeamCard.jsx';
import { integrantes } from '../../data/integrantes.js';

function Team() {
  return (
    <section className="w-full bg-midnight px-5 py-15" id="team">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          titulo="Nossa Equipe"
          subtitulo="Os criadores da Diamond Eye."
          corSubtitulo="text-lavender!"
        />

        <div className="flex w-full flex-row flex-wrap justify-center gap-6">
          {integrantes.map((integrante) => (
            <TeamCard
              key={integrante.id}
              nome={integrante.nome}
              rm={integrante.rm}
              foto={integrante.foto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;