var Token = "";

$(document).ready(principal);
var urlbase = "http://localhost/PhpProjec/";
function principal() {

    $("#RegUser").click(function (event) { //cuando se precione la opccion de sign, cambia el contenedor
        /*Envia mensajes de token validando si es su cuenta o no, o si la cuenta es valida....*/
        /*validaciones para saber si un cliente ya esta susbscrito*/
        if (($('#RegNom').val() != "") && ($('#RegEmai').val() != "")) {

            /*En caso que aya susedido un error se suspende el mensaje de error*/
            $('#RegNom').attr("class", "form-control my-1 p-3");
            $('#RegEmai').attr("class", "form-control my-1 p-3");

            /*validad si la cuenta ya existe o no en caso que se requiera*/
            var objAd = new ApiCliente("", "", "", $('#RegEmai').val(), "", '56565+655+565', "");
            objAd.ListAdmin(); /*extraera un dat0o en el localstore llamado valid para saber si existe*/

            if (!localStorage.getItem("valid")) {
                localStorage.removeItem("valid"); // para otras inserciones en una misma pc se evita los errores eliminando el iten en caso exista
                var objMesg = new ApiMessege($('#RegNom').val(), $('#RegEmai').val(), '');
                objMesg.sedMessege();

                $('#ModalAler').modal('show');
                $('#ValidCod').click(function (event) {
                    if (Token == $('#RegCod').val()) {

                        //ingresa los datos del cliente
                        var objAd = new ApiCliente("", "", $('#RegNom').val(), $('#RegEmai').val(), $('#RegCell').val(), '56565+655+565', $('#RegPass').val());
                        objAd.addAdmin();
                        $('#RegNom').val("");
                        $('#RegEmai').val("");
                        $('#RegCell').val("");
                        $('#RegPass').val("");

                        $('#ModalAler').modal('hide');
                    } else {
                        $('#RegCod').popover('enable');
                        $('#RegCod').popover('show');
                    }
                });
                $('#RegCod').focus(Apagar);
            } else {
                $('#RegEmai').attr("class", "form-control my-1 p-3 is-invalid");
                localStorage.removeItem("valid"); // para otras inserciones en una misma pc se evita los errores eliminando el iten en caso exista
            }
        } else {
            /*validaciones por casillas.......*/
            if ($('#RegNom').val() == "") {
                $('#RegNom').attr("class", "form-control my-1 p-3 is-invalid");
            }

            if ($('#RegEmai').val() == "") {
                $('#RegEmai').attr("class", "form-control my-1 p-3 is-invalid");
            }
        }

    });

    function Apagar() {
        $('#RegCod').popover('hide');
        $('#RegCod').popover('disable');
    }

}

/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiMessege {

    constructor(nombre, email, messenge) {
        this.nombre = nombre;
        this.email = email;
        this.messenge = messenge;
    }

    async sedMessege() {
        Token = this.getRandomArbitrary(1, 999999);
        fetch(urlbase + "api/ApiManager.php?ob=Mesg&A=inse"
            + "&tipm=2"
            + "&name=" + this.nombre
            + "&mail=" + this.email
            + "&message=" + Token
            + "&mailD=1&iclien=0")
            .then(response => response.json())
            .then(data => console.log(JSON.parse(data)));
    }

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}


/* contenedor de fecht para la categoria de productos, interactuara con la api*/
class ApiCliente {

    constructor(id, dni, nombre, correo, telef, foto, pass) {
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.corre = correo;
        this.telef = telef;
        this.foto = foto;
        this.pass = pass;
    }

    async addAdmin() {

        fetch(urlbase + "api/ApiManager.php?ob=clie&A=inse"
            + "&dni=" + this.getRandomArbitrary(1, 999999)
            + "&nom=" + this.nombre
            + "&corre=" + this.corre
            + "&telef=" + this.telef
            + "&foto=" + "default.jpg"
            + "&pass=" + this.pass)
            .then(response => response.json())
            .then(data => console.log(JSON.parse(data)));
        setTimeout("redireccionar()", 2000); //tiempo expresado en milisegundos
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    /* validar los correos en caso que esta registrado */
    async ListAdmin() { // comprueva el login si el cliente con los datos existe
        fetch(urlbase + "api/ApiManager.php?ob=clie&A=list"
            + "&tip=3"
            + "&uss=" + this.corre
            + "&pas=")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                data.forEach(element => {
                    console.log(element);
                    localStorage.setItem("valid", element.dni_user);
                });
                //$('#ContenerAdmin').html(html_codeIten);
            }).catch(Error => console.log(Error));
    }
}

function redireccionar() {
    window.location.href = "../view/login.html";
}