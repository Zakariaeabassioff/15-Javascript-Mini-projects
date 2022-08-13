//Composante d'une couleur format HEX
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Acceder au bouton qui va changer la couleur du bg.
const btn = document.getElementById("btn");
//Acceder au span affichant la couleur actuel du bg.
const color = document.querySelector(".color");
//Acceder au main.
const main = document.querySelector('.main');

btn.addEventListener('click', function(){
    //Variable qui va stocker la couelur hex.
    let randColor = '#';

    //Boucle generant la couleur sous format hex et la stockant dans la var ranColor.
    for(let i=0; i<6; i++){
        randColor += hex[Math.floor(Math.random()*hex.length)];
    }

    //Changer le bg du main.
    main.style.backgroundColor = randColor;

    //Changer le text du span affichant la couleur actuel.
    color.textContent = randColor;
})