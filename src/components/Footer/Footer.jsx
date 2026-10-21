import eyeIcon from '../../assets/icons/eye.svg';

function Footer() {
  return (
    <footer className="flex flex-col gap-4 bg-surface-darkest px-4 pt-5 pb-6 sm:px-5 sm:pt-9 sm:pb-12 md:gap-5 md:px-10 lg:px-20">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={eyeIcon} alt="Diamond eye" className="size-5.5" />
          <span className="text-lg font-bold text-gray-50">Diamond eye</span>
        </div>
      </div>

      <p className="text-xs leading-[1.6] text-gray-500">
        © 2026 SmartCam AI — câmera intuitiva com modos e configurações guiados por algoritmos. Hardware em fase final; lançamento previsto para 05/2026.
      </p>
    </footer>
  );
}

export default Footer;