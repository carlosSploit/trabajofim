
let key='dat';

$(document).ready(principal);

async function principal(){

    //$("#ConternCategoriStore").html(ItenCateg);//instertar una categoria en el contenedor de estore
    //$("#ContstoreProduct").html(ItenProduct);//instertar un producto en el contenedor de estore
    //$("#ConteNavega").html(Navegacion);//instertar un tab de navegacion en el contenedor de estore

    //verifica quien inicio secion por medio del controlador de cuenta y la ip publica

    /*extraer la ip publica de la maquina*/

    $("#contenedor_cuerpo").attr("src","./view/home.html"); //inicializamos el iframe

    if(localStorage.getItem("user")){
        let varOBJ = JSON.parse(localStorage.getItem("user"));
        $('#ucog').show();
        $('#sign').attr("style", 'display: none');
        $('#log').attr("style", 'display: none');

        if(varOBJ.tip == 'A'){ //administrador
            var objApi = new ApiAdministrador(varOBJ.id,"","","","","","");
            objApi.ListAdmin();
        }else{//cliente
            var objApi = new ApiCliente(varOBJ.id,"","","","","","");
            objApi.ListAdmin();
        }

    }else{
        $('#ucog').hide();
        $('#sign').attr("style", 'display: block');
        $('#log').attr("style", 'display: block');
    }
    
    $("#ConfigUsar").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        //$('#contModal').html(ConfigUser);
        $('#tituProduct').html("Configuracion")
        //se da la escucha al boton del actualizar
        $('#actualius').click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
            if(localStorage.getItem("user")){
                let varOBJ = JSON.parse(localStorage.getItem("user"));
                if(varOBJ.tip == 'A'){ //administrador
                    var objApi = new ApiAdministrador(varOBJ.id,"","","","","","");
                    objApi.Update();
                    alert("Actualizado Correctamente");
                }else{//cliente
                    var objApi = new ApiCliente(varOBJ.id,"","","","","","");
                    objApi.Update();
                    alert("Actualizado Correctamente");
                }
        
            }
        });
        $('#infoProducto').modal('show');
    });

    $("#CerrarUsar").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        localStorage.removeItem('user');
        window.location ="index.html";
    });

    
    //$('#contenedor_cuerpo').on('change', function() {
        //console.log('seleccionado man');
    //});
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
                                    ' <input id="dniText" value="'+dni+'" disabled="false" type="text" class="form-control" placeholder="Dni Cliente"'+
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
                                    ' <input id="nomText" value="'+nombre+'" type="text" class="form-control" placeholder="Nombre del Cliente"'+
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
                                        ' <input id="telefText" value="'+telf+'" type="text" class="form-control" placeholder="Telefono del Cliente"'+
                                        ' aria-label="Direccion" aria-describedby="basic-addon1">'+
                                    ' </div>'+
                                ' </div>'+
                            ' </div>'+
                        '</div>'+
                    '<div class="col-5">'+
                        '<div class="text-center">'+
                            '<img id="ImganItenAdmin" src="'+photo+'" style="width: 14vh; height: 14vh;'+
                            '-webkit-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);'+
                            '-moz-box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);'+
                            'box-shadow: 6px 4px 29px -14px rgba(0, 0, 0, 0.75);"'+
                            ' class="rounded" alt="...">'+
                            '</div>'+
                        '<div class="row my-2">'+
                            '<div class="col">'+
                               '<input type="file" id="imgLog" hidden="hidden" accept="image/*""/>' +
                            '   <Label' +
                            '      style="text-align: center; width: 100px; height: 30px;"' +
                            '      id="FothoAdmi" onclick="clickFile()"' +
                            '      class="btn btn-primary btn-block btn-sm mx-auto rounded-pill">Añadir</Label>' +
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
                        ' <input id="correText" value="'+corr+'" type="text" class="form-control" placeholder="Correo Electronico"'+
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
            '            <input id="passText" value="'+pass+'" id="passTextAdmi" type="text" class="form-control"' +
            '                placeholder="Contraseña" aria-label="Direccion"' +
            '                aria-describedby="basic-addon1">' +
            '        </div>' +
            '     </div>' +
            ' </div>' + 
            '<div class="row">' +
            '   <div class="col">' +
            '       <div class="input-group mb-3">' +
            '           <button type="button" id="actualius" type="button" class="btn font-weight-bold rounded-pill col-8 d-flex justify-content-center mx-auto actualius"'+
                          'style="background-color: #546e7a; color: aliceblue">Ingresar' +
            '            Datos</button>' +
            '        </div>' +
            '     </div>' +
            ' </div>' +    
    ' </div>'+
'<!------------------------->';
}

/*escucha del Boton para insertar un file*/
function clickFile() {
    var idchan = '#imgLog';
    var idchankey = 'imgLog';
    $(idchan).click();//obliga un click
    const imgFile = document.getElementById(idchankey);
    imgFile.addEventListener("change",function () {
        const file = this.files[0];
        localStorage.setItem("foto",JSON.stringify(file));
        console.log(file);
        var yave = '#ImganItenAdmin';
        if (file) {
            const render = new FileReader();
            render.addEventListener("load",function (event) {
                console.log(this.result);
                $(yave).attr("src",this.result);
            });
            render.readAsDataURL(file);
        }
    });
}

class ApiCliente{
    
    constructor(id,dni, nombre,correo,telef,foto,pass){
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.corre = correo;
        this.telef = telef;
        this.foto = foto;
        this.pass = pass;
    }

    async ListAdmin(){ // comprueva el login si el cliente con los datos existe
        console.log(this.corre+" "+this.pass);
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=list"
            +"&tip=1"
            +"&uss="+this.id
            +"&pas="+this.pass)
        .then(response => response.json())
        .catch(Error => console.log(Error))
        .then(data => {
            console.log(data);
            if(data.length != 0){
                data.forEach(element => {
                    console.log(element);
                    $('#contModal').html(ConfigUser("",element.dni_user,element.nombre,element.telefono,element.correo,'data:image/jpg;base64,'+element.foto,element.pass));
                    $('#FotPerfilUs').attr("src",'data:image/jpg;base64,'+element.foto);
                });

            }else{
                alert("Archivo no existende");
            }
            //$('#ContenerAdmin').html(html_codeIten);
        }).catch(Error => console.log(Error));
    }

    async Update(){
        var yabidA = this.id;
        var yabdni = '#dniText';
        var yabnom = '#nomText';
        var yabcor = '#correText';
        var yabtel = '#telefText';
        var yabpho = 'imgLog';
        var yabpas = '#passText';
        //se inseran los datos
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=Upd"
        +"&id=" + yabidA
        +"&dni=" + $(yabdni).val()
        +"&nom=" + $(yabnom).val()
        +"&corre=" + $(yabcor).val()
        +"&telef=" + $(yabtel).val()
        +"&foto=" + "default.jpg"
        +"&pass=" + $(yabpas).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));

        /*Inserta la foto en el sistema*/
        if(document.getElementById(yabpho).files[0]==null){
            console.log("No hay pes");
        }else{
            var formData = new FormData();
            formData.append("ob", "clie");
            formData.append("A", "Upd");
            formData.append("id", $(yabdni).val());
            formData.append("foto", document.getElementById(yabpho).files[0]);

            fetch("http://localhost/PhpProjec/apI/ApiManager.php",{
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.success) {
                    console.log(response);
                }else{
                    console.log(response);
                }
                })
            .then(data => {
                data.forEach(element => {
                    console.log(element);
                });
            });
        }

        this.ListAdmin();
        this.ListAdmin();
    }
}

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

    async ListAdmin(){
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list"
                +"&tip=3"
                +"&uss=" + this.id
                +"&pas=" + this.pass)
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                console.log(data);
                data.forEach(element => {
                    $('#contModal').html(ConfigUser(element.idAdministracion,element.dni_user,element.nombre,element.telefono,element.correo,'data:image/jpg;base64,'+element.foto,element.pass));
                    $('#FotPerfilUs').attr("src",'data:image/jpg;base64,'+element.foto);
                });
            }).catch(Error => console.log(Error));
    }

    async Update(){
        var yabidA = this.id;
        var yabdni = '#dniText';
        var yabnom = '#nomText';
        var yabcor = '#correText';
        var yabtel = '#telefText';
        var yabpho = 'imgLog';
        var yabpas = '#passText';
        //Extraer el tipo de administrador para la actualizacion
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list"
                +"&tip=3"
                +"&uss=" + this.id
                +"&pas=" + this.pass)
        .then(response => response.json())
        .catch(Error => console.log(Error))
        .then(data => {
            data.forEach(element => {
                localStorage.setItem(`Tip`,element.TipoAdministrador);
            });
        }).catch(Error => console.log(Error));
        //captura los datos del fetch y lo redirecciona o lo guarda en el tipo de administrador
        //y luego se elimina
        var yabTiA = localStorage.getItem("Tip");
        localStorage.removeItem("Tip");
        //se inseran los datos
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=Upd"
        +"&id=" + yabidA
        +"&dni=" + $(yabdni).val()
        +"&nom=" + $(yabnom).val()
        +"&corre=" + $(yabcor).val()
        +"&telef=" + $(yabtel).val()
        +"&foto=" + "default.jpg"
        +"&pass=" + $(yabpas).val()
        +"&tiptrabajo=" + $(yabTiA).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));


        if(document.getElementById(yabpho).files[0]==null){
            console.log("No hay pes");
        }else{
            /*Inserta la foto en el sistema*/
            var formData = new FormData();
            formData.append("ob", "Admi");
            formData.append("A", "Upd");
            formData.append("id", yabidA);
            formData.append("foto", document.getElementById(yabpho).files[0]);

            fetch("http://localhost/PhpProjec/apI/ApiManager.php",{
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.success) {
                    console.log(response);
                }else{
                    console.log(response);
                }
            })
            .then(data => {
                data.forEach(element => {
                    console.log(element);
                });
            });
        }

        this.ListAdmin();
        this.ListAdmin();
    }
}