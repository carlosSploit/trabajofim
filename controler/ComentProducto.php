<?php

include_once ("../module/enti/ComentProducto.php");
include_once ("../module/bd/BDComentProducto.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $idProd = $_GET['idProd'];
                $idClient = $_GET['idClient'];
                $Descrip = $_GET['Descrip'];
                $Califi= $_GET['Califi'];
                $obj = new comentProducto($idComent, $idProd, $Descrip, $idClient, $Califi);
                echo insertar($obj);
            break;

        case "list":
                $idDep = $_GET['idDep'];
                echo json_encode(listar($idDep));
            break;
        
        case "Upd":
                $idComPro = $_GET['idComPro'];
                $idProd = $_GET['idProd'];
                $idClient = $_GET['idClient'];
                $Descrip = $_GET['Descrip'];
                $Califi= $_GET['Califi'];
                $obj = new comentProducto($idComPro, $idProd, $Descrip, $idClient, $Califi);
                $obj->setIdCiudad($id);
                echo update($obj);
            break;
        case 'delet':
                $id = $_GET['id'];
                $obj = new comentProducto($idComent, $idProducto, $descripccion, $idCliente, $calif_prod);
                $obj->setIdCiudad($id);
                echo eliminar($obj);
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new ComentProduDAODAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new ComentProduDAODAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new ComentProduDAODAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new ComentProduDAODAO();
     return $bdoj->update($var);
}

