//Acceder au  bouton permettant de defiler la reponse 
const plusBtns = document.querySelectorAll(".plus-btn");

plusBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const button = e.currentTarget;
        const minusButton = e.currentTarget.nextElementSibling;
        const question = e.currentTarget.parentElement.parentElement.nextElementSibling;
        question.classList.add('show');
        button.classList.add('hide-btn');
        minusButton.classList.add('show-btn');
    });
});

//Acceder au bouton permettant de cacher la reponse
const minusBtns = document.querySelectorAll(".minus-btn");

minusBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const button = e.currentTarget;
        const plusButton = e.currentTarget.previousElementSibling;
        const question = e.currentTarget.parentElement.parentElement.nextElementSibling;
        question.classList.remove('show');
        button.classList.remove('show-btn');
        plusButton.classList.remove('hide-btn');
    });
});