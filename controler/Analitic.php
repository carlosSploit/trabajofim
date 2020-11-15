
<?php

include_once ("../module/bd/BDAnalitic.php");

//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {

        case "list":
                $idDep = $_GET['id'];
                echo json_encode(listar($idDep));
            break;

        default:
            break;
    }    
}

//------------ METODOS ---------------
function listar($var) {
    $bdoj = new AnaliticDAO();
    return $bdoj->listar($var);
}

