function TeamCard({ nome, rm, foto }) {
  return (
    <div className="flex min-w-[250px] max-w-[300px] flex-1 flex-col items-center rounded-2xl border border-border-violet bg-linear-to-br from-[#160F33] to-[#0F0A26] px-5 py-7.5 text-center">
      <div className="mb-4 size-30 overflow-hidden rounded-full border-[3px] border-gold">
        <img src={foto} alt={nome} className="size-full object-cover" />
      </div>

      <h3 className="mb-2 text-[1.15rem] leading-[1.3] font-semibold text-white">
        {nome}
      </h3>

      <p className="text-[0.9rem] text-lavender">{rm}</p>
    </div>
  );
}

export default TeamCard;