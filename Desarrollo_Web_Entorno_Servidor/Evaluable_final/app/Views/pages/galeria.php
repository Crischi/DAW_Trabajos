<h2 id="galeria--titulo"><?= esc($title);?>
</h2>
<div id="galeria--container" class="center">

    <?php if (!empty($fotos)&& is_array($fotos)) : ?>

    <!--Para cada animal-->
    <?php foreach ($fotos as $foto): ?>
    <div class="galeria--tarjeta column">

        <!--Muestro foto-->
        <div class="galeria--container-foto center">
            <img
                src="data:image/png;base64,<?= base64_encode($foto->getImagen())?>">
        </div>

        <!--Muestro nombre-->
        <p class="galeria--nombre"><?= esc($foto->getNombre());?>
        </p>

        <!--Muestro info protectora-->
        <p id="protectora_foto">
            <i class="fas fa-address-card"></i>
            Protectora: <?= esc($foto->getProtectora());?>
        </p>
        
        <!--Muestro teléfono-->
        <p>
            <a class="decoration-none" href="">
                <i class="fas fa-phone"></i> Teléfono: <?= esc($foto->getTelefono());?> </a>
        </p>
    </div>

    <?php endforeach;?>

    <?php else :?>
    <div class="column">
        <h3> No hay fotos </h3>
        <p> No se ha localizado ningún animal para adoptar con las características indicadas.</p>
    </div>
    <?php endif?>
</div>