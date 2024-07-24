CREATE DATABASE SGIA;
USE SGIA;

CREATE TABLE herramientas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    disponible INT NOT NULL,
    valor VARCHAR(40) NOT NULL,
    estado VARCHAR(20) NOT NULL
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(255) NOT NULL,
    tipo_documento VARCHAR(20) NOT NULL,
    documento VARCHAR(20) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    id_ficha INT NOT NULL,
    rol VARCHAR(20) NOT NULL,
    estado VARCHAR(20) NOT NULL
);

INSERT INTO `herramientas` (`id`, `imagen`, `nombre`, `marca`, `cantidad`, `disponible`, `valor`, `estado`) VALUES
(3, '../../assets/images/herramientas/martillo.jpg', 'Martillo', 'stanley', 20, 20, '3', 'activo'),
(4, '../../assets/images/herramientas/multimetro.png', 'Multimetro', 'Red', 10, 10, '2', 'activo'),
(5, '../../assets/images/herramientas/taladro.jpg', 'Taladro', 'stanley', 15, 15, '1', 'activo'),
(6, '../../assets/images/herramientas/alicate.jpg', 'Alicate', 'stanley', 12, 12, '2', 'activo');

INSERT INTO `usuarios` (`id`, `nombreCompleto`, `tipoDocumento`, `documento`, `contrasena`, `idFicha`, `privilegio`, `estado`) VALUES
(5, 'Julian', 'CC', '1060650914', '$2y$10$nNMshu5QPZcUWS3cuenI1.wmFehJK47VHiI9r3lDQ65w.bhhJxbXS', 2613934, 'aprendiz', 'activo'),
(6, 'Santiago Arboleda', 'CC', '1053848763', '$2y$10$mxt7ixa7vPprTYTIa0ldJ.Q8fica4TflP0DqYZVPySIZLCno.H/ii', 235555, 'super', 'activo');