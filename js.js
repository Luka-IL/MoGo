'use strict';
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
 

