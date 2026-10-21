const API_URL = 'https://6ad909e6f89c5702ed9a6074.mockapi.io/api/v1';

async function request(caminho) {
  const resposta = await fetch(`${API_URL}${caminho}`);

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os dados.');
  }

  return resposta.json();
}

export const api = {
  getFotos: () => request('/photos'),
  getFoto: (id) => request(`/photos/${id}`),
};