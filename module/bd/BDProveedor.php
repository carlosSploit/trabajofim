<?php
require_once 'crud.php';
require 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarProve(?) ->insertar
 * usp_ActualizarProve(?) -> Actualizar
 * usp_ListarProve() -> listar
 * usp_EliminarProve(?) -> eliminar
 */

class ProveedorDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarProve(?)');          
            $data->bindParam(1, $var->getIdProveedor()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarProve(?,?,?)');
            $data->bindParam(1, $var->getNombre());
            $data->bindParam(2, $var->getEmail());
            $data->bindParam(3, $var->getCelular());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarProve()');             
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
            $data = $obj->prepare('CALL usp_ActualizarProve(?,?,?,?)');
            $data->bindParam(1, $var->getIdProveedor());
            $data->bindParam(2, $var->getNombre());
            $data->bindParam(3, $var->getEmail());
            $data->bindParam(4, $var->getCelular());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }
}

