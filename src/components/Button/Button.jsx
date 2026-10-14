const baseStyles =
  'inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-xs font-semibold cursor-pointer transition-all duration-300 md:w-auto md:px-7.5 md:py-4.5 md:text-base';

const variants = {
  primary:
    'bg-[linear-gradient(90deg,#7C3AED,#2563EB)] text-white shadow-[0_12px_36px_rgba(91,33,182,0.33)] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(91,33,182,0.4)]',
  secondary:
    'bg-surface text-gray-100 border border-gray-700 hover:bg-[#1F1F1F] hover:border-gray-600',
};

function Button({ variant = 'primary', href, children, ...props }) {
  const classes = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;