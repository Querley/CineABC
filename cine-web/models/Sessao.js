import { db } from "../db.js";

class Sessao {
    static async getAll() {
        const result = await db.query(`
            SELECT s.id, f.titulo AS filme, sa.nome AS sala, s.data, s.hora
            FROM sessoes s
                     JOIN filmes f ON s.filme_id = f.id
                     JOIN salas sa ON s.sala_id = sa.id
            ORDER BY s.data, s.hora
        `);
        return result.rows;
    }

    static async getById(id) {
        const result = await db.query("SELECT * FROM sessoes WHERE id=$1", [id]);
        return result.rows[0];
    }

    static async insert(data) {
        const { filme_id, sala_id, data_sessao, hora } = data;
        await db.query(
            `INSERT INTO sessoes (filme_id, sala_id, data, hora) VALUES ($1, $2, $3, $4)`,
            [filme_id, sala_id, data_sessao, hora]
        );
    }

    static async update(id, data) {
        const { filme_id, sala_id, data_sessao, hora } = data;
        await db.query(
            `UPDATE sessoes SET filme_id=$1, sala_id=$2, data=$3, hora=$4 WHERE id=$5`,
            [filme_id, sala_id, data_sessao, hora, id]
        );
    }

    static async delete(id) {
        await db.query("DELETE FROM sessoes WHERE id=$1", [id]);
    }
}

export default Sessao;
