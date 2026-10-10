function StatCard({ numero, label }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[2rem] font-extrabold text-white md:text-5xl">
        {numero}
      </div>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}

export default StatCard;
