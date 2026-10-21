import { useId } from 'react';

function FormField({ label, tipo, valor, placeholder, erro, aoAlterar, aoSairDoFoco }) {
  const id = useId();

  const inputStyles = erro
    ? 'border-error bg-error/10'
    : 'border-accent-blue bg-white/5 focus:border-indigo-border focus:bg-white/[0.08]';

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-white">
        {label}
      </label>

      <input
        id={id}
        type={tipo}
        className={`rounded-[0.875rem] border px-4 py-3 text-base text-white transition-all duration-200 outline-none placeholder:text-white/30 ${inputStyles}`}
        placeholder={placeholder}
        value={valor}
        onChange={(event) => aoAlterar(event.target.value)}
        onBlur={aoSairDoFoco}
      />

      {erro && <span className="mt-1 block text-xs text-error">{erro}</span>}
    </div>
  );
}

export default FormField;