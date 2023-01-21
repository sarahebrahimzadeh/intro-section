$('.mobile__menu').on('click',function(){
    $('.navbar__items').toggleClass('navbar__items--is-active');
    $('.overlay').toggleClass('overlay--is-active')
});
$('.menu__close').on('click',function(){
    $('.navbar__items').removeClass('navbar__items--is-active');
    $('.overlay').removeClass('overlay--is-active')
});