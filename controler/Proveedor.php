<?php
include_once ("../module/enti/Proveedor.php");
include_once ("../module/bd/BDProveedor.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $nombre = $_GET['nom'];
                $Email = $_GET['Ema'];
                $Teleft = $_GET['tel'];
                $obj = new Proveedor("",$nombre,$Email,$Teleft);
                echo insertar($obj);
            break;

        case "list":
                echo json_encode(listar(""));
            break;
        
        case "Upd":
                $id = $_GET['id'];
                $nombre = $_GET['nom'];
                $Email = $_GET['Ema'];
                $Teleft = $_GET['tel'];
                $obj = new Proveedor($id,$nombre,$Email,$Teleft);
                echo update($obj);
            break;
        case 'delet':
                 $id = $_GET['id'];
                $obj = new Proveedor($id,"","","");
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new ProveedorDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new ProveedorDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new ProveedorDAO();
    return $bdoj->listar("");
}

 function update($var) {
     $bdoj = new ProveedorDAO();
     return $bdoj->update($var);
}
