
$(document).ready(principal);

function principal(){

    $('#contentProductAct').html(ItenProduc); // añadir un producto a un contenedor
    $('#CatProductoCont').html(ItenCatego); // añadir una categoria a un contenedor

    $("#NewProdut").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        $('#contModal').html(ManteniProduc);
        $('#TituloModal').html("Insertar Producto")
        $('#ModalContainer').modal('show');
    });

    $("#454546").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(ManteniProduc);
        $('#TituloModal').html("Actualizar Producto")
        $('#ModalContainer').modal('show');
    });

    $("#Pro").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(ManteniProvee);
        $('#TituloModal').html("Mantenimiento Proveedor")
        $('#ModalContainer').modal('show');
    });

    $("#CadP").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(ManteniCatPro);
        $('#TituloModal').html("Mantenimiento Categoria")
        $('#ModalContainer').modal('show');
    });

    $("#Ciu").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(MnateniGeografi);
        $('#TituloModal').html("Mantenimiento Geolocalisacion")
        $('#ModalContainer').modal('show');
    });

    $("#Pedid").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(PedidosCont);
        $('#TituloModal').html("Lista de Pedidos")
        $('#ModalContainer').modal('show');
    });

    $("#Admi").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(ConfigAdmini);
        $('#TituloModal').html("Registrar Administrador")
        $('#ModalContainer').modal('show');
    });
}
/*Vista del Categoria*/
function ItenCatego(params) {
    return '<a class="dropdown-item">👕 Ropa</a>';
}

/*Vista del producto*/
function ItenProduc() {
    return '<!--          card de productos generico            -->'+
'    <div id="456789" class="card mx-1 my-1"'+
'        style="width: 170px; height: 270px; border-radius: 10px; overflow: hidden;">'+
'        <img class="caratCard mx-auto img-fluid" src="./resorces/fondo_homeprinci.jpg"'+
'            alt="Card image cap">'+
'        <div class="mx-2" style="width: 100%; height: auto;">'+
'            <h6 class="textCard">Prenda de verano</h6>'+
'        </div>'+
'        <div class="container" style="width: 100%;">'+
'            <div class="row extencion">'+
'                <div class="col-sm-6 ContextCarTex">'+
'                    <h6 class="textPunt">4,5 <i class="fas fa-star icon"></i></h6>'+
'                </div>'+
'                <div class="col-sm-6 ContextCarTex">'+
'                    <p class="textCoint">S/.4000</p>'+
'                </div>'+
'           </div>'+
'        </div>'+
'        <div class="container" style="width: 100%; margin-top: 10px;">'+
'            <div class="row">'+
'                <div class="col">'+
'                    <button type="button" id="454546" class="btn btn-primary btn-block"'+
'                        style="height: 40px; text-align: center;">Actualizar</button>'+
'                </div>'+
'            </div>'+
'            <div class="row my-1">'+
'                <div class="col">'+
'                    <button type="button" class="btn btn-danger btn-block">Eliminar</button>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'    <!------------------------------------------------------>';
}



/*Mantenimiento de proveedores*/
function ManteniProvee(){
    return '<div class="row">'+
'    <div class="col">'+
'        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">'+
'            <li class="nav-item" role="presentation">'+
'                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"'+
'                    role="tab" aria-controls="pills-home" aria-selected="true">Insertar'+
'                    Proveedor</a>'+
'            </li>'+
'            <li class="nav-item" role="presentation">'+
'                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"'+
'                    role="tab" aria-controls="pills-profile" aria-selected="false">Actualizar'+
'                    Proveedor</a>'+
'            </li>'+
'        </ul>'+
'        <div class="tab-content" id="pills-tabContent">'+
'           <div class="tab-pane fade show active" id="pills-home" role="tabpanel"'+
'                aria-labelledby="pills-home-tab">'+
'                <div class="row">'+
'                    <div class="col">'+
'                        <div class="row">'+
'                            <div class="col">'+
'                                <div class="input-group mb-3">'+
'                                    <div class="input-group-prepend">'+
'                                        <span class="input-group-text" id="basic-addon1">👷</span>'+
'                                    </div>'+
'                                    <input type="text" class="form-control"'+
'                                        placeholder="Nombre del prodcuto" aria-label="Direccion"'+
'                                        aria-describedby="basic-addon1">'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="row">'+
'                            <div class="col">'+
'                                <div class="input-group mb-3">'+
'                                    <div class="input-group-prepend">'+
'                                        <span class="input-group-text" id="basic-addon1">📧</span>'+
'                                    </div>'+
'                                    <input type="text" class="form-control"'+
'                                        placeholder="Correo electronico" aria-label="Direccion"'+
'                                        aria-describedby="basic-addon1">'+
'                                </div>'+
'                           </div>'+
'                        </div>'+
'                        <div class="row">'+
'                            <div class="col">'+
'                                <div class="input-group mb-3">'+
'                                    <div class="input-group-prepend">'+
'                                        <span class="input-group-text" id="basic-addon1">📱</span>'+
'                                    </div>'+
'                                    <input type="text" class="form-control" placeholder="Celular"'+
'                                        aria-label="Direccion" aria-describedby="basic-addon1">'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="row">'+
'                            <div class="col">'+
'                                <button type="button" id="NewProdut"'+
'                                    class="btn btn-success btn-block">Agregar'+
'                                    Proveedor</button>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="tab-pane fade" id="pills-profile" role="tabpanel"'+
'                aria-labelledby="pills-profile-tab">'+
'                <div class="accordion" id="accordionExample"'+
'                    style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
                    DatProveedor()+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>';
}

/*representa al car de proveedor que va a estar insertado en el contenedor*/
function DatProveedor(){
    return '<div class="row padding-0">'+
    '                        <div class="col">'+
    '                            <div class="card">'+
    '                                <div class="card-header" id="headingOne">'+
    '                                    <h2 class="row mb-0">'+
    '                                        <div class="col-8" data-toggle="collapse"'+
    '                                            data-target="#collapseExample6" aria-expanded="false"'+
    '                                            aria-controls="collapseExample6">'+
    '                                            <div >'+
    '                                                <h5>Juan carmona ernandes</h5>'+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="col-4">'+
    '                                             <button type="button" id="NewProdut"'+
    '                                                 class="btn btn-danger btn-block">Eliminar</button>'+
    '                                        </div>'+
    '                                    </h2>'+
    '                                </div>'+
    '                                <div class="collapse" id="collapseExample6">'+
    '                                    <div class="card card-body">'+
    '                                        <div class="row">'+
    '                                            <div class="col">'+
    '                                                <div class="row">'+
    '                                                    <div class="col">'+
    '                                                        <div class="input-group mb-3">'+
    '                                                            <div class="input-group-prepend">'+
    '                                                                <span class="input-group-text"'+
    '                                                                    id="basic-addon1">👷</span>'+
    '                                                            </div>'+
    '                                                            <input type="text" class="form-control"'+
    '                                                                placeholder="Nombre del prodcuto"'+
    '                                                                aria-label="Direccion"'+
    '                                                                aria-describedby="basic-addon1">'+
    '                                                       </div>'+
    '                                                    </div>'+
    '                                                </div>'+
    '                                               <div class="row">'+
    '                                                   <div class="col">'+
    '                                                       <div class="input-group mb-3">'+
    '                                                           <div class="input-group-prepend">'+
    '                                                               <span class="input-group-text"'+
    '                                                                    id="basic-addon1">📧</span>'+
    '                                                           </div>'+
    '                                                           <input type="text" class="form-control"'+
    '                                                               placeholder="Correo electronico"'+
    '                                                               aria-label="Direccion"'+
    '                                                               aria-describedby="basic-addon1">'+
    '                                                       </div>'+
    '                                                   </div>'+
    '                                                   <div class="col">'+
    '                                                       <div class="input-group mb-3">'+
    '                                                           <div class="input-group-prepend">'+
    '                                                               <span class="input-group-text"'+
    '                                                                    id="basic-addon1">📱</span>'+
    '                                                            </div>'+
    '                                                            <input type="text" class="form-control"'+
    '                                                                placeholder="Celular"'+
    '                                                                aria-label="Direccion"'+
    '                                                                aria-describedby="basic-addon1">'+
    '                                                        </div>'+
    '                                                    </div>'+
    '                                                </div>'+
    '                                                <div class="row">'+
    '                                                    <div class="col">'+
    '                                                        <button type="button" id="NewProdut"'+
    '                                                            class="btn btn-success btn-block">Actualizar'+
    '                                                            Proveedor</button>'+
    '                                                    </div>'+
    '                                                </div>'+
    '                                            </div>'+
    '                                        </div>'+
    '                                    </div>'+
    '                                </div>'+
    '                            </div>'+
    '                       </div>'+
    '                    </div>';
}

/*Mantenimiento de productos*/
function ManteniProduc(){
    return '<!----codico del modal----->'+
    ' <div class="row">'+
    ' <div class="col">'+
        ' <div class="row">'+
            ' <div class="col">'+
                '<div class="row">'+
                    '<div class="col-7">'+
                        '<div class="row">'+
                            '<div class="col">'+
                                ' <div class="input-group mb-3">'+
                                    ' <div class="input-group-prepend">'+
                                        ' <span class="input-group-text" id="basic-addon1">🔢</span>'+
                                        ' </div>'+
                                    ' <input type="text" class="form-control" placeholder="Codigo del prodcuto"'+
                                    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                '</div>'+
                            '</div>'+
                        ' <div class="row">'+
                            ' <div class="col">'+
                                ' <div class="input-group mb-3">'+
                                    ' <div class="input-group-prepend">'+
                                        ' <span class="input-group-text" id="basic-addon1">🎮</span>'+
                                        ' </div>'+
                                    ' <input type="text" class="form-control" placeholder="Nombre del prodcuto"'+
                                    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                ' </div>'+
                            ' </div>'+
                        ' <div class="row">'+
                            ' <div class="col">'+
                                ' <div class="input-group mb-3">'+
                                    ' <div class="input-group-prepend">'+
                                        ' <span class="input-group-text" id="basic-addon1">📋</span>'+
                                        ' </div>'+
                                    ' <select class="custom-select" id="inputGroupSelect01">'+
                                        ' <option selected>Categoria</option>'+
                                        DatCategoriMP()+
                                        DatCategoriMP()+
                                        DatCategoriMP()+
                                        DatCategoriMP()+
                                        ' </select>'+
                                    ' </div>'+
                                ' </div>'+
                            ' </div>'+
                        '</div>'+
                    '<div class="col-5">'+
                        '<div class="text-center">'+
                            '<img src="./resorces/fondolo.jpg" style="width: 14vh; height: 14vh;'+
                            '-webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);'+
                            '-moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);'+
                            'box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"'+
                            ' class="rounded" alt="...">'+
                            '</div>'+
                        '<div class="row my-2">'+
                            '<div class="col">'+
                                ' <button type="button" style="text-align: center; width: 100px; height: 30px;" id="NewProdut"'+
                                  '  class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' + 
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <div class="input-group mb-3">'+
                    ' <div class="input-group-prepend">'+
                        ' <span class="input-group-text" id="basic-addon1">👷</span>'+
                        ' </div>'+
                    ' <select class="custom-select" id="inputGroupSelect01">'+
                        ' <option selected>Proveedor</option>'+
                        DatProveMP()+
                        DatProveMP()+
                        DatProveMP()+
                        DatProveMP()+
                        DatProveMP()+
                        ' </select>'+
                    ' </div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <div class="input-group mb-3">'+
                    ' <div class="input-group-prepend">'+
                        ' <span class="input-group-text" id="basic-addon1">💲</span>'+
                        ' </div>'+
                    ' <input type="number" class="form-control" placeholder="Precio de Compra"'+
    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                    ' </div>'+
                ' </div>'+
            ' <div class="col">'+
                ' <div class="input-group mb-3">'+
                    ' <div class="input-group-prepend">'+
                        ' <span class="input-group-text" id="basic-addon1">💰</span>'+
                        ' </div>'+
                    ' <input type="number" class="form-control" placeholder="Precio de Venta"'+
    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                    ' </div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <div class="input-group mb-3">'+
                    ' <div class="input-group-prepend">'+
                        ' <span class="input-group-text" id="basic-addon1">🔢</span>'+
                        ' </div>'+
                    ' <input type="number" class="form-control" placeholder="Cantidad en Stock"'+
    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                    ' </div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <div class="form-group">'+
                    ' <label for="exampleFormControlTextarea1">Descripccion de producto</label>'+
                    ' <textarea class="form-control" id="exampleFormControlTextarea1"'+
    ' rows="3"></textarea>'+
                    ' </div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <button type="button" id="NewProdut" class="btn btn-success btn-block">Agregar'+
                    ' Producto</button>'+
                ' </div>'+
            ' </div>'+
        ' </div>'+
    ' </div>'+
'<!------------------------->';
} 

/*Cart de categorias que va a ser insertado en el contenedor*/
function DatCategoriMP(){
    return '<option value="1">👕 Ropa</option>';
}
/*Cart de proveedor que va a ser insertado en el contenedor*/
function DatProveMP(){
    return '<option value="1">Jose Maria</option>';
}

/*Mantenimiento de la categoria de producto*/
function ManteniCatPro(){
    return '<div class="row">'+
    '    <div class="col">'+
    '        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">'+
    '       <li class="nav-item" role="presentation">'+
    '           <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"'+
    '               role="tab" aria-controls="pills-home" aria-selected="true">Insertar'+
    '               Categoria</a>'+
    '       </li>'+
    '       <li class="nav-item" role="presentation">'+
    '           <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"'+
    '               role="tab" aria-controls="pills-profile" aria-selected="false">Actualizar'+
    '               Categoria</a>'+
    '       </li>'+
    '   </ul>'+
    '   <div class="tab-content" id="pills-tabContent">'+
    '       <div class="tab-pane fade show active" id="pills-home" role="tabpanel"'+
    '           aria-labelledby="pills-home-tab">'+
    '           <div class="row">'+
    '               <div class="col">'+
    '                   <div class="row">'+
    '                       <div class="col">'+
    '                           <div class="input-group mb-3">'+
    '                               <div class="input-group-prepend">'+
    '                                   <span class="input-group-text" id="basic-addon1">📋</span>'+
    '                               </div>'+
    '                               <select class="custom-select" id="inputGroupSelect01">'+
    '                                   <option selected>Icono</option>'+
                                        DatIcont()+
                                        DatIcont()+
                                        DatIcont()+
                                        DatIcont()+
                                        DatIcont()+
    '                               </select>'+
    '                           </div>'+
    '                       </div>'+
    '                       <div class="col">'+
    '                           <div class="input-group mb-3">'+
    '                               <div class="input-group-prepend">'+
    '                                   <span class="input-group-text" id="basic-addon1">📺</span>'+
    '                               </div>'+
    '                               <input type="text" class="form-control"'+
    '                                   placeholder="Nombre de la Categoria" aria-label="Direccion"'+
    '                                   aria-describedby="basic-addon1">'+
    '                           </div>'+
    '                       </div>'+
    '                   </div>'+
    '                   <div class="row">'+
    '                       <div class="col">'+
    '                           <button type="button" id="NewProdut"'+
    '                               class="btn btn-success btn-block">Agregar'+
    '                               Catehoria</button>'+
    '                       </div>'+
    '                   </div>'+
    '               </div>'+
    '           </div>'+
    '       </div>'+
    '       <div class="tab-pane fade" id="pills-profile" role="tabpanel"'+
    '           aria-labelledby="pills-profile-tab">'+
    '           <div class="accordion" id="accordionExample"'+
    '               style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
                    DatCaegor()+
                    DatCaegor()+
                    DatCaegor()+
    '           </div>'+
    '       </div>'+
    '   </div>'+
    '   </div>'+
    '</div>';
}
/*Cart de datos de los iconos que se van a mostrar el en contenedor*/
function DatIcont(){
    return     '<option value="1">👕</option>';
}
/*Car de proveedores que se van a mostrar*/
function DatCaegor(){
    return '<div class="row padding-0">'+
    '                   <div class="col">'+
    '                       <div class="card">'+
    '                           <div class="card-header" id="headingOne">'+
    '                               <h2 class="row mb-0">'+
    '                                   <div class="col-8" data-toggle="collapse"'+
    '                                       data-target="#collapseExample6" aria-expanded="false"'+
    '                                       aria-controls="collapseExample6">'+
    '                                       <div class="col">'+
    '                                           <h5>👕 Polos</h5>'+
    '                                       </div>'+
    '                                   </div>'+
    '                                   <div class="col-4">'+
    '                                       <a id="NewProdut"'+
    '                                           class="btn btn-danger btn-block">Eliminar</a>'+
    '                                   </div>'+
    '                               </h2>'+
    '                           </div>'+
    '                           <div class="collapse" id="collapseExample6">'+
    '                               <div class="card card-body">'+
    '                                   <div class="row">'+
    '                                       <div class="col">'+
    '                                           <div class="row">'+
    '                                               <div class="col">'+
    '                                                   <div class="input-group mb-3">'+
    '                                                       <div class="input-group-prepend">'+
    '                                                           <span class="input-group-text"'+
    '                                                               id="basic-addon1">📋</span>'+
    '                                                       </div>'+
    '                                                       <select class="custom-select"'+
    '                                                           id="inputGroupSelect01">'+
    '                                                           <option selected>Icono</option>'+
                                                                DatIcont()+
                                                                DatIcont()+
                                                                DatIcont()+
                                                                DatIcont()+
    '                                                       </select>'+
    '                                                   </div>'+
    '                                               </div>'+
    '                                               <div class="col">'+
    '                                                   <div class="input-group mb-3">'+
    '                                                       <div class="input-group-prepend">'+
    '                                                           <span class="input-group-text"'+
    '                                                               id="basic-addon1">📺</span>'+
    '                                                       </div>'+
    '                                                       <input type="text" class="form-control"'+
    '                                                           placeholder="Nombre de la Categoria"'+
    '                                                           aria-label="Direccion"'+
    '                                                           aria-describedby="basic-addon1">'+
    '                                                   </div>'+
    '                                               </div>'+
    '                                           </div>'+
    '                                           <div class="row">'+
    '                                               <div class="col">'+
    '                                                   <button type="button" id="NewProdut"'+
    '                                                      class="btn btn-success btn-block">Agregar'+
    '                                                       Catehoria</button>'+
    '                                               </div>'+
    '                                           </div>'+
    '                                       </div>'+
    '                                   </div>'+
    '                               </div>'+
    '                           </div>'+
    '                       </div>'+
    '                   </div>'+
    '               </div>';
}

function MnateniGeografi(){
    return '<div class="row">'+
    '     <div class="col">'+
'        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">'+
'         <li class="nav-item" role="presentation">'+
'               <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"'+
'                   role="tab" aria-controls="pills-home" aria-selected="true">Insertar geologia</a>'+
'           </li>'+
'           <li class="nav-item" role="presentation">'+
'               <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"'+
'                   role="tab" aria-controls="pills-profile" aria-selected="false">Actualizar'+
'                   geologia</a>'+
'           </li>'+
'       </ul>'+
'       <div class="tab-content" id="pills-tabContent">'+
'           <div class="tab-pane fade show active" id="pills-home" role="tabpanel"'+
'               aria-labelledby="pills-home-tab">'+
'               <div class="row">'+
'                   <div class="col">'+
'                       <div class="accordion" id="accordionExample">'+
'                           <div class="card">'+
'                                <div class="card-header" id="headingOne">'+
'                                 <h2 class="mb-0">'+
'                                        <button class="btn btn-link btn-block text-left"'+
'                                            type="button" data-toggle="collapse"'+
'                                           data-target="#collapseOne" aria-expanded="true"'+
'                                           aria-controls="collapseOne">'+
'                                           🌎 Departamento'+
'                                       </button>'+
'                                   </h2>'+
'                               </div>'+
' '+
'                               <div id="collapseOne" class="collapse show"'+
'                                   aria-labelledby="headingOne" data-parent="#accordionExample">'+
'                                   <div class="card-body">'+
'                                       <div class="row">'+
'                                           <div class="col">'+
'                                               <div class="row">'+
'                                                   <div class="col">'+
'                                                       <div class="input-group mb-3">'+
'                                                           <div class="input-group-prepend">'+
'                                                               <span class="input-group-text"'+
'                                                                   id="basic-addon1">🌎</span>'+
'                                                           </div>'+
'                                                           <input type="text" class="form-control"'+
'                                                               placeholder="Nombre del departamento"'+
'                                                               aria-label="Direccion"'+
'                                                               aria-describedby="basic-addon1">'+
'                                                       </div>'+
'                                                   </div>'+
'                                               </div>'+
'                                               <div class="row">'+
'                                                   <div class="col">'+
'                                                       <button type="button" id="NewProdut"'+
'                                                           class="btn btn-success btn-block">Agregar'+
'                                                           Departamento</button>'+
'                                                   </div>'+
'                                               </div>'+
'                                           </div>'+
'                                       </div>'+
'                                   </div>'+
'                               </div>'+
'                           </div>'+
'                           <div class="card">'+
'                               <div class="card-header" id="headingTwo">'+
'                                   <h2 class="mb-0">'+
'                                       <button class="btn btn-link btn-block text-left collapsed"'+
'                                           type="button" data-toggle="collapse"'+
'                                           data-target="#collapseTwo" aria-expanded="false"'+
'                                           aria-controls="collapseTwo">'+
'                                           🗾 Ciudad'+
'                                       </button>'+
'                                   </h2>'+
'                               </div>'+
'                               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"'+
'                                   data-parent="#accordionExample">'+
'                                   <div class="card-body">'+
'                                       <div class="card-body">'+
'                                           <div class="row">'+
'                                               <div class="col">'+
'                                                   <div class="row">'+
'                                                       <div class="col">'+
'                                                           <div class="input-group mb-3">'+
'                                                               <div class="input-group-prepend">'+
'                                                                   <span class="input-group-text"'+
'                                                                       id="basic-addon1">🌎</span>'+
'                                                               </div>'+
'                                                               <select class="custom-select"'+
'                                                                   id="inputGroupSelect01">'+
'                                                                   <option selected>Deàrtamento'+
'                                                                   </option>'+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
'                                                               </select>'+
'                                                           </div>'+
'                                                       </div>'+
'                                                       <div class="col">'+
'                                                           <div class="input-group mb-3">'+
'                                                               <div class="input-group-prepend">'+
'                                                                   <span class="input-group-text"'+
'                                                                       id="basic-addon1">🗾</span>'+
'                                                               </div>'+
'                                                               <input type="text"'+
'                                                                   class="form-control"'+
'                                                                   placeholder="Nombre de la ciudad"'+
'                                                                   aria-label="Direccion"'+
'                                                                   aria-describedby="basic-addon1">'+
'                                                           </div>'+
'                                                       </div>'+
'                                                   </div>'+
'                                                   <div class="row">'+
'                                                       <div class="col">'+
'                                                           <button type="button" id="NewProdut"'+
'                                                               class="btn btn-success btn-block">Agregar'+
'                                                               Ciudad</button>'+
'                                                       </div>'+
'                                                   </div>'+
'                                               </div>'+
'                                           </div>'+
'                                       </div>'+
'                                   </div>'+
'                               </div>'+
'                           </div>'+
'                           <div class="card">'+
'                               <div class="card-header" id="headingThree">'+
'                                   <h2 class="mb-0">'+
'                                       <button class="btn btn-link btn-block text-left collapsed"'+
'                                           type="button" data-toggle="collapse"'+
'                                           data-target="#collapseThree" aria-expanded="false"'+
'                                           aria-controls="collapseThree">'+
'                                           🌃 Distrito'+
'                                       </button>'+
'                                   </h2>'+
'                               </div>'+
'                               <div id="collapseThree" class="collapse"'+
'                                   aria-labelledby="headingThree" data-parent="#accordionExample">'+
'                                   <div class="card-body">'+
'                                       <div class="card-body">'+
'                                           <div class="row">'+
'                                               <div class="col">'+
'                                                   <div class="row">'+
'                                                       <div class="col">'+
'                                                           <div class="input-group mb-3">'+
'                                                               <div class="input-group-prepend">'+
'                                                                   <span class="input-group-text"'+
'                                                                       id="basic-addon1">🌎</span>'+
'                                                               </div>'+
'                                                               <select class="custom-select"'+
'                                                                   id="inputGroupSelect01">'+
'                                                                   <option selected>Deàrtamento'+
'                                                                   </option>'+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
                                                                     DatLisDepart()+
'                                                               </select>'+
'                                                           </div>'+
'                                                       </div>'+
'                                                       <div class="col">'+
'                                                           <div class="input-group mb-3">'+
'                                                               <div class="input-group-prepend">'+
'                                                                   <span class="input-group-text"'+
'                                                                       id="basic-addon1">🗾</span>'+
'                                                               </div>'+
'                                                               <select class="custom-select"'+
'                                                                   id="inputGroupSelect01">'+
'                                                                   <option selected>Ciudad'+
'                                                                   </option>'+
                                                                     DatLisCiry()+
                                                                     DatLisCiry()+
                                                                     DatLisCiry()+
                                                                     DatLisCiry()+
                                                                     DatLisCiry()+
                                                                     DatLisCiry()+
'                                                               </select>'+
'                                                           </div>'+
'                                                       </div>'+
'                                                   </div>'+
'                                                   <div class="row">'+
'                                                       <div class="col">'+
'                                                           <div class="input-group mb-3">'+
'                                                               <div class="input-group-prepend">'+
'                                                                   <span class="input-group-text"'+
'                                                                       id="basic-addon1">🌃</span>'+
'                                                               </div>'+
'                                                               <input type="text"'+
'                                                                   class="form-control"'+
'                                                                   placeholder="Nombre de la Distrito"'+
'                                                                   aria-label="Direccion"'+
'                                                                   aria-describedby="basic-addon1">'+
'                                                           </div>'+
'                                                       </div>'+
'                                                   </div>'+
'                                                   <div class="row">'+
'                                                       <div class="col">'+
'                                                           <button type="button" id="NewProdut"'+
'                                                               class="btn btn-success btn-block">Agregar'+
'                                                               Distrito</button>'+
'                                                       </div>'+
'                                                   </div>'+
'                                               </div>'+
'                                           </div>'+
'                                       </div>'+
'                                   </div>'+
'                               </div>'+
'                           </div>'+
'                       </div>'+
'                   </div>'+
'               </div>'+
'           </div>'+
'           <div class="tab-pane fade" id="pills-profile" role="tabpanel"'+
'               aria-labelledby="pills-profile-tab">'+
'               <div class="row">'+
'                   <div class="col">'+
'                       <div class="accordion" id="accordionExample">'+
'                           <div class="card">'+
'                               <div class="card-header" id="headingOne">'+
'                                   <h2 class="mb-0">'+
'                                       <button class="btn btn-link btn-block text-left"'+
'                                           type="button" data-toggle="collapse"'+
'                                           data-target="#collapseOne" aria-expanded="true"'+
'                                           aria-controls="collapseOne">'+
'                                           🌎 Departamento'+
'                                       </button>'+
'                                   </h2>'+
'                               </div>'+
'                               <div id="collapseOne" class="collapse show"'+
'                                   aria-labelledby="headingOne" data-parent="#accordionExample">'+
'                                   <div class="card-body">'+
'                                       <div'+
'                                           style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
                                            DatDepart()+
'                                       </div>'+
'                                   </div>'+
'                               </div>'+
'                           </div>'+
'                           <div class="card">'+
'                               <div class="card-header" id="headingTwo">'+
'                                   <h2 class="mb-0">'+
'                                       <button class="btn btn-link btn-block text-left collapsed"'+
'                                           type="button" data-toggle="collapse"'+
'                                           data-target="#collapseTwo" aria-expanded="false"'+
'                                           aria-controls="collapseTwo">'+
'                                           🗾 Ciudad'+
'                                       </button>'+
'                                  </h2>'+
'                               </div>'+
'                               <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"'+
'                                   data-parent="#accordionExample">'+
'                                   <div class="card-body">'+
'                                       <div'+
'                                           style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
                                            DatCiu()+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                            <div class="card">'+
'                                <div class="card-header" id="headingThree">'+
'                                    <h2 class="mb-0">'+
'                                        <button class="btn btn-link btn-block text-left collapsed"'+
'                                            type="button" data-toggle="collapse"'+
'                                            data-target="#collapseThree" aria-expanded="false"'+
'                                            aria-controls="collapseThree">'+
'                                            🌃 Distrito'+
'                                        </button>'+
'                                    </h2>'+
'                                </div>'+
'                                <div id="collapseThree" class="collapse"'+
'                                    aria-labelledby="headingThree" data-parent="#accordionExample">'+
'                                    <div class="card-body">'+
'                                        <div class="card-body">'+
'                                            <div'+
'                                                style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
                                                 DatDistrito()+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';
}

/*contenerdor de que se usara para mostrar los datos de los departamentos*/
function DatDepart(){
    return '<!-- car de un departamento--->'+
    '                                           <div class="accordion" id="accordionExample">'+
    '                                               <div class="card">'+
    '                                                   <div class="card-header" id="headingOne">'+
    '                                                       <h2 class="mb-0">'+
    '                                                           <button'+
    '                                                               class="btn btn-link btn-block text-left"'+
    '                                                               type="button" data-toggle="collapse"'+
    '                                                               data-target="#collapseOne1"'+
    '                                                               aria-expanded="true"'+
    '                                                               aria-controls="collapseOne1">'+
    '                                                               Piura'+
    '                                                           </button>'+
    '                                                       </h2>'+
    '                                                   </div>'+
    ''+
    '                                                   <div id="collapseOne1" class="collapse show"'+
    '                                                       aria-labelledby="headingOne"'+
    '                                                       data-parent="#accordionExample">'+
    '                                                       <div class="card-body">'+
    '                                                           <div class="row">'+
    '                                                               <div class="col">'+
    '                                                                   <div class="row">'+
    '                                                                       <div class="col">'+
    '                                                                           <div'+
    '                                                                               class="input-group mb-3">'+
    '                                                                               <div'+
    '                                                                                   class="input-group-prepend">'+
    '                                                                                   <span'+
    '                                                                                       class="input-group-text"'+
    '                                                                                       id="basic-addon1">🌎</span>'+
    '                                                                               </div>'+
    '                                                                               <input type="text"'+
    '                                                                                   class="form-control"'+
    '                                                                                   placeholder="Nombre del departamento"'+
    '                                                                                   aria-label="Direccion"'+
    '                                                                                   aria-describedby="basic-addon1">'+
    '                                                                           </div>'+
    '                                                                       </div>'+
    '                                                                   </div>'+
    '                                                                   <div class="row">'+
    '                                                                       <div class="col">'+
    '                                                                           <button type="button"'+
    '                                                                               id="NewProdut"'+
    '                                                                               class="btn btn-success btn-block">Agregar'+
    '                                                                               Departamento</button>'+
    '                                                                       </div>'+
    '                                                                   </div>'+
    '                                                               </div>'+
    '                                                           </div>'+
    '                                                       </div>'+
    '                                                   </div>'+
    '                                               </div>'+
    '                                           </div>'+
    '                                           <!------------------------------------>';
}


/*contenedor de quera unsa para mostrar los datos de los ciudades*/
function DatCiu(){
    return '<!-- car de un departamento--->'+
    '                                           <div class="accordion" id="accordionExample">'+
    '                                               <div class="card">'+
    '                                                   <div class="card-header" id="headingOne">'+
    '                                                       <h2 class="mb-0">'+
    '                                                           <button'+
    '                                                               class="btn btn-link btn-block text-left"'+
    '                                                               type="button" data-toggle="collapse"'+
    '                                                               data-target="#collapseOne2"'+
    '                                                               aria-expanded="true"'+
    '                                                               aria-controls="collapseOne2">'+
    '                                                               Piura'+
    '                                                           </button>'+
    '                                                       </h2>'+
    '                                                   </div>'+
    ''+
    '                                                   <div id="collapseOne2" class="collapse show"'+
    '                                                       aria-labelledby="headingOne"'+
    '                                                       data-parent="#accordionExample">'+
    '                                                       <div class="card-body">'+
    '                                                           <div class="row">'+
    '                                                               <div class="col">'+
    '                                                                   <div class="row">'+
    '                                                                       <div class="col">'+
    '                                                                           <div'+
    '                                                                                class="input-group mb-3">'+
    '                                                                               <div'+
    '                                                                                   class="input-group-prepend">'+
    '                                                                                   <span'+
    '                                                                                      class="input-group-text"'+
    '                                                                                       id="basic-addon1">🌎</span>'+
    '                                                                               </div>'+
    '                                                                               <select'+
    '                                                                                   class="custom-select"'+
    '                                                                                   id="inputGroupSelect01">'+
    '                                                                                   <option'+
    '                                                                                       selected>'+
    '                                                                                       Deàrtamento'+
    '                                                                                   </option>'+
                                                                                         DatLisDepart()+
                                                                                         DatLisDepart()+
                                                                                         DatLisDepart()+
                                                                                         DatLisDepart()+
    '                                                                               </select>'+
    '                                                                           </div>'+
    '                                                                       </div>'+
    '                                                                       <div class="col">'+
    '                                                                           <div'+
    '                                                                               class="input-group mb-3">'+
    '                                                                               <div'+
    '                                                                                   class="input-group-prepend">'+
    '                                                                                   <span'+
    '                                                                                       class="input-group-text"'+
    '                                                                                       id="basic-addon1">🗾</span>'+
    '                                                                               </div>'+
    '                                                                               <input type="text"'+
    '                                                                                   class="form-control"'+
    '                                                                                    placeholder="Nombre de la ciudad"'+
    '                                                                                    aria-label="Direccion"'+
    '                                                                                    aria-describedby="basic-addon1">'+
    '                                                                            </div>'+
    '                                                                        </div>'+
    '                                                                    </div>'+
    '                                                                    <div class="row">'+
    '                                                                        <div class="col">'+
    '                                                                            <button type="button"'+
    '                                                                                id="NewProdut"'+
    '                                                                                class="btn btn-success btn-block">Agregar'+
    '                                                                                Ciudad</button>'+
    '                                                                        </div>'+
    '                                                                    </div>'+
    '                                                                </div>'+
    '                                                            </div>'+
    '                                                        </div>'+
    '                                                    </div>'+
    '                                                </div>'+
    '                                            </div>'+
    '                                            <!------------------------------------>';
}
/*Contenerodot que sera usado para mostrar los datos de las ciudades existentes*/
function DatDistrito(){
    return '<!-- car de un departamento--->'+
    '                                                <div class="accordion" id="accordionExample">'+
    '                                                    <div class="card">'+
    '                                                        <div class="card-header" id="headingOne">'+
    '                                                            <h2 class="mb-0">'+
    '                                                                <button'+
    '                                                                    class="btn btn-link btn-block text-left"'+
    '                                                                    type="button"'+
    '                                                                    data-toggle="collapse"'+
    '                                                                    data-target="#collapseOne3"'+
    '                                                                    aria-expanded="true"'+
    '                                                                    aria-controls="collapseOne3">'+
    '                                                                    Piura'+
    '                                                                </button>'+
    '                                                            </h2>'+
    '                                                        </div>'+
    ''+
    '                                                        <div id="collapseOne3" class="collapse show"'+
    '                                                            aria-labelledby="headingOne"'+
    '                                                            data-parent="#accordionExample">'+
    '                                                           <div class="card-body">'+
    '                                                                <div class="row">'+
    '                                                                    <div class="col">'+
    '                                                                        <div class="row">'+
    '                                                                            <div class="col">'+
    '                                                                                <div'+
    '                                                                                    class="input-group mb-3">'+
    '                                                                                    <div'+
    '                                                                                        class="input-group-prepend">'+
    '                                                                                        <span'+
    '                                                                                            class="input-group-text"'+
    '                                                                                            id="basic-addon1">🌎</span>'+
    '                                                                                    </div>'+
    '                                                                                    <select'+
    '                                                                                        class="custom-select"'+
    '                                                                                        id="inputGroupSelect01">'+
    '                                                                                        <option'+
    '                                                                                            selected>'+
    '                                                                                            Deàrtamento'+
    '                                                                                        </option>'+                                                                                        
                                                                                             DatLisDepart()+
                                                                                             DatLisDepart()+
                                                                                             DatLisDepart()+
                                                                                             DatLisDepart()+
    '                                                                                    </select>'+
    '                                                                                </div>'+
    '                                                                            </div>'+
    '                                                                            <div class="col">'+
    '                                                                               <div'+
    '                                                                                    class="input-group mb-3">'+
    '                                                                                    <div'+
    '                                                                                        class="input-group-prepend">'+
    '                                                                                        <span'+
    '                                                                                            class="input-group-text"'+
    '                                                                                            id="basic-addon1">🗾</span>'+
    '                                                                                    </div>'+
    '                                                                                    <select'+
    '                                                                                        class="custom-select"'+
    '                                                                                        id="inputGroupSelect01">'+
    '                                                                                        <option'+
    '                                                                                            selected>'+
    '                                                                                            Ciudad'+
    '                                                                                        </option>'+
                                                                                             DatLisCiry()+
                                                                                             DatLisCiry()+
                                                                                             DatLisCiry()+
                                                                                             DatLisCiry()+
    '                                                                                    </select>'+
    '                                                                                </div>'+
    '                                                                            </div>'+
    '                                                                        </div>'+
    '                                                                        <div class="row">'+
    '                                                                            <div class="col">'+
    '                                                                                <div'+
    '                                                                                    class="input-group mb-3">'+
    '                                                                                    <div'+
    '                                                                                        class="input-group-prepend">'+
    '                                                                                        <span'+
    '                                                                                            class="input-group-text"'+
    '                                                                                            id="basic-addon1">🌃</span>'+
    '                                                                                    </div>'+
    '                                                                                    <input'+
    '                                                                                        type="text"'+
    '                                                                                        class="form-control"'+
    '                                                                                        placeholder="Nombre de la Distrito"'+
    '                                                                                        aria-label="Direccion"'+
    '                                                                                        aria-describedby="basic-addon1">'+
    '                                                                                </div>'+
    '                                                                            </div>'+
    '                                                                       </div>'+
    '                                                                        <div class="row">'+
    '                                                                            <div class="col">'+
    '                                                                                <button'+
    '                                                                                    type="button"'+
    '                                                                                    id="NewProdut"'+
    '                                                                                   class="btn btn-success btn-block">Agregar'+
    '                                                                                    Distrito</button>'+
    '                                                                            </div>'+
    '                                                                        </div>'+
    '                                                                    </div>'+
    '                                                                </div>'+
    '                                                            </div>'+
    '                                                        </div>'+
    '                                                    </div>'+
    '                                                </div>'+
    '                                                <!------------------------------------>';
}
/*car para de departamento para listado*/
function DatLisDepart() {
    return '<option value="1">Piura</option>';
}
/*car para de ciudad para listado*/
function DatLisCiry() {
    return '<option value="1">Piura</option>';
}

function PedidosCont(){
    return '<div'+
    'style="background:  #eceff1; width: 100%; height: 600px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
    '<div class="accordion" id="accordionExample">'+
        CardPedido()+
        CardPedido()+
        CardPedido()+
    '</div>'+
    '<!------------------------------------>'+
'</div>';
}

function CardPedido() {
    return '<!-- car del pedido a mostrar--->'+
    '<div class="card my-1">'+
        '<div class="card-header" id="headingOne">'+
            '<h2 class="mb-0">'+
                '<button class="btn btn-link btn-block text-left" type="button"'+
                    'data-toggle="collapse" data-target="#collapseOne6" aria-expanded="true"'+
                    'aria-controls="collapseOne6">'+
                    '<div class="row">'+
                        '<div class="col-3">'+
                        '    4567856'+
                        '</div>'+
                        '<div class="col-6">'+
                        '    Jose maria hernandez'+
                        '</div>'+
                        '<div class="col-3">'+
                        '    S/.4500'+
                        '</div>'+
                    '</div>'+
                '</button>'+
            '</h2>'+
        '</div>'+
        '<div id="collapseOne6" class="collapse show" aria-labelledby="headingOne"'+
            'data-parent="#accordionExample">'+
            '<div class="card-body" id="secudContendP">'+
                CarritoCompra()+
            '</div>'+
        '</div>'+
    '</div>'+
    '<!----------------------------------------->';
}


/* codigo directamente extraido de store el cual 
da la informacion del pedido*/
function CarritoCompra(){
    return '<div class="container">'+
  '  <div class="row">'+
  '     <div class="col">'+
  '       <div class="row">'+
  '         <div class="col-7">'+
  '             <h5>Productos en Carrito</h5>'+
  '         </div>'+
  '         <div class="col-5">'+
  '           <div class="form-group" style="width: 100%;">'+
  '             <div class="input-group">'+
  '               <div class="input-group-prepend">'+
  '                 <span class="input-group-text" id="basic-addon1">S/.</span>'+
  '               </div>'+
  '               <input type="text" disabled class="form-control" placeholder="00.0" aria-label="Direccion" aria-describedby="basic-addon1">'+
  '             </div>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  '       <div style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ; grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
              productCarri()+
              productCarri()+
              productCarri()+
              productCarri()+
  '       </div>'+
  '     </div>'+
  '  </div>'+
  '  <div class="row">'+
  '     <div class="col">'+
  '       <div class="row my-1">'+
  '           <select disabled class="custom-select" id="inputGroupSelect01">'+
  '            <option selected>Departamento</option>'+
                 ProducDepart()+
                 ProducDepart()+
                 ProducDepart()+
                 ProducDepart()+
  '           </select>'+
  '       </div>'+
  '       <div class="row my-1">'+
  '           <select disabled class="custom-select" id="inputGroupSelect01">'+
  '             <option selected>Ciudad</option>'+
                 ProducCity()+
                 ProducCity()+
                 ProducCity()+
                 ProducCity()+
  '           </select>'+
  '       </div>'+
  '       <div class="row my-1">'+
  '           <select disabled class="custom-select" id="inputGroupSelect01">'+
  '             <option selected>Distrito</option>'+
                  ProducDist()+
                  ProducDist()+
                  ProducDist()+
                  ProducDist()+
                  ProducDist()+
  '           </select>'+
  '       </div>'+
  '       <div class="row my-1">'+
  '           <div class="form-group" style="width: 100%;">'+
  '             <div class="input-group">'+
  '               <div class="input-group-prepend">'+
  '                 <span class="input-group-text" id="basic-addon1">🌍</span>'+
  '               </div>'+
  '               <input disabled type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" aria-describedby="basic-addon1">'+
  '             </div>'+
  '           </div>'+
  '       </div>'+
  '       <div class="conteSetP">'+
  '          <ul class="Setprogressbar">'+
  '             <li class="li-iten-sep active">Step 1</li>'+
  '             <li class="li-iten-sep active">Step 2</li>'+
  '             <li class="li-iten-sep active">Step 3</li>'+
  '          </ul>'+
  '       </div>'+
  '       <div class="row my-1">'+
  '             <button type="button" id="NewProdut" class="btn btn-success btn-block">Actualizar'+
  '             Estado</button>'+
  '       </div>'+
  '     </div>'+
  '     <div class="row my-1">'+
  '     </div>'+
  '  </div>'+
  '  <div Class="row">'+
  '       '+
  '  </div>'+
  '</div>';
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
  
  function productCarri(){
    return '<!--        Card de producto insertado         -->'+
    '         <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">'+
    '           <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> '+
    '            <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
    '               <img style="border-radius: 50%;'+
    '               width: 40px;'+
    '               height: 40px;'+
    '               justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
    '            </div> '+
    '            <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
    '               Maquintosh de 3gb de ram con 2 procesaroderes'+
    '            </div>'+
    '            <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
    '               40 Un'+
    '            </div>'+
    '            <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
    '               S/.4500'+
    '            </div>'+
    '           </div>'+
    '       </div>';
  }

  function ConfigAdmini() {
    return '<!----codico del modal----->'+
    ' <div class="row">'+
    ' <div class="col">'+
        ' <div class="row">'+
            ' <div class="col">'+
                '<div class="row">'+
                    '<div class="col-7">'+
                        '<div class="row">'+
                            '<div class="col">'+
                                ' <div class="input-group mb-3">'+
                                    ' <div class="input-group-prepend">'+
                                        ' <span class="input-group-text" id="basic-addon1">🔢</span>'+
                                        ' </div>'+
                                    ' <input type="text" class="form-control" placeholder="Dni Administrador"'+
                                    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                '</div>'+
                            '</div>'+
                        ' <div class="row">'+
                            ' <div class="col">'+
                                ' <div class="input-group mb-3">'+
                                    ' <div class="input-group-prepend">'+
                                        ' <span class="input-group-text" id="basic-addon1">📋</span>'+
                                        ' </div>'+
                                    ' <input type="text" class="form-control" placeholder="Nombre del Administrador"'+
                                    ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                ' </div>'+
                            ' </div>'+
                        ' <div class="row">'+
                            ' <div class="col">'+
                                ' <div class="input-group mb-3">'+
                                    ' <div class="input-group-prepend">'+
                                        ' <span class="input-group-text" id="basic-addon1">📱</span>'+
                                        ' </div>'+
                                        ' <input type="text" class="form-control" placeholder="Telefono del Administrador"'+
                                        ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                ' </div>'+
                            ' </div>'+
                        '</div>'+
                    '<div class="col-5">'+
                        '<div class="text-center">'+
                            '<img src="./resorces/fondolo.jpg" style="width: 14vh; height: 14vh;'+
                            '-webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);'+
                            '-moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);'+
                            'box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"'+
                            ' class="rounded" alt="...">'+
                            '</div>'+
                        '<div class="row my-2">'+
                            '<div class="col">'+
                                ' <button type="button" style="text-align: center; width: 100px; height: 30px;" id="NewProdut"'+
                                  '  class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir' + 
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <div class="input-group mb-3">'+
                    ' <div class="input-group-prepend">'+
                        ' <span class="input-group-text" id="basic-addon1">📧</span>'+
                        ' </div>'+
                        ' <input type="text" class="form-control" placeholder="Correo Electronico"'+
                        ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                    ' </div>'+
                ' </div>'+
            ' </div>'+
        ' <div class="row">'+
            ' <div class="col">'+
                ' <button type="button" id="NewProdut" class="btn btn-success btn-block">Ingresar'+
                    ' Datos</button>'+
                ' </div>'+
            ' </div>'+
        ' </div>'+
    ' </div>'+
'<!------------------------->';
}

