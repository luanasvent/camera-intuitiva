const API_URL = 'https://6ad909e6f89c5702ed9a6074.mockapi.io/api/v1';

async function request(caminho) {
  const resposta = await fetch(`${API_URL}${caminho}`);

  if (!resposta.ok) {
    const erro = new Error('Não foi possível carregar os dados.');
    erro.status = resposta.status;
    throw erro;
  }

  return resposta.json();
}

export const api = {
  getFotos: () => request('/photos'),
  getFoto: (id) => request(`/photos/${id}`),

  async login(email, senha) {
    let usuarios = [];

    try {
      usuarios = await request(`/users?email=${encodeURIComponent(email)}`);
    } catch (erro) {
      if (erro.status !== 404) throw erro;
    }

    const usuario = usuarios.find(
      (item) => item.email.toLowerCase() === email.toLowerCase() && item.senha === senha
    );

    if (!usuario) {
      throw new Error('E-mail ou senha incorretos.');
    }

    return { id: usuario.id, nome: usuario.nome, email: usuario.email };
  },
};