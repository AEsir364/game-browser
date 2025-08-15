# Game Browser 🎮

Game Browser é uma aplicação web para a descoberta de jogos *free-to-play*. O projeto consome a [FreeToGame API](https://www.freetogame.com/api-doc) para exibir, filtrar e pesquisar jogos, oferecendo uma interface para exploração de títulos gratuitos.

*(Sugestão: grave um GIF da tela do seu aplicativo e substitua o link acima.)*

## Funcionalidades

  - **Listagem de Jogos:** A lista de jogos é carregada dinamicamente a partir da API.
  - **Paginação:** A interface inclui um sistema de paginação para navegar entre os resultados.
  - **Filtro por Gênero:** Permite a filtragem da lista de jogos por gênero através de rotas dinâmicas.
  - **Busca:** Funcionalidade de busca para encontrar jogos por nome.
  - **Página de Detalhes:** Rota dedicada para exibir informações detalhadas de cada jogo.
  - **Página de Favoritos:** Seção com uma lista pré-definida de jogos selecionados.
  - **Gerenciamento de Estado:** Utiliza a Context API do React para centralizar o estado dos jogos e otimizar as requisições.

## Tecnologias Utilizadas

  - **React.js**: Biblioteca utilizada para a construção da interface de usuário.
  - **React Router**: Para o gerenciamento de rotas da aplicação.
  - **Axios**: Cliente HTTP para realizar as requisições à API.
  - **CSS Modules**: Para a estilização escopada de componentes.

## Como Rodar o Projeto Localmente

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

  - Node.js (versão 16 ou superior)
  - npm ou yarn

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone https://URL-DO-SEU-REPOSITORIO.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

5.  Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador.

## Fonte de Dados (API)

A fonte de dados para este projeto é a **FreeToGame API**. Conforme os termos de uso da API, é necessária a atribuição da fonte dos dados para [FreeToGame.com](https://www.freetogame.com).
