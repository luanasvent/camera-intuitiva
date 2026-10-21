function PhoneCard({ imagem, alt }) {
  return (
    <div className="flex h-80 w-full items-center justify-center rounded-3xl border-2 border-border-light bg-card sm:w-37">
      <img src={imagem} alt={alt} className="size-full rounded-3xl object-cover" />
    </div>
  );
}

export default PhoneCard;