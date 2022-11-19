USE sakila;

# query - 1
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

# query - 2
SELECT * FROM sakila.film
WHERE description LIKE '%china';

# query - 3
SELECT * FROM sakila.film
WHERE (description LIKE '%girl%') AND (title LIKE '%lord')
LIMIT 2;

# query - 4
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
LIMIT 2;

# query - 5
SELECT * FROM sakila.film
WHERE (title LIKE '___gon%') AND (description LIKE '%Documentary%')
LIMIT 1;

# query - 6
SELECT * FROM sakila.film
WHERE (title LIKE '%academy') OR (title LIKE 'mosquito%')
LIMIT 2;

# query - 7
SELECT * FROM sakila.film
WHERE (description LIKE '%monkey%') AND (description LIKE '%sumo%')
LIMIT 6;