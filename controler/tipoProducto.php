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

class tipoProducto implements crud{
    
    var $idTipo = 0;
    var $nombreTipo = "";
    
    function __construct($idTipo, $nombreTipo) {
        $this->idTipo = $idTipo;
        $this->nombreTipo = $nombreTipo;
    }

    function getIdTipo() {
        return $this->idTipo;
    }

    function getNombreTipo() {
        return $this->nombreTipo;
    }

    function setIdTipo($idTipo) {
        $this->idTipo = $idTipo;
    }

    function setNombreTipo($nombreTipo) {
        $this->nombreTipo = $nombreTipo;
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
