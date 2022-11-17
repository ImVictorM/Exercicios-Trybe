USE Scientists;
# ex - 1
SELECT 'This is SQL Exercise, Practice and Solution';

# ex - 2
SELECT 1, 2, 3;

# ex - 3
SELECT 10 + 15;

# ex - 4
SELECT 4 * 7 - 2;

# ex - 5
SELECT * from Scientists;

# ex - 6
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho'
FROM Projects;

# ex - 7
SELECT Name FROM Scientists ORDER BY Name;

# ex - 8
SELECT Name FROM Projects ORDER BY Name DESC;

# ex - 9
SELECT CONCAT('O projeto ', Name, 'precisou de ', Hours, ' horas para ser concluído')
FROM Projects;

# ex - 10
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC
LIMIT 3;

# ex - 11
SELECT DISTINCT Project FROM AssignedTo;

# ex - 12
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;

# ex - 13
SELECT Name FROM Projects
ORDER BY Hours
LIMIT 1 OFFSET 1;

# ex - 14
SELECT * FROM Projects
ORDER BY Hours
LIMIT 5;

# ex - 15
SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists;
