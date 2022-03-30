<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Formulario especie</title>
  </head>
  <body>
    <h1>Búsqueda de fotos por especie</h1>
    <form action="/fotos/especie" method="get">
      <p>
        Si no se especifica la especie se muestran todas las fotos de los animales en adopción
      </p>
      <label for="nombre_protectora">Nombre de la especie</label>
      <input type="text" name="especie" value="" />
      <input type="submit" name="submit" value="Ver" />
    </form>
  </body>
</html>
