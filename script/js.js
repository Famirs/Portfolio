const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.hamburger__menu'),
closer = document.querySelector('.hamburger__menu_close');
hamburger.addEventListener('click', function(){
    menu.classList.add('hamburger__menu-active');
});
closer.addEventListener('click', function(){
    menu.classList.remove('hamburger__menu-active');
});
const procent = document.querySelectorAll('.procent__item_mini-procent'),
divider = document.querySelectorAll('.procent__divider');
procent.forEach(function(item, i) {
    divider[i].style.width = item.innerHTML;
    });