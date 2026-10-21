function Chip({ texto }) {
  return (
  <span className="inline-flex items-center rounded-md border border-gray-800 bg-[#111111] px-3 py-2 text-xs font-semibold text-[#D4D4D8]">
      {texto}
  </span>
  );
}

export default Chip;
