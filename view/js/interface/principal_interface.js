

$(document).ready(principal);
            
function principal(){
    $("#sign").click(function (event){ //cuando se precione la opccion de sign, cambia el contenedor
        camb_content("sign");
    });
    
    $("#log").click(function (event){ //cuando se preciona la opccion de log, cambia el contenedor
        camb_content("log");
    });

    $("#home").click(function (event){ //cuando se preciona la opccion de log, cambia el contenedor
        camb_content("home");
    });
    $("#store").click(function (event){ //cuando se preciona la opccion de log, cambia el contenedor
        camb_content("store");
    });

    //document.getElementById('contenedor_cuerpo').setAttribute("onLoad",'');
    //$('#contenedor_cuerpo').attr("onLoad", 'alert("frame has (re)loaded");');
    //$('#contenedor_cuerpo').load(reload('cometelo')); 
}

function reload(url){
    //console.log(url);
}

function camb_content(mensaje){
    switch (mensaje){
       /*hace un cambio de atributo del contenedor a la interface registrar.html*/
       case "sign":$("#contenedor_cuerpo").attr("src","./view/Registrar.html");break;
       /*hace un cambio de atributo del contenedor a la interface login.html*/
       case "log":$("#contenedor_cuerpo").attr("src","./view/login.html");break;
        /*hace un cambio de atributo del contenedor a la interface home.html*/
       case "home":$("#contenedor_cuerpo").attr("src","./view/home.html");break;
        /*hace un cambio de atributo del contenedor a la interface home.html*/
       case "store":
        if(localStorage.getItem("user")){
            let varOBJ = JSON.parse(localStorage.getItem("user"));
            if(varOBJ.tip == 'A'){
                $("#contenedor_cuerpo").attr("src","./view/Administrador.html");
            }else{
                $("#contenedor_cuerpo").attr("src","./view/store.html");
            }
        }else{
            $("#contenedor_cuerpo").attr("src","./view/store.html");
        }       
        break;
    } 
}

