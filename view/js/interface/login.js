

$(document).ready(principal);

fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                console.log(data.ip);
            }).catch(Error => console.log(Error));


function principal(){
    
    $("#UserLogin").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        
        if($("#TextEmail").val().indexOf("@")!= -1){
            var obj = new ApiCliente(-1,"","",$("#TextEmail").val(),"","",$("#TextPass").val());
            obj.ListAdmin();
            console.log($("#TextEmail").val()+" "+$("#TextPass").val());
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
        console.log(this.corre+" "+this.pass);
        if(this.id == -1){ //prestamos la variable id para poder realizar el listado
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=list"
                +"&tip=2"
                +"&uss="+this.corre
                +"&pas="+this.pass)
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                if(data.length != 0){
                    alert("Archivo si existende");
                    data.forEach(element => {
                        window.location ="../index.html";
                        console.log("Extrayendo datos");
                        //html_codeIten = html_codeIten + ItenAdmin(element.idAdministracion,element.dni_user,element.nombre,element.telefono,element.correo,element.foto,element.pass,element.TipoAdministrador);
                    });
                }else{
                    alert("Archivo no existende");
                }
                //$('#ContenerAdmin').html(html_codeIten);
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