# Trophy Manager

Trophy Manager é uma aplicação web que permite aos usuários adicionar, gerenciar e acompanhar a conquista de troféus em jogos. A aplicação oferece funcionalidades de busca, filtro, ordenação e visualização de dados em forma de gráfico.
**Acesse o projeto pelo navegador:** [Trophy Collector Website](https://trophy-collector-website.vercel.app/)

## Funcionalidades

- **Adicionar troféus** com informações como nome do jogo, título, descrição e categoria.
- **Marcar troféus como concluídos**.
- **Editar troféus** já cadastrados.
- **Remover troféus** da lista.
- **Buscar troféus** pelo nome do jogo.
- **Filtrar por status** (Todos, Concluídos, Incompletos).
- **Ordenar alfabeticamente** (Ascendente ou Descendente).
- **Exibir dados em formato de gráfico**.

## Tecnologias Utilizadas

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="40" height="40"/> Biblioteca para construção da interface de usuário.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width="40" height="40"/> Linguagem de programação.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" width="40" height="40"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width="40" height="40"/> Estrutura e estilização da interface.
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" width="40" height="40"/> - Biblioteca de ícones.


## Estrutura do Projeto
```
trophy-manager
│-- src
│   │-- components
│   │   │-- TrophySearch.js  # Componente de busca
│   │   │-- TrophyFilter.js  # Componente de filtro e ordenação
│   │   │-- TrophyList.js    # Renderiza a lista de troféus
│   │   │-- TrophyForm.js    # Formulário de adição/edição
│   │   │-- TrophyChart.js   # Gráfico de progresso
│   │-- styles
│   │   │-- styles.css       # Estilos globais
│   │-- App.js               # Componente principal
│   │-- index.js             # Ponto de entrada do React
│-- package.json             # Dependências e scripts do projeto
│-- README.md                # Documentação do projeto
```

##  Instalação e Uso
### 1 - Clone o repositório:
```sh
git clone https://github.com/seu-usuario/trophy-manager.git
cd trophy-manager
```
### 2 - Instale as dependências:
```sh
npm install
```
### 3 - Inicie o servidor de desenvolvimento:
```sh
npm start
```
A aplicação estará disponível em `http://localhost:5173/`.



## Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---


