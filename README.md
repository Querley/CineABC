# 🎬 CineWeb

**CineWeb** é um sistema web para **gerenciamento de cinema**, desenvolvido com **Node.js, Express, EJS e PostgreSQL**. O projeto permite cadastrar filmes, salas, sessões, realizar vendas de ingressos e acompanhar estatísticas em um painel administrativo.

---

## 🔹 Funcionalidades

### ⚙️ Administração
* Cadastro, edição e remoção de **filmes**, **salas** e **sessões**.
* **Dashboard administrativo** com estatísticas:
    * Total de vendas
    * Vendas por filme com percentual
    * Sessão mais e menos ocupada

### 🎟️ Vendas
* Compra de ingressos online, com escolha de:
    * Sessão
    * Poltrona
    * Tipo de ingresso (**inteira/meia**)
* Comprovante de ingresso para **impressão**.
* Poltronas ocupadas são **bloqueadas automaticamente**.

### 👤 Usuário
* Navegação pelo **catálogo de filmes**.
* Visualização de **sessões disponíveis** e compra rápida de ingressos.

---

## 🔹 Tecnologias utilizadas

* **Node.js**
* **Express.js** (rotas e backend)
* **EJS** (templates dinâmicos)
* **PostgreSQL** (banco de dados)
* **Bootstrap 5** (estilo e UI responsiva)
* **Express-session** (autenticação simples para admin)

---

## 🔹 Estrutura do projeto

- CineWeb/
  - controllers/
    - VendasController.js
  - models/
    - Filme.js
    - Sala.js
    - Sessao.js
    - Venda.js
  - routes/
    - filmes.js
    - salas.js
    - sessoes.js
    - vendas.js
    - adm.js
  - views/
    - adm/
      - painel.ejs
    - dashboard/
      - index.ejs
    - filmes/
      - create.ejs
      - edit.ejs
      - list.ejs
    - salas/
    - sessoes/
    - vendas/
  - public/
    - css/ (estilos customizados)
  - server.js
  - package.json
---

## 🔹 Instalação

1.  Clonar o repositório
```
git clone [https://github.com/seu-usuario/cineweb.git](https://github.com/seu-usuario/cineweb.git)
cd cineweb
```

2.  Instalar as dependências

Abra o terminal ou prompt de comando e crie um banco vazio:
```
createdb -U postgres nomedobanco
```
Substitua nomedobanco pelo nome que você deseja dar ao banco.
postgres é o usuário padrão do PostgreSQL; se o seu projeto tiver outro usuário, use ele.

3.  Restaurar o dump
Em seguida, restaure o arquivo de dump fornecido no banco recém-criado:
```
PGPASSWORD='sua_senha' pg_restore -U postgres -d nomedobanco -v /caminho/para/backup_file.dump
```

- sua_senha → senha do usuário PostgreSQL.
- /caminho/para/backup_file.dump → caminho completo do arquivo de dump no computador.
- -v → modo verbose, para mostrar o progresso da restauração.

Ao final deste passo, todas as tabelas e dados estarão disponíveis no banco.

4.  Instalar dependências do Node.js

Certifique-se de que os arquivos package.json e package-lock.json estão no projeto. Então, instale as dependências:
```
npm install
```
Isso vai baixar todos os módulos necessários para o projeto funcionar corretamente.

5.  Rodar o projeto

Após instalar as dependências, inicie o servidor:
 ```
 npm run dev
 ```
O script dev deve estar configurado no package.json assim:
```
"scripts": {
  "dev": "nodemon server.js"
}
```
O servidor Node.js será iniciado, e você poderá acessar o sistema no navegador, geralmente em http://localhost:3000. O nodemon reinicia o servidor automaticamente sempre que há alterações no código.

### 🔑 Acesso Admin

| Campo | Valor |
| :--- | :--- |
| **Usuário** | `admin` |
| **Senha** | `1234` |
| **Acesso** | `http://localhost:3000/admin` |

---

## 🔹 Próximos recursos planejados

* Sistema de múltiplos usuários com **autenticação real**.
* Melhorias no fluxo de compra e UI da sala com **poltronas visuais**.
