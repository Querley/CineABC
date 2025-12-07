// Importa o cliente PostgreSQL e variáveis de ambiente
import pg from "pg";
import dotenv from "dotenv";

// Carrega as variáveis definidas no arquivo .env
dotenv.config();

// Cria e exporta a instância do cliente PostgreSQL
export const db = new pg.Client({
    user: process.env.DB_USER,       // usuário do banco
    host: process.env.DB_HOST,       // endereço do servidor
    database: process.env.DB_NAME,   // nome da database
    password: process.env.DB_PASSWORD, // senha
    port: process.env.DB_PORT        // porta
});

// Tenta conectar ao banco de dados
db.connect()
    .then(() => console.log("🟢 Banco conectado com sucesso"))
    .catch((err) => console.error("🔴 Erro ao conectar ao banco:", err));
