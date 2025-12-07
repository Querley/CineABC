import { db } from "../db.js"; // importa a conexão com o banco de dados

class Venda {
    // retorna todas as vendas cadastradas, incluindo informações da sessão, filme e sala, ordenadas por data, hora e poltrona
    static async getAll() {
        const result = await db.query(`
            SELECT v.id, v.poltrona, v.tipo_ingresso, s.id AS sessao_id, f.titulo AS filme, sa.nome AS sala, s.data, s.hora
            FROM vendas v
                     JOIN sessoes s ON v.sessao_id = s.id
                     JOIN filmes f ON s.filme_id = f.id
                     JOIN salas sa ON s.sala_id = sa.id
            ORDER BY s.data, s.hora, v.poltrona
        `);
        return result.rows; // retorna todas as linhas obtidas
    }

    // retorna as poltronas já ocupadas de uma sessão específica
    static async getBySessao(sessao_id) {
        const result = await db.query(
            "SELECT poltrona FROM vendas WHERE sessao_id=$1",
            [sessao_id] // passa o id da sessão como parâmetro seguro
        );
        return result.rows.map(r => r.poltrona); // retorna apenas os números das poltronas ocupadas
    }

    // insere uma nova venda no banco
    static async insert(data) {
        const { sessao_id, poltrona, tipo_ingresso } = data; // desestrutura os dados recebidos
        await db.query(
            "INSERT INTO vendas (sessao_id, poltrona, tipo_ingresso) VALUES ($1, $2, $3)",
            [sessao_id, poltrona, tipo_ingresso] // valores para inserção de forma segura
        );
    }
}

export default Venda; // exporta a classe para ser usada em outros arquivos
