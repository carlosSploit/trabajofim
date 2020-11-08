<?php

include_once ("../module/enti/Administrador.php");
include_once ("../module/bd/BDAdministrador.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "insert" :
            
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];
            $objtipT = $_GET['tiptrabajo'];

            $objAdmi = new Administrador($objnom, $objdni, $objcorre, $objtelef, $objfoto,"","",$objpass, $objtipT);
            echo insertar($objAdmi);
            break;

        case "eliminar" : 

            break;
        case "listar" : 

            break;
        case "update" :
            
            $objidAd = $_GET['id'];
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];
            $objtipT = $_GET['tiptrabajo'];

            $objAdmi = new Administrador($objnom, $objdni, $objcorre, $objtelef, $objfoto,$objidAd,"",$objpass, $objtipT);
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
    $objAdmi = new AdministradorDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new AdministradorDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new AdministradorDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new AdministradorDAO();
    return $objAdmi->update($var);
}


