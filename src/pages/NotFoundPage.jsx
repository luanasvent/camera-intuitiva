import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-surface px-5 py-20 text-center">
      <span className="text-7xl font-extrabold text-gold">404</span>
      <h1 className="text-3xl font-extrabold text-white">Página não encontrada</h1>
      <p className="max-w-md text-gray-400">
        O endereço que você tentou abrir não existe ou foi movido.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#7C3AED,#2563EB)] px-7.5 py-4.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
      >
        Voltar para o início
      </Link>
    </section>
  );
}

export default NotFoundPage;