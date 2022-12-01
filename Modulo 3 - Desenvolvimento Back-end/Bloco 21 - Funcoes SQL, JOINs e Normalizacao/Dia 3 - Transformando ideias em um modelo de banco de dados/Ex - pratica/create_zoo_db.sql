CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animal (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL,
    species VARCHAR(60) NOT NULL,
    genre CHAR(1) NOT NULL,
    localization VARCHAR(60) NOT NULL,
    birthday DATE
);

CREATE TABLE animal_has_zoo_keeper (
	animal_id INT NOT NULL,
    zoo_keeper_id INT NOT NULL,
    PRIMARY KEY (animal_id, zoo_keeper_id),
    FOREIGN KEY (animal_id) REFERENCES animal(id),
    FOREIGN KEY (zoo_keeper_id) REFERENCES zoo_keeper(id)
);

CREATE TABLE zoo_keeper (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager(id)
);

CREATE TABLE manager (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL
);