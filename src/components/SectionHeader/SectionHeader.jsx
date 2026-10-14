function SectionHeader({ titulo, subtitulo }) {
  return (
    <header className="mx-auto mb-10 max-w-[800px] text-center md:mb-16">
      <h2 className="mb-4 text-[2rem] leading-[1.2] font-extrabold text-white md:text-5xl">
        {titulo}
      </h2>

      <p className="text-lg text-gray-400">{subtitulo}</p>
    </header>
  );
}

export default SectionHeader;