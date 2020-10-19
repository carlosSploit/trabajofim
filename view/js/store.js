
$(document).ready(principal);

function principal(){
    $("#Carrito").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        $('#contModal').html(CarritoCompra);
        $('#infoProducto').modal('show');
    });

    $("#456789").click(function (event){ //cuando se precione la opccion de meseng, cambia el contenedor
        $('#contModal').html(Info_Product);
        $('#infoProducto').modal('show');

        //Comportamiento de los botones dentro del modal de producto

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
}


function Info_Product(){
    return '<div class="container">'+
                  '<div class="row">'+
                    '<div class="col-lg-12" style=" width: 100%; height:200px; margin-bottom: 10px;">'+
                      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'+
                        '<ol class="carousel-indicators">'+
                          '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'+ // si se añaden mas imagenes se tendra que añadir mas escuchadores
                          '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'+
                        '</ol>'+
                        '<div class="carousel-inner">'+
                          '<div class="carousel-item active">'+
                            '<img src="resorces/fondolo.jpg" class="d-block w-100" height="200px" alt="...">'+ /*Aqui va ir una de las imagenes del producto*/
                          '</div>'+
                          '<div class="carousel-item">'+
                            '<img src="resorces/fondo_homeprinci.jpg" class="d-block w-100" height="200px" alt="...">'+
                          '</div>'+
                        '</div>'+
                        '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'+
                          '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                          '<span class="sr-only">Previous</span>'+
                        '</a>'+
                        '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'+
                          '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                          '<span class="sr-only">Next</span>'+
                        '</a>'+
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
                          '<h5>Clave de producto 2019 de Microsoft Office Home & Business, código 1, Licencia de Usuario, caja minorista, Compatible con Mac y Windows</h5>'+
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
                              'The .form-group class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in .form-inline as needed. Use it with s, or nearly any other element.'+
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
                                  '<label style="text-align: center; margin-top: 5px; margin-right: 5px; font-size: 20px; line-height: 1.2;" >Disponibles :  50</label>'+
                                '</div>'+
                              '</div>'+
                              ' <div class="col" style=" width: 100%; height: 40px;">'+
                              '  <div class="input-group-append" style="display: flex;justify-items: right; justify-content: right; align-items: flex-end;">'+
                              '    <label Class="text-right" style=" margin-top: 5px; margin-right: 5px; font-size: 20px; line-height: 1.2; text-align: right;" >S/. 4000</label>'+
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
                          '<h5>Valoraciones: 45</h5>'+
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
                                              '<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
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
                                           '<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
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
                                           '<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
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
                                           '<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
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
                                           '<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>'+
                                         '</div>'+
                                        '</div>'+
                                     '</div>'+
                                    '</div>'+
                                  '</div>'+
                             '</div>'+
                             '<div class="col-5" style="display:flex; justify-content: center; justify-items: center; align-items: center;">'+
                                  '<h3 class="text-primary" >5 ★</h3>'+
                             '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<!----- Mandar Mensaje --------->'+
                    '<h5 style="margin-top: 100px;">Mensajes : </h5>'+
                    '<div class="input-group ">'+
                      '<div class="input-group-prepend" >'+
                        '<select class="custom-select" style="width:100px;" id="inputGroupSelect01">'+
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
                        '<input type="text" class="form-control" style="width:33vh;">'+
                        '<button type="button" class="btn btn-primary" >Enviar</button>'+
                      '</div>'+
                    '</div>'+
                    '<!------------------------------>'+
                    '<div class="row">'+
                      '<div class="col-lg-12" style=" width: 100%; height:100px; margin-bottom: 10px;margin-top: 10px;">'+
                        '<div id="mensajesslidig" class="carousel slide col-lg-12" data-ride="carousel">'+
                          '<ol class="carousel-indicators my-1">'+
                            '<li data-target="#mensajesslidig" data-slide-to="0" class="active"></li>'+
                            '<li data-target="#mensajesslidig" data-slide-to="1"></li>'+
                          '</ol>'+
                          '<div class="carousel-inner">'+
                            '<!--      card de mensaje de usuario sobre el producto       --->'+
                            '<div class="carousel-item active" style="height: 100px; display: flex; justify-items: center;align-items: center;">'+
                              
                              '<div class="d-block mx-auto bg-secondary" style="-webkit-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                                                  '-moz-box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                                                  'box-shadow: 5px -1px 30px -9px rgba(0,0,0,0.75);'+
                                                                  'border-radius: 5px; '+
                                                                  'width: 90%; '+
                                                                  'height: 80px;">'+
                                  '<div class="row">'+
                                    '<div class="col-2 mx-5 my-1" style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
                                        '<img style="border-radius: 50%;'+
                                        'width: 40px;'+
                                        'height: 40px;'+
                                        'justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
                                    '</div>'+
                                    '<div class="col-8 my-1 mx-1 scroll" style="margin-left: -20px; height: 70px; display: flex; justify-items: center;align-items: center; overflow: hidden;overflow-y: scroll;">'+
                                       '<h6 style="color: aliceblue;" >★★★★★<br/>El producto se ve interesante pero no es de mi agrado</h6>'+
                                    '</div>'+
                                  '</div>'+
                              '</div>'+
                            '</div>'+
                            '<!------------------------------------------------------------->'+
                            '<!--      card de mensaje de usuario sobre el producto       --->'+
                            '<div class="carousel-item" style="height: 100px; display: flex; justify-items: center;align-items: center;">'+
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
                                    '<div class="col-8 my-1 mx-1 scroll" style="margin-left: -47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKUoverflow-y: scroll;">'+
                                       '<h6 style="color: aliceblue;" >★★★★★<br/>El producto se ve interesante pero no es de mi agrado</h6>'+
                                    '</div>'+
                                  '</div>'+
                              '</div>'+
                            '<!------------------------------------------------------------->'+
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
'         <!--        Card de producto insertado         -->'+
'         <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">'+
'             <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> '+
'              <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'                 <img style="border-radius: 50%;'+
'                 width: 40px;'+
'                 height: 40px;'+
'                 justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
'              </div> '+
'              <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'                 Maquintosh de 3gb de ram con 2 procesaroderes'+
'              </div>'+
'              <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'                 40 Un'+
'              </div>'+
'              <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'                 S/.4500'+
'              </div>'+
'             </div>'+
'         </div>'+
'         <!---------------------------------------------------------------->'+
'         <!--        Card de producto insertado         -->'+
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
'       </div>'+
'       <!---------------------------------------------------------------->'+
'       <!--        Card de producto insertado         -->'+
'       <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">'+
'         <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> '+
'          <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'             <img style="border-radius: 50%;'+
'             width: 40px;'+
'             height: 40px;'+
'             justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
'          </div> '+
'          <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'             Maquintosh de 3gb de ram con 2 procesaroderes'+
'          </div>'+
'          <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'             40 Un'+
'          </div>'+
'          <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'             S/.4500'+
'          </div>'+
'         </div>'+
'     </div>'+
'     <!---------------------------------------------------------------->'+
'     <!--        Card de producto insertado         -->'+
'     <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">'+
'       <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;"> '+
'        <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'           <img style="border-radius: 50%;'+
'           width: 40px;'+
'          height: 40px;'+
'           justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
'        </div> '+
'        <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'           Maquintosh de 3gb de ram con 2 procesaroderes'+
'        </div>'+
'        <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'           40 Un'+
'        </div>'+
'        <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'           S/.4500'+
'        </div>'+
'       </div>'+
'   </div>'+
'   <!---------------------------------------------------------------->'+
'   <!--        Card de producto insertado         -->'+
'   <div class="row col-12 mx-1 my-1" style="width:100%; height: 80px; display: flex; justify-items: center;align-items: center;">'+
'     <div class="row col-lg-12" style="overflow: hidden; border-radius: 20px;">'+ 
'      <div class= "col-2 bg-light" style="border-top-left-radius: 10px ;border-bottom-left-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'         <img style="border-radius: 50%;'+
'         width: 40px;'+
'         height: 40px;'+
'         justify-content: right;" class="mx-auto" src="./resorces/fondolo.jpg" alt="" >'+
'      </div> '+
'      <div class = "col-5 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'         Maquintosh de 3gb de ram con 2 procesaroderes'+
'      </div>'+
'      <div class = "col-2 bg-light"  style="height: 70px; display: flex; justify-items: center;align-items: center;">'+
'         40 Un'+
'      </div>'+
'      <div class = "col-3 bg-light"  style="border-top-right-radius: 10px ;border-bottom-right-radius: 10px ;height: 70px; display: flex; justify-items: center;align-items: center;">'+
'         S/.4500'+
'      </div>'+
'     </div>'+
' </div>'+
' <!---------------------------------------------------------------->'+
'       </div>'+
'     </div>'+
'  </div>'+
'  <div class="row">'+
'     <div class="col">'+
'       <div class="row my-1">'+
'           <select class="custom-select" id="inputGroupSelect01">'+
'            <option selected>Departamento</option>'+
'             <option value="1">One</option>'+
'             <option value="2">Two</option>'+
'             <option value="3">Three</option>'+
'           </select>'+
'       </div>'+
'       <div class="row my-1">'+
'           <select class="custom-select" id="inputGroupSelect01">'+
'             <option selected>Ciudad</option>'+
'             <option value="1">One</option>'+
'             <option value="2">Two</option>'+
'             <option value="3">Three</option>'+
'           </select>'+
'       </div>'+
'       <div class="row my-1">'+
'           <select class="custom-select" id="inputGroupSelect01">'+
'             <option selected>Distrito</option>'+
'             <option value="1">One</option>'+
'             <option value="2">Two</option>'+
'             <option value="3">Three</option>'+
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