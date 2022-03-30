<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Formulario nombre</title>
  </head>
  <body>
    <h1>Búsqueda de fotos por nombre</h1>
    <form action="/fotos/nombre" method="get">
      <p>
        Si no se especifica el nombre se muestran todas las fotos de los animales en adopción.
      </p>
      <label for="nombre">Nombre del animal</label>
      <input type="text" name="nombre" />
      <input type="submit" name="submit" value="Ver" />
    </form>
  </body>
</html>
