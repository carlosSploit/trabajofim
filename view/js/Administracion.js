$(document).ready(principal);

function principal(){
    $("#NewProdut").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        //$('#contModal').html(CarritoCompra);
        $('#ModalContainer').modal('show');
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