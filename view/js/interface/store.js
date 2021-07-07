
$(document).ready(principal);

function principal() {

  var objProdu = new ApiProducto(1, "", "", "", "", "", "", "", "", "");
  objProdu.List("A", 1, "");

  //instertar una categoria en el contenedor de estore
  var objCat = new ApiCategorica("", "", "");
  objCat.ListAdmin();
  //$("#ContstoreProduct").html(ItenProduct);//instertar un producto en el contenedor de estore
  $("#ConteNavega").html(Navegacion(""));  //instertar un tab de navegacion en el contenedor de estore

  $("#Carrito").click(function (event) { //cuando se precione la opccion de sign, cambia el contenedor
    if (localStorage.getItem("user")) {
      $('#contModal').html(ContentCarritoCompra);
      $('.modal-dialog').attr("style", "position: fixed;margin: auto;width: 500px;height: 100%;right: 0px;");
      $('.modal-content').attr("style", "height: 100%;");
      $('#Encabezaod').attr("style", "background:  #546e7a;");
      $('#TituloModal').html("Insertar Producto");
      $('#TituloModal').attr("style", "color: white;");
      $('.close').attr("style", "color: white;");
      Setprogressbar();

      var objCarrit = new ApiCarritoCompra("", "", "");
      objCarrit.listarCarrito();
      //LISTAR LOS PEDIDOS DEL USUARIO
      let varOBJ = JSON.parse(localStorage.getItem("user"));
      var objPedi = new ApiPedido("", "", "");
      objPedi.ListarPedid("C", 1, 0, varOBJ.id, 0);

      $('#infoProducto').modal('show');
    } else {
      alert("Antes de ingresar un producto o ver tus productos insertado o tus perdidos, primero tienes que registarte---");
    }

  });

  //Filtrerbus
  $("#Filtrerbus").click(function (event) { //cuando se precione la opccion de sign, cambia el contenedor
    console.log($("input:radio[name=exampleRadios2]:checked").val());
    console.log($("input:radio[name=exampleRadios1]:checked").val());
    console.log($("input:radio[name=exampleRadios]:checked").val());
    var obj = new ApiProducto("", "", "", "", "", "", "", "", "", "");
    obj.List("C", "", "", $("input:radio[name=exampleRadios1]:checked").val(), $("input:radio[name=exampleRadios2]:checked").val(), $("input:radio[name=exampleRadios]:checked").val());
    if ($("input:radio[name=exampleRadios]:checked").val() == 0) {
      $("#ConteNavega").html(Navegacion(""))
    } else {
      var Stare = new ApiCategorica($("input:radio[name=exampleRadios]:checked").val(), "", "");
      Stare.consultName();
    }

  });

  $("#BrowserIten").keydown(function (event) { //cuando se precione la opccion de sign, cambia el contenedor
    console.log($("input:radio[name=exampleRadios2]:checked").val());
    console.log($("input:radio[name=exampleRadios1]:checked").val());
    console.log($("input:radio[name=exampleRadios]:checked").val());
    var obj = new ApiProducto("", "", "", "", "", "", "", "", "", "");
    obj.List("C", "", $("#BrowserIten").val(), $("input:radio[name=exampleRadios1]:checked").val(), $("input:radio[name=exampleRadios2]:checked").val(), $("input:radio[name=exampleRadios]:checked").val());
  });
}

function Navegacion(nombreCat) {
  return '<li class="breadcrumb-item"><a onclick=Refresh()>Gemeral</a></li>' +
    '<!--         card de interface ingresada           --->' +
    '<li class="breadcrumb-item active" aria-current="page">' + nombreCat + '</li>';
}

function Refresh() {
  var obj = new ApiProducto("", "", "", "", "", "", "", "", "", "");
  obj.List("C", "", '', 0, 0, 0);
  $("#ConteNavega").html(Navegacion(""));
}

function ItenCateg(id, nombre) {
  return '<div class="form-check">' +
    '  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios" value="' + id + '" checked>' +
    ' <label class="form-check-label" for="exampleRadios">' +
    nombre +
    ' </label>' +
    '</div>';
}

function ItenProduct(id, nombre, Punt, prec, foto) {
  return '<!--          card de productos generico            -->' +
    '  <div onclick="Interaccion(' + id + ')" class="card mx-1 my-1" style="width: 170px; height: 180px; border-radius: 10px; overflow: hidden;">' +
    '     <img class="caratCard mx-auto img-fluid" src="' + foto + '" alt="Card image cap">' +
    '     <div class="mx-2" style="width: 100%; height: auto;"><h6 class="textCard">' + nombre + '</h6></div>' +
    '     <div class="container" style="width: 100%;">' +
    '         <div class="row extencion">' +
    '           <div class="col-sm-6 ContextCarTex">' +
    '             <h6 class="textPunt">' + Punt + " " + '<i class="fas fa-star icon"></i></h6>' +
    '           </div>' +
    '           <div class="col-sm-6 ContextCarTex">' +
    '             <p class="textCoint">S/.' + prec + '</p>' +
    '           </div>' +
    '         </div>' +
    '       </div>' +
    ' </div>' +
    ' <!------------------------------------------------------>';
}

function Interaccion(id) {//cuando se precione la opccion de meseng, cambia el contenedor
  var opa = new ApiProducto();
  opa.List('A', 2, id);
  $('.modal-dialog').removeAttr("style");
  $('.modal-content').removeAttr("style");
  $('#Encabezaod').attr("style", "background:  #546e7a;");
  $('#TituloModal').html("Informacion de producto");
  $('#TituloModal').attr("style", "color: white;");
  $('.close').attr("style", "color: white;");
  $('#mensajesslidig').on('slide.bs.carousel', function () {
    console.log('sabeeeeeeeeeeeeeeeeeeee');
  })
  $('#infoProducto').modal('show');
}

function Info_Product(id, nombre, descripccion, cantidad, precio, calificacion, foto) {
  return '<div class="container">' +
    '<div class="row">' +
    '<div class="col-lg-12" style=" width: 100%; height:200px; margin-bottom: 10px;">' +
    '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
    '<ol class="carousel-indicators">' +
    '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' + // si se añaden mas imagenes se tendra que añadir mas escuchadores
    '</ol>' +
    '<div class="carousel-inner">' +
    '<div class="carousel-item active">' +
    '<img src="' + foto + '" class="d-block w-100" height="200px" alt="...">' + /*Aqui va ir una de las imagenes del producto*/
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!-- nav de navegacion de informacion y mensajes-->' +
    '<nav class="nav nav-pills flex-column flex-sm-row">' +
    '<a class="flex-sm-fill text-sm-center nav-link active"  id="ProductBoton">Product</a>' +
    '<a class="flex-sm-fill text-sm-center nav-link"  id="MessengerBoton">Messenger</a>' +
    '</nav>' +
    '<div id="contCompra">' +
    '<!-- Nombre del producto del producto -->' +
    '<div class="row">' +
    '<div class="col-lg-12" style="overflow: hidden; overflow-y: scroll; width: 100%; height: 50px; margin-top: 10px;">' +
    '<h5>' + nombre + '</h5>' +
    '</div>' +
    '</div>' +
    '<!-- Descripccion del producto -->' +
    '<div class="accordion" style="margin-top: 10px;" id="accordionExample">' +
    '<div class="card">' +
    '<div class="card-header" style="height: 50px;" id="headingOne">' +
    '<button class="btn text-left" style="margin-top: -10px;"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
    'Descripccion : ' +
    '</button>' +
    '</div>' +
    '<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">' +
    '<div class="card-body">' +
    '<div class="form-group" style="height: 70px; overflow: hidden; overflow-y: scroll;">' +
    '<h6>' + descripccion + '</h6>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!------------------------------>' +
    '<div class="row">' +
    '<div class="col-lg-12" style=" width: 100%; height: 80px; margin-top: 10px;">' +
    '<div class="row">' +
    '<div class="col" style=" width: 100%; height: 40px;">' +
    '<div class="input-group-append">' +
    '<label style="text-align: center; margin-top: 5px; margin-right: 5px; font-size: 20px; line-height: 1.2;" >Disponibles :  ' + ((cantidad <= 0) ? 'Agotado' : cantidad) + '</label>' +
    '</div>' +
    '</div>' +
    ' <div class="col" style=" width: 100%; height: 40px;">' +
    '  <div class="input-group-append" style="display: flex;justify-items: right; justify-content: right; align-items: flex-end;">' +
    '    <label Class="text-right" style=" margin-top: 5px; margin-right: 5px; font-size: 20px; line-height: 1.2; text-align: right;" >S/. ' + precio + '</label>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col" style="display: flex; justify-items: center;align-items: center; width: 100%; height: 40px;">' +
    '<div class="input-group">' +
    '<div class="input-group-append">' +
    '<label style="text-align: center; margin-top: 5px; margin-right: 5px;" >Cantidad :  </label>' +
    '</div>' +
    '<div class="input-group-append">' +
    '<input ' + ((cantidad <= 0) ? 'disabled' : '') + ' id="CantiInserCar" type="number" style="width: 60px;" class="form-control" >' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="col" style=" width: 100%; height: 40px;">' +
    '<button ' + ((cantidad <= 0) ? '' : 'onclick="inserProductCart(' + id + ')"') + ' type="button" class="btn btn-primary">Añadir al Carrito</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!----------------------------------------------------------->' +
    '<!--   barra de navegacion de mensajes     -->' +
    '<div id="contMeseng" style="display: none;">' +
    '<!-- Calificacion del producto -->' +
    '<div class="row">' +
    '<div class="col-lg-12" style="width: 100%; height: 50px; margin-top: 10px;">' +
    '<div class="col">' +
    '<h5 id="CantiComent' + id + '">Valoraciones: 45</h5>' +
    '<div class="row" style="">' +
    '<div class="col-7">' +
    '<div class="row">' +
    '<div class="col">' +
    '<div class="row">' +
    '<div class="col-3 text-warning">' +
    '★' +
    '</div>' +
    '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">' +
    '<div class="progress" style="width: 90%;">' +
    '<div id="estreuno' + id + '" class="progress-bar" role="progressbar" style="width: 5%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">25%</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col">' +
    '<div class="row">' +
    '<div class="col-3 text-warning">' +
    '★★' +
    '</div>' +
    '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">' +
    '<div class="progress" style="width: 90%;">' +
    '<div id="estredos' + id + '" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col">' +
    '<div class="row">' +
    '<div class="col-3 text-warning">' +
    '★★★' +
    '</div>' +
    '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">' +
    '<div class="progress" style="width: 90%;">' +
    '<div id="estretres' + id + '" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col">' +
    '<div class="row">' +
    '<div class="col-3 text-warning">' +
    '★★★★' +
    '</div>' +
    '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">' +
    '<div class="progress" style="width: 90%;">' +
    '<div id="estrecuatro' + id + '" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col" >' +
    '<div class="row">' +
    '<div class="col-3 text-warning">' +
    '★★★★★' +
    '</div>' +
    '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">' +
    '<div class="progress" style="width: 90%;">' +
    '<div id="estrecinco' + id + '" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="col-5" style="display:flex; justify-content: center; justify-items: center; align-items: center;">' +
    '<h3 class="text-primary" >' + calificacion + ' ★</h3>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!----- Mandar Mensaje --------->' +
    '<h5 style="margin-top: 100px;">Mensajes : </h5>' +
    '<div class="input-group ">' +
    '<div class="input-group-prepend" >' +
    '<select id="Califsle' + id + '" class="custom-select" style="width:100px;" id="inputGroupSelect01">' +
    '<option selected>Choose...</option>' +
    '<option value="1">' +
    ' ★ ' +
    '</option>' +
    '<option value="2">' +
    '★★ ' +
    '</option>' +
    '<option value="3"><h6>' +
    '★★★' +
    '</option>' +
    '<option value="4"><h6>' +
    '★★★★' +
    '</option>' +
    '<option value="5"><h6>' +
    '★★★★★' +
    '</option>' +
    '</select>' +
    '<input id="MesengProdu' + id + '" type="text" class="form-control" style="width:30vh;">' +
    '<button onclick="EnviarMs(' + id + ')" type="button" class="btn btn-primary" >Enviar</button>' +
    '</div>' +
    '</div>' +
    '<!------------------------------>' +
    '<div class="row">' +
    '<div class="col-lg-12" style=" width: 100%; height:100px; margin-bottom: 10px;margin-top: 10px;">' +
    '<div id="mensajesslidig" class="carousel slide col-lg-12" data-ride="carousel">' +
    '<ol id="ContainerTabsIten' + id + '" class="carousel-indicators my-1">' +
    '</ol>' +
    '<div class="carousel-inner" id="ContainerMesseg' + id + '">' +
    '</div>' +
    '<a class="carousel-control-prev" href="#mensajesslidig" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#mensajesslidig" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true" ></span>' +
    '<span class="sr-only">Next</span>' +
    '</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!------------------------------------------------------>' +
    '</div>';
}

function inserProductCart(id) {
  if (localStorage.getItem("user")) {
    let varOBJ = JSON.parse(localStorage.getItem("user"));
    console.log(id);
    var objCarr = new ApiCarritoCompra(varOBJ.id, id, $('#CantiInserCar').val());
    objCarr.insertCarrito();
    $('#CantiInserCar').val("");
  } else {
    alert('Anter de ingrear un producto al carrito, porfavor inicie seccion,,');
  }
}

function EnviarMs(id) {
  if (localStorage.getItem("user")) {
    let varOBJ = JSON.parse(localStorage.getItem("user"));
    var texMesseg = "#MesengProdu" + id;
    var Calififalse = "#Califsle" + id;
    var objComent = new ApiComentProduct(id, varOBJ.id, $(texMesseg).val(), $(Calififalse).val());
    console.log(id + " " + varOBJ.id + " " + $(texMesseg).val() + " " + $(Calififalse).val());
    objComent.insertComent();

    var opa = new ApiProducto();
    opa.List('A', 2, id);

    $(texMesseg).val("");
    $(Calififalse).val("1");

  } else {
    alert("Porfavor si deseas dar un comentario, primero inicia secion. si no tienes cuenta"
      + "registrate en la cuenta");
  }
}

/*por parte de un bug causado en lo que es la demostracion del mensaje, se coloca primero esta intenface y luego la de abajo como siguiente*/
function productMenssengPri(estrellas, mensaje) {
  return '<!--      card de mensaje de usuario sobre el producto       --->' +
    '<div  class="carousel-item active" style="height: 100px;">' +

    '<div class="d-block mx-auto bg-secondary" style="-webkit-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);' +
    '-moz-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);' +
    'box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);' +
    'border-radius: 5px; ' +
    'width: 90%; ' +
    'height: 80px;">' +
    '<div class="row ">' +
    '<div class="col-2 mx-5 my-1" style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '<img style="border-radius: 50%;' +
    'width: 40px;' +
    'height: 40px;' +
    'justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >' +
    '</div>' +
    '<div class="col-7 my-1 scroll" style="margin-left: -20px; height: 70px; ">' +
    '<h6 style="color: aliceblue;font-size: 13px;" >' + estrellas + '<br/>' + mensaje + '</h6>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!------------------------------------------------------------->';
}

function productMenssengPri2(estrellas, mensaje) {
  return '<!--      card de mensaje de usuario sobre el producto       --->' +
    '<div  class="carousel-item" style="height: 100px;">' +

    '<div class="d-block mx-auto bg-secondary" style="-webkit-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);' +
    '-moz-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);' +
    'box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);' +
    'border-radius: 5px; ' +
    'width: 90%; ' +
    'height: 80px;">' +
    '<div class="row ">' +
    '<div class="col-2 mx-5 my-1" style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '<img style="border-radius: 50%;' +
    'width: 40px;' +
    'height: 40px;' +
    'justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >' +
    '</div>' +
    '<div class="col-7 my-1 scroll" style="margin-left: -20px; height: 70px; ">' +
    '<h6 style="color: aliceblue;font-size: 13px;" >' + estrellas + '<br/>' + mensaje + '</h6>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!------------------------------------------------------------->';
}

/*function productMensseng(estrellas,mensaje) {
  return '<!--      card de mensaje de usuario sobre el producto       --->'+
  '<div onLoad="console.log('+'pasando a ->'+');" class="carousel-item" style="height: 100px; ">'+
    '<div class="d-block mx-auto" style="-webkit-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        '-moz-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        'box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        'border-radius: 5px;'+ 
                                        'width: 90%; '+
                                        'height: 80px; '+
                                        'background-color: gray;">'+
        '<div class="row">'+
          '<div class="col-2 mx-4 my-1" style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
              '<img style="border-radius: 50%;'+
              'width: 40px;'+
              'height: 40px;'+
              'justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
          '</div>'+
          '<div class="col-7 my-1 scroll" style="margin-left: -47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKUoverflow-y: scroll;">'+
             '<h6 style="color: aliceblue;font-size: 13px;" >'+estrellas+'<br/>'+mensaje+'</h6>'+
          '</div>'+
        '</div>'+
    '</div>'+
    '</div>'+
  '<!------------------------------------------------------------->';
}

function productMenssengAP(estrellas,mensaje) {
  return '<div class="carousel-item active" style="background-color: gray; height: 200px; display: flex; justify-items: center;align-items: center;">'+
'  <img src="..." class="d-block" alt="...">'+
'  <div class="carousel-caption d-none d-md-block">'+
'    <h5>'+estrellas+'</h5>'+
'    <p>'+mensaje+'</p>'+
'  </div>'+
'</div>';
}

function productMenssengA(estrellas,mensaje) {
  return '<div class="carousel-item" style="background-color: gray; height: 200px; display: flex; justify-items: center;align-items: center;">'+
'  <img src="..." class="d-block " alt="...">'+
'  <div class="carousel-caption d-none d-md-block">'+
'    <h5>'+estrellas+'</h5>'+
'    <p>'+mensaje+'</p>'+
'  </div>'+
'</div>';
}*/

function ContentCarritoCompra() {
  return '<div class="row">' +
    '  <div class="col">' +
    '      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">' +
    '          <li class="nav-item" role="presentation">' +
    '              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"' +
    '                  role="tab" aria-controls="pills-home" aria-selected="true">Carrito de Compra</a>' +
    '          </li>' +
    '          <li class="nav-item" role="presentation">' +
    '              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"' +
    '                  role="tab" aria-controls="pills-profile" aria-selected="false">Mis pedidos</a>' +
    '          </li>' +
    '      </ul>' +
    '      <div class="tab-content" id="pills-tabContent">' +
    '          <div class="tab-pane fade show active" id="pills-home" role="tabpanel"' +
    '              aria-labelledby="pills-home-tab">' +
    CarritoCompra() +
    '           </div>' +
    '          <div class="tab-pane fade" id="pills-profile" role="tabpanel"' +
    '             aria-labelledby="pills-profile-tab">' +
    PedidosCont() +
    '          </div>' +
    '      </div>' +
    '  </div>' +
    '</div>';
}


function CarritoCompra() {
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
    '               <input id="MontoTot" type="text" disabled class="form-control" placeholder="00.0" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '           </div>' +
    '         </div>' +
    '       </div>' +
    '       <div id="ContProduPed" style="background:  #eceff1; width: 100%; height: 300px; display: grid;grid-template-columns:100% ; grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
    productCarri() +
    productCarri() +
    productCarri() +
    productCarri() +
    '       </div>' +
    '     </div>' +
    '  </div>' +
    '  <div class="row">' +
    '     <div class="col">' +
    '       <div class="row my-2">' +
    '           <select id="GeneralListDep" class="custom-select" id="inputGroupSelect01">' +
    ProducDepart() +
    ProducDepart() +
    ProducDepart() +
    ProducDepart() +
    '           </select>' +
    '       </div>' +
    '       <div class="row my-1">' +
    '           <select id="GeneralListCit" class="custom-select" id="inputGroupSelect01">' +
    '             <option selected>Ciudad</option>' +
    ProducCity() +
    ProducCity() +
    ProducCity() +
    ProducCity() +
    '           </select>' +
    '       </div>' +
    '       <div class="row my-1">' +
    '           <select id="GeneralListDis" class="custom-select" id="inputGroupSelect01">' +
    '             <option selected>Distrito</option>' +
    ProducDist() +
    ProducDist() +
    ProducDist() +
    ProducDist() +
    ProducDist() +
    '           </select>' +
    '       </div>' +
    '       <div class="row my-1">' +
    '           <div class="form-group" style="width: 100%;">' +
    '             <div class="input-group">' +
    '               <div class="input-group-prepend">' +
    '                 <span class="input-group-text" id="basic-addon1">🌍</span>' +
    '               </div>' +
    '               <input id="Destinet" type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '             <small id="text_mese" class="form-text text-muted">Escriba la direccion donde quiera recibir el paquete..</small>' +
    '           </div>' +
    '       </div>' +
    '     </div>' +
    '     <div class="row my-1">' +
    '         <div class="col-4">' +
    '           <div class="input-group mb-3">' +
    '               <div class="input-group-prepend">' +
    '                 <span class="input-group-text" id="basic-addon1">📆</span>' +
    '               </div>' +
    '               <input type="text" class="form-control" placeholder="MM/AA" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '         </div>' +
    '         <div class="col-3">' +
    '           <div class="input-group mb-3">' +
    '               <div class="input-group-prepend">' +
    '                 <span class="input-group-text" id="basic-addon1">🔢</span>' +
    '               </div>' +
    '               <input type="text" class="form-control" placeholder="CV" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '         </div>' +
    '         <div class="col">' +
    '           <div class="input-group mb-3">' +
    '               <div class="input-group-prepend">' +
    '                 <span class="input-group-text" id="basic-addon1">💳</span>' +
    '              </div>' +
    '               <input type="text" class="form-control" placeholder="4567 4512 3698 4512" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '         </div>' +
    '     </div>' +
    '  </div>' +
    '  <div Class="row">' +
    '       <button onclick="RealPedid()" type="button" class="btn btn-primary btn-block">Realizar pedido</button>' +
    '  </div>' +
    '</div>';
}

function RealPedid() {
  if (localStorage.getItem("user")) {
    let varOBJ = JSON.parse(localStorage.getItem("user"));
    var objPedi = new ApiPedido(varOBJ.id, $('#GeneralListDis').val(), $('#Destinet').val());
    objPedi.ADDPedido();

    //Actualizar el carrito de compras
    //var objCarrit= new ApiCarritoCompra("","","");
    //objCarrit.listarCarrito();
    //objCarrit.listarCarrito();

    var objPedi = new ApiPedido("", "", "");
    objPedi.ListarPedid("C", 1, 0, varOBJ.id, 0);

    $('#MontoTot').val("");
    $('#Destinet').val("");
    $('#ContProduPed').html("");

    alert('Pedido Realizado correctamente');
  } else {
    alert('Antes de realizar un pedido, porfavor primero ingrese seccion');
  }
}

function ProducDepart(id, nombredep, tip) {
  return '<option value="' + id + '" ' + tip + ' >' + nombredep + '</option>';
}

function ProducCity(id, nombredep) {
  return '<option value="' + id + '">' + nombredep + '</option>';
}

function ProducDist(id, nombredDist) {
  return '<option value="' + id + '">' + nombredDist + '</option>';
}

function productCarri(id, nombre, precio, cantidad, foto) {
  return '<!--        Card de producto insertado         -->' +
    '         <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">' +
    '           <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> ' +
    '            <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '               <img style="border-radius: 50%;' +
    '               width: 40px;' +
    '               height: 40px;' +
    '               justify-content: right;" class="mx-auto" src="' + foto + '" alt="" >' +
    '            </div> ' +
    '            <div class = "col-4 bg-light "  style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
    nombre +
    '            </div>' +
    '            <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '               ' + cantidad + ' Un' +
    '            </div>' +
    '            <div class = "col-2 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '               S/.' + precio + '' +
    '            </div>' +
    '            <div class = "col-2 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '              <button onclick="EliminarCarrit(' + id + ')" type="button" class="btn btn-danger rounded-circle btn-sm" >x</button>' +
    '            </div>' +
    '           </div>' +
    '       </div>';
}

function EliminarCarrit(id) {
  let varOBJ = JSON.parse(localStorage.getItem("user"));
  var objCarr = new ApiCarritoCompra(varOBJ.id, id, "");
  objCarr.delectCarrito();

  var objCarr = new ApiCarritoCompra(varOBJ.id, id, "");
  objCarr.listarCarrito(); //en esta etapa solo los items que estan en el carrito, mas no los pedidos
  /*se vuelve hacer una redundacia de codigo para volver a cargar los prodcutos en casoq ue no se cargen*/
  objCarr.listarCarrito(); //en esta etapa solo los items que estan en el carrito, mas no los pedidos
}

/* contenedor de listado de pedidos teniendo en cuenta que presenta variantes*/

function PedidosCont() {
  return '<div' +
    'style="background:  #eceff1; width: 100%; height: 600px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
    '<div class="accordion" id="ContenedrPedidosItens">' +
    CardPedidoMY() +
    CardPedidoMY() +
    CardPedidoMY() +
    '</div>' +
    '<!------------------------------------>' +
    '</div>';
}

function CardPedidoMY(id, nombre, montoT, depart, city, dis, direc, estd) {
  return '<!-- car del pedido a mostrar--->' +
    '<div class="card my-1">' +
    '<div class="card-header" id="headingOne">' +
    '<h2 class="mb-0">' +
    '<button class="btn btn-link btn-block text-left" type="button"' +
    'data-toggle="collapse" data-target="#collapseOne' + id + '" aria-expanded="true"' +
    'aria-controls="collapseOne' + id + '">' +
    '<div class="row">' +
    '<div class="col-3">' +
    id +
    '</div>' +
    '<div class="col-6">' +
    nombre +
    '</div>' +
    '<div class="col-3">' +
    '    S/.' + montoT + '' +
    '</div>' +
    '</div>' +
    '</button>' +
    '</h2>' +
    '</div>' +
    '<div id="collapseOne' + id + '" class="collapse show" aria-labelledby="headingOne"' +
    'data-parent="#accordionExample">' +
    '<div class="card-body" id="secudContendP">' +
    CarritoCompraMY(id, montoT, depart, city, dis, direc, estd) +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!----------------------------------------->';
}

/* codigo directamente extraido de store el cual 
da la informacion del pedido*/
function CarritoCompraMY(id, montoT, depart, city, dis, direc, estd) {
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
    '               <input value="' + montoT + '" type="text" disabled class="form-control" placeholder="00.0" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '           </div>' +
    '         </div>' +
    '       </div>' +
    '       <div id="containerprodutIten' + id + '" style="background:  #eceff1; width: 100%; height: 250px; display: grid;grid-template-columns:100% ; grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">' +
    '       </div>' +
    '     </div>' +
    '  </div>' +
    '  <div class="row">' +
    '     <div class="col">' +
    '       <div class="row my-1">' +
    '           <select disabled class="custom-select" id="inputGroupSelect01">' +
    '            <option selected>' + depart + '</option>' +
    '           </select>' +
    '       </div>' +
    '       <div class="row my-1">' +
    '           <select disabled class="custom-select" id="inputGroupSelect01">' +
    '             <option selected>' + city + '</option>' +
    '           </select>' +
    '       </div>' +
    '       <div class="row my-1">' +
    '           <select disabled class="custom-select" id="inputGroupSelect01">' +
    '             <option selected>' + dis + '</option>' +
    '           </select>' +
    '       </div>' +
    '       <div class="row my-1">' +
    '           <div class="form-group" style="width: 100%;">' +
    '             <div class="input-group">' +
    '               <div class="input-group-prepend">' +
    '                 <span class="input-group-text" id="basic-addon1">🌍</span>' +
    '               </div>' +
    '               <input value="' + direc + '" disabled type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" aria-describedby="basic-addon1">' +
    '             </div>' +
    '           </div>' +
    '       </div>' +
    '       <div class="row">' +
    '              <div class="col">' +
    '                  <div class="conteSetP">' +
    '                      <ul id="stp-dsjdhj" value="0" class="Setprogressbar padre">' +
    '<li value="1" class="li-iten-sep hijo ' + ((estd > 0) ? 'active' : '') + '">Pedido Recivido</li>' +
    '<li value="2" class="li-iten-sep hijo ' + ((estd > 1) ? 'active' : '') + '">Enviado</li>' +
    '<li value="3" class="li-iten-sep hijo ' + ((estd > 2) ? 'active' : '') + '">Paquete entregado</li>' +
    '                      </ul>' +
    '                  </div>' +
    '              </div>' +
    '          </div>' +
    '       <div class="row my-1">' +
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

function ProducDepartMY() {
  return '<option value="1">Piura</option>';
}

function ProducCitMY() {
  return '<option value="1">Piura</option>';
}

function ProducDistMY() {
  return '<option value="1">Piura</option>';
}

function productCarriMY(photo, nombre, canti, monto) {
  return '<!--        Card de producto insertado         -->' +
    '         <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">' +
    '           <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> ' +
    '            <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '               <img style="border-radius: 50%;' +
    '               width: 40px;' +
    '               height: 40px;' +
    '               justify-content: right;" class="mx-auto" src="' + photo + '" alt="" >' +
    '            </div> ' +
    '            <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
    nombre +
    '            </div>' +
    '            <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '               ' + canti + ' Un' +
    '            </div>' +
    '            <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">' +
    '               S/.' + monto + '' +
    '            </div>' +
    '           </div>' +
    '       </div>';
}

function Setprogressbar() {
  var hijos = document.querySelectorAll("div.conteSetP > ul.padre > li.hijo");
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


/* contenedor de fecht para el Ciudad, interactuara con la api*/
/*Se replica la clase teniendo en cuenta que las funcionabilidades a usar van a ser distintas 
pero conservando casi la misma funcionabilidad,esto quiere decir que en almacen y en store
se pueden dar algunas funciones repetidas y otras nuevas dependiendo de la clase*/

class ApiProducto {

  constructor(IdProd, CodProd, IdProve, IdTipo, Nom, Descri, Cantid, PreC, PreV, Photo) {
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

  async List(user, tipo, nombre, punt, coins, cat) { // se ingresa datos en caso que se quiera listar por distrito o por departamento
    //var aux = new ApiDepart("","");
    switch (user) {
      case "A":
        switch (tipo) {
          case 2: // se consulta la informacion, producto por producto
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT=" + user + "&Tipo=" + tipo + "&Nombre=" + nombre + "&punt=a&coins=a&cat=a")
              .then(response => response.json())
              .catch(Error => console.log(Error))
              .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                  console.log(element.Descripcion);

                  $('#contModal').html(Info_Product(element.idproducto, element.Nombre, element.Descripcion, element.Cantidad, element.PrecioV, element.calificacion, 'data:image/jpg;base64,' + element.foto));

                  var objComent = new ApiComentProduct(element.idproducto, '2');
                  objComent.listarComent();

                  $("#ProductBoton").click(function (event) { //cuando se precione la opccion de Producto, cambia el contenedor
                    $('#contCompra').show(); // se enciende la vicion de la informaicon del producto 
                    $('#contMeseng').hide(); // se apaga ka vicion de los mensajes del producto
                    $("#ProductBoton").attr("class", "flex-sm-fill text-sm-center nav-link active");
                    $("#MessengerBoton").attr("class", "flex-sm-fill text-sm-center nav-link ");
                  });

                  $("#MessengerBoton").click(function (event) { //cuando se precione la opccion de meseng, cambia el contenedor
                    $('#contCompra').hide(); // se apaga la vicion de la inforacion del producto
                    $('#contMeseng').show(); // se enciende la opccion de los mensajes de producto
                    $('#ProductBoton').attr("class", "flex-sm-fill text-sm-center nav-link");
                    $('#MessengerBoton').attr("class", "flex-sm-fill text-sm-center nav-link active");
                  });
                });
              });
            break;

          default: // con son varios los caso que se repiten con el mismo metodo se colocara el default
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT=" + user + "&Tipo=" + tipo + "&Nombre=" + nombre + "&punt=a&coins=a&cat=a")
              .then(response => response.json())
              .catch(Error => console.log(Error))
              .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                  var nomb = element.Nombre.substring(0, 40);
                  console.log(nomb);
                  html_codeIten = html_codeIten + ItenProduct(element.idproducto, nomb, element.calificacion, element.PrecioV, 'data:image/jpg;base64,' + element.foto);
                  //console.log(element.idproducto+" "+element.Nombre+" "+element.calificacion+" "+element.PrecioV);
                });
                $('#ContstoreProduct').html(html_codeIten);
              });
            break;
        }
        break;
      case "C":
        switch (tipo) {

          default: // con son varios los caso que se repiten con el mismo metodo se colocara el default
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT=" + user + "&Tipo=" + tipo + "&Nombre=" + nombre + "&punt=" + punt + "&coins=" + coins + "&cat=" + cat)
              .then(response => response.json())
              .catch(Error => console.log(Error))
              .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                  var nomb = element.Nombre.substring(0, 40);
                  console.log(element.Nombre);
                  html_codeIten = html_codeIten + ItenProduct(element.idproducto, nomb, element.calificacion, element.PrecioV, 'data:image/jpg;base64,' + element.foto);
                  //console.log(element.idproducto+" "+element.Nombre+" "+element.calificacion+" "+element.PrecioV);
                });
                $('#ContstoreProduct').html(html_codeIten);
              });
            break;
        }
        break;
      default:
        break;
    }
  }
}

class ApiComentProduct {
  constructor(IdProd, idcli, descrip, calif) {
    this.IdProd = IdProd;
    this.idcli = idcli;
    this.descrip = descrip;
    this.calif = calif;
  }

  async insertComent() {

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=inse"
      + "&idProd=" + this.IdProd
      + "&idClient=" + this.idcli
      + "&Descrip=" + this.descrip
      + "&Califi=" + this.calif)
      .then(response => response.json())
      .then(data => console.log(JSON.parse(data)));

  }

  async listarComent() {

    $('.carousel-control-next').hide();
    $('.carousel-control-prev').hide();

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=list"
      + "&idpo=" + this.IdProd
      + "&tip=2")
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          var est1 = "#estreuno" + this.IdProd;
          var est2 = "#estredos" + this.IdProd;
          var est3 = "#estretres" + this.IdProd;
          var est4 = "#estrecuatro" + this.IdProd;
          var est5 = "#estrecinco" + this.IdProd;
          var cani = "#CantiComent" + this.IdProd;

          console.log(est1 + " " + est2 + " " + est3 + " " + est4 + " " + est5);

          $(est1).html(element.estre1 + "%");
          $(est2).html(element.estre2 + "%");
          $(est3).html(element.estre3 + "%");
          $(est4).html(element.estre4 + "%");
          $(est5).html(element.estre5 + "%");
          $(cani).html("Cantida de comentarios : " + element.canti);


          //document.getElementById(est1).setAttribute('aria-valuenow',element.estre1);
          //$(est1).attr('aria-valuenow',element.estre1);
          $(est1).css("width", ((element.estre1 == null) ? 0 : element.estre1) + '%')
          $(est2).css("width", ((element.estre2 == null) ? 0 : element.estre2) + '%');
          $(est3).css("width", ((element.estre3 == null) ? 0 : element.estre3) + '%');
          $(est4).css("width", ((element.estre4 == null) ? 0 : element.estre4) + '%');
          $(est5).css("width", ((element.estre5 == null) ? 0 : element.estre5) + '%');

        });
        console.log(data);
      });

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=list"
      + "&idpo=" + this.IdProd
      + "&tip=1")
      .then(response => response.json())
      .then(data => {
        var ctabs = "#ContainerTabsIten" + this.IdProd;
        var cmsgs = "#ContainerMesseg" + this.IdProd;
        var container_tabs = '<li data-target="#mensajesslidig" data-slide-to="0" class="active"></li>';
        var container_messeg = "";
        var cont = 1;

        data.forEach(element => {
          console.log(element);
          if (cont == 1) {
            container_messeg = productMenssengPri(this.estrellas(element.califprod, ''), element.descripccion);
            $('.carousel-control-next').show();
            $('.carousel-control-prev').show();
          } else {
            container_tabs += '<li data-target="#mensajesslidig" data-slide-to="' + (cont - 1) + '"></li>';
            container_messeg += productMenssengPri2(this.estrellas(element.califprod, ``), element.descripccion);
          }
          cont++;
        });
        $(ctabs).html(container_tabs);
        $(cmsgs).html(container_messeg);
      });

  }

  estrellas(cantes, estre) {
    for (let index = 0; index < cantes; index++) {
      estre += '★';
    }
    return estre;
  }
}


class ApiCarritoCompra {
  constructor(Idclien, idProd, canti) {
    this.IdProd = idProd;
    this.Idclien = Idclien;
    this.canti = canti;
  }

  async insertCarrito() {

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=inse"
      + "&idUser=" + this.Idclien
      + "&idProd=" + this.IdProd
      + "&cantidad=" + this.canti)
      .then(response => response.json())
      .then(data => console.log(JSON.parse(data)));

  }

  async listarCarrito() {
    let varOBJ = JSON.parse(localStorage.getItem("user"));
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=list"
      + "&id=" + varOBJ.id)
      .then(response => response.json())
      .then(data => {
        var conten_Items = "";
        var monto = 0;
        data.forEach(element => {
          conten_Items += productCarri(element.idproducto, element.Nombre, element.PrecioV, element.cantidad, 'data:image/jpg;base64,' + element.foto);
          $('#MontoTot').val(element.montT);
        });
        //  listar los departamentos dentro del carrito
        var objdep = new ApiDepartCar("", "");
        objdep.List();

        /*Eventos de relistado en caso de una seleccion*/
        $('#GeneralListDep').change(function (event) {
          var objCit = new ApiCiudadCar("", $('#GeneralListDep').val(), "");
          objCit.List();
        });

        $('#GeneralListCit').change(function (event) {
          console.log($('#GeneralListCit').val());
          var objCit = new ApiDistritoCar("", $('#GeneralListCit').val(), "");
          objCit.List();
        });
        /*----------------------------------------------*/
        $('#ContProduPed').html(conten_Items);
        console.log(data);
      });

  }

  async delectCarrito() {

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=carritC&A=delet"
      + "&idUser=" + this.Idclien
      + "&idProd=" + this.IdProd)
      .then(response => response.json())
      .then(data => console.log(JSON.parse(data)));
    this.listarCarrito();
    this.listarCarrito();
  }
}


/* contenedor de fecht para el Depart, interactuara con la api*/

class ApiDepartCar {

  constructor(id, nombre) {
    this.id = id;
    this.Nombre_Dep = nombre;
  }

  async List() {//sirve para en caso que se quiera insertar un tipo de dato, se inyecte por la variable del contenedor
    //dat_constant = dat_constant.substring(1,dat_constant.length);
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=depart&A=list", { method: 'GET' })
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
        $('#GeneralListDep').html(""); //se elimina todo el contenido que tenga dentro el contenedor para evitar designaciones en falso
        var html_codeListp = "";
        var Bad = 0; //usado para saber si se usa primero

        data.forEach(element => {
          if (Bad == 0) {
            html_codeListp = html_codeListp + ProducDepart(element.IdDepartamento, element.NombreDepart, "selected");
            /*--------- Inicializar los distritos --------------*/
            //  listar los distritos dentro del carrito
            //  listar los ciudad dentro del carrito
            var objCit = new ApiCiudadCar("", element.IdDepartamento, "");
            objCit.List();
            /*--------------------------------------------------*/
          } else {
            html_codeListp = html_codeListp + ProducDepart(element.IdDepartamento, element.NombreDepart, "");
          }
          Bad++;
        });
        $('#GeneralListDep').html(html_codeListp); //imprime al contenedor del distrito

      }).catch(Error => console.log(Error));
  }
}

class ApiCiudadCar {

  constructor(id, idDep, nombre) {
    this.id = id;
    this.idDepart = idDep;
    this.Nombre_ciu = nombre;
  }

  async List() { // se ingresa datos en caso que se quiera listar por distrito o por departamento
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Ciu&A=list&idDep=" + this.idDepart)
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
        var html_codeList = "";
        var Bad = 0; //usado para saber si se usa primero
        data.forEach(element => {
          if (Bad == 0) {
            html_codeList = html_codeList + ProducCity(element.IdCiudad, element.NombreCiudad);
            /*--------- Inicializar los distritos --------------*/
            //  listar los distritos dentro del carrito
            var objCit = new ApiDistritoCar("", element.IdCiudad, "");
            objCit.List();
            /*--------------------------------------------------*/
          } else {
            html_codeList = html_codeList + ProducCity(element.IdCiudad, element.NombreCiudad);
          }
          Bad++;
        });
        $('#GeneralListCit').html(html_codeList);

      }).catch(Error => console.log(Error));
  }
}

class ApiDistritoCar {

  constructor(id, idciu, nombre) {
    this.id = id;
    this.idCiudad = idciu;
    this.Nombre_dis = nombre;
  }

  async List() {
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Distr&A=list&idCI=" + this.idCiudad)
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
        var html_codeIten = "";
        console.log(this.idCiudad);
        console.log(data);
        data.forEach(element => {
          console.log(element);
          html_codeIten = html_codeIten + ProducDist(element.idDistrito, element.nombreDistrito);
        });
        $('#GeneralListDis').html(html_codeIten);
      }).catch(Error => console.log(Error));
  }

}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiCategorica {

  constructor(id, icono, nombre) {
    this.id = id;
    this.icono = icono;
    this.nombre = nombre;
  }

  async ListAdmin() {
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=list")
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
        console.log(data);
        var html_codeIten = ItenCateg(0, "All");
        data.forEach(element => {
          console.log(element);
          html_codeIten = html_codeIten + ItenCateg(element.idTipo, this.ListIncont(element.nombreTipo.charAt(0)) + " " + element.nombreTipo.substring(1, element.nombreTipo.length));
        });
        $("#ConternCategoriStore").html(html_codeIten);
      }).catch(Error => console.log(Error));
  }
  //se aprobecha el metodo de lestado para crear un metodo de consulta
  async consultName() {
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=CatProd&A=list")
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
        console.log(data);
        var html_codeIten = "";
        data.forEach(element => {
          if (element.idTipo == this.id) {
            html_codeIten = html_codeIten + Navegacion(element.nombreTipo.substring(1, element.nombreTipo.length));
          }
        });
        $("#ConteNavega").html(html_codeIten);
      }).catch(Error => console.log(Error));
  }

  ListIncont(cod) {

    if (cod == 1) { return "👕"; }
    if (cod == 2) { return "👟"; }
    if (cod == 3) { return "👞"; }
    if (cod == 4) { return "👖"; }
    if (cod == 5) { return "💻"; }
    if (cod == 6) { return "📱"; }
    if (cod == 7) { return "🔫"; }
    if (cod == 8) { return "👙"; }
    if (cod == 9) { return "🎮"; }
    if (cod == 10) { return "🎸"; }
    if (cod == 11) { return "♟"; }
  }
}

class ApiPedido {

  constructor(idClient, idDist, Direccio) {
    this.idClient = idClient;
    this.idDist = idDist;
    this.Direccio = Direccio;
  }

  async ADDPedido() {
    console.log("Insertadaso pes tilin como tiene que cher");
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=inse"
      + "&idCli=" + this.idClient
      + "&idDis=" + this.idDist
      + "&direccion=" + this.Direccio)
      .then(response => response.json())
      .then(data => {
      });
    setTimeout("MandarMesseng()", 2000); //tiempo expresado en milisegundos
  }

  async ListarPedid(tip, fil, id, idcli, filgeneral) {
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=list"
      + "&tip=" + tip
      + "&fil=" + fil
      + "&id=" + id
      + "&iclien=" + idcli
      + "&filGene=" + filgeneral)
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {

        var html_codeIten = "";
        data.forEach(element => {
          //console.log(element);    
          html_codeIten = html_codeIten + CardPedidoMY(element.idpedido, element.NombreCiudad + "/" + element.nombreDistrito + "  " + element.FechaVenta, element.montoT, element.NombreDepart, element.NombreCiudad, element.nombreDistrito, element.direccion, element.estado);
        });
        $("#ContenedrPedidosItens").html(html_codeIten);

        /*insertar los productos*/
        data.forEach(element => {
          //console.log(element);
          fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=pedid&A=list"
            + "&tip=" + tip
            + "&fil=0"
            + "&id=" + element.idpedido
            + "&iclien=" + idcli
            + "&filGene=0")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
              var html_codeItenLis = "";
              var codYabe = "#containerprodutIten" + element.idpedido;
              data.forEach(Iten => {
                //console.log(element);    
                html_codeItenLis = html_codeItenLis + productCarriMY('data:image/jpg;base64,' + Iten.foto, Iten.Nombre, Iten.canti, Iten.PrecioV);
              });
              $(codYabe).html(html_codeItenLis);
            }).catch(Error => console.log(Error));
        });
      }).catch(Error => console.log(Error));
  }
}
/*Realiza el proceso del envio del correo al usuario*/

function MandarMesseng() {
  if (localStorage.getItem("user")) {
    let varOBJ = JSON.parse(localStorage.getItem("user"));
    var objApi = new ApiCliente(varOBJ.id, "", "", "", "", "", "");
    objApi.ListAdmin();
  }
}

//carga informacion casica del cliente para rellenar algunos datos para el envio de su correro
class ApiCliente {

  constructor(id, dni, nombre, correo, telef, foto, pass) {
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.corre = correo;
    this.telef = telef;
    this.foto = foto;
    this.pass = pass;
  }

  async ListAdmin() { // comprueva el login si el cliente con los datos existe
    console.log(this.corre + " " + this.pass);
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=list"
      + "&tip=1"
      + "&uss=" + this.id
      + "&pas=" + this.pass)
      .then(response => response.json())
      .catch(Error => console.log(Error))
      .then(data => {
        console.log(data);
        if (data.length != 0) {
          data.forEach(element => {
            //$('#contModal').html(ConfigUser("",element.dni_user,element.nombre,element.telefono,element.correo,"",element.pass));
            var messeng = new ApiMessege(element.nombre, element.correo, "", this.id);
            messeng.sedMessege();
          });

        } else {
          alert("Archivo no existende");
        }
        //$('#ContenerAdmin').html(html_codeIten);
      }).catch(Error => console.log(Error));
  }
}

//Enviar el mensaje de comprovacion de la voleta
class ApiMessege {

  constructor(nombre, email, messenge, cli) {
    this.nombre = nombre;
    this.email = email;
    this.messenge = messenge;
    this.idClient = cli;
  }

  async sedMessege() {
    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Mesg&A=inse"
      + "&tipm=3"
      + "&name=" + this.nombre
      + "&mail=" + this.email
      + "&message=ad"
      + "&mailD=2&iclien=" + this.idClient)
      .then(response => response.json())
      .then(data => console.log(JSON.parse(data)));
  }
}



