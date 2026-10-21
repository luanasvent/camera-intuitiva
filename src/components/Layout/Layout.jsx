import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Modal from '../Modal/Modal.jsx';
import AlertSuccess from '../AlertSuccess/AlertSuccess.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

function Layout() {
  const [inscricoes, setInscricoes] = useLocalStorage('inscricoes', []);
  const [modalAberto, setModalAberto] = useState(false);
  const [alertaAberto, setAlertaAberto] = useState(false);
  const location = useLocation();

  // rola até a seção do link (#team, por exemplo) ou volta ao topo
  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  function inscrever(dados) {
    setInscricoes((atual) => [...atual, dados]);
    setAlertaAberto(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />

      <main className="mx-auto w-full max-w-[1920px] flex-1 bg-black">
        <Outlet
          context={{
            abrirModal: () => setModalAberto(true),
            totalInscritos: inscricoes.length,
          }}
        />
      </main>

      <Footer />

      <Modal
        aberto={modalAberto}
        inscricoes={inscricoes}
        aoFechar={() => setModalAberto(false)}
        aoInscrever={inscrever}
      />
      <AlertSuccess aberto={alertaAberto} aoFechar={() => setAlertaAberto(false)} />
    </div>
  );
}

export default Layout;