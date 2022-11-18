CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

USE Escola;
# 5 linhas
SELECT DISTINCT nome, idade FROM Escola.Estudantes;
# 4 linhas
SELECT DISTINCT nome from Escola.Estudantes;
# 4 linhas
SELECT DISTINCT idade from Escola.Estudantes;
