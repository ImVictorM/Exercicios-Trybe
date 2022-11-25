USE pixar;

# ex - 1
SELECT
	mvs.title,
	box.domestic_sales,
    box.international_sales
FROM pixar.box_office AS box
INNER JOIN pixar.movies AS mvs
	ON mvs.id = box.movie_id;

# ex - 2
SELECT
	movies.title,
	SUM(box_office.international_sales) + SUM(box_office.domestic_sales) AS total_sales
FROM pixar.box_office AS box_office
INNER JOIN pixar.movies AS movies
	ON movies.id = box_office.movie_id
WHERE box_office.international_sales > box_office.domestic_sales
GROUP BY movies.id;

# ex - 3
SELECT
	movies.title,
    box_office.rating
FROM 
	pixar.movies AS movies
INNER JOIN 
	pixar.box_office AS box_office 
    ON movies.id = box_office.movie_id
ORDER BY box_office.rating DESC;

# ex - 4
SELECT
	theater.*,
    movies.*
FROM 
	pixar.theater AS theater
LEFT JOIN 
	pixar.movies AS movies
    ON theater.id = movies.theater_id
ORDER BY theater.`name`;

# ex - 5
SELECT
    movies.*,
    theater.*
FROM 
	pixar.theater AS theater
RIGHT JOIN 
	pixar.movies AS movies
    ON theater.id = movies.theater_id
ORDER BY theater.`name`;

# ex - 6
SELECT
	movies.*
FROM 
	pixar.movies AS movies
INNER JOIN
	pixar.box_office AS box_office
    ON box_office.movie_id = movies.id
WHERE 
	movies.theater_id IS NOT NULL
    AND box_office.rating > 8;
