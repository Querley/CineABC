import express from "express";
import VendasController from "../controllers/VendasController.js";

const router = express.Router();

// lista vendas (admin/relatório)
router.get("/", VendasController.index);

// form de compra
router.get("/create", VendasController.createForm);

// retorna poltronas ocupadas via JSON
router.get("/poltronas/:sessao_id", VendasController.poltronas);

// comprovante de compra
router.get("/comprovante/:id", VendasController.comprovante);

// cria venda
router.post("/create", VendasController.create);

export default router;
