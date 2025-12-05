import { db } from "../db.js";

class Venda {
    static async getAll() {
        const result = await db.query(`
            SELECT v.id, v.poltrona, v.tipo_ingresso, s.id AS sessao_id, f.titulo AS filme, sa.nome AS sala, s.data, s.hora
            FROM vendas v
                     JOIN sessoes s ON v.sessao_id = s.id
                     JOIN filmes f ON s.filme_id = f.id
                     JOIN salas sa ON s.sala_id = sa.id
            ORDER BY s.data, s.hora, v.poltrona
        `);
        return result.rows;
    }

    static async getBySessao(sessao_id) {
        const result = await db.query(
            "SELECT poltrona FROM vendas WHERE sessao_id=$1",
            [sessao_id]
        );
        return result.rows.map(r => r.poltrona);
    }

    static async insert(data) {
        const { sessao_id, poltrona, tipo_ingresso } = data;
        await db.query(
            "INSERT INTO vendas (sessao_id, poltrona, tipo_ingresso) VALUES ($1, $2, $3)",
            [sessao_id, poltrona, tipo_ingresso]
        );
    }
}

export default Venda;
