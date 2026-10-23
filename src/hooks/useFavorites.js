import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export function useFavorites() {
  const [favoritos, setFavoritos] = useLocalStorage('galeria-favoritos', []);

  const alternarFavorito = useCallback(
    (id) => {
      setFavoritos((atual) =>
        atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
      );
    },
    [setFavoritos]
  );

  const ehFavorito = useCallback((id) => favoritos.includes(id), [favoritos]);

  return { favoritos, alternarFavorito, ehFavorito };
}