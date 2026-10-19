import circleCheck from '../../assets/icons/circle-check.svg';

function AlertSuccess({ aberto, aoFechar }) {
  return (
    <div
      className={`fixed inset-0 z-[1001] items-center justify-center bg-black/80 ${aberto ? 'flex' : 'hidden'}`}
      onClick={(event) => event.target === event.currentTarget && aoFechar()}
    >
      <div className="flex w-[90%] max-w-md flex-col items-center gap-4 rounded-3xl border border-[#00c950]/30 bg-[linear-gradient(135deg,#0d542b_0%,#004f3b_100%)] p-6 text-center shadow-[0_25px_43.75px_rgba(0,0,0,0.25)] md:p-8">
        <div className="flex items-center justify-center">
          <img className="size-20" src={circleCheck} alt="" />
        </div>

        <h2 className="mt-2 text-2xl font-bold! tracking-[0.02em] text-white md:text-3xl">
          Parabéns! 🎉
        </h2>

        <p className="text-sm leading-normal text-white/80! md:text-base">
          Você está inscrito e receberá todas as novidades e atualizações sobre o nosso projeto
        </p>

        <button
          type="button"
          className="mt-2 cursor-pointer rounded-full bg-white px-8 py-3 text-base font-bold text-[#0d542b] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
          onClick={aoFechar}
        >
          Entendi!
        </button>
      </div>
    </div>
  );
}

export default AlertSuccess;