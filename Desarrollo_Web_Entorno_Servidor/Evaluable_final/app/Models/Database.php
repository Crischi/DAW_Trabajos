<?php
namespace App\Models;
use PDO;
class Database
{
    private static $dbHost="localhost";
    private static $dbName="colitas";
    private static $dbUsername="Crischi";
    private static $dbPassword="Crischi@81";
    private static $conexion=null; //almacena conexion

    public function __construct()
    {
        //die("init-Función no permitida");//Sin constructor
    }

    public static function conectar()
    {
        try {
            self::$conexion=new PDO(
                "mysql:host=".self::$dbHost.";" . "dbname=". self::$dbName,
                self::$dbUsername,
                self::$dbPassword
            );
        } catch (PDOException $e) {
            die($e->getMessage());
        }
        return self::$conexion;
    }    

    public static function desconectar()
    {
        self::$conexion=null;
    }
}
