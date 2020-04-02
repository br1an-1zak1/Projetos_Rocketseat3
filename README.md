# Anotações

#  Back-End
### Rota

 *rota - todo o link*

*recurso - é o que vem após a barra no link, ele redireciona para um arquivo novo*

### Protocolos HTTP

*Sempre que o browser requisita uma página ele utilizao método GET, ou seja só será visível no browser quando é utilizado um método get. Caso queira ver os dados de outros métodos precisa usar algum app para retorno de requisições (postman, insomnia)*

### Métodos HTTP

*Métodos HTTP*

 *GET: buscar uma info do back-end*

 *POST: Criar uma info no back-end*

 *PUT - Alterar uma info no back-end*

 *DELETE: Deletar uma infoo no back-end*

### Tipos de Parâmetros

**Query Params** : parâmetros nomeados enviados na rota após a "?" ,  geralmente são utilizados para "Filtros, paginação, etc"

**Route Params:** Parâmetros utilizados para identificar recursos, ele busca por dados específicos, geralmente é passado um id ("/users/:id"), esta forma vc apenas passa valores no recurso sem a necessidade de fazer um "chave-valor" 

**Request Body**:  corpo da requisição, dados quando são enviados

### Bancos de dados

**SQL:** MySQL, PostgreSQL, Oracle

**NoSQL**: MongoDB, CouchSQL, etc

**Maneiras de comunicação com o banco de dados**

Driver: Maneira de comunicar com um determinado BD Ex: SELECT * FROM TABLE

Query Builder: esta maneira permite comunicar escrever código SQL universal, Ex: table("tabela").select(" * " ).where() ****

**Utilizando a lib KNEX para interagir com o SQLite**
no projeto está sendo utilizado a lib do KNEX.js

**[library do knex](http://knexjs.org/#Schema-createTable)**

criar a estrutura de pasta e organizar o caminho dos arquivos 

- utilizar o comando **npx knex init** para criar a pasta "migrations" (nela vai estar os comandos DDL da aplicação)

necessário utilizar **npx knex** para executar os comandos

Comandos básicos:

- migrate:latest - comando para dar o commit
- migrate:status - verifica todos os latest executados
- migrate:rollback - cancela o último latest executado

# Front-End
> Utilizado o comando *npx create-react-app [nome do app]*

### Conceitos do React

**Componente** - é uma função que retorna HTML. 

**JSX** - HTML dentro de um arquivo JS.

**Propriedades no React** - Possui semelhança com os atributos no HTML; eles são passados como parâmetros  para o componente caso queira customizar ele. Porém é necessário que no componente esteja com a propriedade utilizando.

dentro do JSX precisa utilizar (Chaves)  *`{ código JS }`* para que seja executado o JS.

**Estado** - Assemelha com variável.  Com a diferença de que uma variável comum no react não seria renderizada caso seja atualizada, mas o estado atualiza a renderização. e é gerenciado de dentro do componente [Docs sobre State](https://pt-br.reactjs.org/docs/faq-state.html)

é utilizado a função: *useState(* valorInicial *) ⇒ Array[* valorAtual *,* callBackDeAtualização *]*

**Imutabilidade** - Por performance não alterar os dados de um *Estado,* para isso faz uma sobreposição

---

### Rotas com o React

Baixar o package `react-router-dom`

com esta lib, é possível utilizar métodos de rotas e comportamento SPAs;

Utilizado importações do router:

- **switch** - vai permitir que apenas uma rota seja executada por momento.
- **route** - ele possui propriedades de path(caminho da rota) e component(nome do componente)
- **exact** - o react verifica qual path está sendo passado, mas faz verificação de caracter, logo, o primeiro que ter correspondência ele não dá continuidade no resto. Para que ele continue verificando é necessário utilizar o **exact**
- **{Link}** **link** - ele faz com que vá para uma rota diferente sem a necessidade de fazer reload da página.
- {**useHistory} history.push** - no parâmetro é passado o path de outra página.

[Docs do Router](https://reacttraining.com/react-router/web/guides/quick-start)

---

### Utilizado axios

Utilizado o comando `npm install axios` 

- foi criado uma pasta services dentro do src para que possa armazenar os arquivos externos da aplicação.

no arquivo api.js foi exportado uma variavel que deu inicio ao axios, nele foi passado a propriedade baseURL como o caminho do local:porta

---

> Quando o gerenciador de pacotes ter algum erro, primeiramente deve excluir a pasta node_modules e o arquivo package-lock.json (***não pode excluir o package.json***) dps deve executar o comando npm install (ele vai baixar as dependencias descritas no package.json).
