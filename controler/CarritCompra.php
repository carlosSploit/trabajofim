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
            $objUser = $_GET['idUser'];
            $objProd = $_GET['idProd'];

            $objAdmi = new CarritCompra("", $objUser, $objProd,"");
            echo eliminar($objAdmi);
            break;
        
        case "list" :
            $id = $_GET['id'];
            echo json_encode(listar($id));
            break;
        case "Upd" :
            /*$objidClient = $_GET['idClient'];
            $objCiudad = $_GET['Ciudad'];
            $objDescrip = $_GET['Descrip'];

            $objAdmi = array('idClient'=>$objidClient,'Ciudad'=>$objCiudad,'Descrip'=>$objDescrip);
            echo update($objAdmi);*/
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
