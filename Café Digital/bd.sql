CREATE DATABASE IF NOT EXISTS bdcafe;

USE bdcafe;

CREATE TABLE IF NOT EXISTS reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `data` DATE,
    `contacto` VARCHAR(100),
    `pessoas` INT,
    `refeicao` VARCHAR(100)
);