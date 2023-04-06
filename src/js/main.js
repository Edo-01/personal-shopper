'use strict';

let elemLogo = document.querySelector('#elem-logo');

document.addEventListener('DOMContentLoaded', function() {
    elemLogo.classList.add('logo-end');
    
})


let imgUnoHome = document.querySelector('#img-1-home');

document.addEventListener('DOMContentLoaded', function() {
    imgUnoHome.classList.add('copertura-vuota');
    
})

 
// --------menu dropdown

let menuHamburgher = document.querySelector('#menu-hamburgher');
let colonnaMenu20 = document.querySelector('#colonna-menu-20');
let colonnaMenu80 = document.querySelector('#colonna-menu-80');
let contenutiDropdown = document.querySelector('#contenuti-dropdown');
let closeMenuDrop = document.querySelector('#close-menu-drop');
let apriDrop = document.querySelector('#apri-drop');


menuHamburgher.style.display = 'none';

apriDrop.addEventListener('click', function(e){  // --------adesso il trigger è il click sul body per l'apertura 
    e.stopPropagation();
    menuHamburgher.removeAttribute('style');
    setTimeout(function(){
        colonnaMenu20.classList.add('menu-colonna-20-aperto');
        colonnaMenu80.classList.add('menu-colonna-80-aperto');
    },100)
    setTimeout(function(){
        contenutiDropdown.classList.add('stato-finale-trasparente');
    },1300)
    
})

closeMenuDrop.addEventListener('click', function(e){
    e.stopPropagation();
    colonnaMenu20.classList.remove('menu-colonna-20-aperto');
    colonnaMenu80.classList.remove('menu-colonna-80-aperto');
    contenutiDropdown.classList.remove('stato-finale-trasparente');
    setTimeout(function(){
        menuHamburgher.style.display = 'none';
    },1800)
    
})


// ----------menu dropdown

//  --------carosello marchi


let muoviDxCaroselloMarchi = document.querySelector('#muovi-dx-marchi');
let muoviSxCaroselloMarchi = document.querySelector('#muovi-sx-marchi');
let caroselloMarchi = document.querySelector('#carosello-marchi');

muoviDxCaroselloMarchi.addEventListener('click', function(){
    
    caroselloMarchi.scrollBy({top:0, left:100,behavior:'smooth'});
})
muoviSxCaroselloMarchi.addEventListener('click', function(){
    caroselloMarchi.scrollBy({top:0, left:-100,behavior:'smooth'});
})

//  --------carosello marchi

//  --------carosello servizi


let muoviDxSliderHome = document.querySelector('#freccia-slider-home-dx');
let muoviSxSliderHome = document.querySelector('#freccia-slider-home-sx');
let sliderHome = document.querySelector('#carosello-home-servizi');

muoviDxSliderHome.addEventListener('click', function(){
    
    sliderHome.scrollBy({top:0, left:100,behavior:'smooth'});
})
muoviSxSliderHome.addEventListener('click', function(){
    sliderHome.scrollBy({top:0, left:-100,behavior:'smooth'});
})

//  --------carosello servizi




//  --------animazione header

let intestazioneHeader = document.querySelector('#intestazione-header');
let baseHeader = document.querySelector('#base-header');
let logoHeader = document.querySelector('#logo-header');

var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
    if(scrollBefore > scrolled){
        scrollBefore = scrolled;
        baseHeader.classList.add('impagninazione-full');
        intestazioneHeader.classList.remove('intestazione-header-invisibile');
        logoHeader.classList.remove('visibilita-end');
        apriDrop.classList.remove('visibilita-end');
        
    }else{
        scrollBefore = scrolled;
        baseHeader.classList.remove('impagninazione-full');
        intestazioneHeader.classList.add('intestazione-header-invisibile');
        logoHeader.classList.add('visibilita-end');
        apriDrop.classList.add('visibilita-end');
    }
})


window.addEventListener('scroll', function(){
    if(window.pageYOffset === 0){
        intestazioneHeader.classList.remove('intestazione-header-invisibile');
        baseHeader.classList.remove('impagninazione-full');
      }
})

//  --------animazione header



// ----------link


let linkChiSonoDaHome = document.querySelector('#botton-home-chi-sono');

linkChiSonoDaHome.addEventListener('click', function(){
    location.href = './about.html';
})

let linkHomeToContact = document.querySelector('#link-home-to-contact');

linkHomeToContact.addEventListener('click', function(){
    location.href = './contatti.html';
})

let linkHomeToPersonal = document.querySelector('#servizo-personal-sh');
let linkHomeToGuardaroba = document.querySelector('#servizio-guardaroba');
let linkHomeToImmagine = document.querySelector('#servizio-immagine');
let linkHomeToVolto = document.querySelector('#servizio-volto');

linkHomeToPersonal.addEventListener('click', function(){
    location.href = './servizi/personal-shopping.html';
})
linkHomeToGuardaroba.addEventListener('click', function(){
    location.href = './servizi/styling-guardaroba.html';
})
linkHomeToImmagine.addEventListener('click', function(){
    location.href = './servizi/consulenza-immagine.html';
})
linkHomeToVolto.addEventListener('click', function(){
    location.href = './servizi/styling-del-volto.html';
})


// ----------link







// ------------ animazione footer

let patLogoFooter = document.querySelectorAll('.svg-triangolo-footer path ');


patLogoFooter.forEach(function(elemento) {
    elemento.addEventListener('mouseover', function(){
        if(elemento.style.fill !== '#fff'){
            elemento.style.fill = '#fff'
        } 
        
    })
});


// ------------ animazione footer