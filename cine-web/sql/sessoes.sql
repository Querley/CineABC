CREATE TABLE sessoes (
                         id SERIAL PRIMARY KEY,
                         filme_id INT REFERENCES filmes(id),
                         sala_id INT REFERENCES salas(id),
                         data DATE NOT NULL,
                         hora TIME NOT NULL,
                         criado_em TIMESTAMP DEFAULT NOW()
);
