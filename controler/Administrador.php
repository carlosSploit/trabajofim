<?php
include_once ("../module/enti/Administrador.php");
include_once ("../module/bd/BDAdministrador.php");
include_once ("../module/bd/BDUsuario.php");
include_once ("../module/enti/Usuario.php");

switch (isset($_POST['action'])) {
    
    case "insert" : 
        break;
    
    case "eliminar" : 

        break;
    case "listar" : 

        break;
    case "update" : 

        break;
    default:
        break;
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


