    // Función para mostrar los productos en compras.html
function mostrarProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('carrito-items');
            
    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            contenedor.innerHTML = '';
            carrito.forEach(producto => {
                const productoHTML = `
                    <div class="producto">
                        <h3>${producto.nombre}</h3>
                        <p>Precio: $${producto.precio}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <hr>
                    </div>
                `;
                contenedor.innerHTML += productoHTML;
            });
    }
}

function Comprar() {
    
    const botonComprar = document.getElementById('botonComprar');
    
    botonComprar.addEventListener('click', () => {
      
      const mensaje = document.createElement('h1');
      mensaje.textContent = Swal.fire({
        position: "mid",
        icon: "success",
        title: "Tu compra ha sido realizada",
        showConfirmButton: false,
        timer: 1500
      });

      document.getElementById('contenedor').appendChild(mensaje);
    });
  }
  

// Llama a esta función al cargar la página compras.html
document.addEventListener('DOMContentLoaded', mostrarProductosCarrito);

Comprar()