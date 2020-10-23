-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2020 a las 01:09:16
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

DROP PROCEDURE IF EXISTS `usp_ActualizarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDist` (IN `id` INT, IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tdistrito SET idCiudad = idCiu , nombreDistrito = nom WHERE idDistrito = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCiu` (IN `id` INT)  BEGIN
DELETE FROM tciudad WHERE IdCiudad = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDepart` (IN `id` INT)  BEGIN
DELETE FROM tdepartamento WHERE IdDepartamento = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDist` (IN `id` INT)  BEGIN
DELETE FROM tdistrito WHERE idDistrito = id;
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCiu` (IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tciudad (IdDepartamento, NombreCiudad ) VALUES (idDep,nom);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDepart` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO tdepartamento (NombreDepart) VALUES (nomd);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDist` (IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tdistrito (idCiudad, nombreDistrito) VALUES (idCiu,nom);
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCiu` (IN `idDep` INT)  BEGIN
SELECT * FROM tciudad WHERE IdDepartamento = idDep;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDepart` ()  BEGIN
SELECT * FROM tdepartamento WHERE 1 ;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDist` (IN `idCiu` INT)  BEGIN
SELECT * FROM tdistrito WHERE idCiudad =  idCiu;
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

--
-- Volcado de datos para la tabla `tciudad`
--

INSERT INTO `tciudad` (`IdCiudad`, `IdDepartamento`, `NombreCiudad`) VALUES(2, 2, 'Piura');

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
-- Volcado de datos para la tabla `tdepartamento`
--

INSERT INTO `tdepartamento` (`IdDepartamento`, `NombreDepart`) VALUES(2, 'Piura');
INSERT INTO `tdepartamento` (`IdDepartamento`, `NombreDepart`) VALUES(3, 'Pasco');
INSERT INTO `tdepartamento` (`IdDepartamento`, `NombreDepart`) VALUES(8, 'Huancavelica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tdistrito`
--

DROP TABLE IF EXISTS `tdistrito`;
CREATE TABLE `tdistrito` (
  `idDistrito` int(11) NOT NULL,
  `idCiudad` int(11) NOT NULL,
  `nombreDistrito` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tdistrito`
--

INSERT INTO `tdistrito` (`idDistrito`, `idCiudad`, `nombreDistrito`) VALUES(1, 2, 'Piura');
INSERT INTO `tdistrito` (`idDistrito`, `idCiudad`, `nombreDistrito`) VALUES(2, 2, 'Catilla');

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
-- Indices de la tabla `tdistrito`
--
ALTER TABLE `tdistrito`
  ADD PRIMARY KEY (`idDistrito`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  MODIFY `IdCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  MODIFY `IdDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tdistrito`
--
ALTER TABLE `tdistrito`
  MODIFY `idDistrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
