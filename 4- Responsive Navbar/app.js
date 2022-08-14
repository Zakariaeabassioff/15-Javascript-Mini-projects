//Acceder au bouton permettant de defiler les liens de la navbar
const navToggle = document.querySelector('.nav-toggle');

//Acceder au deuxieme format de la navbar
const links = document.querySelector('.nav-links-toggle');


navToggle.addEventListener('click', function(){
    //Si les liens apparaissent deja, on les enleve
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }else{ 
        //sinon on defile la liste des liens
        links.classList.add('show-links');
    }
});