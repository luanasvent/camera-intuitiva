import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import FormField from '../components/Modal/FormField.jsx';
import Button from '../components/Button/Button.jsx';
import { useAuth } from '../hooks/useAuth.js';

function LoginPage() {
  const { usuario, login } = useAuth();
  const location = useLocation();
  const destino = location.state?.de ?? '/dashboard';

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  if (usuario) {
    return <Navigate to={destino} replace />;
  }

  async function enviar(event) {
    event.preventDefault();

    if (!email.trim() || !senha) {
      setErro('Preencha e-mail e senha.');
      return;
    }

    setEnviando(true);
    setErro('');

    try {
      await login(email.trim(), senha);
    } catch (e) {
      setErro(e.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-midnight px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#0f172b_0%,#1d293d_100%)] p-6 shadow-[0_25px_43.75px_rgba(0,0,0,0.25)] md:p-8">
        <h1 className="mb-2 text-center text-3xl font-extrabold text-white">Entrar</h1>
        <p className="mb-6 text-center text-sm text-gray-400">
          Acesse o seu painel com o seu usuário.
        </p>

        <form className="flex flex-col gap-4" onSubmit={enviar}>
          <FormField
            label="E-mail"
            tipo="email"
            placeholder="teste@smartcam.com"
            valor={email}
            aoAlterar={setEmail}
          />

          <FormField
            label="Senha"
            tipo="password"
            placeholder="Sua senha"
            valor={senha}
            aoAlterar={setSenha}
          />

          {erro && (
            <p role="alert" className="text-sm text-error">
              {erro}
            </p>
          )}

          <div className="mt-2 flex justify-center">
            <Button type="submit" disabled={enviando}>
              {enviando ? 'Entrando...' : 'Entrar'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;