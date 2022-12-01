CREATE DATABASE IF NOT EXISTS music_station;
USE music_station;

CREATE TABLE artist (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    artistic_name VARCHAR(60) NOT NULL,
    birthday DATE
);

CREATE TABLE artist_has_album (
	artist_id INT NOT NULL,
    album_id INT NOT NULL,
    PRIMARY KEY (artist_id, album_id),
    FOREIGN KEY (artist_id) REFERENCES artist(id),
    FOREIGN KEY (album_id) REFERENCES album(id)
);

CREATE TABLE album (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    release_date DATE NOT NULL
);

CREATE TABLE music (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    length DOUBLE NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    album_id INT NOT NULL,
    genre_id INT NOT NULL,
    FOREIGN KEY (genre_id) REFERENCES genre(id),
    FOREIGN KEY (album_id) REFERENCES album(id)
);

CREATE TABLE genre (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL
);