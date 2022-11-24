USE sakila;

# praticando GROUP BY
# ex - 1
SELECT `active`, COUNT(*) AS total
FROM sakila.customer
GROUP BY `active`;

# ex - 2
SELECT store_id, `active`, COUNT(`active`) AS total
FROM sakila.customer
GROUP BY store_id, `active`;

# ex - 3
SELECT rating, AVG(rental_duration) AS rental_duration_avg
FROM sakila.film
GROUP BY rating
ORDER BY rental_duration_avg DESC;

# ex - 4
SELECT district, COUNT(district) AS registered_address
FROM sakila.address
GROUP BY district
ORDER BY registered_address DESC;

# Para fixar
# ex - 1
SELECT rating, AVG(length) AS avg_duration
FROM sakila.film
GROUP BY rating
HAVING avg_duration BETWEEN 115.0 AND 121.50
ORDER BY avg_duration DESC;

# ex - 2
SELECT rating, SUM(replacement_cost) AS replacement_total
FROM sakila.film
GROUP BY rating
HAVING replacement_total > 3950.50
ORDER BY replacement_total ASC;

