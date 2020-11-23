<?php

include_once ("../module/enti/Cliente.php");
include_once ("../module/bd/BDCliente.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "inse" :
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];

            $objAdmi = new Cliente($objnom, $objdni, $objcorre, $objtelef, $objfoto,"","", $objpass);
            echo insertar($objAdmi);
            break;

        case "delet" : 
                $idCli = $_GET['id'];
                $objAdmi = new Cliente("","","","","", $idCli,"","");
                echo eliminar($objAdmi);
            break;
        case "list" : 
            $idDep = array("tip"=>$_GET['tip'], "uss"=>$_GET['uss'],"pas"=>$_GET['pas']);
            $array = listar($idDep);
            $aux = array();
            foreach ($array as $value) {
                $value['foto'] = Imgen($value['idCliente']);
                array_push($value,Imgen($value['idCliente']));
                array_push($aux, $value);
            }
            echo json_encode($aux);
            break;
        case "Upd" :
            if(isset($_GET['fotosize'])&&isset($_GET['fotospath'])){
            $objidCl = $_GET['id'];
            $size = $_GET['fotosize'];
            $patch = $_GET['fotospath'];
            
//            $archivoObjet = fopen($patch,"rb");
//            $content = fread($archivoObjet,filesize($patch));
//            fclose($archivoObjet); 
            
            $objAdmi = new Cliente("",$objidCl,"","",$patch,"","","");
            echo update($objAdmi);
            }else{
            $objidCl = $_GET['id'];
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];

            $objAdmi = new Cliente($objnom, $objdni, $objcorre, $objtelef, $objfoto, $objidCl,"", $objpass);
            echo update($objAdmi);
            }
            break;
        default:
            echo 'no tienes nada en enseñar perro';
            break;
    }
}else{
    echo 'no tienes nada en enseñar perro';
}

function Imgen($idClient) {
   $idDep = array("tip"=>'5', "uss"=>$idClient,"pas"=>'AHGSDHASGD');
   $array = listar($idDep);
   $auximage = '';
   foreach ($array as $value) {
      $serv = $_SERVER['DOCUMENT_ROOT'].'/uploads/Cliente/'; /*carpeta de donde se encuenta las imagenes del servidor*/
      $archivoObjet = fopen($serv.$value['foto'],"rb");
      $content = fread($archivoObjet,filesize($serv.$value['foto']));
      fclose($archivoObjet);
      $auximage = base64_encode($content);  
   }
   //echo '<img src="data:image/jpg;base64,'.$auximage.'" />';
   return $auximage;
}

//------------ METODOS ---------------
function eliminar($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new ClienteDAO();
    return $objAdmi->update($var);
}


