<?php
include_once ("../module/enti/Ciudad.php");
include_once ("../module/bd/BDCiudad.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $idDep = $_GET['idDep'];
                $nombre = $_GET['nom'];
                $obj = new Ciudad($idDep,$nombre);
                echo insertar($obj);
            break;

        case "list":
                $idDep = $_GET['idDep'];
                echo json_encode(listar($idDep));
            break;
        
        case "Upd":
                $id = $_GET['id'];
                $idDep = $_GET['idDep'];
                $nombre = $_GET['nom'];
                $obj = new Ciudad($idDep,$nombre);
                $obj->setIdCiudad($id);
                echo update($obj);
            break;
        case 'delet':
                $id = $_GET['id'];
                $obj = new Ciudad("","");
                $obj->setIdCiudad($id);
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new CiudadDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new CiudadDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new CiudadDAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new CiudadDAO();
     return $bdoj->update($var);
}



