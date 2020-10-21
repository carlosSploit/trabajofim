$(document).ready(principal);

function principal(){

    //$("#ConternCategoriStore").html(ItenCateg);//instertar una categoria en el contenedor de estore
    //$("#ContstoreProduct").html(ItenProduct);//instertar un producto en el contenedor de estore
    //$("#ConteNavega").html(Navegacion);//instertar un tab de navegacion en el contenedor de estore

    $("#ConfigUsar").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        $('#contModal').html(ConfigUser);
        $('#tituProduct').html("Configuracion")
        $('#infoProducto').modal('show');
    });
}

function ConfigUser() {
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
                                    ' <input type="text" class="form-control" placeholder="Dni Cliente"'+
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
                                    ' <input type="text" class="form-control" placeholder="Nombre del Cliente"'+
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
                                        ' <input type="text" class="form-control" placeholder="Telefono del Cliente"'+
                                        ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                ' </div>'+
                            ' </div>'+
                        '</div>'+
                    '<div class="col-5">'+
                        '<div class="text-center">'+
                            '<img src="./view/resorces/fondolo.jpg" style="width: 14vh; height: 14vh;'+
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
                ' <button type="button" id="NewProdut" class="btn btn-success btn-block">Actualizar'+
                    ' Datos</button>'+
                ' </div>'+
            ' </div>'+
        ' </div>'+
    ' </div>'+
'<!------------------------->';
}