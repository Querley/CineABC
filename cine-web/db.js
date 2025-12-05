import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect()
    .then(() => console.log("🟢 Banco conectado com sucesso"))
    .catch((err) => console.error("🔴 Erro ao conectar ao banco:", err));
