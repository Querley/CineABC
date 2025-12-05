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

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/seu-usuario/cineweb.git](https://github.com/seu-usuario/cineweb.git)
    cd cineweb
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Configure o banco de dados PostgreSQL e crie um arquivo **`.env`** na raiz do projeto com suas credenciais:

    ```ini
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_HOST=localhost
    DB_NAME=cineweb
    ```

4.  Rode o servidor:

    ```bash
    node server.js
    ```

5.  Acesse no navegador:

    ```
    http://localhost:3000
    ```

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
