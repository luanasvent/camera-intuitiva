import { useState } from 'react';
import FormField from './FormField.jsx';
import xIcon from '../../assets/icons/x.svg';
import { validarFormulario, validarEmail } from '../../utils/validacao.js';

const formularioVazio = { nome: '', email: '', telefone: '' };

function Modal({ aberto, inscricoes, aoFechar, aoInscrever }) {
  const [dados, setDados] = useState(formularioVazio);
  const [erros, setErros] = useState({});

  function fechar() {
    setDados(formularioVazio);
    setErros({});
    aoFechar();
  }

  function validarCampo(campo, valor) {
    const errosAtuais = validarFormulario({ ...dados, [campo]: valor });
    setErros((atual) => ({ ...atual, [campo]: errosAtuais[campo] }));
  }

  function enviar(event) {
    event.preventDefault();

    const errosForm = validarFormulario(dados);

    const emailJaCadastrado = validarEmail(dados.email.trim())
      && inscricoes.some((inscrito) => inscrito.email.toLowerCase() === dados.email.trim().toLowerCase());

    if (emailJaCadastrado) {
      errosForm.email = 'Este email já está cadastrado';
    }

    if (Object.keys(errosForm).length > 0) {
      setErros(errosForm);
      return;
    }

    aoInscrever({ nome: dados.nome.trim(), email: dados.email.trim(), telefone: dados.telefone.trim() });
    fechar();
  }

  return (
    <div
      className={`fixed inset-0 z-[1000] items-center justify-center bg-black/80 ${aberto ? 'flex' : 'hidden'}`}
      onClick={(event) => event.target === event.currentTarget && fechar()}
    >
      <div className="max-h-[90vh] w-[90%] max-w-md overflow-y-auto rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#0f172b_0%,#1d293d_100%)] p-6 shadow-[0_25px_43.75px_rgba(0,0,0,0.25)] md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white md:text-2xl">Se inscrever</h2>
          <button
            type="button"
            className="flex cursor-pointer items-center justify-center p-2"
            aria-label="Fechar modal"
            onClick={fechar}
          >
            <img src={xIcon} alt="" />
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={enviar}>
          <FormField
            label="Nome completo"
            tipo="text"
            placeholder="Seu nome"
            valor={dados.nome}
            erro={erros.nome}
            aoAlterar={(valor) => setDados((atual) => ({ ...atual, nome: valor }))}
            aoSairDoFoco={() => validarCampo('nome', dados.nome)}
          />

          <FormField
            label="Email"
            tipo="email"
            placeholder="seu.email@exemplo.com"
            valor={dados.email}
            erro={erros.email}
            aoAlterar={(valor) => setDados((atual) => ({ ...atual, email: valor }))}
            aoSairDoFoco={() => validarCampo('email', dados.email)}
          />

          <FormField
            label="Telefone"
            tipo="tel"
            placeholder="+55 (11) 99999-9999"
            valor={dados.telefone}
            erro={erros.telefone}
            aoAlterar={(valor) => setDados((atual) => ({ ...atual, telefone: valor }))}
            aoSairDoFoco={() => validarCampo('telefone', dados.telefone)}
          />

          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-[0.875rem] bg-[linear-gradient(90deg,#9810fa,#155dfc)] px-6 py-3 text-base font-bold text-white shadow-[0_8px_21.875px_rgba(0,0,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_31.875px_rgba(0,0,0,0.35)] md:px-8 md:py-4 md:text-lg"
          >
            Enviar
          </button>

          <p className="text-center text-xs leading-normal text-white/40">
            Ao se cadastrar, você concorda em receber comunicações sobre produtos e ofertas.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Modal;