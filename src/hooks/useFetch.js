import { useCallback, useEffect, useState } from 'react';

export function useFetch(buscar) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregar = useCallback(() => {
    let ativo = true;

    setCarregando(true);
    setErro(null);

    buscar()
      .then((resultado) => ativo && setDados(resultado))
      .catch((e) => ativo && setErro(e.message || 'Erro ao carregar os dados.'))
      .finally(() => ativo && setCarregando(false));

    return () => {
      ativo = false;
    };
  }, [buscar]);

  useEffect(() => carregar(), [carregar]);

  return { dados, carregando, erro, recarregar: carregar };
}