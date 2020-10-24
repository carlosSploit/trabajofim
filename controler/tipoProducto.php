<?php

include_once ("../module/enti/tipoProducto.php");
include_once ("../module/bd/BDtipoProducto.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $nombre = $_GET['nom'];
                $obj = new tipoProducto("",$nombre);
                echo insertar($obj);
            break;

        case "list":
                echo json_encode(listar(null));
            break;
        
        case "Upd":
                $id = $_GET['id'];
                $nombre = $_GET['nom'];
                $obj = new tipoProducto($id,$nombre);
                echo update($obj);
            break;
        case 'delet':
                $id = $_GET['id'];
                $obj = new tipoProducto($id,"");
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new tipoProductoDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new tipoProductoDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new tipoProductoDAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new tipoProductoDAO();
     return $bdoj->update($var);
}