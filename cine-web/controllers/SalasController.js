import Sala from "../models/Sala.js";

const SalasController = {
    async index(req, res) {
        const salas = await Sala.getAll();
        res.render("salas/list", { salas });
    },

    async createForm(req, res) {
        res.render("salas/create");
    },

    async create(req, res) {
        await Sala.insert(req.body);
        res.redirect("/salas");
    },

    async editForm(req, res) {
        const sala = await Sala.getById(req.params.id);
        res.render("salas/edit", { sala });
    },

    async edit(req, res) {
        await Sala.update(req.params.id, req.body);
        res.redirect("/salas");
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            await Sala.delete(id);
            res.redirect("/salas");
        } catch (error) {
            if (error.code === "23503") {
                return res.send("Não é possível deletar esta sala. Existem sessões vinculadas.");
            }
            res.status(500).send("Erro ao deletar a sala: " + error.message);
        }
    }
};

export default SalasController;
