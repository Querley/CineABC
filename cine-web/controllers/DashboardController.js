import Venda from "../models/Venda.js"; // importa o model Venda para acessar os dados do banco

const DashboardController = {
    // método para exibir o painel/dashboard
    async index(req, res) {
        const vendas = await Venda.getAll(); // busca todas as vendas cadastradas

        // Contar total de vendas
        const totalVendas = vendas.length; // quantidade total de vendas

        // Contar vendas por filme
        const filmesMap = {}; // objeto auxiliar para contar vendas por filme
        vendas.forEach(v => {
            filmesMap[v.filme] = (filmesMap[v.filme] || 0) + 1; // incrementa a contagem do filme
        });
        // transforma o objeto em array de estatísticas com percentual
        const filmesStats = Object.entries(filmesMap).map(([filme, count]) => ({
            filme,
            count,
            percentual: ((count / totalVendas) * 100).toFixed(2) // percentual de vendas do filme
        }));

        // Contar ocupação por sessão
        const sessoesMap = {}; // objeto auxiliar para contar vendas por sessão
        vendas.forEach(v => {
            const key = `${v.filme} | Sala ${v.sala} | ${v.data.toISOString().split('T')[0]} ${v.hora}`;
            // chave única para cada sessão
            sessoesMap[key] = (sessoesMap[key] || 0) + 1; // incrementa a contagem da sessão
        });
        const sessoesStats = Object.entries(sessoesMap).map(([sessao, count]) => ({ sessao, count }));

        // Determinar sessão mais e menos ocupada
        let maisOcupada = null, menosOcupada = null;
        if (sessoesStats.length > 0) {
            // encontra a sessão com maior número de vendas
            maisOcupada = sessoesStats.reduce((a, b) => (a.count > b.count ? a : b));
            // encontra a sessão com menor número de vendas
            menosOcupada = sessoesStats.reduce((a, b) => (a.count < b.count ? a : b));
        }

        // renderiza a view do dashboard passando as estatísticas calculadas
        res.render("dashboard/index", {
            totalVendas,
            filmesStats,
            maisOcupada,
            menosOcupada
        });
    }
};

export default DashboardController; // exporta o controller para ser usado nas rotas
