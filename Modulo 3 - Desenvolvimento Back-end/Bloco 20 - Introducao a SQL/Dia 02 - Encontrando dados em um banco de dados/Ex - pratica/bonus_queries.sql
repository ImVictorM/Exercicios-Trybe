USE PiecesProvider;
# EX - 1
SELECT Piece, Price FROM Provides 
WHERE Provider = 'RBT';

# EX - 2
SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

# EX - 3
SELECT Provider, Price FROM Provides 
ORDER BY Price DESC
LIMIT 4 OFFSET 2;

# EX - 4
SELECT * FROM Provides
WHERE Provider='HAL'
ORDER BY Price DESC;

# EX - 5
SELECT COUNT(Provider) FROM Provides
WHERE Piece=1;