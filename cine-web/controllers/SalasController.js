import Sala from "../models/Sala.js"; // importa o model Sala para manipular dados do banco

const SalasController = {
    // lista todas as salas
    async index(req, res) {
        const salas = await Sala.getAll(); // busca todas as salas
        res.render("salas/list", { salas }); // renderiza a view com as salas
    },

    // exibe formulário de criação de sala
    async createForm(req, res) {
        res.render("salas/create"); // renderiza a view do formulário
    },

    // cria uma nova sala
    async create(req, res) {
        await Sala.insert(req.body); // insere a sala no banco usando os dados do formulário
        res.redirect("/salas"); // redireciona para a lista de salas
    },

    // exibe formulário de edição de uma sala existente
    async editForm(req, res) {
        const sala = await Sala.getById(req.params.id); // busca a sala pelo id
        res.render("salas/edit", { sala }); // renderiza o formulário preenchido com os dados
    },

    // atualiza os dados de uma sala
    async edit(req, res) {
        await Sala.update(req.params.id, req.body); // atualiza a sala no banco
        res.redirect("/salas"); // redireciona para a lista de salas
    },

    // deleta uma sala
    async delete(req, res) {
        const { id } = req.params;
        try {
            await Sala.delete(id); // tenta deletar a sala
            res.redirect("/salas"); // redireciona para a lista de salas
        } catch (error) {
            // verifica se o erro é de violação de chave estrangeira (ex: existem sessões vinculadas à sala)
            if (error.code === "23503") {
                return res.send("Não é possível deletar esta sala. Existem sessões vinculadas.");
            }
            res.status(500).send("Erro ao deletar a sala: " + error.message); // outros erros
        }
    }
};

export default SalasController; // exporta o controller para ser usado nas rotas
