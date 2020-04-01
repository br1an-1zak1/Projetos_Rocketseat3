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
