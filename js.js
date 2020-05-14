'use strict';

//Ability-item in Service

let num = 0;
let info = document.querySelectorAll('.ability-item-info')
let ability = document.querySelectorAll('.ability-item');
let massAbility = []

function saturn(e) {
    let num = massAbility.indexOf(this);
    removeClass(info, 'hidden');
    info[num].classList.add('hidden');
}

function removeClass(massiv, className) {
    for (let item of massiv) item.classList.remove(className)
}

for (let i = 0; i < ability.length; i++) {
    massAbility.push(ability[i]);
    ability[i].addEventListener ('click', saturn);
} 
 

// Translate blockqote

let quotes = document.querySelectorAll('.quotes-item')
let btnRight = document.querySelector('.quotes-right-btn')
let btnLeft = document.querySelector('.quotes-left-btn')
let numCurrent = 0;
let widthQuotes = document.querySelector('.quotes-container')
let size = widthQuotes.clientWidth

btnRight.addEventListener('click', nextBtn);
btnLeft.addEventListener('click', prevBtn)

displayBtn()

function nextBtn() {
    quotes[numCurrent].style.transform = "translateX(" + size + "px)";
    quotes[numCurrent+1].style.transform = "translateX(0px)";
    console.log(numCurrent)
    numCurrent++;
    displayBtn();
}

function prevBtn() {
    quotes[numCurrent].style.transform = "translateX(" + -size + "px)";
    quotes[numCurrent-1].style.transform = "translateX(0px)";
    numCurrent--;
    displayBtn();
}

function displayBtn(){
if (numCurrent == 0) {
    btnLeft.style.display ='none'
} else {
    btnLeft.style.display ='block'
};
    
if (numCurrent == 2) {
    btnRight.style.display ='none'
} else {
    btnRight.style.display ='block'
}
}

