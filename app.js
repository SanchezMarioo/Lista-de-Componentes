let procesadorPrecio = 0; 
var componenteName
function uptadateSelect(selectId) {
    selectId.value = "0";
}
function procesadorSeleccionado() {
    const procesador = document.getElementById('procesador');
    const imagenUrl = document.getElementById('procesadorUrl');
    const procesadorValue = document.getElementById('procesador-value');
    const dragComponente = document.getElementById('procesador-drag');
    procesador.addEventListener('change', function(event) {
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
                imagenUrl.alt = "Defecto";
                break;
            default:
                procesadorPrecio = "Seleccione un procesador válido";
                imagenUrl.src = "img/Procesador.png";
                imagenUrl.alt = "Defecto";
                break;
        }
        let categoria = "procesador";
        procesadorValue.value = procesadorPrecio;
        dragDrop(imagenUrl, dragComponente, procesadorPrecio, componenteName,procesadorPrecio,imagenUrl.alt,categoria);

    });
}
function tarjetaGráficaSeleccionada() {
    let tarjetaGrafica = document.getElementById('tarjeta');
    let graficaUrl = document.getElementById('tarjetaUrl');
    let tarjetaPrecio = document.getElementById('tarjeta-value'); // Cambiado var a let para mantener consistencia
    let graficaDrag = document.getElementById('tarjeta-drag');

    tarjetaGrafica.addEventListener('change', function(event) {
        let valueGrafica;
        let componenteName;
        
        switch (event.target.value) {
            case 'nvidia-rtx3090-1500':
                valueGrafica = "1500$";
                graficaUrl.src = "https://assets.nvidia.partners/images/png/zt-a30900b-10p.png";
                graficaUrl.alt = "Nvidia RTX 3090";
                componenteName = "Nvidia RTX 3090";
                break;
            case 'nvidia-rtx3080-1000':
                valueGrafica = "1000$";
                graficaUrl.src = "https://assets.nvidia.partners/images/png/gv-n3080eagle-%2012gd.png";
                graficaUrl.alt = "Nvidia RTX 3080";
                componenteName = "Nvidia RTX 3080";
                break;
            case 'nvidia-rtx3070-700':
                valueGrafica = "700$";
                graficaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/32/324701/1677-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6.jpg";
                graficaUrl.alt = "Nvidia RTX 3070";
                componenteName = "Nvidia RTX 3070";
                break;
            case 'nvidia-rtx3060-400':
                valueGrafica = "400$";
                graficaUrl.src = "https://m.media-amazon.com/images/I/61XAtpgr1lL._AC_UF894,1000_QL80_.jpg";
                graficaUrl.alt = "Nvidia RTX 3060";
                componenteName = "Nvidia RTX 3060";
                break;
            case 'amd-rx6900xt-1200':
                valueGrafica = "1200$";
                graficaUrl.src = "https://img.pccomponentes.com/articles/35/352835/1468-asus-tuf-amd-radeon-rx-6900xt-oc-16gb-gddr6-foto.jpg";
                graficaUrl.alt = "AMD RX 6900 XT";
                componenteName = "AMD RX 6900 XT";
                break;
            case 'amd-rx6800xt-800':
                valueGrafica = "800$";
                graficaUrl.src = "https://img.pccomponentes.com/articles/34/346794/1191-gigabyte-amd-radeon-rx-6800-xt-gaming-oc-16gb-gddr6.jpg";
                graficaUrl.alt = "AMD RX 6800 XT";
                componenteName = "AMD RX 6800 XT";
                break;
            case 'amd-rx6700xt-500':
                valueGrafica = "500$";
                graficaUrl.src = "https://m.media-amazon.com/images/I/81L7-qPS0ZL.jpg";
                graficaUrl.alt = "AMD RX 6700 XT";
                componenteName = "AMD RX 6700 XT";
                break;
            case 'amd-rx6600xt-300':
                valueGrafica = "300$";
                graficaUrl.src = "https://m.media-amazon.com/images/I/81XvEK3g4KL.jpg";
                graficaUrl.alt = "AMD RX 6600 XT";
                componenteName = "AMD RX 6600 XT";
                break;
            case '0':
                valueGrafica = "Precio no disponible";
                graficaUrl.src = "img/Tarjeta.png";
                graficaUrl.alt = "Defecto";
                componenteName = "Tarjeta gráfica por defecto";
                break;
            default:
                valueGrafica = "Seleccione una tarjeta gráfica válida";
                graficaUrl.src = "img/Tarjeta.png";
                graficaUrl.alt = "Defecto";
                componenteName = "Tarjeta gráfica por defecto";
                break;
        }
        
        tarjetaPrecio.value = valueGrafica; // Actualizar el valor aquí dentro del manejador del evento
        let categoria = "tarjeta-grafica";
        dragDrop(graficaUrl, graficaDrag, valueGrafica,componenteName,valueGrafica,graficaUrl.alt,categoria);
    });
}
tarjetaGráficaSeleccionada();
function ramSeleccionada() {
    let ram = document.getElementById('ram');
    let ramUrl = document.getElementById('ramUrl');
    let ramPrecio = document.getElementById('ram-value');
    let ramDrag = document.getElementById('ram-drag');
    ram.addEventListener('change', function(event) {
        let valueRam;
        let componenteName;
        switch (event.target.value) {
            case 'kingston-16gb-49':
                valueRam = "50$";
                ramUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/43/432664/1392-kingston-fury-beast-ddr4-3200-mhz-16gb-2x8gb-cl16.jpg";
                ramUrl.alt = "Kingston 16GB";
                componenteName = "Kingston 16GB";
                break;
            case 'corsair-32gb-5-124':
                valueRam = "124$";
                ramUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/1076/10764411/1517-corsair-vengeance-ddr5-6000mhz-32gb-2x16gb-cl30.jpg";
                ramUrl.alt = "Corsair 32GB";
                componenteName = "Corsair Vengeance DDR5 6000MHz 32GB 2x16GB CL30 ";
                break;
            case 'acer-32gb-5-6000-129':
                valueRam = "129$";
                ramUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/1079/10791955/1162-acer-predator-vesta-ii-rgb-ddr5-6000mhz-32gb-2x16gb-cl30.jpg";
                ramUrl.alt = "Acer 32GB";
                componenteName = "Acer Predator Vesta II RGB DDR5 6000MHz 32GB 2x16GB CL30";
                break;
            case 'pny-32gb-5-6000-155':
                valueRam = "155$";
                ramUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/1081/10810011/1837-pny-xlr8-gaming-mako-epic-x-rgb-ddr5-6400mhz-32gb-2x16gb-cl40.jpg";
                ramUrl.alt = "PNY 32GB";
                componenteName = "PNY XLR8 Gaming EPIC-X RGB DDR5 6000MHz 32GB 2x16GB CL30";
                break;
            case '0':
                valueRam = "Precio no disponible";
                ramUrl.src = "img/RAM.png";
                ramUrl.alt = "Defecto";
                componenteName = "RAM por defecto";
                break;
            default:
                valueRam = "Seleccione una memoria RAM válida";
                ramUrl.src = "img/RAM.png";
                ramUrl.alt = "Defecto";
                componenteName = "RAM por defecto";
                break;
        }
        let categoria = "Memoria RAM";
        ramPrecio.value = valueRam;
        dragDrop(ramUrl, ramDrag, valueRam, componenteName,valueRam,ramUrl.alt,categoria);
    }
    );
}
ramSeleccionada();
function cajaSeleccionada() {
    let caja = document.getElementById('torre');
    let cajaUrl = document.getElementById('torreUrl');
    let cajaPrecio = document.getElementById('torre-value');
    let cajaDrag = document.getElementById('torre-drag');
    caja.addEventListener('change', function(event) {
        let valueCaja;
        let componenteName;
        switch (event.target.value) {
            case 'corsair-5000d-200':
                valueCaja = "200$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/34/349632/1705-corsair-5000d-airflow-torre-atx-blanca.jpg";
                cajaUrl.alt = "Corsair 5000D";
                componenteName = "Corsair 5000D";
                break;
            case 'nzxt-h510-70':
                valueCaja = "70$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/22/229796/1.jpg";
                cajaUrl.alt = "NZXT H510";
                componenteName = "NZXT H510";
                break;
            case 'thermaltake-view71-150':
                valueCaja = "150$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/16/164988/d1.jpg";
                cajaUrl.alt = "Thermaltake View71";
                componenteName = "Thermaltake View71";
                break;
            case 'lian-li-o11-120':
                valueCaja = "120$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/1079/10791922/1153-lian-li-o11-dynamic-evo-xl-full-tower-cristal-templado-usb-c-blanca-opiniones.jpg";
                cajaUrl.alt = "Lian Li O11";
                componenteName = "Lian Li O11";
                break;
            case 'coolermaster-h500-100':
                valueCaja = "100$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/31/317382/1350-cooler-master-mastercase-h500-argb-cristal-templado-usb-30-gris-metalizado.jpg";
                cajaUrl.alt = "CoolerMaster H500";
                componenteName = "CoolerMaster H500";
                break;
            case 'be-quiet-dark-base-250':
                valueCaja = "250$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/24/240130/a9.jpg";
                cajaUrl.alt = "Be Quiet Dark Base";
                componenteName = "Be Quiet Dark Base";
                break;
            case 'fractal-design-meshify-100':
                valueCaja = "100$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/1066/10660495/1933-fractal-design-meshify-2-compact-lite-rgb-atx-cristal-templado-usb-32-negra.jpg";
                cajaUrl.alt = "Fractal Design Meshify";
                componenteName = "Fractal Design Meshify";
                break;
            case 'phanteks-eclipse-70':
                valueCaja = "70$";
                cajaUrl.src = "https://thumb.pccomponentes.com/w-530-530/articles/1076/10763679/1475-phanteks-eclipse-g500a-fanless-edition-mid-tower-cristal-templado-usb-30-negra-008de23c-88e9-445e-aa46-977420a22e4c.jpg";
                cajaUrl.alt = "Phanteks Eclipse";
                componenteName = "Phanteks Eclipse";
                break;
            case '0':
                valueCaja = "Precio no disponible";
                cajaUrl.src = "img/Caja.png";
                cajaUrl.alt = "Defecto";
                componenteName = "Caja por defecto";
                break;
            default:
                valueCaja = "Seleccione una caja válida";
                cajaUrl.src = "img/Caja.png";
                cajaUrl.alt = "Defecto";
                componenteName = "Caja por defecto";
                break;
            }
            let categoria = "Caja";
            cajaPrecio.value = valueCaja;
            dragDrop(cajaUrl, cajaDrag, valueCaja, componenteName,valueCaja,cajaUrl.alt,categoria);
        }
        );

    }
cajaSeleccionada();
/**
 * Handles the drag and drop functionality for a given image URL and drag component.
 *
 * @param {HTMLElement} imagenUrl - The image URL element.
 * @param {HTMLElement} dragComponente - The drag component element.
 * @param {string} value - The value of the component.
 * @param {string} componenteName - The name of the component.
 * @param {string} imagen - The image of the component.
 */
function dragDrop(imagenUrl, dragComponente, value, componenteName, value, imagen,categoria) {
    imagenUrl.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
    });

    dragComponente.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    dragComponente.addEventListener('drop', function(event) {
        let botonConfirmar = document.getElementsByClassName('swal-button swal-button--confirm');
        if (value === "Precio no disponible" || value === "0$" || imagen === "Defecto" || imagen === "0") {
            notificacionError();
            return true;

        } else {
            event.preventDefault();
            swal({
                title: "Se ha añadido a la cesta el producto",
                text: "Se ha añadido a la cesta el producto: " + componenteName + " con un precio de " + value,
                icon: "success",
                button: "Añadir",
              });
            botonConfirmar[0].addEventListener('click', function() {
                comprobarCarrito();
                itemCarrito(componenteName, imagenUrl.src, value,categoria);
            });
        }
    });
}
function notificacionError(){
    swal({
        title: "Error",
        text: "Seleccione una imagen válida para añadir al carrito",
        icon: "error",
        button: "Aceptar",
      });
}
function comprobarCarrito(){
    let carritoContainer = document.getElementById('carrito-container');
    var carritoValue = document.getElementById("carrito-total");
    var carritoClick = document.getElementById("carritoImg");
    carritoClick.addEventListener('click', function(){
    if (carritoValue.value === "0"){
        swal({
            title: "Error",
            text: "No se ha seleccionado ningún producto",
            icon: "error",
            button: "Aceptar",
        });
        carritoContainer.style.opacity = '0';
    } else {
        carritoContainer.style.opacity = '1';
    }
});
}
comprobarCarrito();
function cerrarCarrito(){
    let carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.opacity = '0';
}

// Arreglar el cierre del carrito
/**
 * Creates a new item for the shopping cart.
 * 
 * @param {string} nombre - The name of the item.
 * @param {string} imagen - The URL of the item's image.
 * @param {number} precio - The price of the item.
 */
function itemCarrito(nombre, imagen, precio,categoria) {
    const carritoItems = document.getElementById('carrito-items');
    const totalInput = document.getElementById('carrito-total');  
    const categoriaElements = document.getElementById(categoria);
    console.log(categoriaElements);
    if (categoriaElements === null){
        const categoriaElement = document.createElement('div');
        categoriaElement.className = 'categoria-items';
        categoriaElement.id = categoria;
        carritoItems.appendChild(categoriaElement);
        let categoriaParagragh = document.createElement('p');
        categoriaParagragh.textContent = categoria;
        categoriaElement.appendChild(categoriaParagragh);
    }
    // Crear un nuevo elemento de carrito
    const carritoItem = document.createElement('div');
    carritoItem.className = categoria + '-item';
    carritoItem.id = 'carrito-item';

    const itemNombre = document.createElement('p');
    itemNombre.textContent = nombre;
    carritoItem.appendChild(itemNombre);

    const itemImagen = document.createElement('img');
    itemImagen.src = imagen;
    itemImagen.width = 100;
    itemImagen.height = 100;
    itemImagen.style.objectFit = 'cover';
    carritoItem.appendChild(itemImagen);

    const itemPrecio = document.createElement('input');
    itemPrecio.type = 'text';
    itemPrecio.value = precio;
    itemPrecio.disabled = true;
    carritoItem.appendChild(itemPrecio);

    carritoItems.appendChild(carritoItem);

    // Actualizar el total del carrito
    let total = document.getElementById('carrito-total');
    totalInput.value = (parseFloat(totalInput.value)) + parseFloat(precio);
    totalInput.value = totalInput.value + "$";
    // Guardar el item en localStorage
    var items = JSON.parse(localStorage.getItem('carritoItems')) || [];
    items.push({ nombre, imagen, precio});
    let totalCarrito = localStorage.getItem('carritoTotal') || 0;
    localStorage.setItem('carritoItems', JSON.stringify(items));
    localStorage.setItem('carritoTotal', totalCarrito + precio);
}
function cargarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalInput = document.getElementById('carrito-total');

    var items = JSON.parse(localStorage.getItem('carritoItems')) || [];
    let total = parseFloat(localStorage.getItem('carritoTotal')) || 0;

    items.forEach(item => {
        const carritoItem = document.createElement('div');
        carritoItem.className = 'carrito-item';

        const itemNombre = document.createElement('p');
        itemNombre.textContent = item.nombre;
        carritoItem.appendChild(itemNombre);

        const itemImagen = document.createElement('img');
        itemImagen.src = item.imagen;
        itemImagen.width = 100;
        itemImagen.height = 100;
        itemImagen.style.objectFit = 'cover';

        carritoItem.appendChild(itemImagen);

        const itemPrecio = document.createElement('input');
        itemPrecio.type = 'text';
        itemPrecio.value = item.precio;
        itemPrecio.disabled = true;
        carritoItem.appendChild(itemPrecio);

        carritoItems.appendChild(carritoItem);
    });
}

function borrarItems() {
    const carritoItems = document.getElementById('carrito-items');
    const totalInput = document.getElementById('carrito-total');

    swal({
        title: "Eliminar carrito items",
        text: "¿Estás seguro de que deseas eliminar todos los elementos del carrito?",
        icon: "warning",
        buttons: true,
        buttons : ["Cancelar", "Eliminar"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            carritoItems.innerHTML = '';
            totalInput.value = '0';
            localStorage.removeItem('carritoItems');
            localStorage.removeItem('carritoTotal');
            swal("Todos los elementos fueron borrados", {
                title: "Carrito vacío",
                icon: "success",
            });
            cerrarCarrito();
        } else {
            swal({
                icon: "error",
                title: "Operación cancelada",
                text: "Los elementos del carrito no fueron eliminados",
            }
        ); 
        }

    });
}

function comprarItems() {
    comprobarCarrito();
    const carritoItems = document.getElementById('carrito-items');
    const totalInput = document.getElementById('carrito-total');
    const divCarrito = document.getElementById('carrito-item');
    carritoItems.innerHTML = '';
    let total = totalInput.value || 0;
    totalInput.value = '0';
    localStorage.removeItem('carritoItems');
    localStorage.removeItem('carritoTotal');
    if (divCarrito){
        divCarrito.remove();
    }
    swal({
        title: "Compra realizada",
        text: "Se ha realizado la compra de los productos seleccionados por un total de " + total,
        icon: "success",
        button: "Aceptar",
    });
    cerrarCarrito();
}
document.getElementById('carrito-borrar').addEventListener('click', borrarItems);
document.getElementById('carrito-comprar').addEventListener('click', comprarItems);
document.addEventListener('DOMContentLoaded', function () {
    procesadorSeleccionado();
    cargarCarrito();
});
