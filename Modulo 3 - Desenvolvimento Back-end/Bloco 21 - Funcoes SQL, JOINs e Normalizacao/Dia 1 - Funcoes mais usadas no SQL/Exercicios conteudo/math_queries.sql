# Desafios com DIV e MOD
# ex - 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

# ex - 2
SELECT 220 DIV 12;

# ex - 3
SELECT IF (220 MOD 12 != 0, CONCAT('Sim ', 220 MOD 12, ' lugares sobrando'), 'Não');

# Para fixar
# ex - 1
SELECT FLOOR(RAND() * (20-15+1) + 15);

# ex - 2
SELECT ROUND(15.7515971, 5);

# ex - 3
SELECT FLOOR(39.494);

# ex - 4
SELECT CEIL(85.234);
