<?php

include_once ("../module/enti/Cliente.php");
include_once ("../module/bd/BDCliente.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "inse" :
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];

            $objAdmi = new Cliente($objnom, $objdni, $objcorre, $objtelef, $objfoto,"","", $objpass);
            echo insertar($objAdmi);
            break;

        case "delet" : 
                $idCli = $_GET['id'];
                $objAdmi = new Cliente("","","","","", $idCli,"","");
                echo eliminar($objAdmi);
            break;
        case "list" : 
            $idDep = array("tip"=>$_GET['tip'], "uss"=>$_GET['uss'],"pas"=>$_GET['pas']);
            echo json_encode(listar($idDep));
            break;
        case "Upd" :
            
            $objidCl = $_GET['id'];
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];

            $objAdmi = new Cliente($objnom, $objdni, $objcorre, $objtelef, $objfoto, $objidCl,"", $objpass);
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
    $objAdmi = new ClienteDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->update($var);
}


