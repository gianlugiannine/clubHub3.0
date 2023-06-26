
// function verificarEdad() {
//     var edadIngresada = localStorage.getItem("edad");
  
//     if (edadIngresada) {
//       mostrarBienvenida();
//     } else {
//       var edad = prompt("Por favor, ingresa tu edad:");
  
//       if (edad && edad >= 18) {
//         localStorage.setItem("edad", edad);
//         mostrarBienvenida();
//       } else {
//         alert("Lo siento, debes tener al menos 18 años para ingresar a ClubHub.");
//         window.location.href = "https://www.otrasitio.com";
//       }
//     }
//   }
  
//   function mostrarBienvenida() {
//     alert("¡Bienvenido a ClubHub! Disfruta de la fiesta.");
//   }
  
//   verificarEdad();

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



var carrito = [];

function agregarAlCarrito(precio) {
  carrito.push(precio);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  var carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";

  for (var i = 0; i < carrito.length; i++) {
    var producto = carrito[i];
    var li = document.createElement("li");
    li.innerHTML = "Producto " + (i + 1) + " - $" + producto;
    var button = document.createElement("button");
    button.innerHTML = "Eliminar";
    button.onclick = (function (index) {
      return function () {
        eliminarDelCarrito(index);
      };
    })(i);
    li.appendChild(button);
    carritoElement.appendChild(li);
  }
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}
