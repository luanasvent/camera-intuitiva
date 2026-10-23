import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Modal from '../Modal/Modal.jsx';
import AlertSuccess from '../AlertSuccess/AlertSuccess.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import { useModal } from '../../hooks/useModal.js';

function Layout() {
  const [inscricoes, setInscricoes] = useLocalStorage('inscricoes', []);
  const modalInscricao = useModal();
  const alertaSucesso = useModal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  function inscrever(dados) {
    setInscricoes((atual) => [...atual, dados]);
    alertaSucesso.abrir();
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 bg-black">
        <Outlet
          context={{
            abrirModal: modalInscricao.abrir,
            totalInscritos: inscricoes.length,
          }}
        />
      </main>

      <Footer />

      <Modal
        aberto={modalInscricao.aberto}
        inscricoes={inscricoes}
        aoFechar={modalInscricao.fechar}
        aoInscrever={inscrever}
      />
      <AlertSuccess aberto={alertaSucesso.aberto} aoFechar={alertaSucesso.fechar} />
    </div>
  );
}

export default Layout;