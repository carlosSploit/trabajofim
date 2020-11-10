<?php
require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class CuentaContDAO extends conexion implements crud {

    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarCuentaC(?,?)');
            $data->bindParam(1, $var->getIdClient());
            $data->bindParam(2, $var->getMac());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarCuentaC(?,?,?)');          
            $data->bindParam(1, $var['tip']);   
            $data->bindParam(2, $var['uss']);   
            $data->bindParam(3, $var['pas']);   
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
            $data = $obj->prepare('CALL usp_ActualizarCuentaC(?,?,?,?,?,?,?,?)');
            $data->bindParam(1, $var->getIdClient());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}