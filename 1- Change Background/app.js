//Tableau de couleurs.
const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

//Acceder au bouton qui va changer la couleur du bg.
const btn = document.getElementById("btn");
//Acceder au span affichant la couleur actuel du bg.
const color = document.querySelector(".color");
//Acceder au main.
const main = document.querySelector('.main');

btn.addEventListener("click", function(){
    //Avoir un nombre random entre 0 - 3.
    const randomNumber = Math.floor(Math.random()*4);
    //Changer le bg du main.
    main.style.backgroundColor = colors[randomNumber];
    //Changer le text du span affichant la couleur actuel.
    color.textContent = colors[randomNumber];
});
