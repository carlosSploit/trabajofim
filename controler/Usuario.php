<?php
include_once '../module/crud.php';

class usuario implements crud{
    
    var $nombre="" ;
    var $dni = 000000000;
    var $correro = "";
    var $telefono = 465465;
    var $foto = Array(); 
    
    //----------- COSTRUCTOR -------------
    function __construct($nombre, $dni, $correro, $telefono, $foto) {
        $this->setNombre($nombre);
        $this->setDni($dni);
        $this->setCorrero($correro);
        $this->setTelefono($telefono);
        $this->setFoto($foto);
    }
    //--------- GETTER Y SETTER ------------------
    
    function getNombre() {
        return $this->nombre;
    }

    function getDni() {
        return $this->dni;
    }

    function getCorrero() {
        return $this->correro;
    }

    function getTelefono() {
        return $this->telefono;
    }

    function getFoto() {
        return $this->foto;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setDni($dni) {
        $this->dni = $dni;
    }

    function setCorrero($correro) {
        $this->correro = $correro;
    }

    function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    function setFoto($foto) {
        $this->foto = $foto;
    }

    //------------ METODOS ---------------
    public function eliminar($var) {
        
    }

    public function insertar($var) {
        
    }

    public function listar($var) {
        
    }

    public function update($var) {
        
    }
}
