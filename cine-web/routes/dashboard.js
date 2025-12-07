import express from "express";
import DashboardController from "../controllers/DashboardController.js";

const router = express.Router();

// Rota GET: exibe o dashboard de estatísticas
router.get("/", DashboardController.index);

export default router;
