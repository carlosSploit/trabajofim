
$(document).ready(principal);

function principal(){
    
    $("#UserLogin").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        
        if($("#TextEmail").val().indexOf("@")!= -1){
            alert("Correo");
        }else{
            alert("cdigo");
        }
        
    });

}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
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
        if(this.id == -1){ //prestamos la variable id para poder realizar el listado
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list"
                +"&tip=2"
                +"&uss=sdfsdfds"
                +"&pas=dsfsdf")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                    //html_codeIten = html_codeIten + ItenAdmin(element.idAdministracion,element.dni_user,element.nombre,element.telefono,element.correo,element.foto,element.pass,element.TipoAdministrador);
                });
                $('#ContenerAdmin').html(html_codeIten);
            }).catch(Error => console.log(Error));
        }
    }


    async delect(){
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=delet&id="+this.id)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }
}