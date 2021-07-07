<?php

class Producto{
    
        var $idproducto = 0;
        var $CodProduc = "";
        var $idProveedor = 0;
        var $idTipo = 0;
        var $Nombre = "";
        var $Descripcion = "";
        var $Cantidad = 0;
        var $PrecioC = 0.0;
        var $PrecioV = 0.0;
        var $photo = 0.0;
        var $calificacion = 0;
        var $estado = true;   
    
    function __construct($idproducto, 
                         $CodProduc, 
                         $idProveedor, 
                         $idTipo, 
                         $Nombre, 
                         $Descripcion, 
                         $Cantidad,
                         $PrecioC,
                         $PrecioV,
                         $photo,
                         $calificacion,
                         $estado) {
        $this->idproducto = $idproducto;
        $this->CodProduc = $CodProduc;
        $this->idProveedor = $idProveedor;
        $this->idTipo = $idTipo;
        $this->Nombre = $Nombre;
        $this->Descripcion = $Descripcion;
        $this->Cantidad = $Cantidad;
        $this->PrecioC = $PrecioC;
        $this->PrecioV = $PrecioV;
        $this->photo = $photo;
        $this->calificacion = $calificacion;
        $this->estado = $estado;    
    }
    
    function getIdproducto() {
        return $this->idproducto;
    }

    function getCodProduc() {
        return $this->CodProduc;
    }

    function getIdProveedor() {
        return $this->idProveedor;
    }

    function getIdTipo() {
        return $this->idTipo;
    }

    function getNombre() {
        return $this->Nombre;
    }

    function getDescripcion() {
        return $this->Descripcion;
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

    function getPhoto() {
        return $this->photo;
    }

    function getCalificacion() {
        return $this->calificacion;
    }

    function getEstado() {
        return $this->estado;
    }

    function setIdproducto($idproducto) {
        $this->idproducto = $idproducto;
    }

    function setCodProduc($CodProduc) {
        $this->CodProduc = $CodProduc;
    }

    function setIdProveedor($idProveedor) {
        $this->idProveedor = $idProveedor;
    }

    function setIdTipo($idTipo) {
        $this->idTipo = $idTipo;
    }

    function setNombre($Nombre) {
        $this->Nombre = $Nombre;
    }

    function setDescripcion($Descripcion) {
        $this->Descripcion = $Descripcion;
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

    function setPhoto($photo) {
        $this->photo = $photo;
    }

    function setCalificacion($calificacion) {
        $this->calificacion = $calificacion;
    }

    function setEstado($estado) {
        $this->estado = $estado;
    }

}
