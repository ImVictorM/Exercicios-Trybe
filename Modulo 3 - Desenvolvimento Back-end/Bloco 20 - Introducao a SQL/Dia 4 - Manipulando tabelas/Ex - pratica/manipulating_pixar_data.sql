USE pixar;

# ex - 1
INSERT INTO pixar.movies 
(title, director, `year`, length_minutes) 
VALUES 
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

# ex - 2
INSERT INTO pixar.box_office
(movie_id, rating, domestic_sales, international_sales)
VALUES
(9, 6.8, 450000000, 370000000);

# ex - 3
UPDATE pixar.movies
SET director = 'Andrew Stanton'
WHERE id = 9;

# ex - 4
SELECT * FROM pixar.movies WHERE title LIKE 'rata%';

UPDATE pixar.movies
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

# ex - 5
SELECT * FROM pixar.movies 
WHERE title IN ('Monstros SA', 'Os Incríveis', 'WALL-E');

INSERT INTO pixar.box_office
(movie_id, rating, domestic_sales, international_sales)
VALUES
(8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

# ex - 6
SELECT * FROM pixar.movies WHERE title LIKE 'WALL%';

DELETE FROM pixar.box_office
WHERE movie_id = 11;

DELETE FROM pixar.movies
WHERE id = 11;

# ex - 7
SELECT * FROM pixar.movies WHERE director LIKE 'Andrew%';
SELECT * FROM pixar.box_office;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM pixar.box_office
WHERE movie_id IN (2, 9);

DELETE FROM pixar.movies
WHERE director LIKE 'Andrew Stanton';
