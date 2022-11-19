USE Scientists;

# query - 1
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';

# query - 2
SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'a%'
ORDER BY Name;

# query - 3
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;

# query - 4
SELECT * FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

# query - 5
SELECT * FROM Scientists.Projects
WHERE Hours > 500;

# query - 6
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800;

# query - 7
SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE 'a%';

# query - 8
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%h%';
