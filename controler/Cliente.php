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

class Cliente  implements crud{
    var $idClien = "";
    var $us = "";
    var $User="" ;
    var $Pass = 000000000;
    
    //----------- COSTRUCTOR -------------
    function __construct($nombre, $dni, $correro, $telefono, $foto,$idClien, $User, $Pass) {
        $this->setIdClien($idClien);
        $this->setUser($User);
        $this->setPass($Pass);
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

    function getIdClien() {
        return $this->idClien;
    }

    function setIdClien($idClien) {
        $this->idClien = $idClien;
    }
    
    //------------ METODOS ---------------
    public function eliminar($var) {
        $this->us->eliminar($var); //eliminar datos en usuario 
        //eliminar en cliente 
    }

    public function insertar($var) {
        $this->us->insertar($var); //nsertar en usuario 
        //insertar en cliente 
    }

    public function listar($var) {
        
    }

    public function update($var) {
        $this->us->update($var); //eliminar datos en usuario 
        //eliminar en cliente 
    }
}


