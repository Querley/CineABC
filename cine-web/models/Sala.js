import { db } from "../db.js";

class Sala {
    static async getAll() {
        const result = await db.query("SELECT * FROM salas ORDER BY id");
        return result.rows;
    }

    static async getById(id) {
        const result = await db.query("SELECT * FROM salas WHERE id=$1", [id]);
        return result.rows[0];
    }

    static async insert(data) {
        const { nome, capacidade } = data;
        await db.query("INSERT INTO salas (nome, capacidade) VALUES ($1, $2)", [nome, capacidade]);
    }

    static async update(id, data) {
        const { nome, capacidade } = data;
        await db.query("UPDATE salas SET nome=$1, capacidade=$2 WHERE id=$3", [nome, capacidade, id]);
    }

    static async delete(id) {
        await db.query("DELETE FROM salas WHERE id=$1", [id]);
    }
}

export default Sala;
