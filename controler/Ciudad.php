<?php

class Ciudad  implements crud{
    var $idCiudad = 0;
    var $depar = "";
    var $NombreCiudad = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($NombreDepart,$NombreCiudad) {
        $this->setNombreCiudad($NombreCiudad);
        $this->depar = new Departamento($NombreDepart);
    }
    
    //--------- GETTER Y SETTER ------------------
    
    function getNombreCiudad() {
        return $this->NombreCiudad;
    }

    function setNombreCiudad($NombreCiudad) {
        $this->NombreCiudad = $NombreCiudad;
    }
    
    function getIdCiudad() {
        return $this->idCiudad;
    }

    function setIdCiudad($idCiudad) {
        $this->idCiudad = $idCiudad;
    }
                    
    //------------ METODOS ---------------
    public function eliminar($var) {
        $this->depar->eliminar($this->depar);
        //eliminar en cliente 
    }

    public function insertar($var) {
        $this->depar->insertar($this->depar);
        //insertar en cliente 
    }

    public function listar($var) {
        
    }

    public function update($var) {
        $this->depar->update($this->depar);
        //eliminar en cliente 
    }
}

