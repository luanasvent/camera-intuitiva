# SmartCam AI — Diamond Eye

Landing page do **Diamond Eye / SmartCam AI**, uma câmera que analisa a cena em tempo real e ajusta ISO, exposição e foco automaticamente. Projeto acadêmico da FIAP.

A base do projeto (landing page em React e simulador) foi criada em grupo na Sprint 3. Na **Sprint 4**, foi evoluído com: estilização com Tailwind CSS, rotas públicas e privadas com React Router, consumo de API, login, hooks customizados, responsividade e deploy.

## Links

- **Deploy (Vercel):** https://smartcam-ai-five.vercel.app/
- **Repositório (Git):** https://github.com/luanasvent/camera-intuitiva

## Tecnologias utilizadas

- React (componentes funcionais, JavaScript puro, sem TypeScript)
- Vite
- Tailwind CSS
- React Router (rotas públicas e privadas)
- MockAPI (API mockada, em mockapi.io)
- Git e GitHub
- Vercel (deploy)

## Como instalar as dependências

É necessário ter o **Node.js 20 ou superior** instalado.

```bash
git clone https://github.com/luanasvent/camera-intuitiva.git
cd camera-intuitiva
npm install
```

## Como executar o projeto

```bash
npm run dev       # ambiente de desenvolvimento (abre em http://localhost:5173)
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Usuários e senhas de teste

O projeto tem login e uma rota privada (`/dashboard`).

| E-mail | Senha |
|---|---|
| teste@smartcam.com | 123456 |

Para testar:

1. Abrir `/dashboard` sem estar logado: o site redireciona para `/login`.
2. Entrar com o usuário acima: abre o painel com as fotos favoritas e o histórico do simulador.
3. Clicar em "Sair" no menu: volta para a página inicial e o painel volta a ser bloqueado.

As senhas ficam em texto puro na API mockada porque é um projeto de estudo. Em um sistema real, a senha seria guardada com hash no servidor.

## Rotas

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Landing page completa; o menu rola até cada seção |
| `/foto/:id` | Pública | Página de detalhe de uma foto da galeria |
| `/login` | Pública | Tela de login |
| `/dashboard` | **Privada** | Painel do usuário (protegida pelo componente `PrivateRoute`) |
| `*` | Pública | Página 404 |

## Requisitos da Sprint 4

| Requisito | Onde está |
|---|---|
| Componentização e props | `src/components/` (um componente por pasta, dados repassados por props de pai para filho) |
| Rotas públicas e privadas | `src/routes/AppRoutes.jsx` e `src/routes/PrivateRoute.jsx` |
| Hooks nativos | `useState`, `useEffect`, `useContext`, `useCallback`, `useMemo`, `useReducer`, `useId` |
| Hooks customizados (lógica separada da parte visual) | `src/hooks/`: `useFetch`, `useAuth`, `useFavorites`, `useModal`, `useSimulator`, `useLocalStorage` |
| Tailwind CSS | Todo o estilo está em classes do Tailwind; o tema (cores e fontes) fica em `src/styles/index.css` |
| Responsividade (Desktop, Tablet e Mobile) | Classes `sm:`, `md:` e `lg:`; menu hambúrguer abaixo de 1024px |
| Consumo de API | `src/services/api.js` e hook `useFetch` (MockAPI) |
| Deploy com Git + Vercel | Link no início deste README; `vercel.json` na raiz |

## API (MockAPI)

Endereço base: `https://6ad909e6f89c5702ed9a6074.mockapi.io/api/v1`

- `GET /photos` e `GET /photos/:id`: fotos da galeria, com modo, descrição, ISO, exposição e abertura
- `GET /users?email=...`: usado no login

Todas as chamadas ficam em `src/services/api.js`. As imagens das fotos ficam em `public/fotos`.

## Estrutura de pastas

```
src/
  components/   um componente por pasta (Hero, Solution, Gallery, Simulator, Header, Layout...)
  pages/        HomePage, PhotoPage, LoginPage, DashboardPage, NotFoundPage
  routes/       AppRoutes e PrivateRoute
  context/      AuthContext e AuthProvider (usuário logado)
  hooks/        hooks customizados
  services/     api.js (único arquivo que conhece o endereço da API)
  utils/        lógica pura, separada da UI (validação, análise de cena)
  data/         conteúdo estático das seções
  assets/       imagens, gifs e ícones
  styles/       index.css (Tailwind e tema)
public/fotos    imagens da galeria
prototipo/      versão original em HTML/CSS/JS puro, preservada para referência
vercel.json     regra para as rotas funcionarem no deploy
```

## localStorage

Usado em quatro pontos:

- **Inscrições** (`src/components/Layout/Layout.jsx`, chave `inscricoes`): nome, e-mail e telefone validados no cliente; e-mail duplicado é bloqueado.
- **Histórico do simulador** (`src/hooks/useSimulator.js`, chave `simulador-historico`): últimas 20 análises, com botão para limpar.
- **Favoritos da galeria** (`src/hooks/useFavorites.js`, chave `galeria-favoritos`).
- **Sessão do usuário** (`src/context/AuthProvider.jsx`, chave `sessao-usuario`): mantém o login depois de recarregar a página.

## Objeto Math

Toda a lógica de cálculo do simulador está isolada em `src/utils/analiseDeCena.js`:

- `Math.random()` sorteia o modo da cena (comida, retrato, paisagem, animal, noturno e baixa luz, definidos em `src/data/cenas.js`) e gera o código de captura.
- `Math.floor`, `Math.ceil`, `Math.round`, `Math.min`, `Math.max` e `Math.pow` calculam ISO, exposição, abertura e nível de confiança dentro das faixas de cada modo.
- `calcularEstatisticas()` calcula total de análises, modo mais frequente, ISO médio e percentual por modo, também com `Math.round`.

## Integrantes

Grupo Diamond eye: Luana Lopes Sventkauskas (RM 569643), Pollyana Valverde dos Santos (RM 569871) e João Fernando G. Senziani (RM 572144)