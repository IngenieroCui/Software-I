document.addEventListener('DOMContentLoaded', (event) => {
    obtenerProductos();
});

function obtenerProductos() {
    fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('productosDisponibles', JSON.stringify(data));
            console.log('Productos cargados:', data);
        })
        .catch(error => console.error('Error al obtener los productos:', error));
}