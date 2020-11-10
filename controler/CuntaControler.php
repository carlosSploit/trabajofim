<?php

include_once ("../module/enti/CuentaCont.php");
include_once ("../module/bd/BDCuentaCont.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "inse" :
            $objdni = $_GET['uss'];
            $objmac = $_GET['mac'];

            $objAdmi = new CuentaCont("", $objdni, $objmac,"");
            echo insertar($objAdmi);
            break;

        case "delet" : 
            break;
        case "list" : 
            break;
        case "Upd" :
            
            $objidCl = $_GET['id'];
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];

            $objAdmi = new CuentaCont($idSeccion, $idClient, $mac, $estadoC);
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
    $objAdmi = new CuentaContDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new CuentaContDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new CuentaContDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new CuentaContDAO();
    return $objAdmi->update($var);
}
