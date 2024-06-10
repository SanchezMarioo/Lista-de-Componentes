var procesador = document.getElementById('procesador');
var procesadorPrecio = document.getElementById('procesador-value');

function procesadorSeleccionado() {
let imagenUrl = document.getElementById('procesadorUrl');
document.querySelector('select').addEventListener('change', function(event) {
    switch (event.target.value) {
    case 'intel-i9-590':
         procesadorPrecio.value="590$";
         imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xa/en/images/intel-core-i9-badge-1920x1080.png";
         imagenUrl.alt = "Intel i9 590";
         imagenUrl.width = "400";
        break;
    case 'intel-i7-380':
        procesadorPrecio.value="380$";
        imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xl/es/images/2022-06/km-1920x1080-i7.png";
        break;
    case 'intel-i5-250':
        procesadorPrecio.value="250$";
        imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xl/es/images/2022-06/km-1920x1080-i5.png";
        break;
    case 'intel-i3-120':
        procesadorPrecio.value="120$";
        imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xl/es/images/2022-06/km-1920x1080-i3.png";
        break;
    case 'amd-ryzen9-550':
        procesadorPrecio.value="550$";
        imagenUrl.src = "https://www.vektrapc.com/cdn/shop/files/1_25a7388f-c71c-4b1e-a189-1b68408f834c.webp?v=1684308927";
        break;
    case 'amd-ryzen7-350':
        procesadorPrecio.value="350$";
        imagenUrl.src = "https://i.ebayimg.com/images/g/-pQAAOSwms5kQ7YX/s-l1200.webp";
        break;
    case 'amd-ryzen5-220':
        procesadorPrecio.value="220$";
        imagenUrl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ2BMDDw4vXGwssbzSXOiEss7aH-WyHjD4w&s";
        break;
    case 'amd-ryzen3-100':
        procesadorPrecio.value="100$";
        imagenUrl.src = "https://www.amd.com/system/files/82446-raven-am4-ryzen-3-pib-left-facing-1260x709.png";
        break;
    case 'apple-m1-700':
        procesadorPrecio.value="700$";
        imagenUrl.src = "https://www.apple.com/newsroom/images/product/mac/standard/Apple_M1-Pro-M1-Max_Chips_10182021_big.jpg.slideshow-xlarge_2x.jpg";
        break;
    case 'apple-m2-1000':
        procesadorPrecio.value="1000$";
        imagenUrl.src = "https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/m2/Apple-WWDC23-M2-Ultra-chip-230605_big.jpg.large.jpg";
        break;
    case '0':
        procesadorPrecio.value="Precio no disponible";
        imagenUrl.src = "img/Procesador.png";
        break;
    default:
        mensaje = 'Por favor, seleccione un procesador válido.';
        break;
}
});
}
procesadorSeleccionado();