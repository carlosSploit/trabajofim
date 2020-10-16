<?php

include_once '../module/crud.php';

//----------------------------------------------------

class Departamento  implements crud{
    var $idDeparmt = 0;
    var $NombreDepart = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($NombreDepart) {
        $this->setNombreDepart($NombreDepart);
    }
        //--------- GETTER Y SETTER ------------------
    
    function getNombreDepart() {
        return $this->NombreDepart;
    }

    function setNombreDepart($NombreDepart) {
        $this->NombreDepart = $NombreDepart;
    }
    
    function getIdDeparmt() {
        return $this->idDeparmt;
    }

    function setIdDeparmt($idDeparmt) {
        $this->idDeparmt = $idDeparmt;
    }
            
    //------------ METODOS ---------------
    public function eliminar($var) {
        //eliminar en cliente 
    }

    public function insertar($var) {
        //insertar en cliente 
    }

    public function listar($var) {
        
    }

    public function update($var) {
        
    }

}





