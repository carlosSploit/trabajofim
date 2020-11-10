

$(document).ready(principal);

function principal(){

    //$("#ConternCategoriStore").html(ItenCateg);//instertar una categoria en el contenedor de estore
    //$("#ContstoreProduct").html(ItenProduct);//instertar un producto en el contenedor de estore
    //$("#ConteNavega").html(Navegacion);//instertar un tab de navegacion en el contenedor de estore

    //verifica quien inicio secion por medio del controlador de cuenta y la ip publica

    /*extraer la ip publica de la maquina*/
    fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .catch(Error => console.log(Error))
    .then(data => {
        document.getElementById('contModal').setAttribute("value","0"); // se inicialisa el value para evitar bug
        var obj= new ApiCuentCI("",data.ip);
        obj.listAdmin();
        //se comprueba si se a insertado algo o no
        if(document.getElementById('contModal').getAttribute("value") == 0){ //si es igual a 0 cabe la posibilidad que sea administrador
            $('#sign').attr("style", 'display: block');
            $('#log').attr("style", 'display: block');

        }else{
            $('#sign').attr("style", 'display: none');
            $('#log').attr("style", 'display: none');

        }
        //if (document.getElementById('contModal').getAttribute("value")!=0){

        //}

       
    }).catch(Error => console.log(Error));

    $("#ConfigUsar").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        //$('#contModal').html(ConfigUser);
        $('#tituProduct').html("Configuracion")
        $('#infoProducto').modal('show');
    });

}

function ConfigUser(id,dni,nombre,telf,corr,photo,pass) {
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
                                    ' <input value="'+dni+'" disabled="false" type="text" class="form-control" placeholder="Dni Cliente"'+
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
                                    ' <input value="'+nombre+'" type="text" class="form-control" placeholder="Nombre del Cliente"'+
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
                                        ' <input value="'+telf+'" type="text" class="form-control" placeholder="Telefono del Cliente"'+
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
                        ' <input value="'+corr+'" type="text" class="form-control" placeholder="Correo Electronico"'+
                        ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                    ' </div>'+
                ' </div>'+
            ' </div>'+
            '<div class="row">' +
            '   <div class="col">' +
            '       <div class="input-group mb-3">' +
            '            <div class="input-group-prepend">' +
            '                 <span class="input-group-text"' +
            '                     id="basic-addon1">🔐</span>' +
            '            </div>' +
            '            <input value="'+pass+'" id="passTextAdmi" type="text" class="form-control"' +
            '                placeholder="Contraseña" aria-label="Direccion"' +
            '                aria-describedby="basic-addon1">' +
            '        </div>' +
            '     </div>' +
            ' </div>' +     
        ' <div class="row">'+
            ' <div class="col">'+
            ' </div>'+
        ' </div>'+
    ' </div>'+
'<!------------------------->';
}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiCuentCI{
    
    constructor(uss,mac){
        this.uss = uss;
        this.mac = mac;
    }

    async listAdmin(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=cuenC&A=list&mac="+this.mac.replace('.', 'a'))
        .then(response => response.json())
        .catch(Error => {console.log(Error)})
        .then(data => {
            console.log(data);
            if(data.length == 0){
                document.getElementById('contModal').setAttribute("value", 0);
            }else{
                data.forEach(element => {
                    //console.log(element.dni_user);
                    $('#contModal').html(ConfigUser("",element.dni_user,element.nombre,element.telefono,element.correo,"",element.pass));
                    document.getElementById('contModal').setAttribute("value", element.idCliente);
                });
            }
        });
//        $.get( "http://localhost/PhpProjec/api/ApiManager.php?ob=cuenC&A=list&mac="+this.mac, function( data ) {
//          alert('dniClient : '+ data.dni_user);
//        }, "json" );
    }    
}