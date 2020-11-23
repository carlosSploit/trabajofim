<?php

include_once ("../module/enti/CarritCompra.php");
include_once ("../module/bd/BDCarritCompra.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "inse" :
            $objUser = $_GET['idUser'];
            $objProd = $_GET['idProd'];
            $objCant = $_GET['cantidad'];

            $objAdmi = new CarritCompra("", $objUser, $objProd, $objCant);
            
            echo insertar($objAdmi);
            break;

        case "delet" :
            $objUser = $_GET['idUser'];
            $objProd = $_GET['idProd'];

            $objAdmi = new CarritCompra("", $objUser, $objProd,"");
            echo eliminar($objAdmi);
            break;
        
        case "list" :
            $id = $_GET['id'];
            $array = listar($id);
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
        case "Upd" :
            /*$objidClient = $_GET['idClient'];
            $objCiudad = $_GET['Ciudad'];
            $objDescrip = $_GET['Descrip'];

            $objAdmi = array('idClient'=>$objidClient,'Ciudad'=>$objCiudad,'Descrip'=>$objDescrip);
            echo update($objAdmi);*/
            break;
        default:
            echo 'no tienes nada en enseñar perro';
            break;
    }
}else{
    echo 'no tienes nada en enseñar perro';
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
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new CarritCompraDAO();
    return $objAdmi->update($var);
}
