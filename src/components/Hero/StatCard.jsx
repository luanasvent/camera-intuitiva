function StatCard({ numero, label }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-3xl font-extrabold text-white sm:text-[2rem] md:text-5xl">
        {numero}
      </div>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}

export default StatCard;
