
CREATE TABLE salas (
                       id SERIAL PRIMARY KEY,
                       nome VARCHAR(50) NOT NULL,
                       capacidade INT NOT NULL,
                       criado_em TIMESTAMP DEFAULT NOW()
);
