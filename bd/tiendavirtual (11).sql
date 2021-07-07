-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2020 a las 01:30:21
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCatPro` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE ttipoproducto SET nombreTipo = nom WHERE idTipo = id ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarCiu` (IN `id` INT, IN `idDep` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tciudad SET IdDepartamento = idDep , NombreCiudad = nom WHERE IdCiudad = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarClient` (IN `id` INT, IN `dni` INT, IN `nom` VARCHAR(60), IN `corre` VARCHAR(100), IN `telef` INT(9), IN `foto` LONGBLOB, IN `pass` VARCHAR(11))  BEGIN
/*eSTO QUIERE DECIR QUE ESTA PASANDO UN FILTRO DE DATOS*/
IF (nom <> '') & (corre <> '') & (telef <> '') & (pass <> '') THEN
UPDATE tusuario tu SET tu.nombre = nom ,tu.correo= corre ,tu.telefono= telef WHERE tu.dni_user = dni;

UPDATE tcliente tc SET tc.usser = corre , tc.pass = pass , tc.estado = true WHERE tc.idUser = dni;
ELSE 
UPDATE tusuario tu SET tu.foto = foto WHERE tu.dni_user = dni;
END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDepart` (IN `id` INT, IN `nom` VARCHAR(60))  BEGIN
	UPDATE tdepartamento SET NombreDepart = nom WHERE IdDepartamento = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarDist` (IN `id` INT, IN `idCiu` INT, IN `nom` VARCHAR(60))  BEGIN
UPDATE tdistrito SET idCiudad = idCiu , nombreDistrito = nom WHERE idDistrito = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarPedid` (IN `idPed` INT, IN `estado` INT)  BEGIN
UPDATE tpedido tp SET tp.estado = estado WHERE tp.idpedido = idPed;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProduc` (IN `CodPro` INT, IN `idprov` INT, IN `idCatP` INT, IN `nom` VARCHAR(60), IN `descri` VARCHAR(200), IN `canti` INT, IN `preC` FLOAT, IN `preVe` FLOAT, IN `photo` LONGBLOB, IN `idProdu` INT)  NO SQL
BEGIN
IF (CodPro <> '') &  (idprov <> '') & (idCatP <> '') & (nom <> '') & (descri <> '') & (canti <> '') & (preC <> '') & (preVe <> '')THEN

UPDATE tproducto SET CodProduc = CodPro, idProveedor = idprov ,idTipo = idCatP , Nombre = nom , Descripcion = descri ,Cantidad = canti, PrecioC = preC, PrecioV = preVe WHERE idproducto = idProdu;

ELSE

UPDATE tproducto SET photo = photo WHERE idproducto = idProdu;

END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ActualizarProve` (IN `id` INT, IN `nom` VARCHAR(60), IN `Ema` VARCHAR(30), IN `telf` VARCHAR(9))  BEGIN
UPDATE tproveedor SET nombre= nom , Email = Ema , celular = telf WHERE idProveedor = id;
END$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarAdminis` (IN `id` INT)  BEGIN
UPDATE tadministrador ta SET ta.estado = false WHERE ta.idAdministracion = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_EliminarCarritP` (IN `idCli` INT, IN `idPro` INT)  BEGIN

DELETE FROM tcarritp WHERE idproducto = idPro AND idCarritC = (SELECT tcc.idCarrito FROM tcarritc tcc WHERE tcc.idUser = idCli);

/*Actualiza el monto final de los productos*/
UPDATE tcarritc tcc SET tcc.montT = (SELECT SUM(tcp.cantidad * p.PrecioV) FROM tcarritc tcc, tcarritp tcp, tproducto p , tcliente tc WHERE tcp.idproducto = p.idproducto AND tc.idCliente = tcc.idUser AND tcp.idCarritC = tcc.idCarrito AND tc.idCliente = idCli) WHERE tcc.idCarrito = (SELECT tcc.idCarrito FROM tcarritc tcc, tcliente tc WHERE tc.idCliente = tcc.idUser AND tcc.idUser = idCli);

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarComent` (IN `idCli` INT, IN `idprod` INT, IN `meseng` VARCHAR(100), IN `caT` INT)  BEGIN
DECLARE cal int;
INSERT INTO tcomentproduc ( idProducto , descripccion , califprod, idCliente) VALUES (idprod,meseng,caT,idCli);
/*en caso que el comentario ya este insertado, se hace un listado*/
set cal = (SELECT AVG(tp.califprod) FROM tcomentproduc tp WHERE tp.idProducto = idprod);
UPDATE tproducto SET calificacion = cal WHERE idproducto = idprod;
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
INSERT INTO tdistrito (idCiudad, nombreDistrito) VALUES (idCiu,nom);
END$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarProduc` (IN `codPro` VARCHAR(10), IN `IdPro` INT, IN `Idtipo` INT, IN `nom` VARCHAR(100), IN `descri` VARCHAR(200), IN `casti` INT, IN `preC` FLOAT, IN `preVe` FLOAT, IN `photo` LONGBLOB)  BEGIN
INSERT INTO `tproducto`(`CodProduc`, `idProveedor`, `idTipo`, `Nombre`, `Descripcion`, `Cantidad`, `PrecioC`, `PrecioV`, `estado`, `photo`, `calificacion`) VALUES (codPro,IdPro,Idtipo,nom,descri,casti,preC,preVe,1,photo,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_InsertarProve` (IN `nomd` VARCHAR(60), IN `Email` VARCHAR(30), IN `celular` VARCHAR(9))  NO SQL
BEGIN
INSERT INTO tproveedor (nombre, Email , celular ) VALUES (nomd,Email,celular);
END$$

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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarCarritP` (IN `id` INT)  BEGIN
SELECT p.idproducto , p.Nombre , p.PrecioV , tcp.cantidad ,p.photo , tcc.montT FROM tproducto p , tcarritp tcp ,tcarritc tcc WHERE tcp.idCarritC = tcc.idCarrito AND tcp.idproducto = p.idproducto AND
tcc.idUser = id;
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
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarComent` (IN `tip` INT, IN `idpot` INT)  BEGIN
DECLARE cantiComent integer;
DECLARE estre1 integer;
DECLARE estre2 integer;
DECLARE estre3 integer;
DECLARE estre4 integer;
DECLARE estre5 integer;

/*listar todos los comentarios*/
IF tip = 1 THEN
SELECT * FROM tcomentproduc tcp WHERE tcp.idProducto = idpot;
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
IF idCiu = -1 THEN
SELECT * FROM tdistrito tds, tciudad tc, tdepartamento td WHERE td.IdDepartamento=tc.IdDepartamento AND tc.idCiudad = tds.idCiudad;
ELSE 
SELECT * FROM tdistrito tds, tciudad tc, tdepartamento td WHERE td.IdDepartamento = tc.IdDepartamento AND tc.idCiudad = tds.idCiudad AND tds.idCiudad =  idCiu;
END IF;
END$$

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
AND tv.idclient = idclient;
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
AND tp.iddistrito = tds.idDistrito;
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
AND tp.idpedido = id;
END IF;
END IF;
END$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_ListarProve` ()  BEGIN
SELECT * FROM tproveedor WHERE 1;
END$$

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
(2, 147528369, '147528369', '4564878', 'Gerente', 1),
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
(21, 71962094, '71962094', '45465456', 'Trabajador', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcarritc`
--

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

INSERT INTO `tcarritc` (`idCarrito`, `idUser`, `montT`, `Ciudad`, `Descripccion`) VALUES
(1, 5, 0, NULL, NULL),
(2, 8, 0, NULL, NULL),
(3, 2, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcarritp`
--

CREATE TABLE `tcarritp` (
  `idCarritP` int(11) NOT NULL,
  `idCarritC` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(2, 969280255, 'cometeUnculo@gmail.com', '454546546', 1),
(3, 78945612, 'Estefany@gmail.com', '12345678', 1),
(4, 960262, 'hasdjhsajdhjh', '747474125', 1),
(5, 703035, 'AnaMariaCastilloDeslgado@gmail.com', '122345567', 1),
(6, 1234567, 'sdfdsfdsfdsf@gmail.com', '12345678', 1),
(7, 152914, 'asdhjkshd@gmail.com', '123456789', 1),
(8, 425648, 'vegasadriana64@gmail.com', '1597534', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tcomentproduc`
--

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

INSERT INTO `tcomentproduc` (`idComent`, `idProducto`, `descripccion`, `califprod`, `idCliente`) VALUES
(1, 1, 'El producto es algo raro la verdad', 2, 5),
(2, 1, 'Producto hasta las nalgas', 0, 5),
(3, 1, 'que ricolin produc caracho ', 4, 5);

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
-- Estructura de tabla para la tabla `tdetalleventa`
--

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

INSERT INTO `tdetalleventa` (`idDetalle`, `idVent`, `idProduc`, `canti`, `PrecProd`) VALUES
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
(57, 20, 1, 1, 5);

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
(9, 17, 'Piura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tpedido`
--

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

INSERT INTO `tpedido` (`idpedido`, `idVent`, `direccion`, `iddistrito`, `estado`) VALUES
(1, 1, 'Av san martín 260 buenos aires piura', 9, 2),
(2, 2, 'SADSADSADASDSADASDADASDSADASDAD', 9, 1),
(3, 3, 'Av san petera cosita rica .com', 9, 1),
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
(20, 20, 'dfdfsfsdfsdfsdfsdsfsdf', 9, 1);

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
  `photo` varchar(100) DEFAULT NULL,
  `calificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tproducto`
--

INSERT INTO `tproducto` (`idproducto`, `CodProduc`, `idProveedor`, `idTipo`, `Nombre`, `Descripcion`, `Cantidad`, `PrecioC`, `PrecioV`, `estado`, `photo`, `calificacion`) VALUES
(1, '969280255', 4, 58, 'Calsones color rojo', 'comeme todo el culo', 22, 2.5, 5, 1, 'FB_IMG_16021445907674814.jpg', 2),
(2, '789456', 5, 60, 'Lechita para mi', 'Leche ricolina para cosas ricolinas', 19, 4.5, 6, 1, 'descarga.jpg', 1),
(3, '789159456', 6, 60, 'Leche gloria gold', 'Leche descremada para tu consumo y tu adixion pes bebesita', 49, 3, 4, 1, 'FB_IMG_16019234758069911.jpg', 1),
(4, '789456', 5, 60, 'Lechita para mi', 'jkdskljdkfksdljflk', 45, 45, 60, 1, 'image (5).jpg', 1);

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
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tusuario`
--

INSERT INTO `tusuario` (`dni_user`, `nombre`, `correo`, `telefono`, `foto`) VALUES
(152914, 'Juan sapata medina', 'asdhjkshd@gmail.com', 969280255, 'default.jpg'),
(425648, 'Adriana negra rica', 'vegasadriana64@gmail.com', 969280255, 'default.jpg'),
(703035, '', 'AnaMariaCastilloDeslgado@gmail.com', 969280255, 'default.jpg'),
(960262, '', 'hasdjhsajdhjh', 969280255, 'default.jpg'),
(1234567, '', 'sdfdsfdsfdsf', 147852695, 'default.jpg'),
(5313396, 'Benedicta Tirado', 'hsdjfhsdjkfhsdjk', 74718525, 'default.jpg'),
(14456036, 'asdasdasdsa', 'asdasdasdasd', 45456454, 'FB_IMG_16021445907674814.jpg'),
(71962094, 'Ana Cecilia Guerrero Castillo', 'dhjfkhdsfjkhsdjfhdskjfds', 969280255, 'FB_IMG_16021445907674814.jpg'),
(78945612, 'Care culo', 'Estefany@gmail.com', 147852695, 'default.jpg'),
(147417471, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'image (5).jpg'),
(147528369, 'carlos ancajima hernandez', 'arturo14@gmail.com', 969280255, 'image (4).jpg'),
(151416233, 'asjhdjashdjsa', 'asgdhjsgadhasgdasjgdhasjd', 74717523, 'default.jpg'),
(234545445, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'default.jpg'),
(357321159, 'kdjfkdjfkdjfkdjfk', 'fjghdfjghdfjkghkfd', 959481522, 'image (4).jpg'),
(369258147, 'Me como un culo', 'asdasdsadsadsdas', 985796307, 'default.jpg'),
(454545646, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'default.jpg'),
(719620864, 'comete esta pes', 'Arturo14212000@gmail.com', 969280255, 'default.jpg'),
(789455646, 'sdfsdfdsf', 'sdfsdfsdfds', 54546546, 'default.jpg'),
(789456123, 'sdfsdfdsf', 'Arturo@gmail.com', 54546546, 'default.jpg'),
(969280255, 'Comete esta pes', 'cometeUnculo@gmail.com', 456456, 'image (6).jpg'),
(2147483647, 'asdsadasdasd', 'sadasdsadsad', 5454545, 'image (5).jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tventa`
--

CREATE TABLE `tventa` (
  `idventa` int(11) NOT NULL,
  `idclient` int(11) NOT NULL,
  `montoT` float NOT NULL,
  `FechaVenta` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tventa`
--

INSERT INTO `tventa` (`idventa`, `idclient`, `montoT`, `FechaVenta`) VALUES
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
(20, 2, 5, '2020-11-22');

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
  MODIFY `idAdministracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `tcarritc`
--
ALTER TABLE `tcarritc`
  MODIFY `idCarrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tcarritp`
--
ALTER TABLE `tcarritp`
  MODIFY `idCarritP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

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
-- AUTO_INCREMENT de la tabla `tcomentproduc`
--
ALTER TABLE `tcomentproduc`
  MODIFY `idComent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tdepartamento`
--
ALTER TABLE `tdepartamento`
  MODIFY `IdDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tdetalleventa`
--
ALTER TABLE `tdetalleventa`
  MODIFY `idDetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `tdistrito`
--
ALTER TABLE `tdistrito`
  MODIFY `idDistrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tpedido`
--
ALTER TABLE `tpedido`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `tproducto`
--
ALTER TABLE `tproducto`
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tproveedor`
--
ALTER TABLE `tproveedor`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ttipoproducto`
--
ALTER TABLE `ttipoproducto`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `tventa`
--
ALTER TABLE `tventa`
  MODIFY `idventa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
