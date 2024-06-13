
var componenteName
var error = document.getElementById('error-procesador');
function procesadorSeleccionado() {
    const procesador = document.getElementById('procesador');
    const imagenUrl = document.getElementById('procesadorUrl');
    const procesadorValue = document.getElementById('procesador-value');
    const procesadorDrag = document.getElementById('procesador-drag');

 

    procesador.addEventListener('change', function(event) {
        let procesadorPrecio;
        switch (event.target.value) {
            case 'intel-i9-590':
                procesadorPrecio = "590$";
                imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xa/en/images/intel-core-i9-badge-1920x1080.png";
                imagenUrl.alt = "Intel i9 590";
                componenteName = "Intel i9 14900K"
                
                break;
            case 'intel-i7-380':
                procesadorPrecio = "380$";
                imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xl/es/images/2022-06/km-1920x1080-i7.png";
                imagenUrl.alt = "Intel i7 380";
                componenteName = "Intel i7 14700K"
                break;
            case 'intel-i5-250':
                procesadorPrecio = "250$";
                imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xl/es/images/2022-06/km-1920x1080-i5.png";
                imagenUrl.alt = "Intel i5 250";
                componenteName = "Intel i5 14500K"
                break;
            case 'intel-i3-120':
                procesadorPrecio = "120$";
                imagenUrl.src = "https://www.intel.com/content/dam/www/central-libraries/xl/es/images/2022-06/km-1920x1080-i3.png";
                imagenUrl.alt = "Intel i3 120";
                componenteName = "Intel i3 14300K"
                break;
            case 'amd-ryzen9-550':
                procesadorPrecio = "550$";
                imagenUrl.src = "https://www.vektrapc.com/cdn/shop/files/1_25a7388f-c71c-4b1e-a189-1b68408f834c.webp?v=1684308927";
                imagenUrl.alt = "AMD Ryzen 9 550";
                componenteName = "AMD Ryzen 9 5950X"
                break;
            case 'amd-ryzen7-350':
                procesadorPrecio = "350$";
                imagenUrl.src = "https://i.ebayimg.com/images/g/-pQAAOSwms5kQ7YX/s-l1200.webp";
                imagenUrl.alt = "AMD Ryzen 7 350";
                componenteName = "AMD Ryzen 7 5800X"
                break;
            case 'amd-ryzen5-220':
                procesadorPrecio = "220$";
                imagenUrl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ2BMDDw4vXGwssbzSXOiEss7aH-WyHjD4w&s";
                imagenUrl.alt = "AMD Ryzen 5 220";
                componenteName = "AMD Ryzen 5 5600X"
                break;
            case 'amd-ryzen3-100':
                procesadorPrecio = "100$";
                imagenUrl.src = "https://www.amd.com/system/files/82446-raven-am4-ryzen-3-pib-left-facing-1260x709.png";
                imagenUrl.alt = "AMD Ryzen 3 5300";
                componenteName = "AMD Ryzen 3 5300G"
                break;
            case 'apple-m1-700':
                procesadorPrecio = "700$";
                imagenUrl.src = "https://images.versus.io/objects/apple-m1-pro-10-core.front.variety.1635345805946.jpg";
                imagenUrl.alt = "Apple M1 700";
                componenteName = "Apple M1"
                break;
            case 'apple-m2-1000':
                procesadorPrecio = "1000$";
                imagenUrl.src = "https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/m2/Apple-WWDC23-M2-Ultra-chip-230605_big.jpg.large.jpg";
                imagenUrl.alt = "Apple M2 1000";
                componenteName = "Apple M2"
                break;
            case '0':
                procesadorPrecio = "Precio no disponible";
                imagenUrl.src = "img/Procesador.png";
                imagenUrl.alt = "Procesador por defecto";
                break;
            default:
                procesadorPrecio = "Seleccione un procesador válido";
                imagenUrl.src = "img/Procesador.png";
                imagenUrl.alt = "Procesador por defecto";
                break;
        }

        procesadorValue.value = procesadorPrecio;
    });

    dragDrop(imagenUrl, procesadorDrag);
}


function dragDrop(imagenUrl, procesadorDrag) {

    imagenUrl.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
        console.log(imagenUrl.src);
    });

    procesadorDrag.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    procesadorDrag.addEventListener('drop', function(event) {
        if (imagenUrl.src === 'http://127.0.0.1:3000/img/Procesador.png') {
            notificacionError();
            return false;

        } else {
            event.preventDefault();
            notificacionSucess();

        }
    });
    }
document.addEventListener('DOMContentLoaded', procesadorSeleccionado);

function notificacionSucess(){
    swal({
        title: "Se ha añadido a la cesta el producto",
        text: "Se ha añadido a la cesta el producto: " + componenteName + " con un precio de " + document.getElementById('procesador-value').value,
        icon: "success",
        button: "Añadir",
      });
}
function notificacionError(){
    swal({
        title: "Error",
        text: "Seleccione un procesador válido",
        icon: "error",
        button: "Aceptar",
      });
}

