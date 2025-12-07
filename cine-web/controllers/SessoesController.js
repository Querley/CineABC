import Sessao from "../models/Sessao.js"; // importa o model Sessao para manipulação de sessões
import Filme from "../models/Filme.js";   // importa o model Filme para listar filmes
import Sala from "../models/Sala.js";     // importa o model Sala para listar salas

const SessoesController = {
    // lista todas as sessões
    async index(req, res) {
        const sessoes = await Sessao.getAll(); // busca todas as sessões
        res.render("sessoes/list", { sessoes }); // renderiza a view com as sessões
    },

    // exibe formulário de criação de sessão
    async createForm(req, res) {
        const filmes = await Filme.getAll(); // busca todos os filmes
        const salas = await Sala.getAll();   // busca todas as salas
        res.render("sessoes/create", { filmes, salas }); // renderiza formulário com filmes e salas disponíveis
    },

    // cria uma nova sessão
    async create(req, res) {
        await Sessao.insert(req.body); // insere a sessão no banco com os dados do formulário
        res.redirect("/sessoes");      // redireciona para a lista de sessões
    },

    // exibe formulário de edição de uma sessão existente
    async editForm(req, res) {
        const sessao = await Sessao.getById(req.params.id); // busca a sessão pelo id
        const filmes = await Filme.getAll(); // busca todos os filmes
        const salas = await Sala.getAll();   // busca todas as salas
        res.render("sessoes/edit", { sessao, filmes, salas }); // renderiza o formulário preenchido
    },

    // atualiza os dados de uma sessão
    async edit(req, res) {
        await Sessao.update(req.params.id, req.body); // atualiza a sessão no banco
        res.redirect("/sessoes");                      // redireciona para a lista de sessões
    },

    // deleta uma sessão
    async delete(req, res) {
        const { id } = req.params;
        try {
            await Sessao.delete(id); // tenta deletar a sessão
            res.redirect("/sessoes"); // redireciona para a lista de sessões
        } catch (error) {
            // verifica se o erro é de violação de chave estrangeira (ex: existem vendas vinculadas à sessão)
            if (error.code === "23503") {
                return res.send("Não é possível deletar esta sessão. Existem vendas vinculadas.");
            }
            res.status(500).send("Erro ao deletar a sessão: " + error.message); // outros erros
        }
    }
};

export default SessoesController; // exporta o controller
