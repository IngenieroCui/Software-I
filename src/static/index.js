const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en productos.js */
function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevaproducto = document.createElement("div");
        nuevaproducto.classList = "tarjeta-producto";
        nuevaproducto.innerHTML = `
        <img src="static/images/productos/${producto.id}.jpg" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button>Agregar al carrito</button>`;
        contenedorTarjetas.appendChild(nuevaproducto);
        nuevaproducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const productos = JSON.parse(localStorage.getItem('productosDisponibles')) || [];
    crearTarjetasProductosInicio(productos);
});