import Venda from "../models/Venda.js";
import Sessao from "../models/Sessao.js";
import Sala from "../models/Sala.js";

const VendasController = {
    async index(req, res) {
        const vendas = await Venda.getAll();
        res.render("vendas/list", { vendas });
    },

    // form de criação
    async createForm(req, res) {
        const sessoes = await Sessao.getAll();
        res.render("vendas/create", { sessoes });
    },

    // retorna poltronas ocupadas e capacidade da sala
    async poltronas(req, res) {
        const { sessao_id } = req.params;

        const ocupadas = await Venda.getBySessao(sessao_id);

        const sessao = await Sessao.getById(sessao_id);
        if (!sessao) return res.json({ ocupadas: [], capacidade: 0 });

        const sala = await Sala.getById(sessao.sala_id);
        if (!sala) return res.json({ ocupadas: [], capacidade: 0 });

        res.json({ ocupadas, capacidade: sala.capacidade });
    },

    // cria a venda e vai direto para o comprovante
    async create(req, res) {
        const { sessao_id, poltrona, tipo_ingresso } = req.body;

        // valida campos mínimos
        if (!sessao_id || !poltrona || !tipo_ingresso) {
            return res.send("Preencha todos os campos!");
        }

        // insere venda
        await Venda.insert({ sessao_id, poltrona, tipo_ingresso });

        // pega o ID da venda recém-criada
        const vendas = await Venda.getAll();
        const novaVenda = vendas[vendas.length - 1]; // pega a última inserida

        res.redirect(`/vendas/comprovante/${novaVenda.id}`);
    },

    // renderiza o comprovante
    async comprovante(req, res) {
        const { id } = req.params;
        const vendas = await Venda.getAll();
        const venda = vendas.find(v => v.id == id);

        if (!venda) return res.send("Ingresso não encontrado!");

        res.render("vendas/comprovante", { venda });
    }
};

export default VendasController;
