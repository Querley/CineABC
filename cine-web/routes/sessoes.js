import express from "express";
import SessoesController from "../controllers/SessoesController.js";

const router = express.Router();

router.get("/", SessoesController.index);
router.get("/create", SessoesController.createForm);
router.post("/create", SessoesController.create);

router.get("/edit/:id", SessoesController.editForm);
router.post("/edit/:id", SessoesController.edit);

router.post("/delete/:id", SessoesController.delete);

export default router;
