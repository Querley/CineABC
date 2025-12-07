import express from "express";

const router = express.Router();

// Usuário e senha fixos para login administrativo
const USER = "admin";
const PASS = "1234";

// Rota GET: exibe a página de login
router.get("/login", (req, res) => {
    res.render("adm/login");
});

// Rota POST: processa o login
router.post("/login", (req, res) => {
    const { user, password } = req.body;

    if (user === USER && password === PASS) {
        // Cria uma sessão simples para o admin
        req.session.isAdmin = true;
        res.redirect("/adm");
    } else {
        // Login inválido
        res.send("Usuário ou senha incorretos");
    }
});

// Rota GET: exibe o painel administrativo
router.get("/", (req, res) => {
    // Verifica se o usuário está logado como admin
    if (!req.session.isAdmin) return res.redirect("/adm/login");

    res.render("adm/painel");
});

export default router;
