<?php
require_once 'crud.php';
require 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarUss(?) ->insertar
 * usp_ActualizarUss(?) -> Actualizar
 * usp_ListarUss() -> listar
 * usp_EliminarUss(?) -> eliminar
 */

class UsuarioDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarUss(?)');          
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
            $data = $obj->prepare('CALL usp_InsertarUss(?,?)');
            $data->bindParam(1, $var->getIdDeparmt());
            $data->bindParam(1, $var->getIdDeparmt());
            $data->bindParam(2, $var->getNombreCiudad());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarUss(?)');          
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
            $data = $obj->prepare('CALL usp_ActualizarUss(?,?,?)');
            $data->bindParam(1, $var->getIdCiudad());
            $data->bindParam(2, $var->getIdDeparmt());
            $data->bindParam(3, $var->getNombreCiudad());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }
}

