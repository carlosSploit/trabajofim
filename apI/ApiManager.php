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
        case "Report":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Report&A=list
                 * &tip=(mac de la cuenta)
                 * &desde=(mac de la cuenta)
                 * &hasta=(mac de la cuenta)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Report.php?Action=list&tip=".$_GET['tip']."&desde=".$_GET['desde']."&hasta=".$_GET['hasta']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
        case "Analic":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Analic&A=list
                 * &id=(mac de la cuenta)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Analitic.php?Action=list&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
        case "pedid":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=inse
                 * &idCli=(id del cliente)
                 * &idDis=(id distrito donde vive el cliente)
                 * &direccion=(direcion destino del pedido)*/
                case "inse":
                    header("Location: ../controler/Pedido.php?Action=inse&idCli=".$_GET['idCli']."&idDis=".$_GET['idDis']."&direccion=".$_GET['direccion']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=list
                 * &tip=(mac de la cuenta)
                 * &fil=(mac de la cuenta)
                 * &id = (id tanto del pedido o del cliente) -> 
                 * &iclien  = (id del cliente en caso de un listado mas dendo)
                 * &filGene  = (tipo de filtro que se desea en caso que se requiera)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Pedido.php?Action=list&tip=".$_GET['tip']."&fil=".$_GET['fil']."&id=".$_GET['id']."&iclien=".$_GET['iclien']."&filGene=".$_GET['filGene']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=Upd
                 * &id= (id del pedido)
                 * &est=(nuevo estado del pedido)*/
                case 'Upd':
                    header("Location: ../controler/Pedido.php?Action=Upd&id=".$_GET['id']."&est=".$_GET['est']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Cliente.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
        case "coment":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=inse
                 * &idProd=(id del producto)
                 * &idClient=(id del cliente)
                 * &Descrip=(mensaje del cliente)
                 * &Califi=(calificacion del producto del cliente)*/
                case "inse":
                    header("Location: ../controler/ComentProducto.php?Action=inse&idProd=".$_GET['idProd']."&idClient=".$_GET['idClient']."&Descrip=".$_GET['Descrip']."&Califi=".$_GET['Califi']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=list
                 * &tip=(mac de la cuenta)
                 * &idpo=(mac de la cuenta)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/ComentProducto.php?Action=list&tip=".$_GET['tip']."&idpo=".$_GET['idpo']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=Upd
                 * &id= (id del administraodr)
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)*/
                case 'Upd':
                    header("Location: ../controler/Cliente.php?Action=Upd&id=".$_GET['id']."&dni=".$_GET['dni']."&nom=".$_GET['nom']."&corre=".$_GET['corre']."&telef=".$_GET['telef']."&foto=".$_GET['foto']."&pass=".$_GET['pass']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Cliente.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
        /*--------------------------      Carrito de compra      -------------------------------*/
        case "carritC":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=inse
                 * &idUser=(id del cliente)
                 * &idProd=(mac del cliente)
                 * &cantidad= (Cantidad de productos)*/
                case "inse":
                    header("Location: ../controler/CarritCompra.php?Action=inse&idUser=".$_GET['idUser']."&idProd=".$_GET['idProd']."&cantidad=".$_GET['cantidad']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=list
                 * &id=(id del usuario)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/CarritCompra.php?Action=list&id=".$_GET['id']);
                break;
                /*la actalisacion en este caso solo se va a dar por ciudad y descripccion, por otra parte en la parte la tarea sera manipulado por sercivios*/
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=Upd
                 * &idClient=(id del cliente)
                 * &Ciudad=(id de la ciudad)
                 * &Descrip=(descripccion del pedido o lugar)*/
                case 'Upd':
                    header("Location: ../controler/CarritCompra.php?Action=Upd&idClient=".$_GET['idClient']."&Ciudad=".$_GET['Ciudad']."&Descrip=".$_GET['Descrip']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=delet
                 * &idUser=(id del cliente)
                 * &idProd=(mac del cliente)*/
                case "delet":
                    header("Location: ../controler/CarritCompra.php?Action=delet&idUser=".$_GET['idUser']."&idProd=".$_GET['idProd']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
        /*--------------------------      Cliente      -------------------------------*/
        case "cuenC":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=cuenC&A=inse
                 * &uss=(id del cliente)
                 * &mac=(mac del cliente)*/
                case "inse":
                    header("Location: ../controler/CuntaControler.php?Action=inse&uss=".$_GET['uss']."&mac=".$_GET['mac']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=cuenC&A=list
                 * &mac=(mac de la cuenta)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/CuntaControler.php?Action=list&mac=".$_GET['mac']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=Upd
                 * &id= (id del administraodr)
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)*/
                case 'Upd':
                    header("Location: ../controler/Cliente.php?Action=Upd&id=".$_GET['id']."&dni=".$_GET['dni']."&nom=".$_GET['nom']."&corre=".$_GET['corre']."&telef=".$_GET['telef']."&foto=".$_GET['foto']."&pass=".$_GET['pass']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Cliente.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;

        case "Mesg":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Mesg&A=inse
                 * &tipm=(tipo de mensaje a enviar)
                 * &name=(nombre del usuario)
                 * &mail=(email del usuario)
                 * &mailD=(tipo de correo de envio)
                 * &message=(Mensaje que se quiera enviar)*/
                case "inse":
                    header("Location: ../controler/MessengControler.php?Action=inse&tipm=".$_GET['tipm']."&name=".$_GET['name']."&mail=".$_GET['mail']."&mailD=".$_GET['mailD']."&message=".$_GET['message']."&iclien=".$_GET['iclien']);
                break;
                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
/*--------------------------      Cliente      -------------------------------*/
        case "clie":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=inse
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)*/
                case "inse":
                    header("Location: ../controler/Cliente.php?Action=inse&dni=".$_GET['dni']."&nom=".$_GET['nom']."&corre=".$_GET['corre']."&telef=".$_GET['telef']."&foto=".$_GET['foto']."&pass=".$_GET['pass']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=list
                 * &tip=(tipo de busqueda que se quiera realizar)
                 * &uss=(usuario de la cueta)
                 * &pas=(password de la cuenta)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Cliente.php?Action=list&tip=".$_GET['tip']."&uss=".$_GET['uss']."&pas=".$_GET['pas']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=Upd
                 * &id= (id del administraodr)
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)*/
                case 'Upd':
                    header("Location: ../controler/Cliente.php?Action=Upd&id=".$_GET['id']."&dni=".$_GET['dni']."&nom=".$_GET['nom']."&corre=".$_GET['corre']."&telef=".$_GET['telef']."&foto=".$_GET['foto']."&pass=".$_GET['pass']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Cliente.php?Action=delet&id=".$_GET['id']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
        /*--------------------------      Administrador      -------------------------------*/
        case "Admi":
        if(isset($_GET['A'])){
            $actioOBJ = $_GET['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=inse
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)
                 * &tiptrabajo= (tipo de trabajador del adminitrador) esta funcionavilidad no presenta mucho uso momentaneamente*/
                case "inse":
                    header("Location: ../controler/Administrador.php?Action=inse&dni=".$_GET['dni']."&nom=".$_GET['nom']."&corre=".$_GET['corre']."&telef=".$_GET['telef']."&foto=".$_GET['foto']."&pass=".$_GET['pass']."&tiptrabajo=".$_GET['tiptrabajo']);
                break;

                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list
                 * &tip=(tipo de busqueda que se quiera realizar)
                 * &uss=(usuario de la cueta)
                 * &pas=(password de la cuenta)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Administrador.php?Action=list&tip=".$_GET['tip']."&uss=".$_GET['uss']."&pas=".$_GET['pas']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=Upd
                 * &id= (id del administraodr)
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)
                 * &tiptrabajo= (tipo de trabajador del adminitrador) esta funcionavilidad no presenta mucho uso momentaneamente*/
                case 'Upd':
                    header("Location: ../controler/Administrador.php?Action=Upd&id=".$_GET['id']."&dni=".$_GET['dni']."&nom=".$_GET['nom']."&corre=".$_GET['corre']."&telef=".$_GET['telef']."&foto=".$_GET['foto']."&pass=".$_GET['pass']."&tiptrabajo=".$_GET['tiptrabajo']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=delet&id=(
                 * index del departamento)*/
                case "delet":
                    header("Location: ../controler/Administrador.php?Action=delet&id=".$_GET['id']);
                break;
            
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=delet&id=(
                 * index del departamento)*/
                case "img":
                    header("Location: ../controler/Administrador.php?Action=img&tip=".$_GET['tip']."&uss=".$_GET['uss']."&pas=".$_GET['pas']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
/*--------------------------       Producto      -------------------------------*/
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
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list
                 * &userT=(el tipo de usuario que lo este buscando ya sea por Administrador o cliente)
                 * &Tipo=(ya sea un listado de un producto o de una consulta de un producto)
                 * &Nombre= (Algun tipo de parametro de busqueda ya sea por nombre o categoria)
                 * &punt = (filtraje por puntos)
                 * &coins = (cantidad de dinero por filtro)
                 * &cat = (filtraje por categoria)*/
                case "list": //se realizara la accion de list
                    header("Location: ../controler/Producto.php?Action=list&userT=".$_GET['userT']."&Tipo=".$_GET['Tipo']."&Nombre=".$_GET['Nombre']."&punt=".$_GET['punt']."&coins=".$_GET['coins']."&cat=".$_GET['cat']);
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
/*------------------------Como se da la insercion de archivos se requiere un metodo post-----------------------------------------*/
/* por otra parte el ob son los objetos donde tu quieras interactuar ya sea
 * un cliente un administrador una ciudad etc. cada objeto tiene una accion por
 * el cual aqui (significa en cas swicht) es donde se va realizar las acciones 
 * del departamento inser-lis-up- donde utilizamos un carapter de entrada...
 * A-> es la accion que se va a realizar con la entidad el cual sera nuestro
 * partametro de uso*/

if(isset($_POST['ob'])){
    $objet = $_POST['ob'];
    switch ($objet) {
        /*--------------------------      Administrador      -------------------------------*/
        case "Admi":
        if(isset($_POST['A'])){
            $actioOBJ = $_POST['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=inse
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)
                 * &tiptrabajo= (tipo de trabajador del adminitrador) esta funcionavilidad no presenta mucho uso momentaneamente*/
                case "inse":
                    header("Location: ../controler/Administrador.php?Action=inse&dni=".$_POST['dni']."&nom=".$_POST['nom']."&corre=".$_POST['corre']."&telef=".$_POST['telef']."&foto=".$_POST['foto']."&pass=".$_POST['pass']."&tiptrabajo=".$_POST['tiptrabajo']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=Upd
                 * &id= (id del administraodr)
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)
                 * &tiptrabajo= (tipo de trabajador del adminitrador) esta funcionavilidad no presenta mucho uso momentaneamente*/
                case 'Upd':
                    echo $_POST['foto'];
                    //header("Location: ../controler/Administrador.php?Action=Upd&id=".$_POST['id']."&dni=".$_POST['dni']."&nom=".$_POST['nom']."&corre=".$_POST['corre']."&telef=".$_POST['telef']."&foto=".$_POST['foto']."&pass=".$_POST['pass']."&tiptrabajo=".$_POST['tiptrabajo']);
                break;

                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
/*--------------------------       Producto      -------------------------------*/
        case "Prod":
        if(isset($_POST['A'])){
            $actioOBJ = $_POST['A'];
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
                    header("Location: ../controler/Producto.php?Action=inse&CodProd=".$_POST['CodProd']."&IdProve=".$_POST['IdProve']."&IdTipo=".$_POST['IdTipo']."&Nom=".$_POST['Nom']."&Descri=".$_POST['Descri']."&Cantid=".$_POST['Cantid']."&PreC=".$_POST['PreC']."&PreV=".$_POST['PreV']."&Photo=".$_POST['Photo']);
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
                    header("Location: ../controler/Producto.php?Action=Upd&IdProd=".$_POST['IdProd']."&CodProd=".$_POST['CodProd']."&IdProve=".$_POST['IdProve']."&IdTipo=".$_POST['IdTipo']."&Nom=".$_POST['Nom']."&Descri=".$_POST['Descri']."&Cantid=".$_POST['Cantid']."&PreC=".$_POST['PreC']."&PreV=".$_POST['PreV']."&Photo=".$_POST['Photo']);
                break;
                default:
                    echo 'no se entendio la accion que quiso realizar';
                break;
            }
        }
        break;
/*--------------------------      Cliente      -------------------------------*/
        case "clie":
        if(isset($_POST['A'])){
            $actioOBJ = $_POST['A'];
            switch ($actioOBJ) {
                /* la accion realizada es insercion se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=inse
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)*/
                case "inse":
                    header("Location: ../controler/Cliente.php?Action=inse&dni=".$_POST['dni']."&nom=".$_POST['nom']."&corre=".$_POST['corre']."&telef=".$_POST['telef']."&foto=".$_POST['foto']."&pass=".$_POST['pass']);
                break;
            
                /* la accion realizada es listado se traduce de la siguiente manera
                 * http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=Upd
                 * &id= (id del administraodr)
                 * &dni=(dni del administrador)
                 * &nom=(nombre del administrador)
                 * &corre=(correo activo del administrador)
                 * &telef=(telefono activo del administrador)
                 * &foto= (telefono activo del administrador)
                 * &pass= (contraseña de acceso al sistema del administrador)*/
                case 'Upd':
                    header("Location: ../controler/Cliente.php?Action=Upd&id=".$_POST['id']."&dni=".$_POST['dni']."&nom=".$_POST['nom']."&corre=".$_POST['corre']."&telef=".$_POST['telef']."&foto=".$_POST['foto']."&pass=".$_POST['pass']);
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
