<?php

include_once ("../module/enti/Producto.php");
include_once ("../module/bd/BDProducto.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $CodProd= $_GET['CodProd'];
                $IdProve = $_GET['IdProve'];
                $IdTipo = $_GET['IdTipo'];
                $Nom = $_GET['Nom'];
                $Descri = $_GET['Descri'];
                $Cantid = $_GET['Cantid'];
                $PreC = $_GET['PreC'];
                $PreV = $_GET['PreV'];
                $Photo = $_GET['Photo'];
                $obj = new Producto("",$CodProd, $IdProve, $IdTipo, $Nom, $Descri, $Cantid, $PreC, $PreV, $Photo,0,1);
                echo insertar($obj);
            break;

        case "list":
                $us = $_GET['userT'];
                $nom = $_GET['Nombre'];
                $tip = $_GET['Tipo'];
                $punt = $_GET['punt'];
                $coin = $_GET['coins'];
                $cat = $_GET['cat'];
            
                $idDep = array("userT"=>$us, "Tipo"=>$tip,"Nombre"=>$nom ,"punt"=>$punt,"coins"=>$coin,"cat"=>$cat);
                /*ESTA CLASE DE LISTADO DE DE MANEA MOMENTANEA*/
                echo json_encode(listar($idDep));
            break;
        
        case "Upd":
                $IdProd = $_GET['IdProd'];
                $CodProd = $_GET['CodProd'];
                $IdProve = $_GET['IdProve'];
                $IdTipo = $_GET['IdTipo'];
                $Nom = $_GET['Nom'];
                $Descri = $_GET['Descri'];
                $Cantid = $_GET['Cantid'];
                $PreC = $_GET['PreC'];
                $PreV = $_GET['PreV'];
                $Photo = $_GET['Photo'];
                $obj = new Producto($IdProd,$CodProd, $IdProve, $IdTipo, $Nom, $Descri, $Cantid, $PreC, $PreV, $Photo,0,1);
                echo update($obj);
            break;
        case 'delet':
                $IdProd = $_GET['IdProd'];
                $obj = new Producto($IdProd,"","","","","","","","","",0,1);
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new ProductoDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new ProductoDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new ProductoDAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new ProductoDAO();
     return $bdoj->update($var);
}
