<?php
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use App\Models\AnimalModel;

header('Content-Type: application/json'); //iforma del tipo de dato de la salida

class ControladorRest extends ResourceController
{
    protected $modelName="App\Models\AnimalModel";
    protected $format="json";

   
    //Devuelve el estado de la petición, en caso de error muestra un mensaje
    private function generaFormatoRespuesta($data, $msj, $code)
    {
        if ($code == 200) {
            return $this->respond(array( "data" => $data, "code" => $code )); //, 404, "No hay nada"
        } else {
            return $this->respond(array( "msj" => $msj, "code" => $code ));
        }
    }

    //Obtiene base_url de nuestra API, para poder obtener una url correcta.
    private function creaBaseUrl($segmento)
    {
        if (isset($_SERVER['HTTPS'])) {
            $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
        } else {
            $protocol = 'http';
        }
        return $protocol . "://" . $_SERVER['HTTP_HOST'] . $segmento;
    }

    private function guardaPropiedadesAnimal($data)
    {
        $animal=array(
            "id" => $data['id'],
            "nombre" => $data['nombre'],
            "especie" => $data['especie'],
            "protectora" => $data['protectora'],
            "imagen" => utf8_encode($data['imagen']), //Si no pongo utf8_encod falla api
            "telefono" => $data['telefono'],
            "links"=>["rel" => "self","href" =>$this->creaBaseUrl("/fotos/nombre/?nombre=".$data['nombre']),
            "action" => "GET", "types" =>["text/xml","application/json"] ]
        );
      
        return $animal;
    }

    // GET: devuelve array con todos los animales
    public function index()
    {
        $animales=array();
        $modelo=new AnimalModel();
        $datos = $modelo->recuperaAnimales();
        foreach ($datos as $row) {
            array_push($animales, $this->guardaPropiedadesAnimal($row));
        }
        return $this->generaFormatoRespuesta($animales, null, 200);
    }
  
    // GET: devuelve array con los animales con el nombre indicado como parámetro
    public function mostrarAnimalPorNombre($nombre = null)
    {
        $animales=array();
        $modelo=new AnimalModel();
        $datos = $modelo->recuperaAnimales($nombre);
        if (empty($datos)) {
            $animales=array();
        } else {
            array_push($animales, $this->guardaPropiedadesAnimal($datos));
        }
        return $this->generaFormatoRespuesta($animales, null, 200);
    }

}
