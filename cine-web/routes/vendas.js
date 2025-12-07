import express from "express";
import VendasController from "../controllers/VendasController.js";

const router = express.Router();

// Rota GET: lista todas as vendas (painel administrativo / relatório)
router.get("/", VendasController.index);

// Rota GET: formulário de compra de ingresso
router.get("/create", VendasController.createForm);

// Rota GET: retorna poltronas ocupadas de uma sessão em JSON
router.get("/poltronas/:sessao_id", VendasController.poltronas);

// Rota GET: exibe o comprovante de uma venda
router.get("/comprovante/:id", VendasController.comprovante);

// Rota POST: cria uma nova venda
router.post("/create", VendasController.create);

export default router;
