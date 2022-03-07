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
let imagens = document.querySelectorAll('.foto')
let bfoto = document.querySelectorAll('b-foto')
let modal = document.querySelector('.modal')
let modalimg = document.querySelector('.img-modal')
let bntclose = document.querySelector('#bnt-close')
let srcVal="";


for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        srcVal = imagens[i].getAttribute('src');
        modalimg.setAttribute('src', srcVal);
        modal.classList.toggle('modal-active');
    });
}

bntclose.addEventListener('click', function(){
    modal.classList.toggle('modal-active');
})






