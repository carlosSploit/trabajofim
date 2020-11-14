

/*cada ves que se hace una insercion e actualizacion del estado de un pedido se evia un correo*/

$(document).ready(principal);

function principal() {
    var holas = null;
    var objPro = new ApiProducto();
    objPro.List("A",1,"");
    //$('#contentProductAct').html(ItenProduc("6","Lechita pa la cara",5,100)); // añadir un producto a un contenedor
    var objCat = new ApiCategori();
    objCat.ListAdmin();

    $('#BuscadorProd').click(function (event) {
        var objPro = new ApiProducto();
        objPro.List("A",3,$('#textBus').val());
    });

    $("#NewProdut").click(function (event) { //cuando se precione la opccion de sign, cambia el contenedor
        $('#contModal').html(ManteniProduc);
        $('.modal-dialog').removeAttr("style");
        $('.modal-content').removeAttr("style");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('#TituloModal').html("Insertar Producto");
        $('#TituloModal').attr("style", "color: white;");
        $('.close').attr("style", "color: white;");
        holas = new  ApiCategori(-1,"#CatProduc","");
        holas.ListAdmin();
        holas = new  ApiProvee(-1,"#PovProduc","","");
        holas.ListProvee();
        $('#Inserproduct').click(function(event){
            var objPro = new ApiProducto("",$('#CodProduc').val(),$('#PovProduc').val(),$('#CatProduc').val(),$('#NomProduc').val(),$('#DesProduc').val(),$('#CanProduc').val(),$('#PrCProduc').val(),$('#PrVProduc').val(),"4564564646");
            objPro.add();

            //Liempieza de casillas
            $('#CodProduc').val("");
            $('#NomProduc').val("");
            $('#DesProduc').val("");
            $('#CanProduc').val("");
            $('#PrCProduc').val("");
            $('#PrVProduc').val("");

            /*Refresca las categorias y los proveedores*/
            holas = new  ApiCategori(-1,"#CatProduc","");
            holas.ListAdmin();
            holas = new  ApiProvee(-1,"#PovProduc","","");
            holas.ListProvee();
        });
        $('#ModalContainer').modal('show');
    });

    $("#Pro").click(function (event) { //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(ManteniProvee);
        $('.modal-dialog').removeAttr("style");
        $('.modal-content').removeAttr("style");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('#TituloModal').html("Mantenimiento Proveedor");
        $('#TituloModal').attr("style", "color: white;");
        $('.close').attr("style", "color: white;");
        holas = new  ApiProvee("","","","");
        holas.ListProvee();
        $('#AddProvee').click(function (event) {
            holas = new  ApiProvee("",$('#ProveeNombre').val(),$('#ProveeCorreoElectonico').val(),$('#ProveeCelular').val());
            holas.addProvee();
            holas.ListProvee();
            $('#ProveeNombre').val("");
            $('#ProveeCorreoElectonico').val("");
            $('#ProveeCelular').val("")
        });
        $('#ModalContainer').modal('show');
    });

    $("#CadP").click(function (event) { //cuando se precione la opccion de meseng, cambia el contenedor
        
        $('#contModal').html(ManteniCatPro);
        $('.modal-dialog').removeAttr("style");
        $('.modal-content').removeAttr("style");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('#TituloModal').html("Mantenimiento Categoria");
        $('#TituloModal').attr("style", "color: white;");
        $('.close').attr("style", "color: white;");
        holas = new  ApiCategori("","","");
        holas.ListAdmin();
        $('#AgregCat').click(function (event) {
            holas = new  ApiCategori("",$('#inputGroupSelect01').val(),$('#cateText').val());
            holas.addAdmin();
            holas.ListAdmin();
            $('#inputGroupSelect01').val("");
            $('#cateText').val("Icono");
           
        });
        $('#ModalContainer').modal('show');
    });

    $("#Ciu").click(function (event) { //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(MnateniGeografi);
        $('#TituloModal').html("Mantenimiento Geolocalisacion");
        $('#TituloModal').attr("style", "color: white;");
        $('.modal-dialog').removeAttr("style");
        $('.modal-content').removeAttr("style");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('.close').attr("style", "color: white;");
        /*---------------------------------------*/
        /*contenedor de los Departamentos disponibles e mantenimiento*/
        holas = new  ApiDepart("",""); // opjeto que interactua de cabeza
        holas.List("");
        holas.List(""); //listado de precaucion, causado por bugg
        $('#AgregarDepart').click(function (event) {
            holas = new  ApiDepart("",$('#TextDepart').val());
            holas.add();
            holas.List("");
            holas.List("");

            /*produce una actualizacion en la ciudad*/
            var objc = new  ApiCiudad("",-1,"");
            objc.List("");
            objc.List("");//listado de precaucion, causado por bugg
            $('#TextDepart').val("");
        });
        /*---------------------------------------*/
        /*contenedor de los ciudades disponibles e mantenimiento*/
        var objc = new  ApiCiudad("",-1,"");
        objc.List("");
        objc.List("");//listado de precaucion, causado por bugg
        /*inicialisa las ciudades dependiendo del distrito*/
        //console.log($('#LisDepartDist').val());
        var objc = new  ApiCiudad("",$('#LisDepartDist').val(),"");
        objc.List("");
        objc.List("");//listado de precaucion, causado por bugg

        /*Se le activa un evento para poder incertar datos*/
        $('#LisDepartDist').change(function(){ 
            console.log($('#LisDepartDist').val());
            var objc = new  ApiCiudad("",$('#LisDepartDist').val(),"");
            objc.List("");
            objc.List("");//listado de precaucion, causado por bugg
        }); 
        $('#AgregarCiuda').click(function (event) {
            objc = new  ApiCiudad("",$('#LisDpartament').val(),$('#textCiud').val());
            objc.add();
            objc.List("");
            objc.List("");

            /*produce una actualizacion en la ciudad*/
            var objc = new  ApiCiudad("",-1,"");
            objc.List("");
            objc.List("");//listado de precaucion, causado por bugg
            $('#textCiud').val("");
        });
        /*---------------------------------------*/
        /*contenedor de los distritos disponibles e mantenimiento*/
        var objd = new  ApiDistrito("",-1,"");
        objd.List();
        objd.List();//listado de precaucion, causado por bugg
        $('#AgregarDist').click(function (event) {
            objd = new  ApiDistrito("",$('#LisCiudad').val(),$('#textDist').val());
            objd.add();
            objd.idCiudad = -1;
            objd.List();
            objd.List();
            $('#textDist').val("");
            /*se hace un refresh a la cincronizacion de los departamentos con la ciudades*/
            var objc = new  ApiCiudad("",$('#LisDepartDist').val(),"");
            objc.List("");
            objc.List("");//listado de precaucion, causado por bugg
        });
        /*---------------------------------------*/
        $('#ModalContainer').modal('show');
    });

    $("#Pedid").click(function (event) { //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(PedidosCont);
        $('.modal-dialog').attr("style", "position: fixed;margin: auto;width: 500px;height: 100%;right: 0px;");
        $('.modal-content').attr("style", "height: 100%;");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('#TituloModal').html("Lista de Pedidos");
        $('#TituloModal').attr("style", "color: white;");
        $('.close').attr("style", "color: white;");
        
        var obj = new ApiPedidoA("","","");
        obj.ListarPedid("A",1,0,0,0);

        $('#ModalContainer').modal('show');
    });
    $("#Admi").click(function (event) { //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(MantAdm);
        $('.modal-dialog').removeAttr("style");
        $('.modal-content').removeAttr("style");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('#TituloModal').html("Registrar Administrador");
        $('#TituloModal').attr("style", "color: white;");
        $('.close').attr("style", "color: white;");
        // lista los aministradores de forma principal
        var objAdmi = new ApiAdministrador();            
        objAdmi.id = -1;
        objAdmi.ListAdmin();
        objAdmi.ListAdmin();
        $('#InserAdmid').click(function (event) {
            var objAdmi = new ApiAdministrador("",$('#dniTextAdmi').val(),$('#nomTextAdmi').val(),$('#correTextAdmi').val(),$('#telefTextAdmi').val(),"asjdgsajdgsajdghsahdjas",$('#passTextAdmi').val(),$('#tiptrabajoSeletAdmi').val());            
            objAdmi.addAdmin();
            objAdmi.id = -1;
            objAdmi.ListAdmin();

            var objAdmi = new ApiAdministrador(-1,"","","","","","",""); //la segunda imprecion por el bug
            objAdmi.ListAdmin();
            $('#dniTextAdmi').val("");
            $('#nomTextAdmi').val("");
            $('#correTextAdmi').val("");
            $('#telefTextAdmi').val("");
            $('#passTextAdmi').val("")
            $('#tiptrabajoSeletAdmi').val("Trabajador")
        });
        $('#ModalContainer').modal('show');
    });
}
/*Vista del Categoria*/
function ItenCatego(id,nombre) {
    return '<a class="dropdown-item" onclick="buscCatPro('+id+')">'+nombre+'</a>';
}

function buscCatPro(id) {
    var objPro=new ApiProducto();
    objPro.List('A',4,id);
}

/*Vista del producto*/
function ItenProduc(id,nombre,Punt,prec) {
    return '<!--          card de productos generico            -->' +
        '    <div id="456789" class="card mx-1 my-1"' +
        '        style="width: 170px; height: 270px; border-radius: 10px; overflow: hidden;">' +
        '        <img class="caratCard mx-auto img-fluid" src="./resorces/fondo_homeprinci.jpg"' +
        '            alt="Card image cap">' +
        '        <div class="mx-2" style="width: 100%; height: auto;">' +
        '            <h6 class="textCard">'+nombre+'</h6>' +
        '        </div>' +
        '        <div class="container" style="width: 100%;">' +
        '            <div class="row extencion">' +
        '                <div class="col-sm-6 ContextCarTex">' +
        '                    <h6 class="textPunt">'+Punt+' <i class="fas fa-star icon"></i></h6>' +
        '                </div>' +
        '                <div class="col-sm-6 ContextCarTex">' +
        '                    <p class="textCoint">S/.'+prec+'</p>' +
        '                </div>' +
        '           </div>' +
        '        </div>' +
        '        <div class="container" style="width: 100%; margin-top: 10px;">' +
        '            <div class="row">' +
        '                <div class="col">' +
        '                    <button type="button" onclick="ActIntenPro('+id+')" class="btn btn-block rounded-pill"' +
        '                        style="height: 40px; text-align: center;background: #546e7a; color: aliceblue;">Actualizar</button>' +
        '                </div>' +
        '            </div>' +
        '            <div class="row my-1">' +
        '                <div class="col">' +
        '                    <button type="button"  onclick="DeletIntenPro('+id+')" class="btn btn-outline-danger btn-block rounded-pill">Eliminar</button>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <!------------------------------------------------------>';
}

function ActIntenPro(id){
    var objPro = new ApiProducto();
    objPro.List("A",2,id);
    $('.modal-dialog').removeAttr("style");
    $('.modal-content').removeAttr("style");
    $('#Encabezaod').attr("style", "background:  #546e7a;");
    $('#TituloModal').html("Actualizar Producto");
    $('#TituloModal').attr("style", "color: white;");
    $('.close').attr("style", "color: white;");
    $('#ModalContainer').modal('show');
}

function DeletIntenPro(id){
    var objPro = new ApiProducto(id,"","","","","","","","","");
    objPro.delect();
    objPro.List("A",1,"");
    objPro.List("A",1,"");
}

/*Mantenimiento de proveedores*/
function ManteniProvee() {
    return '<div class="row">' +
        '    <div class="col">' +
        '        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">' +
        '            <li class="nav-item" role="presentation">' +
        '                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"' +
        '                    role="tab" aria-controls="pills-home" aria-selected="true">Insertar' +
        '                    Proveedor</a>' +
        '            </li>' +
        '            <li class="nav-item" role="presentation">' +
        '                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"' +
        '                    role="tab" aria-controls="pills-profile" aria-selected="false">Actualizar' +
        '                    Proveedor</a>' +
        '            </li>' +
        '        </ul>' +
        '        <div class="tab-content" id="pills-tabContent">' +
        '           <div class="tab-pane fade show active" id="pills-home" role="tabpanel"' +
        '                aria-labelledby="pills-home-tab">' +
        '                <div class="row">' +
        '                    <div class="col">' +
        '                        <div class="row">' +
        '                            <div class="col">' +
        '                                <div class="input-group mb-3">' +
        '                                    <div class="input-group-prepend">' +
        '                                        <span class="input-group-text" id="basic-addon1">👷</span>' +
        '                                    </div>' +
        '                                    <input type="text" id="ProveeNombre" class="form-control"' +
        '                                        placeholder="Nombre del prodcuto" aria-label="Direccion"' +
        '                                        aria-describedby="basic-addon1">' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="row">' +
        '                            <div class="col">' +
        '                                <div class="input-group mb-3">' +
        '                                    <div class="input-group-prepend">' +
        '                                        <span class="input-group-text" id="basic-addon1">📧</span>' +
        '                                    </div>' +
        '                                    <input type="text" id="ProveeCorreoElectonico" class="form-control"' +
        '                                        placeholder="Correo electronico" aria-label="Direccion"' +
        '                                        aria-describedby="basic-addon1">' +
        '                                </div>' +
        '                           </div>' +
        '                        </div>' +
        '                        <div class="row">' +
        '                            <div class="col">' +
        '                                <div class="input-group mb-3">' +
        '                                    <div class="input-group-prepend">' +
        '                                        <span class="input-group-text" id="basic-addon1">📱</span>' +
        '                                    </div>' +
        '                                    <input type="text" id="ProveeCelular" class="form-control" placeholder="Celular"' +
        '                                        aria-label="Direccion" aria-describedby="basic-addon1">' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="row">' +
        '                            <div class="col">' +
        '                                <button type="button" id="AddProvee"' +
        '                                    class="btn btn-success btn-block">Agregar' +
        '                                    Proveedor</button>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="tab-pane fade" id="pills-profile" role="tabpanel"' +
        '                aria-labelledby="pills-profile-tab">' +
                        '<div' +
                            'style="background:  #eceff1; width: 100%; height: 400px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
                                '<div class="accordion" id="coneterProveeder" style="width: 100%; height: 400px;overflow:scroll;overflow-x: hidden;">' +
                                '</div>' +
                        '<!------------------------------------>' +
                        '</div>'+
        '            </div>' +
        '        </div>' +
        '    </div>';
}

/*representa al car de proveedor que va a estar insertado en el contenedor*/
function DatProveedor(id,nom,cor,cel) {
    return '<div class="row padding-0">' +
        '                        <div class="col">' +
        '                            <div class="card">' +
        '                                <div class="card-header" id="headingOne">' +
        '                                    <h2 class="row mb-0">' +
        '                                        <div class="col-8" data-toggle="collapse"' +
        '                                            data-target="#collapseExample'+id+'" aria-expanded="false"' +
        '                                            aria-controls="collapseExample'+id+'">' +
        '                                            <div >' +
        '                                                <h5>'+nom+'</h5>' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="col-4">' +
        '                                             <button type="button" onclick="deleProvee('+id+')" id="NewProdut"' +
        '                                                 class="btn btn-outline-danger btn-block rounded-pill">Eliminar</button>' +
        '                                        </div>' +
        '                                    </h2>' +
        '                                </div>' +
        '                                <div class="collapse" id="collapseExample'+id+'">' +
        '                                    <div class="card card-body">' +
        '                                        <div class="row">' +
        '                                            <div class="col">' +
        '                                                <div class="row">' +
        '                                                    <div class="col">' +
        '                                                        <div class="input-group mb-3">' +
        '                                                            <div class="input-group-prepend">' +
        '                                                                <span class="input-group-text"' +
        '                                                                    id="basic-addon1">👷</span>' +
        '                                                            </div>' +
        '                                                            <input type="text" id="ProveeNombre'+id+'" value="'+nom+'" class="form-control"' +
        '                                                                placeholder="Nombre del prodcuto"' +
        '                                                                aria-label="Direccion"' +
        '                                                                aria-describedby="basic-addon1">' +
        '                                                       </div>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                               <div class="row">' +
        '                                                   <div class="col">' +
        '                                                       <div class="input-group mb-3">' +
        '                                                           <div class="input-group-prepend">' +
        '                                                               <span class="input-group-text"' +
        '                                                                    id="basic-addon1">📧</span>' +
        '                                                           </div>' +
        '                                                           <input type="text" id="ProveeCorreoElectonico'+id+'" value="'+cor+'" class="form-control"' +
        '                                                               placeholder="Correo electronico"' +
        '                                                               aria-label="Direccion"' +
        '                                                               aria-describedby="basic-addon1">' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div class="col">' +
        '                                                       <div class="input-group mb-3">' +
        '                                                           <div class="input-group-prepend">' +
        '                                                               <span class="input-group-text"' +
        '                                                                    id="basic-addon1">📱</span>' +
        '                                                            </div>' +
        '                                                            <input type="text" id="ProveeCelular'+id+'" value="'+cel+'" class="form-control"' +
        '                                                                placeholder="Celular"' +
        '                                                                aria-label="Direccion"' +
        '                                                                aria-describedby="basic-addon1">' +
        '                                                        </div>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                                <div class="row">' +
        '                                                    <div class="col">' +
        '                                                        <button type="button" onclick="ActuProvee('+id+')" id="NewProdut"' +
        '                                                            class="btn btn-success btn-block">Actualizar' +
        '                                                            Proveedor</button>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                            </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                       </div>' +
        '                    </div>';
}

function ActuProvee(id){
    const catup2 = new ApiProvee(id,"","","");
    catup2.Update();
    catup2.ListProvee();
}

function deleProvee(id){
    const catup2 = new ApiProvee(id,"","","");
    catup2.delect();
    catup2.ListProvee();
}

/*Mantenimiento de productos*/
function ManteniProduc() {
    return '<!----codico del modal----->' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="row">' +
        ' <div class="col">' +
        '<div class="row">' +
        '<div class="col-7">' +
        '<div class="row">' +
        '<div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🔢</span>' +
        ' </div>' +
        ' <input type="text" id="CodProduc" class="form-control" placeholder="Codigo del prodcuto"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        '</div>' +
        '</div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🎮</span>' +
        ' </div>' +
        ' <input type="text" id="NomProduc" class="form-control" placeholder="Nombre del prodcuto"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">📋</span>' +
        ' </div>' +
        ' <select class="custom-select" id="CatProduc">' +
        ' <option selected>Categoria</option>' +
        DatCategoriMP() +
        DatCategoriMP() +
        DatCategoriMP() +
        DatCategoriMP() +
        ' </select>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '<div class="col-5">' +
        '<div class="text-center">' +
        '<img src="./resorces/fondolo.jpg" style="width: 14vh; height: 14vh;' +
        '-webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '-moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        'box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"' +
        ' class="rounded" alt="...">' +
        '</div>' +
        '<div class="row my-2">' +
        '<div class="col">' +
        ' <button type="button" style="text-align: center; width: 100px; height: 30px;" id="NewProdut"' +
        '  class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">👷</span>' +
        ' </div>' +
        ' <select class="custom-select" id="PovProduc">' +
        ' <option selected>Proveedor</option>' +
        DatProveMP() +
        DatProveMP() +
        DatProveMP() +
        DatProveMP() +
        DatProveMP() +
        ' </select>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">💲</span>' +
        ' </div>' +
        ' <input type="number" id="PrCProduc" class="form-control" placeholder="Precio de Compra"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">💰</span>' +
        ' </div>' +
        ' <input type="number" id="PrVProduc" class="form-control" placeholder="Precio de Venta"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🔢</span>' +
        ' </div>' +
        ' <input type="number" id="CanProduc" class="form-control" placeholder="Cantidad en Stock"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="form-group">' +
        ' <label for="exampleFormControlTextarea1">Descripccion de producto</label>' +
        ' <textarea id="DesProduc" class="form-control" id="exampleFormControlTextarea1"' +
        ' rows="3"></textarea>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <button type="button" id="Inserproduct" class="btn btn-success btn-block">Agregar' +
        ' Producto</button>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '<!------------------------->';
}

/*Mantenimiento de productos*/
function ManteniProducAct(id) {
    return '<!----codico del modal----->' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="row">' +
        ' <div class="col">' +
        '<div class="row">' +
        '<div class="col-7">' +
        '<div class="row">' +
        '<div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🔢</span>' +
        ' </div>' +
        ' <input type="text" id="CodProduc'+id+'" class="form-control" placeholder="Codigo del prodcuto"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        '</div>' +
        '</div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🎮</span>' +
        ' </div>' +
        ' <input type="text" id="NomProduc'+id+'" class="form-control" placeholder="Nombre del prodcuto"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">📋</span>' +
        ' </div>' +
        ' <select class="custom-select" id="CatProduc'+id+'">' +
        ' <option selected>Categoria</option>' +
        DatCategoriMP() +
        DatCategoriMP() +
        DatCategoriMP() +
        DatCategoriMP() +
        ' </select>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '<div class="col-5">' +
        '<div class="text-center">' +
        '<img src="./resorces/fondolo.jpg" style="width: 14vh; height: 14vh;' +
        '-webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '-moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        'box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"' +
        ' class="rounded" alt="...">' +
        '</div>' +
        '<div class="row my-2">' +
        '<div class="col">' +
        ' <button type="button" style="text-align: center; width: 100px; height: 30px;" id="NewProdut"' +
        '  class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">👷</span>' +
        ' </div>' +
        ' <select class="custom-select" id="PovProduc'+id+'">' +
        ' <option selected>Proveedor</option>' +
        DatProveMP() +
        DatProveMP() +
        DatProveMP() +
        DatProveMP() +
        DatProveMP() +
        ' </select>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">💲</span>' +
        ' </div>' +
        ' <input type="number" id="PrCProduc'+id+'" class="form-control" placeholder="Precio de Compra"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">💰</span>' +
        ' </div>' +
        ' <input type="number" id="PrVProduc'+id+'" class="form-control" placeholder="Precio de Venta"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🔢</span>' +
        ' </div>' +
        ' <input type="number" id="CanProduc'+id+'" class="form-control" placeholder="Cantidad en Stock"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="form-group">' +
        ' <label for="exampleFormControlTextarea1">Descripccion de producto</label>' +
        ' <textarea id="DesProduc'+id+'" class="form-control" id="exampleFormControlTextarea1"' +
        ' rows="3"></textarea>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <button type="button" onclick="ActItenProduct('+id+')" class="btn btn-success btn-block">Agregar' +
        ' Producto</button>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '<!------------------------->';
}

function ActItenProduct(id){
    var objPro = new ApiProducto(id,"","","","","","","","","");
    objPro.Update();
    objPro.List("A",1,"");
    objPro.List("A",1,"");
}

/*Cart de categorias que va a ser insertado en el contenedor*/
function DatCategoriMP(id,Nombre) {
    return '<option value="'+id+'">'+Nombre+'</option>';
}
/*Cart de proveedor que va a ser insertado en el contenedor*/
function DatProveMP(id,nombre) {
    return '<option value="'+id+'">'+nombre+'</option>';
}

/*Mantenimiento de la categoria de producto*/
function ManteniCatPro() {
    return '<div class="row">' +
        '    <div class="col">' +
        '        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">' +
        '       <li class="nav-item" role="presentation">' +
        '           <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"' +
        '               role="tab" aria-controls="pills-home" aria-selected="true">Insertar' +
        '               Categoria</a>' +
        '       </li>' +
        '       <li class="nav-item" role="presentation">' +
        '           <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"' +
        '               role="tab" aria-controls="pills-profile" aria-selected="false">Actualizar' +
        '               Categoria</a>' +
        '       </li>' +
        '   </ul>' +
        '   <div class="tab-content" id="pills-tabContent">' +
        '       <div class="tab-pane fade show active" id="pills-home" role="tabpanel"' +
        '           aria-labelledby="pills-home-tab">' +
        '           <div class="row">' +
        '               <div class="col">' +
        '                   <div class="row">' +
        '                       <div class="col-4">' +
        '                           <div class="input-group mb-3">' +
        '                               <div class="input-group-prepend">' +
        '                                   <span class="input-group-text" id="basic-addon1">📋</span>' +
        '                               </div>' +
        '                               <select class="custom-select" id="inputGroupSelect01">' +
        '                                   <option selected>Icono</option>' +
                                            DatIcont() +
        '                               </select>' +
        '                           </div>' +
        '                       </div>' +
        '                       <div class="col-8">' +
        '                           <div class="input-group mb-3">' +
        '                               <div class="input-group-prepend">' +
        '                                   <span class="input-group-text" id="basic-addon1">📺</span>' +
        '                               </div>' +
        '                               <input type="text" class="form-control" id="cateText"'+
        '                                   placeholder="Nombre de la Categoria" aria-label="Direccion"' +
        '                                   aria-describedby="basic-addon1">' +
        '                           </div>' +
        '                       </div>' +
        '                   </div>' +
        '                   <div class="row">' +
        '                       <div class="col">' +
        '                           <button type="button" id="AgregCat"' +
        '                               class="btn btn-success btn-block">Agregar' +
        '                               Catehoria</button>' +
        '                       </div>' +
        '                   </div>' +
        '               </div>' +
        '           </div>' +
        '       </div>' +
        '       <div class="tab-pane fade" id="pills-profile" role="tabpanel"' +
        '           aria-labelledby="pills-profile-tab">' +
                    '<div' +
                    'style="background:  #eceff1; width: 100%; height: 400px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
                        '<div class="accordion" id="ContentCategori" style="width: 100%; height: 400px;overflow:scroll;overflow-x: hidden;">' +
                        '</div>' +
                   '<!------------------------------------>' +
                   '</div>'+
        '       </div>' +
        '   </div>' +
        '   </div>' +
        '</div>';
}
/*Cart de datos de los iconos que se van a mostrar el en contenedor*/
function DatIcont() {
    return '<option value="1">👕</option>'+
    '<option value="2">👟</option>'+
    '<option value="3">👞</option>'+
    '<option value="4">👖</option>'+
    '<option value="5">💻</option>'+
    '<option value="6">📱</option>'+
    '<option value="7">🔫</option>'+
    '<option value="8">👙</option>'+
    '<option value="9">🎮</option>'+
    '<option value="10">🎸</option>'+
    '<option value="11">♟</option>';
}
/*Car de proveedores que se van a mostrar*/
function DatCaegor(id,icon,Nombre) {
    return '<div class="row padding-0">' +
        '                   <div class="col">' +
        '                       <div class="card">' +
        '                           <div class="card-header" id="headingOne">' +
        '                               <h2 class="row mb-0">' +
        '                                   <div class="col-8" data-toggle="collapse"' +
        '                                       data-target="#collapseExample'+id+'" aria-expanded="false"' +
        '                                       aria-controls="collapseExample'+id+'">' +
        '                                       <div class="col">' +
        '                                           <h5>'+icon+Nombre+'</h5>' +
        '                                       </div>' +
        '                                   </div>' +
        '                                   <div class="col-4">' +
        '                                       <a id="NewProdut" onclick="catproDelet('+id+')"' +
        '                                           class="btn btn-outline-danger btn-block rounded-pill">Eliminar</a>' +
        '                                   </div>' +
        '                               </h2>' +
        '                           </div>' +
        '                           <div class="collapse" id="collapseExample'+id+'">' +
        '                               <div class="card card-body">' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <div class="row">' +
        '                                               <div class="col">' +
        '                                                   <div class="input-group mb-3">' +
        '                                                       <div class="input-group-prepend">' +
        '                                                           <span class="input-group-text"' +
        '                                                               id="basic-addon1">📋</span>' +
        '                                                       </div>' +
        '                                                       <select class="custom-select"' +
        '                                                           id="catSelet'+id+'">' +
        '                                                           <option selected>'+icon+'</option>' +
                                                                    DatIcont() +
        '                                                       </select>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                               <div class="col">' +
        '                                                   <div class="input-group mb-3">' +
        '                                                       <div class="input-group-prepend">' +
        '                                                           <span class="input-group-text"' +
        '                                                               id="basic-addon1">📺</span>' +
        '                                                       </div>' +
        '                                                       <input type="text" class="form-control" id="catTex'+id+'"' +
        '                                                           placeholder="Nombre de la Categoria" value = "'+Nombre+'"'+
        '                                                           aria-label="Direccion"' +
        '                                                           aria-describedby="basic-addon1">' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                           <div class="row">' +
        '                                               <div class="col">' +
        '                                                   <button type="button" onclick="catproUp('+id+')"' +
        '                                                      class="btn btn-success btn-block">Agregar' +
        '                                                       Catehoria</button>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                       </div>' +
        '                   </div>' +
        '               </div>';
}

function catproUp(id){
    console.log(id);
    const catup = new ApiCategori(id,"","");
    catup.Update();
    catup.ListAdmin();
}

function catproDelet(id){
    console.log(id);
    const catup = new ApiCategori(id,"","");
    catup.delect();
    catup.ListAdmin();
}

function MnateniGeografi() {
    return '<div class="row">' +
        '     <div class="col">' +
        '        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">' +
        '         <li class="nav-item" role="presentation">' +
        '               <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"' +
        '                   role="tab" aria-controls="pills-home" aria-selected="true">Insertar geologia</a>' +
        '           </li>' +
        '           <li class="nav-item" role="presentation">' +
        '               <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"' +
        '                   role="tab" aria-controls="pills-profile" aria-selected="false">Actualizar' +
        '                   geologia</a>' +
        '           </li>' +
        '       </ul>' +
        '       <div class="tab-content" id="pills-tabContent">' +
        '           <div class="tab-pane fade show active" id="pills-home" role="tabpanel"' +
        '               aria-labelledby="pills-home-tab">' +
        '               <div class="row">' +
        '                   <div class="col">' +
        '                       <div class="accordion" id="accordionExample">' +
        '                           <div class="card">' +
        '                                <div class="card-header" id="headingOne">' +
        '                                 <h2 class="mb-0">' +
        '                                        <button class="btn btn-link btn-block text-left"' +
        '                                            type="button" data-toggle="collapse"' +
        '                                           data-target="#collapseOne" aria-expanded="true"' +
        '                                           aria-controls="collapseOne">' +
        '                                           🌎 Departamento' +
        '                                       </button>' +
        '                                   </h2>' +
        '                               </div>' +
        ' ' +
        '                               <div id="collapseOne" class="collapse show"' +
        '                                   aria-labelledby="headingOne" data-parent="#accordionExample">' +
        '                                   <div class="card-body">' +
        '                                       <div class="row">' +
        '                                           <div class="col">' +
        '                                               <div class="row">' +
        '                                                   <div class="col">' +
        '                                                       <div class="input-group mb-3">' +
        '                                                           <div class="input-group-prepend">' +
        '                                                               <span class="input-group-text"' +
        '                                                                   id="basic-addon1">🌎</span>' +
        '                                                           </div>' +
        '                                                           <input type="text" id="TextDepart" class="form-control"' +
        '                                                               placeholder="Nombre del departamento"' +
        '                                                               aria-label="Direccion"' +
        '                                                               aria-describedby="basic-addon1">' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                               <div class="row">' +
        '                                                   <div class="col">' +
        '                                                       <button type="button" id="AgregarDepart"' +
        '                                                           class="btn btn-success btn-block">Agregar' +
        '                                                           Departamento</button>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                           <div class="card">' +
        '                               <div class="card-header" id="headingTwo">' +
        '                                   <h2 class="mb-0">' +
        '                                       <button class="btn btn-link btn-block text-left collapsed"' +
        '                                           type="button" data-toggle="collapse"' +
        '                                           data-target="#collapseTwo" aria-expanded="false"' +
        '                                           aria-controls="collapseTwo">' +
        '                                           🗾 Ciudad' +
        '                                       </button>' +
        '                                   </h2>' +
        '                               </div>' +
        '                               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"' +
        '                                   data-parent="#accordionExample">' +
        '                                   <div class="card-body">' +
        '                                       <div class="card-body">' +
        '                                           <div class="row">' +
        '                                               <div class="col">' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div class="input-group-prepend">' +
        '                                                                   <span class="input-group-text"' +
        '                                                                       id="basic-addon1">🌎</span>' +
        '                                                               </div>' +
        '                                                               <select class="custom-select"' +
        '                                                                   id="LisDpartament">' +
        '                                                                   <option selected>Deàrtamento' +
        '                                                                   </option>' +
        '                                                               </select>' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div class="input-group-prepend">' +
        '                                                                   <span class="input-group-text"' +
        '                                                                       id="basic-addon1">🗾</span>' +
        '                                                               </div>' +
        '                                                               <input type="text"' +
        '                                                                   class="form-control" id="textCiud"' +
        '                                                                   placeholder="Nombre de la ciudad"' +
        '                                                                   aria-label="Direccion"' +
        '                                                                   aria-describedby="basic-addon1">' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <button type="button" id="AgregarCiuda"' +
        '                                                               class="btn btn-success btn-block">Agregar' +
        '                                                               Ciudad</button>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                           <div class="card">' +
        '                               <div class="card-header" id="headingThree">' +
        '                                   <h2 class="mb-0">' +
        '                                       <button class="btn btn-link btn-block text-left collapsed"' +
        '                                           type="button" data-toggle="collapse"' +
        '                                           data-target="#collapseThree" aria-expanded="false"' +
        '                                           aria-controls="collapseThree">' +
        '                                           🌃 Distrito' +
        '                                       </button>' +
        '                                   </h2>' +
        '                               </div>' +
        '                               <div id="collapseThree" class="collapse"' +
        '                                   aria-labelledby="headingThree" data-parent="#accordionExample">' +
        '                                   <div class="card-body">' +
        '                                       <div class="card-body">' +
        '                                           <div class="row">' +
        '                                               <div class="col">' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div class="input-group-prepend">' +
        '                                                                   <span class="input-group-text"' +
        '                                                                       id="basic-addon1">🌎</span>' +
        '                                                               </div>' +
        '                                                               <select class="custom-select"' +
        '                                                                   id="LisDepartDist">' +
        '                                                                   <option selected>Deàrtamento' +
        '                                                                   </option>' +
        '                                                               </select>' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div class="input-group-prepend">' +
        '                                                                   <span class="input-group-text"' +
        '                                                                       id="basic-addon1">🗾</span>' +
        '                                                               </div>' +
        '                                                               <select id="LisCiudad" class="custom-select" >' +
        '                                                                   <option selected>Ciudad' +
        '                                                                   </option>' +
        '                                                               </select>' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div class="input-group-prepend">' +
        '                                                                   <span class="input-group-text"' +
        '                                                                       id="basic-addon1">🌃</span>' +
        '                                                               </div>' +
        '                                                               <input id="textDist" type="text"' +
        '                                                                   class="form-control"' +
        '                                                                   placeholder="Nombre de la Distrito"' +
        '                                                                   aria-label="Direccion"' +
        '                                                                   aria-describedby="basic-addon1">' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <button type="button" id="AgregarDist"' +
        '                                                               class="btn btn-success btn-block">Agregar' +
        '                                                               Distrito</button>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                       </div>' +
        '                   </div>' +
        '               </div>' +
        '           </div>' +
        '           <div class="tab-pane fade" id="pills-profile" role="tabpanel"' +
        '               aria-labelledby="pills-profile-tab">' +
        '               <div class="row">' +
        '                   <div class="col">' +
        '                       <div class="accordion" id="accordionExample">' +
        '                           <div class="card">' +
        '                               <div class="card-header" id="headingOne">' +
        '                                   <h2 class="mb-0">' +
        '                                       <button class="btn btn-link btn-block text-left"' +
        '                                           type="button" data-toggle="collapse"' +
        '                                           data-target="#collapseOne" aria-expanded="true"' +
        '                                           aria-controls="collapseOne">' +
        '                                           🌎 Departamento' +
        '                                       </button>' +
        '                                   </h2>' +
        '                               </div>' +
        '                               <div id="collapseOne" class="collapse show"' +
        '                                   aria-labelledby="headingOne" data-parent="#accordionExample">' +
        '                                   <div class="card-body">' +
        '                                       <div' +
        '                                           style="background:  #eceff1; width: 100%; height: 200px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px;">' +
        '                                           <div class="accordion" id="contentDepart" style="width: 100%; height: 200px;overflow:scroll;overflow-x: hidden;">' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                           <div class="card">' +
        '                               <div class="card-header" id="headingTwo">' +
        '                                   <h2 class="mb-0">' +
        '                                       <button class="btn btn-link btn-block text-left collapsed"' +
        '                                           type="button" data-toggle="collapse"' +
        '                                           data-target="#collapseTwo" aria-expanded="false"' +
        '                                           aria-controls="collapseTwo">' +
        '                                           🗾 Ciudad' +
        '                                       </button>' +
        '                                  </h2>' +
        '                               </div>' +
        '                               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"' +
        '                                   data-parent="#accordionExample">' +
        '                                   <div class="card-body">' +
        '                                       <div' +
        '                                           style="background:  #eceff1; width: 100%; height: 200px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px;">' +
        '                                           <div class="accordion" id="contentCiud" style="width: 100%; height: 200px;overflow:scroll;overflow-x: hidden;">' +
        '                                           </div>' +
        '                                       </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <div class="card">' +
        '                                <div class="card-header" id="headingThree">' +
        '                                    <h2 class="mb-0">' +
        '                                        <button class="btn btn-link btn-block text-left collapsed"' +
        '                                            type="button" data-toggle="collapse"' +
        '                                            data-target="#collapseThree" aria-expanded="false"' +
        '                                            aria-controls="collapseThree">' +
        '                                            🌃 Distrito' +
        '                                        </button>' +
        '                                    </h2>' +
        '                                </div>' +
        '                                <div id="collapseThree" class="collapse"' +
        '                                    aria-labelledby="headingThree" data-parent="#accordionExample">' +
        '                                    <div class="card-body">' +
        '                                        <div class="card-body">' +
        '                                           <div' +
        '                                               style="background:  #eceff1; width: 100%; height: 200px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px;">' +
        '                                               <div class="accordion" id="contentDist" style="width: 100%; height: 200px;overflow:scroll;overflow-x: hidden;">' +
        '                                               </div>' +
        '                                           </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';
}

/*contenerdor de que se usara para mostrar los datos de los departamentos*/
function DatDepart(id,nombre) {
    return '<!-- car de un departamento--->' +
        '                                           <div class="accordion" id="accordionExample">' +
        '                                               <div class="card">' +
        '                                                   <div class="card-header row" id="headingOne">' +
        '                                                       <h2 class="col-8">' +
        '                                                           <button' +
        '                                                               class="btn btn-link btn-block text-left"' +
        '                                                               type="button" data-toggle="collapse"' +
        '                                                               data-target="#collapseOne'+id+'"' +
        '                                                               aria-expanded="true"' +
        '                                                               aria-controls="collapseOne'+id+'">' +
                                                                        '🌎 '+ nombre+
        '                                                           </button>' +
        '                                                       </h2>' +
        '                                                       <div class="col-4">' +
        '                                                            <button type="button" onclick="deleDepart('+id+')" id="NewProdut"' +
        '                                                             class="btn btn-outline-danger btn-block rounded-pill">Eliminar</button>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div id="collapseOne'+id+'" class="collapse show"' +
        '                                                       aria-labelledby="headingOne"' +
        '                                                       data-parent="#accordionExample">' +
        '                                                       <div class="card-body">' +
        '                                                           <div class="row">' +
        '                                                               <div class="col">' +
        '                                                                   <div class="row">' +
        '                                                                       <div class="col">' +
        '                                                                           <div' +
        '                                                                               class="input-group mb-3">' +
        '                                                                               <div' +
        '                                                                                   class="input-group-prepend">' +
        '                                                                                   <span' +
        '                                                                                       class="input-group-text"' +
        '                                                                                       id="basic-addon1">🌎</span>' +
        '                                                                               </div>' +
        '                                                                               <input type="text" id="TextDepart'+id+'" value="'+nombre+'"'+
        '                                                                                   class="form-control"' +
        '                                                                                   placeholder="Nombre del departamento"' +
        '                                                                                   aria-label="Direccion"' +
        '                                                                                   aria-describedby="basic-addon1">' +
        '                                                                           </div>' +
        '                                                                       </div>' +
        '                                                                   </div>' +
        '                                                                   <div class="row">' +
        '                                                                       <div class="col">' +
        '                                                                           <button type="button" onclick="ActuDepart('+id+')"' +
        '                                                                               id="NewProdut"' +
        '                                                                               class="btn btn-success btn-block">Agregar' +
        '                                                                               Departamento</button>' +
        '                                                                       </div>' +
        '                                                                   </div>' +
        '                                                               </div>' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                           <!------------------------------------>';
}

function ActuDepart(id){
    const catup2 = new ApiDepart(id,"");
    catup2.Update();
    catup2.List("");
    catup2.List("");
    /*produce una actualizacion en la ciudad*/
    var objc = new  ApiCiudad("",-1,"");
    objc.List();
    objc.List();//listado de precaucion, causado por bugg
}

function deleDepart(id){
    const catup2 = new ApiDepart(id,"","","");
    catup2.delect();

    catup2.List("");
    catup2.List("");
    /*produce una actualizacion en la ciudad*/
    var objc = new  ApiCiudad("",-1,"");
    objc.List();
    objc.List();//listado de precaucion, causado por bugg
}

/*contenedor de quera unsa para mostrar los datos de los ciudades*/
function DatCiu(id,nombre) {
    return '<!-- car de un departamento--->' +
        '                                           <div class="accordion" id="accordionExample">' +
        '                                               <div class="card">' +
        '                                                   <div class="card-header row" id="headingOne">' +
        '                                                       <h2 class="col-8">' +
        '                                                           <button' +
        '                                                               class="btn btn-link btn-block text-left"' +
        '                                                               type="button" data-toggle="collapse"' +
        '                                                               data-target="#collapci'+id+'"' +
        '                                                               aria-expanded="true"' +
        '                                                               aria-controls="collapci'+id+'">' +
                                                                        '🗾 '+nombre+
        '                                                           </button>' +
        '                                                       </h2>' +
        '                                                       <div class="col-4">' +
        '                                                            <button type="button" onclick="deleCiuda('+id+')" id="NewProdut"' +
        '                                                             class="btn btn-outline-danger btn-block rounded-pill">Eliminar</button>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div id="collapci'+id+'" class="collapse show"' +
        '                                                       aria-labelledby="headingOne"' +
        '                                                       data-parent="#accordionExample">' +
        '                                                       <div class="card-body">' +
        '                                                           <div class="row">' +
        '                                                               <div class="col">' +
        '                                                                   <div class="row">' +
        '                                                                       <div class="col">' +
        '                                                                           <div' +
        '                                                                                class="input-group mb-3">' +
        '                                                                               <div' +
        '                                                                                   class="input-group-prepend">' +
        '                                                                                   <span' +
        '                                                                                      class="input-group-text"' +
        '                                                                                       id="basic-addon1">🌎</span>' +
        '                                                                               </div>' +
        '                                                                               <select' +
        '                                                                                   class="custom-select"' +
        '                                                                                   id="LDepInt'+id+'">' +
        '                                                                                   <option' +
        '                                                                                       selected>' +
        '                                                                                       Deàrtamento' +
        '                                                                                   </option>' +
        '                                                                               </select>' +
        '                                                                           </div>' +
        '                                                                       </div>' +
        '                                                                       <div class="col">' +
        '                                                                           <div' +
        '                                                                               class="input-group mb-3">' +
        '                                                                               <div' +
        '                                                                                   class="input-group-prepend">' +
        '                                                                                   <span' +
        '                                                                                       class="input-group-text"' +
        '                                                                                       id="basic-addon1">🗾</span>' +
        '                                                                               </div>' +
        '                                                                               <input type="text" id="textCiud'+id+'" value="'+nombre+'"' +
        '                                                                                   class="form-control"' +
        '                                                                                    placeholder="Nombre de la ciudad"' +
        '                                                                                    aria-label="Direccion"' +
        '                                                                                    aria-describedby="basic-addon1">' +
        '                                                                            </div>' +
        '                                                                        </div>' +
        '                                                                    </div>' +
        '                                                                    <div class="row">' +
        '                                                                        <div class="col">' +
        '                                                                            <button type="button" onclick="ActuCiuda('+id+')"' +
        '                                                                                id="NewProdut"' +
        '                                                                                class="btn btn-success btn-block">Agregar' +
        '                                                                                Ciudad</button>' +
        '                                                                        </div>' +
        '                                                                    </div>' +
        '                                                                </div>' +
        '                                                            </div>' +
        '                                                        </div>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                            </div>' +
        '                                            <!------------------------------------>';
}

function ActuCiuda(id){
    const catup2 = new ApiCiudad(id,-1,"");
    catup2.Update();
    catup2.List();
    catup2.List();

    objd = new  ApiDistrito("","","");
    objd.idCiudad = -1;
    objd.List();
    objd.List();
}

function deleCiuda(id){
    const catup2 = new ApiCiudad(id,-1,"");
    catup2.delect();
    catup2.List();
    catup2.List();//listado de precaucion, causado por bugg

    objd = new  ApiDistrito("","","");
    objd.idCiudad = -1;
    objd.List();
    objd.List();
}

/*Contenerodot que sera usado para mostrar los datos de las ciudades existentes*/
function DatDistrito(id,nombre) {
    return '<!-- car de un departamento--->' +
        '                                                <div class="accordion" id="accordionExample">' +
        '                                                    <div class="card">' +
        '                                                        <div class="card-header row" id="headingOne">' +
        '                                                            <h2 class="col-8">' +
        '                                                                <button' +
        '                                                                    class="btn btn-link btn-block text-left"' +
        '                                                                    type="button"' +
        '                                                                    data-toggle="collapse"' +
        '                                                                    data-target="#collapseOne'+id+'"' +
        '                                                                    aria-expanded="true"' +
        '                                                                    aria-controls="collapseOne'+id+'">' +
                                                                             "🌃 "+nombre+
        '                                                                </button>' +
        '                                                            </h2>' +
        '                                                            <div class="col-4">' +
        '                                                                <button type="button" onclick="deleDistri('+id+')" id="NewProdut"' +
        '                                                                class="btn btn-outline-danger btn-block rounded-pill">Eliminar</button>' +
        '                                                             </div>' +
        '                                                        </div>' +
        '' +
        '                                                        <div id="collapseOne'+id+'" class="collapse show"' +
        '                                                            aria-labelledby="headingOne"' +
        '                                                            data-parent="#accordionExample">' +
        '                                                           <div class="card-body">' +
        '                                                                <div class="row">' +
        '                                                                    <div class="col">' +
        '                                                                        <div class="row">' +
        '                                                                            <div class="col">' +
        '                                                                                <div' +
        '                                                                                    class="input-group mb-3">' +
        '                                                                                    <div' +
        '                                                                                        class="input-group-prepend">' +
        '                                                                                        <span' +
        '                                                                                            class="input-group-text"' +
        '                                                                                            id="basic-addon1">🌎</span>' +
        '                                                                                    </div>' +
        '                                                                                    <select' +
        '                                                                                        class="custom-select"' +
        '                                                                                        id="LDepDist'+id+'" onchange="IncetDat('+id+')">' +
        '                                                                                        <option' +
        '                                                                                            selected>' +
        '                                                                                            Deàrtamento' +
        '                                                                                        </option>' +
        '                                                                                    </select>' +
        '                                                                                </div>' +
        '                                                                            </div>' +
        '                                                                            <div class="col">' +
        '                                                                               <div' +
        '                                                                                    class="input-group mb-3">' +
        '                                                                                    <div' +
        '                                                                                        class="input-group-prepend">' +
        '                                                                                        <span' +
        '                                                                                            class="input-group-text"' +
        '                                                                                            id="basic-addon1">🗾</span>' +
        '                                                                                    </div>' +
        '                                                                                    <select' +
        '                                                                                        class="custom-select"' +
        '                                                                                        id="LCiuDist'+id+'" >' +
        '                                                                                        <option' +
        '                                                                                            selected>' +
        '                                                                                            Ciudad' +
        '                                                                                        </option>' +
        '                                                                                    </select>' +
        '                                                                                </div>' +
        '                                                                            </div>' +
        '                                                                        </div>' +
        '                                                                        <div class="row">' +
        '                                                                            <div class="col">' +
        '                                                                                <div' +
        '                                                                                    class="input-group mb-3">' +
        '                                                                                    <div' +
        '                                                                                        class="input-group-prepend">' +
        '                                                                                        <span' +
        '                                                                                            class="input-group-text"' +
        '                                                                                            id="basic-addon1">🌃</span>' +
        '                                                                                    </div>' +
        '                                                                                    <input' +
        '                                                                                        type="text" id="textDist'+id+'" value="'+nombre+'"' +
        '                                                                                        class="form-control"' +
        '                                                                                        placeholder="Nombre de la Distrito"' +
        '                                                                                        aria-label="Direccion"' +
        '                                                                                        aria-describedby="basic-addon1">' +
        '                                                                                </div>' +
        '                                                                            </div>' +
        '                                                                       </div>' +
        '                                                                        <div class="row">' +
        '                                                                            <div class="col">' +
        '                                                                                <button' +
        '                                                                                    type="button" onclick="ActuDistri('+id+')"' +
        '                                                                                    id="NewProdut"' +
        '                                                                                   class="btn btn-success btn-block">Agregar' +
        '                                                                                    Distrito</button>' +
        '                                                                            </div>' +
        '                                                                        </div>' +
        '                                                                    </div>' +
        '                                                                </div>' +
        '                                                            </div>' +
        '                                                        </div>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                                <!------------------------------------>';
}
/*car para de departamento para listado*/
function DatLisDepart(id,nombre) {
    return '<option value="'+id+'">'+nombre+'</option>';
}

/*car para de ciudad para listado*/
function DatLisCiry(id,nombre) {
    return '<option value="'+id+'">'+nombre+'</option>';
}

/* opccion que sirve para poder listar las ciudades dependindo de la celencion del departamento en cada itent*/
function IncetDat(id){
    var auxc = new ApiCiudad("","","");
    var id_conte_lis = "#LCiuDist"+id;
    var id_conte_depart = "#LDepDist"+id;
    $(id_conte_lis).html(" "); // limpia la casilla para que se pueda ver 
    var id_depart = $(id_conte_depart).val();
    var dat = {
        llave: id_conte_lis,
        idCiu: 0,
        iddist: id_depart
    };
    auxc.idDepart = id_depart;
    auxc.List(dat);
}

function ActuDistri(id){
    const catup2 = new ApiDistrito(id,"","");
    catup2.Update();
    catup2.List("");
    catup2.List("");

    /*contenedor de los distritos disponibles e mantenimiento*/
    var objd = new  ApiDistrito("",-1,"");
    objd.List();
    objd.List();//listado de precaucion, causado por bugg
}

function deleDistri(id){
    const catup2 = new ApiDistrito(id,"","");
    catup2.delect();
    catup2.List("");
    catup2.List("");

    /*contenedor de los distritos disponibles e mantenimiento*/
    var objd = new  ApiDistrito("",-1,"");
    objd.List();
    objd.List();//listado de precaucion, causado por bugg
}

function MantAdm() {
    return '<div class="row">' +
        '<div class="col">' +
        '   <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">' +
        '       <li class="nav-item" role="presentation">' +
        '           <a class="nav-link active" id="pills-home-tab" data-toggle="pill"' +
        '               href="#pills-home" role="tab" aria-controls="pills-home"' +
        '               aria-selected="true">Insertar Categoria</a>' +
        '       </li>' +
        '       <li class="nav-item" role="presentation">' +
        '           <a class="nav-link" id="pills-profile-tab" data-toggle="pill"' +
        '               href="#pills-profile" role="tab" aria-controls="pills-profile"' +
        '               aria-selected="false">Actualizar' +
        '               Categoria</a>' +
        '       </li>' +
        '   </ul>' +
        '   <div class="tab-content" id="pills-tabContent">' +
        '       <div class="tab-pane fade show active" id="pills-home" role="tabpanel"' +
        '           aria-labelledby="pills-home-tab">' +
        '           <!----codico del modal----->' +
        '           <div class="row">' +
        '               <div class="col">' +
        '                   <div class="row">' +
        '                       <div class="col">' +
        '                           <div class="row">' +
        '                               <div class="col-7">' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <div class="input-group mb-3">' +
        '                                               <div class="input-group-prepend">' +
        '                                                   <span class="input-group-text"' +
        '                                                       id="basic-addon1">🔢</span>' +
        '                                               </div>' +
        '                                               <input maxlength="9" id="dniTextAdmi" type="text" class="form-control"' +
        '                                                   placeholder="Dni Administrador"' +
        '                                                   aria-label="Direccion"' +
        '                                                   aria-describedby="basic-addon1">' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <div class="input-group mb-3">' +
        '                                               <div class="input-group-prepend">' +
        '                                                   <span class="input-group-text"' +
        '                                                       id="basic-addon1">📋</span>' +
        '                                               </div>' +
        '                                               <input id="nomTextAdmi" type="text" class="form-control"' +
        '                                                   placeholder="Nombre del Administrador"' +
        '                                                   aria-label="Direccion"' +
        '                                                   aria-describedby="basic-addon1">' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <div class="input-group mb-3">' +
        '                                               <div class="input-group-prepend">' +
        '                                                   <span class="input-group-text"' +
        '                                                       id="basic-addon1">📱</span>' +
        '                                               </div>' +
        '                                               <input id="telefTextAdmi" type="text" class="form-control"' +
        '                                                   placeholder="Telefono del Administrador"' +
        '                                                   aria-label="Direccion"' +
        '                                                   aria-describedby="basic-addon1">' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                               <div class="col-5">' +
        '                                   <div class="text-center">' +
        '                                       <img src="./resorces/fondolo.jpg"' +
        '                                           style="width: 14vh; height: 14vh;' +
        '                                               -webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '                                               -moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '                                               box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);" class="rounded"' +
        '                                           alt="...">' +
        '                                   </div>' +
        '                                   <div class="row my-2">' +
        '                                       <div class="col">' +
        '                                           <button type="button"' +
        '                                               style="text-align: center; width: 100px; height: 30px;"' +
        '                                               id="NewProdut"' +
        '                                               class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                       </div>' +
        '                   </div>' +
        '                   <div class="row">' +
        '                       <div class="col">' +
        '                           <div class="input-group mb-3">' +
        '                               <div class="input-group-prepend">' +
        '                                   <span class="input-group-text"' +
        '                                       id="basic-addon1">📧</span>' +
        '                               </div>' +
        '                               <input id="correTextAdmi" type="text" class="form-control"' +
        '                                  placeholder="Correo Electronico" aria-label="Direccion"' +
        '                                   aria-describedby="basic-addon1">' +
        '                           </div>' +
        '                       </div>' +
        '                   </div>' +
        '                   <div class="row">' +
        '                       <div class="col">' +
        '                           <div class="input-group mb-3">' +
        '                               <div class="input-group-prepend">' +
        '                                   <span class="input-group-text"' +
        '                                       id="basic-addon1">🔐</span>' +
        '                               </div>' +
        '                               <input id="passTextAdmi" type="text" class="form-control"' +
        '                                  placeholder="Contraseña" aria-label="Direccion"' +
        '                                   aria-describedby="basic-addon1">' +
        '                           </div>' +
        '                       </div>' +
        '                   </div>' +
        '                   <div class="row">' +
        '                       <div class="col">' +
        '                           <select class="custom-select" id="tiptrabajoSeletAdmi">' +
        '                                <option selected value="Trabajador">Trabajador</option>' +
        '                                <option selected value="Gerente">Gerente</option>' +
        '                            </select>' +
        '                       </div>' +
        '                   </div>' +
        '                   <div class="row my-3">' +
        '                       <div class="col">' +
        '                           <button type="button" id="InserAdmid"' +
        '                               class="btn btn-success btn-block">Ingresar' +
        '                               Datos</button>' +
        '                       </div>' +
        '                   </div>' +
        '               </div>' +
        '           </div>' +
        '           <!------------------------->' +
        '       </div>' +
        '       <div class="tab-pane fade" id="pills-profile" role="tabpanel"' +
        '           aria-labelledby="pills-profile-tab">' +
        '           <div' +
        '               style="background:  #eceff1; width: 100%; height: 500px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
        '               <div class="accordion" id="ContenerAdmin">' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '</div>' +
        '</div>';
}

function ItenAdmin(id,dni,nombre,telef,correo,photo,pass,tipAdmin) {
    return '<!-- car de un departamento--->' +
        ' <div class="accordion" id="accordionExample">' +
        '      <div class="card">' +
        '          <div class="card-header row" id="headingOne">' +
        '                    <h2 class="col-8">' +
        '                         <button' +
        '                           class="btn btn-link btn-block text-left"' +
        '                           type="button"' +
        '                           data-toggle="collapse"' +
        '                           data-target="#collapseOne'+id+'"' +
        '                           aria-expanded="true"' +
        '                           aria-controls="collapseOne'+id+'">' +
        '                           <div class="row">'+
        '                               <div class="col-5">'+dni +
        '                                 </div>' +
        '                               <div class="col-7">' +nombre+
        '                                 </div>' +
        '                           </div>'+
        '                          </button>' +
        '                      </h2>' +
        '                      <div class="col-4">' +
        '                          <button type="button" onclick="ElimiAdminIten('+id+')" id="NewProdut"' +
        '                          class="btn btn-outline-danger btn-block rounded-pill">Eliminar</button>' +
        '                      </div>' +
        '                    </div>' +
        '                      <div id="collapseOne'+id+'" class="collapse show"' +
        '                        aria-labelledby="headingOne"' +
        '                        data-parent="#accordionExample">' +
        '                         <div class="card-body">' +
        '                            <!----codico del modal----->' +
        '                           <div class="row">' +
        '                               <div class="col">' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <div class="row">' +
        '                                               <div class="col-7">' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div' +
        '                                                                   class="input-group-prepend">' +
        '                                                                   <span' +
        '                                                                       class="input-group-text"' +
        '                                                                       id="basic-addon1">🔢</span>' +
        '                                                               </div>' +
        '                                                               <input value="'+dni+'" id="dniTextAdmi'+id+'" type="text"' +
        '                                                                   class="form-control"' +
        '                                                                   placeholder="Dni Administrador"' +
        '                                                                   aria-label="Direccion"' +
        '                                                                   aria-describedby="basic-addon1">' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div' +
        '                                                                   class="input-group-prepend">' +
        '                                                                   <span' +
        '                                                                       class="input-group-text"' +
        '                                                                       id="basic-addon1">📋</span>' +
        '                                                               </div>' +
        '                                                               <input value="'+nombre+'" id="nomTextAdmi'+id+'" type="text"' +
        '                                                                   class="form-control"' +
        '                                                                   placeholder="Nombre del Administrador"' +
        '                                                                   aria-label="Direccion"' +
        '                                                                   aria-describedby="basic-addon1">' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                                   <div class="row">' +
        '                                                       <div class="col">' +
        '                                                           <div class="input-group mb-3">' +
        '                                                               <div' +
        '                                                                   class="input-group-prepend">' +
        '                                                                   <span' +
        '                                                                       class="input-group-text"' +
        '                                                                       id="basic-addon1">📱</span>' +
        '                                                               </div>' +
        '                                                               <input value="'+telef+'" id="telefTextAdmi'+id+'" type="text"' +
        '                                                                   class="form-control"' +
        '                                                                   placeholder="Telefono del Administrador"' +
        '                                                                   aria-label="Direccion"' +
        '                                                                   aria-describedby="basic-addon1">' +
        '                                                           </div>' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                               <div class="col-5">' +
        '                                                   <div class="text-center">' +
        '                                                       <img src="./resorces/fondolo.jpg"' +
        '                                                           style="width: 14vh; height: 14vh;' +
        '                                                               -webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '                                                               -moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '                                                               box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"' +
        '                                                           class="rounded" alt="...">' +
        '                                                   </div>' +
        '                                                   <div class="row my-2">' +
        '                                                       <div class="col">' +
        '                                                           <button type="button"' +
        '                                                               style="text-align: center; width: 100px; height: 30px;"' +
        '                                                               id="NewProdut"' +
        '                                                               class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' +
        '                                                       </div>' +
        '                                                   </div>' +
        '                                               </div>' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <div class="input-group mb-3">' +
        '                                               <div class="input-group-prepend">' +
        '                                                   <span class="input-group-text"' +
        '                                                       id="basic-addon1">📧</span>' +
        '                                               </div>' +
        '                                               <input value="'+correo+'" type="text" class="form-control" id="correTextAdmi'+id+'"' +
        '                                                   placeholder="Correo Electronico"' +
        '                                                   aria-label="Direccion"' +
        '                                                   aria-describedby="basic-addon1">' +
        '                                           </div>' +
        '                                       </div>' +
        '                                   </div>' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                            <div class="input-group mb-3">' +
        '                                               <div class="input-group-prepend">' +
        '                                                   <span class="input-group-text"' +
        '                                                       id="basic-addon1">🔐</span>' +
        '                                                   </div>' +
        '                                                   <input value="'+pass+'" type="text" class="form-control" id="passTextAdmi'+id+'"' +
        '                                                   placeholder="Contraseña" aria-label="Direccion"' +
        '                                                   aria-describedby="basic-addon1">' +
        '                                               </div>' +
        '                                        </div>' +
        '                                   </div>' +
        '                                   <div class="row">' +
        '                                       <div class="col">' +
        '                                           <select class="custom-select" id="tiptrabajoSeletAdmi'+id+'">' + ((tipAdmin == "Trabajador")?'<option value="Trabajador">Trabajador</option><option value="Gerente">Gerente</option>':'<option value="Trabajador">Trabajador</option><option selected value="Gerente">Gerente</option>')+
        '                                           </select>' +
        '                                       </div>' +
        '                                   </div>' +
        '                                   <div class="row my-4">' +
        '                                       <div class="col">' +
        '                                           <button type="button" onclick="ActuAminIten('+id+')"' +
        '                                               class="btn btn-success btn-block">Ingresar' +
        '                                               Datos</button>' +
        '                                       </div>' +
        '                                   </div>' +
        '                               </div>' +
        '                           </div>' +
        '                        </div>' +
        '                    </div>' +
        '               </div>' +
        '          </div>' +
        '     </div>' +
        '</div>' +
        '<!------------------------------------>';
}

function ActuAminIten(id) {
    var objAdmi = new ApiAdministrador(id,"","","","","","","");
    objAdmi.Update();
    objAdmi.id = -1;
    objAdmi.ListAdmin(); // la primera imprecion de refrech

    var objAdmi = new ApiAdministrador(-1,"","","","","","",""); //la segunda imprecion por el bug
    objAdmi.ListAdmin();
}

function ElimiAdminIten(id) {
    var objAdmi = new ApiAdministrador(id,"","","","","","","");
    objAdmi.delect();
    objAdmi.id = -1;
    objAdmi.ListAdmin(); // la primera imprecion de refrech

    var objAdmi = new ApiAdministrador(-1,"","","","","","",""); //la segunda imprecion por el bug
    objAdmi.ListAdmin();
}


function PedidosCont() {
    return '<div' +
        'style="background:  #eceff1; width: 100%; height: 600px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
        '<div class="accordion" id="ContenedrPedidosItens">' +
            CardPedido("1","asdsadsadsad","454","asdsad","dsads","sadsa","sadsdsadsa",1)+
        '</div>' +
        '<!------------------------------------>' +
        '</div>';
}

function CardPedido(id,nombre,montoT,depart,city,dis,direc,estd) {
    return '<!-- car del pedido a mostrar--->' +
        '<div id="contentPrinsipalIten'+id+'" class="card my-1">' +
        '<div class="card-header" id="headingOne">' +
        '<h2 class="mb-0">' +
        '<button class="btn btn-link btn-block text-left" type="button"' +
        'data-toggle="collapse" data-parent="#contentPrinsipalIten'+id+'" data-target="#collapseOne'+id+'" aria-expanded="true"' +
        'aria-controls="collapseOne'+id+'">' +
        '<div class="row">' +
        '<div class="col-3">' +
            id+
        '</div>' +
        '<div class="col-6">' +
            nombre +
        '</div>' +
        '<div class="col-3">' +
        '    S/.'+montoT+
        '</div>' +
        '</div>' +
        '</button>' +
        '</h2>' +
        '</div>' +
        '<div id="collapseOne'+id+'" class="collapse show" aria-labelledby="headingOne"' +
        'data-parent="#accordionExample">' +
        '<div class="card-body">' +
            CarritoCompra(id,montoT,depart,city,dis,direc,estd) +
        '</div>' +
        '</div>' +
        '</div>' +
        '<!----------------------------------------->';
}


/* codigo directamente extraido de store el cual 
da la informacion del pedido*/
function CarritoCompra(id,montoT,depart,city,dis,direc,estd) {
    return '<div class="container">' +
        '  <div class="row">' +
        '     <div class="col">' +
        '       <div class="row">' +
        '         <div class="col-7">' +
        '             <h5>Productos en Carrito</h5>' +
        '         </div>' +
        '         <div class="col-5">' +
        '           <div class="form-group" style="width: 100%;">' +
        '             <div class="input-group">' +
        '               <div class="input-group-prepend">' +
        '                 <span class="input-group-text" id="basic-addon1">S/.</span>' +
        '               </div>' +
        '               <input value="'+montoT+'" type="text" disabled class="form-control" placeholder="00.0" aria-label="Direccion" aria-describedby="basic-addon1">' +
        '             </div>' +
        '           </div>' +
        '         </div>' +
        '       </div>' +
        '       <div id="containerprodutIten'+id+'" style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ; grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
        '       </div>' +
        '     </div>' +
        '  </div>' +
        '  <div class="row">' +
        '     <div class="col">' +
        '       <div class="row my-1">' +
        '           <select disabled class="custom-select" id="inputGroupSelect01">' +
        '            <option selected>'+depart+'</option>' +
        '           </select>' +
        '       </div>' +
        '       <div class="row my-1">' +
        '           <select disabled class="custom-select" id="inputGroupSelect01">' +
        '             <option selected>'+city+'</option>' +
        '           </select>' +
        '       </div>' +
        '       <div class="row my-1">' +
        '           <select disabled class="custom-select" id="inputGroupSelect01">' +
        '             <option selected>'+dis+'</option>' +
        '           </select>' +
        '       </div>' +
        '       <div class="row my-1">' +
        '           <div class="form-group" style="width: 100%;">' +
        '             <div class="input-group">' +
        '               <div class="input-group-prepend">' +
        '                 <span class="input-group-text" id="basic-addon1">🌍</span>' +
        '               </div>' +
        '               <input value="'+direc+'" disabled type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" aria-describedby="basic-addon1">' +
        '             </div>' +
        '           </div>' +
        '       </div>' +
        '          <div class="row">' +
        '              <div class="col">' +
        '                  <div class="conteSetP '+id+'" onclick="Setprogressbar3('+id+')">' +
        '                      <ul id="stp-dsjdhj" value="0" class="Setprogressbar padre">' +
        '                          <li value="1" class="li-iten-sep hijo">Pedido Recivido</li>' +
        '                          <li value="2" class="li-iten-sep hijo">Enviado</li>' +
        '                          <li value="3" class="li-iten-sep hijo">Paquete entregado</li>' +
        '                      </ul>' +
        '                  </div>' +
        '              </div>' +
        '          </div>' +
        '       <div class="row my-1">' +
        '             <button onclick="ActualiEstate('+id+')" type="button" id="NewProdut" class="btn btn-success btn-block">Actualizar' +
        '             Estado</button>' +
        '       </div>' +
        '     </div>' +
        '     <div class="row my-1">' +
        '     </div>' +
        '  </div>' +
        '  <div Class="row">' +
        '       ' +
        '  </div>' +
        '</div>';
}

function ActualiEstate(id) {
    var obj = new ApiPedidoA(id,"","");
    obj.Update();
    alert("Actualizado el estado correctamente");
}

function ProducDepart() {
    return '<option value="1">Piura</option>';
}

function ProducCity() {
    return '<option value="1">Piura</option>';
}

function ProducDist() {
    return '<option value="1">Piura</option>';
}

function productCarri(photo,nombre,canti,monto) {
    return '<!--        Card de producto insertado         -->' +
        '         <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">' +
        '           <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> ' +
        '            <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
        '               <img style="border-radius: 50%;' +
        '               width: 40px;' +
        '               height: 40px;' +
        '               justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >' +
        '            </div> ' +
        '            <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
                        nombre +
        '            </div>' +
        '            <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
        '               '+canti+' Un' +
        '            </div>' +
        '            <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
        '               S/.'+monto+
        '            </div>' +
        '           </div>' +
        '       </div>';
}

function ConfigAdmini() {
    return '<!----codico del modal----->' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="row">' +
        ' <div class="col">' +
        '<div class="row">' +
        '<div class="col-7">' +
        '<div class="row">' +
        '<div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">🔢</span>' +
        ' </div>' +
        ' <input type="text" class="form-control" placeholder="Dni Administrador"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        '</div>' +
        '</div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">📋</span>' +
        ' </div>' +
        ' <input type="text" class="form-control" placeholder="Nombre del Administrador"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">📱</span>' +
        ' </div>' +
        ' <input type="text" class="form-control" placeholder="Telefono del Administrador"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '<div class="col-5">' +
        '<div class="text-center">' +
        '<img src="./resorces/fondolo.jpg" style="width: 14vh; height: 14vh;' +
        '-webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        '-moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);' +
        'box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"' +
        ' class="rounded" alt="...">' +
        '</div>' +
        '<div class="row my-2">' +
        '<div class="col">' +
        ' <button type="button" style="text-align: center; width: 100px; height: 30px;" id="NewProdut"' +
        '  class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <div class="input-group mb-3">' +
        ' <div class="input-group-prepend">' +
        ' <span class="input-group-text" id="basic-addon1">📧</span>' +
        ' </div>' +
        ' <input type="text" class="form-control" placeholder="Correo Electronico"' +
        ' aria-label="Direccion" aria-describedby="basic-addon1">' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="row">' +
        ' <div class="col">' +
        ' <button type="button" id="NewProdut" class="btn btn-success btn-block">Ingresar' +
        ' Datos</button>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '<!------------------------->';
}


function Setprogressbar3(id) {
    var idyabBUshijos = "div."+id;
    var hijos = $(idyabBUshijos).children();
    for (unHijo of hijos) {
        console.log(unHijo);
        unHijo.addEventListener("click", function (evt) {
            var padre = event.currentTarget.parentNode;
            var hijo = evt.target;
            padre.setAttribute("value", hijo.value);

            if (hijo.getAttribute("class") === "li-iten-sep hijo active") {

                var classtext = "li-iten-sep hijo active";

                for (unHijo2 of padre.querySelectorAll("ul.padre > li.hijo")) {
                    if (hijo == unHijo2) {
                        classtext = "li-iten-sep hijo";
                        unHijo2.setAttribute("class", classtext);
                    } else {
                        unHijo2.setAttribute("class", classtext);
                    }
                }
            } else {
                console.log(hijo);
                hijo.setAttribute("class", "li-iten-sep hijo active");
                for (unHijo3 of padre.querySelectorAll("ul.padre > li.hijo")) {
                    if (hijo == unHijo3) {
                        unHijo3.setAttribute("class", "li-iten-sep hijo active");
                        break;
                    } else {
                        unHijo3.setAttribute("class", "li-iten-sep hijo active");
                    }
                }
            }
            console.log("Se hizo click en", hijo);
            console.log("Texto del enlace:", hijo.innerText);
        });
    }
}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiAdministrador{
    
    constructor(id,dni, nombre,correo,telef,foto,pass,tiptrabajo){
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.corre = correo;
        this.telef = telef;
        this.foto = foto;
        this.pass = pass;
        this.tiptrabajo = tiptrabajo;
    }

    async addAdmin(){
        console.log(this.dni+" "+this.nombre);
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=inse"
        +"&dni="+ this.dni
        +"&nom="+ this.nombre
        +"&corre="+ this.corre
        +"&telef="+ this.telef
        +"&foto=" + this.foto
        +"&pass=" + this.pass
        +"&tiptrabajo="+ this.tiptrabajo)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }

    async ListAdmin(){
        if(this.id == -1){ //prestamos la variable id para poder realizar el listado
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list"
                +"&tip=1"
                +"&uss=sdfsdfds"
                +"&pas=dsfsdf")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                    html_codeIten = html_codeIten + ItenAdmin(element.idAdministracion,element.dni_user,element.nombre,element.telefono,element.correo,element.foto,element.pass,element.TipoAdministrador);
                });
                $('#ContenerAdmin').html(html_codeIten);
            }).catch(Error => console.log(Error));
        }
    }


    async delect(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }

    async Update(){
        var yabidA = this.id;
        var yabdni = '#dniTextAdmi'+this.id;
        var yabnom = '#nomTextAdmi'+this.id;
        var yabcor = '#correTextAdmi'+this.id;
        var yabtel = '#telefTextAdmi'+this.id;
        var yabpho = '#fotoImgAdmi'+this.id;
        var yabpas = '#passTextAdmi'+this.id;
        var yabTiA = '#tiptrabajoSeletAdmi'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=Upd"
        +"&id=" + yabidA
        +"&dni=" + $(yabdni).val()
        +"&nom=" + $(yabnom).val()
        +"&corre=" + $(yabcor).val()
        +"&telef=" + $(yabtel).val()
        +"&foto=" + "sahdjahdjkahdjkahdjkashdjksa"
        +"&pass=" + $(yabpas).val()
        +"&tiptrabajo=" + $(yabTiA).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        
        this.ListAdmin();
        this.ListAdmin();
    }
}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiCategori{
    
    constructor(id,icono, nombre){
        this.id = id;
        this.icono = icono;
        this.nombre = nombre;
    }

    async addAdmin(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=inse&nom="+this.icono+" "+this.nombre)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }

    async ListAdmin(){
        if(this.id != -1){
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=list")
            .then(response => response.json())
            .catch(Error => console.log("json ERROR"))
            .then(data => {
                var html_codeIten = "";
                var html_codeLis = "";
                data.forEach(element => {
                    html_codeIten = html_codeIten + DatCaegor(element.idTipo,this.ListIncont(element.nombreTipo.charAt(0)),element.nombreTipo.substring(1,element.nombreTipo.length));
                    html_codeLis = html_codeLis + ItenCatego(element.idTipo, this.ListIncont(element.nombreTipo.charAt(0)) + element.nombreTipo.substring(1,element.nombreTipo.length));
                });
                $('#ContentCategori').html(html_codeIten);
                $('#CatProductoCont').html(html_codeLis);
            }).catch(Error => console.log(Error));
        }else{ // en caso que se de un listado distinto 
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=list")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                var html_codeLis = "";
                if(this.nombre != ""){
                    html_codeLis = $(this.icono).html(); 
                    $(this.icono).html(" "); 
                }
                data.forEach(element => {
                    if(this.nombre != ""){
                        if(this.nombre!=element.idTipo){
                            html_codeLis = html_codeLis + DatCategoriMP(element.idTipo,element.nombreTipo);
                        }
                    }else{
                        html_codeLis = html_codeLis + DatCategoriMP(element.idTipo,element.nombreTipo) ;
                    }
                });
                $(this.icono).html(html_codeLis); //en este caso para evitar la funcionabilidad principal se reusa las variables
            }).catch(Error => console.log("ERROR"));
        }
    }

    ListIncont(cod) {

        if(cod == 1){return "👕";}
        if(cod == 2){return "👟";}
        if(cod == 3){return "👞";}
        if(cod == 4){return "👖";}
        if(cod == 5){return "💻";}
        if(cod == 6){return "📱";}
        if(cod == 7){return "🔫";}
        if(cod == 8){return "👙";}
        if(cod == 9){return "🎮";}
        if(cod == 10){return "🎸";}
        if(cod == 11){return "♟";}
    }

    async delect(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }

    async Update(){
        var yabicon = '#catSelet'+this.id;
        var yabtext = '#catTex'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=Upd&id="+this.id+"&nom="+$(yabicon).val()+" "+$(yabtext).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }
}
/* contenedor de fecht para el proveedor, interactuara con la api*/
class ApiProvee{
    
    constructor(id,nombre, correo,celular){
        this.id = id;
        this.ProveeNombre = nombre;
        this.ProveeCorreoElectonico = correo;
        this.ProveeCelular = celular;
    }

    async addProvee(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=inse&nom="+this.ProveeNombre+"&Ema="+this.ProveeCorreoElectonico+"&tel="+this.ProveeCelular)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListProvee();
        this.ListProvee();
    }

    async ListProvee(){
        if(this.id != -1){
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=list")
            .then(response => response.json())
            .catch(Error => console.log("json ERROR"))
            .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                    html_codeIten = html_codeIten + DatProveedor(element.idProveedor,element.nombre,element.Email,element.celular) ;
                });
                $('#coneterProveeder').html(html_codeIten);
            }).catch(Error => console.log("ERROR"));
        }else{
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=list")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                var html_codeLis = "";
                if(this.ProveeCorreoElectonico!=""){
                    html_codeLis = $(this.ProveeNombre).html();
                    $(this.ProveeNombre).html(" ");
                }
                data.forEach(element => {
                    console.log(element.idProveedor+" "+element.nombre);
                    if((this.ProveeCorreoElectonico!="")){//se reusa una de las variables para poder evitar ysar su funcionabilidad principal
                        if(this.ProveeCorreoElectonico!=element.idProveedor){//se reusa una de las variables para poder evitar ysar su funcionabilidad principal
                            html_codeLis = html_codeLis + DatProveMP(element.idProveedor,element.nombre);
                        }
                    } else {
                        html_codeLis = html_codeLis + DatProveMP(element.idProveedor,element.nombre) ;
                    }
                });
                $(this.ProveeNombre).html(html_codeLis); //se reusa una de las variables para poder evitar ysar su funcionabilidad principal
            }).catch(Error => console.log(Error));
        }
    }

    async delect(){
       fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListProvee();
        this.ListProvee();
    }

    async Update(){
        var yabnomb = '#ProveeNombre'+this.id;
        var yabcorr = '#ProveeCorreoElectonico'+this.id;
        var yabcel = '#ProveeCorreoElectonico'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prove&A=Upd&id="+this.id+"&nom="+$(yabnomb).val()+"&Ema="+$(yabcorr).val()+"&tel="+$(yabcel).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListProvee();
        this.ListProvee();
    }
}
/* contenedor de fecht para el Depart, interactuara con la api*/

class ApiDepart{
    
    constructor(id,nombre){
        this.id = id;
        this.Nombre_Dep = nombre;
    }

    async add(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=inse&nom="+this.Nombre_Dep)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }

    async List(dat_constant){//sirve para en caso que se quiera insertar un tipo de dato, se inyecte por la variable del contenedor
        //dat_constant = dat_constant.substring(1,dat_constant.length);
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=list",{ method: 'GET'})
        .then(response => response.json())
        .catch(Error => console.log(Error))
        .then(data => {
            var html_codeIten = "";
            var html_codeList = "";
            var html_codeListp = ""//sirve en caso que sea parabetrizado
            data.forEach(element => {
                console.log(element);
                html_codeIten = html_codeIten + DatDepart(element.IdDepartamento ,element.NombreDepart) ;
                html_codeList = html_codeList + DatLisDepart(element.IdDepartamento ,element.NombreDepart) ;
                //como el contenedor de las ciudades ya presenta el contenedor, solo quedaria mostrar
                //if((dat_constant.iddist != element.IdDepartamento)&&(html_codeListp.indexOf(element.NombreDepart)==-1)&&(dat_constant != "")){
                html_codeListp = html_codeListp + DatLisDepart(element.IdDepartamento ,element.NombreDepart) ;
                //}
            });
            $('#contentDepart').html(html_codeIten); //imprime a su contenedor
            $('#LisDpartament').html(html_codeList); //imprime al contenedor de la ciudad
            $('#LisDepartDist').html(html_codeList); //imprime al contenedor del distrito
            if(dat_constant != ""){ // teniendo en cuenta que lo insertado sea un nulo-para un listado de rutina
                $(dat_constant.llave).html(html_codeListp); //imprime al contenedor del distrito
                $(dat_constant.llave).val(dat_constant.iddist);
            }
        }).catch(Error => console.log(Error));
    }

    async delect(){
       fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }

    async Update(){
        var yabnomb = '#TextDepart'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=Upd&id="+this.id+"&nom="+$(yabnomb).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }
}

/* contenedor de fecht para el Ciudad, interactuara con la api*/

class ApiProducto{

    constructor(IdProd,CodProd,IdProve,IdTipo,Nom,Descri,Cantid,PreC,PreV,Photo){
        this.IdProd = IdProd;
        this.CodProd = CodProd;
        this.IdProve = IdProve;
        this.IdTipo = IdTipo;
        this.Nom = Nom;
        this.Descri = Descri;
        this.Cantid = Cantid;
        this.PreC = PreC;
        this.PreV = PreV;
        this.Photo = Photo;
    }

    async add(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=inse&CodProd="+this.CodProd+"&IdProve="+this.IdProve+"&IdTipo="+this.IdTipo+"&Nom="+this.Nom+"&Descri="+this.Descri+"&Cantid="+this.Cantid+"&PreC="+this.PreC+"&PreV="+this.PreV+"&Photo="+this.Photo)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }

    async List(user,tipo,nombre){ // se ingresa datos en caso que se quiera listar por distrito o por departamento
        var aux = new ApiDepart("","");
        switch (user) {
            case "A":
                switch (tipo) {
                    case 2: // se consulta la informacion, producto por producto
                        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT="+user+"&Tipo="+tipo+"&Nombre="+nombre+"&punt=a&coins=a&cat=a")
                        .then(response => response.json())
                        .catch(Error => console.log(Error))
                        .then(data => {
                            var html_codeIten = "";
                            data.forEach(element => {
                                $('#contModal').html(ManteniProducAct(nombre)); // inicialisa el codigo para editarlo por este encapsulado
                                var yavcod = "#CodProduc"+nombre;
                                var yavnom = "#NomProduc"+nombre;
                                var yavctp = "#CatProduc"+nombre;
                                var yavpro = "#PovProduc"+nombre;  
                                var yavprc = "#PrCProduc"+nombre;
                                var yavprv = "#PrVProduc"+nombre;
                                var yavsto = "#CanProduc"+nombre;
                                var yavdes = "#DesProduc"+nombre;
                                // insertando datos al contenedor
                                $(yavcod).val(element.CodProduc);
                                $(yavnom).val(element.Nombre);
                                //insertar datos a las categorirasss
                                var objCat = new ApiCategori(-1,yavctp,element.idTipo);
                                $(yavctp).html(DatCategoriMP(element.idTipo,element.nombreTipo)); //inicializa con el proveedor del producto
                                objCat.ListAdmin();
                                //insertar datos a los proveedores
                                var objPro = new ApiProvee(-1,yavpro,element.idProveedor,"");
                                $(yavpro).html(DatProveMP(element.idProveedor,element.ProveNombre)); //inicializa con el proveedor del producto
                                objPro.ListProvee();
                                //$(yavctp).html(html_codeIten); //categoria
                                //$(yavpro).html(html_codeIten); //proveedor
                                
                                $(yavprc).val(element.PrecioC);
                                $(yavprv).val(element.PrecioV);
                                $(yavsto).val(element.Cantidad);
                                $(yavdes).val(element.Descripcion);
                                //console.log(element.CodProduc+" "+element.Nombre+" "+element.PrecioC+" "+element.PrecioV+" "+element.Cantidad+" "+element.Descripcion);
                            });
                        });
                    break;

                    default: // con son varios los caso que se repiten con el mismo metodo se colocara el default
                        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT="+user+"&Tipo="+tipo+"&Nombre="+nombre+"&punt=a&coins=a&cat=a")
                        .then(response => response.json())
                        .catch(Error => console.log(Error))
                        .then(data => {
                            var html_codeIten = "";
                            data.forEach(element => {
                                html_codeIten = html_codeIten + ItenProduc(element.idproducto,element.Nombre,element.calificacion,element.PrecioV);
                                //console.log(element.idproducto+" "+element.Nombre+" "+element.calificacion+" "+element.PrecioV);
                            });
                            $('#contentProductAct').html(html_codeIten);
                        });
                        break;
                }
                break;
            case "c":
                
                break;
            default:
                break;
        }
    }

    async delect(){
       fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=delet&IdProd="+this.IdProd)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }

    async Update(){
        var yavcod = "#CodProduc"+this.IdProd;
        var yavnom = "#NomProduc"+this.IdProd;
        var yavctp = "#CatProduc"+this.IdProd;
        var yavpro = "#PovProduc"+this.IdProd;  
        var yavprc = "#PrCProduc"+this.IdProd;
        var yavprv = "#PrVProduc"+this.IdProd;
        var yavsto = "#CanProduc"+this.IdProd;
        var yavdes = "#DesProduc"+this.IdProd;

        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=Upd"
        +"&IdProd="+this.IdProd
        +"&CodProd="+$(yavcod).val()
        +"&IdProve="+$(yavpro).val()
        +"&IdTipo="+$(yavctp).val()
        +"&Nom="+$(yavnom).val()
        +"&Descri="+$(yavdes).val()
        +"&Cantid="+$(yavsto).val()
        +"&PreC="+$(yavprc).val()
        +"&PreV="+$(yavprv).val()
        +"&Photo="+"adjkasdhjsahdjsahdjshdkjashdks")
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }
}

class ApiCiudad{
    
    constructor(id,idDep,nombre){
        this.id = id;
        this.idDepart = idDep;
        this.Nombre_ciu = nombre;
    }

    async add(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=inse&idDep="+this.idDepart+"&nom="+this.Nombre_ciu)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }

    async List(dat_constant){ // se ingresa datos en caso que se quiera listar por distrito o por departamento
        var aux = new ApiDepart("","");
        if(this.idDepart == -1){
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=list&idDep="+this.idDepart)
            .then(response => response.json())
            .catch(Error => console.log("json ERROR"))
            .then(data => {
            var html_codeIten = "";
            data.forEach(element => {
                html_codeIten = html_codeIten + DatCiu(element.IdCiudad,element.NombreCiudad) ;
            });
            $('#contentCiud').html(html_codeIten);
            
            /*Ace un listado de los distritos dentro del contenedor designado de ciurdad*/
            data.forEach(element => {
                var id_conte_lis = "#LDepInt"+element.IdCiudad;
                $(id_conte_lis).html("");
                var dar = {
                        llave: id_conte_lis,
                        iddist: element.IdDepartamento
                };
                $(id_conte_lis).html(DatLisDepart(element.IdDepartamento ,element.NombreDepart));
                aux.List(dar);

            });
            /*.................................................................*/
            }).catch(Error => console.log(Error));
        }else{
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=list&idDep="+this.idDepart)
            .then(response => response.json())
            .catch(Error => console.log("json ERROR"))
            .then(data => {
            var html_codeIten = "";
            var html_codeList = $(dat_constant.llave).html(); //sirve en caso que sea parabetrizado
            data.forEach(element => {
                html_codeIten = html_codeIten + DatLisCiry(element.IdCiudad,element.NombreCiudad) ;
                //lista en caso que se ingresa el parametro y se hace el filtraje 
                console.log(html_codeList);
                //if((dat_constant.idCiu != element.IdCiudad)&&(((html_codeList == undefined)?1:html_codeList.indexOf(element.NombreCiudad))==-1)&&(dat_constant != "")){
                    html_codeList = html_codeList + DatLisCiry(element.IdCiudad ,element.NombreCiudad) ;
                //}
            });
            if(dat_constant != ""){ // teniendo en cuenta que lo insertado sea un nulo-para un listado de rutina
                $(dat_constant.llave).html(html_codeList); //imprime al contenedor del distrito
                $(dat_constant.llave).val(dat_constant.idCiu);
            }else{ $('#LisCiudad').html(html_codeIten);  }
            
            }).catch(Error => console.log(Error));

        }
    }

    async delect(){
       fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }

    async Update(){
        var yabiddep = '#textCiud'+this.id;
        var yabnomb = '#LDepInt'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=Upd&id="+this.id+"&idDep="+ $(yabiddep).val()+"&nom="+$(yabnomb).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List("");
        this.List("");
    }
}

/* contenedor de fecht para el Distrito, interactuara con la api*/

class ApiDistrito{
    
    constructor(id,idciu,nombre){
        this.id = id;
        this.idCiudad = idciu;
        this.Nombre_dis = nombre;
    }

    async add(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=inse&idCI="+this.idCiudad+"&nom="+this.Nombre_dis)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.List();
        this.List();
    }

    async List(){
        console.log("entraste");
        var aux = new ApiDepart("",""); // es un pre inicializador de datos del objeto departamento
        var auxc= new ApiCiudad("","",""); // es un pre inicializador de latos del objeto ciudad
        if(this.idCiudad == -1){
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=list&idCI="+this.idCiudad)
            .then(response => response.json())
            .catch(Error => console.log("json ERROR"))
            .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                    html_codeIten = html_codeIten + DatDistrito(element.idDistrito,element.nombreDistrito) ;
                });
                $('#contentDist').html(html_codeIten);
                /*teniendo las inseciones de los contenedores de itens, comensaremos a editar sus datos*/
                /*Ayudara a la insercion de datos por medio de las id pre ingresadas en el distrito*/
                data.forEach(element => {
                    var id_conte_lis = "#LDepDist"+element.idDistrito;
                    console.log(id_conte_lis);
                    $(id_conte_lis).html("");
                    var dar = {
                            llave: id_conte_lis,
                            iddist: element.IdDepartamento
                    };
                    $(id_conte_lis).html(DatLisDepart(element.IdDepartamento ,element.NombreDepart));
                    aux.List(dar);
                });
                /*teniendo las inseciones de los contenedores de itens, comensaremos a editar sus datos*/
                /*Ayudara a la insercion de datos por medio de las id pre ingresadas en la ciudad*/
                data.forEach(element => {
                    var id_conte_lis = "#LCiuDist"+element.idDistrito;
                    $(id_conte_lis).html("");
                    var dar = {
                            llave: id_conte_lis,
                            idCiu: element.IdCiudad,
                            iddist: element.IdDepartamento
                    };
                    $(id_conte_lis).html(DatLisCiry(element.IdCiudad ,element.NombreCiudad));
                    auxc.idDepart = element.IdDepartamento;
                    auxc.List(dar);
                });

            }).catch(Error => console.log(Error));
        }
    }

    async delect(){
       fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.idCiudad = -1;
        this.List();
        this.List();
    }

    async Update(){
        var yabidciu = '#LCiuDist'+this.id;
        var yabnomb = '#textDist'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=Upd&id="+this.id+"&idCI="+$(yabidciu).val()+"&nom="+$(yabnomb).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.idCiudad = -1;
        this.List();
        this.List();
    }
}


class ApiPedidoA{

    constructor(idClient,idDist,Direccio){
      this.idClient = idClient;
      this.idDist = idDist;
      this.Direccio = Direccio;
    }

    async ListarPedid(tip,fil,id,idcli,filgeneral){ 
      fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=list"
            +"&tip="+tip
            +"&fil="+fil
            +"&id="
            +"&iclien=0"
            +"&filGene=0")
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
  
          var html_codeIten = "";
          data.forEach(element => {
              console.log(element);    
              html_codeIten = html_codeIten + CardPedido(element.idpedido,element.NombreCiudad+"/"+element.nombreDistrito+"  "+element.FechaVenta,element.montoT,element.NombreDepart,element.NombreCiudad,element.nombreDistrito,element.direccion,element.estado);
          });
          $("#ContenedrPedidosItens").html(html_codeIten);
  
          /*insertar los productos*/
          data.forEach(element => {
            //console.log(element);
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=list"
            +"&tip="+tip
            +"&fil=0"
            +"&id="+element.idpedido
            +"&iclien=0"
            +"&filGene=0")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                var html_codeItenLis = "";
                var codYabe = "#containerprodutIten"+element.idpedido;
                data.forEach(Iten => {
                  //console.log(element);    
                  html_codeItenLis = html_codeItenLis + productCarri(Iten.photo,Iten.Nombre,Iten.canti,Iten.PrecioV);
                });
              $(codYabe).html(html_codeItenLis);
            }).catch(Error => console.log(Error));    
        });
      }).catch(Error => console.log(Error));
    }

    async Update(){
        var yabidciu = 'div.'+this.idClient;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=Upd&id="+this.idClient+"&est="+$(yabidciu).attr("value"))
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
    }
  
  }