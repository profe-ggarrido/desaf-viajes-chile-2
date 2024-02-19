const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0);
})


 /* Agrega o quita la clase 'active' al menú al hacer clic en el botón de hamburguesa */
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu').toggleClass('active');
    });
});
