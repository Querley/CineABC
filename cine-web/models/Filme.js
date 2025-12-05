import { db } from "../db.js";

class Filme {
    static async getAll() {
        const result = await db.query("SELECT * FROM filmes ORDER BY id");
        return result.rows;
    }

    static async getById(id) {
        const result = await db.query("SELECT * FROM filmes WHERE id=$1", [id]);
        return result.rows[0];
    }

    static async insert(data) {
        const { titulo, duracao, classificacao, genero } = data;

        await db.query(
            "INSERT INTO filmes (titulo, duracao, classificacao, genero) VALUES ($1, $2, $3, $4)",
            [titulo, duracao, classificacao, genero]
        );
    }

    static async update(id, data) {
        const { titulo, duracao, classificacao, genero } = data;

        await db.query(
            `UPDATE filmes
       SET titulo=$1, duracao=$2, classificacao=$3, genero=$4
       WHERE id=$5`,
            [titulo, duracao, classificacao, genero, id]
        );
    }

    static async delete(id) {
        await db.query("DELETE FROM filmes WHERE id=$1", [id]);
    }
}

export default Filme;
