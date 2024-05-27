const cuentaCarritoElement = document.getElementById("cuenta-carrito");

/** Toma un objeto producto o un objeto con al menos un ID y lo agrega al carrito */
function agregarAlCarrito(producto) {
    // Reviso si el producto está en el carrito.
    let memoria = JSON.parse(localStorage.getItem("productos")) || [];
    let cantidadProductoFinal;
    
    // Busco si el artículo ya está en el carrito
    const indiceProducto = memoria.findIndex(p => p.id === producto.id);

    if (indiceProducto === -1) {
        // Si el producto no está en el carrito, lo agrego
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
        cantidadProductoFinal = 1;
    } else {
        // Si el producto está en el carrito, le agrego 1 a la cantidad.
        memoria[indiceProducto].cantidad++;
        cantidadProductoFinal = memoria[indiceProducto].cantidad;
    }
    localStorage.setItem("productos", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    return cantidadProductoFinal;
}

/** Resta una unidad de un producto del carrito */
function restarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("productos")) || [];
    let cantidadProductoFinal = 0;
    const indiceProducto = memoria.findIndex(p => p.id === producto.id);

    if (indiceProducto !== -1) {
        memoria[indiceProducto].cantidad--;
        cantidadProductoFinal = memoria[indiceProducto].cantidad;
        if (cantidadProductoFinal === 0) {
            memoria.splice(indiceProducto, 1);
        }
        localStorage.setItem("productos", JSON.stringify(memoria));
    }

    actualizarNumeroCarrito();
    return cantidadProductoFinal;
}

/** Agrega cantidad a un objeto producto */
function getNuevoProductoParaMemoria(producto) {
    return { ...producto, cantidad: 1 };
}

/** Actualiza el número del carrito del header */
function actualizarNumeroCarrito() {
    let cuenta = 0;
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    if (memoria.length > 0) {
        cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    }
    cuentaCarritoElement.innerText = cuenta;
}

/** Reinicia el carrito */
function reiniciarCarrito() {
    localStorage.removeItem("productos");
    actualizarNumeroCarrito();
}

actualizarNumeroCarrito();