USE sakila;

# query - 1
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN
('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales','kennedy')
ORDER BY first_name;

# query - 2
SELECT email from sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;

# query - 3
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

# query - 4
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

# query - 5
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;