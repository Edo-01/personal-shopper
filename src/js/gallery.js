'use strict';

let elemLogo = document.querySelector('#elem-logo');






 
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



let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



let navMega = document.querySelectorAll('#nav-mega h2');  //tutti i h2 del menu desk 
let linkMenu = document.querySelectorAll('#nav-mega a'); //tutti gli A del menu desk 
let paginaCorrente = window.location.href;

console.log(paginaCorrente)
console.log(linkMenu[0].href)

for (let i = 0; i < navMega.length; i++) {
  if(paginaCorrente == linkMenu[i].href) {
    linkMenu[i].classList.add('sottolineaSi');
    linkMenu[i].classList.remove('sottolineaNo');
  }
}  


for (let i = 0; i < navMega.length; i++) {
    navMega[i].addEventListener('mouseover', function(){
        if(paginaCorrente !== linkMenu[i].href) {
            linkMenu[i].classList.remove('sottolineaNo');
            linkMenu[i].classList.add('sottolineaSi');
        }
    
  })
}                                       

for (let i = 0; i < navMega.length; i++) {
    navMega[i].addEventListener('mouseout', function(){
        if(paginaCorrente !== linkMenu[i].href) {
            linkMenu[i].classList.add('sottolineaNo');
        }
      
   
    // if(paginaCorrente !== linkMenu[i].href ) {
    //   linkMenu[i].classList.remove('sottolineaSi');
    // }
  })
}
