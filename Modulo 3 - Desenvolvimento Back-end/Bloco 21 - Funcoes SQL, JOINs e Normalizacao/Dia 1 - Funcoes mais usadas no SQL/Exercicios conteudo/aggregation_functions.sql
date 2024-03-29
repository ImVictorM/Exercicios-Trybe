USE sakila;

# ex - 1
SELECT 
	AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(length) AS 'Filmes Registrados'
FROM sakila.film;