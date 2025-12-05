
CREATE TABLE filmes (
                        id SERIAL PRIMARY KEY,
                        titulo VARCHAR(100) NOT NULL,
                        duracao INT NOT NULL,
                        classificacao VARCHAR(10),
                        genero VARCHAR(50),
                        criado_em TIMESTAMP DEFAULT NOW()
);
