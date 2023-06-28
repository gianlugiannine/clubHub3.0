


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



const buyButtons = document.querySelectorAll('.buy-button');
const carrito = document.getElementById('carrito');
const mensajeError = document.getElementById('mensaje-error');
const vaciarCarritoButton = document.getElementById('vaciar-carrito');
const checkOutButton = document.querySelector('.check-out');

let productoAgregado = false;

function agregarProducto(precio) {
  if (!productoAgregado) {
    const producto = document.createElement('li');
    producto.textContent = `Producto seleccionado: $${precio}`;
    
    carrito.appendChild(producto);

    productoAgregado = true;

    if (mensajeError) {
      mensajeError.style.display = 'none';
    }
    
    actualizarBotonCheckOut();
  } else {
    if (mensajeError) {
      mensajeError.style.display = 'block';
    }
  }
}

function vaciarCarrito() {
  carrito.innerHTML = '';
  productoAgregado = false;

  actualizarBotonCheckOut();
}

function actualizarBotonCheckOut() {
  if (productoAgregado) {
    checkOutButton.style.display = 'block';
  } else {
    checkOutButton.style.display = 'none';
  }
}
checkOutButton.style.display = 'none';
function actualizarBotonCheckOut() {
  if (productoAgregado && carrito.childElementCount > 0) {
    checkOutButton.style.display = 'block';
  } else {
    checkOutButton.style.display = 'none';
  }
}

