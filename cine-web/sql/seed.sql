-- ===========================================
-- DROP TABLES
-- ===========================================
DROP TABLE IF EXISTS vendas;
DROP TABLE IF EXISTS sessoes;
DROP TABLE IF EXISTS salas;
DROP TABLE IF EXISTS filmes;

-- ===========================================
-- TABELA: filmes
-- ===========================================
CREATE TABLE filmes (
                        id SERIAL PRIMARY KEY,
                        titulo TEXT NOT NULL,
                        duracao INTEGER NOT NULL,
                        classificacao TEXT NOT NULL,
                        genero TEXT NOT NULL,
                        criado_em TIMESTAMP NOT NULL DEFAULT NOW(),
                        img TEXT
);

INSERT INTO filmes (titulo, duracao, classificacao, genero, criado_em, img) VALUES
                                                                                ('Matrix', 136, '14+', 'Ação/Ficção', '2025-12-04 21:47:00.791388', 'matrix.webp'),
                                                                                ('Toy Story', 90, 'Livre', 'Animação', '2025-12-04 21:47:00.791388', 'toy_story.webp'),
                                                                                ('Coringa', 122, '16+', 'Drama/Suspense', '2025-12-04 21:47:00.791388', 'coringa.webp'),
                                                                                ('Homem-Aranha: No Aranhaverso', 117, '12+', 'Animação/Ação', '2025-12-04 21:47:00.791388', 'aranhaverso.webp'),
                                                                                ('A Origem', 148, '14+', 'Ficção/Suspense', '2025-12-04 21:47:00.791388', 'a_origem.webp'),
                                                                                ('Avatar: O Caminho da Água', 192, '12+', 'Aventura/Ficção', '2025-12-04 21:47:00.791388', 'avatar2.webp'),
                                                                                ('O Poderoso Chefão', 175, '16+', 'Crime/Drama', '2025-12-04 21:47:00.791388', 'poderoso_chefao.webp'),
                                                                                ('Interestelar', 169, '12+', 'Ficção/Ciência', '2025-12-04 21:47:00.791388', 'interestelar.webp'),
                                                                                ('Parasita', 132, '16+', 'Suspense/Drama', '2025-12-04 21:47:00.791388', 'parasita.webp'),
                                                                                ('Gladiador', 155, '14+', 'Ação/Drama', '2025-12-04 21:47:00.791388', 'gladiador.webp');

-- ===========================================
-- TABELA: salas
-- ===========================================
CREATE TABLE salas (
                       id SERIAL PRIMARY KEY,
                       nome TEXT NOT NULL,
                       capacidade INTEGER NOT NULL,
                       criado_em TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO salas (nome, capacidade, criado_em) VALUES
                                                    ('Sala 1', 50, '2025-12-04 21:47:00.867401'),
                                                    ('Sala 2', 70, '2025-12-04 21:47:00.867401'),
                                                    ('Sala 3', 100, '2025-12-04 21:47:00.867401'),
                                                    ('Sala 4', 120, '2025-12-04 21:47:00.867401');

-- ===========================================
-- TABELA: sessoes
-- ===========================================
CREATE TABLE sessoes (
                         id SERIAL PRIMARY KEY,
                         filme_id INTEGER NOT NULL REFERENCES filmes(id),
                         sala_id INTEGER NOT NULL REFERENCES salas(id),
                         data DATE NOT NULL,
                         hora TIME NOT NULL,
                         criado_em TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Inserindo sessões usando IDs existentes de filmes
INSERT INTO sessoes (filme_id, sala_id, data, hora) VALUES
                                                        ((SELECT id FROM filmes WHERE titulo='Matrix'), 1, '2025-12-05', '14:00:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Toy Story'), 2, '2025-12-05', '16:00:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='O Poderoso Chefão'), 3, '2025-12-05', '18:30:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Interestelar'), 4, '2025-12-06', '15:00:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Coringa'), 1, '2025-12-06', '19:00:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Homem-Aranha: No Aranhaverso'), 2, '2025-12-06', '21:30:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='A Origem'), 3, '2025-12-07', '14:00:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Avatar: O Caminho da Água'), 4, '2025-12-07', '16:30:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Parasita'), 1, '2025-12-07', '18:30:00'),
                                                        ((SELECT id FROM filmes WHERE titulo='Gladiador'), 2, '2025-12-08', '15:00:00');

-- ===========================================
-- TABELA: vendas
-- ===========================================
CREATE TABLE vendas (
                        id SERIAL PRIMARY KEY,
                        sessao_id INTEGER NOT NULL REFERENCES sessoes(id),
                        poltrona TEXT NOT NULL,
                        tipo_ingresso TEXT NOT NULL,
                        criado_em TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Inserindo vendas (sessao_id corretos)
INSERT INTO vendas (sessao_id, poltrona, tipo_ingresso) VALUES
                                                            (1, 'P1', 'inteira'),
                                                            (1, 'P2', 'meia'),
                                                            (2, 'P1', 'inteira'),
                                                            (2, 'P2', 'inteira'),
                                                            (3, 'P5', 'inteira'),
                                                            (4, 'P1', 'meia'),
                                                            (5, 'P10', 'inteira'),
                                                            (6, 'P3', 'inteira'),
                                                            (7, 'P15', 'inteira'),
                                                            (8, 'P7', 'meia'),
                                                            (9, 'P2', 'inteira'),
                                                            (10, 'P1', 'inteira');
