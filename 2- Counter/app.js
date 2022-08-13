//Acceder au bouton DECREASE
const btnDecrease = document.getElementById('dec-btn');

//Acceder au bouton RESET
const btnReset = document.getElementById('res-btn');

//Acceder au bouton INCREASE
const btnIncrease = document.getElementById('inc-btn');

//Acceder au span affichant le compteur
const countNumber = document.getElementById('countNumber');

//Acceder a la couleur du compteur
const countColorNum = document.getElementById('color');

//Var global pour le compteur
let count = 0;

//Couleur du nombre afficher par le compteur
function countColor(count){
    if(count > 0){
        countColorNum.style.color = 'green';
    }else if (count < 0){
        countColorNum.style.color = 'red';
    }else{
        countColorNum.style.color = '#000';
    }
}

//Configurer le bouton RESET
btnReset.addEventListener('click', function(){
    count = 0;
    countNumber.textContent = count;
    countColor(count);
});

//Configurer le bouton INCREASE
btnIncrease.addEventListener('click', function(){
    count = parseInt(countNumber.textContent)+1;
    countNumber.textContent = count;
    countColor(count);
});

//Configurer le bouton DECREASE
btnDecrease.addEventListener('click', function(){
    count = parseInt(countNumber.textContent)-1;
    countNumber.textContent = count;
    countColor(count);
});




