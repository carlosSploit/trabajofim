<?php

require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class Producto extends conexion implements crud {

    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarProduc(?)');          
            $data->bindParam(1, $var->getIdCiudad()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarProduc(?,?,?,?,?,?,?,?,?)');
            $data->bindParam(1, $var->getCodProduc());
            $data->bindParam(2, $var->getIdProveedor());
            $data->bindParam(3, $var->getIdTipo());
            $data->bindParam(4, $var->getNombre());
            $data->bindParam(5, $var->getDescripcion());
            $data->bindParam(6, $var->getCantidad());
            $data->bindParam(7, $var->getPrecioC());
            $data->bindParam(8, $var->getPrecioV());
            $data->bindParam(9, $var->getPhoto());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarProduc(?)');          
            $data->bindParam(1, $var);   
            $data->execute();
            $lista = $data->fetchAll();                      
            return $lista;         

        }catch (Exception $e) {
            throw $e;
        }
    }

    public function update($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_ActualizarProduc(?,?,?,?,?,?,?,?,?,?)');
            $data->bindParam(1, $var->getIdproducto());
            $data->bindParam(2, $var->getCodProduc());
            $data->bindParam(3, $var->getIdProveedor());
            $data->bindParam(4, $var->getIdTipo());
            $data->bindParam(5, $var->getNombre());
            $data->bindParam(6, $var->getDescripcion());
            $data->bindParam(7, $var->getCantidad());
            $data->bindParam(8, $var->getPrecioC());
            $data->bindParam(9, $var->getPrecioV());
            $data->bindParam(10, $var->getPhoto());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}
