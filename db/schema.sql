DROP DATABASE IF EXISTS steam_db;
CREATE DATABASE steam_db;

USE steam_db;

CREATE TABLE users (
    id INT(11) unsigned NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    steam_id VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
