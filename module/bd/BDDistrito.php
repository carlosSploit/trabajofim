<?php
require_once 'crud.php';
require 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarDist(?) ->insertar
 * usp_ActualizarDist(?) -> Actualizar
 * usp_ListarDist() -> listar
 * usp_EliminarDist(?) -> eliminar
 */

class DistritoDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarDist(?)');          
            $data->bindParam(1, $var->getIdDistrito()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarDist(?,?)');
            $data->bindParam(1, $var->getIdCiudad());
            $data->bindParam(2, $var->getNombreDistrito());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarDist(?)');          
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
            $data = $obj->prepare('CALL usp_ActualizarDist(?,?,?)');
            $data->bindParam(1, $var->getIdDistrito());
            $data->bindParam(2, $var->getIdCiudad());
            $data->bindParam(3, $var->getNombreDistrito());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }
}

