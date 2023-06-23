var edad = 0; 

while (edad < 18) {
  edad = prompt("¿Cuál es tu edad?");
  
  if (edad >= 18) {
    alert("Bienvenido/a al sitio web. ¡Disfruta tu visita!");
  } else {
    alert("Lo siento, el acceso está denegado.");
  }
}


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