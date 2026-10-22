function ErrorMessage({ mensagem, aoTentarNovamente }) {
  return (
    <div
      className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-lg border border-error/40 bg-error/10 p-6 text-center"
      role="alert"
    >
      <p className="text-error">{mensagem}</p>

      {aoTentarNovamente && (
        <button
          type="button"
          className="cursor-pointer rounded-full border border-error px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-error/20"
          onClick={aoTentarNovamente}
        >
          Tentar de novo
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;