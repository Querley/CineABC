import express from "express";
import SessoesController from "../controllers/SessoesController.js";

const router = express.Router();

// Rota GET: lista todas as sessões
router.get("/", SessoesController.index);

// Rotas para criação de sessão
router.get("/create", SessoesController.createForm); // Formulário de cadastro
router.post("/create", SessoesController.create);    // Processa o cadastro

// Rotas para edição de sessão
router.get("/edit/:id", SessoesController.editForm); // Formulário de edição
router.post("/edit/:id", SessoesController.edit);    // Processa a edição

// Rota POST: deleta uma sessão
router.post("/delete/:id", SessoesController.delete);

export default router;
