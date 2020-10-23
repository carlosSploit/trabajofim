-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2020 a las 00:16:35
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendavirtual`
--
CREATE DATABASE IF NOT EXISTS `tiendavirtual` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tiendavirtual`;

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `usp_ActualizarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCiu` (IN `id` INT, IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tciudad SET IdDepartamento = idDep , NombreCiudad = nom WHERE IdCiudad = id;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDepart` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
	UPDATE tdepartamento SET NombreDepart = nom WHERE IdDepartamento = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCiu` (IN `id` INT)  BEGIN
DELETE FROM tciudad WHERE IdCiudad = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDepart` (IN `id` INT)  BEGIN
DELETE FROM tdepartamento WHERE IdDepartamento = id;
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCiu` (IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tciudad (IdDepartamento, NombreCiudad ) VALUES (idDep,nom);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDepart` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO tdepartamento (NombreDepart) VALUES (nomd);
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCiu` (IN `idDep` INT)  BEGIN
SELECT * FROM tciudad WHERE IdDepartamento = idDep;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDepart` ()  BEGIN
SELECT * FROM tdepartamento WHERE 1 ;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tciudad`
--

DROP TABLE IF EXISTS `tciudad`;
CREATE TABLE `tciudad` (
  `IdCiudad` int(11) NOT NULL,
  `IdDepartamento` int(11) NOT NULL,
  `NombreCiudad` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tdepartamento`
--

DROP TABLE IF EXISTS `tdepartamento`;
CREATE TABLE `tdepartamento` (
  `IdDepartamento` int(11) NOT NULL,
  `NombreDepart` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  ADD PRIMARY KEY (`IdCiudad`);

--
-- Indices de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  ADD PRIMARY KEY (`IdDepartamento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  MODIFY `IdCiudad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  MODIFY `IdDepartamento` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
