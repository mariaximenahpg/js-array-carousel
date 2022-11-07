// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// array di immagini
const picsContainer = document.querySelector(".pics");
const imgCarousel = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

// aggiunti elementi
for (let i = 0; i < imgCarousel.length; i++) {
    const image = imgCarousel[i];
    let pic = document.createElement('div');
    pic.classList.add("pic");
    pic.innerHTML =`<img src="${image}"/>`;
    
    picsContainer.append(pic);
    if ( i === 0 ) {
        pic.classList.add("active");
    }    
}

let imageIndex = 0;
const pics = document.querySelectorAll(".pic");

pics[imageIndex].classList.add("active");

// pulsante up: aggiunta evento click
const btnUp = document.querySelector(".btn-up");

btnUp.addEventListener('click', function() {
    pics[imageIndex].classList.remove("active"); 
    if (imageIndex === 0) {
        imageIndex = imgCarousel.length -1;
    } else {
        imageIndex--;
    }
    pics[imageIndex].classList.add("active");    
});

// pulsante down: aggiunta evento click
const btnDown = document.querySelector(".btn-down");

btnDown.addEventListener('click', function() {
    pics[imageIndex].classList.remove("active");
    if (imageIndex === imgCarousel.length - 1) {
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    pics[imageIndex].classList.add("active");       
});