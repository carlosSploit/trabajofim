<?php

class conexion {
    
    var $conexion = null;
    var $userr="root";
    var $pass="";
    var $hostname = "mysql:host=localhost;dbname=banco3";
    
    function conectarte(){
       try{
           $this->conexion = new PDO($this->hostname,$this->userr,$this->pass);
           return $this->conexion;
           
       }catch(PDOException $e){
           echo 'Error de conectar : ',$e;   
           die();
           return null;
       }
    }
    
    function desconectar(){
        $this->conexion = null;
    }
}
