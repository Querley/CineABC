// Importações de pacotes externos
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import session from "express-session";

// Importações de modelos e rotas internas
import Filme from "./models/Filme.js";
import filmesRoutes from "./routes/filmes.js";
import salasRoutes from "./routes/salas.js";
import sessoesRoutes from "./routes/sessoes.js";
import vendasRoutes from "./routes/vendas.js";
import dashboardRoutes from "./routes/dashboard.js";
import admRoutes from "./routes/adm.js"; // Rotas da área administrativa

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = 3000;

// Configuração para interpretar dados enviados por formulários (POST)
app.use(bodyParser.urlencoded({ extended: true }));

// Arquivos estáticos (CSS, imagens, JS do frontend)
app.use(express.static("public"));

// Define o template engine como EJS
app.set("view engine", "ejs");

// Configura a sessão da aplicação
app.use(
    session({
        secret: "cineweb_secret", // chave usada para assinar a sessão
        resave: false,            // evita salvar sessão sem necessidade
        saveUninitialized: true   // salva sessões novas mesmo sem dados
    })
);

// Rotas principais do sistema
app.use("/filmes", filmesRoutes);
app.use("/salas", salasRoutes);
app.use("/sessoes", sessoesRoutes);
app.use("/vendas", vendasRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/adm", admRoutes);

// Rota inicial — exibe a página home com todos os filmes cadastrados
app.get("/", async (req, res) => {
    const filmes = await Filme.getAll(); // busca todos os filmes no banco
    res.render("home", { filmes });      // renderiza a view passando os filmes
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
