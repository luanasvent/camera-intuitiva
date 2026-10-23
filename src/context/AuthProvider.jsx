import { useCallback, useMemo } from 'react';
import { AuthContext } from './AuthContext.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { api } from '../services/api.js';

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useLocalStorage('sessao-usuario', null);

  const login = useCallback(
    async (email, senha) => {
      const usuarioLogado = await api.login(email, senha);
      setUsuario(usuarioLogado);
    },
    [setUsuario]
  );

  const logout = useCallback(() => setUsuario(null), [setUsuario]);

  const value = useMemo(() => ({ usuario, login, logout }), [usuario, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}