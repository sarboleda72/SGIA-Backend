SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema sgia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sgia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS sgia ;
USE mydb ;

-- -----------------------------------------------------
-- Table sgia.usuarios
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sgia.usuarios (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  identificador INT NOT NULL,
  nombre_completo VARCHAR(255) NOT NULL,
  documento VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  privilegios VARCHAR(255) NOT NULL,
  estado TINYINT NOT NULL,
  usuarioscol VARCHAR(45) NULL,
  PRIMARY KEY (id_usuario));


-- -----------------------------------------------------
-- Table sgia.almacenes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sgia.almacenes (
  id_almacen INT NOT NULL AUTO_INCREMENT,
  regional VARCHAR(255) NOT NULL,
  centro VARCHAR(255) NOT NULL,
  estado TINYINT NULL,
  PRIMARY KEY (id_almacen));


-- -----------------------------------------------------
-- Table sgia.prestamos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sgia.prestamos (
  id_prestamo INT NOT NULL AUTO_INCREMENT,
  fecha_prestamo DATE NOT NULL,
  fechaFin DATE NOT NULL,
  fecha_devolucion DATE NOT NULL,
  estado TINYINT NOT NULL,
  usuarios_id_usuario INT NOT NULL,
  almacenes_id_almacen INT NOT NULL,
  PRIMARY KEY (id_prestamo),
  CONSTRAINT fk_prestamos_usuarios1
    FOREIGN KEY (usuarios_id_usuario)
    REFERENCES sgia.usuarios (id_usuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_prestamos_almacenes1
    FOREIGN KEY (almacenes_id_almacen)
    REFERENCES sgia.almacenes (id_almacen)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table sgia.herramientas
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sgia.herramientas (
  id_herramienta INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  cantidad INT NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  marca VARCHAR(255) NOT NULL,
  estado TINYINT NOT NULL,
  motivo TEXT NOT NULL,
  almacenes_id_almacen INT NOT NULL,
  importe INT NOT NULL,
  PRIMARY KEY (id_herramienta),
  CONSTRAINT fk_herramientas_almacenes1
    FOREIGN KEY (almacenes_id_almacen)
    REFERENCES sgia.almacenes (id_almacen)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table mydb.detalle_prestamos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.detalle_prestamos (
  id INT NOT NULL AUTO_INCREMENT,
  prestamos_id_prestamo INT NOT NULL,
  herramientas_id_herramienta INT NOT NULL,
  estado TINYINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_detalle_prestamos_prestamos1
    FOREIGN KEY (prestamos_id_prestamo)
    REFERENCES sgia.prestamos (id_prestamo)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_detalle_prestamos_herramientas1
    FOREIGN KEY (herramientas_id_herramienta)
    REFERENCES sgia.herramientas (id_herramienta)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


USE sgia ;

-- -----------------------------------------------------
-- Table sgia.paz_salvos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sgia.paz_salvos (
  id_pazysalvo INT NOT NULL AUTO_INCREMENT,
  fecha_generacion DATE NOT NULL,
  estado TINYINT NOT NULL,
  Usuario_id_usuario INT NOT NULL,
  PRIMARY KEY (id_pazysalvo),
  CONSTRAINT fk_pazYSalvo_Usuario1
    FOREIGN KEY (Usuario_id_usuario)
    REFERENCES sgia.usuarios (id_usuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



-- -----------------------------------------------------
-- Table sgia.penalizaciones
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sgia.penalizaciones (
  id_pen INT NOT NULL AUTO_INCREMENT,
  fecha_pen DATE NOT NULL,
  estado_pen VARCHAR(255) NOT NULL,
  motivo_pen VARCHAR(255) NOT NULL,
  id_prestamo INT NOT NULL,
  PRIMARY KEY (id_pen));


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;