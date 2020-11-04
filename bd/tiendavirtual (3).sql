-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2020 a las 07:19:39
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

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCatPro` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE ttipoproducto SET nombreTipo = nom WHERE idTipo = id ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCiu` (IN `id` INT, IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tciudad SET IdDepartamento = idDep , NombreCiudad = nom WHERE IdCiudad = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDepart` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
	UPDATE tdepartamento SET NombreDepart = nom WHERE IdDepartamento = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDist` (IN `id` INT, IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tdistrito SET idCiudad = idCiu , nombreDistrito = nom WHERE idDistrito = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProve` (IN `id` INT, IN `nom` VARCHAR(60), IN `Ema` VARCHAR(30), IN `telf` VARCHAR(9))  BEGIN
UPDATE tproveedor SET nombre= nom , Email = Ema , celular = telf WHERE idProveedor = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCatPro` (IN `id` INT)  BEGIN
DELETE FROM ttipoproducto WHERE idTipo =  id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCiu` (IN `id` INT)  BEGIN
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM tciudad WHERE IdCiudad = id;
SET FOREIGN_KEY_CHECKS=1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDepart` (IN `id` INT)  BEGIN
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM tdepartamento WHERE IdDepartamento = id;
SET FOREIGN_KEY_CHECKS=1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDist` (IN `id` INT)  BEGIN
DELETE FROM tdistrito WHERE idDistrito = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarProve` (IN `id` INT)  BEGIN
DELETE FROM tproveedor WHERE idProveedor= id ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCatPro` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO ttipoproducto (nombreTipo) VALUES (nomd);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCiu` (IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tciudad (IdDepartamento, NombreCiudad ) VALUES (idDep,nom);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDepart` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO tdepartamento (NombreDepart) VALUES (nomd);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDist` (IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tdistrito (idCiudad, nombreDistrito) VALUES (idCiu,nom,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarProduc` (IN `codPro` VARCHAR(10), IN `IdPro` INT, IN `Idtipo` INT, IN `nom` VARCHAR(100), IN `descri` VARCHAR(200), IN `casti` INT, IN `preC` FLOAT, IN `preVe` FLOAT, IN `photo` LONGBLOB)  BEGIN
INSERT INTO `tproducto`(`CodProduc`, `idProveedor`, `idTipo`, `Nombre`, `Descripcion`, `Cantidad`, `PrecioC`, `PrecioV`, `estado`, `photo`, `calificacion`) VALUES (codPro,IdPro,Idtipo,nom,descri,casti,preC,preVe,1,photo,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarProve` (IN `nomd` VARCHAR(60), IN `Email` VARCHAR(30), IN `celular` VARCHAR(9))  NO SQL
BEGIN
INSERT INTO tproveedor (nombre, Email , celular ) VALUES (nomd,Email,celular);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCatPro` ()  BEGIN
SELECT * FROM ttipoproducto WHERE 1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCiu` (IN `idDep` INT)  BEGIN
    IF idDep = -1 THEN 

    SELECT tc.IdCiudad,tc.NombreCiudad, td.IdDepartamento,td.NombreDepart FROM tciudad tc ,tdepartamento td WHERE tc.IdDepartamento=td.IdDepartamento;

    ELSE

    SELECT tc.IdCiudad,tc.NombreCiudad, td.IdDepartamento,td.NombreDepart FROM tciudad tc ,tdepartamento td WHERE tc.IdDepartamento=td.IdDepartamento and tc.IdDepartamento = idDep;

    END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDepart` ()  BEGIN
SELECT * FROM tdepartamento WHERE 1 ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDist` (IN `idCiu` INT)  BEGIN
if idCiu = -1 THEN

SELECT * FROM tdistrito tds, tciudad tc, tdepartamento td WHERE td.IdDepartamento=tc.IdDepartamento AND tc.idCiudad = tds.idCiudad;

ELSE

SELECT * FROM tdistrito tds, tciudad tc, tdepartamento td WHERE td.IdDepartamento=tc.IdDepartamento AND tc.idCiudad = tds.idCiudad AND tds-idDistrito =  idCiu;

END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarProduc` (IN `Us` VARCHAR(2), IN `tiL` INT, IN `nom` VARCHAR(100))  BEGIN
IF us = 'A' THEN
	IF tiL = 1 THEN /*tipo de busqueda para listar en producto*/
    	SELECT tp.idproducto, tp.Nombre, tp.calificacion ,tp.photo FROM 			tproducto tp WHERE tp.Nombre LIKE CONCAT('%', nom, '%');
    END IF;
    IF tiL = 2 THEN
    	SELECT tp.idproducto, tp.CodProduc, tp.idProveedor, tpo.nombre, 			tp.idTipo , tcp.nombreTipo, tp.Nombre, tp.Descripcion, tp.Cantidad, tp.PrecioC, tp.PrecioV, tp.photo FROM tproducto tp, tproveedor tpo, ttipoproducto tcp WHERE tp.idProveedor = tpo.idProveedor AND tp.idTipo = tcp.idTipo AND tp.idproducto LIKE CONCAT(nom, '%');
    END IF;
    /*IF THE
    END IF*/
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarProve` ()  BEGIN
SELECT * FROM tproveedor WHERE 1;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tciudad`
--

CREATE TABLE `tciudad` (
  `IdCiudad` int(11) NOT NULL,
  `IdDepartamento` int(11) NOT NULL,
  `NombreCiudad` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tciudad`
--

INSERT INTO `tciudad` (`IdCiudad`, `IdDepartamento`, `NombreCiudad`) VALUES
(13, 12, 'Lima'),
(14, 10, 'Sullana'),
(15, 10, 'Chiclayo'),
(16, 11, 'Mollendo'),
(17, 10, 'Piura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tdepartamento`
--

CREATE TABLE `tdepartamento` (
  `IdDepartamento` int(11) NOT NULL,
  `NombreDepart` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tdepartamento`
--

INSERT INTO `tdepartamento` (`IdDepartamento`, `NombreDepart`) VALUES
(3, 'Puno'),
(8, 'Huancavelica'),
(10, 'Piura'),
(11, 'Arequipa'),
(12, 'Lima');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tdistrito`
--

CREATE TABLE `tdistrito` (
  `idDistrito` int(11) NOT NULL,
  `idCiudad` int(11) NOT NULL,
  `nombreDistrito` varchar(60) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tdistrito`
--

INSERT INTO `tdistrito` (`idDistrito`, `idCiudad`, `nombreDistrito`, `estado`) VALUES
(6, 12, 'Piura', 0),
(7, 12, 'Castilla', 0),
(8, 0, 'Piura', 0),
(9, 13, 'San Martin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tproducto`
--

CREATE TABLE `tproducto` (
  `idproducto` int(11) NOT NULL,
  `CodProduc` varchar(10) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `idTipo` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `PrecioC` float NOT NULL,
  `PrecioV` float NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `photo` longblob DEFAULT NULL,
  `calificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tproducto`
--

INSERT INTO `tproducto` (`idproducto`, `CodProduc`, `idProveedor`, `idTipo`, `Nombre`, `Descripcion`, `Cantidad`, `PrecioC`, `PrecioV`, `estado`, `photo`, `calificacion`) VALUES
(1, '123456', 4, 58, 'Leche gloria', 'asdsadsadsadsadsadsa', 50, 5, 6.2, 1, 0x64736664736673646673646673646664736664736664, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tproveedor`
--

CREATE TABLE `tproveedor` (
  `idProveedor` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `celular` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tproveedor`
--

INSERT INTO `tproveedor` (`idProveedor`, `nombre`, `Email`, `celular`) VALUES
(4, 'Carlos arturo', 'arturo@gmail.com', '969280255'),
(5, 'Ana maria', 'ana@gmail.com', '969280255'),
(6, 'josemaria hernandez', 'arturo@gmail.com', '969280255');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ttipoproducto`
--

CREATE TABLE `ttipoproducto` (
  `idTipo` int(11) NOT NULL,
  `nombreTipo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ttipoproducto`
--

INSERT INTO `ttipoproducto` (`idTipo`, `nombreTipo`) VALUES
(58, 'Icono asdasdasdsadas'),
(59, 'null Icono'),
(60, 'Icono ana'),
(61, 'Icono Icono'),
(62, '(');

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
-- Indices de la tabla `tproducto`
--
ALTER TABLE `tproducto`
  ADD PRIMARY KEY (`idproducto`);

--
-- Indices de la tabla `tproveedor`
--
ALTER TABLE `tproveedor`
  ADD PRIMARY KEY (`idProveedor`);

--
-- Indices de la tabla `ttipoproducto`
--
ALTER TABLE `ttipoproducto`
  ADD PRIMARY KEY (`idTipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  MODIFY `IdCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  MODIFY `IdDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tdistrito`
--
ALTER TABLE `tdistrito`
  MODIFY `idDistrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tproducto`
--
ALTER TABLE `tproducto`
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tproveedor`
--
ALTER TABLE `tproveedor`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ttipoproducto`
--
ALTER TABLE `ttipoproducto`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
