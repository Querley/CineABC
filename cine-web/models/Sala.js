import { db } from "../db.js"; // importa a conexão com o banco de dados

class Sala {
    // retorna todas as salas cadastradas, ordenadas pelo id
    static async getAll() {
        const result = await db.query("SELECT * FROM salas ORDER BY id");
        return result.rows; // retorna apenas as linhas da tabela
    }

    // retorna uma sala específica pelo id
    static async getById(id) {
        const result = await db.query("SELECT * FROM salas WHERE id=$1", [id]);
        return result.rows[0]; // retorna a primeira linha (a sala encontrada)
    }

    // insere uma nova sala no banco
    static async insert(data) {
        const { nome, capacidade } = data; // desestrutura os dados recebidos
        await db.query(
            "INSERT INTO salas (nome, capacidade) VALUES ($1, $2)",
            [nome, capacidade] // valores para inserção de forma segura
        );
    }

    // atualiza uma sala existente pelo id
    static async update(id, data) {
        const { nome, capacidade } = data; // desestrutura os dados
        await db.query(
            "UPDATE salas SET nome=$1, capacidade=$2 WHERE id=$3",
            [nome, capacidade, id] // valores para atualização e id da sala
        );
    }

    // deleta uma sala pelo id
    static async delete(id) {
        await db.query("DELETE FROM salas WHERE id=$1", [id]); // remove o registro correspondente
    }
}

export default Sala; // exporta a classe para ser usada em outros arquivos
