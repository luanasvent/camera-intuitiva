function AudienceCard({ titulo, texto }) {
  return (
    <article className="rounded-lg border border-border-subtle bg-card p-8">
      <h3 className="mb-4 text-3xl leading-[1.2] font-extrabold text-white">
        {titulo}
      </h3>

      <p className="text-base leading-[1.8] text-gray-400">{texto}</p>
    </article>
  );
}

export default AudienceCard;