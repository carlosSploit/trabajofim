<?php

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

class Distrito  implements crud{
    var $idDistrito = 0;
    var $ciud = "";
    var $NombreDistrito = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($NombreDepart,$NombreCiudad,$NombreDistrito) {
        $this->setNombreDistrito($NombreDistrito);
        $this->ciud  = new Ciudad($NombreDepart,$NombreCiudad);
    }
    
    //--------- GETTER Y SETTER ------------------
    
    function getNombreDistrito() {
        return $this->NombreDistrito;
    }

    function setNombreDistrito($NombreDistrito) {
        $this->NombreDistrito = $NombreDistrito;
    }
    
    function getIdDistrito() {
        return $this->idDistrito;
    }

    function setIdDistrito($idDistrito) {
        $this->idDistrito = $idDistrito;
    }
                    
    //------------ METODOS ---------------
    public function eliminar($var) {
        $this->ciud->eliminar($this->ciud);
        //eliminar en cliente 
    }

    public function insertar($var) {
        $this->ciud->insertar($this->ciud);
        //insertar en cliente 
    }

    public function listar($var) {
        
    }

    public function update($var) {
        $this->ciud->update($this->ciud);
        //eliminar en cliente 
    }
}