<?php
namespace App\Models;

use CodeIgniter \Model;

class AnimalModel extends Model
{
    protected $table ="fotos";
    protected $nombre="nombre";
    protected $allowedFields=["id","nombre","especie","protectora", "imagen", "telefono" ];

    public function recuperaAnimales($nombre = false)
    {
        if ($nombre ===  false) {
            return  $this ->findAll(); 
        }
       
        return  $this ->asArray()
                      ->where(["nombre" => $nombre])
                    ->first();
    }
}
