USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film;
SELECT * FROM actor;

SELECT CONCAT(first_name, last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

SELECT CONCAT(title, ' ', release_year) 
AS "Lançamento do Filme" FROM sakila.film;

SELECT CONCAT(title, ' ', rating)
AS 'Classificação' FROM sakila.film;

SELECT CONCAT(address, ' ', district)
AS 'Endereço' FROM sakila.address;

SELECT COUNT(password) FROM sakila.staff;
SELECT COUNT(staff_id) FROM sakila.staff;
SELECT COUNT(email) FROM sakila.staff;

SELECT * FROM sakila.rental LIMIT 10;
SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

#sakila.film
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;

#sakila.actor
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;

#sakila.language
SELECT * from sakila.language LIMIT 5 OFFSET 1;