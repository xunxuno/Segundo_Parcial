CREATE DATABASE Vox_Scritus;
USE Vox_Scritus;

CREATE TABLE IF NOT EXISTS Usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Operaciones (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    palabra_original VARCHAR(100) NOT NULL,
    idioma_original VARCHAR(15) NOT NULL,
    idioma_destino VARCHAR(15) NOT NULL,
    nueva_palabra VARCHAR(100) NOT NULL,
    fecha_operacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    INDEX (id_usuario)
);


CREATE TABLE IF NOT EXISTS Historial_Login (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    fecha_acceso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    INDEX (id_usuario)
);


SELECT * FROM Usuarios;    
SELECT * FROM Operaciones;    
SELECT * FROM Historial_Login;