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


class Producto implements crud {
    
    var $idProducto = 0; 
    var $idTipo = 0;
    var $Cantidad = 0;
    var $PrecioC = 0;
    var $PrecioV = 0;
    var $Calificacion = 0;
    var $idProveedor = 0;
    
    function __construct($idProducto, $idTipo, $Cantidad, $PrecioC, $PrecioV, $Calificacion, $idProveedor) {
        $this->idProducto = $idProducto;
        $this->idTipo = $idTipo;
        $this->Cantidad = $Cantidad;
        $this->PrecioC = $PrecioC;
        $this->PrecioV = $PrecioV;
        $this->Calificacion = $Calificacion;
        $this->idProveedor = $idProveedor;
    }
    

    function getIdProducto() {
        return $this->idProducto;
    }

    function getIdTipo() {
        return $this->idTipo;
    }

    function getCantidad() {
        return $this->Cantidad;
    }

    function getPrecioC() {
        return $this->PrecioC;
    }

    function getPrecioV() {
        return $this->PrecioV;
    }

    function getCalificacion() {
        return $this->Calificacion;
    }

    function getIdProveedor() {
        return $this->idProveedor;
    }

    function setIdProducto($idProducto) {
        $this->idProducto = $idProducto;
    }

    function setIdTipo($idTipo) {
        $this->idTipo = $idTipo;
    }

    function setCantidad($Cantidad) {
        $this->Cantidad = $Cantidad;
    }

    function setPrecioC($PrecioC) {
        $this->PrecioC = $PrecioC;
    }

    function setPrecioV($PrecioV) {
        $this->PrecioV = $PrecioV;
    }

    function setCalificacion($Calificacion) {
        $this->Calificacion = $Calificacion;
    }

    function setIdProveedor($idProveedor) {
        $this->idProveedor = $idProveedor;
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
