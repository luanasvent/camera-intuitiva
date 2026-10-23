import { useEffect, useMemo, useReducer } from 'react';
import { analisarCena, calcularEstatisticas } from '../utils/analiseDeCena.js';

const CHAVE_HISTORICO = 'simulador-historico';
const LIMITE_HISTORICO = 20;

function lerHistorico() {
  try {
    const salvo = window.localStorage.getItem(CHAVE_HISTORICO);
    return salvo ? JSON.parse(salvo) : [];
  } catch {
    return [];
  }
}

function iniciarEstado() {
  return { resultadoAtual: null, historico: lerHistorico() };
}

function simuladorReducer(estado, acao) {
  switch (acao.tipo) {
    case 'analisar':
      return {
        resultadoAtual: acao.resultado,
        historico: [acao.resultado, ...estado.historico].slice(0, LIMITE_HISTORICO),
      };
    case 'limpar_historico':
      return { ...estado, historico: [] };
    default:
      return estado;
  }
}

export function useSimulator() {
  const [estado, dispatch] = useReducer(simuladorReducer, undefined, iniciarEstado);

  useEffect(() => {
    window.localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(estado.historico));
  }, [estado.historico]);

  const estatisticas = useMemo(
    () => calcularEstatisticas(estado.historico),
    [estado.historico]
  );

  return {
    resultadoAtual: estado.resultadoAtual,
    historico: estado.historico,
    estatisticas,
    analisar: () => dispatch({ tipo: 'analisar', resultado: analisarCena() }),
    limparHistorico: () => dispatch({ tipo: 'limpar_historico' }),
  };
}