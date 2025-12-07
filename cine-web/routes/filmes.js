import express from "express";
import FilmesController from "../controllers/FilmesController.js";

const router = express.Router();

// Rota GET: lista todos os filmes
router.get("/", FilmesController.index);

// Rotas para criação de filme
router.get("/create", FilmesController.createForm); // Formulário de cadastro
router.post("/create", FilmesController.create);    // Processa o cadastro

// Rotas para edição de filme
router.get("/edit/:id", FilmesController.editForm); // Formulário de edição
router.post("/edit/:id", FilmesController.edit);    // Processa a edição

// Rota POST: deleta um filme
router.post("/delete/:id", FilmesController.delete);

export default router;
