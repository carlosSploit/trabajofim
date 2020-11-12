
$(document).ready(principal);

function principal(){
    
    var objProdu = new ApiProducto(1,"","","","","","","","","");
    objProdu.List("A",1,"");

    $("#ConternCategoriStore").html(ItenCateg);//instertar una categoria en el contenedor de estore
    //$("#ContstoreProduct").html(ItenProduct);//instertar un producto en el contenedor de estore
    $("#ConteNavega").html(Navegacion);//instertar un tab de navegacion en el contenedor de estore

    $("#Carrito").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        $('#contModal').html(ContentCarritoCompra);
        $('.modal-dialog').attr("style", "position: fixed;margin: auto;width: 500px;height: 100%;right: 0px;");
        $('.modal-content').attr("style", "height: 100%;");
        $('#Encabezaod').attr("style", "background:  #546e7a;");
        $('#TituloModal').html("Insertar Producto");
        $('#TituloModal').attr("style", "color: white;");
        $('.close').attr("style", "color: white;");
        Setprogressbar();
        $('#infoProducto').modal('show');
    });
}

function Navegacion(){
  return '<li class="breadcrumb-item"><a href="#">Gemeral</a></li>'+
  '<!--         card de interface ingresada           --->'+
  '<li class="breadcrumb-item active" aria-current="page">Electrodomesticos</li>';
}

function ItenCateg(){
  return  '<div class="form-check">'+
          '  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>'+
          ' <label class="form-check-label" for="exampleRadios1">'+
          '  👕 Ropa'+
          ' </label>'+
          '</div>';
}

function ItenProduct(id,nombre,Punt,prec){
    return '<!--          card de productos generico            -->'+
  '  <div onclick="Interaccion('+id+')" class="card mx-1 my-1" style="width: 170px; height: 180px; border-radius: 10px; overflow: hidden;">'+
  '     <img class="caratCard mx-auto img-fluid" src="./resorces/fondo_homeprinci.jpg" alt="Card image cap">'+
  '     <div class="mx-2" style="width: 100%; height: auto;"><h6 class="textCard">'+nombre+'</h6></div>'+
  '     <div class="container" style="width: 100%;">'+
  '         <div class="row extencion">'+
  '           <div class="col-sm-6 ContextCarTex">'+
  '             <h6 class="textPunt">'+Punt+" "+'<i class="fas fa-star icon"></i></h6>'+
  '           </div>'+
  '           <div class="col-sm-6 ContextCarTex">'+
  '             <p class="textCoint">S/.'+prec+'</p>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  ' </div>'+
  ' <!------------------------------------------------------>';
}

function Interaccion(id){//cuando se precione la opccion de meseng, cambia el contenedor
  var opa = new ApiProducto();
  opa.List('A',2,id);
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

function Info_Product(id,nombre,descripccion,cantidad,precio,calificacion){
    return '<div class="container">'+
                  '<div class="row">'+
                    '<div class="col-lg-12" style=" width: 100%; height:200px; margin-bottom: 10px;">'+
                      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'+
                        '<ol class="carousel-indicators">'+
                          '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'+ // si se añaden mas imagenes se tendra que añadir mas escuchadores
                        '</ol>'+
                        '<div class="carousel-inner">'+
                          '<div class="carousel-item active">'+
                            '<img src="resorces/fondolo.jpg" class="d-block w-100" height="200px" alt="...">'+ /*Aqui va ir una de las imagenes del producto*/
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<!-- nav de navegacion de informacion y mensajes-->'+
                  '<nav class="nav nav-pills flex-column flex-sm-row">'+
                    '<a class="flex-sm-fill text-sm-center nav-link active"  id="ProductBoton">Product</a>'+
                    '<a class="flex-sm-fill text-sm-center nav-link"  id="MessengerBoton">Messenger</a>'+
                  '</nav>'+
                  '<div id="contCompra">'+
                    '<!-- Nombre del producto del producto -->'+
                    '<div class="row">'+
                      '<div class="col-lg-12" style="overflow: hidden; overflow-y: scroll; width: 100%; height: 50px; margin-top: 10px;">'+
                          '<h5>'+nombre+'</h5>'+
                      '</div>'+
                    '</div>'+
                    '<!-- Descripccion del producto -->'+
                    '<div class="accordion" style="margin-top: 10px;" id="accordionExample">'+
                      '<div class="card">'+
                        '<div class="card-header" style="height: 50px;" id="headingOne">'+
                            '<button class="btn text-left" style="margin-top: -10px;"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
                                'Descripccion : '+
                            '</button>'+
                        '</div>'+
                        '<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">'+
                          '<div class="card-body">'+
                            '<div class="form-group" style="height: 70px; overflow: hidden; overflow-y: scroll;">'+
                                '<h6>'+descripccion+'</h6>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<!------------------------------>'+
                    '<div class="row">'+
                      '<div class="col-lg-12" style=" width: 100%; height: 80px; margin-top: 10px;">'+
                          '<div class="row">'+
                              '<div class="col" style=" width: 100%; height: 40px;">'+
                                '<div class="input-group-append">'+
                                  '<label style="text-align: center; margin-top: 5px; margin-right: 5px; font-size: 20px; line-height: 1.2;" >Disponibles :  '+cantidad+'</label>'+
                                '</div>'+
                              '</div>'+
                              ' <div class="col" style=" width: 100%; height: 40px;">'+
                              '  <div class="input-group-append" style="display: flex;justify-items: right; justify-content: right; align-items: flex-end;">'+
                              '    <label Class="text-right" style=" margin-top: 5px; margin-right: 5px; font-size: 20px; line-height: 1.2; text-align: right;" >S/. '+precio+'</label>'+
                                  '</div>'+
                              '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col" style="display: flex; justify-items: center;align-items: center; width: 100%; height: 40px;">'+
                              '<div class="input-group">'+
                                '<div class="input-group-append">'+
                                  '<label style="text-align: center; margin-top: 5px; margin-right: 5px;" >Cantidad :  </label>'+
                                '</div>'+
                                '<div class="input-group-append">'+
                                  '<input type="number" style="width: 60px;" class="form-control" >'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div class="col" style=" width: 100%; height: 40px;">'+
                              '<button type="button" class="btn btn-primary">Añadir al Carrito</button>'+
                            '</div>'+
                          '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<!----------------------------------------------------------->'+
                  '<!--   barra de navegacion de mensajes     -->'+
                  '<div id="contMeseng" style="display: none;">'+
                    '<!-- Calificacion del producto -->'+
                    '<div class="row">'+
                      '<div class="col-lg-12" style="width: 100%; height: 50px; margin-top: 10px;">'+
                        '<div class="col">'+
                          '<h5 id="CantiComent'+id+'">Valoraciones: 45</h5>'+
                          '<div class="row" style="">'+
                             '<div class="col-7">'+
                                  '<div class="row">'+
                                     '<div class="col">'+
                                        '<div class="row">'+
                                           '<div class="col-3 text-warning">'+
                                            '★'+
                                           '</div>'+
                                           '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                            '<div class="progress" style="width: 90%;">'+
                                              '<div id="estreuno'+id+'" class="progress-bar" role="progressbar" style="width: 5%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">25%</div>'+
                                            '</div>'+
                                           '</div>'+
                                        '</div>'+
                                     '</div>'+
                                  '</div>'+
                                  '<div class="row">'+
                                    '<div class="col">'+
                                      '<div class="row">'+
                                        '<div class="col-3 text-warning">'+
                                         '★★'+
                                        '</div>'+
                                        '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                         '<div class="progress" style="width: 90%;">'+
                                           '<div id="estredos'+id+'" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
                                         '</div>'+
                                        '</div>'+
                                     '</div>'+
                                    '</div>'+
                                 '</div>'+
                                 '<div class="row">'+
                                    '<div class="col">'+
                                      '<div class="row">'+
                                        '<div class="col-3 text-warning">'+
                                         '★★★'+
                                        '</div>'+
                                        '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                         '<div class="progress" style="width: 90%;">'+
                                           '<div id="estretres'+id+'" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
                                         '</div>'+
                                        '</div>'+
                                     '</div>'+
                                    '</div>'+
                                     '</div>'+
                                    '<div class="row">'+
                                    '<div class="col">'+
                                      '<div class="row">'+
                                        '<div class="col-3 text-warning">'+
                                         '★★★★'+
                                        '</div>'+
                                        '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                         '<div class="progress" style="width: 90%;">'+
                                           '<div id="estrecuatro'+id+'" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
                                         '</div>'+
                                        '</div>'+
                                     '</div>'+
                                    '</div>'+
                                  '</div>'+
                                  '<div class="row">'+
                                    '<div class="col" >'+
                                      '<div class="row">'+
                                        '<div class="col-3 text-warning">'+
                                         '★★★★★'+
                                        '</div>'+
                                        '<div class="col-9" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                         '<div class="progress" style="width: 90%;">'+
                                           '<div id="estrecinco'+id+'" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
                                         '</div>'+
                                        '</div>'+
                                     '</div>'+
                                    '</div>'+
                                  '</div>'+
                             '</div>'+
                             '<div class="col-5" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                  '<h3 class="text-primary" >'+calificacion+' ★</h3>'+
                             '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<!----- Mandar Mensaje --------->'+
                    '<h5 style="margin-top: 100px;">Mensajes : </h5>'+
                    '<div class="input-group ">'+
                      '<div class="input-group-prepend" >'+
                        '<select id="Califsle'+id+'" class="custom-select" style="width:100px;" id="inputGroupSelect01">'+
                          '<option selected>Choose...</option>'+
                          '<option value="1">'+
                           ' ★ '+
                          '</option>'+
                          '<option value="2">'+
                            '★★ '+
                          '</option>'+
                          '<option value="3"><h6>'+
                            '★★★'+
                          '</option>'+
                          '<option value="4"><h6>'+
                            '★★★★'+
                          '</option>'+
                          '<option value="5"><h6>'+
                            '★★★★★'+
                          '</option>'+
                        '</select>'+
                        '<input id="MesengProdu'+id+'" type="text" class="form-control" style="width:30vh;">'+
                        '<button onclick="EnviarMs('+id+')" type="button" class="btn btn-primary" >Enviar</button>'+
                      '</div>'+
                    '</div>'+
                    '<!------------------------------>'+
                    '<div class="row">'+
                      '<div class="col-lg-12" style=" width: 100%; height:100px; margin-bottom: 10px;margin-top: 10px;">'+
                        '<div id="mensajesslidig" class="carousel slide col-lg-12" data-ride="carousel">'+
                          '<ol id="ContainerTabsIten'+id+'" class="carousel-indicators my-1">'+
                          '</ol>'+
                          '<div class="carousel-inner" id="ContainerMesseg'+id+'">'+
                          '</div>'+
                          '<a class="carousel-control-prev" href="#mensajesslidig" role="button" data-slide="prev">'+
                            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                            '<span class="sr-only">Previous</span>'+
                          '</a>'+
                          '<a class="carousel-control-next" href="#mensajesslidig" role="button" data-slide="next">'+
                            '<span class="carousel-control-next-icon" aria-hidden="true" ></span>'+
                            '<span class="sr-only">Next</span>'+
                          '</a>'+
                        '</div>'+
                      '</div>'+
                  '</div>'+
                  '<!------------------------------------------------------>'+
                '</div>';
}

function EnviarMs(id) {
  if(localStorage.getItem("user")){
    let varOBJ = JSON.parse(localStorage.getItem("user"));
    var texMesseg = "#MesengProdu"+id;
    var Calififalse = "#Califsle"+id;
    var objComent = new ApiComentProduct(id,varOBJ.id,$(texMesseg).val(),$(Calififalse).val());
    console.log(id+" "+varOBJ.id+" "+$(texMesseg).val()+" "+$(Calififalse).val());
    objComent.insertComent();

    var opa = new ApiProducto();
    opa.List('A',2,id);

    $(texMesseg).val("");
    $(Calififalse).val("1");
    
  }else{
    alert("Porfavor si deseas dar un comentario, primero inicia secion. si no tienes cuenta"
    +"registrate en la cuenta");
  }
}

/*por parte de un bug causado en lo que es la demostracion del mensaje, se coloca primero esta intenface y luego la de abajo como siguiente*/
function productMenssengPri(estrellas,mensaje) {
  return '<!--      card de mensaje de usuario sobre el producto       --->'+
  '<div  class="carousel-item active" style="height: 100px;">'+
    
    '<div class="d-block mx-auto bg-secondary" style="-webkit-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        '-moz-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        'box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        'border-radius: 5px; '+
                                        'width: 90%; '+
                                        'height: 80px;">'+
        '<div class="row ">'+
          '<div class="col-2 mx-5 my-1" style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
              '<img style="border-radius: 50%;'+
              'width: 40px;'+
              'height: 40px;'+
              'justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
          '</div>'+
          '<div class="col-7 my-1 scroll" style="margin-left: -20px; height: 70px; ">'+
             '<h6 style="color: aliceblue;font-size: 13px;" >'+estrellas+'<br/>'+mensaje+'</h6>'+
          '</div>'+
        '</div>'+
    '</div>'+
  '</div>'+
  '<!------------------------------------------------------------->';
}

function productMenssengPri2(estrellas,mensaje) {
  return '<!--      card de mensaje de usuario sobre el producto       --->'+
  '<div  class="carousel-item" style="height: 100px;">'+
    
    '<div class="d-block mx-auto bg-secondary" style="-webkit-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        '-moz-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        'box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                        'border-radius: 5px; '+
                                        'width: 90%; '+
                                        'height: 80px;">'+
        '<div class="row ">'+
          '<div class="col-2 mx-5 my-1" style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
              '<img style="border-radius: 50%;'+
              'width: 40px;'+
              'height: 40px;'+
              'justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
          '</div>'+
          '<div class="col-7 my-1 scroll" style="margin-left: -20px; height: 70px; ">'+
             '<h6 style="color: aliceblue;font-size: 13px;" >'+estrellas+'<br/>'+mensaje+'</h6>'+
          '</div>'+
        '</div>'+
    '</div>'+
  '</div>'+
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
  return '<div class="row">'+
'  <div class="col">'+
'      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">'+
'          <li class="nav-item" role="presentation">'+
'              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"'+
'                  role="tab" aria-controls="pills-home" aria-selected="true">Carrito de Compra</a>'+
'          </li>'+
'          <li class="nav-item" role="presentation">'+
'              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"'+
'                  role="tab" aria-controls="pills-profile" aria-selected="false">Mis pedidos</a>'+
'          </li>'+
'      </ul>'+
'      <div class="tab-content" id="pills-tabContent">'+
'          <div class="tab-pane fade show active" id="pills-home" role="tabpanel"'+
'              aria-labelledby="pills-home-tab">'+
              CarritoCompra()+
'           </div>'+
'          <div class="tab-pane fade" id="pills-profile" role="tabpanel"'+
'             aria-labelledby="pills-profile-tab">'+
              PedidosCont()+
'          </div>'+
'      </div>'+
'  </div>'+
'</div>';
}


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
'       <div style="background:  #eceff1; width: 100%; height: 300px; display: grid;grid-template-columns:100% ; grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
            productCarri()+
            productCarri()+
            productCarri()+
            productCarri()+
'       </div>'+
'     </div>'+
'  </div>'+
'  <div class="row">'+
'     <div class="col">'+
'       <div class="row my-2">'+
'           <select class="custom-select" id="inputGroupSelect01">'+
'            <option selected>Departamento</option>'+
               ProducDepart()+
               ProducDepart()+
               ProducDepart()+
               ProducDepart()+
'           </select>'+
'       </div>'+
'       <div class="row my-1">'+
'           <select class="custom-select" id="inputGroupSelect01">'+
'             <option selected>Ciudad</option>'+
               ProducCity()+
               ProducCity()+
               ProducCity()+
               ProducCity()+
'           </select>'+
'       </div>'+
'       <div class="row my-1">'+
'           <select class="custom-select" id="inputGroupSelect01">'+
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
'               <input type="text" class="form-control" placeholder="Direccion" aria-label="Direccion" aria-describedby="basic-addon1">'+
'             </div>'+
'             <small id="text_mese" class="form-text text-muted">Escriba la direccion donde quiera recibir el paquete..</small>'+
'           </div>'+
'       </div>'+
'     </div>'+
'     <div class="row my-1">'+
'         <div class="col-4">'+
'           <div class="input-group mb-3">'+
'               <div class="input-group-prepend">'+
'                 <span class="input-group-text" id="basic-addon1">📆</span>'+
'               </div>'+
'               <input type="text" class="form-control" placeholder="MM/AA" aria-label="Direccion" aria-describedby="basic-addon1">'+
'             </div>'+
'         </div>'+
'         <div class="col-3">'+
'           <div class="input-group mb-3">'+
'               <div class="input-group-prepend">'+
'                 <span class="input-group-text" id="basic-addon1">🔢</span>'+
'               </div>'+
'               <input type="text" class="form-control" placeholder="CV" aria-label="Direccion" aria-describedby="basic-addon1">'+
'             </div>'+
'         </div>'+
'         <div class="col">'+
'           <div class="input-group mb-3">'+
'               <div class="input-group-prepend">'+
'                 <span class="input-group-text" id="basic-addon1">💳</span>'+
'              </div>'+
'               <input type="text" class="form-control" placeholder="4567 4512 3698 4512" aria-label="Direccion" aria-describedby="basic-addon1">'+
'             </div>'+
'         </div>'+
'     </div>'+
'  </div>'+
'  <div Class="row">'+
'       <button type="button" class="btn btn-primary btn-block">Realizar pedido</button>'+
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
  '            <div class = "col-4 bg-light "  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
  '               Maquintosh de 3gb de ram con 2 procesaroderes'+
  '            </div>'+
  '            <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
  '               40 Un'+
  '            </div>'+
  '            <div class = "col-2 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
  '               S/.4500'+
  '            </div>'+
  '            <div class = "col-2 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
  '              <button type="button" class="btn btn-danger rounded-circle btn-sm" >x</button>'+
  '            </div>'+
  '           </div>'+
  '       </div>';
}


/* contenedor de listado de pedidos teniendo en cuenta que presenta variantes*/

function PedidosCont(){
  return '<div'+
  'style="background:  #eceff1; width: 100%; height: 600px; display: grid;grid-template-columns:100% ;grid-row: 5; ;grid-row-gap: 1px; overflow:scroll;overflow-x: hidden;">'+
  '<div class="accordion" id="accordionExample">'+
      CardPedidoMY()+
      CardPedidoMY()+
      CardPedidoMY()+
  '</div>'+
  '<!------------------------------------>'+
'</div>';
}

function CardPedidoMY() {
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
          CarritoCompraMY()+
          '</div>'+
      '</div>'+
  '</div>'+
  '<!----------------------------------------->';
}

/* codigo directamente extraido de store el cual 
da la informacion del pedido*/
function CarritoCompraMY(){
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
            productCarriMY()+
            productCarriMY()+
            productCarriMY()+
            productCarriMY()+
'       </div>'+
'     </div>'+
'  </div>'+
'  <div class="row">'+
'     <div class="col">'+
'       <div class="row my-1">'+
'           <select disabled class="custom-select" id="inputGroupSelect01">'+
'            <option selected>Departamento</option>'+
              ProducDepartMY()+
              ProducDepartMY()+
              ProducDepartMY()+
              ProducDepartMY()+
'           </select>'+
'       </div>'+
'       <div class="row my-1">'+
'           <select disabled class="custom-select" id="inputGroupSelect01">'+
'             <option selected>Ciudad</option>'+
                ProducCitMY()+
                ProducCitMY()+
                ProducCitMY()+
                ProducCitMY()+
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
'       <div class="row">'+
'              <div class="col">'+
'                  <div class="conteSetP">'+
'                      <ul id="stp-dsjdhj" value="0" class="Setprogressbar padre">'+
'                          <li value="1" class="li-iten-sep hijo">Pedido Recivido</li>'+
'                          <li value="2" class="li-iten-sep hijo">Enviado</li>'+
'                          <li value="3" class="li-iten-sep hijo">Paquete entregado</li>'+
'                      </ul>'+
'                  </div>'+
'              </div>'+
'          </div>'+
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

function ProducDepartMY() {
  return '<option value="1">Piura</option>';
}

function ProducCitMY() {
  return '<option value="1">Piura</option>';
}

function ProducDistMY() {
  return '<option value="1">Piura</option>';  
}

function productCarriMY(){
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

function Setprogressbar(){
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

  async List(user,tipo,nombre){ // se ingresa datos en caso que se quiera listar por distrito o por departamento
      //var aux = new ApiDepart("","");
      switch (user) {
          case "A":
              switch (tipo) {
                  case 2: // se consulta la informacion, producto por producto
                      fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT="+user+"&Tipo="+tipo+"&Nombre="+nombre)
                      .then(response => response.json())
                      .catch(Error => console.log(Error))
                      .then(data => {
                          var html_codeIten = "";
                          data.forEach(element => {
                              console.log(element.Descripcion);
                              
                              $('#contModal').html(Info_Product(element.idproducto,element.Nombre,element.Descripcion,element.Cantidad,element.PrecioV,element.calificacion));

                              var objComent = new ApiComentProduct(element.idproducto,'2');
                              objComent.listarComent();

                              $("#ProductBoton").click(function (event){ //cuando se precione la opccion de Producto, cambia el contenedor
                                  $('#contCompra').show(); // se enciende la vicion de la informaicon del producto 
                                  $('#contMeseng').hide(); // se apaga ka vicion de los mensajes del producto
                                  $("#ProductBoton").attr("class","flex-sm-fill text-sm-center nav-link active");
                                  $("#MessengerBoton").attr("class","flex-sm-fill text-sm-center nav-link ");
                              });

                              $("#MessengerBoton").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
                                  $('#contCompra').hide(); // se apaga la vicion de la inforacion del producto
                                  $('#contMeseng').show(); // se enciende la opccion de los mensajes de producto
                                  $('#ProductBoton').attr("class","flex-sm-fill text-sm-center nav-link");
                                  $('#MessengerBoton').attr("class","flex-sm-fill text-sm-center nav-link active");
                              });
                          });
                      });
                  break;

                  default: // con son varios los caso que se repiten con el mismo metodo se colocara el default
                      fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Prod&A=list&userT="+user+"&Tipo="+tipo+"&Nombre="+nombre)
                      .then(response => response.json())
                      .catch(Error => console.log(Error))
                      .then(data => {
                          var html_codeIten = "";
                          data.forEach(element => {
                              html_codeIten = html_codeIten + ItenProduct(element.idproducto,element.Nombre,element.calificacion,element.PrecioV);
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

class ApiComentProduct{
    constructor(IdProd,idcli,descrip,calif){
      this.IdProd = IdProd;
      this.idcli = idcli;
      this.descrip = descrip;
      this.calif = calif;
  }

  async insertComent(){

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=inse"
    +"&idProd="+this.IdProd
    +"&idClient="+this.idcli
    +"&Descrip="+this.descrip
    +"&Califi="+this.calif)
    .then(response => response.json())
    .then(data => console.log(JSON.parse(data)));

  }

  async listarComent(){

    $('.carousel-control-next').hide();
    $('.carousel-control-prev').hide();

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=list"
    +"&idpo="+this.IdProd
    +"&tip=2")
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        var est1 = "#estreuno"+this.IdProd;
        var est2 = "#estredos"+this.IdProd;
        var est3 = "#estretres"+this.IdProd;
        var est4 = "#estrecuatro"+this.IdProd;
        var est5 = "#estrecinco"+this.IdProd;
        var cani = "#CantiComent"+this.IdProd;
        
        console.log(est1+" "+est2+" "+est3+" "+est4+" "+est5);

        $(est1).html(element.estre1+"%");
        $(est2).html(element.estre2+"%");
        $(est3).html(element.estre3+"%");
        $(est4).html(element.estre4+"%");
        $(est5).html(element.estre5+"%");
        $(cani).html("Cantida de comentarios : "+element.canti);
        

        //document.getElementById(est1).setAttribute('aria-valuenow',element.estre1);
        //$(est1).attr('aria-valuenow',element.estre1);
        $(est1).css("width",((element.estre1 == null)?0:element.estre1)+'%')
        $(est2).css("width",((element.estre2 == null)?0:element.estre2)+'%');
        $(est3).css("width",((element.estre3 == null)?0:element.estre3)+'%');
        $(est4).css("width",((element.estre4 == null)?0:element.estre4)+'%');
        $(est5).css("width",((element.estre5 == null)?0:element.estre5)+'%');

      });
      console.log(data);
    });

    fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=coment&A=list"
    +"&idpo="+this.IdProd
    +"&tip=1")
    .then(response => response.json())
    .then(data => {
      var ctabs = "#ContainerTabsIten"+this.IdProd;
      var cmsgs = "#ContainerMesseg"+this.IdProd;
      var container_tabs = '<li data-target="#mensajesslidig" data-slide-to="0" class="active"></li>';
      var container_messeg = "";
      var cont= 1;

      data.forEach(element => {
        console.log(element);
        if(cont == 1){
          container_messeg = productMenssengPri(this.estrellas(element.califprod,''),element.descripccion);
          $('.carousel-control-next').show();
          $('.carousel-control-prev').show();
        }else{
          container_tabs += '<li data-target="#mensajesslidig" data-slide-to="'+(cont-1)+'"></li>';
          container_messeg += productMenssengPri2(this.estrellas(element.califprod,``),element.descripccion);
        }
        cont++;
      });
      $(ctabs).html(container_tabs);
      $(cmsgs).html(container_messeg);
    });

  }

  estrellas(cantes,estre){
    for (let index = 0; index < cantes; index++) {  
      estre += '★';
    }
    return estre;
  }
}


