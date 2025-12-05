import express from "express";
import SalasController from "../controllers/SalasController.js";

const router = express.Router();

router.get("/", SalasController.index);
router.get("/create", SalasController.createForm);
router.post("/create", SalasController.create);

router.get("/edit/:id", SalasController.editForm);
router.post("/edit/:id", SalasController.edit);

router.post("/delete/:id", SalasController.delete);

export default router;
