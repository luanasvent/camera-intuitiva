function SolutionCard({ titulo, texto, lista, destaque }) {
  const background = destaque
    ? 'bg-linear-to-br from-purple-dark to-card'
    : 'bg-card';

  return (
    <article className={`rounded-lg border border-border-subtle p-6 md:p-10 ${background}`}>
      <h3 className="mb-4 text-3xl leading-[1.2] font-extrabold text-white">
        {titulo}
      </h3>

      <p className="text-base leading-[1.8] text-gray-400">{texto}</p>

      <ul className="mt-6 list-disc pl-6">
        {lista.map((item) => (
          <li key={item} className="mb-3 text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SolutionCard;