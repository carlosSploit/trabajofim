<?php

/* por otra parte el ob son los objetos donde tu quieras interactuar ya sea
 * un cliente un administrador una ciudad etc. cada objeto tiene una accion por
 * el cual aqui (significa en cas swicht) es donde se va realizar las acciones 
 * del departamento inser-lis-up- donde utilizamos un carapter de entrada...
 * A-> es la accion que se va a realizar con la entidad el cual sera nuestro
 * partametro de uso*/

if(isset($_GET['ob'])){
    $objet = $_GET['ob'];
    switch ($objet) {
//    case "Adm": //Administrador
//        header("Location: ../controler/Administrador.php?");
//        break;
//    case "Cid": //Ciudad
//        header("Location: ../controler/Ciudad.php?");
//        break;
//    case "ComP"://ComentProducto
//        header("Location: ../controler/ComentProducto.php");
//        break;
//    case "Clit"://Cliente
//        header("Location: ../controler/Cliente.php?");
//        break;
//    case "Vet": //Ventas
//        break;
//    case $value:
//        break;
//    case $value:
//        break;
    /*--------------------------      Departamento      -------------------------------*/
    case "depart":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=depart&A=inse&nom=(
                 * nombre del departamento a insertar)*/
                case "inse":
                    header("Location: ../controler/Departamento.php?Action=inse&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=depart&A=list*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Departamento.php?Action=list");
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=depart&A=Upd&id=(
                 * index del departamento)&nom=(
                 * nombtre del departamento a insertar)*/
                case 'Upd':
                    header("Location: ../controler/Departamento.php?Action=Upd&id=".$_GET['id']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=depart&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Departamento.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
    /*--------------------------       Ciudad      -------------------------------*/
    case "Ciu":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Ciu&A=inse&idDep=(
                 * representa al index del departamento )&nom=(
                 * nombre del departamento a insertar)*/
                case "inse":
                    header("Location: ../controler/Ciudad.php?Action=inse&idDep=".$_GET['idDep']."&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Ciu&A=list&idDep=(
                 * representa al index del departamento )*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Ciudad.php?Action=list&idDep=".$_GET['idDep']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Ciu&A=Upd&id=(
                 * index de la ciudad)&idDep=(
                 * representa al index del departamento )&nom=(
                 * nombtre del departamento a insertar)*/
                case 'Upd':
                    header("Location: ../controler/Ciudad.php?Action=Upd&id=".$_GET['id']."&idDep=".$_GET['idDep']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Ciu&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Ciudad.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
    /*--------------------------       Distrito      -------------------------------*/
    case "Distr":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Distr&A=inse&idCI=(
                 * representa al index de la ciudad )&nom=(
                 * nombre del distrito a insertar)*/
                case "inse":
                    header("Location: ../controler/Distrito.php?Action=inse&idCI=".$_GET['idCI']."&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Distr&A=list&idCI=(
                 * representa al index de la ciudad )*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Distrito.php?Action=list&idCI=".$_GET['idCI']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Distr&A=Upd&id=(
                 * index de la ciudad)&idCI=(
                 * representa al index de la ciudad )&nom=(
                 * nombtre del distrito a insertar)*/
                case 'Upd':
                    header("Location: ../controler/Distrito.php?Action=Upd&id=".$_GET['id']."&idCI=".$_GET['idCI']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/controler/ApiManager.php?ob=Distr&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Distrito.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
    default:
        echo 'se a realizado un mal uso de la api, porfavor consulta el manual';
        break;
}

}
echo ("que passa perro");


