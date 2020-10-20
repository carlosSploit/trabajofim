$(document).ready(principal);

function principal(){
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
}

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
'                    <div class="row padding-0">'+
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
'                    </div>'+
'               </div>'+
'            </div>'+
'        </div>'+
'    </div>';
}

function ManteniProduc(){

    return '<!----codico del modal----->'+
'    <div class="row">'+
'        <div class="col">'+
'            <div class="row">'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">🔢</span>'+
'                        </div>'+
'                        <input type="text" class="form-control" placeholder="Codigo del prodcuto"'+
'                            aria-label="Direccion" aria-describedby="basic-addon1">'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row">'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">🎮</span>'+
'                        </div>'+
'                        <input type="text" class="form-control" placeholder="Nombre del prodcuto"'+
'                            aria-label="Direccion" aria-describedby="basic-addon1">'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row">'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">📋</span>'+
'                        </div>'+
'                        <select class="custom-select" id="inputGroupSelect01">'+
'                            <option selected>Categoria</option>'+
'                            <option value="1">👕 Ropa</option>'+
'                            <option value="2">📺 Electrodomesticos</option>'+
'                            <option value="3">📟 Computadoras</option>'+
'                            <option value="3">📱 Celulares</option>'+
'                        </select>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row">'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">👷</span>'+
'                        </div>'+
'                        <select class="custom-select" id="inputGroupSelect01">'+
'                            <option selected>Proveedor</option>'+
'                            <option value="1">Jose Maria</option>'+
'                            <option value="2">Elisa morales</option>'+
'                            <option value="3">Luciana gonzales</option>'+
'                            <option value="4">Jimena loaiza</option>'+
'                        </select>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row">'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">💲</span>'+
'                        </div>'+
'                        <input type="number" class="form-control" placeholder="Precio de Compra"'+
'                            aria-label="Direccion" aria-describedby="basic-addon1">'+
'                    </div>'+
'                </div>'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">💰</span>'+
'                        </div>'+
'                        <input type="number" class="form-control" placeholder="Precio de Venta"'+
'                            aria-label="Direccion" aria-describedby="basic-addon1">'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row">'+
'                <div class="col">'+
'                    <div class="input-group mb-3">'+
'                        <div class="input-group-prepend">'+
'                            <span class="input-group-text" id="basic-addon1">🔢</span>'+
'                        </div>'+
'                        <input type="number" class="form-control" placeholder="Cantidad en Stock"'+
'                           aria-label="Direccion" aria-describedby="basic-addon1">'+
'                    </div>'+
'                </div>'+
'           </div>'+
'            <div class="row">'+
'               <div class="col">'+
'                    <div class="form-group">'+
'                      <label for="exampleFormControlTextarea1">Descripccion de producto</label>'+
'                        <textarea class="form-control" id="exampleFormControlTextarea1"'+
'                            rows="3"></textarea>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="row">'+
'                <div class="col">'+
'                    <button type="button" id="NewProdut" class="btn btn-success btn-block">Agregar'+
'                        Producto</button>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'    <!------------------------->';
} 

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
    '                                   <option value="1">👕</option>'+
    '                                   <option value="2">📺</option>'+
    '                                   <option value="3">📟</option>'+
    '                                  <option value="3">📱</option>'+
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
    '               <div class="row padding-0">'+
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
    '                                                           <option value="1">👕</option>'+
    '                                                           <option value="2">📺</option>'+
    '                                                           <option value="3">📟</option>'+
    '                                                           <option value="3">📱</option>'+
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
    '               </div>'+
    '           </div>'+
    '       </div>'+
    '   </div>'+
    '   </div>'+
    '</div>';
}
