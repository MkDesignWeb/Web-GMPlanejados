$(document).ready(function(){
$(".menu-mb").click(function () {
    $(this).toggleClass("active")
    $(".nav-list").toggleClass("active")
});

$(".bnt-menu").click(function () {
    $(".menu-mb").toggleClass("active")
    $(".nav-list").toggleClass("active")
});

});

window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
})




