import express from "express";

const router = express.Router();

// usuário e senha fixos
const USER = "admin";
const PASS = "1234";

// GET login
router.get("/login", (req, res) => {
    res.render("adm/login");
});

// POST login
router.post("/login", (req, res) => {
    const { user, password } = req.body;
    if(user === USER && password === PASS){
        // criar sessão simples
        req.session.isAdmin = true;
        res.redirect("/adm");
    } else {
        res.send("Usuário ou senha incorretos");
    }
});

// GET painel admin
router.get("/", (req, res) => {
    if(!req.session.isAdmin) return res.redirect("/adm/login");
    res.render("adm/painel");
});

export default router;
