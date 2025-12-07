import Filme from "../models/Filme.js"; // importa o model Filme para manipular dados do banco

const FilmesController = {
    // lista todos os filmes
    async index(req, res) {
        const filmes = await Filme.getAll(); // busca todos os filmes
        res.render("filmes/list", { filmes }); // renderiza a view com os filmes
    },

    // exibe formulário de criação de filme
    async createForm(req, res) {
        res.render("filmes/create"); // renderiza a view do formulário
    },

    // cria um novo filme
    async create(req, res) {
        await Filme.insert(req.body); // insere o filme no banco usando os dados do formulário
        res.redirect("/filmes"); // redireciona para a lista de filmes
    },

    // exibe formulário de edição de um filme existente
    async editForm(req, res) {
        const filme = await Filme.getById(req.params.id); // busca o filme pelo id
        res.render("filmes/edit", { filme }); // renderiza o formulário preenchido com os dados
    },

    // atualiza os dados de um filme
    async edit(req, res) {
        await Filme.update(req.params.id, req.body); // atualiza o filme no banco
        res.redirect("/filmes"); // redireciona para a lista de filmes
    },

    // deleta um filme
    async delete(req, res) {
        const { id } = req.params;
        try {
            await Filme.delete(id); // tenta deletar o filme
            res.redirect("/filmes"); // redireciona para a lista de filmes
        } catch (error) {
            // verifica se o erro é de violação de chave estrangeira (ex: existem sessões vinculadas ao filme)
            if (error.code === "23503") { // código PostgreSQL para foreign key violation
                return res.send("Não é possível deletar este filme. Existem sessões vinculadas.");
            }
            res.status(500).send("Erro ao deletar o filme: " + error.message); // outros erros
        }
    }
};

export default FilmesController; // exporta o controller para ser usado nas rotas
