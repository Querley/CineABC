import express from "express";
import SalasController from "../controllers/SalasController.js";

const router = express.Router();

// Rota GET: lista todas as salas
router.get("/", SalasController.index);

// Rotas para criação de sala
router.get("/create", SalasController.createForm); // Formulário de cadastro
router.post("/create", SalasController.create);    // Processa o cadastro

// Rotas para edição de sala
router.get("/edit/:id", SalasController.editForm); // Formulário de edição
router.post("/edit/:id", SalasController.edit);    // Processa a edição

// Rota POST: deleta uma sala
router.post("/delete/:id", SalasController.delete);

export default router;
