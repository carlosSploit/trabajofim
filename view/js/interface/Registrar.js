var Token = "";

$(document).ready(principal);

function principal(){
    
    $("#RegUser").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        var objMesg = new ApiMessege('Carlos Arturo Guerrero','Arturo14212000@gmail.com','El codigo es : ');
        objMesg.sedMessege();
        $('#ModalAler').modal('show');
        $('#ValidCod').click(function (event){
            if(Token == $('#RegCod').val()){

                //ingresa los datos del cliente
                
                var objAd = new ApiCliente("","",$('#RegNom').val(),$('#RegEmai').val(),$('#RegCell').val(),'56565+655+565',$('#RegPass').val());
                objAd.addAdmin();
                $('#RegNom').val("");
                $('#RegEmai').val("");
                $('#RegCell').val("");
                $('#RegPass').val("");

                $('#ModalAler').modal('hide');
            }else{
                $('#RegCod').popover('enable');
                $('#RegCod').popover('show');
            }
        });

        $('#RegCod').focus(Apagar)
        
    });

    function Apagar(){
        $('#RegCod').popover('hide');
        $('#RegCod').popover('disable');
    }

}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiMessege{
    
    constructor(nombre,email,messenge){
        this.nombre = nombre;
        this.email = email;
        this.messenge = messenge;
    }

    async sedMessege(){
        Token = this.getRandomArbitrary(1,999999);
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Mesg&A=inse"
        +"&name="+ this.nombre
        +"&mail="+ this.email
        +"&message="+ this.messenge + Token)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
    }

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
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

    async addAdmin(){
        console.log(this.getRandomArbitrary(1,999999)-this.nombre);
        console.log(this.dni+" "+this.nombre);
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=clie&A=inse"
        +"&dni="+ this.getRandomArbitrary(1,999999)
        +"&nom="+ this.nombre
        +"&corre="+ this.corre
        +"&telef="+ this.telef
        +"&foto=" + this.foto
        +"&pass=" + this.pass)
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        this.ListAdmin();
        this.ListAdmin();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    async ListAdmin(){
        if(this.id == -1){ //prestamos la variable id para poder realizar el listado
            fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=list"
                +"&tip=1"
                +"&uss=sdfsdfds"
                +"&pas=dsfsdf")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                var html_codeIten = "";
                data.forEach(element => {
                    html_codeIten = html_codeIten + ItenAdmin(element.idAdministracion,element.dni_user,element.nombre,element.telefono,element.correo,element.foto,element.pass,element.TipoAdministrador);
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

    async Update(){
        var yabidA = this.id;
        var yabdni = '#dniTextAdmi'+this.id;
        var yabnom = '#nomTextAdmi'+this.id;
        var yabcor = '#correTextAdmi'+this.id;
        var yabtel = '#telefTextAdmi'+this.id;
        var yabpho = '#fotoImgAdmi'+this.id;
        var yabpas = '#passTextAdmi'+this.id;
        var yabTiA = '#tiptrabajoSeletAdmi'+this.id;
        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Admi&A=Upd"
        +"&id=" + yabidA
        +"&dni=" + $(yabdni).val()
        +"&nom=" + $(yabnom).val()
        +"&corre=" + $(yabcor).val()
        +"&telef=" + $(yabtel).val()
        +"&foto=" + "sahdjahdjkahdjkahdjkashdjksa"
        +"&pass=" + $(yabpas).val()
        +"&tiptrabajo=" + $(yabTiA).val())
        .then(response => response.json())
        .then(data => console.log(JSON.parse(data)));
        
        this.ListAdmin();
        this.ListAdmin();
    }
}