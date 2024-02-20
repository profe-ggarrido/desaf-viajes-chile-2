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




const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0);
})


// $(document).ready(function() {
//     var navbar = $('#navbar');
//     var navbarHeight = navbar.outerHeight();

//     $(window).scroll(function() {
//         if ($(this).scrollTop() > navbarHeight) {
//             navbar.addClass('fixed-top');
//         } else {
//             navbar.removeClass('fixed-top');
//         }
//     });
// });


// **-- no sirvió **

// $(function() {
//     $("a").click(function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $("html, body").animate({
//                 scrollTop: $(hash).offset().top
//             }, 800);
//         }
//     });
// });


$(document).scroll( function(e){
    const y = $("html").scrollTop();
    if ( y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})

