<?php

include_once ("../module/enti/Departamento.php");
include_once ("../module/bd/BDDepartamento.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $nombre = $_GET['nom'];
                $obj = new Departamento($nombre);
                echo insertar($obj);
            break;

        case "list":
                echo json_encode(listar(null));
            break;
        
        case "Upd":
                $id = $_GET['id'];
                $nombre = $_GET['nom'];
                $obj = new Departamento($nombre);
                $obj->setIdDeparmt($id);
                echo update($obj);
            break;
        case 'delet':
                $id = $_GET['id'];
                $obj = new Departamento("");
                $obj->setIdDeparmt($id);
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new DepartamentoDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new DepartamentoDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new DepartamentoDAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new DepartamentoDAO();
     return $bdoj->update($var);
}






