CREATE DATABASE sgia_node;
USE sgia_node;

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

CREATE TABLE prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    estado VARCHAR(20) NOT NULL,
    id_usuario INT NOT NULL,
    id_herramienta INT NOT NULL
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_herramienta) REFERENCES herramientas(id)
);
