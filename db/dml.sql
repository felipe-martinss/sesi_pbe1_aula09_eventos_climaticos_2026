use registros_climaticos;
 
insert into usuario (nome, email, senha) values
("Maria Olíveira", "maria.olíveria@email.com", password("senha123")),
("João Silva", "joao.silva@email.com", password("senha123")),
("Ana Souza", "ana.souza@email.com", password("senha123"));

insert into evento (cidade,usuarioId, tipoEvento, temperaturaMaxima, data, nivelImpacto) values
("Campinas", 1, "Onda de calor", 38.7, "2026-09-23", "Alto"),
("São Paulo", 2, "Chuva intensa", 25.3, "2026-09-24", "Médio"),
("Rio de Janeiro", 1, "Tempestade", 30.1, "2026-09-25", "Alto"),
("Belo Horizonte", 2, "Seca prolongada", 35.0, "2026-09-26", "Alto"),
("Campinas", 3, "Onda de calor", -2.5, "2026-09-27", "Médio");