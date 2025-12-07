// Importa o cliente PostgreSQL e variáveis de ambiente
import pg from "pg";
import dotenv from "dotenv";

// Carrega as variáveis definidas no arquivo .env
dotenv.config();

// Cria e exporta a instância do cliente PostgreSQL
export const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Tenta conectar ao banco de dados
db.connect()
    .then(() => console.log("🟢 Banco conectado com sucesso"))
    .catch((err) => console.error("🔴 Erro ao conectar ao banco:", err));
