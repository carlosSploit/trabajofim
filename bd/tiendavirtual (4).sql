-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2020 a las 21:51:09
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarAdminis` (IN `idA` INT, IN `dni` INT, IN `nom` VARCHAR(100), IN `corre` VARCHAR(60), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` VARCHAR(11), IN `tiptrabajo` VARCHAR(10))  BEGIN
DECLARE idPer varchar(10);
set idPer = (select tu.dni_user from tusuario tu where tu.dni_user = dni);

if idPer is null THEN

UPDATE tadministrador ta, tusuario tu SET ta.idUser = dni , ta.usser = dni , ta.pass = pass ,ta.TipoAdministrador = tiptrabajo ,tu.dni_user = dni, tu.nombre = nom,tu.correo = corre , tu.telefono = telef , tu.foto = foto WHERE tu.dni_user = ta.idUser AND ta.idAdministracion = idA;

ELSE

UPDATE tadministrador ta, tusuario tu SET ta.pass = pass ,ta.TipoAdministrador = tiptrabajo ,tu.nombre = nom,tu.correo = corre , tu.telefono = telef , tu.foto = foto WHERE tu.dni_user = ta.idUser AND ta.idAdministracion = idA;

END IF;


END$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProduc` (IN `CodPro` INT, IN `idprov` INT, IN `idCatP` INT, IN `nom` VARCHAR(60), IN `descri` VARCHAR(200), IN `canti` INT, IN `preC` FLOAT, IN `preVe` FLOAT, IN `photo` LONGBLOB, IN `idProdu` INT)  NO SQL
BEGIN
UPDATE tproducto SET CodProduc = CodPro, idProveedor = idprov ,idTipo = idCatP , Nombre = nom , Descripcion = descri ,Cantidad = canti, PrecioC = preC, PrecioV = preVe , photo = photo WHERE idproducto = idProdu;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProve` (IN `id` INT, IN `nom` VARCHAR(60), IN `Ema` VARCHAR(30), IN `telf` VARCHAR(9))  BEGIN
UPDATE tproveedor SET nombre= nom , Email = Ema , celular = telf WHERE idProveedor = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarAdminis` (IN `id` INT)  BEGIN
UPDATE tadministrador ta SET ta.estado = false WHERE ta.idAdministracion = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCatPro` (IN `id` INT)  BEGIN
DELETE FROM ttipoproducto WHERE idTipo =  id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCiu` (IN `id` INT)  BEGIN
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM tciudad WHERE IdCiudad = id;
SET FOREIGN_KEY_CHECKS=1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarClient` (IN `id` INT)  BEGIN
UPDATE tcliente te SET te.estado = false WHERE te.idAdministracion = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDepart` (IN `id` INT)  BEGIN
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM tdepartamento WHERE IdDepartamento = id;
SET FOREIGN_KEY_CHECKS=1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDist` (IN `id` INT)  BEGIN
DELETE FROM tdistrito WHERE idDistrito = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarProduc` (IN `id` INT)  BEGIN
UPDATE tproducto SET estado = false WHERE idproducto = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarProve` (IN `id` INT)  BEGIN
DELETE FROM tproveedor WHERE idProveedor= id ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarAdminis` (IN `dni` INT(9), IN `nom` VARCHAR(100), IN `corre` VARCHAR(60), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` VARCHAR(11), IN `tiptrabajo` VARCHAR(100))  BEGIN

DECLARE idPer varchar(10);
set idPer = (select tu.dni_user from tusuario tu where tu.dni_user = dni);
/*SI NO EXITSTE INSERTA EL USUARIO, SI EXITE SOLO INSERTA EL ADMINISTRADOR*/
IF idPer is null THEN

INSERT INTO tusuario ( dni_user , nombre , correo, telefono, foto) VALUES (dni,nom,corre,telef,foto);
INSERT INTO tadministrador (idUser, usser, pass, TipoAdministrador,estado) VALUES (dni,dni,pass,tiptrabajo,1);

ELSE

INSERT INTO tadministrador (idUser, usser, pass, TipoAdministrador,estado) VALUES (dni,dni,pass,tiptrabajo,1);

END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCatPro` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO ttipoproducto (nombreTipo) VALUES (nomd);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCiu` (IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tciudad (IdDepartamento, NombreCiudad ) VALUES (idDep,nom);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarClient` (IN `dni` INT(11), IN `nom` VARCHAR(100), IN `corre` VARCHAR(100), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` INT)  BEGIN
DECLARE idPer varchar(10);
set idPer = (select tu.dni_user from tusuario tu where tu.dni_user = dni);

IF idPer is null THEN

INSERT INTO tusuario ( dni_user , nombre , correo, telefono, foto) VALUES (dni,nom,corre,telef,foto);

INSERT INTO tcliente (idUser, usser, pass,estado) VALUES (dni,corre,pass,1);

ELSE

INSERT INTO tcliente (idUser, usser, pass,estado) VALUES (dni,corre,pass,1);

END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCuentaC` (IN `idu` INT, IN `mac` VARCHAR(40))  BEGIN

DECLARE idPer varchar(10);
set idPer = (SELECT tcc.idClient FROM tcuentaa tcc WHERE tcc.idClient = idu AND tcc.mac = mac );

IF idPer = idu THEN
/*si ya existe se actualiza y se le activa la secion*/
UPDATE tcuentaa tca SET tca.secionE = true WHERE tca.idClient = idu;

ELSE
/*si no existe se inserta los datos */
INSERT INTO tcuentaa (idClient , mac , secionE ) VALUES (idu,mac,1);

END IF;
/*cierra las cuentas para la duplicacion de inicios de secion */
UPDATE tcuentaa tca SET tca.secionE = false WHERE tca.mac = mac AND
tca.idClient <> idu;

UPDATE tcuentaaa tca SET tca.SecuonE = false WHERE tca.mac = mac ;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCuentaCA` (IN `idA` INT, IN `mac` VARCHAR(40))  BEGIN

DECLARE idPer varchar(10);
set idPer = (SELECT tcc.idAdmin FROM tcuentaaa tcc WHERE tcc.idAdmin = idA AND tcc.mac = mac );

IF idPer = idA THEN
/*si ya existe solo se actualisa*/
UPDATE tcuentaaa tca SET tca.SecuonE = true WHERE tca.idAdmin = idA;

ELSE
/*si no exite la secion se inserta una nueva secion*/
INSERT INTO tcuentaaa (idAdmin , mac , SecuonE ) VALUES (idA,mac,1);

END IF;
/*cierra las demas seciones evitando que se abran mas seciones en un ena misma maquina*/

UPDATE tcuentaaa tcaa SET tcaa.SecuonE = false WHERE tcaa.mac = mac AND 
tcaa.idAdmin <> idA;

UPDATE tcuentaa tca SET tca.secionE = false WHERE tca.mac = mac ;

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarAdminis` (IN `tip` INT, IN `uss` VARCHAR(60), IN `pas` VARCHAR(60))  BEGIN
IF tip = 1 THEN
	SELECT ta.idAdministracion ,ta.idUser, ta.usser , ta.pass, 				ta.TipoAdministrador, tu.dni_user, tu.nombre, tu.correo, tu.telefono, 	  tu.foto FROM tadministrador ta , tusuario tu where ta.idUser = 			tu.dni_user AND ta.estado = 1;
END IF;
IF tip = 2 THEN
	SELECT ta.idAdministracion ,ta.idUser, ta.usser , ta.pass, 				ta.TipoAdministrador, tu.dni_user, tu.nombre, tu.correo, tu.telefono,tu.foto FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.estado = 1 AND ta.usser = uss AND ta.pass = pas; 
END IF;
IF tip = 3 THEN
	SELECT ta.idAdministracion ,ta.idUser, ta.usser , ta.pass, 				ta.TipoAdministrador, tu.dni_user, tu.nombre, tu.correo, tu.telefono,tu.foto FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.estado = 1 AND ta.idAdministracion = uss;
END IF;
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarClient` (IN `tip` INT, IN `uss` VARCHAR(60), IN `pas` VARCHAR(60))  BEGIN
/*IF tip = 1 THEN

END IF;*/
IF tip = 1 THEN

SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono,tu.foto, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc WHERE TC.idUser = tu.dni_user AND tc.idCliente = uss;
END IF;
IF tip = 2 THEN

SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono,tu.foto, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc WHERE TC.idUser = tu.dni_user AND tc.usser= uss AND tc.pass= pas ;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCuentaC` (IN `mac` VARCHAR(60))  BEGIN
SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono,tu.foto, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc , tcuentaa tca WHERE TC.idUser = tu.dni_user AND tca.idClient = tc.idCliente AND tca.mac = mac AND tca.secionE = 1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCuentaCA` (IN `mac` VARCHAR(60))  BEGIN

SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono,tu.foto, ta.idAdministracion , ta.usser , ta.pass , ta.TipoAdministrador  FROM tusuario tu, tadministrador ta , tcuentaaa tca WHERE ta.idUser = tu.dni_user AND tca.idClient = ta.idAdministracion AND tca.mac = mac AND tca.SecionE = 1;

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
    	SELECT tp.idproducto, tp.Nombre, tp.calificacion , tp.PrecioV, tp.photo FROM 			tproducto tp WHERE tp.estado = 1 AND tp.Nombre LIKE CONCAT('%', nom, '%');
    END IF;
    IF tiL = 2 THEN
    	SELECT tp.idproducto, tp.CodProduc, tp.idProveedor, tpo.nombre as 'ProveNombre', 			tp.idTipo , tcp.nombreTipo, tp.Nombre, tp.Descripcion, tp.Cantidad, tp.PrecioC, tp.PrecioV, tp.photo , tp.calificacion FROM tproducto tp, tproveedor tpo, ttipoproducto tcp WHERE tp.idProveedor = tpo.idProveedor AND tp.idTipo = tcp.idTipo AND tp.estado = 1 AND tp.idproducto = nom;
    END IF;
    IF tiL = 3 THEN
    SELECT tp.idproducto, tp.Nombre, tp.calificacion , tp.PrecioV, 		tp.photo FROM tproducto tp WHERE 	tp.estado = 1 AND tp.Nombre 	LIKE CONCAT(nom, '%') OR tp.CodProduc LIKE CONCAT(nom, '%');
    END IF;
    IF tiL = 4 THEN
    SELECT tp.idproducto, tp.Nombre, tp.calificacion , tp.PrecioV, 		tp.photo FROM tproducto tp WHERE tp.estado = 1 AND tp.idTipo = 		nom;
    END IF;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarProve` ()  BEGIN
SELECT * FROM tproveedor WHERE 1;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tadministrador`
--

CREATE TABLE `tadministrador` (
  `idAdministracion` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `usser` varchar(100) NOT NULL,
  `pass` varchar(11) NOT NULL,
  `TipoAdministrador` varchar(20) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tadministrador`
--

INSERT INTO `tadministrador` (`idAdministracion`, `idUser`, `usser`, `pass`, `TipoAdministrador`, `estado`) VALUES
(1, 15975345, '15975345', '14725836', 'Trabajador', 1),
(2, 147528369, '147528369', '4564878', 'Administracion', 1),
(3, 2147483647, '2147483647', '45454545454', 'Gerente', 1),
(5, 41747, '41747', '45454545454', 'asdasdsadasd', 1),
(6, 454545646, '454545646', '4545645456', 'Trabajador', 0),
(7, 147417471, '147417471', '4545645456', 'Trabajador', 1),
(8, 234545445, '234545445', '4545645456', 'Trabajador', 1),
(9, 789455646, '789455646', '4545645456', 'Trabajador', 1),
(10, 369258147, '369258147', '1234567', 'Trabajador', 1),
(11, 789456123, '789456123', '4545645456', 'Trabajador', 0),
(12, 56565656, '56565656', '4546545', 'Administrador', 1);

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
-- Estructura de tabla para la tabla `tcliente`
--

CREATE TABLE `tcliente` (
  `idCliente` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `usser` varchar(100) NOT NULL,
  `pass` varchar(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tcliente`
--

INSERT INTO `tcliente` (`idCliente`, `idUser`, `usser`, `pass`, `estado`) VALUES
(1, 15975345, 'Arturo14212000@gmail.com', '4546545', 1),
(2, 969280255, 'Arturo1421201@gmail.com', '4546545', 1),
(3, 78945612, 'Estefany@gmail.com', '12345678', 1),
(4, 960262, 'hasdjhsajdhjh', '747474125', 1),
(5, 703035, 'AnaMariaCastilloDeslgado@gmail.com', '122345567', 1),
(6, 1234567, 'sdfdsfdsfdsf@gmail.com', '12345678', 1),
(7, 152914, 'asdhjkshd@gmail.com', '123456789', 1),
(8, 425648, 'vegasadriana64@gmail.com', '1597534', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcuentaa`
--

CREATE TABLE `tcuentaa` (
  `idSecion` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `mac` varchar(40) NOT NULL,
  `secionE` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tcuentaa`
--

INSERT INTO `tcuentaa` (`idSecion`, `idClient`, `mac`, `secionE`) VALUES
(1, 0, '8', 1),
(2, 5, 'hjhjhjkhjhjsdhjshdjshdjsd', 1),
(3, 1, '179.6.48.238', 0),
(4, 6, '179.6.48.238', 0),
(5, 6, '179.6.48.234', 1),
(6, 5, '179.6.48.237', 1),
(7, 5, '179.6.48.238', 0),
(8, 7, '179.6.48.239', 1),
(9, 7, '179.6.48.249', 1),
(10, 3, '179.6.48.250', 1),
(11, 3, '179.6.48.238', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcuentaaa`
--

CREATE TABLE `tcuentaaa` (
  `idSecion` int(11) NOT NULL,
  `idAdmin` int(11) NOT NULL,
  `mac` varchar(40) NOT NULL,
  `SecuonE` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tcuentaaa`
--

INSERT INTO `tcuentaaa` (`idSecion`, `idAdmin`, `mac`, `SecuonE`) VALUES
(6, 11, '179.6.48.238', 0),
(7, 12, '179.6.48.238', 0);

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
  `nombreDistrito` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tdistrito`
--

INSERT INTO `tdistrito` (`idDistrito`, `idCiudad`, `nombreDistrito`) VALUES
(6, 12, 'Piura'),
(7, 12, 'Castilla'),
(8, 0, 'Piura');

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
(1, '969280255', 4, 58, 'Calsones licoslicos', 'Calsones de lenseria de color rojo para alta pacion', 40, 2.5, 5, 1, 0x61646a6b617364686a736168646a736168646a7368646b6a617368646b73, 1),
(2, '789456', 5, 60, 'Lechita para ti', 'Leche ricolina para cosas ricolinas', 20, 4.5, 6, 1, 0x34353634353634363436, 1),
(3, '789159456', 6, 60, 'Lechita rojiwis', 'Leche descremada para tu consumo y tu adixion pes bebesita', 50, 3, 4, 1, 0x34353634353634363436, 1);

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
(58, '9  Game'),
(59, '6 Icono'),
(60, '3 ana'),
(61, '2 Icono'),
(62, '4 Ropa'),
(63, '7 Electronica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusuario`
--

CREATE TABLE `tusuario` (
  `dni_user` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `telefono` int(9) NOT NULL,
  `foto` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tusuario`
--

INSERT INTO `tusuario` (`dni_user`, `nombre`, `correo`, `telefono`, `foto`) VALUES
(41747, 'asdsadasdasd', 'sadasdsadsad', 5454545, 0x73647361647361647361647361647364),
(152914, 'Juan sapata medina', 'asdhjkshd@gmail.com', 969280255, 0x35363536352036353520353635),
(425648, 'Adriana Karina Vegas Lupuche', 'vegasadriana64@gmail.com', 969280255, 0x35363536352036353520353635),
(703035, '', 'AnaMariaCastilloDeslgado@gmail.com', 969280255, 0x35363536352036353520353635),
(960262, '', 'hasdjhsajdhjh', 969280255, 0x35363536352036353520353635),
(1234567, '', 'sdfdsfdsfdsf', 147852695, 0x6473666466617366616661736664736661736466617366666166),
(15975345, 'Carlos hernandes', 'arturo454@gmail.com', 546465, 0x736168646a6168646a6b6168646a6b6168646a6b617368646a6b7361),
(56565656, 'Cosita aaaa', 'Arturo1421200@gmail.com', 456456, 0x73616a6b646b61736a),
(78945612, 'Care culo', 'Estefany@gmail.com', 147852695, 0x6473666466617366616661736664736661736466617366666166),
(147417471, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 0x61736a646773616a646773616a646768736168646a6173),
(147528369, 'carlos ancajima hernandez', 'arturo14@gmail.com', 969280255, 0x61736473616461736664737361646173646173647361647361647366647366),
(234545445, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 0x61736a646773616a646773616a646768736168646a6173),
(369258147, 'Me como un culo', 'asdasdsadsadsdas', 123456789, 0x61736a646773616a646773616a646768736168646a6173),
(454545646, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 0x736168646a6168646a6b6168646a6b6168646a6b617368646a6b7361),
(789455646, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 0x61736a646773616a646773616a646768736168646a6173),
(789456123, 'sdfsdfdsf', 'Arturo@gmail.com', 54546546, 0x61736a646773616a646773616a646768736168646a6173),
(969280255, 'Cosita aaaa', 'Arturo1421200@gmail.com', 456456, 0x73616a6b646b61736a),
(2147483647, 'asdsadasdasd', 'sadasdsadsad', 5454545, 0x736168646a6168646a6b6168646a6b6168646a6b617368646a6b7361);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tadministrador`
--
ALTER TABLE `tadministrador`
  ADD PRIMARY KEY (`idAdministracion`);

--
-- Indices de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  ADD PRIMARY KEY (`IdCiudad`);

--
-- Indices de la tabla `tcliente`
--
ALTER TABLE `tcliente`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indices de la tabla `tcuentaa`
--
ALTER TABLE `tcuentaa`
  ADD PRIMARY KEY (`idSecion`);

--
-- Indices de la tabla `tcuentaaa`
--
ALTER TABLE `tcuentaaa`
  ADD PRIMARY KEY (`idSecion`);

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
-- Indices de la tabla `tusuario`
--
ALTER TABLE `tusuario`
  ADD PRIMARY KEY (`dni_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tadministrador`
--
ALTER TABLE `tadministrador`
  MODIFY `idAdministracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  MODIFY `IdCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tcliente`
--
ALTER TABLE `tcliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tcuentaa`
--
ALTER TABLE `tcuentaa`
  MODIFY `idSecion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tcuentaaa`
--
ALTER TABLE `tcuentaaa`
  MODIFY `idSecion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tproveedor`
--
ALTER TABLE `tproveedor`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ttipoproducto`
--
ALTER TABLE `ttipoproducto`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
