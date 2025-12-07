import { db } from "../db.js"; // importa a conexão com o banco de dados

class Filme {
    // retorna todos os filmes cadastrados, ordenados pelo id
    static async getAll() {
        const result = await db.query("SELECT * FROM filmes ORDER BY id");
        return result.rows; // retorna apenas as linhas da tabela
    }

    // retorna um filme específico pelo id
    static async getById(id) {
        const result = await db.query("SELECT * FROM filmes WHERE id=$1", [id]);
        return result.rows[0]; // retorna a primeira linha (o filme encontrado)
    }

    // insere um novo filme no banco
    static async insert(data) {
        const { titulo, duracao, classificacao, genero } = data; // desestrutura os dados recebidos

        await db.query(
            "INSERT INTO filmes (titulo, duracao, classificacao, genero) VALUES ($1, $2, $3, $4)",
            [titulo, duracao, classificacao, genero] // passa os valores de forma segura para evitar SQL Injection
        );
    }

    // atualiza um filme existente pelo id
    static async update(id, data) {
        const { titulo, duracao, classificacao, genero } = data; // desestrutura os dados

        await db.query(
            `UPDATE filmes
             SET titulo=$1, duracao=$2, classificacao=$3, genero=$4
             WHERE id=$5`,
            [titulo, duracao, classificacao, genero, id] // valores para atualização e id do filme
        );
    }

    // deleta um filme pelo id
    static async delete(id) {
        await db.query("DELETE FROM filmes WHERE id=$1", [id]); // remove o registro correspondente
    }
}

export default Filme; // exporta a classe para ser usada em outros arquivos
