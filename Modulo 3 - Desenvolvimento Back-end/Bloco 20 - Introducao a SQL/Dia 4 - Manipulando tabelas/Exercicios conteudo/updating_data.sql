USE sakila;
SET SQL_SAFE_UPDATES = 0;

# ex - 1
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

# ex - 2
UPDATE sakila.category
SET `name` = 'Science Fiction'
WHERE `name` = 'Sci-fi';

# ex - 3
UPDATE sakila.film
SET rental_rate = 25
WHERE (length > 100) 
AND (rating IN ('G', 'PG', 'PG-13')) 
AND (replacement_cost > 20);

# ex - 4
UPDATE sakila.film
SET rental_rate = (
	CASE 
		WHEN length BETWEEN 0 AND 100 THEN 10
		WHEN length > 100 THEN 20
	END
);