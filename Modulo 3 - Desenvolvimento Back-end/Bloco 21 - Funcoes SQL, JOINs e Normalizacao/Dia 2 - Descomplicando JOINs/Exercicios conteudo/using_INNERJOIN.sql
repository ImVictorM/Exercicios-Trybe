USE sakila;

# ex - 1
SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil
ON act.actor_id = fil.actor_id;

# ex - 2
SELECT sta.first_name, sta.last_name, addr.address
FROM sakila.staff AS sta
INNER JOIN sakila.address AS addr
ON sta.address_id = addr.address_id;

# ex - 3
SELECT 
	cus.customer_id, 
    cus.first_name, 
    cus.email, 
    addr.address_id, 
    addr.address
FROM sakila.customer AS cus
INNER JOIN sakila.address AS addr
ON cus.address_id = addr.address_id
ORDER BY cus.first_name DESC
LIMIT 100;

# ex - 4
SELECT 
	cus.first_name, 
    cus.email,
    addr.address_id,
    addr.address,
    addr.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS addr
ON cus.address_id = addr.address_id
WHERE addr.district = 'California' AND cus.first_name LIKE '%rene%';

# ex - 5
SELECT 
	cust.first_name,
    cust.last_name,
    COUNT(rent.rental_id)
FROM sakila.customer AS cust
INNER JOIN sakila.rental AS rent
ON cust.customer_id = rent.customer_id
WHERE cust.`active` IS TRUE
GROUP BY cust.customer_id
ORDER BY cust.first_name DESC, cust.last_name DESC;

# ex - 6
SELECT
	sta.first_name,
    sta.last_name,
    AVG(pay.amount)
FROM sakila.payment AS pay
INNER JOIN sakila.staff AS sta
ON sta.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = '2006'
GROUP BY sta.first_name, sta.last_name;

# ex - 7
SELECT
	act.actor_id,
    act.first_name,
    fil_act.film_id,
    fil.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil_act
	ON fil_act.actor_id = act.actor_id
INNER JOIN sakila.film AS fil
	ON fil.film_id = fil_act.film_id;

