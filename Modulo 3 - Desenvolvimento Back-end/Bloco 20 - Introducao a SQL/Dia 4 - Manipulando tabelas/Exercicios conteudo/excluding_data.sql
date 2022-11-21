USE sakila;
SET SQL_SAFE_UPDATES = 0;

# ex - 1
SELECT * FROM sakila.actor WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

# ex - 2
SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

# ex - 3
DELETE FROM sakila.film_text
WHERE `description` LIKE '%saga%';

# ex - 4
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;