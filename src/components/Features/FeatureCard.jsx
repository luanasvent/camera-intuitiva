const iconBackgrounds = {
  color1: 'bg-accent-red',
  color2: 'bg-accent-orange',
  color3: 'bg-accent-blue',
};

function FeatureCard({ cor, icone, iconeAlt, titulo, descricao }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-gray-800 bg-surface-deep p-5.5">
      <div
        className={`flex size-13 shrink-0 items-center justify-center rounded-md ${iconBackgrounds[cor]}`}
      >
        <img src={icone} alt={iconeAlt} className="size-6.5" />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base leading-[1.2] font-extrabold text-white">
          {titulo}
        </h3>
        <p className="text-xs text-gray-400">{descricao}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
