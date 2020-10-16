<?php


//--------------- Cliente Api -----------------------
/*mayormente esto de las apis se da en la cuarta capa , pero poder adaptacion de modelo en vista controlador y modelo 
de coloca incluido en la capa cpntrolador */

switch (isset($_POST['action'])) {
    
    case "insert" : 

        break;
    
    case "eliminar" : 

        break;
    case "listar" : 

        break;
    case "update" : 

        break;
    default:
        break;
}

//----------------------------------------------------

class administracion  implements crud{
    var $idAdminis=0;
    var $us = ""; // datos de usuario del sistema
    var $User= "" ;
    var $Pass = 000000000;
    var $tipTrabajo = "";
    
    //----------- COSTRUCTOR -------------
    
    function __construct($nombre, $dni, $correro, $telefono, $foto,$idAdminis, $User, $Pass,$tipTrabajo) {
        $this->setIdAdminis($idAdminis);
        $this->setUser($User);
        $this->setPass($Pass);
        $this->setTipTrabajo($tipTrabajo);
        $this->us = new usuario($nombre, $dni, $correro, $telefono, $foto);
    }

    //--------- GETTER Y SETTER ------------------
    
    function getUser() {
        return $this->User;
    }

    function getPass() {
        return $this->Pass;
    }

    function setUser($User) {
        $this->User = $User;
    }

    function setPass($Pass) {
        $this->Pass = $Pass;
    }
    
    function getTipTrabajo() {
        return $this->tipTrabajo;
    }

    function setTipTrabajo($tipTrabajo) {
        $this->tipTrabajo = $tipTrabajo;
    }
    function getIdAdminis() {
        return $this->idAdminis;
    }

    function setIdAdminis($idAdminis) {
        $this->idAdminis = $idAdminis;
    }    

    //------------ METODOS ---------------
    public function eliminar($var) {
        $this->us->eliminar($this->us); //eliminar datos en usuario 
        //eliminar en cliente 
    }

    public function insertar($var) {
        $this->us->insertar($this->us); //nsertar en usuario 
        //insertar en cliente 
    }

    public function listar($var) {
        
    }

    public function update($var) {
        $this->us->update($this->us); //eliminar datos en usuario 
        //eliminar en cliente 
    }
}


