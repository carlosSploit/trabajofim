<?php

include_once ("../module/enti/CarritCompra.php");
include_once ("../module/bd/BDCarritCompra.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "inse" :
            $objUser = $_GET['idUser'];
            $objProd = $_GET['idProd'];
            $objCant = $_GET['cantidad'];

            $objAdmi = new CarritCompra("", $objUser, $objProd, $objCant);
            
            echo insertar($objAdmi);
            break;

        case "delet" : 
            break;
        
        case "list" :
            $id = $_GET['id'];
            echo json_encode(listar($id));
            break;
        case "Upd" :
            
            $objidCl = $_GET['id'];
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];

            $objAdmi = new CarritCompra($idSeccion, $idClient, $mac, $estadoC);
            echo update($objAdmi);
            break;
        default:
            echo 'no tienes nada en enseñar perro';
            break;
    }
}else{
    echo 'no tienes nada en enseñar perro';
}
//------------ METODOS ---------------
function eliminar($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->update($var);
}
