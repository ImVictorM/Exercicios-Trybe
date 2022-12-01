CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE employee (
	funcionario_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    data_cadastro DATETIME
);

CREATE TABLE department (
	departamento_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
);

CREATE TABLE employee_department (
	funcionario_id INT NOT NULL,
    departamento_id INT NOT NULL,
    PRIMARY KEY (funcionario_id, departamento_id),
	FOREIGN KEY (funcionario_id) REFERENCES employee(funcionario_id),
	FOREIGN KEY (departamento_id) REFERENCES department(departamento_id)
);

INSERT INTO employee 
(funcionario_id, nome, sobrenome, email, telefone, data_cadastro)
VALUES 
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO department
(setor)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marcketing');

INSERT INTO employee_department
(funcionario_id, departamento_id)
VALUES
(12, 2),
(12, 1),
(13, 3),
(14, 4),
(14, 2),
(15, 5);
