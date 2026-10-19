import Button from '../Button/Button.jsx';
import giftIcon from '../../assets/icons/gift.svg';

const BASE_INTERESSADOS = 847;

function CTA({ totalInscritos, aoAbrirModal }) {
  const totalInteressados = BASE_INTERESSADOS + totalInscritos;

  return (
    <section className="flex flex-col items-center gap-4 bg-[linear-gradient(90deg,#4C1D95,#312E81_50%,#1E3A8A)] px-5 py-10 md:px-10 md:pt-17 md:pb-18 lg:px-20">
      <div className="flex size-14 items-center justify-center rounded-lg border border-gold-light/30 bg-gold-light/20">
        <img src={giftIcon} alt="Gift" className="size-7" />
      </div>

      <h2 className="text-center text-3xl leading-[1.2] font-extrabold text-white md:text-4xl">
        Cadastre-se para receber atualizações
      </h2>

      <p className="max-w-full text-center text-base leading-[1.55] text-purple-lighter! md:max-w-180 md:text-lg">
        Receba novidades do projeto, acesso antecipado a demos e possíveis vouchers para quem quiser acompanhar de perto o lançamento.
      </p>

      <Button variant="light" onClick={aoAbrirModal}>
        Quero ser atualizado(a)!
      </Button>

      <p className="text-center text-xs text-purple-lightest!">
        *Mais de {totalInteressados} pessoas já deixaram o e-mail na lista de interesse.
      </p>
    </section>
  );
}

export default CTA;