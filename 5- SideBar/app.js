//Acceder au bouton permettant de defiler le menu 
const navToggle = document.querySelector('.nav-toggle');

//Acceder au bouton permettant de fermer le menu
const navExit = document.getElementById('close-btn');

//Acceder au deuxieme format de la navbar
const links = document.querySelector('.nav-links');

navToggle.addEventListener('click', function(){
    links.classList.add('show-links');
});

navExit.addEventListener('click', function(){
    links.classList.remove('show-links');
});