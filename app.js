//Variables,

const open = document.querySelector('.button');
const close = document.querySelector('.bar');
const bar = document.querySelector('.barOpen');


//Events,

open.addEventListener('click', openBar);
close.addEventListener('click', closeBar)



//Functions,

function openBar() {
    open.style.visibility = 'hidden' ;
    close.style.visibility = 'visible' ;
    bar.style.visibility = 'visible'
}

function closeBar() {
    close.style.visibility = 'hidden' ;
    open.style.visibility = 'visible' ;
    open.style.marginTop = '355px' ;
    bar.style.visibility = 'hidden'
}