USE store;

# query - 1
SELECT * FROM store.itens
WHERE name LIKE 'GR%';

# query - 2
SELECT * FROM store.supplies
WHERE item_id = 2
ORDER BY supplier_id;

# query - 3
SELECT item_id, price, supplier_id FROM store.supplies
WHERE supplier_id LIKE '%n%';

# query - 4
SELECT * FROM store.suppliers
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

# query - 5
SELECT COUNT(*) FROM store.suppliers
WHERE id LIKE '%f%';

# query - 6
SELECT * FROM store.supplies
WHERE price BETWEEN 15 AND 40
ORDER BY price;

# query - 7
SELECT COUNT(*) FROM store.sales
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
