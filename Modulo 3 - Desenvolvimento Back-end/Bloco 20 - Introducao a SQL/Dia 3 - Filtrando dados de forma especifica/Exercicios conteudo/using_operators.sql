USE sakila;

# query - 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

# query - 2
SELECT first_name FROM sakila.customer
WHERE (active IS FALSE) AND store_id = 2
AND first_name NOT LIKE 'KENNETH'
ORDER BY first_name;

# query - 3
SELECT title, description, release_year, rating, replacement_cost
FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

# query - 4
SELECT COUNT(*) FROM sakila.customer
WHERE (active IS TRUE) AND store_id = 1;

# query - 5
SELECT * FROM sakila.customer
WHERE (active IS FALSE) AND store_id = 1;

# query - 6
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;
