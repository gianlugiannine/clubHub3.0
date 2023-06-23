
var mensaje1 = "Hola";
var mensaje2 = " Mundo";
var mensaje = mensaje1 + mensaje2; 

document.write(mensaje);


function checkAge(age) {
    if (age >= 18) {
      return true;
    } 
    else {
      return confirm('Acceso denegado. Su edad debe ser 18');
    }

  }
  
  let age = prompt('Ingresa tu edad a continuacion', 18);
  
  if ( checkAge(age) ) {
    alert( 'Acceso permitido, Disfruta de la fiesta!' );
  } 
  else {
    alert( 'Acceso denegado. Su edad debe ser 18' );
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