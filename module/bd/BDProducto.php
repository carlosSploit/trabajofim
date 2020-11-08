<?php

require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class ProductoDAO extends conexion implements crud {

    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarProduc(?)');          
            $data->bindParam(1, $var->getIdproducto()); 
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
            $data = $obj->prepare('CALL usp_ListarProduc(?,?,?)');          
            $data->bindParam(1, $var['userT']);   
            $data->bindParam(2, $var['Tipo']);   
            $data->bindParam(3, $var['Nombre']);   
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
            $data->bindParam(1, $var->getCodProduc());
            $data->bindParam(2, $var->getIdProveedor());
            $data->bindParam(3, $var->getIdTipo());
            $data->bindParam(4, $var->getNombre());
            $data->bindParam(5, $var->getDescripcion());
            $data->bindParam(6, $var->getCantidad());
            $data->bindParam(7, $var->getPrecioC());
            $data->bindParam(8, $var->getPrecioV());
            $data->bindParam(9, $var->getPhoto());
            $data->bindParam(10, $var->getIdproducto());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}
