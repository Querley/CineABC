import { db } from "../db.js"; // importa a conexão com o banco de dados

class Sessao {
    // retorna todas as sessões cadastradas, incluindo informações de filme e sala, ordenadas por data e hora
    static async getAll() {
        const result = await db.query(`
            SELECT s.id, f.titulo AS filme, sa.nome AS sala, s.data, s.hora
            FROM sessoes s
                     JOIN filmes f ON s.filme_id = f.id
                     JOIN salas sa ON s.sala_id = sa.id
            ORDER BY s.data, s.hora
        `);
        return result.rows; // retorna todas as linhas obtidas
    }

    // retorna uma sessão específica pelo id
    static async getById(id) {
        const result = await db.query("SELECT * FROM sessoes WHERE id=$1", [id]);
        return result.rows[0]; // retorna a primeira linha encontrada
    }

    // insere uma nova sessão no banco
    static async insert(data) {
        const { filme_id, sala_id, data_sessao, hora } = data; // desestrutura os dados recebidos
        await db.query(
            `INSERT INTO sessoes (filme_id, sala_id, data, hora) VALUES ($1, $2, $3, $4)`,
            [filme_id, sala_id, data_sessao, hora] // valores para inserção de forma segura
        );
    }

    // atualiza uma sessão existente pelo id
    static async update(id, data) {
        const { filme_id, sala_id, data_sessao, hora } = data; // desestrutura os dados
        await db.query(
            `UPDATE sessoes SET filme_id=$1, sala_id=$2, data=$3, hora=$4 WHERE id=$5`,
            [filme_id, sala_id, data_sessao, hora, id] // valores para atualização e id da sessão
        );
    }

    // deleta uma sessão pelo id
    static async delete(id) {
        await db.query("DELETE FROM sessoes WHERE id=$1", [id]); // remove o registro correspondente
    }
}

export default Sessao; // exporta a classe para ser usada em outros arquivos
