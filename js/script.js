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
$('.cooperation__row').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
});

//Add classes on click header btn
$(".header__nav__btn").on("click", function(){
    $(".header__nav__btn").toggleClass("clicked");
    $(".header__tools__item.btn-border, .header__nav").toggleClass("show");
    $(".header__tools__item").toggleClass("hide");
    $("body").toggleClass("noScroll");
});

//---------------------show/hide register/login blocks---------------------
function loginShow(){
    $(".login").toggleClass("show").removeClass("hide");
    if(document.body.offsetWidth>768){
        $("body").toggleClass("noScroll");
    }
    $(".login--wrapper").toggleClass("show").removeClass("hide");
}
function loginHide(){
    $(".login").toggleClass("hide").removeClass("show");
    if(document.body.offsetWidth>768){
        $("body").removeClass("noScroll");
    }
    $(".login--wrapper").toggleClass("hide").removeClass("show");
}
function registerShow(){
    $(".register").toggleClass("show").removeClass("hide");
    if(document.body.offsetWidth>768){
        $("body").toggleClass("noScroll");
    }
    $(".register--wrapper").toggleClass("show").removeClass("hide");
}
function registerHide(){
    $(".register").toggleClass("hide").removeClass("show");
    if(document.body.offsetWidth>768){
        $("body").removeClass("noScroll");
    }
    $(".register--wrapper").toggleClass("hide").removeClass("show");
}

$("#log-in").on("click", function(){
    loginShow();
});
$(".login__close").on("click", function(){
    loginHide();
});
$(".login__registration__link").on("click", function(){
    loginHide();
    registerShow();
});
$(".register__registration__link").on("click", function(){
    registerHide();
    loginShow();
});
$(".register__close").on("click", function(){
    registerHide();
});

//---------------------change input type---------------------
function changeInputType(showPass, showPassImg){
    if(showPass.type==='text'){
        showPass.type='password';
        showPassImg.src = "img/icons/eye.svg";
    }else{
        showPass.type='text';
        showPassImg.src = "img/icons/eye-open.svg";
    }
}

var showPass = document.getElementById('password');
var showPassImg = document.getElementById('password-visible');
var showPassRegister = document.getElementById('register-password');
var showPassImgRegister = document.getElementById('register-password-visible');
var showPassRegisterRepeat = document.getElementById('register-password-repeat');
var showPassImgRegisterRepeat = document.getElementById('register-password-visible-repeat');

$(showPassImg).on("click", function(){
    changeInputType(showPass, showPassImg);
});

$(showPassImgRegister).on("click", function(){
    changeInputType(showPassRegister, showPassImgRegister);
});

$(showPassImgRegisterRepeat).on("click", function(){
    changeInputType(showPassRegisterRepeat, showPassImgRegisterRepeat);
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
