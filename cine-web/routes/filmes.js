import express from "express";
import FilmesController from "../controllers/FilmesController.js";

const router = express.Router();

router.get("/", FilmesController.index);
router.get("/create", FilmesController.createForm);
router.post("/create", FilmesController.create);

router.get("/edit/:id", FilmesController.editForm);
router.post("/edit/:id", FilmesController.edit);

router.post("/delete/:id", FilmesController.delete);

export default router;
