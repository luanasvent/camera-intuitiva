import { useCallback, useState } from 'react';

export function useModal(abertoInicial = false) {
  const [aberto, setAberto] = useState(abertoInicial);

  const abrir = useCallback(() => setAberto(true), []);
  const fechar = useCallback(() => setAberto(false), []);
  const alternar = useCallback(() => setAberto((atual) => !atual), []);

  return { aberto, abrir, fechar, alternar };
}