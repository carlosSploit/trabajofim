$(document).ready(principal);
    function principal() {
        //var child = $('#stp-dsjdhj').children();
        //console.log(child[0]);

        var hijos = document.querySelectorAll("div.conteSetP > ul.padre > li.hijo");
        for (unHijo of hijos) {
            console.log(unHijo);
            unHijo.addEventListener("click", function (evt) {
                var padre = event.currentTarget.parentNode;
                var hijo = evt.target;
                padre.setAttribute("value", hijo.value);

                if (hijo.getAttribute("class") === "li-iten-sep hijo active") {

                    var classtext = "li-iten-sep hijo active";

                    for (unHijo2 of padre.querySelectorAll("ul.padre > li.hijo")) {
                        if (hijo == unHijo2) {
                            classtext = "li-iten-sep hijo";
                            unHijo2.setAttribute("class", classtext);
                        } else {
                            unHijo2.setAttribute("class", classtext);
                        }
                    }
                } else {
                    console.log(hijo);
                    hijo.setAttribute("class", "li-iten-sep hijo active");
                    for (unHijo3 of padre.querySelectorAll("ul.padre > li.hijo")) {
                        if (hijo == unHijo3) {
                            unHijo3.setAttribute("class", "li-iten-sep hijo active");
                            break;
                        } else {
                            unHijo3.setAttribute("class", "li-iten-sep hijo active");
                        }
                    }
                }
                console.log("Se hizo click en", hijo);
                console.log("Texto del enlace:", hijo.innerText);
            });
        }
    }