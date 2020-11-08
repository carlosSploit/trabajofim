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
/*--------------------------       Categoria de producto      -------------------------------*/
        case "Prod":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=inse
                 * &CodProd=(cod del producto)
                 * &IdProve=(id de proveedor de producto)
                 * &IdTipo=(id de la categoria del producto)
                 * &Nom=(nombre del producto)
                 * &Descri=(descripccion de producto)
                 * &Cantid=(cantidad en stock de producto)
                 * &PreC=(precio de compra del producto)
                 * &PreV=(precio de venta del producto)
                 * &Photo=(photodeproducto)*/
                case "inse":
                    header("Location: ../controler/Producto.php?Action=inse&CodProd=".$_GET['CodProd']."&IdProve=".$_GET['IdProve']."&IdTipo=".$_GET['IdTipo']."&Nom=".$_GET['Nom']."&Descri=".$_GET['Descri']."&Cantid=".$_GET['Cantid']."&PreC=".$_GET['PreC']."&PreV=".$_GET['PreV']."&Photo=".$_GET['Photo']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT=(el tipo de usuario que lo este buscando ya sea)
                 * por Administrador o cliente)&Tipo=(ya sea un listado de un producto o de una consulta de un producto)&Nombre=*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Producto.php?Action=list&userT=".$_GET['userT']."&Tipo=".$_GET['Tipo']."&Nombre=".$_GET['Nombre']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=Upd
                 * &IdProd=(id del producto)
                 * &CodProd=(Codigo del producto)
                 * &IdProve=(Id de proveedor)
                 * &IdTipo=(id de categoria)
                 * &Nom=(nombre dle producto)
                 * &Descri=(descripccion del producto)
                 * &Cantid=(stock del producto)
                 * &PreC=(precio de compra)
                 * &PreV=(precio de venta)
                 * &Photo=(array de byts de la foto)*/
                case 'Upd':
                    header("Location: ../controler/Producto.php?Action=Upd&IdProd=".$_GET['IdProd']."&CodProd=".$_GET['CodProd']."&IdProve=".$_GET['IdProve']."&IdTipo=".$_GET['IdTipo']."&Nom=".$_GET['Nom']."&Descri=".$_GET['Descri']."&Cantid=".$_GET['Cantid']."&PreC=".$_GET['PreC']."&PreV=".$_GET['PreV']."&Photo=".$_GET['Photo']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=delet&IdProd=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Producto.php?Action=delet&IdProd=".$_GET['IdProd']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
/*--------------------------       Categoria de producto      -------------------------------*/
    case "CatProd":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=inse&nom=(
                 * nombre del departamento a insertar)*/
                case "inse":
                    header("Location: ../controler/tipoProducto.php?Action=inse&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=list*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/tipoProducto.php?Action=list");
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=Upd&id=(
                 * index del departamento)&nom=(
                 * nombtre del departamento a insertar)*/
                case 'Upd':
                    header("Location: ../controler/tipoProducto.php?Action=Upd&id=".$_GET['id']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/tipoProducto.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
/*--------------------------       Proveedor      -------------------------------*/
    case "Prove":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=inse&nom=(
                 * nombre del distrito a insertar)&Ema=(Email del proveedor)&tel=(
                 * telefono del proveedor)*/
                case "inse":
                    header("Location: ../controler/Proveedor.php?Action=inse&nom=".$_GET['nom']."&Ema=".$_GET['Ema']."&tel=".$_GET['tel']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=list*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Proveedor.php?Action=list");
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=Upd&id=(
                 * index de la ciudad)&nom=(
                 * nombre del distrito a insertar)&Ema=(Email del proveedor)&tel=(
                 * telefono del proveedor)*/
                case 'Upd':
                    header("Location: ../controler/Proveedor.php?Action=Upd&id=".$_GET['id']."&nom=".$_GET['nom']."&Ema=".$_GET['Ema']."&tel=".$_GET['tel']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Proveedor.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
    /*--------------------------      Departamento      -------------------------------*/
    case "depart":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=inse&nom=(
                 * nombre del departamento a insertar)*/
                case "inse":
                    header("Location: ../controler/Departamento.php?Action=inse&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=list*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Departamento.php?Action=list");
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=Upd&id=(
                 * index del departamento)&nom=(
                 * nombtre del departamento a insertar)*/
                case 'Upd':
                    header("Location: ../controler/Departamento.php?Action=Upd&id=".$_GET['id']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=delet&id=(
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
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=inse&idDep=(
                 * representa al index del departamento )&nom=(
                 * nombre del departamento a insertar)*/
                case "inse":
                    header("Location: ../controler/Ciudad.php?Action=inse&idDep=".$_GET['idDep']."&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=list&idDep=(
                 * representa al index del departamento )*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Ciudad.php?Action=list&idDep=".$_GET['idDep']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=Upd&id=(
                 * index de la ciudad)&idDep=(
                 * representa al index del departamento )&nom=(
                 * nombtre del departamento a insertar)*/
                case 'Upd':
                    header("Location: ../controler/Ciudad.php?Action=Upd&id=".$_GET['id']."&idDep=".$_GET['idDep']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=delet&id=(
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
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=inse&idCI=(
                 * representa al index de la ciudad )&nom=(
                 * nombre del distrito a insertar)*/
                case "inse":
                    header("Location: ../controler/Distrito.php?Action=inse&idCI=".$_GET['idCI']."&nom=".$_GET['nom']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=list&idCI=(
                 * representa al index de la ciudad )*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Distrito.php?Action=list&idCI=".$_GET['idCI']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=Upd&id=(
                 * index de la ciudad)&idCI=(
                 * representa al index de la ciudad )&nom=(
                 * nombtre del distrito a insertar)*/
                case 'Upd':
                    header("Location: ../controler/Distrito.php?Action=Upd&id=".$_GET['id']."&idCI=".$_GET['idCI']."&nom=".$_GET['nom']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=delet&id=(
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


