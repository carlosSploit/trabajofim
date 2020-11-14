<?php
require_once 'crud.php';
require 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarCiu(?) ->insertar
 * usp_ActualizarCiu(?) -> Actualizar
 * usp_ListarCiu() -> listar
 * usp_EliminarCiu(?) -> eliminar
 */

class PedidoDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        /*try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarCiu(?)');          
            $data->bindParam(1, $var->getIdCiudad()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }*/
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarPedid(?,?,?)');
            $data->bindParam(1, $var->getIdVentas());
            $data->bindParam(2, $var->getDist());
            $data->bindParam(3, $var->getDireccion());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarPedid(?,?,?,?,?)');          
            $data->bindParam(1, $var['tip']); 
            $data->bindParam(2, $var['fil']);
            $data->bindParam(3, $var['id']);   
            $data->bindParam(4, $var['iclien']);   
            $data->bindParam(5, $var['filGene']);   
            $data->execute();
            $lista = $data->fetchAll();                      
            return $lista;         

        }catch (Exception $e) {
            throw $e;
        }
    }

    public function update($var) {
        /*try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_ActualizarCiu(?,?,?)');
            $data->bindParam(1, $var->getIdCiudad());
            $data->bindParam(2, $var->getIdDeparmt());
            $data->bindParam(3, $var->getNombreCiudad());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }*/
    }
}

