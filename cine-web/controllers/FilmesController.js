import Filme from "../models/Filme.js";

const FilmesController = {
    async index(req, res) {
        const filmes = await Filme.getAll();
        res.render("filmes/list", { filmes });
    },

    async createForm(req, res) {
        res.render("filmes/create");
    },

    async create(req, res) {
        await Filme.insert(req.body);
        res.redirect("/filmes");
    },

    async editForm(req, res) {
        const filme = await Filme.getById(req.params.id);
        res.render("filmes/edit", { filme });
    },

    async edit(req, res) {
        await Filme.update(req.params.id, req.body);
        res.redirect("/filmes");
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            await Filme.delete(id);
            res.redirect("/filmes");
        } catch (error) {
            // Verifica se o erro é de violação de FK
            if (error.code === "23503") { // código PostgreSQL para foreign key violation
                return res.send("Não é possível deletar este filme. Existem sessões vinculadas.");
            }
            res.status(500).send("Erro ao deletar o filme: " + error.message);
        }
    }
};

export default FilmesController;
