# 🎬 CineWeb

**CineWeb** é um sistema web para **gerenciamento de cinema**, desenvolvido com **Node.js**, **Express**, **EJS** e **PostgreSQL**. O projeto permite cadastrar filmes, salas e sessões, realizar vendas de ingressos e acompanhar estatísticas em um painel administrativo.

---

## 🔹 Funcionalidades

### ⚙️ Administração
* **Cadastro, edição e remoção** de filmes, salas e sessões.
* **Dashboard administrativo** com estatísticas:
	* Total de vendas
	* Vendas por filme (com percentual)
	* Sessão mais e menos ocupada

### 🎟️ Vendas
* **Compra de ingressos online**, com escolha de:
	* Sessão
	* Poltrona
	* Tipo de ingresso (**inteira/meia**)
* Comprovante de ingresso para **impressão**.
* **Poltronas ocupadas são bloqueadas automaticamente**.

### 👤 Usuário
* Navegação pelo **catálogo de filmes**.
* Visualização de **sessões disponíveis** e **compra rápida** de ingressos.

---

## 🔹 Tecnologias utilizadas

* **Node.js**
* **Express.js** (rotas e backend)
* **EJS** (templates dinâmicos)
* **PostgreSQL** (banco de dados)
* **Bootstrap 5** (UI responsiva)
* **Express-session** (autenticação simples para admin)

---

## 🔹 Estrutura do projeto
```
CineWeb/
│
├─ controllers/
│   └─ VendasController.js
│
├─ models/
│   ├─ Filme.js
│   ├─ Sala.js
│   ├─ Sessao.js
│   └─ Venda.js
│
├─ routes/
│   ├─ filmes.js
│   ├─ salas.js
│   ├─ sessoes.js
│   ├─ vendas.js
│   └─ adm.js
│
├─ views/
│   ├─ adm/
│   │   └─ painel.ejs
│   ├─ dashboard/
│   │   └─ index.ejs
│   ├─ filmes/
│   │   ├─ create.ejs
│   │   ├─ edit.ejs
│   │   └─ list.ejs
│   ├─ salas/
│   ├─ sessoes/
│   └─ vendas/
│
├─ public/
│   └─ css/ (estilos customizados)
│
├─ server.js
└─ package.json
```
---

## 🔹 Instalação

### 1️⃣ Clonar o repositório

```
git clone https://github.com/Querley/CineABC.git
```

### 2️⃣ Configurar o banco de dados
* Você pode usar qualquer nome, usuário e senha.
* Lembre-se de atualizar **`.env`**, **`db.js`** e **`server.js`** para refletir os valores do seu banco.
* No aplicativo de sua escolha (pgAdmin, DBeaver, etc.), execute o conteúdo do `sql/seed.sql` para popular o banco com dados de teste.

### 3️⃣ Instalar dependências do Node.js

```
npm install
```

Isso vai baixar todos os módulos necessários para o projeto funcionar corretamente.

### 4️⃣ Rodar o projeto

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
O servidor será iniciado e você poderá acessar o sistema no navegador em http://localhost:3000. O nodemon reinicia o servidor automaticamente sempre que há alterações no código.

---
### 🔑 Acesso Admin
| Campo       | Valor                         |
|:------------|:------------------------------|
| **Usuário** | `admin`                       |
| **Senha**   | `1234`                        |
| **Acesso**  | `http://localhost:3000/admin` |

---

## 🔹 Próximos recursos planejados

* Sistema de múltiplos usuários com **autenticação real**.
* Melhorias no fluxo de compra e UI da sala com **poltronas visuais**.
* Implementar **upload de imagens** diretamente na tela de cadastro de filmes, permitindo que o administrador selecione e envie a imagem do filme ao criar ou editar um registro.
