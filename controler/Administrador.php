<?php

include_once ("../module/enti/Administrador.php");
include_once ("../module/bd/BDAdministrador.php");

if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    
    switch ($action) {

        case "inse" :
            /*verifica si lo que se quiere insertar es una imagen o los datos del administrador y realiza el proceso*/
            if(isset($_GET['fotosize'])&&isset($_GET['fotospath'])){
            $objidAd = $_GET['id'];
            $size = $_GET['fotosize'];
            $patch = $_GET['fotospath'];
            
            $objAdmi = new Administrador("",$objidAd,"","",$patch,"","","","");
            echo insertar($objAdmi);
            
            } else {
            
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];
            $objtipT = $_GET['tiptrabajo'];

            $objAdmi = new Administrador($objnom, $objdni, $objcorre, $objtelef, $objfoto,"","",$objpass, $objtipT);
            echo insertar($objAdmi);
            }
            break;

        case "delet" : 
                $idAdminis = $_GET['id'];
                $objAdmi = new Administrador("","","","","",$idAdminis,"","","");
                echo eliminar($objAdmi);
            break;
        case "list" : 
            $idDep = array("tip"=>$_GET['tip'], "uss"=>$_GET['uss'],"pas"=>$_GET['pas']);
            $array = listar($idDep);
            $aux = array();
            foreach ($array as $value) {
                $value['foto'] = Imgen($value['idAdministracion']);
                array_push($value,Imgen($value['idAdministracion']));
                array_push($aux, $value);
            }
            echo json_encode($aux);
            break;
        case "img" : 
            echo Imgen(2);
            break;
        case "Upd" :
            if(isset($_GET['fotosize'])&&isset($_GET['fotospath'])){
            $objidAd = $_GET['id'];
            $size = $_GET['fotosize'];
            $patch = $_GET['fotospath'];
            
//            $archivoObjet = fopen($patch,"rb");
//            $content = fread($archivoObjet,filesize($patch));
//            fclose($archivoObjet); 
            
            $objAdmi = new Administrador("","","","", $patch,$objidAd,"","","");
            update($objAdmi);
            }else{
            $objidAd = $_GET['id'];
            $objdni = $_GET['dni'];
            $objnom = $_GET['nom'];
            $objcorre = $_GET['corre'];
            $objtelef = $_GET['telef'];
            $objfoto = $_GET['foto'];
            $objpass = $_GET['pass'];
            $objtipT = $_GET['tiptrabajo'];

            $objAdmi = new Administrador($objnom, $objdni, $objcorre, $objtelef, $objfoto,$objidAd,"",$objpass, $objtipT);
            update($objAdmi);
            }
            break;
        default:
            echo 'no tienes nada en enseñar perro';
            break;
    }
}else{
    echo 'no tienes nada en enseñar perro';
}

function Imgen($idAdminis) {
   $idDep = array("tip"=>'5', "uss"=>$idAdminis,"pas"=>'AHGSDHASGD');
   $array = listar($idDep);
   $auximage = '';
   foreach ($array as $value) {
      $serv = $_SERVER['DOCUMENT_ROOT'].'/uploads/Admin/'; /*carpeta de donde se encuenta las imagenes del servidor*/
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
    $objAdmi = new AdministradorDAO();
    return $objAdmi->eliminar($var);
}

function insertar($var) {
    $objAdmi = new AdministradorDAO();
    return $objAdmi->insertar($var);
}

function listar($var) {
    $objAdmi = new AdministradorDAO();
    return $objAdmi->listar($var);
}

function update($var) {
    $objAdmi = new AdministradorDAO();
    return $objAdmi->update($var);
}


