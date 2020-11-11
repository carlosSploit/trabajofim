

$(document).ready(principal);

function principal(){
    
    $("#SetMessege").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        var objMesg = new ApiMessege($('#NameMessege').val(),$('#FromMessege').val(),$('#TeXMessege').val());
        objMesg.sedMessege();
        $('#NameMessege').val("");
        $('#FromMessege').val("");
        $('#TeXMessege').val("");    
    });

    $("#Mytrabajo").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        window.scroll({
            top: 967,
            left:967,
            behavior: 'smooth'
          });    
    });

    $("#contac").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        window.scroll({
            top: 2435,
            left:967,
            behavior: 'smooth'
          });    
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
        +"&message="+ this.messenge
        +"&mailD=1")
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
    }
}