import Venda from "../models/Venda.js";   // importa o model Venda para manipulação de vendas
import Sessao from "../models/Sessao.js"; // importa o model Sessao para consultar sessões
import Sala from "../models/Sala.js";     // importa o model Sala para consultar salas

const VendasController = {
    // lista todas as vendas (relatório/admin)
    async index(req, res) {
        const vendas = await Venda.getAll(); // busca todas as vendas
        res.render("vendas/list", { vendas }); // renderiza view com a lista de vendas
    },

    // exibe formulário de criação de venda
    async createForm(req, res) {
        const sessoes = await Sessao.getAll(); // busca todas as sessões disponíveis
        res.render("vendas/create", { sessoes }); // renderiza formulário com as sessões
    },

    // retorna poltronas ocupadas e capacidade da sala via JSON
    async poltronas(req, res) {
        const { sessao_id } = req.params;

        const ocupadas = await Venda.getBySessao(sessao_id); // pega poltronas já vendidas

        const sessao = await Sessao.getById(sessao_id); // pega dados da sessão
        if (!sessao) return res.json({ ocupadas: [], capacidade: 0 }); // caso sessão não exista

        const sala = await Sala.getById(sessao.sala_id); // pega dados da sala
        if (!sala) return res.json({ ocupadas: [], capacidade: 0 }); // caso sala não exista

        res.json({ ocupadas, capacidade: sala.capacidade }); // retorna ocupadas e capacidade
    },

    // cria uma nova venda
    async create(req, res) {
        const { sessao_id, poltrona, tipo_ingresso } = req.body;

        // valida se todos os campos obrigatórios foram preenchidos
        if (!sessao_id || !poltrona || !tipo_ingresso) {
            return res.send("Preencha todos os campos!");
        }

        // insere a venda no banco
        await Venda.insert({ sessao_id, poltrona, tipo_ingresso });

        // pega a última venda inserida para gerar o comprovante
        const vendas = await Venda.getAll();
        const novaVenda = vendas[vendas.length - 1]; // pega a última venda

        res.redirect(`/vendas/comprovante/${novaVenda.id}`); // redireciona para a página do comprovante
    },

    // renderiza o comprovante de venda
    async comprovante(req, res) {
        const { id } = req.params;

        const vendas = await Venda.getAll(); // busca todas as vendas
        const venda = vendas.find(v => v.id == id); // encontra a venda pelo ID

        if (!venda) return res.send("Ingresso não encontrado!"); // se não achar, retorna erro

        res.render("vendas/comprovante", { venda }); // renderiza view do comprovante
    }
};

export default VendasController; // exporta o controller
