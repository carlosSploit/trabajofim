<?php

require_once 'crud.php';
require_once 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarCatPro(?) ->insertar
 * usp_ActualizarCatPro(?) -> Actualizar
 * usp_ListarCatPro() -> listar
 * usp_EliminarCatPro(?) -> eliminar
 */
class tipoProductoDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarCatPro(?)');          
            $data->bindParam(1, $var->getIdTipo()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarCatPro(?)');          
            $data->bindParam(1, $var->getNombreTipo());       
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarCatPro()');          
            $data->bindParam(1, $idC);   
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
            $data = $obj->prepare('CALL usp_ActualizarCatPro(?,?)');          
            $data->bindParam(1, $var->getIdTipo()); 
            $data->bindParam(2, $var->getNombreTipo());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}





