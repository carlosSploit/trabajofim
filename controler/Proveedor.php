<?php

class Proveedor implements crud{
    
    var $idProveedor = 0;
    var $nombre = "";
    var $Email = "";
    var $celular = 0;
    
    function __construct($idProveedor, $nombre, $Email, $celular) {
        $this->idProveedor = $idProveedor;
        $this->nombre = $nombre;
        $this->Email = $Email;
        $this->celular = $celular;
    }

    function getIdProveedor() {
        return $this->idProveedor;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getEmail() {
        return $this->Email;
    }

    function getCelular() {
        return $this->celular;
    }

    function setIdProveedor($idProveedor) {
        $this->idProveedor = $idProveedor;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setEmail($Email) {
        $this->Email = $Email;
    }

    function setCelular($celular) {
        $this->celular = $celular;
    }

        
    public function eliminar($var) {
        
    }

    public function insertar($var) {
        
    }

    public function listar($var) {
        
    }

    public function update($var) {
        
    }

}
