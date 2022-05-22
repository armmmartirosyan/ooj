/*$(".btn-border").on("click", function(){
    $(".btn-border").toggleClass("clocked");
});*/

//AOS animation during scroll
AOS.init();

//Owl carousel-Banner
$('.banner__slider').owlCarousel({
    loop:true,
    nav:true,
    items:1
});

//Add classes on click header btn
$(".header__nav__btn").on("click", function(){
    $(".header__nav__btn").toggleClass("clicked");
    $(".header__tools__item.btn-border, .header__nav").toggleClass("show");
    $(".header__tools__item").toggleClass("hide");
    $("body").toggleClass("noScroll");
});
$("#log-in").on("click", function(){
    $(".login").toggleClass("show").removeClass("hide");
    if(document.body.offsetWidth>768){
        $("body").toggleClass("noScroll");
    }
    $(".login--wrapper").toggleClass("show").removeClass("hide");
});
$(".login__close").on("click", function(){
    $(".login").toggleClass("hide").removeClass("show");
    if(document.body.offsetWidth>768){
        $("body").removeClass("noScroll");
    }
    $(".login--wrapper").toggleClass("hide").removeClass("show");
});

var showPass = document.getElementById('password');
var showPassImg = document.getElementById('password-visible');
$("#password-visible").on("click", function(){
    if(showPass.type==='text'){
        showPass.type='password';
        showPassImg.src = "img/icons/eye.svg";
    }else{
        showPass.type='text';
        showPassImg.src = "img/icons/eye-open.svg";
    }
});

//document.getElementById('test').setAttribute('type', 'password');

//Checking information
/*
var usName = document.getElementById("username");
var pWord = document.getElementById("password");
var submit = document.getElementById("login-submit");

usName.oninput = function(event) {
    //
}
$(submit).on("click", function (){
    if(usName.value === "armen" && pWord.value === "1209"){
        alert("Hi Armen!");
    }
});*/
