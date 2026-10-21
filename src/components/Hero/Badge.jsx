import starIcon from '../../assets/icons/star.svg';

function Badge({ texto }) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full border border-gold-dark bg-[#1F1708] px-4 py-2">
      <img src={starIcon} alt="Star" className="size-4" />
      <span className="text-[0.625rem] font-bold tracking-[0.15rem] text-gold">
        {texto}
      </span>
    </div>
  );
}

export default Badge;
