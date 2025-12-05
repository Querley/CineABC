import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Filme from "./models/Filme.js";
import filmesRoutes from "./routes/filmes.js";
import salasRoutes from "./routes/salas.js";
import sessoesRoutes from "./routes/sessoes.js";
import vendasRoutes from "./routes/vendas.js";
import dashboardRoutes from "./routes/dashboard.js";
import admRoutes from "./routes/adm.js"; // importe o router de administração
import session from "express-session";


dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(session({
    secret: "cineweb_secret",
    resave: false,
    saveUninitialized: true
}));

app.use("/filmes", filmesRoutes);
app.use("/salas", salasRoutes);
app.use("/sessoes", sessoesRoutes);
app.use("/vendas", vendasRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/adm", admRoutes);

app.get("/", async (req, res) => {
    const filmes = await Filme.getAll();
    res.render("home", { filmes });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
