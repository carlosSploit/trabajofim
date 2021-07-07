-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-07-2021 a las 07:01:12
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

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
DROP PROCEDURE IF EXISTS `usp_ActualizarAdminis`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarAdminis` (IN `idA` INT, IN `dni` INT, IN `nom` VARCHAR(100), IN `corre` VARCHAR(60), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` VARCHAR(11), IN `tiptrabajo` VARCHAR(10))  BEGIN
DECLARE idPer varchar(10);
set idPer = (select tu.dni_user from tusuario tu where tu.dni_user = dni);

if idPer is null THEN

/*UPDATE tadministrador ta, tusuario tu SET ta.idUser = dni , ta.usser = dni , ta.pass = pass ,ta.TipoAdministrador = tiptrabajo ,tu.dni_user = dni, tu.nombre = nom,tu.correo = corre , tu.telefono = telef , tu.foto = foto WHERE tu.dni_user = ta.idUser AND ta.idAdministracion = idA;*/

IF idA is not null THEN
UPDATE tadministrador ta, tusuario tu SET tu.foto = foto WHERE tu.dni_user = ta.idUser AND ta.idAdministracion = idA;
END IF;

ELSE

UPDATE tadministrador ta, tusuario tu SET ta.pass = pass ,ta.TipoAdministrador = tiptrabajo ,tu.nombre = nom,tu.correo = corre , tu.telefono = telef WHERE tu.dni_user = ta.idUser AND ta.idAdministracion = idA;

END IF;


END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarCatPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCatPro` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE ttipoproducto SET nombreTipo = nom WHERE idTipo = id ;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCiu` (IN `id` INT, IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tciudad SET IdDepartamento = idDep , NombreCiudad = nom WHERE IdCiudad = id;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarClient` (IN `id` INT, IN `dni` INT, IN `nom` VARCHAR(60), IN `corre` VARCHAR(100), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` VARCHAR(11))  BEGIN
/*eSTO QUIERE DECIR QUE ESTA PASANDO UN FILTRO DE DATOS*/
IF (nom <> '') & (corre <> '') & (telef <> '') & (pass <> '') THEN
UPDATE tusuario tu SET tu.nombre = nom ,tu.correo= corre ,tu.telefono= telef WHERE tu.dni_user = dni;

UPDATE tcliente tc SET tc.usser = corre , tc.pass = pass , tc.estado = true WHERE tc.idUser = dni;
ELSE 
UPDATE tusuario tu SET tu.foto = foto WHERE tu.dni_user = dni;
END IF;

END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDepart` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
	UPDATE tdepartamento SET NombreDepart = nom WHERE IdDepartamento = id;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDist` (IN `id` INT, IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tdistrito SET idCiudad = idCiu , nombreDistrito = nom WHERE idDistrito = id;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarPedid`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarPedid` (IN `idPed` INT, IN `estado` INT)  BEGIN
UPDATE tpedido tp SET tp.estado = estado WHERE tp.idpedido = idPed;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarProduc`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProduc` (IN `CodPro` INT, IN `idprov` INT, IN `idCatP` INT, IN `nom` VARCHAR(60), IN `descri` VARCHAR(200), IN `canti` INT, IN `preC` FLOAT, IN `preVe` FLOAT, IN `photo` LONGBLOB, IN `idProdu` INT)  NO SQL
BEGIN
IF (CodPro <> '') &  (idprov <> '') & (idCatP <> '') & (nom <> '') & (descri <> '') & (canti <> '') & (preC <> '') & (preVe <> '')THEN

UPDATE tproducto SET CodProduc = CodPro, idProveedor = idprov ,idTipo = idCatP , Nombre = nom , Descripcion = descri ,Cantidad = canti, PrecioC = preC, PrecioV = preVe WHERE idproducto = idProdu;

ELSE

UPDATE tproducto SET photo = photo WHERE idproducto = idProdu;

END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ActualizarProve`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProve` (IN `id` INT, IN `nom` VARCHAR(60), IN `Ema` VARCHAR(30), IN `telf` VARCHAR(9))  BEGIN
UPDATE tproveedor SET nombre= nom , Email = Ema , celular = telf WHERE idProveedor = id;
END$$

DROP PROCEDURE IF EXISTS `usp_Analitic`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_Analitic` (IN `id` INT)  BEGIN
IF id = 1 THEN
SELECT tv.FechaVenta, CONCAT(ELT(WEEKDAY( tv.FechaVenta ) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')) as dia , SUM(tv.montoT) as monto ,(SELECT SUM(tdv.canti) FROM tdetalleventa tdv, tventa tve WHERE tdv.idVent = tve.idventa AND tve.FechaVenta = tv.FechaVenta GROUP BY tve.FechaVenta) as canti FROM tventa tv GROUP BY tv.FechaVenta LIMIT 7;
END IF;
IF id = 2 THEN
SELECT tdv.idProduc , tp.Nombre , SUM(tdv.canti) as canti , SUM(tdv.canti*(tp.PrecioV-tp.PrecioC)) as monto FROM tdetalleventa tdv INNER JOIN tproducto tp on tp.idproducto = tdv.idProduc GROUP BY tdv.idProduc , tp.Nombre ORDER BY canti DESC LIMIT 3;
END IF;
IF id = 3 THEN
SELECT tdv.idProduc , tp.Nombre , SUM(tdv.canti * (tp.PrecioV-tp.PrecioC)) as monto , SUM(tdv.canti) as canti  FROM tdetalleventa tdv INNER JOIN tproducto tp on tp.idproducto = tdv.idProduc GROUP BY tdv.idProduc , tp.Nombre ORDER BY monto DESC LIMIT 3;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarAdminis`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarAdminis` (IN `id` INT)  BEGIN
UPDATE tadministrador ta SET ta.estado = false WHERE ta.idAdministracion = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarCarritP`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCarritP` (IN `idCli` INT, IN `idPro` INT)  BEGIN

DELETE FROM tcarritp WHERE idproducto = idPro AND idCarritC = (SELECT tcc.idCarrito FROM tcarritc tcc WHERE tcc.idUser = idCli);

/*Actualiza el monto final de los productos*/
UPDATE tcarritc tcc SET tcc.montT = (SELECT SUM(tcp.cantidad * p.PrecioV) FROM tcarritc tcc, tcarritp tcp, tproducto p , tcliente tc WHERE tcp.idproducto = p.idproducto AND tc.idCliente = tcc.idUser AND tcp.idCarritC = tcc.idCarrito AND tc.idCliente = idCli) WHERE tcc.idCarrito = (SELECT tcc.idCarrito FROM tcarritc tcc, tcliente tc WHERE tc.idCliente = tcc.idUser AND tcc.idUser = idCli);

END$$

DROP PROCEDURE IF EXISTS `usp_EliminarCatPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCatPro` (IN `id` INT)  BEGIN
DELETE FROM ttipoproducto WHERE idTipo =  id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCiu` (IN `id` INT)  BEGIN
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM tciudad WHERE IdCiudad = id;
SET FOREIGN_KEY_CHECKS=1;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarClient` (IN `id` INT)  BEGIN
UPDATE tcliente te SET te.estado = false WHERE te.idAdministracion = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDepart` (IN `id` INT)  BEGIN
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM tdepartamento WHERE IdDepartamento = id;
SET FOREIGN_KEY_CHECKS=1;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarDist` (IN `id` INT)  BEGIN
DELETE FROM tdistrito WHERE idDistrito = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarProduc`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarProduc` (IN `id` INT)  BEGIN
UPDATE tproducto SET estado = false WHERE idproducto = id;
END$$

DROP PROCEDURE IF EXISTS `usp_EliminarProve`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarProve` (IN `id` INT)  BEGIN
DELETE FROM tproveedor WHERE idProveedor= id ;
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarAdminis`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarAdminis` (IN `dni` INT(9), IN `nom` VARCHAR(100), IN `corre` VARCHAR(60), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` VARCHAR(11), IN `tiptrabajo` VARCHAR(100))  BEGIN

DECLARE idPer varchar(10);
set idPer = (select tu.dni_user from tusuario tu where tu.dni_user = dni);
/*SI NO EXITSTE INSERTA EL USUARIO, SI EXITE SOLO INSERTA EL ADMINISTRADOR*/
IF (dni <> '') & (nom <> '') & (corre <> '') & (telef <> '') & (pass <> '') & (tiptrabajo<> '') THEN
IF idPer is null THEN

INSERT INTO tusuario ( dni_user , nombre , correo, telefono, foto) VALUES (dni,nom,corre,telef,foto);
INSERT INTO tadministrador (idUser, usser, pass, TipoAdministrador,estado) VALUES (dni,dni,pass,tiptrabajo,1);

ELSE

INSERT INTO tadministrador (idUser, usser, pass, TipoAdministrador,estado) VALUES (dni,dni,pass,tiptrabajo,1);

END IF;
ELSE 
UPDATE tusuario tu set tu.foto =  foto WHERE tu.dni_user = idPer;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarCarritP`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCarritP` (IN `idcliente` INT, IN `idproduc` INT, IN `cantidad` INT)  BEGIN
/*Extraer si ya cuenta con un parrito el cliente*/
DECLARE idcar int ;
/*variable para verificar si hay un producto en el carrito*/
DECLARE CantSt int;
SET idcar = (SELECT tcc.idCarrito FROM tcarritc tcc WHERE tcc.idUser = idcliente);
SET CantSt = (SELECT tcp.cantidad FROM tcarritp tcp WHERE tcp.idproducto = idproduc);

/*verifica si el carrito existe o no*/
IF idcar <> 0 THEN
/*si el producto existe solo se actualisa*/
IF CantSt <> 0 THEN
UPDATE tcarritp SET cantidad = (cantidad + CantSt )WHERE idCarritC = idcar AND idproducto = idproduc;
/*En caso que no exista se inserta*/
ELSE
INSERT INTO tcarritp ( idCarritC , cantidad , idproducto) VALUES (idcar ,cantidad,idproduc);
END IF;
/*En caso que el carrito no exista*/
ELSE
/*se insertan los datos al carrito*/
INSERT INTO tcarritc ( idUser , montT ) VALUES (idcliente,0);
/*se extre la id de carrito inserado*/
SET idcar = (SELECT tcc.idCarrito FROM tcarritc tcc WHERE tcc.idUser = idcliente);
/*se insera el producto al carrito*/
INSERT INTO tcarritp ( idCarritC , cantidad , idproducto ) VALUES (idcar,cantidad ,idproduc);
END IF;

/*Actualiza el monto final de los productos*/
UPDATE tcarritc tcc SET tcc.montT = (SELECT SUM(tcp.cantidad * p.PrecioV) FROM tcarritp tcp, tproducto p WHERE tcp.idCarritC = tcc.idCarrito AND tcp.idproducto = p.idproducto)  WHERE tcc.idCarrito = idcar;

END$$

DROP PROCEDURE IF EXISTS `usp_InsertarCatPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCatPro` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO ttipoproducto (nombreTipo) VALUES (nomd);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarCiu` (IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tciudad (IdDepartamento, NombreCiudad ) VALUES (idDep,nom);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarClient`$$
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

DROP PROCEDURE IF EXISTS `usp_InsertarComent`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarComent` (IN `idCli` INT, IN `idprod` INT, IN `meseng` VARCHAR(100), IN `caT` INT)  BEGIN
DECLARE cal int;
INSERT INTO tcomentproduc ( idProducto , descripccion , califprod, idCliente) VALUES (idprod,meseng,caT,idCli);
/*en caso que el comentario ya este insertado, se hace un listado*/
set cal = (SELECT AVG(tp.califprod) FROM tcomentproduc tp WHERE tp.idProducto = idprod);
UPDATE tproducto SET calificacion = cal WHERE idproducto = idprod;
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarCuentaC`$$
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

DROP PROCEDURE IF EXISTS `usp_InsertarCuentaCA`$$
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

DROP PROCEDURE IF EXISTS `usp_InsertarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDepart` (IN `nomd` VARCHAR(60))  BEGIN
INSERT INTO tdepartamento (NombreDepart) VALUES (nomd);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarDist` (IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
INSERT INTO tdistrito (idCiudad, nombreDistrito) VALUES (idCiu,nom);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarPedid`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarPedid` (IN `idCli` INT, IN `iddis` INT, IN `direccion` VARCHAR(100))  BEGIN
DECLARE idVent int;
/*Insertar la venta en la tabla correspondiente*/
INSERT INTO tventa(idclient, montoT, FechaVenta) VALUES (idCli,(SELECT tcc.montT FROM tcarritc tcc WHERE tcc.idUser = idCli),NOW());
/*se inicializa el id de ventas*/
SET idVent = (SELECT tv.idventa FROM tventa tv ORDER BY tv.idventa DESC LIMIT 1);
/*Insertar datos en el detalle de ventas*/
INSERT INTO tdetalleventa (idVent, idProduc, canti, PrecProd) SELECT idVent , tcp.idproducto, tcp.cantidad , tp.PrecioV FROM tcarritp tcp, tcarritc tcc , tproducto tp WHERE tp.idproducto = tcp.idproducto AND tcc.idCarrito = tcp.idCarritC AND tcc.idUser = idCli;
/*Insertar datos en el pedido*/
INSERT INTO tpedido ( idVent , direccion, iddistrito, estado) VALUES (idVent,direccion,iddis,1);
/*Actualizar datos en Carrito*/
UPDATE tproducto tp , tcarritp  tcp SET tp.Cantidad =  tp.Cantidad - tcp.cantidad WHERE tp.idproducto = tcp.idproducto; 
/*Eliminar producto del carrito*/
DELETE FROM tcarritp WHERE idCarritC = (SELECT tcc.idCarrito FROM tcarritc tcc WHERE tcc.idUser = idCli);
/*Actualizar el monto total del producto*/
UPDATE tcarritc SET montT = 0 WHERE idUser = idCli;
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarProduc`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarProduc` (IN `codPro` VARCHAR(10), IN `IdPro` INT, IN `Idtipo` INT, IN `nom` VARCHAR(100), IN `descri` VARCHAR(200), IN `casti` INT, IN `preC` FLOAT, IN `preVe` FLOAT, IN `photo` LONGBLOB)  BEGIN
INSERT INTO `tproducto`(`CodProduc`, `idProveedor`, `idTipo`, `Nombre`, `Descripcion`, `Cantidad`, `PrecioC`, `PrecioV`, `estado`, `photo`, `calificacion`) VALUES (codPro,IdPro,Idtipo,nom,descri,casti,preC,preVe,1,photo,1);
END$$

DROP PROCEDURE IF EXISTS `usp_InsertarProve`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarProve` (IN `nomd` VARCHAR(60), IN `Email` VARCHAR(30), IN `celular` VARCHAR(9))  NO SQL
BEGIN
INSERT INTO tproveedor (nombre, Email , celular ) VALUES (nomd,Email,celular);
END$$

DROP PROCEDURE IF EXISTS `usp_ListarAdminis`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarAdminis` (IN `tip` INT, IN `uss` VARCHAR(60), IN `pas` VARCHAR(60))  BEGIN
IF tip = 1 THEN
SELECT ta.idAdministracion ,ta.idUser, ta.usser , ta.pass, 	ta.TipoAdministrador, tu.dni_user, tu.nombre, tu.correo, tu.telefono FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.estado = 1;
END IF;
IF tip = 2 THEN
SELECT ta.idAdministracion ,ta.idUser, ta.usser , ta.pass, 		ta.TipoAdministrador, tu.dni_user, tu.nombre, tu.correo, tu.telefono FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.estado = 1 AND ta.usser = uss AND ta.pass = pas; 
END IF;
IF tip = 3 THEN
SELECT ta.idAdministracion ,ta.idUser, ta.usser , ta.pass, 		ta.TipoAdministrador, tu.dni_user, tu.nombre, tu.correo, tu.telefono FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.estado = 1 AND ta.idAdministracion = uss;
END IF;
IF tip = 5 THEN
SELECT tu.foto FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.idAdministracion = uss;
END IF;
IF tip = 6 THEN
SELECT ta.idAdministracion,ta.usser FROM tadministrador ta , tusuario tu where ta.idUser = tu.dni_user AND ta.usser = uss;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCarritP`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCarritP` (IN `id` INT)  BEGIN
SELECT p.idproducto , p.Nombre , p.PrecioV , tcp.cantidad ,p.photo , tcc.montT FROM tproducto p , tcarritp tcp ,tcarritc tcc WHERE tcp.idCarritC = tcc.idCarrito AND tcp.idproducto = p.idproducto AND
tcc.idUser = id;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCatPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCatPro` ()  BEGIN
SELECT * FROM ttipoproducto WHERE 1;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCiu`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCiu` (IN `idDep` INT)  BEGIN
    IF idDep = -1 THEN 

    SELECT tc.IdCiudad,tc.NombreCiudad, td.IdDepartamento,td.NombreDepart FROM tciudad tc ,tdepartamento td WHERE tc.IdDepartamento=td.IdDepartamento;

    ELSE

    SELECT tc.IdCiudad,tc.NombreCiudad, td.IdDepartamento,td.NombreDepart FROM tciudad tc ,tdepartamento td WHERE tc.IdDepartamento=td.IdDepartamento and tc.IdDepartamento = idDep;

    END IF;

END$$

DROP PROCEDURE IF EXISTS `usp_ListarClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarClient` (IN `tip` INT, IN `uss` VARCHAR(60), IN `pas` VARCHAR(60))  BEGIN
/*IF tip = 1 THEN

END IF;*/
IF tip = 1 THEN
SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc WHERE TC.idUser = tu.dni_user AND tc.idCliente = uss;
END IF;
IF tip = 2 THEN
SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc WHERE TC.idUser = tu.dni_user AND tc.usser= uss AND tc.pass= pas ;
END IF;
IF tip = 3 THEN
SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc , tventa tv , tpedido tpe WHERE TC.idUser = tu.dni_user AND tv.idclient = tc.idCliente AND tpe.idVent = tv.idventa AND tpe.idpedido = uss;
END IF;
IF tip = 5 THEN
SELECT tu.foto FROM tusuario tu, tcliente tc where tc.idUser = tu.dni_user AND tc.idCliente = uss;
END IF;
IF tip = 6 THEN
SELECT tc.idCliente,tc.usser,tc.pass FROM tusuario tu, tcliente tc where tc.idUser = tu.dni_user AND tc.usser = uss;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarComent`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarComent` (IN `tip` INT, IN `idpot` INT)  BEGIN
DECLARE cantiComent integer;
DECLARE estre1 integer;
DECLARE estre2 integer;
DECLARE estre3 integer;
DECLARE estre4 integer;
DECLARE estre5 integer;

/*listar todos los comentarios*/
IF tip = 1 THEN
SELECT tcp.idComent, tcp.idProducto, tcp.descripccion, tcp.califprod, tcp.idCliente, tu.foto as photo FROM tcomentproduc tcp , tcliente tc , tusuario tu WHERE tc.idUser = tu.dni_user and tc.idCliente = tcp.idCliente And tcp.idProducto = idpot;
END IF;
/*listar las estrelals de analisis de los comentarios*/
IF tip = 2 THEN
/*se inicializa la cantidad de comentariosq que se requieran*/
SET cantiComent = (SELECT COUNT(tcp.idProducto) FROM tcomentproduc tcp WHERE tcp.idProducto = idpot GROUP by tcp.idProducto);
/*Los que tienen estrella 1*/
SET estre1 = (((SELECT count(tcp.idProducto) FROM tcomentproduc tcp WHERE tcp.idProducto = idpot AND tcp.califprod = 1 GROUP by tcp.idProducto) * 100) / cantiComent);
/*Los que tienen estrella 2*/
SET estre2 = (((SELECT count(tcp.idProducto) FROM tcomentproduc tcp WHERE tcp.idProducto = idpot AND tcp.califprod = 2 GROUP by tcp.idProducto) * 100) / cantiComent);
/*Los que tienen estrella 3*/
SET estre3 = (((SELECT count(tcp.idProducto) FROM tcomentproduc tcp WHERE tcp.idProducto = idpot AND tcp.califprod = 3 GROUP by tcp.idProducto) * 100) / cantiComent);
/*Los que tienen estrella 4*/
SET estre4 = (((SELECT count(tcp.idProducto) FROM tcomentproduc tcp WHERE tcp.idProducto = idpot AND tcp.califprod = 4 GROUP by tcp.idProducto) * 100) / cantiComent);
/*Los que tienen estrella 5*/
SET estre5 = (((SELECT count(tcp.idProducto) FROM tcomentproduc tcp WHERE tcp.idProducto = idpot AND tcp.califprod = 5 GROUP by tcp.idProducto) * 100) / cantiComent);

SELECT estre1 , estre2 , estre3 , estre4 , estre5 , cantiComent as canti;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCuentaC`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCuentaC` (IN `mac` VARCHAR(60))  BEGIN
SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono,tu.foto, tc.idCliente, tc.usser , tc.pass  FROM tusuario tu, tcliente tc , tcuentaa tca WHERE TC.idUser = tu.dni_user AND tca.idClient = tc.idCliente AND tca.mac = mac AND tca.secionE = 1;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarCuentaCA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCuentaCA` (IN `mac` VARCHAR(60))  BEGIN

SELECT tu.dni_user,tu.nombre,tu.correo,tu.telefono,tu.foto, ta.idAdministracion , ta.usser , ta.pass , ta.TipoAdministrador  FROM tusuario tu, tadministrador ta , tcuentaaa tca WHERE ta.idUser = tu.dni_user AND tca.idClient = ta.idAdministracion AND tca.mac = mac AND tca.SecionE = 1;

END$$

DROP PROCEDURE IF EXISTS `usp_ListarDepart`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDepart` ()  BEGIN
SELECT * FROM tdepartamento WHERE 1 ;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarDist`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarDist` (IN `idCiu` INT)  BEGIN
IF idCiu = -1 THEN
SELECT * FROM tdistrito tds, tciudad tc, tdepartamento td WHERE td.IdDepartamento=tc.IdDepartamento AND tc.idCiudad = tds.idCiudad;
ELSE 
SELECT * FROM tdistrito tds, tciudad tc, tdepartamento td WHERE td.IdDepartamento = tc.IdDepartamento AND tc.idCiudad = tds.idCiudad AND tds.idCiudad =  idCiu;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarPedid`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarPedid` (IN `tip` VARCHAR(2), IN `fill` INT, IN `id` INT, IN `idclient` INT, IN `fillgen` INT)  BEGIN
IF tip = 'C' THEN
/*Listar de forma general los pedidos teniendo en cuenta el id del cliente*/
IF fill = 1 THEN 
SELECT tp.idpedido , tds.idDistrito , tds.nombreDistrito , tc.IdCiudad , tc.NombreCiudad ,tdp.NombreDepart, tp.direccion , tv.FechaVenta , tv.montoT , tp.estado 
FROM tpedido tp , tventa tv ,tdistrito tds , tdepartamento tdp , tciudad tc
WHERE tv.idventa = tp.idVent 
AND tdp.IdDepartamento = tc.IdDepartamento 
AND tds.idCiudad = tc.IdCiudad 
AND tp.iddistrito = tds.idDistrito 
AND tv.idclient = idclient
ORDER by tp.idpedido desc;
END IF;
/*BOLETA DE VENTAS*/
IF fill = 5 THEN 
SELECT tp.idpedido , tds.idDistrito , tds.nombreDistrito , tc.IdCiudad , tc.NombreCiudad ,tdp.NombreDepart, tp.direccion , tv.FechaVenta , tv.montoT , tp.estado 
FROM tpedido tp , tventa tv ,tdistrito tds , tdepartamento tdp , tciudad tc
WHERE tv.idventa = tp.idVent 
AND tdp.IdDepartamento = tc.IdDepartamento 
AND tds.idCiudad = tc.IdCiudad 
AND tp.iddistrito = tds.idDistrito 
AND tv.idclient = idclient
ORDER BY tp.idpedido DESC LIMIT 1;
END IF;
/*Listar los productos de un pedido*/
IF id <> 0 THEN 
SELECT tpr.photo , tpr.idproducto , tpr.Nombre , tdv.canti , tpr.PrecioV 
FROM tpedido tp , tventa tv , tdetalleventa tdv , tproducto tpr 
WHERE tp.idVent = tv.idventa 
AND tv.idventa = tdv.idVent 
AND tdv.idProduc = tpr.idproducto
AND tp.idpedido = id
AND tv.idclient = idclient;
END IF;
END IF;
IF tip = 'A' THEN
IF fill = 1 THEN 
SELECT tp.idpedido , tds.idDistrito , tds.nombreDistrito , tc.IdCiudad , tc.NombreCiudad ,tdp.NombreDepart, tp.direccion , tv.FechaVenta , tv.montoT , tp.estado 
FROM tpedido tp , tventa tv ,tdistrito tds , tdepartamento tdp , tciudad tc
WHERE tv.idventa = tp.idVent 
AND tdp.IdDepartamento = tc.IdDepartamento 
AND tds.idCiudad = tc.IdCiudad 
AND tp.iddistrito = tds.idDistrito
ORDER by tp.idpedido desc;
END IF;
IF fill = 5 THEN 
SELECT tp.idpedido , tds.idDistrito , tds.nombreDistrito , tc.IdCiudad , tc.NombreCiudad ,tdp.NombreDepart, tp.direccion , tv.FechaVenta , tv.montoT , tp.estado 
FROM tpedido tp , tventa tv ,tdistrito tds , tdepartamento tdp , tciudad tc
WHERE tv.idventa = tp.idVent 
AND tdp.IdDepartamento = tc.IdDepartamento 
AND tds.idCiudad = tc.IdCiudad 
AND tp.iddistrito = tds.idDistrito 
AND tp.idpedido = id
ORDER BY tp.idpedido DESC LIMIT 1;
END IF;
/*Listar los productos de un pedido*/
IF id <> 0 THEN 
SELECT tpr.idproducto, tpr.photo , tpr.Nombre , tdv.canti , tpr.PrecioV ,  tpr.Descripcion
FROM tpedido tp , tventa tv , tdetalleventa tdv , tproducto tpr 
WHERE tp.idVent = tv.idventa 
AND tv.idventa = tdv.idVent 
AND tdv.idProduc = tpr.idproducto
AND tp.idpedido = id
ORDER by tp.idpedido desc;
END IF;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarProduc`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarProduc` (IN `Us` VARCHAR(2), IN `tiL` INT, IN `nom` VARCHAR(100), IN `punt` INT, IN `coins` INT, IN `cat` INT)  BEGIN
/*============== Creacion de tablas temporales ================*/
/*Creacion de la tabla de filtros*/
CREATE TEMPORARY TABLE pdfil(
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
);
/*creacion de la tabla auxiliar*/
CREATE TEMPORARY TABLE pdfilAux(
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
);
/*=============================================================*/
/*Lista los productos en la interface del administrador por el cual se realiza un listado con tres tipos*/
/*=============================================================*/
IF us = 'A' THEN
/*se realiza un listado teniendo en cuenta el filtro del nombre por el cual si es null -> listara todo, si es diferente , listara todo*/
IF tiL = 1 THEN
SELECT tp.idproducto, tp.Nombre, tp.calificacion , tp.PrecioV, tp.photo FROM tproducto tp WHERE tp.estado = 1 AND tp.Nombre LIKE CONCAT('%', nom, '%');
END IF;
/*Se lista la informacion del producto, teniendo encuenta la ide de este */
IF tiL = 2 THEN
SELECT tp.idproducto, tp.CodProduc, tp.idProveedor, tpo.nombre as 'ProveNombre', tp.idTipo , tcp.nombreTipo, tp.Nombre, tp.Descripcion, tp.Cantidad, tp.PrecioC, tp.PrecioV, tp.photo , tp.calificacion FROM tproducto tp, tproveedor tpo, ttipoproducto tcp WHERE tp.idProveedor = tpo.idProveedor AND tp.idTipo = tcp.idTipo AND tp.estado = 1 AND tp.idproducto = nom;
END IF;
/*se realiza una busqueda del producto ya sea por el nombre o por el codigo del producto insertado*/
IF tiL = 3 THEN
SELECT tp.idproducto, tp.Nombre, tp.calificacion , tp.PrecioV, 	tp.photo FROM tproducto tp WHERE 	tp.estado = 1 AND tp.Nombre LIKE CONCAT(nom, '%') OR tp.CodProduc LIKE CONCAT(nom, '%');
END IF;
/*se realisara el listado de los productos teniendo en cuenta el filtro que estos presenatan por medio de su categoria....*/
IF tiL = 4 THEN
SELECT tp.idproducto, tp.Nombre, tp.calificacion , tp.PrecioV, tp.photo FROM tproducto tp WHERE tp.estado = 1 AND tp.idTipo = 	nom;
END IF;
END IF;
/*=============================================================*/
/*Listar a los productos por medio de la interfaces que se va a realizar con el cliente*/
/*=============================================================*/
IF us = 'C' THEN
/*Se listara solo si los productos esta activos*/
INSERT INTO pdfil SELECT * FROM tproducto tp WHERE  tp.estado = 1;
/*Realiza un listado de los productos dependiendo de los puntos que el producto tenga*/
IF punt <> 0 THEN 
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.calificacion = punt AND tp.estado = 1;
TRUNCATE pdfil;
INSERT INTO pdfil SELECT * FROM pdfilAux;
END IF;
/*Realiza un listado de los productos dependiendo de su costo del producto tenga*/
IF coins <> 0 THEN
/*Realiza un listado de los productos si su costo es de 0-50 */
IF coins = 1 THEN
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.PrecioV < 50 ;
TRUNCATE pdfil;
INSERT INTO pdfil SELECT  * FROM pdfilAux;
END IF;
/*Realiza un listado de los productos si su costo es de 50-100 */
IF coins = 2 THEN
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.PrecioV > 50 AND tp.PrecioV < 100 ;
TRUNCATE pdfil;
INSERT INTO pdfil SELECT  * FROM pdfilAux;
END IF;
/*Realiza un listado de los productos si su costo es de 100-500 */
IF coins = 3 THEN
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.PrecioV > 100 AND tp.PrecioV < 500 ;
TRUNCATE pdfil;
INSERT INTO pdfil SELECT  * FROM pdfilAux;
END IF;
/*Realiza un listado de los productos si su costo es de 500-all */
IF coins = 4 THEN
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.PrecioV > 500;
TRUNCATE pdfil;
INSERT INTO pdfil SELECT  * FROM pdfilAux;
END IF;
END IF;
/*Realiza un listado de los productos dependiendo de la categoria del producto tenga*/
IF cat <> 0 THEN 
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.idTipo = cat AND tp.estado = 1;
TRUNCATE pdfil;
INSERT INTO pdfil SELECT  * FROM pdfilAux;
END IF;
/*Realiza un listado de los productos dependiendo de la categoria del producto tenga*/
IF nom is not null THEN 
TRUNCATE pdfilAux;
INSERT INTO pdfilAux SELECT * FROM pdfil tp WHERE tp.Nombre LIKE CONCAT(nom, '%');
TRUNCATE pdfil;
INSERT INTO pdfil SELECT  * FROM pdfilAux;
END IF;
/*=================== lISTADO DEL RESUTADO =====================*/
SELECT * FROM pdfil;
/*==============================================================*/
END IF;
IF Us = 'I' THEN
SELECT tp.photo FROM tproducto tp WHERE tp.idproducto = nom;
END IF;
END$$

DROP PROCEDURE IF EXISTS `usp_ListarProve`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarProve` ()  BEGIN
SELECT * FROM tproveedor WHERE 1;
END$$

DROP PROCEDURE IF EXISTS `usp_reporte`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_reporte` (IN `tip` INT, IN `desde` DATE, IN `hasta` DATE)  BEGIN
IF tip = 1 THEN
SELECT YEAR(TV.FechaVenta) AS ANO , CONCAT(ELT(MONTH( tv.FechaVenta), 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre','Noviembre', 'Diciembre')) as mes,(SELECT SUM(tdv.canti) FROM tventa tve, tdetalleventa tdv WHERE tve.idventa = tdv.idVent
AND MONTH(tve.FechaVenta) = MONTH(tv.FechaVenta)) as canti,(SELECT
SUM(tdv.canti*(tp.PrecioV-tp.PrecioC)) FROM tventa tve, tdetalleventa tdv , tproducto tp WHERE tve.idventa = tdv.idVent AND
tp.idproducto = tdv.idProduc AND MONTH(tve.FechaVenta) =MONTH(tv.FechaVenta)) as monto FROM tventa tv WHERE tv.FechaVenta BETWEEN desde AND hasta GROUP BY mes, ANO; END IF;
IF tip = 2 THEN
SELECT tp.idproducto , tp.Nombre , SUM(tdv.canti) as canti FROM tproducto tp , tdetalleventa tdv , tventa tv WHERE tp.idproducto = tdv.idProduc AND tv.idventa = tdv.idVent AND tv.FechaVenta BETWEEN desde AND hasta GROUP by tp.idproducto ORDER BY canti DESC;
END IF;
IF tip = 3 THEN
SELECT tp.idproducto , tp.Nombre , SUM(tdv.canti*(tp.PrecioV-tp.PrecioC)) as monto FROM tproducto tp , tdetalleventa tdv , tventa tv WHERE tv.idventa = tdv.idVent AND tp.idproducto = tdv.idProduc AND tv.FechaVenta BETWEEN desde AND hasta GROUP by tp.idproducto ORDER BY monto DESC;
END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tadministrador`
--

DROP TABLE IF EXISTS `tadministrador`;
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

INSERT INTO `tadministrador` VALUES
(2, 147528369, '147528369', '4564878', 'undefined', 1),
(3, 2147483647, '2147483647', '45454545454', 'undefined', 1),
(6, 454545646, '454545646', '4545645456', 'Trabajador', 0),
(7, 147417471, '147417471', '4545645456', 'Trabajador', 1),
(8, 234545445, '234545445', '4545645456', 'Trabajador', 1),
(9, 789455646, '789455646', '4545645456', 'Trabajador', 1),
(10, 369258147, '369258147', '1234567', 'Trabajador', 1),
(11, 789456123, '789456123', '4545645456', 'Trabajador', 0),
(13, 0, '0', '', 'Gerente', 0),
(14, 0, '0', '', 'Gerente', 0),
(15, 969280255, '969280255', '96924555', 'Trabajador', 1),
(16, 719620864, '719620864', '15975345', 'Trabajador', 1),
(17, 151416233, '151416233', '44545454', 'Gerente', 1),
(18, 5313396, '5313396', '4546545645', 'Trabajador', 1),
(19, 14456036, '14456036', '5456456456', 'Trabajador', 1),
(20, 357321159, '357321159', '4456454', 'Trabajador', 1),
(21, 71962094, '71962094', '45465456', 'Trabajador', 1),
(22, 969280255, '969280255', '45612', 'Gerente', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcarritc`
--

DROP TABLE IF EXISTS `tcarritc`;
CREATE TABLE `tcarritc` (
  `idCarrito` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `montT` float NOT NULL,
  `Ciudad` int(11) DEFAULT NULL,
  `Descripccion` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tcarritc`
--

INSERT INTO `tcarritc` VALUES
(1, 5, 5, NULL, NULL),
(2, 8, 0, NULL, NULL),
(3, 2, 0, NULL, NULL),
(4, 9, 0, NULL, NULL),
(5, 11, 6, NULL, NULL),
(6, 12, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcarritp`
--

DROP TABLE IF EXISTS `tcarritp`;
CREATE TABLE `tcarritp` (
  `idCarritP` int(11) NOT NULL,
  `idCarritC` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tcarritp`
--

INSERT INTO `tcarritp` VALUES
(55, 1, 1, 1),
(63, 5, 1, 2);

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

INSERT INTO `tciudad` VALUES
(13, 0, '12'),
(14, 0, '10'),
(15, 12, 'Piura'),
(16, 11, '11'),
(17, 10, 'Sullana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcliente`
--

DROP TABLE IF EXISTS `tcliente`;
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

INSERT INTO `tcliente` VALUES
(9, 161297, 'Arturo14212000@gmail.com', '969280255', 1),
(10, 713352, 'este@gmail.com', '969280255', 1),
(11, 250304, 'ksajdkasljdlask@gmail.com', '565656', 1),
(12, 888341, 'axuwawexi-4686@yopmail.com', '456123', 1),
(13, 809187, 'acytelu-8133@yopmail.com', '456123', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcomentproduc`
--

DROP TABLE IF EXISTS `tcomentproduc`;
CREATE TABLE `tcomentproduc` (
  `idComent` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `descripccion` varchar(100) NOT NULL,
  `califprod` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tcomentproduc`
--

INSERT INTO `tcomentproduc` VALUES
(1, 1, 'El producto es algo raro la verdad', 2, 5),
(2, 1, 'Producto hasta las nalgas', 0, 5),
(3, 1, 'que ricolin produc caracho ', 4, 5),
(4, 2, 'dsfsf', 3, 5),
(5, 3, 'El producto esta masomenos', 2, 11),
(6, 4, 'El producto es bonito, pero es una talla mas grande', 3, 9),
(7, 2, 'El producto esta bien, pero esta un poco grande', 2, 12),
(8, 7, 'perooooooooooooooooo', 1, 12),
(9, 4, 'Comeme los guevos', 2, 12),
(10, 4, 'cómeme los huevos', 1, 12),
(11, 6, 'Comeme los huevos', 3, 12),
(12, 4, 'dfsfsf', 2, 12),
(13, 4, 'El producto esta bien', 1, 12),
(14, 5, 'El producto esta bien', 1, 12),
(15, 32, 'El producto me gusta mucho', 0, 11),
(16, 32, 'El producto se ve muy genial', 0, 11),
(17, 32, 'El producto se ve interesante', 0, 11);

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

INSERT INTO `tdepartamento` VALUES
(3, 'Sullana'),
(8, 'Huancavelica'),
(10, 'Piura'),
(11, 'Arequipa'),
(12, 'Lima'),
(16, 'Amazonas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tdetalleventa`
--

DROP TABLE IF EXISTS `tdetalleventa`;
CREATE TABLE `tdetalleventa` (
  `idDetalle` int(11) NOT NULL,
  `idVent` int(11) NOT NULL,
  `idProduc` int(11) NOT NULL,
  `canti` int(11) NOT NULL,
  `PrecProd` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tdetalleventa`
--

INSERT INTO `tdetalleventa` VALUES
(1, 1, 4, 2, 60),
(2, 1, 3, 1, 4),
(4, 2, 1, 1, 5),
(5, 2, 2, 1, 6),
(6, 2, 3, 1, 4),
(7, 3, 1, 1, 5),
(8, 3, 2, 1, 6),
(9, 3, 4, 1, 60),
(10, 4, 1, 2, 5),
(11, 4, 2, 2, 6),
(12, 4, 3, 1, 4),
(13, 5, 1, 1, 5),
(14, 5, 2, 1, 6),
(15, 5, 3, 2, 4),
(16, 5, 4, 3, 60),
(20, 6, 1, 1, 5),
(21, 6, 2, 1, 6),
(23, 7, 1, 1, 5),
(24, 7, 2, 1, 6),
(25, 7, 3, 1, 4),
(26, 8, 1, 1, 5),
(27, 8, 2, 1, 6),
(28, 8, 3, 1, 4),
(29, 9, 1, 1, 5),
(30, 9, 2, 1, 6),
(31, 9, 3, 1, 4),
(32, 10, 1, 1, 5),
(33, 10, 2, 1, 6),
(34, 10, 3, 1, 4),
(35, 10, 4, 1, 60),
(39, 11, 1, 1, 5),
(40, 11, 2, 1, 6),
(41, 11, 3, 1, 4),
(42, 12, 1, 1, 5),
(43, 12, 2, 1, 6),
(45, 13, 1, 1, 5),
(46, 13, 2, 1, 6),
(47, 13, 3, 1, 4),
(48, 14, 1, 1, 5),
(49, 14, 2, 2, 6),
(50, 14, 3, 3, 4),
(51, 15, 1, 1, 5),
(52, 16, 1, 1, 5),
(53, 16, 2, 1, 6),
(55, 17, 3, 1, 4),
(56, 19, 1, 1, 5),
(57, 20, 1, 1, 5),
(58, 22, 2, 1, 6),
(59, 22, 3, 1, 4),
(61, 23, 2, 1, 6),
(62, 23, 3, 1, 4),
(64, 24, 2, 1, 6),
(65, 25, 2, 1, 6),
(66, 26, 5, 1, 69),
(67, 26, 4, 1, 60),
(68, 26, 7, 1, 26),
(69, 27, 5, 1, 69),
(70, 27, 6, 1, 54),
(72, 28, 7, 1, 26),
(73, 29, 3, 1, 4),
(74, 29, 4, 1, 60);

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

INSERT INTO `tdistrito` VALUES
(9, 15, 'Piura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tpedido`
--

DROP TABLE IF EXISTS `tpedido`;
CREATE TABLE `tpedido` (
  `idpedido` int(11) NOT NULL,
  `idVent` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `iddistrito` int(11) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tpedido`
--

INSERT INTO `tpedido` VALUES
(1, 1, 'Av san martín 260 buenos aires piura', 9, 2),
(2, 2, 'SADSADSADASDSADASDADASDSADASDAD', 9, 3),
(3, 3, 'Av san petera cosita rica .com', 9, 2),
(4, 4, 'av sam petesburgo sape', 9, 1),
(5, 5, 'Me quiero comer un culo', 9, 1),
(6, 6, 'Av nida que te como entera', 9, 1),
(7, 7, 'shdjsahjkahdjkasdhjkasdhsajk', 9, 1),
(8, 8, 'asdassadsadasdsasdasdsas', 9, 1),
(9, 9, 'sdasdadsasdasdasdasdsasd', 9, 1),
(10, 10, 'dfsfsdfdsfsdfsdfdsfsdfsfsdfsdf', 9, 1),
(11, 11, 'Redireccion pe papu', 9, 1),
(12, 12, 'asdasdsadads', 9, 1),
(13, 13, 'sadsadasdasdasd', 9, 1),
(14, 14, 'dfdsfdsfsdfsdf', 9, 1),
(15, 15, 'ajhasdjhasjdhsajdhsajkdh', 9, 1),
(16, 16, 'comeme los guevos', 9, 1),
(17, 17, 'asdjasjdaskldjalkdjasl', 9, 1),
(18, 18, '', 9, 1),
(19, 19, 'fgdfgfdgfdgfdgdfgd', 9, 1),
(20, 20, 'dfdfsfsdfsdfsdfsdsfsdf', 9, 1),
(21, 21, '', 0, 1),
(22, 22, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 1),
(23, 23, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 1),
(24, 24, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 3),
(25, 25, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 3),
(26, 26, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 1),
(27, 27, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 1),
(28, 28, 'sjhdjshdjsdhsjdhsjdhsjdhsjdhsjdhsjdhsjdhsjd', 9, 1),
(29, 29, 'av san martin 260 buenos aires piura', 9, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tproducto`
--

DROP TABLE IF EXISTS `tproducto`;
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
  `photo` varchar(100) DEFAULT NULL,
  `calificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tproducto`
--

INSERT INTO `tproducto` VALUES
(1, '969280255', 4, 58, 'Calsones color verde', 'comeme todo el culo', 14, 2.5, 5, 0, 'descarga.jpg', 2),
(2, '789456', 5, 62, 'Nuevas mallas de moda para mujer, mallas ajustadas con estam', 'Materials: Polyester  SpandexPattern: PirintedColor: Black, Grey, Dark Blue ,Wine RedStyle: Slim FitLength: LongSize:XS, S, M, L, XL, XXL,XXXLPackaging includes: 1 * LegggingsKindly note:1.Please chec', 46, 4.5, 6, 0, '5d89d7734568150c45dc87a8-large.jpg', 3),
(3, '789159456', 6, 62, 'Chaqueta casual para hombre Ropa deportiva de moda Cremaller', '1: Put on our clothes, Now change your own. 2: Want to take off your clothes a lot of people, But we want to let you wear more beautiful. 3: Our products are factory direct sales, The price is the che', 39, 3, 4, 1, '5ac46fdb0de055075bedb1d8-1-large.jpg', 2),
(4, '789456', 5, 62, 'Pantalones cortos deportivos de doble capa de moda para muje', 'Material: Cotton Blend Colour:as the photo  1 pcs shorts Size d1.Please choose clothes according to your body size.If you are unsure what to choose yardage, we recommend that you actually measure your', 43, 45, 60, 1, '5e5cb06e8ac7c478f8cc2cb5-large.jpg', 2),
(5, '15975345', 4, 62, 'Conjunto de sudadera con capucha Ford Mustang Moda Sudadera ', 'Welcome to our shop ,Hope you have a good shopping time!!! Our products have attractive design and various styles.The photo can give you information to choose Product Name: Hooded  Pantstyle: Casual S', 48, 50, 69, 1, '5e932f4a18cb3b50f3c96d22-large.jpg', 1),
(6, '45612378', 4, 62, 'Mujeres Moda Rock Paper Scissors Throat Punch! I Win Funny G', 'Welcome to our shopStyle:Fashion 100% brand new and good quality Pls note:pls check the size chart to choose the size!! Due to the difference between diffrent monitors, the picture may not reflect the', 44, 49, 54, 1, '5dbfca0ffba73b402269c480-large.jpg', 3),
(7, '456123', 4, 62, 'Camisas de vestir clásicas de manga larga para hombre Camisa', 'Hello there! This is a shop from China. Our products are sold to more than 100 countries and regions around the world and are recognized by most people. We pursue high quality products and a real cust', 48, 15, 26, 1, '5dd281350caf8b4feb11d7f4-large.jpg', 1),
(8, '444', 4, 59, 'asdasdsadsadasdas', 'dfgdfgdfgdfgfdgdfgdg', 454, 545, 454, 0, '5dd281350caf8b4feb11d7f4-large.jpg', 1),
(9, '75315', 4, 62, 'Chándal de moda para mujer, conjunto de dos piezas, sudadera', 'Gender:WomenWaistline:NaturalSeason:Spring Autumn WinterSleeve Length:FullDecoration:NonePattern Type:Print Sleeve Style:RegularStyle:CasualColor available: As Picture Note: There might be 2-3% differ', 45, 45, 456, 1, '5e97e410a783fd34026133fe-large.jpg', 1),
(10, '75315', 4, 59, 'fsdfsdfds', 'dsfsdfdsfdsfsdfsdf', 545646, 454, 45646, 0, '5dd281350caf8b4feb11d7f4-large.jpg', 1),
(11, '75315', 4, 59, 'fdgdfgfd', 'shfjskdfsdkfhjksdhfjksd', 45, 45, 45, 0, '5f1314334ff55d5fe90160a0-2-large.jpg', 1),
(12, '75315', 4, 62, 'Ropa masculina de primavera y otono en 2020', 'Classification: SweaterProduct code: 6771Thick and thin: Thin moneypattern: nothingBasic style: Youth fashionsize: L,XL,2XL,3XL,4XL,Mstyle: SocketSubdivision style: tideSleeve type: Long sleevesApplic', 45, 45, 45, 1, '5f1314334ff55d5fe90160a0-2-large.jpg', 1),
(13, '145221565', 4, 62, '2020 nuevo traje deportivo Coca-Cola hombres y mujeres traje', 'Welcome to our shop, we have our own factory, the price is the cheapest.All products are brand new,If there are any problems with our product,please contact us. Item Type:Zipper Hoodies / Pants/Zipper', 45, 50, 108, 1, '5ec5ef25b10b620952cc78cd-large.jpg', 1),
(14, '756123456', 4, 62, 'Sudadera con capucha japonesa Attack on Titan Cloak Shingeki', 'S code - height 150-163CMM code - height 163-173CML code - height 174-185CM 1 inch (in) = 2.54 cm (cm)Special Use : CostumesComponents : CloakMaterial : PolyesterGender : UnisexItem Type : Jackets ', 50, 35, 47, 1, '5d6f6d5bb6b1057c361205dc-large.jpg', 1),
(15, '258141515', 5, 63, 'X12 / X7 5.1 / 4.3 pulgadas Consola de videojuegos portátil Juego portátil Reproductor MP5 para PSP', 'X12(2020 Newest) Build in 3000 Games 5.1inch display Screen！X7 Build in 300 Games,4.3inch display Screen!Feature:1. Built-in 3000  Super Classic Games: The game console built in 3000 classic games, ma', 50, 86, 119, 1, '5e9d858ccc540d0d171cd218-large.jpg', 1),
(16, '258487456', 5, 63, 'Nuevo reloj digital / Reloj inteligente con Bluetooth IP67 Pulsera deportiva a prueba de agua Monit', ' watch can be waterproof, but please do not swim or put into the water.Time and date settingIn standby mode, press A to display the time,Press B to enter the hour set, the hour will flash, press A to ', 50, 7, 15, 1, '5f89787c9c5aa81e3592b733-large.jpg', 1),
(17, '985623145', 5, 63, '2020 Última actualización 6nd Generation Reloj inteligente Bluetooth Frecuencia cardíaca Monitor', 'Specification/Function:Main screen: 1.75 HD IPS, 320*385 Touch screen: 2.5D fox surface capacitive full-fit touch screenBluetooth push: SMS, WeChat, QQ news and other client information and other comm', 45, 85, 134, 1, '5f04132ede02db26ff45c68a-large.jpg', 1),
(18, '123654987', 5, 63, 'Wish Seleccionar | Unidad flash OTG USB 3.0 de 32 GB / 64 GB / 128 GB / 256 GB de tipo C', 'Specifications:- Capacity: 32GB/64GB/128GB/256GB- Color: champagne, silver, red, black, blueFeatures:- Equipped with a USB 3.0 connectors, plug-and-play,high read speed- Compatible with Samsung Galaxy', 80, 25, 40, 1, '5e6610966fa88c459f7a7179-large.jpg', 1),
(19, '654151555', 4, 63, 'Directo de fábrica P46Pro Nuevo teléfono inteligente Android Pantalla grande de 6.1 pulgadas Androi', 'Network format: GSM,3G (WCDMA),3G (TD-SCDMA) Processor Core :8 Color: Black, blue, red, purple Model: P46 Running memory :6GB Shape: Straight plate Main screen size: large screen 6.1 inches CPU Brand:', 60, 150, 364, 1, '5f23beaa5587d0004fda4b80-large.jpg', 1),
(20, '369251515', 5, 63, 'V1 USB con cable, ergonómico, retroiluminado, mecánico, teclado para juegos, juego de mouse', 'Feature:1. The product configuration is the middle end game IC; the mouse key life 1000W times.2. DPI four gear regulates 1000-1600-2000-4000.3. The mouse button uses the high-grade skin like technolo', 44, 44, 54, 1, '5dbba243c6a8571b1399c5e9-large.jpg', 1),
(21, '454654654', 5, 59, 'Smartwatch M26 Bluetooth con LED Altímetro Reproductor de música Podómetro para iOS Android Smartph', '• Call, Answer, Week, SMS Reminding, Pedometer, Phone book, Stopwatch, Music Player, Date, Alarm clock, Anti-lost alert, Dial, Stopwatch• Sync music• Sync phone clock to watch• Sync 1000 phonebook, 20', 50, 17, 30, 1, '5c144fd315765118ac2d5e12-large.jpg', 1),
(22, '255456489', 5, 63, '1PC Nuevo 2 tipos Opcional Mini Etiqueta BT Tracker Localiza', '1PC New 2 Types Optional Mini Tag Bluetooth Tracker GPS Locator Alarm Child Key Finder for Vechicles Children Magnetic GPS Tracker Tracking Locator GF07 Mini GPS Tracker:This ultra mini device is easy', 50, 15, 30, 1, '5edfb0bcb278cc79a1ee50be-large.jpg', 1),
(23, '454512131', 5, 63, 'Nuevo I12 TWS Auriculares inalámbricos Bluetooth Mini deportivos Auriculares internos Llamada binau', 'Sizes:i7s-double earbuds with charging boxinpods12-double earbuds with charging boxDescription:The latest TWS binaural stereo stereo Bluetooth headset with the Raychem 5.0 chip gives you very efficien', 54, 45, 65, 1, '5f439f1b95996078f797d319-large.jpg', 1),
(24, '142536558', 5, 63, '2020 Nuevo Fire TV Stick con Alexa Voice Remote sin USB (última generación)', 'Just plug Fire TV Stick into your HDTV and start streaming in minutes. With the Alexa Voice Remote, press and ask to easily find your favorite movies and TV episodes, plus live news and sports. Plus, ', 45, 12, 29, 1, '5fbb58133a30f5552662dd41-large.jpg', 1),
(25, '100000001', 4, 65, 'Joyería masculina de moda Pulsera de cuero trenzado Pulsera ', '100% high qualityMaterial: Titanium steelStyle: Men\'s StyleGift occasions: opening ceremony, employee welfare, anniversary celebration, advertising promotion, exhibition, tourism commemoration, busine', 50, 5, 15, 1, '5e0ae4cbc031456e803b5bf3-4-large.jpg', 1),
(26, '100000002', 5, 59, 'Joyería de moda Punk 2 colores Accesorios de aleación de zin', '- Material: Alloy, leather- Clasp Type: Lobster-claw-clasps- Chain Type: Rope chain- Length: 20.5~21.5 cm /8.3\" Approx.- Gender: Unisex- Style: Male- Color: Brown, black- Suitable for all seasons.- Oc', 100, 1, 3, 1, '5c4a0397cfd83a4d35d9771d-large.jpg', 1),
(27, '100000003', 4, 65, 'Anillo de moda de lujo clásico para hombres de negocios Anil', '100% brand new and high quality!Material: GoldModeling: GeometricTreatment process: electroplatingOccasion: wedding, festival, birthday, anniversary giftStyle: MenColor: GoldSize: 6 / 7 / 8 / 9 / 10 /', 100, 3, 8, 1, '5f7f2a79548ab11b615f797f-large.jpg', 1),
(28, '100000004', 5, 65, 'Moda motocicleta ciclismo esquí cuello protección exterior l', '100% brand new and high qualityThe price is VERY LOW, I highly suggest you buy 2 or more so that you can exchange to wear!This face mask protection your face, ear and neck from sun, wind, cold and sno', 500, 15, 26, 1, '5af14b4c72b92c468fb3c6ce-large.jpg', 1),
(29, '100000005', 5, 65, 'Nueva moda Dragon Ball DBZ pulsera negra Moda masculina Japón Serie Anime Cuero Pulsera trenzada', 'Material: leatherCategory: braceletStyle: male and female genericSize: 20cm（adjustable）', 500, 6, 10, 1, '5b1bddc3eb51cb1671cf92ea-large.jpg', 1),
(30, '100000008', 4, 65, 'Gafas de sol con protección UV 400 Gafas de sol sin montura ', 'Spectacle structure: frameIntensity: highSpecification: AdultMirror frame material: plastic and metal', 100, 3, 7, 1, '5e9dbdf8b9f2e43476bb83b2-large.jpg', 1),
(31, '100000007', 5, 65, 'Pulsera de surf con tachuelas de acero con ancla de metal vi', 'Anchor design with multilayer braid strap, punk and cool.This cuff bracelet made by high quality faux leather and alloy.Suitable for fashion men, which will give them a new classic definition.Type: Br', 100, 5, 11, 1, '5d148ae450787b015181fd47-large.jpg', 1),
(32, '100000010', 5, 65, 'Pulseras de anclaje de tendencia de moda Accesorios de joyer', 'Style: unisex braceletsCategory: bracelets, braceletsColor: black, orange, blue, green, yellow, dark blue,navy blue,multicolor,camouflage greenSuitable for occasions: holidays, travel memorabilia, bus', 50, 5, 11, 1, '5a13c0990e2bbe2234f2d7e1-large.jpg', 0),
(33, '100000011', 4, 59, 'Anillo de acero inoxidable caliente Banda Titanio Plata Oro negro Hombres Talla 5 a 11 Boda', 'Specifications:- Material: Stainless Steel- Finishing: Brushed- Width: 8mm- Color: Black Silver Gold- Size: 5, 6, 7, 8, 9, 10, 11Features:- Different colors available.- The ring is great for dinners, ', 50, 5, 7, 1, '5d157312c3c1167c9b7e9eca-large.jpg', 1),
(34, '100000012', 5, 59, '2 Unids / set Punk Crystal Crown Lion Beaded Bracelet Bracelet Set Hombres Pulseras de Moda Joyería', 'Style :CharmColor :BlackGender :UnisexItem Type : BraceletMetals Type : Natural stoneShape\\Pattern :PictureOccasion : Anniversary Engagement Party Wedding Gift SchoolCountry of manufacture :China ( Zh', 50, 5, 11, 1, '5be670b1a07cc03223401247-large.jpg', 1),
(35, '546545646', 7, 62, 'Dragon Ball Goku Casual Funny Print Hoodie Hombres Pullover Sweater Cosplay Sudadera Moda Diagonal ', 'Gender: MenItem Type: Hoodies,SweatshirtsSleeve Length(cm): FullClosure Type: NoneThickness: StandardStyle: Hip HopClothing Length: RegularSleeve Style: RegularMaterial: Polyester,CottonDetachable Par', 80, 70, 72, 1, '5b882bb96147b816606fa3c9-large.jpg', 1),
(36, '75315', 5, 0, '5 colores Tactical Camping Gifts Autodefensa Cuchilla de seguridad Envoltura Cortador EDC Karambit ', '1.Item Type:Pocket Knife2.Material:Blade Material:Stainless Steel                 Handle Material:Aluminum3.Color:As pictures4.Size:Full length: 17cm£¬Length of collection:11cm           Blade length:', 30, 15, 15, 1, '5c36057fda926a2238e5a6ff-large.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tproveedor`
--

DROP TABLE IF EXISTS `tproveedor`;
CREATE TABLE `tproveedor` (
  `idProveedor` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `celular` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tproveedor`
--

INSERT INTO `tproveedor` VALUES
(4, 'Juan Merino Hurtado', 'arturo@gmail.com', 'arturo@gm'),
(5, 'Ana maria', 'ana@gmail.com', '969280255'),
(6, 'josemaria hernandez', 'arturo@gmail.com', '969280255'),
(7, 'Christopher Aragon', 'kepicoryff-3957@yopmail.com', '985796201'),
(8, 'Elisabet Castillo', 'lytteruhicu-2353@yopmail.com', '456456465'),
(9, 'Sagrario guerrero', 'aduxiffape-3022@yopmail.com', 'aduxiffap');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ttipoproducto`
--

DROP TABLE IF EXISTS `ttipoproducto`;
CREATE TABLE `ttipoproducto` (
  `idTipo` int(11) NOT NULL,
  `nombreTipo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ttipoproducto`
--

INSERT INTO `ttipoproducto` VALUES
(59, '1 ropa'),
(60, '3 ana'),
(61, '2 Icono'),
(62, '4 Ropa'),
(63, '7 Electronica'),
(65, '8 Accesorios'),
(66, '9    Instrumentos'),
(67, '10    Polos'),
(68, '2 Zapatos'),
(69, '11   Juegos de mesa'),
(70, '5   Computo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusuario`
--

DROP TABLE IF EXISTS `tusuario`;
CREATE TABLE `tusuario` (
  `dni_user` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `telefono` int(9) NOT NULL,
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tusuario`
--

INSERT INTO `tusuario` VALUES
(152914, 'Juan sapata medina', 'asdhjkshd@gmail.com', 969280255, 'default.jpg'),
(161297, 'Carlos Arturo Guerrero Castillo', 'Arturo14212000@gmail.com', 969280255, 'default.jpg'),
(250304, 'Carlos arturoo guerrero castillo', 'ksajdkasljdlask@gmail.com', 969280255, 'default.jpg'),
(425648, 'Adriana negra rica', 'vegasadriana64@gmail.com', 969280255, 'default.jpg'),
(703035, 'Comete esta pes', 'AnaMariaCastilloDeslgado@gmail.com', 969280255, 'default.jpg'),
(713352, 'estefany guerrero castillo ', 'este@gmail.com', 969280255, 'default.jpg'),
(809187, 'Jose Manuel Chamorro', 'acytelu-8133@yopmail.com', 975896321, 'default.jpg'),
(861718, '', '', 0, 'default.jpg'),
(888341, 'Beñat de Haro', 'axuwawexi-4686@yopmail.com', 958285125, 'image (5).jpg'),
(960262, '', 'hasdjhsajdhjh', 969280255, 'default.jpg'),
(1234567, '', 'sdfdsfdsfdsf', 147852695, 'default.jpg'),
(5313396, 'Benedicta Tirado', 'hsdjfhsdjkfhsdjk', 74718525, 'default.jpg'),
(14456036, 'asdasdasdsa', 'asdasdasdasd', 45456454, 'FB_IMG_16021445907674814.jpg'),
(71962094, 'Ana Cecilia Guerrero Castillo', 'dhjfkhdsfjkhsdjfhdskjfds', 969280255, 'FB_IMG_16021445907674814.jpg'),
(78945612, 'Care culo', 'Estefany@gmail.com', 147852695, 'default.jpg'),
(147417471, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'image (5).jpg'),
(147528369, 'carlos ancajima guerrero', 'arturo14@gmail.com', 969280255, 'image (4).jpg'),
(151416233, 'asjhdjashdjsa', 'asgdhjsgadhasgdasjgdhasjd', 74717523, 'default.jpg'),
(234545445, 'Carlos arturo  guerrero castillo', 'sdfsdfsdfds', 54546546, 'image (4).jpg'),
(357321159, 'kdjfkdjfkdjfkdjfk', 'fjghdfjghdfjkghkfd', 959481522, 'image (4).jpg'),
(369258147, 'Me como un culo', 'asdasdsadsadsdas', 985796307, 'default.jpg'),
(454545646, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'default.jpg'),
(719620864, 'comete esta pes', 'Arturo14212000@gmail.com', 969280255, 'default.jpg'),
(789455646, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'default.jpg'),
(789456123, 'sdfsdfdsf', 'Arturo@gmail.com', 54546546, 'default.jpg'),
(969280255, 'Comete esta pes', 'cometeUncul@gmail.com', 456456, ''),
(2147483647, 'Carlos Arturo Guerrero', 'sadasdsadsad', 5454545, 'image (5).jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tventa`
--

DROP TABLE IF EXISTS `tventa`;
CREATE TABLE `tventa` (
  `idventa` int(11) NOT NULL,
  `idclient` int(11) NOT NULL,
  `montoT` float NOT NULL,
  `FechaVenta` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tventa`
--

INSERT INTO `tventa` VALUES
(1, 5, 124, '2020-11-17'),
(2, 5, 15, '2020-11-17'),
(3, 5, 71, '2020-11-17'),
(4, 5, 26, '2020-11-18'),
(5, 5, 199, '2020-11-18'),
(6, 5, 11, '2020-11-18'),
(7, 5, 15, '2020-11-18'),
(8, 5, 15, '2020-11-18'),
(9, 5, 15, '2020-11-18'),
(10, 5, 75, '2020-11-18'),
(11, 5, 15, '2020-11-18'),
(12, 5, 11, '2020-11-18'),
(13, 5, 15, '2020-11-18'),
(14, 5, 29, '2020-11-18'),
(15, 8, 5, '2020-11-20'),
(16, 2, 11, '2020-11-22'),
(17, 2, 4, '2020-11-22'),
(18, 2, 0, '2020-11-22'),
(19, 2, 5, '2020-11-22'),
(20, 2, 5, '2020-11-22'),
(21, 5, 0, '2020-11-28'),
(22, 9, 10, '2020-11-30'),
(23, 9, 10, '2020-11-30'),
(24, 9, 6, '2020-11-30'),
(25, 12, 6, '2020-12-13'),
(26, 12, 155, '2020-12-13'),
(27, 12, 123, '2020-12-13'),
(28, 12, 26, '2020-12-13'),
(29, 12, 64, '2020-12-16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tadministrador`
--
ALTER TABLE `tadministrador`
  ADD PRIMARY KEY (`idAdministracion`);

--
-- Indices de la tabla `tcarritc`
--
ALTER TABLE `tcarritc`
  ADD PRIMARY KEY (`idCarrito`);

--
-- Indices de la tabla `tcarritp`
--
ALTER TABLE `tcarritp`
  ADD PRIMARY KEY (`idCarritP`);

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
-- Indices de la tabla `tcomentproduc`
--
ALTER TABLE `tcomentproduc`
  ADD PRIMARY KEY (`idComent`);

--
-- Indices de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  ADD PRIMARY KEY (`IdDepartamento`);

--
-- Indices de la tabla `tdetalleventa`
--
ALTER TABLE `tdetalleventa`
  ADD PRIMARY KEY (`idDetalle`);

--
-- Indices de la tabla `tdistrito`
--
ALTER TABLE `tdistrito`
  ADD PRIMARY KEY (`idDistrito`);

--
-- Indices de la tabla `tpedido`
--
ALTER TABLE `tpedido`
  ADD PRIMARY KEY (`idpedido`);

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
-- Indices de la tabla `tventa`
--
ALTER TABLE `tventa`
  ADD PRIMARY KEY (`idventa`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tadministrador`
--
ALTER TABLE `tadministrador`
  MODIFY `idAdministracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `tcarritc`
--
ALTER TABLE `tcarritc`
  MODIFY `idCarrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tcarritp`
--
ALTER TABLE `tcarritp`
  MODIFY `idCarritP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT de la tabla `tciudad`
--
ALTER TABLE `tciudad`
  MODIFY `IdCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `tcliente`
--
ALTER TABLE `tcliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tcomentproduc`
--
ALTER TABLE `tcomentproduc`
  MODIFY `idComent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  MODIFY `IdDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tdetalleventa`
--
ALTER TABLE `tdetalleventa`
  MODIFY `idDetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT de la tabla `tdistrito`
--
ALTER TABLE `tdistrito`
  MODIFY `idDistrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tpedido`
--
ALTER TABLE `tpedido`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `tproducto`
--
ALTER TABLE `tproducto`
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `tproveedor`
--
ALTER TABLE `tproveedor`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ttipoproducto`
--
ALTER TABLE `ttipoproducto`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `tventa`
--
ALTER TABLE `tventa`
  MODIFY `idventa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
