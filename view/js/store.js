
$(document).ready(principal);

function principal(){
    $("#Carrito").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        $('#staticBackdrop').modal('show');
    });
}