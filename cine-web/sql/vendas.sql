CREATE TABLE vendas (
                        id SERIAL PRIMARY KEY,
                        sessao_id INT REFERENCES sessoes(id) ON DELETE CASCADE,
                        poltrona VARCHAR(5) NOT NULL,
                        tipo_ingresso VARCHAR(10) NOT NULL CHECK (tipo_ingresso IN ('inteira', 'meia')),
                        criado_em TIMESTAMP DEFAULT NOW()
);
