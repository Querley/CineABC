import Venda from "../models/Venda.js";

const DashboardController = {
    async index(req, res) {
        const vendas = await Venda.getAll();

        // Contar total de vendas
        const totalVendas = vendas.length;

        // Contar vendas por filme
        const filmesMap = {};
        vendas.forEach(v => {
            filmesMap[v.filme] = (filmesMap[v.filme] || 0) + 1;
        });
        const filmesStats = Object.entries(filmesMap).map(([filme, count]) => ({
            filme,
            count,
            percentual: ((count / totalVendas) * 100).toFixed(2)
        }));

        // Contar ocupação por sessão
        const sessoesMap = {};
        vendas.forEach(v => {
            const key = `${v.filme} | Sala ${v.sala} | ${v.data.toISOString().split('T')[0]} ${v.hora}`;
            sessoesMap[key] = (sessoesMap[key] || 0) + 1;
        });
        const sessoesStats = Object.entries(sessoesMap).map(([sessao, count]) => ({ sessao, count }));

        // Determinar sessão mais e menos ocupada
        let maisOcupada = null, menosOcupada = null;
        if (sessoesStats.length > 0) {
            maisOcupada = sessoesStats.reduce((a, b) => (a.count > b.count ? a : b));
            menosOcupada = sessoesStats.reduce((a, b) => (a.count < b.count ? a : b));
        }

        res.render("dashboard/index", {
            totalVendas,
            filmesStats,
            maisOcupada,
            menosOcupada
        });
    }
};

export default DashboardController;
