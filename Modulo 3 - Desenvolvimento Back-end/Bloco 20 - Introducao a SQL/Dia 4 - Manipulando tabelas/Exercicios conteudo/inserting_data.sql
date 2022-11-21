USE sakila;

# ex - 1
INSERT INTO sakila.staff 
(address_id, first_name, last_name, store_id, username) 
VALUES (10, 'Victor', 'Figueiredo', 1, 'sete');

# ex - 2
INSERT INTO sakila.staff 
(address_id, first_name, last_name, store_id, username) 
VALUES 
(3, 'Breno', 'Reis', 1, 'sdreiss'),
(6, 'Bruno', 'Gomes', 1, 'ferby');

# ex - 3
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    LIMIT 5;
    
# ex - 4
INSERT INTO sakila.category(`name`)
VALUES
('Lamborguine'),
('Sorvete'),
('Caderno');

# ex - 5
INSERT INTO sakila.store(address_id, manager_staff_id)
VALUES
(1, 3);
