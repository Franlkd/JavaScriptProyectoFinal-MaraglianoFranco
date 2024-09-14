// Funcion para agregar al carrito

function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Buscar el producto en el carrito
  const productoExistente = carrito.find(producto => producto.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1});
  }

  // Actualizar el localStorage del carrito
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // actualizar el contador del carrito
  actualizarContadorCarrito();
}

// Funcion para actualizar contador del carrito

function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const totalItems = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);
  document.getElementById('cart-count').textContent = totalItems;
}

// Función para eliminar un producto específico del carrito
function eliminarDelCarrito(nombre) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Filtrar el producto por nombre para eliminarlo
  carrito = carrito.filter(producto => producto.nombre !== nombre);

  // Actualizar el localStorage del carrito
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar el contador del carrito
  actualizarContadorCarrito();

  // Llamar a la función que actualiza la vista del carrito
  if (typeof mostrarProductosCarrito === 'function') {
    mostrarProductosCarrito();
  }
}

// Función para limpiar todo el carrito
function limpiarCarrito() {
  // Vaciar el carrito en el localStorage
  localStorage.removeItem('carrito');

  // Actualizar el contador del carrito
  actualizarContadorCarrito();

  // Llamar a la función que actualiza la vista del carrito
  if (typeof mostrarProductosCarrito === 'function') {
    mostrarProductosCarrito();
  }
}

// Llamar a la función al cargar la página para mostrar el número correcto
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);