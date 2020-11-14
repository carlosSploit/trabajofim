<?php
include_once ("../module/enti/Pedido.php");
include_once ("../module/bd/BDPedido.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "inse":
                $idCli = $_GET['idCli']; // se aprobechara el espacio para poder usar esa variable e insertar el id de ventas
                $Dist = $_GET['idDis'];
                $Direc = $_GET['direccion'];
                $obj = new Pedido("",$Dist, $Direc,$idCli);
                echo insertar($obj);
            break;

        case "list":
                $objtip = $_GET['tip'];
                $objid = $_GET['id'];
                $objfil = $_GET['fil'];
                $objClie = $_GET['iclien'];
                $objFiltro = $_GET['filGene'];
                $obj = array("tip"=>$objtip,'id'=>$objid,'fil'=>$objfil,'iclien'=>$objClie,'filGene'=>$objFiltro);
                echo json_encode(listar($obj));
            break;
        
        case "Upd":
                /*$id = $_GET['id'];
                $idDep = $_GET['idDep'];
                $nombre = $_GET['nom'];
                $obj = new Ciudad($idDep,$nombre);
                $obj->setIdCiudad($id);
                echo update($obj);*/
            break;
        case 'delet':
                /*$id = $_GET['id'];
                $obj = new Ciudad("","");
                $obj->setIdCiudad($id);
                echo eliminar($obj);*/
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
 function eliminar($var) {
    $bdoj = new PedidoDAO();
    return $bdoj->eliminar($var);
}

function insertar($var) {
    $bdoj = new PedidoDAO();
    return $bdoj->insertar($var);
}

function listar($var) {
    $bdoj = new PedidoDAO();
    return $bdoj->listar($var);
}

 function update($var) {
     $bdoj = new PedidoDAO();
     return $bdoj->update($var);
}
