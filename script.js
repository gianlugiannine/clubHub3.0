
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


// verifica que en el footer se haya ingresado un email valido
function validarEmail() {
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje");
    
    if (email.indexOf("@") > -1) {
        mensaje.innerText = "Gracias por suscribirte";
        mensaje.classList.add("mensaje-exito");
    } else {
        mensaje.innerText = "Por favor, ingresa un email valido";
        mensaje.classList.add("mensaje-error");
    }
    }
