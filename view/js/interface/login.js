

$(document).ready(principal);


function principal(){
    
    $("#UserLogin").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        
        if($("#TextEmail").val().indexOf("@")!= -1){
            var obj = new ApiCliente(-1,"","",$("#TextEmail").val(),"","",$("#TextPass").val());
            obj.ListAdmin();
            console.log($("#TextEmail").val()+" "+$("#TextPass").val());
        }else{
            var obj = new ApiAdministrador(-1,$("#TextEmail").val(),"","","","",$("#TextPass").val());
            obj.ListAdmin();
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
                    data.forEach(element => {
                        /*SE carga la informacion en cache*/
                            let cont={
                                id: element.idCliente,
                                tip: 'C'
                            };
                            localStorage.setItem("user",JSON.stringify(cont));
                            
                            alert("Bienvenido. porfavor espere un momento");
                            setTimeout ("redireccionar()", 2000); //tiempo expresado en milisegundos
                    });

                }else{
                    alert("Archivo no existende");
                }
                //$('#ContenerAdmin').html(html_codeIten);
            }).catch(Error => console.log(Error));
        }
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
        if(this.id == -1){ //prestamos la variable id para poder realizar el listado
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list"
                +"&tip=2"
                +"&uss=" + this.dni
                +"&pas=" + this.pass)
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                console.log(data);
                data.forEach(element => {
                    let cont={
                        id: element.idAdministracion,
                        tip: 'A'
                    };
                    localStorage.setItem("user",JSON.stringify(cont));
                    
                    alert("Bienvenido. porfavor espere un momento");
                    setTimeout ("redireccionar()", 2000); //tiempo expresado en milisegundos
                });
            }).catch(Error => console.log(Error));
        }
    }
}


function redireccionar(){
    window.parent.window.location.href = "../index.html";
} 
  
