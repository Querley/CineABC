import Sessao from "../models/Sessao.js";
import Filme from "../models/Filme.js";
import Sala from "../models/Sala.js";

const SessoesController = {
    async index(req, res) {
        const sessoes = await Sessao.getAll();
        res.render("sessoes/list", { sessoes });
    },

    async createForm(req, res) {
        const filmes = await Filme.getAll();
        const salas = await Sala.getAll();
        res.render("sessoes/create", { filmes, salas });
    },

    async create(req, res) {
        await Sessao.insert(req.body);
        res.redirect("/sessoes");
    },

    async editForm(req, res) {
        const sessao = await Sessao.getById(req.params.id);
        const filmes = await Filme.getAll();
        const salas = await Sala.getAll();
        res.render("sessoes/edit", { sessao, filmes, salas });
    },

    async edit(req, res) {
        await Sessao.update(req.params.id, req.body);
        res.redirect("/sessoes");
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            await Sessao.delete(id);
            res.redirect("/sessoes");
        } catch (error) {
            if (error.code === "23503") {
                return res.send("Não é possível deletar esta sessão. Existem vendas vinculadas.");
            }
            res.status(500).send("Erro ao deletar a sessão: " + error.message);
        }
    }
};

export default SessoesController;
