# Movie Explorer App 🎬📽️

Este é um aplicativo simples construído com Next.js que permite pesquisar informações sobre filmes utilizando a API do TMDB (The Movie Database). Além da pesquisa, o aplicativo também oferece acesso a diversas categorias de filmes, como os mais populares, os mais votados, os que estão sendo lançados e os que estão em cartaz.


https://github.com/MarcosvBueno/react-movie-explore/assets/104960654/8783495e-6fa6-43ef-a586-12c55f85b6cc


## Recursos

### Pesquisa de Filmes
- Utiliza a API do TMDB para buscar informações sobre filmes.

### Categorias de Filmes
- Os filmes mais populares.
- Os filmes mais votados.
- Os filmes que estão sendo lançados.
- Os filmes que estão nos cartazes.

## Índice
- [Começando](#começando)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Recursos](#recursos)
- [Uso](#uso)

### Começando

Siga estas instruções para configurar o projeto em sua máquina local.

#### Pré-requisitos
Certifique-se de que você tenha o seguinte instalado:
- Node.js (versão 14 ou superior)
- npm ou yarn
- Conta no TMDB para a chave da API (você pode obter uma [aqui](https://www.themoviedb.org/documentation/api))

#### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-nome-de-usuário/movie-search-app.git
2. Navegue até o diretório do projeto:
  ```bash
  cd movie-search-app
```
3. Instale as dependências usando npm ou yarn:
```bash
npm install
# ou
yarn install
```
#### Configuração
1. Renomeie o arquivo .env.example para .env.local e atualize a variável de ambiente:
   ```bash
   REACT_APP_TMDB_API_KEY=sua_chave_da_api_do_tmdb
    ```

## Uso

1. Certifique-se de ter configurado a chave da API do TMDB no arquivo `.env.local`.
2. Execute o aplicativo:
   ```bash
   npm run dev
   # ou
   yarn dev
    ```
3. Abra seu navegador e acesse http://localhost:3000 para começar a usar o aplicativo de pesquisa de filmes.
Divirta-se explorando e descobrindo informações sobre seus filmes favoritos!

