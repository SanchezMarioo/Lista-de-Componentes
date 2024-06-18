

let procesadorPrecio = 0; 
var componenteName
/**
 * Handles the selection of a processor.
 */
function procesadorSeleccionado() {
    const procesador = document.getElementById('procesador');
    const imagenUrl = document.getElementById('procesadorUrl');
    const procesadorValue = document.getElementById('procesador-value');
    const procesadorDrag = document.getElementById('procesador-drag');
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
        let botonConfirmar = document.getElementsByClassName('swal-button swal-button--confirm');
        if (imagenUrl.alt === 'Procesador' || procesadorPrecio === 'Seleccione un procesador válido' || procesadorPrecio === 'Precio no disponible' || procesadorPrecio === '0' || imagenUrl.src === 'img/Procesador.png') {
            notificacionError();
            return true;

        } else {
            event.preventDefault();
            notificacionSucess();
            botonConfirmar[0].addEventListener('click', function() {
                comprobarCarrito();
                itemCarrito(componenteName, imagenUrl.src, procesadorPrecio);
            });
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
function comprobarCarrito(){
    let carritoContainer = document.getElementById('carrito-container');
    var carritoValue = document.getElementById("carrito-total");
    var carritoItems = document.getElementById("carrito-items");
    var carritoClick = document.getElementById("carritoImg");
    carritoClick.addEventListener('click', function(){
    if (carritoValue.value === "0" || carritoItems.innerHTML === ""){
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
function itemCarrito(nombre, imagen, precio) {
    const carritoItems = document.getElementById('carrito-items');
    const totalInput = document.getElementById('carrito-total');

    // Crear un nuevo elemento de carrito
    const carritoItem = document.createElement('div');
    carritoItem.className = 'carrito-item';

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
document.addEventListener('DOMContentLoaded', cargarCarrito);
