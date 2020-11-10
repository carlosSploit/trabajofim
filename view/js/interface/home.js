

$(document).ready(principal);

function principal(){
    
    $("#SetMessege").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        var objMesg = new ApiMessege($('#NameMessege').val(),$('#FromMessege').val(),$('#TeXMessege').val());
        objMesg.sedMessege();
        $('#NameMessege').val("");
        $('#FromMessege').val("");
        $('#TeXMessege').val("");    
    });

}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiMessege{
    
    constructor(nombre,email,messenge){
        this.nombre = nombre;
        this.email = email;
        this.messenge = messenge;
    }

    async sedMessege(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Mesg&A=inse"
        +"&name="+ this.nombre
        +"&mail="+ this.email
        +"&message="+ this.messenge)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
    }
}