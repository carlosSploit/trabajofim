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
                $array = listar($obj);
                $aux = array();
                foreach ($array as $value) {
                    if(array_key_exists('photo',$value)){
                        $value['foto'] = Imgen($value['photo']);
                        array_push($value,Imgen($value['photo']));
                    }
                    array_push($aux, $value);
                }
                echo json_encode($aux);
            break;
        case "img" : 
            echo Imgen('descarga.jpg');
            break;
        case "Upd":
                $id = $_GET['id'];
                $est = $_GET['est'];
                $obj = new Pedido($id,"","","");
                $obj->setEstado($est);
                echo update($obj);
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

function Imgen($idProdu) {
    $serv = $_SERVER['DOCUMENT_ROOT'].'/uploads/product/'; /*carpeta de donde se encuenta las imagenes del servidor*/
    $archivoObjet = fopen($serv.$idProdu,"rb");
    $content = fread($archivoObjet,filesize($serv.$idProdu));
    fclose($archivoObjet);
    $auximage = base64_encode($content);
   //echo '<img src="data:image/jpg;base64,'.$auximage.'" />';
   return $auximage;
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
