
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




// Función que se ejecuta cuando se hace clic en el botón
function enviarDatos() {
    // Mostrar mensaje emergente
    alert("¡Sus datos fueron enviados correctamente!");
}

// Agregar un event listener al botón para ejecutar la función cuando se hace clic en él
document.getElementById("enviarDatosBtn").addEventListener("click", enviarDatos);
