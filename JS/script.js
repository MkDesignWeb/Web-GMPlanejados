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
let fmodal = document.querySelector('.fundom')
let imagens = document.querySelectorAll('.foto')
let bfoto = document.querySelectorAll('.b-foto')
let modal = document.querySelector('.modal')
let modalimg = document.querySelector('.img-modal')
let bntclose = document.querySelector('#bnt-close')
let srcVal="";
let titulonome = document.querySelectorAll('.texth2')
let tituloval = ""
let txtmodal = document.querySelector('.txtmodal')
let descnome = document.querySelectorAll('.textp')
let descval = ""
let descmodal = document.querySelector('.descmodal')


 for(let i =0; i<imagens.length;i++){
     bfoto[i].addEventListener('click',function(){
         srcVal = imagens[i].getAttribute('src');
         modalimg.setAttribute('src', srcVal);
         modal.classList.toggle('modal-active');
         fmodal.classList.toggle('active')

     });
 }

for(let a =0; a<titulonome.length;a++){
    bfoto[a].addEventListener('click',function(){
        tituloval = titulonome[a].innerHTML
        txtmodal.innerHTML = tituloval 

    })
}

for(let b =0; b<descnome.length;b++){
    bfoto[b].addEventListener('click',function(){
        descval = descnome[b].innerText
        descmodal.innerHTML = descval 

    })
}

bntclose.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
    fmodal.classList.toggle('active')
})

fmodal.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
    fmodal.classList.toggle('active')
})



