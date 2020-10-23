<?php
include_once ("../module/enti/Distrito.php");
include_once ("../module/bd/BDDistrito.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $idCI = $_GET['idCI'];
                $nombre = $_GET['nom'];
                $obj = new Distrito($idCI,$nombre);
                echo insertar($obj);
            break;

        case "list":
                $idCI = $_GET['idCI'];
                echo json_encode(listar($idCI));
            break;
        
        case "Upd":
                $id = $_GET['id'];
                $idDep = $_GET['idCI'];
                $nombre = $_GET['nom'];
                $obj = new Distrito($idDep,$nombre);
                $obj->setIdDistrito($id);
                echo update($obj);
            break;
        case 'delet':
                $id = $_GET['id'];
                $obj = new Distrito("","");
                $obj->setIdDistrito($id);
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new DistritoDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new DistritoDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new DistritoDAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new DistritoDAO();
     return $bdoj->update($var);
}