// **** MANEJOS DE EVENTOS/INTERACTIVIDAD ***

const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0);
})


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function() {
    var navbar = $('#navbar');
    var navbarHeight = navbar.outerHeight();

    $(window).scroll(function() {
        if ($(this).scrollTop() > navbarHeight) {
            navbar.addClass('fixed-top');
        } else {
            navbar.removeClass('fixed-top');
        }
    });
});


$(document).scroll( function(e){
    const y = $("html").scrollTop();
    if ( y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})




// Función que se ejecuta cuando se hace clic en el botón
function enviarDatos() {
    // Mostrar mensaje emergente
    alert("¡Sus datos fueron enviados correctamente!");
}

// Agregar un event listener al botón para ejecutar la función cuando se hace clic en él
document.getElementById("enviarDatosBtn").addEventListener("click", enviarDatos);

function mostrarAlerta(mensaje) {
    alert(mensaje);
}